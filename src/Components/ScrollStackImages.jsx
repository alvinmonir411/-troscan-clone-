"use client";

import { useRef } from "react";
import Image from "next/image";
const ScrollStackImages = () => {
  const slides = [
    {
      img: "/Static1.avif",
      subheading: "01",
      title: "Serene Urban Retreat",
      description: "Where modern comfort meets peaceful sophistication.",
    },
    {
      img: "/Static2.avif",
      subheading: "02",
      title: "Luxurious Coastal Living",
      description: "Bringing the beauty of the shore into your home.",
    },
    {
      img: "/Static3.avif",
      subheading: "03",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
    },
  ];

  return (
    <div className="w-full">
      {slides.map((slide, index) => (
        <div key={index} className="h-screen sticky top-0 z-10">
          {/* Image with fade-in animation */}
          <div className="w-full h-full relative animate-fadeIn">
            <Image
              src={slide.img}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-20" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 text-white">
              <h2 className="text-lg md:text-2xl font-medium tracking-widest uppercase">
                {slide.subheading}
              </h2>
              <h1 className="text-4xl md:text-7xl font-bold mt-2">
                {slide.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base md:text-lg">
                {slide.description}
              </p>
              <button className="mt-5 px-6 py-2 bg-[#f8ede3] text-[#8d493a] font-semibold rounded hover:bg-gray-200 transition">
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ScrollStackImages;
