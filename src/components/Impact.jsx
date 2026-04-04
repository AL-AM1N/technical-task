export default function Impact() {
  return (
    <section className="bg-white px-4 py-20 overflow-hidden" id="impact">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left Side - Image & Rotating Text */}
        <div className="relative flex-shrink-0 w-full md:w-[480px]">
          <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full p-4 shadow-xl z-10 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <svg className="animate-spin-slow w-full h-full" viewBox="0 0 200 200">
              <defs>
                <path id="impactCircle" d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"/>
              </defs>
              <text fontSize="12" fill="#999" letterSpacing="4">
                <textPath href="#impactCircle" startOffset="0%">
                  · WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Driven by passion and grounded in expertise, our team turns bold ideas into <em className="font-cormorant italic font-normal text-gray-500">reality.</em>
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex gap-6 items-start border-l-2 border-gray-100 pl-8">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&q=80" 
                alt="Projects" 
                className="w-20 h-20 rounded-2xl object-cover mb-4 flex-shrink-0"
              />
              <p className="text-gray-500 text-sm leading-relaxed">
                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
              </p>
            </div>

            <div className="w-1/3 flex flex-col justify-end gap-2 border-l-2 border-gray-100 pl-8 pb-1">
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Worldwide base</p>
              <span className="text-4xl font-black text-black">5+</span>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-gray-100 uppercase tracking-widest font-bold text-[10px] text-gray-400">
            <span>HAPPY USERS</span>
            <span>©2025 CASE-THEMES™ STUDIO</span>
          </div>

          <div className="pt-6">
            <a href="#contact" className="inline-flex items-center gap-3 group">
              <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold group-hover:bg-gray-800 transition-all">+</span>
              <span className="text-sm font-bold tracking-widest">HIRE US NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
