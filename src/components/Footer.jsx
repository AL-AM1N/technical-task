export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white px-4 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">
        <div className="flex-1 space-y-12">
          <nav className="flex flex-wrap gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
            {['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </nav>

          <div className="max-w-md space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              At <strong className="text-white">Floka</strong>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
            </p>
            <div className="space-y-2 text-sm font-bold tracking-widest">
              <p className="text-white/80">info@floka-design.com</p>
              <p className="text-white/80">+123 (456 789 00)</p>
              <p className="text-white/80">12/A, Booston Tower, NYC</p>
            </div>
          </div>

          <div className="flex gap-6 pt-6 uppercase font-bold text-xs tracking-widest">
            {['f', '𝕏', 'in', 'Be'].map(s => (
              <a key={s} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-lg">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col justify-between items-end">
          <h2 className="text-[140px] md:text-[200px] font-black leading-none tracking-tight opacity-10 absolute -right-20 bottom-0 select-none pointer-events-none">
            FLOKA
          </h2>
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group mt-auto self-end"
          >
            <span className="text-2xl transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase">
        <p>Copyright © 2025 <a href="#" className="hover:text-white transition-colors">Case-Themes</a></p>
        <p>Floka WordPress Onepage Theme</p>
      </div>
    </footer>
  )
}
