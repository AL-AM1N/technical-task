import React from "react";
import { motion } from "framer-motion";
import img1 from "./../assets/ceo_woman_portrait.png";
import img2 from "./../assets/ceo_woman_portrait.png";
import img3 from "./../assets/ceo_woman_portrait.png";

const posts = [
  {
    title: "Seamless user interfaces, crafted with intent.",
    category: "WEB3",
    date: "NOV 07, 2025",
    src: img1,
    layout: "image-bottom",
  },
  {
    title: "Creative web platforms, designed for growth.",
    category: "WEB3",
    date: "NOV 07, 2025",
    src: img2,
    layout: "image-top",
  },
  {
    title: "Immersive virtual journeys, built with precision.",
    category: "WEB3",
    date: "NOV 07, 2025",
    src: img3,
    layout: "image-bottom",
  },
];

const BlogGrid = () => {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 " id="blog">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <span className="text-xs tracking-[0.2em] font-bold text-gray-400 uppercase block">
          INSIGHTS
        </span>
        <h2 className="text-5xl font-semibold mt-2">Company blog & updates</h2>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={`group rounded-3xl overflow-hidden cursor-pointer ${
              index > 0 ? "hidden md:block" : "block"
            }`}
          >
            {post.layout === "image-top" ? (
              <>
                {/* Image */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover + icon at bottom-left */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-4 left-4"
                  >
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold shadow-lg">
                      +
                    </div>
                  </motion.div>
                </div>

                {/* Text box separated */}
                <div className="bg-black text-white p-4 mt-2 rounded-2xl">
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {post.category} &nbsp; {post.date}
                  </div>
                  <h3 className="mt-2 text-sm md:text-base font-medium">{post.title}</h3>
                </div>
              </>
            ) : (
              <>
                {/* Text box on top */}
                <div className="bg-black text-white p-4 mb-2 rounded-2xl">
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {post.category} &nbsp; {post.date}
                  </div>
                  <h3 className="mt-2 text-sm md:text-base font-medium">{post.title}</h3>
                </div>

                {/* Image */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover + icon at bottom-left */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-4 left-4"
                  >
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black text-xl font-bold shadow-lg">
                      +
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogGrid;