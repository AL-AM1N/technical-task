import React from "react";
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
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 " id="blog">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.2em] font-bold text-gray-400 uppercase block">
          INSIGHTS
        </span>
        <h2 className="text-5xl font-semibold mt-2">Company blog & updates</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
          >
            {post.layout === "image-top" ? (
              <>
                {/* Image */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  {/* Hover + icon at bottom-left */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black text-xl">
                      +
                    </div>
                  </div>
                </div>

                {/* Text box separated */}
                <div className="bg-black text-white p-4 mt-2 rounded-2xl">
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {post.category} &nbsp; {post.date}
                  </div>
                  <h3 className="mt-2 text-sm md:text-base">{post.title}</h3>
                </div>
              </>
            ) : (
              <>
                {/* Text box on top */}
                <div className="bg-black text-white p-4 mb-2 rounded-2xl">
                  <div className="text-xs uppercase tracking-wide opacity-70">
                    {post.category} &nbsp; {post.date}
                  </div>
                  <h3 className="mt-2 text-sm md:text-base">{post.title}</h3>
                </div>

                {/* Image */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src={post.src}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  {/* Hover + icon at bottom-left */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black text-xl">
                      +
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;