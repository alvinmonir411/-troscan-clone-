"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = ({
  title = "Where Spaces Inspire, and Design Comes Alive",
  subtitle = "• About us",
  description1,
  description2,
  buttonText = "More About us",
  buttonLink = "#",
  imageSrc = "/About-img.avif",
  reverse = false,
}) => {
  return (
    <section className="bg-[#f8ede3] max-h-[calc(100% - 400px)] py-16 md:py-24">
      <div className="mx-auto px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between h-full min-h-[500px] py-4"
          >
            <div>
              <span className="text-[#8d493a] font-medium text-sm tracking-wide">
                {subtitle}
              </span>
              <h2 className="mt-4 text-[#8d493a] text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
                {title.split("<br />").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#8d493a] text-base leading-relaxed">
                {description1}
              </p>
              <p className="mt-4 text-[#8d493a] text-base leading-relaxed">
                {description2}
              </p>
              <a
                href={buttonLink}
                className="mt-8 inline-block bg-[#8d493a] text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-opacity duration-300"
              >
                {buttonText}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center h-full">
            <Image
              src={imageSrc}
              alt="Section image"
              width={600}
              height={750}
              className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
