import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    quote:
      "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    company: "GREAT DESIGN SOLUTIONS",
  },
  {
    name: "Sarah L. Parker",
    role: "Product Manager",
    quote:
      "Working with them has completely transformed our workflow and improved productivity beyond expectations.",
    company: "INNOVATIVE TECH HUB",
  },
  {
    name: "Michael R. Adams",
    role: "UX Designer",
    quote:
      "The tool is intuitive, responsive, and has allowed our team to scale operations quickly.",
    company: "CREATIVE SOLUTIONS",
  },
];

export default function Testimonials() {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className=" px-4 py-20" id="testimonials">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-screen-xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24"
        >
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-4"></div>
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start">
            <h2 className="text-4xl md:text-5xl font-black text-black text-left">
              Accelerating growth, and unlocking new potential.
              <span className="inline-flex gap-2 mx-4 group">
                {[10, 11, 12].map((id) => (
                  <motion.span
                    key={id}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative"
                  >
                    <img
                      src={`https://i.pravatar.cc/40?img=${id}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </motion.span>
                ))}
              </span>
              Let's build your brand—together.
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`flex-1 rounded-3xl flex-col gap-4 group cursor-pointer ${
                index > 0 ? "hidden md:flex" : "flex"
              }`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-col-reverse" : ""
                } gap-4`}
              >
                {/* Top / Bottom Section */}
                <div className="rounded-2xl p-10 bg-white group-hover:bg-black transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-black">
                  <p className="text-black group-hover:text-white font-bold text-lg mb-1">
                    {t.name}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 text-xs tracking-wider uppercase font-semibold">
                    {t.role}
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-10 h-64 md:h-80 lg:h-96 flex flex-col group-hover:bg-black transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-black">
                  <div className="text-yellow-400 group-hover:text-yellow-300">
                    ★★★★★
                  </div>
                  <blockquote className="text-gray-900 group-hover:text-white text-lg md:text-xl font-medium italic leading-relaxed mt-2 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <p className="text-gray-400 group-hover:text-gray-300 text-[10px] font-bold tracking-[0.2em] mt-auto">
                    "{t.company}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}