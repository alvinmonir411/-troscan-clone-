"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/img1.avif",
  "/img2.avif",
  "/img3.avif",
  "/img4.avif",
  "/img5.avif",
  "/img6.avif",
];

const directions = [
  { x: "-300px", y: "-200px", rotate: -10 },
  { x: "0px", y: "-250px", rotate: 5 },
  { x: "300px", y: "-200px", rotate: 12 },
  { x: "-300px", y: "200px", rotate: 8 },
  { x: "0px", y: "250px", rotate: -5 },
  { x: "300px", y: "200px", rotate: -12 },
];

const Transform = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#faeee4] h-[100vh] overflow-hidden">
      {/* Add enough scroll height to animate */}
      <div ref={ref} className="h-[100vh]  relative">
        {/* Sticky burst area stays in center */}
        <motion.div className="  h-[100vh] sticky top-0  flex items-center justify-center">
          {/* Text in the center */}
          <motion.div
            className="absolute  text-center z-10"
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
              scale: useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]),
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#5a2b22] drop-shadow-xl">
              Experience the Design
            </h1>
            <p className="mt-4 text-xl text-[#9b5e50] font-medium">
              Inspired by space. Crafted for elegance.
            </p>
          </motion.div>

          {/* Animated burst of images */}
          {images.map((src, i) => {
            const x = useTransform(
              scrollYProgress,
              [0.2, 0.8],
              ["0px", directions[i].x]
            );
            const y = useTransform(
              scrollYProgress,
              [0.2, 0.8],
              ["0px", directions[i].y]
            );
            const rotate = useTransform(
              scrollYProgress,
              [0.2, 0.8],
              ["0deg", `${directions[i].rotate}deg`]
            );
            const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.1]);

            return (
              <motion.img
                key={i}
                src={src}
                alt={`img-${i}`}
                style={{ x, y, rotate, scale }}
                className="absolute w-40 md:w-56 h-auto object-cover rounded-xl shadow-2xl z-0 transition-transform duration-700 ease-in-out"
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Transform;
