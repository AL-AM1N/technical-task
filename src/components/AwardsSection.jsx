import React from "react";
import { motion } from "framer-motion";
import exampleImage from "./../assets/hero_astronaut.png";
const awards = [
  { title: "Best Designer Awards", company: "Awwwards", year: 2025 },
  { title: "Peaky UI Designer", company: "Google", year: 2024 },
  { title: "Great in UX", company: "Apple", year: 2023 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
  { title: "Best Website Pick", company: "Microsoft", year: 2022 },
];

const AwardsSection = () => {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center items-start justify-center gap-12 p-10 h-full">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-full justify-center items-center basis-1/3"
      >
        <div>
          <img
            src={exampleImage}
            alt="Team"
            className="w-65 max-w-xs rounded-2xl object-cover"
          />
          <p className="mt-4 text-xs tracking-wide text-black">GET REWARDS</p>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="md:basis-2/3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40"
        >
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
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-gray-900 mb-10"
        >
          Driven by passion and grounded in expertise, our team turns bold ideas
          into reality, leading the way in creative innovation.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col space-y-4"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <span className="font-medium">{award.title}</span>
              <span className="text-gray-500">{award.company}</span>
              <span className="text-gray-400">{award.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsSection;
