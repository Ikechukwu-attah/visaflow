import React from "react";
import { howItWorkData } from "./data";

const HowItWorks = () => {
  return (
    <section className="relative w-full px-6 md:px-52 py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
      </div>

      {/* Diagonal Cards Layout on Large Screens, Centered on Small Screens */}
      <div className="relative flex flex-col items-center gap-8">
        {howItWorkData.map((data, index) => (
          <div
            key={data.id}
            className={`relative p-6 w-72 text-center bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl shadow-xl hover:scale-105 transition-transform 
            ${
              index === 0
                ? "lg:self-start"
                : index === 1
                ? "lg:self-center"
                : "lg:self-end"
            }
            sm:self-center"
            `}
          >
            <span className="text-4xl text-white">{<data.icon />}</span>
            <h2 className="text-2xl font-semibold mt-3">{data.title}</h2>
            <p className="text-gray-200 mt-2">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
