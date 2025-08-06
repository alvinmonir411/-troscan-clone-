"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="pt-30">
      <h1 className="text-8xl font-semibold text-center text-[#8d493a]">
        Let's Bring Your <br /> Vision to Life
      </h1>{" "}
      <main className="min-h-screen  flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3   w-full "
        >
          {/* Left - Image */}
          <div className="w-full h-[400px] md:h-auto rounded-xl">
            <img
              src="/Contact.avif"
              alt="Glass Chair"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right - Form */}
          <div className="p-8 flex bg-[#fcebdd] border rounded-2xl  flex-col justify-center">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 "
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-[#e8cbb2] rounded-md px-4 py-2 bg-transparent focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-[#e8cbb2] rounded-md px-4 py-2 bg-transparent focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#e8cbb2] rounded-md px-4 py-2 bg-transparent focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-[#e8cbb2] rounded-md px-4 py-2 bg-transparent focus:outline-none"
              />
              <textarea
                rows="8"
                placeholder="Message"
                className="w-full border border-[#e8cbb2] rounded-md px-4 py-2 bg-transparent resize-none focus:outline-none"
              ></textarea>
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                type="submit"
                className="w-full bg-[#c98d7c] text-white font-semibold py-3 rounded-md transition"
              >
                Submit
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default page;
