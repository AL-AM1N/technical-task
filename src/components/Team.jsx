import { useState } from 'react'

const teams = {
  design: [
    { name: "Nicolas K. Ellington", role: "FOUNDER", img: "https://i.pravatar.cc/300?img=11" },
    { name: "Carlos E. Ashcroft", role: "CEO", img: "https://i.pravatar.cc/300?img=12" },
    { name: "Leonardo F. Ashton", role: "UX DESIGNER", img: "https://i.pravatar.cc/300?img=13" },
    { name: "Ricardo P. Winslow", role: "UI DESIGNER", img: "https://i.pravatar.cc/300?img=14" }
  ],
  dev: [
    { name: "Sarah J. Parker", role: "CTO", img: "https://i.pravatar.cc/300?img=15" },
    { name: "Mike R. Thompson", role: "LEAD DEV", img: "https://i.pravatar.cc/300?img=16" },
    { name: "Elena V. Rossi", role: "FRONTEND", img: "https://i.pravatar.cc/300?img=17" },
    { name: "David L. Smith", role: "BACKEND", img: "https://i.pravatar.cc/300?img=18" }
  ]
}

export default function Team() {
  const [activeTab, setActiveTab] = useState('design')

  return (
    <section className="bg-white max-w-7xl mx-auto pl-12 pr-4 py-4 rounded-2xl" id="team">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Content */}
        <div className="w-full flex-1 md:w-[400px] space-y-10 py-20 pl-8">
          <span className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">OUR AVENGERS</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-black">
            Meet with our team member
          </h2>

          <div className="flex gap-8 border-b border-gray-200">
            {['DESIGN TEAM', 'DEVELOPMENT TEAM'].map((tab, idx) => {
              const tabId = idx === 0 ? 'design' : 'dev'
              return (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`pb-4 text-xs font-bold tracking-widest transition-all ${activeTab === tabId ? 'text-black border-b-2 border-black' : 'text-gray-400 border-b-2 border-transparent'}`}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          <p className="text-gray-500 text-xl leading-relaxed max-w-sm">
            What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
          </p>

          <a href="#contact" className="inline-flex items-center gap-3 group">
            <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold group-hover:bg-gray-800 transition-all">+</span>
            <span className="text-sm font-bold tracking-widest">JOIN WITH US</span>
          </a>

          <div className="pt-10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" 
              alt="Team" 
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Grid */}
        <div className="flex-1 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teams[activeTab].map((member, index) => (
              <div key={index} className="bg-[#f0f0f0] rounded-2xl p-2 space-y-6 group hover:translate-y-[-10px] transition-all duration-300">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className='pl-6'>
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <span className="text-xs font-bold text-gray-400 tracking-[0.2em]">{member.role}</span>
                </div>
                <div className="flex gap-2 border-t border-gray-100">
                  {['f', '𝕏', 'in'].map(social => (
                    <a key={social} href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
