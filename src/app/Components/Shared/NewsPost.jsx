"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsPost = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden flex flex-col group cursor-pointer"
    >
      <div className="relative w-full h-[600px] overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:opacity-80">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-5 text-[#8d493a]">
        <p className="text-sm mb-1">
          <span className="text-[#8d493a] mr-1">•</span>
          {blog.date}
        </p>
        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
        <p className="text-sm text-[#8d493aa0]">{blog.excerpt}</p>
      </div>
    </motion.div>
  );
};

export default NewsPost;
