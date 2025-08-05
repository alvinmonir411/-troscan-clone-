"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
const About = () => {
  return (
    <section className="bg-[#f8ede3] max-h-[calc(100% - 400px)] py-16 md:py-24">
 
      <div className=" mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, Y: 40 }}
            whileInView={{ opacity: 1, Y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between h-full min-h-[500px] py-4"
          >
            {/* Top Content Block */}
            <div>
              <span className="text-[#8d493a] font-medium text-sm tracking-wide">
                • About us
              </span>
              <h2 className="mt-4 text-[#8d493a] text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
                Where Spaces <br /> Inspire, and Design <br /> Comes Alive
              </h2>
            </div>

            {/* Bottom Content Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0, X: -20 }}
              whileInView={{ opacity: 1, scale: 1, X: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#8d493a] text-base leading-relaxed">
                At Troscán, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency.
              </p>
              <p className="mt-4 text-[#8d493a] text-base leading-relaxed">
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you're looking to reimagine your
                living room.
              </p>
              <a
                href="#"
                className="mt-8 inline-block bg-[#8d493a] text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-opacity duration-300"
              >
                More About us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center h-full">
            <Image
              src="/About-img.avif"
              alt="Comfortable living room with modern furniture"
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

export default About;
