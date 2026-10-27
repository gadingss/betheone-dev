"use client";

import { motion } from "framer-motion";
import { User, Code2, Layers, Cpu, Server, Database, Globe } from "lucide-react";

const skills = [
  { name: "Laravel", icon: <Server className="w-5 h-5" /> },
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "MySQL", icon: <Database className="w-5 h-5" /> },
  { name: "Docker", icon: <Layers className="w-5 h-5" /> },
  { name: "Web3", icon: <Cpu className="w-5 h-5" /> }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 max-w-5xl pt-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Tentang <span className="text-primary">Kami</span></h1>
        <p className="text-xl text-foreground/70">Mengenal lebih dekat di balik BetheOne Dev.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start relative z-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white/10 relative group">
            <img 
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop" 
              alt="Gee Dev - Founder" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2">Gee Dev</h2>
              <p className="text-accent font-semibold text-lg flex items-center justify-center md:justify-start">
                <User className="w-5 h-5 mr-2" /> Founder & Full Stack Developer
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Halo! Saya adalah seorang Full Stack Developer dengan passion mendalam di bidang rekayasa perangkat lunak dan arsitektur sistem. Dengan pengalaman bertahun-tahun mengembangkan aplikasi skala kecil hingga enterprise.
              </p>
              <p>
                Melalui BetheOne Dev, visi saya adalah membantu digitalisasi UMKM dan instansi di Indonesia, sekaligus memberikan pendampingan yang solid bagi mahasiswa IT untuk menghasilkan karya teknologi yang luar biasa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Tech Stack & Keahlian</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
