export default function Contact() {
  return (
    <section className="bg-black text-white px-4 py-20 rounded-4xl" id="contact">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-10">
          <span className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Tell us about your project —whether it's a website, SEO, or marketing.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 pt-8 justify-center lg:justify-start">
            <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl mt-1">💬</span>
              <div className="text-left">
                <strong className="block text-[10px] tracking-widest text-white/50 mb-2 uppercase font-black">TALK TO US</strong>
                <p className="text-gray-300 text-xl font-bold">Inquiries +123 456 789 00</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300">
              <span className="text-3xl mt-1">📍</span>
              <div className="text-left">
                <strong className="block text-[10px] tracking-widest text-white/50 mb-2 uppercase font-black">POST ADDRESS</strong>
                <p className="text-gray-300 text-xl font-bold">541 Melville Ave, Palo Alto, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Card */}
        <div className="bg-[#f5f5f5] rounded-[40px] p-8 md:p-12 text-black">
          <h3 className="text-2xl font-bold mb-8">Have a project in mind?</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                id="fname"
              />
              <input 
                type="email" 
                placeholder="BUSINESS EMAIL" 
                className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                id="femail"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase ml-1">BUDGET</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer">
                  <option>$1000 - $5000</option>
                  <option>$5000 - $15000</option>
                  <option>$15000 - $50000</option>
                  <option>$50000+</option>
                </select>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[10px] font-bold text-gray-400 tracking-widest uppercase ml-1">SERVICE</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold text-gray-800 focus:outline-none appearance-none cursor-pointer">
                  <option>CONSULTANCY</option>
                  <option>UI/UX DESIGN</option>
                  <option>WEB DEVELOPMENT</option>
                  <option>SEO</option>
                </select>
              </div>
            </div>
            
            <textarea 
              placeholder="MESSAGE" 
              className="w-full h-32 bg-white border border-gray-200 rounded-2xl px-6 py-5 text-sm font-semibold placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none mb-4"
              id="fmessage"
            />
            
            <button className="flex items-center gap-3 group">
              <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold group-hover:bg-gray-800 transition-all">+</span>
              <span className="text-sm font-bold tracking-[0.2em]">LET'S TALK</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
