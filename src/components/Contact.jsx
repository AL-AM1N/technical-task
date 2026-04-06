import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-black text-white px-4 py-20 rounded-4xl" id="contact">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-10"
        >
          <motion.span
            variants={fadeInUp}
            className="text-[12px] tracking-[0.3em] font-bold text-gray-500 uppercase block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black leading-tight"
          >
            Tell us about your project —whether it's a website, SEO, or marketing.
          </motion.h2>

          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-8 md:gap-12 lg:gap-8 xl:gap-16 pt-8 justify-start">
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="flex gap-6 items-start group cursor-pointer transition-colors"
            >
              <span className="text-2xl md:text-3xl mt-1">💬</span>
              <div className="text-left">
                <strong className="block text-[10px] tracking-widest text-white/50 mb-2 uppercase font-black">TALK TO US</strong>
                <p className="text-gray-300 text-lg md:text-xl font-bold">Inquiries +123 456 789 00</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="flex gap-6 items-start group cursor-pointer transition-colors"
            >
              <span className="text-2xl md:text-3xl mt-1">📍</span>
              <div className="text-left">
                <strong className="block text-[10px] tracking-widest text-white/50 mb-2 uppercase font-black">POST ADDRESS</strong>
                <p className="text-gray-300 text-lg md:text-xl font-bold">541 Melville Ave, Palo Alto, CA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f5f5f5] rounded-[40px] p-8 md:p-12 text-black shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-8">Have a project in mind?</h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-6 md:flex-row md:gap-6">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="YOUR NAME"
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                id="fname"
              />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="BUSINESS EMAIL"
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                id="femail"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase ml-1">BUDGET</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer hover:border-black transition-colors shadow-sm">
                  <option>$1000 - $5000</option>
                  <option>$5000 - $15000</option>
                  <option>$15000 - $50000</option>
                  <option>$50000+</option>
                </select>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase ml-1">SERVICE</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer hover:border-black transition-colors shadow-sm">
                  <option>CONSULTANCY</option>
                  <option>UI/UX DESIGN</option>
                  <option>WEB DEVELOPMENT</option>
                  <option>SEO</option>
                </select>
              </div>
            </div>

            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="MESSAGE"
              className="w-full h-32 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none mb-4"
              id="fmessage"
            />

            <button className="flex items-center gap-3 group">
              <motion.span
                whileHover={{ scale: 1.1, backgroundColor: "#333" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold transition-colors"
              >
                +
              </motion.span>
              <span className="text-sm font-bold tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">LET'S TALK</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
