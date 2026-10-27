"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { 
  Code2, 
  Database, 
  LineChart, 
  Palette, 
  Wrench, 
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Transforming Ideas Into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Website, Sistem Informasi, Dashboard Monitoring, dan Konsultasi IT Profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/project">
                <Button size="lg" className="w-full sm:w-auto">
                  Lihat Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://wa.me/6285736508439?text=Halo%20BetheOne%20Dev,%20saya%20ingin%20konsultasi%20project">
                <Button variant="outline" size="lg" className="w-full sm:w-auto glass">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Layanan Kami</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Solusi teknologi komprehensif untuk berbagai kebutuhan digital Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8 text-primary" />, title: "Web Development", desc: "Pembuatan website modern dan responsif." },
              { icon: <Database className="w-8 h-8 text-accent" />, title: "Sistem Informasi", desc: "Sistem akademik, administrasi, dan bisnis." },
              { icon: <LineChart className="w-8 h-8 text-primary" />, title: "Dashboard Monitoring", desc: "Dashboard data dan visualisasi." },
              { icon: <Palette className="w-8 h-8 text-accent" />, title: "UI/UX Design", desc: "Perancangan antarmuka aplikasi." },
              { icon: <Wrench className="w-8 h-8 text-primary" />, title: "Maintenance", desc: "Perawatan dan pengembangan sistem." },
              { icon: <GraduationCap className="w-8 h-8 text-accent" />, title: "Academic IT Consulting", desc: "Pendampingan project dan pengembangan aplikasi." }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio Preview */}
      <section className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-12"
        >
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Project Terbaik</h2>
              <p className="text-foreground/70 max-w-2xl">Beberapa karya digital yang telah kami kembangkan.</p>
            </div>
            <Link href="/project" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors">
              Lihat Semua <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Nexora", tech: "Next.js, TypeScript, Supabase", img: "/projects/nexora/nexora.png", slug: "nexora" },
              { title: "SkyPulse", tech: "React, TypeScript, OpenWeather API", img: "/projects/skypulse/skypulse.png", slug: "skypulse" },
              { title: "Monitoring Perikanan", tech: "React, Chart.js", img: "/projects/dashboard-perikanan/simoli-cekat.png", slug: "dashboard-monitoring-perikanan" }
            ].map((project, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group relative overflow-hidden rounded-2xl glass-card border border-white/10">
                <Link href={`/project/${project.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={project.img} alt={project.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent mb-2 block">{project.tech}</span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <Link href="/project" className="md:hidden flex items-center justify-center text-primary mt-4">
            Lihat Semua <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-24 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Kenapa Memilih <br/> <span className="text-primary">BetheOne Dev?</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Kami tidak sekadar membuat aplikasi, kami memberikan solusi yang skalabel, aman, dan dirancang khusus untuk memenuhi tujuan bisnis Anda.
              </p>
            </motion.div>
            
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                "Fast Development",
                "Responsive Design",
                "Scalable Architecture",
                "Affordable Pricing",
                "Free Consultation",
                "Dedicated Support"
              ].map((benefit, idx) => (
                <motion.div key={idx} variants={fadeIn} className="flex items-center space-x-3 bg-background/50 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                  <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-4xl pb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Siap memulai project Anda?</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Diskusikan ide dan kebutuhan Anda bersama tim kami. Dapatkan konsultasi gratis sekarang!
            </p>
            <Link href="https://wa.me/6285736508439?text=Halo%20BetheOne%20Dev,%20saya%20siap%20memulai%20project" className="inline-block">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full">
                Hubungi via WhatsApp
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
