"use client";
import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  const awardsData = [
    {
      title: "Best Interior Design Agency",
      description:
        "Awarded for outstanding innovation in interior design concepts",
      year: "2025",
    },
    {
      title: "Excellence in Custom Furniture",
      description:
        "Recognized for creating bespoke, high-quality furniture pieces",
      year: "2024",
    },
    {
      title: "Outstanding Room Makeover",
      description: "Honored for transforming spaces with impeccable style",
      year: "2023",
    },
    {
      title: "Top Emerging Design Studio",
      description: "Celebrated for redefining modern interior aesthetics",
      year: "2022",
    },
    {
      title: "Client Choice Award",
      description:
        "Voted for exceptional customer service and design expertise",
      year: "2021",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-troscon-bg py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="container mx-auto mb-16" variants={itemVariants}>
        <p className="text-sm uppercase tracking-wider text-troscon-dark-text opacity-70 mb-2">
          • Awards & Recognition
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-troscon-dark-text leading-tight">
          Our Achievements: <br className="hidden sm:inline" />
          Celebrating Excellence <br className="hidden sm:inline" /> in Design
        </h2>
      </motion.div>

      {/* Awards List */}
      <motion.div className="container mx-auto" variants={containerVariants}>
        {awardsData.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-12 py-6 border-b border-troscon-line items-center ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <div className="col-span-1 text-troscon-dark-text text-xl font-medium text-left">
              {award.title}
            </div>
            <div className="col-span-1 text-troscon-light-text text-base text-left">
              {award.description}
            </div>
            <div className="col-span-1 text-troscon-dark-text text-xl text-left md:text-right font-medium">
              {award.year}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AwardsSection;
