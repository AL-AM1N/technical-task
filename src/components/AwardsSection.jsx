import React from "react";
import exampleImage from "./../assets/hero_astronaut.png"; // Replace with your image path

const awards = [
  { title: "Best Designer Awards", company: "Awwwards", year: 2025 },
  { title: "Peaky UI Designer", company: "Google", year: 2024 },
  { title: "Great in UX", company: "Apple", year: 2023 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
];

const AwardsSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 p-10 ">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start justify-center md:flex-1 ">
        <img
          src={exampleImage}
          alt="Team"
          className="w-full max-w-xs rounded-lg object-cover"
        />
        <p className="mt-4 text-sm tracking-wide text-gray-500">GET REWARDS</p>
      </div>

      {/* Right Section */}
      <div className="md:flex-2">
        <div className="relative w-40 h-40">
          {/* Circular Text */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <defs>
              <path
                id="impactCircle"
                d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
              />
            </defs>
            <text fontSize="12" fill="#999" letterSpacing="4">
              <textPath href="#impactCircle" startOffset="0%">
                · WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE ·
              </textPath>
            </text>
          </svg>

          {/* Trophy in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl grayscale">🏆</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-10">
          Driven by passion and grounded in expertise, our team turns bold ideas
          into reality, leading the way in creative innovation.
        </h2>

        <div className="flex flex-col space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <span className="font-medium">{award.title}</span>
              <span className="text-gray-500">{award.company}</span>
              <span className="text-gray-400">{award.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
