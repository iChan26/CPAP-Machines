"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);
  const [file, setFile] = useState(null);

  const buttonTexts = ["Live Chat with Us💬", "Need Help❓", "Talk to Support🤝"];

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonTextIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!input.trim() && !file) return;
    const newMsg = { sender: "user", text: input, file };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setFile(null);

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "✅ Thanks for your message! We'll get back to you shortly.",
        },
      ]);
    }, 1500);
  };

  return (
    <div>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#3ba7d7] to-[#1c82aa] text-white px-5 py-3 rounded-full shadow-lg hover:opacity-90 flex items-center gap-2 overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.964 9.964 0 01-4.17-.87L3 20l1.31-3.93A8.964 8.964 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <motion.span
            key={buttonTextIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {buttonTexts[buttonTextIndex]}
          </motion.span>
        </motion.button>
      )}

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 w-96 bg-white shadow-2xl border border-gray-200 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3ba7d7] to-[#1c82aa] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">💬 Borderdme Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.sender === "bot" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm ${
                    msg.sender === "bot"
                      ? "bg-white text-gray-800 self-start"
                      : "bg-[#3ba7d7] text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                  {msg.file && (
                    <div className="mt-2 p-2 bg-gray-200 text-gray-700 rounded-lg text-xs">
                      📎 {msg.file.name}
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="bg-white p-3 rounded-2xl inline-flex gap-1 shadow-sm">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 flex items-center gap-2 bg-white">
             
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message... 😊"
                className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="bg-[#3ba7d7] text-white px-4 py-2 rounded-full hover:bg-[#3089b0] transition text-sm"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
