import { useState, useEffect } from "react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      {/* ✅ ONE FLEX CONTAINER FOR ALL ITEMS */}
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
          className="text-sm font-bold text-black border-b border-black pb-0.5 hover:pb-1 transition-all"
        >
          info@floka.com
        </a>
        <div className="h-6 w-px bg-gray-200 mx-2" />
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

      {/* Mobile Menu (unchanged) */}
      <div
        className={`fixed inset-0 bg-black z-[9999] transition-all duration-500 flex flex-col ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <span className="text-white text-2xl font-black">Floka</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {["Home", "Pages", "Portfolio", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}