import logo from "../assets/logoipsum-414.png";

export default function Clients() {
  const clients = [
    { name: "Logoipsum", logo: "https://logoipsum.com/a/412/logo.svg" },
    { name: "LOGOIPSUM", logo: "https://logoipsum.com/a/38/logo.svg" },
    { name: "Logoipsum", logo: "https://logoipsum.com/a/22/logo.svg" },
    { name: "Logoipsum", logo: "https://logoipsum.com/a/50/logo.svg" },
    { name: "logo ipsum", logo: "https://logoipsum.com/a/12/logo.svg" },
    { name: "Logoipsum", logo: "https://logoipsum.com/a/29/logo.svg" },
    { name: "Logoipsum", logo: "https://logoipsum.com/a/35/logo.svg" },
    { name: "NEXT CAN BE YOU.", logo: "NEXT" }
  ]

  return (
    <section className=" border-y border-gray-100 max-w-7xl mx-auto mt-6 pb-2" id="clients">
        <div className="py-6 flex justify-between">
            <p>Happy Users</p>
            <p>©2025 Case-Themes™ Studio</p>
        </div>
      <div className="bg-white rounded-2xl grid grid-cols-2 md:grid-cols-4">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className={`border-r border-b border-gray-100 p-12 flex flex-col items-center justify-center gap-6 group hover:bg-[#f5f5f5] transition-colors duration-300 ${index === clients.length - 1 ? 'border-r-0' : ''}`}
          >
            {client.logo === "NEXT" ? (
              <div className="text-center space-y-4">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{client.name}</p>
                <a href="#contact" className="block text-sm font-bold text-black border-b border-black pb-1 hover:pb-2 transition-all">LET'S TALK</a>
              </div>
            ) : (
              <>
                <img 
                  src= {logo}
                  alt={client.name} 
                  className="w-32 h-10 object-contain group-hover:opacity-100 transition-opacity duration-300 group-hover:grayscale-0"
                />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{client.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
