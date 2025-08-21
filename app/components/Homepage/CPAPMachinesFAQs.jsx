"use client";
import { useState } from "react";

export default function CpapFaqs() {
  const faqs = [
    {
      question: "What's the difference between CPAP, Auto CPAP, and BiPAP?",
      answer:
        "CPAP uses one constant pressure. Auto CPAP adjusts pressure automatically. BiPAP provides two pressures (inhale/exhale) for certain prescriptions.",
    },
    {
      question: "Do I need a prescription to buy a CPAP machine?",
      answer:
        "Yes. A valid prescription or sleep study is required for purchase and insurance coverage.",
    },
    {
      question: "Will my insurance cover a CPAP machine?",
      answer:
        "Most plans cover 80–100%. We verify benefits and explain copays/deductibles before you purchase.",
    },
    {
      question: "How soon can I start therapy after I order?",
      answer:
        "Once your coverage/prescription is verified, most orders ship within 1–2 business days.",
    },
    {
      question: "What if I travel frequently?",
      answer:
        "Consider the ResMed AirMini. It's compact, TSA-friendly, and uses HumidX waterless humidification.",
    },
    {
      question: "How loud are CPAP machines?",
      answer:
        "Many run around 26–30 dBA—similar to a whisper. Check each product's specs.",
    },
    {
      question: "What are the compliance requirements?",
      answer:
        "Typical insurer rule: ≥4 hours/night for 21 of 30 days. We help monitor and report.",
    },
    {
      question: "Can I pay cash if I don't use insurance?",
      answer:
        "Yes. We offer cash-pay, HSA/FSA, and CareCredit financing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            CPAP Machines – FAQs
          </h2>
          <p className="mt-2 text-gray-600">
            Answers to the most common questions about CPAP therapy and equipment
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="ml-4 text-gray-400">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
