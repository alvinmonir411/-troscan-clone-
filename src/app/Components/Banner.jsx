"use client";
import React from "react";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner-img.avif')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8d493a]/30"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Timeless Comfort &<br /> Endless Luxury
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-[#f8ede3] text-[#8d493a] px-6 py-3 text-lg font-semibold rounded-md hover:opacity-90 transition"
          >
            Our Vision
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-[#f8ede3] hover:text-[#8d493a] transition"
          >
            Explore Expertise
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
