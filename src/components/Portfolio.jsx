import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80",
    tag: "Branding",
    title: "ALDAN BRANDING",
    year: "2025",
    wide: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80",
    tag: "UX",
    title: "ALDAN BRANDING",
    year: "2025",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Design",
    title: "FASHION BRAND",
    year: "2025",
    tall: true,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    tag: "Web Dev",
    title: "TECH SOLUTION",
    year: "2025",
  },
];

function PortfolioCard({ project, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), delay || 0);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal group cursor-pointer ${project.tall ? "row-span-2" : ""} ${project.wide ? "col-span-2" : ""}`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden bg-gray-100 ${project.tall ? "h-full min-h-[480px]" : "h-[280px]"}`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover img-zoom"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
        {/* Tag on hover */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full">
            {project.tag}
          </span>
        </div>
        {/* Arrow on hover */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-black font-bold">↗</span>
        </div>
      </div>
      {/* Meta */}
      <div className="flex items-center justify-between mt-3 px-1">
        <span className="text-sm font-bold tracking-wider text-gray-900">
          {project.title.split("").map((ch, i) => (
            <span
              key={i}
              className={
                ch === project.title[0] ||
                ch === project.title[project.title.indexOf(" ") + 1]
                  ? "text-gray-400"
                  : ""
              }
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="text-xs text-gray-400 font-semibold">
          {project.year}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className=" px-4 py-16" id="portfolio">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="w-full">
            <span className="text-xs tracking-[0.2em] font-bold text-gray-400 uppercase mb-4 block">
              Portfolio
            </span>
            <div className="divider divider-start w-full"></div>
          </div>
        </div>
        <div className="w-full place-items-center">
          <p className=" text-4xl text-left md:text-5xl font-black text-black p-6">
            Strategy to build powerful digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-auto">
            {/* Row 2: tall + short stacked */}
          <PortfolioCard
            project={{ ...projects[2], tall: false }}
            delay={150}
          />
            <PortfolioCard project={projects[3]} delay={200} />
          {/* Row 1: 2 equal */}
          <PortfolioCard project={projects[0]} delay={0} />
          <PortfolioCard project={projects[1]} delay={100} />
          <PortfolioCard project={projects[3]} delay={200} />
          
          
        </div>
      </div>
    </section>
  );
}
