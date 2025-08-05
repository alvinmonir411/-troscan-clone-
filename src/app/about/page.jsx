import AwardsSection from "@/Components/AwardsSection";
import GetinTouch from "@/Components/GetinTouch";
import NewsCard from "@/Components/NewsCard";
import ServicesSection from "@/Components/ServicesSection";
import AboutSection from "@/Components/Shared/AboutSection";
import TeamMemberCard from "@/Components/Shared/TeamMemberCard";
import WhyUsSection from "@/Components/WhyUsSection";
import Image from "next/image";
import React from "react";

const Page = () => {
  const teamMembers = [
    {
      name: "Emma Collins",
      title: "Creative Director",
      image: "/EmmaCollins.avif",
      alt: "Portrait of Emma Collins",
    },
    {
      name: "Liam Bennett",
      title: "Lead Furniture Designer",
      image: "/Liam.avif",
      alt: "Portrait of Liam Bennett",
    },
    {
      name: "Sophia Turner",
      title: "Interior Stylist",
      image: "/Sophia.avif",
      alt: "Portrait of Sophia Turner",
    },
    {
      name: "Oliver Harris",
      title: "Space Planner",
      image: "/oliver.avif",
      alt: "Portrait of Oliver Harris", // Corrected alt text
    },
    {
      name: "Isabella Reed",
      title: "Lighting Specialist",
      image: "/Isabella.avif",
      alt: "Portrait of Isabella Reed", // Corrected alt text
    },
    {
      name: "Ethan Wright",
      title: "Client Experience Manager",
      image: "/Ethan.avif",
      alt: "Portrait of Ethan Wright", // Corrected alt text
    },
  ];

  return (
    <div className="text-[#8d493a] pt-16 px-8 pb-16">
      <div className="text-center mt-20 mb-12">
        <h1 className="text-7xl font-semibold font-sans leading-tight">
          Crafting Timeless <br /> Spaces with Style
        </h1>
      </div>
      <div className="container mx-auto h-[90vh] mt-6 relative">
        {" "}
        {/* Added 'relative' */}
        <Image
          src="/about.avif"
          alt="About section image"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      {/* About Section */}
      <div className="container mx-auto">
        <AboutSection
          subtitle="• Our Mission"
          title="A Vision Shaped by  Elegance and Expertise"
          description1="We believe every space should tell a story that reflects its unique personality and the people who inhabit it."
          description2="With a thoughtful and intentional approach, we design spaces that exude balance, harmony, and authenticity. Our process is collaborative and meticulous, grounded in the philosophy that true beauty lies in the subtle details that make a space feel like home."
          imageSrc="/about2.avif"
          buttonText="Our Mission"
          buttonLink="/mission"
          reverse
        />
      </div>
      <div className="mt-24 text-center">
        <p className="text-sm uppercase tracking-wider text-[#8d493a] opacity-70 mb-2">
          • Our Team
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-[#8d493a] leading-tight">
          Meet the Visionaries <br className="hidden sm:inline" />
          Behind Troscán
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
      <div className="container mx-auto">
        <ServicesSection />
        <div>
          <WhyUsSection />
        </div>
        <div>
          <AwardsSection />
        </div>
        <GetinTouch />
      </div>
      <div className="container mx-auto">
        <NewsCard />
      </div>
    </div>
  );
};

export default Page;
