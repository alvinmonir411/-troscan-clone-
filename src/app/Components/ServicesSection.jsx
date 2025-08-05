"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
const services = [
  {
    id: 1,
    title: "Custom Furniture Design",
    image: "/customFurnitureImg.avif",
  },
  {
    id: 2,
    title: "Room Decoration & Styling",
    image: "/roomDecorationImg.avif",
  },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    image: "/spacePlanningImg.avif",
  },
  {
    id: 4,
    title: "Home Renovations & Remodeling",
    image: "/homeRenovationsImg.avif",
  },
  { id: 5, title: "Lighting Design", image: "/lightingDesignImg.avif" },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    image: "/virtualConsultationsImg.avif",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-[100vh] bg-[#f8ede3] pt-20">
      <div className="flex flex-col md:flex-row bg-[#f8ede3] text-[#8d493a] min-h-screen w-full px-8 py-16">
        {/* Left Image with smooth transition */}
        <div className="relative w-full md:w-1/2 min-h-[500px] flex justify-center items-center">
          <div className="relative w-[90%] aspect-square md:aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Text and Hover List */}
        <div className="w-full md:w-1/2 flex flex-col justify-be mt-10 md:mt-0 md:pl-16">
          <div className="md:-mt-20">
            <span className="uppercase text-sm tracking-wider mb-2">
              • Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-snug mb-8">
              Selecting the ideal <br /> elements to elevate <br /> your space
            </h2>
          </div>
          <div>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 flex items-center border-b border-[#8d493a] px-2 py-3 ${
                    index === activeIndex ? "bg-[#8d493a] text-white" : ""
                  }`}
                >
                  <span
                    className={`text-sm w-10 font-semibold ${
                      index === activeIndex ? "text-white" : "text-[#8d493a]"
                    }`}
                  >
                    0{service.id}
                  </span>
                  <span
                    className={`ml-4 text-lg ${
                      index === activeIndex ? "text-white" : "text-[#8d493a]"
                    }`}
                  >
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
