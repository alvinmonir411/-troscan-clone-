import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
      {/* Icon Container */}
      <div className="w-16 h-16 bg-troscon-icon-bg rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl text-troscon-dark-text">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-troscon-dark-text mb-4 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-troscon-light-text leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
