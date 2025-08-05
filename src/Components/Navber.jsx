"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
const Navber = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[#f7efe8] fixed top-5 z-50 rounded-xl  left-0 right-0 max-w-3xl mx-auto text-[#8d493a]"
    >
      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 bg-[#8d493a] p-1 text-white "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/about" className="font-bold text-[16px]">
                  about{" "}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="font-bold text-[16px]">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/" className="font-bold text-[16px]">
                  News{" "}
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn text-xl font-bold">
            Troscán
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about" className="font-bold text-[16px]">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="font-bold text-[16px]">
                Project{" "}
              </Link>
            </li>
            <li>
              <Link href="/" className="font-bold text-[16px]">
                News{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className=" navbar-end">
          <a className="btn bg-[#8d493a] text-white">Contact Us</a>
        </div>
      </div>
      {/* <div className=" p-3 flex justify-between items-center mx-auto ">
        <div className="text-[#8d493a] font-bold">Troscán</div>
        <div>
         
        </div>
        <button className="bg-[#8d493a] text-white">Contact Us</button>
      </div> */}
    </motion.nav>
  );
};

export default Navber;
