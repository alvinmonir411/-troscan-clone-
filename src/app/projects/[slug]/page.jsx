import { Projects } from "@/data/projects";
import { notFound } from "next/navigation";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

const Page = ({ params }) => {
  const project = Projects.find((proj) => slugify(proj.title) === params.slug);

  if (!project) return notFound();

  return (
    <div className="bg-[#faeee4] top-30">
      <div className="block relative h-[100vh] w-full ">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-black/50 text-white p-4 rounded-lg ">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>

      <div className="hidden  md:grid grid-cols-2 bg-white gap-10 px-10 py-10 mx-auto min-h-screen">
        <div className="sticky top-10 h-screen">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="space-y-10 sticky top-0 pr-2 self-start  w-[80%]">
          <p className="text-[#5a2b22] text-base leading-relaxed">
            {project.details.intro}
          </p>

          {project.details.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[#5a2b22] mb-2">
                {section.title}
              </h3>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl mb-3 w-full object-cover"
                />
              )}
              <p className="text-sm text-[#9b5e50] leading-relaxed">
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
