"use client";
import { Projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Page = ({ params }) => {
  const project = Projects.find((proj) => slugify(proj.title) === params.slug);

  if (!project) return notFound();

  return (
    <div className="bg-[#faeee4]">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[100vh]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-black/30 text-white p-4 rounded-lg max-w-[90%]">
          <h2 className="text-3xl md:text-6xl font-bold">{project.title}</h2>
          <p className="text-lg md:text-2xl mt-2">{project.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 py-10 bg-white min-h-screen">
        {/* Left - Sticky Image */}
        <div className="h-[300px] md:h-[100vh] md:sticky md:top-10">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right - Text Content */}
        <div className="space-y-10 w-full md:w-[90%]">
          <p className="text-[#5a2b22] text-base md:text-lg leading-relaxed">
            {project.details.intro}
          </p>

          {project.details.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl font-semibold text-[#5a2b22] mb-2">
                {section.title}
              </h3>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl mb-3 w-full object-cover"
                />
              )}
              <p className="text-sm md:text-base text-[#9b5e50] leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
