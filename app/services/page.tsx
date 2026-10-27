"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Pricelist } from "@/components/Pricelist";

const businessServices = [
  "Company Profile Website",
  "Sistem Informasi Terintegrasi",
  "Dashboard Monitoring & Analytics",
  "Landing Page & Marketing Web",
  "Maintenance & Support System"
];

const academicServices = [
  "Konsultasi Pemrograman & Algoritma",
  "Pendampingan Project IT Mahasiswa",
  "Prototype Aplikasi Tugas Akhir",
  "Perancangan UML dan Database",
  "Pengembangan Web berbasis Laravel",
  "React & Next.js Development",
  "Python Scripting & Automation",
  "Machine Learning Assistance"
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 max-w-7xl pt-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Layanan <span className="text-primary">Profesional</span></h1>
        <p className="text-xl text-foreground/70">
          Solusi teknologi yang disesuaikan untuk kebutuhan Bisnis dan Akademik Anda.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Business Solutions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 bg-primary/20 text-primary rounded-2xl">
              <Briefcase size={32} />
            </div>
            <h2 className="text-2xl font-bold">Business Solutions</h2>
          </div>
          <p className="text-foreground/70 mb-8">
            Bantu digitalisasi UMKM, instansi, dan perusahaan Anda dengan sistem yang modern, aman, dan dapat diandalkan.
          </p>
          <ul className="space-y-4">
            {businessServices.map((service, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Academic Solutions */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 bg-accent/20 text-accent rounded-2xl">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-2xl font-bold">Academic Solutions</h2>
          </div>
          <p className="text-foreground/70 mb-8">
            Bimbingan dan pendampingan khusus untuk mahasiswa IT dalam menyelesaikan project dan tugas akhir.
          </p>
          <ul className="space-y-4">
            {academicServices.map((service, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-xl mb-6">Punya kebutuhan khusus yang tidak ada di daftar?</p>
        <Link href="/contact">
          <Button size="lg" className="rounded-full">
            Diskusikan Dengan Kami
          </Button>
        </Link>
      </motion.div>

      <Pricelist />
    </div>
  );
}
