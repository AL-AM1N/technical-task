import heroVdo from "../assets/heroVdo.mp4";
import personImg from "../assets/person_head_of_idea.png";

export default function Hero() {
  return (
    <section
      className="relative pt-20 lg:pt-25 bg-[#f0f0f0] min-h-screen flex flex-col"
      id="hero"
    >
      {/* Hero image block */}
      <div className="relative mx-4 lg:mx-6 rounded-2xl lg:rounded-2xl overflow-hidden flex-1 min-h-125 lg:min-h-screen group">
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
        <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 z-10">
          <h1 className="text-[80px] md:text-[140px] lg:text-[180px] font-black text-white leading-[0.85] tracking-tighter uppercase">
            Floka
          </h1>
          <p className="text-4xl md:text-6xl lg:text-7xl font-cormorant italic text-white/80 -mt-2 lg:mt-4 text-right">
            Studio
          </p>
        </div>

        {/* Bottom-right tagline - Hidden on small mobile for clarity */}
        <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16 max-w-60 lg:max-w-[320px] text-left z-10 hidden sm:block">
          <p className="text-white font-bold text-sm lg:text-base leading-tight">
            No cookie-cutter websites. No fluff.
          </p>
          <p className="text-white/60 text-[10px] lg:text-xs mt-2 uppercase tracking-widest font-bold">
            Just real tools and smart strategies to grow your business.
          </p>
        </div>

        {/* Floating card - Positioned differently on mobile/desktop */}
        <div className="absolute right-4 top-10 lg:right-16 lg:top-3/4 lg:-translate-y-1/2 bg-white/95 backdrop-blur-md rounded-3xl p-5 lg:p-6 flex items-center gap-5 shadow-2xl w-65 lg:w-[320px] z-20">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden shrink-0">
            <img
              src={personImg}
              alt="Almond D. Nelsi"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] text-gray-400 font-bold uppercase">
              HEAD OF IDEA
            </p>
            <h3 className="text-sm lg:text-base font-black text-black mt-1">
              Almond D. Nelsi
            </h3>
            <a
              href="#contact"
              className="flex items-center gap-3 mt-3 group/btn"
            >
              <span className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold group-hover/btn:bg-gray-700 transition-colors">
                +
              </span>
              <span className="text-[10px] font-black tracking-widest text-black">
                LET'S TALK
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Below hero — rotating badge + intro text */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          {/* Left Part - 1/3 */}
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-4">
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
            <p className="text-left text-base lg:text-lg leading-relaxed">
              We design every project with long-term success in mind.
            </p>
          </div>

          {/* Right Part - 2/3 */}
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-start">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black leading-[1.1] tracking-tight text-left lg:text-left">
              Our approach is straightforward — prioritizing functionality, speed, and clarity for every digital solution.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
