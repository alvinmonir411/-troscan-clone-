"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GetinTouch = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.6 });

  return (
    <div className="w-full">
      <section className="relative h-[200vh]">
        {/* Sticky Fullscreen Background Image */}
        <div className="sticky top-0 h-[100vh] w-full">
          <Image
            src="/GetInTouch.avif"
            alt="Get in Touch Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-52 w-full h-full flex justify-center items-center pointer-events-none">
          <motion.div
            ref={cardRef}
            className="bg-[#f8ede3] backdrop-blur-md shadow-xl rounded-xl p-16 w-3xl  mx-auto text-center pointer-events-auto"
          >
            <p className="text-3xl text-[#8d493a] mb-6">
              Ready to reimagine your space? Connect <br />
              with us at Troscán to bring your vision to <br />
              life with our expertise in design and <br /> decoration.
            </p>
            <button className="bg-[#8d493a] text-white px-6 py-3 rounded hover:bg-[#7a3d2c] transition">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetinTouch;
