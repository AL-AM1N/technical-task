import { motion } from "framer-motion";
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

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section className=" border-y border-gray-100 max-w-7xl mx-auto mt-6 pb-2" id="clients">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-6 flex justify-between"
      >
        <p>Happy Users</p>
        <p>©2025 Case-Themes™ Studio</p>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="bg-white rounded-2xl grid grid-cols-2 md:grid-cols-4"
      >
        {clients.map((client, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ backgroundColor: "#f5f5f5" }}
            className={`border-r border-b border-gray-100 p-12 flex flex-col items-center justify-center gap-6 group transition-colors duration-300 ${index % 4 === 3 ? 'md:border-r-0' : ''}`}
          >
            {client.logo === "NEXT" ? (
              <div className="text-center space-y-4">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{client.name}</p>
                <a href="#contact" className="block text-sm font-bold text-black border-b border-black pb-1 hover:pb-2 transition-all">LET'S TALK</a>
              </div>
            ) : (
              <>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src= {logo}
                  alt={client.name} 
                  className="w-32 h-10 object-contain group-hover:opacity-100 transition-opacity duration-300 transition-transform"
                />
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{client.name}</span>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
