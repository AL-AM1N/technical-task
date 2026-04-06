import { useState, useEffect } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
          }`}
      >
        {/*ONE FLEX CONTAINER FOR ALL ITEMS */}
        <div className="w-full hidden lg:flex items-center justify-evenly">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm" />
            </div>
            <span className="text-2xl font-black text-black tracking-tighter">
              Floka
            </span>
          </div>

          {/* Nav Items */}
          <a href="#home" className="text-sm font-bold uppercase text-gray-500 hover:text-black transition">
            Home
          </a>
          <a href="#about" className="text-sm font-bold uppercase text-gray-500 hover:text-black transition">
            Pages
          </a>
          <a href="#portfolio" className="text-sm font-bold uppercase text-gray-500 hover:text-black transition">
            Portfolio
          </a>
          <a href="#blog" className="text-sm font-bold uppercase text-gray-500 hover:text-black transition">
            Blog
          </a>

          {/* Email */}
          <div className="flex gap-2">
            <a
              href="mailto:info@floka.com"
              className="text-sm text-black pb-0.5 hover:pb-1 transition-all"
            >
              info@floka.com
            </a>
            <div className="h-6 w-px bg-gray-200 mx-2" />
            <RxDragHandleDots2 />
          </div>

        </div>

        {/* 📱 Mobile Navbar */}
        <div className="flex lg:hidden items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm" />
            </div>
            <span className="text-xl font-black">Floka</span>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1.5"
          >
            <span className="w-8 h-0.5 bg-black" />
            <span className="w-8 h-0.5 bg-black" />
            <span className="w-5 h-0.5 bg-black self-end" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-[20px_0_40px_rgba(0,0,0,0.1)] z-[9999] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 pb-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-sm" />
              </div>
              <span className="text-xl font-black text-black">Floka</span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 pl-2">
            {["Home", "Pages", "Portfolio", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Bottom Area */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Say Hello</p>
            <a
              href="mailto:info@floka.com"
              className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              info@floka.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}