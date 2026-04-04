export default function Reel() {
  return (
    <section className="max-w-7xl mx-auto rounded-2xl relative h-[60vh] md:h-[80vh] overflow-hidden group">
      <div className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80" 
          alt="Play Reel" 
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms]"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <button className="flex flex-col items-center gap-4 group/btn">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-white group-hover/btn:scale-110 transition-all duration-500">
            <span className="text-white group-hover/btn:text-black text-3xl translate-x-1">▶</span>
          </div>
          <span className="text-white font-bold tracking-[0.4em] text-lg group-hover/btn:tracking-[0.6em] transition-all">PLAY REEL</span>
        </button>
      </div>
    </section>
  )
}
