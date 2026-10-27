"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    project: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Halo BetheOne Dev!%0A%0A`
      + `Perkenalkan saya *${formData.name}*.%0A`
      + `Email: ${formData.email}%0A`
      + `No. WhatsApp: ${formData.whatsapp}%0A%0A`
      + `Saya memiliki kebutuhan project:%0A`
      + `${formData.project}%0A%0A`
      + `Mohon informasi lebih lanjut. Terima kasih!`;

    // Direct to WhatsApp
    window.open(`https://wa.me/6285736508439?text=${message}`, '_blank');
  };

  return (
    <div className="container mx-auto px-6 max-w-6xl pt-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Hubungi <span className="text-primary">Kami</span></h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Mari diskusikan ide Anda dan wujudkan menjadi solusi digital yang nyata.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-card p-8 rounded-3xl space-y-8">
            <h3 className="text-2xl font-bold">Informasi Kontak</h3>
            <p className="text-foreground/70">
              Jangan ragu untuk menghubungi kami melalui form di samping, atau hubungi kami langsung melalui:
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp</p>
                  <a href="https://wa.me/6285736508439" className="text-foreground/70 hover:text-primary transition-colors">+62 857-3650-8439</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/20 text-accent rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <a href="mailto:contact@betheonedev.com" className="text-foreground/70 hover:text-accent transition-colors">contact@betheonedev.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nama Lengkap *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="text-sm font-medium">No. WhatsApp *</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="0812xxxx"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email (Opsional)</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium">Kebutuhan Project *</label>
              <textarea 
                id="project" 
                name="project" 
                required
                rows={5}
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Ceritakan detail project atau sistem yang Anda butuhkan..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-xl">
              Kirim ke WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
