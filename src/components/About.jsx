import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ceoImg from "../assets/ceo.png";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function ProgressBar({ label, pct, dark }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1.5">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div
        className={`h-8 rounded-lg overflow-hidden ${dark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-lg ${dark ? "bg-white" : "bg-gray-200"}`}
        />
      </div>
    </div>
  );
}

function AwardBadge({ title, sub, note, extra }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center border border-white/20 rounded-2xl px-6 py-6 w-full max-w-[180px] md:w-44"
    >
      <p className="text-white font-black text-sm tracking-widest">{title}</p>
      <p className="text-white font-black text-xl md:text-2xl tracking-widest mt-0.5">
        {sub}
      </p>
      <p className="text-gray-500 text-[10px] tracking-widest mt-1">{note}</p>
      <div className="text-yellow-400 text-sm my-2">★★★★★</div>
      {extra && (
        <p className="text-gray-400 text-[10px] tracking-widest">{extra}</p>
      )}
    </motion.div>
  );
}

export default function About() {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="bg-[#f0f0f0] px-4 pb-16" id="about">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-stretch">

          {/* Left */}
          <motion.div
            {...cardVariants}
            className="w-full lg:w-1/4 flex flex-col gap-5"
          >
            <div className="bg-white rounded-3xl p-8 flex flex-col flex-1 gap-6">
              <div>
                <div className="text-7xl font-black text-black leading-none">
                  <Counter target={25} /><span className="text-gray-300">+</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                  Years of experience
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore how we transform ideas into extraordinary digital
                  experiences.
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex -space-x-2 mb-3">
                  {["bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-300"].map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-9 h-9 rounded-full border-2 border-white ${c} overflow-hidden`}
                    >
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 10}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-black">
                  <Counter target={1200} />+ happy users review
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle */}
          <motion.div
            {...cardVariants}
            transition={{ ...cardVariants.transition, delay: 0.2 }}
            className="w-full lg:w-1/2 order-last lg:order-none flex flex-col"
          >
            <section className="bg-black mx-0 lg:mx-3 rounded-3xl overflow-visible flex-1 flex flex-col">
              <div className="flex flex-col md:flex-row flex-1 min-h-[420px] items-stretch">

                {/* CEO Image */}
                <div className="flex-1 relative flex flex-col justify-end p-8">
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    src={ceoImg}
                    alt="CEO"
                    className="absolute -top-12 md:-top-16 inset-x-0 w-full h-[200px] md:h-auto object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="relative z-10">
                    <motion.blockquote
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4"
                    >
                      " At Floka, we merge strategy, creativity, and technology
                      to shape brands that people love. "
                    </motion.blockquote>
                    <motion.cite
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-gray-400 text-sm not-italic"
                    >
                      Merizo H. Yelso <span className="text-gray-600">/ CEO</span>
                    </motion.cite>
                  </div>
                </div>

                {/* Awards */}
                <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:gap-8 px-6 py-10 md:px-12 border-t md:border-t-0 md:border-l border-white/10">
                  <AwardBadge
                    title="ULTRA"
                    sub="PRESTI"
                    note="BEST OF THE WORLD"
                    extra="WINNER"
                  />
                  <AwardBadge title="HYPER" sub="BEST" note="AWARD WINNING" />
                </div>
              </div>
            </section>
          </motion.div>

          {/* Right */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2 flex-1">
            <div className="flex flex-col gap-2 flex-1">

              <motion.div
                {...cardVariants}
                transition={{ ...cardVariants.transition, delay: 0.3 }}
                className="bg-white p-6 flex-1 flex flex-col gap-2 rounded-3xl"
              >
                <p className="text-xs text-gray-400 font-semibold tracking-widest mb-1">
                  Follow us
                </p>
                <p className="text-lg font-bold text-black mb-3">
                  For check updates
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                  {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                      className="border border-gray-200 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold text-gray-600 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...cardVariants}
                transition={{ ...cardVariants.transition, delay: 0.4 }}
                className="bg-white p-6 flex-1 flex flex-col gap-2 rounded-3xl"
              >
                <p className="text-xs text-gray-400 font-semibold tracking-widest mb-2">
                  Impressions
                </p>
                <div className="flex-1 flex flex-col justify-center gap-2">
                  <ProgressBar label="Solutions" pct={100} dark={false} />
                  <ProgressBar label="UI/UX" pct={90} dark={true} />
                  <ProgressBar label="Explore" pct={72} dark={false} />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}