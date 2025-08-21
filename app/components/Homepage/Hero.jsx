"use client";
import React from "react";
import { Image } from "@shopify/hydrogen";
import { ChevronDown, ShieldCheck, Truck, RotateCcw, Users } from "lucide-react";

export default function Hero() {
  const slides = [
    { src: "/images/ocean-sunrise-11-airsense.png", name: "Ocean sunrise 11 AirSense" },
    { src: "/images/airsense-91-airmini.png", name: "AirSense 91 AirMini" },
    { src: "/images/aircurve-10-airmini.png", name: "AirCurve 10 AirMini" },
  ];

  const scrollToMachines = () => {
    const target = document.getElementById("compare");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#fff] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-gray-900 leading-tight">
            CPAP & BiPAP Machines <br />
            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1">
              Insurance Accepted
            </span>{" "}
            & <br />
            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1">
              Ready to Ship
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Explore ResMed AirSense, AirCurve & AirMini. Verify insurance or buy cash-pay.
          </p>

          {/* Features list */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-gray-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-500" size={20} />
              <span>Insurance Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-[#3ba7d7]" size={20} />
              <span>Free Shipping Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="text-green-500" size={20} />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-500" size={20} />
              <span>Bilingual Support</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button
              onClick={scrollToMachines}
              className="group flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-full text-gray-800 
                         bg-white shadow-sm hover:shadow-md 
                         hover:border-[#3ba7d7] hover:text-[#3ba7d7] 
                         transition-all duration-300 ease-out"
            >
              View All Machines
              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#3ba7d7]"
              />
            </button>
          </div>
        </div>

        {/* Right images */}
        <div className="flex-1 w-full">
          <div className="flex justify-center gap-6 flex-nowrap w-full">
            {slides.map((item, i) => (
              <div
                key={i}
                className="group relative transition-transform duration-300 hover:scale-105 flex-shrink"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={220}
                  height={160}
                  className="rounded-lg transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#3ba7d7]"
                />
                <p className="mt-3 text-center font-semibold text-gray-700">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Line separator */}
      <div className="mt-12 border-t border-gray-200 w-full"></div>

      {/* Text content section */}
      <div className="mt-12 px-4 max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
        Finding the right CPAP machine shouldn't be overwhelming. At Border DME, we carry 
        <strong className="text-[#3ba7d7]"> ResMed's most trusted CPAP and BiPAP devices</strong>, from the advanced <strong className="text-[#3ba7d7]">AirSense 11 AutoSet</strong> to the compact 
        <strong className="text-[#3ba7d7]"> AirMini travel CPAP</strong>. Unlike other stores, we accept 
        <strong className="text-[#3ba7d7]"> insurance and cash-pay</strong>, helping you get covered fast. 
        Our bilingual team makes it simple: verify coverage, upload your prescription, 
        and we'll guide you every step of the way.
      </div>
    </section>
  );
}
