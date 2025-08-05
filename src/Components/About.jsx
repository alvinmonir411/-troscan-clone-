"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import AboutSection from "./Shared/AboutSection";
const About = () => {
  return (
    <section className="bg-[#f8ede3] max-h-[calc(100% - 400px)] py-16 md:py-24">
      <AboutSection
        subtitle="• About us"
        title="Where Spaces Inspire, and Design Comes Alive"
        description1="At Troscán, we believe that every space has a story to tell. As a premier furniture design and room decorating agency."
        description2=" Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room."
        imageSrc="/About-img.avif"
      />
    </section>
  );
};

export default About;
