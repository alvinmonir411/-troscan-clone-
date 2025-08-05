import React from "react";
import FeatureCard from "./FeatureCard";

const featureData = [
  {
    icon: "⚙️", // Placeholder icon. Replace with actual SVG or icon component.
    title: "Tailored Designs for Every Space",
    description:
      "We believe every space is unique, and so should be its design. Our bespoke solutions are crafted to reflect your personality, needs, and lifestyle.",
  },
  {
    icon: "💡", // Placeholder icon. Replace with actual SVG or icon component.
    title: "Attention to Every Detail",
    description:
      "From the finest furniture finishes to the perfect decor accents, we meticulously focus on every detail to ensure flawless results.",
  },
  {
    icon: "🤝", // Placeholder icon. Replace with actual SVG or icon component.
    title: "Seamless Collaboration",
    description:
      "Your vision is our priority. We work closely with you at every step, combining your ideas with our expertise to create spaces you’ll love.",
  },
  {
    icon: "👑", // Placeholder icon. Replace with actual SVG or icon component.
    title: "Timeless Elegance",
    description:
      "Our designs go beyond trends to create spaces that stand the test of time, offering a perfect blend of style, comfort, and functionality.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-troscon-bg py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Added responsive padding */}
      {/* Section Header */}
      <div className="text-center mb-16">
        {" "}
        {/* Increased bottom margin */}
        <p className="text-sm uppercase tracking-wider text-troscon-dark-text opacity-70 mb-2">
          • Why Us?
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-troscon-dark-text leading-tight">
          Elevate Your Space with <br className="hidden sm:inline" /> Expertise
          & Elegance
        </h2>
      </div>
      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {" "}
        {/* Adjusted max-width for wider grid */}
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index} // Using index as key is acceptable here since the list is static
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
