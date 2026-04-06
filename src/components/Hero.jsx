import { motion } from "framer-motion";
import heroVdo from "../assets/heroVdo.mp4";
import personImg from "../assets/person_head_of_idea.png";

export default function Hero() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      className="relative pt-15 lg:pt-18 bg-[#f0f0f0] min-h-screen flex flex-col"
      id="hero"
    >
      {/* Hero image block */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(30px)", scale: 0.9 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-4 lg:mx-6 rounded-2xl lg:rounded-2xl overflow-hidden flex-1 min-h-125 lg:min-h-screen group"
      >
        <video
          src={heroVdo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-3000"
        />
        {/* Dark gradient overlay bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Bottom-left title */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="absolute bottom-8 left-6 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-10"
        >
          <motion.h1
            variants={fadeInLeft}
            className="text-[60px] sm:text-[100px] md:text-[130px] lg:text-[180px] font-black text-white leading-[0.85] tracking-tighter uppercase"
          >
            Floka
          </motion.h1>
          <motion.p
            variants={fadeInLeft}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant italic text-white/80 -mt-1 md:-mt-2 lg:mt-4 text-right"
          >
            Studio
          </motion.p>
        </motion.div>

        {/* Bottom-right tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16 max-w-60 lg:max-w-[320px] text-left z-10 hidden sm:block"
        >
          <p className="text-white font-bold text-sm lg:text-base leading-tight">
            No cookie-cutter websites. No fluff.
          </p>
          <p className="text-white/60 text-[10px] lg:text-xs mt-2 uppercase tracking-widest font-bold">
            Just real tools and smart strategies to grow your business.
          </p>
        </motion.div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-4 top-24 sm:top-32 md:top-1/2 md:-translate-y-1/2 lg:right-16 lg:top-3/4 bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center gap-4 md:gap-5 shadow-2xl w-[260px] md:w-[320px] z-20"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden shrink-0">
            <img
              src={personImg}
              alt="Almond D. Nelsi"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">
              HEAD OF IDEA
            </p>
            <h3 className="text-xs md:text-base font-black text-black mt-0.5 md:mt-1">
              Almond D. Nelsi
            </h3>
            <a
              href="#contact"
              className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3 group/btn"
            >
              <span className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold group-hover/btn:bg-gray-700 transition-colors">
                +
              </span>
              <p className="text-[9px] md:text-[12px] font-thin tracking-widest text-black">
                LET'S TALK
              </p>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Below hero — rotating badge + intro text */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          {/* Left Part - 1/3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col items-start gap-4"
          >
            {/* Rotating Badge */}
            <div className="relative shrink-0 w-32 h-32 lg:w-40 lg:h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black rounded-2xl flex items-center justify-center">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-white rounded-md" />
                </div>
              </div>
              <svg
                className="animate-spin-slow w-full h-full px-2"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  fontSize="16"
                  fill="#aaa"
                  className="font-bold tracking-[6px] uppercase"
                >
                  <textPath href="#circlePath" startOffset="0%">
                    · WANT IT TO SOUND PLAYFUL LUXURIOUS OR MORE ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Left Text */}
            <p className="text-left text-gray-500 lg:text-lg leading-relaxed">
              We design every project with long-term success in mind.
            </p>
          </motion.div>

          {/* Right Part - 2/3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black leading-[1.1] tracking-tight text-left lg:text-left">
              Our approach is straightforward — prioritizing functionality, speed, and clarity for every digital solution.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
