import { motion } from "framer-motion";

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

function PortfolioCard({ project }) {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div
      {...cardVariants}
      className={`group cursor-pointer ${project.tall ? "md:row-span-2" : ""} ${project.wide ? "md:col-span-2" : ""}`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden bg-gray-100 ${project.tall ? "h-[350px] md:h-full md:min-h-[480px]" : "h-[250px] md:h-[280px]"}`}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay on hover */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          className="absolute inset-0 bg-black pointer-events-none" 
        />
        
        {/* Tag on hover */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute top-4 left-4"
        >
          <span className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full">
            {project.tag}
          </span>
        </motion.div>
        
        {/* Arrow on hover */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
        >
          <span className="text-black font-bold">↗</span>
        </motion.div>
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
    </motion.div>
  );
}

export default function Portfolio() {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className=" px-4 py-16" id="portfolio">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div className="w-full">
            <span className="text-xs tracking-[0.2em] font-bold text-gray-400 uppercase mb-4 block">
              Portfolio
            </span>
            <div className="divider divider-start w-full"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full place-items-center"
        >
          <p className="text-4xl text-left md:text-5xl font-light text-black p-6">
            Strategy to build powerful <br className="hidden md:block" /> digital solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-auto"
        >
          <PortfolioCard project={{ ...projects[2], tall: false }} />
          <PortfolioCard project={projects[3]} />
          <PortfolioCard project={projects[0]} />
          <PortfolioCard project={projects[1]} />
          <PortfolioCard project={projects[3]} />
        </motion.div>
      </div>
    </section>
  );
}
