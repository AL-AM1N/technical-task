import React from "react";

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
  return (
    <section className=" px-4 py-20" id="testimonials">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-4"></div>
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start">
            <h2 className="text-4xl md:text-5xl font-black text-black text-left">
              Accelerating growth, and unlocking new potential.
              <span className="inline-flex gap-2 mx-4 group">
                {[10, 11, 12].map((id) => (
                  <span
                    key={id}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden group-hover:scale-110 transition-transform"
                  >
                    <img
                      src={`https://i.pravatar.cc/40?img=${id}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </span>
                ))}
              </span>
              Let's build your brand—together.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`flex-1 rounded-3xl flex flex-col gap-4 group cursor-pointer transition-all duration-300`}
            >
              {/* Alternate layout */}
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-col-reverse" : ""
                } gap-4`}
              >
                {/* Top / Bottom Section */}
                <div className="rounded-2xl p-10 bg-white group-hover:bg-black transition-colors duration-300">
                  <p className="text-black group-hover:text-white font-bold text-lg mb-1 transition-colors duration-300">
                    {t.name}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 text-xs tracking-wider uppercase font-semibold transition-colors duration-300">
                    {t.role}
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-10 h-64 md:h-80 lg:h-96 flex flex-col group-hover:bg-black transition-colors duration-300">
                  <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    ★★★★★
                  </div>
                  <blockquote className="text-gray-900 group-hover:text-white text-lg md:text-xl font-medium italic leading-relaxed mt-2 flex-1 transition-colors duration-300">
                    "{t.quote}"
                  </blockquote>
                  <p className="text-gray-400 group-hover:text-gray-300 text-[10px] font-bold tracking-[0.2em] mt-auto transition-colors duration-300">
                    "{t.company}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}