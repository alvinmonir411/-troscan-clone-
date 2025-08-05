import React from "react";

const page = () => {
  const Projects = [
    {
      img: "/projects1.avif",
      title: "Where Tradition Meets Mastery",
      description: "Blending Tradition with Modern Elegance",
    },
    {
      img: "/projects2.avif",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
    },
    {
      img: "/projects3.avif",
      title: "Luxurious Coastal Living",
      description: "Bringing the beauty of the shore into your home.",
    },
    {
      img: "/projects4.avif",
      title: "Serene Urban Retreat",
      description: "Where modern comfort meets peaceful sophistication.",
    },
  ];
  return (
    <div className="pt-30">
      <h1 className="text-[#8d493a] font-bold  text-7xl text-center">
        Where Vision <br />
        Meets Design
      </h1>
      <div>
        <div className="container mx-auto md:mb-30 mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {Projects.map((project, index) => (
            <div key={index} className="space-y-4 group">
              <div className="overflow-hidden rounded-xl w-full h-[300px] md:h-[560px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#5a2b22]">
                {project.title}
              </h3>
              <p className="text-sm text-[#9b5e50]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
