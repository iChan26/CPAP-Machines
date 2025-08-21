"use client";
import { ShieldCheck, Truck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Insurance & Financing",
      description:
        "In-network: Medicare, Medicaid, BCBS, Humana, Aetna, UHC PPO • CareCredit for cash-pay."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: "Shipping & Returns",
      description:
        "Free shipping $99+ • 30-day returns • Processing 1–2 business days."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert Support",
      description:
        "Bilingual setup assistance • Compliance coaching • Prescription verification."
    }
  ];

  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-center">
            Making your CPAP journey simple, affordable, and supported every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition duration-300 hover:border-blue-100"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="mb-2 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
