// Components/AwardsSection.jsx
import React from "react";

const AwardsSection = () => {
  // Define the awards data directly within this component
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

  return (
    <section className="bg-troscon-bg py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className=" container mx-auto mb-16">
        <p className="text-sm uppercase tracking-wider text-troscon-dark-text opacity-70 mb-2">
          • Awards & Recognition
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-troscon-dark-text leading-tight">
          Our Achievements: <br className="hidden sm:inline" />
          Celebrating Excellence <br className="hidden sm:inline" /> in Design
        </h2>
      </div>

      {/* Awards List Container */}
      <div className="container mx-auto">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-12 py-6 border-b border-troscon-line items-center
                        ${index === 0 ? "border-t" : ""}`}
          >
            <div className="col-span-1 text-troscon-dark-text text-xl font-medium text-left">
              {award.title}
            </div>

            {/* Description */}
            <div className="col-span-1 text-troscon-light-text text-base text-left">
              {award.description}
            </div>

            <div className="col-span-1 text-troscon-dark-text text-xl text-left md:text-right font-medium">
              {award.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
