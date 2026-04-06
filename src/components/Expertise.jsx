import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: "User Interface & Experience Design",
    content: "From user research to pixel-perfect interfaces, we craft digital experiences that are both beautiful and intuitive, delivering real value to your users.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80"
  },
  {
    title: "Web Development",
    content: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions tailored to your unique business needs.",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=80"
  },
  {
    title: "Search Engine Optimization",
    content: "Data-driven SEO strategies that help your business rank higher, attract more qualified traffic, and grow sustainable organic presence.",
    tags: ["SEO", "ANALYTICS", "GROWTH"],
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80"
  },
  {
    title: "Low-Code Development",
    content: "Build powerful, scalable applications faster with low-code platforms that empower both developers and business teams.",
    tags: ["WEBFLOW", "BUBBLE", "NO-CODE"],
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80"
  }
]

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState(0)

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section className="bg-black text-white px-6 py-20 lg:py-32 rounded-4xl" id="expertise">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-8xl font-black mb-16 lg:mb-24 text-center"
        >
            <span>Company</span><br />
           <span className="font-cormorant text-4xl md:text-6xl lg:text-8xl italic font-normal text-gray-400">expertise</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="border-t border-white/10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-10 lg:py-16 flex items-center gap-6 lg:gap-10 text-left group"
              >
                <span className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center text-xl lg:text-2xl font-black transition-all ${openIndex === index ? 'bg-white text-black' : 'group-hover:bg-white group-hover:text-black'}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
                <span className="text-sm md:text-sm lg:text-base font-black tracking-tight flex-1 pl-10">
                  {service.title}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start pb-10 lg:pb-16">
                      <div className="flex-1 max-w-2xl">
                        <p className="text-gray-400 text-base lg:text-base leading-relaxed mb-10">
                          {service.content}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {service.tags.map(tag => (
                            <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[10px] lg:text-xs font-black tracking-[0.2em] text-gray-300 uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative w-full lg:w-[400px] aspect-video lg:aspect-square rounded-[32px] overflow-hidden bg-gray-900 group/img"
                      >
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-24"
        >
          <a href="#contact" className="inline-flex items-center gap-4 group">
            <span className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white text-black flex items-center justify-center text-xl lg:text-2xl font-black group-hover:bg-gray-200 transition-all">+</span>
            <span className="text-xs lg:text-sm font-black tracking-[0.3em] uppercase">HIRE US TODAY</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
