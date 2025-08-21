"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Stethoscope, CreditCard, FileCheck } from "lucide-react";

export default function CpapMachineGuide() {
  const [openIndex, setOpenIndex] = useState(null);

  const guides = [
    {
      icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
      title: "How to Choose the Right CPAP Machine",
      description:
        "Auto CPAP adjusts automatically; BiPAP provides two pressures; travel CPAPs are compact. Consider prescription, comfort, noise, and humidification."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      title: "Insurance vs Cash-Pay Options",
      description:
        "Most insurance covers 80–100% of CPAP costs; typical copays $50–$200. We accept insurance, HSA/FSA, and CareCredit for self-pay."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-purple-500" />,
      title: "Prescription & Compliance",
      description:
        "A valid prescription or sleep study is required. Insurance compliance: ≥4 hours/night for 21 of 30 nights. We help with uploads & tracking."
    }
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fafb] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2>CPAP Machine Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know to choose, purchase, and use your CPAP machine with confidence.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  {guide.icon}
                  <span>{guide.title}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 border-t border-gray-100 leading-relaxed">
                  {guide.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
