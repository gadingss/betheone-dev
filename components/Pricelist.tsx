"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap, Layers, Server, Code, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface TierPlan {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

const tierPlans: TierPlan[] = [
  {
    name: "Starter / Landing",
    tagline: "Cocok untuk UMKM, profil bisnis, atau landing page promosi.",
    price: "Mulai Rp 1.500.000",
    priceNote: "One-time payment",
    popular: false,
    features: [
      "1-5 Halaman Responsif",
      "Desain Modern & Fast Loading",
      "Integrasi WhatsApp & Kontak",
      "SEO Dasar & Google Indexing",
      "Domain & Hosting 1 Tahun",
      "Free Revisi Minor 2x",
      "Garansi Bug 1 Bulan"
    ],
    waMessage: "Halo BetheOne Dev, saya tertarik dengan Paket Starter / Landing Page."
  },
  {
    name: "Business / Pro",
    tagline: "Solusi terbaik untuk sistem informasi, e-commerce, atau dashboard kustom.",
    price: "Mulai Rp 3.500.000",
    priceNote: "One-time payment",
    popular: true,
    features: [
      "Semua fitur Paket Starter",
      "Sistem Database & Autentikasi",
      "Dashboard Admin & Visualisasi Data",
      "Integrasi API & Payment Gateway",
      "Export Data (PDF / Excel)",
      "Source Code Lengkap",
      "Garansi Bug & Support 3 Bulan"
    ],
    waMessage: "Halo BetheOne Dev, saya tertarik dengan Paket Business / Pro."
  },
  {
    name: "Enterprise / Custom",
    tagline: "Pengembangan sistem berskala besar, multi-role, atau integrasi IoT.",
    price: "Custom",
    priceNote: "Sesuai kebutuhan sistem",
    popular: false,
    features: [
      "Arsitektur Skalabel & High Performance",
      "Multi-user Role & Custom Workflow",
      "Integrasi IoT / Smart Device / Web3",
      "Cloud Infrastructure & Setup CI/CD",
      "Dokumentasi Teknis Lengkap & API",
      "SLA & Dedicated Priority Support",
      "Maintenance Berkala"
    ],
    waMessage: "Halo BetheOne Dev, saya ingin konsultasi kebutuhan Paket Enterprise / Custom."
  }
];

const serviceBreakdowns = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Website & Company Profile",
    price: "Rp 1.000.000 - Rp 2.500.000",
    desc: "Landing page, portofolio instansi, atau web branding dengan desain responsif.",
    timeline: "3 - 7 Hari Kerja",
    wa: "Halo BetheOne Dev, saya ingin pesan layanan Website / Company Profile."
  },
  {
    icon: <Layers className="w-6 h-6 text-accent" />,
    title: "Sistem Informasi & Dashboard",
    price: "Rp 3.000.000 - Rp 7.500.000",
    desc: "Sistem reservasi, inventaris, manajemen data, e-commerce, atau dashboard analytics.",
    timeline: "2 - 4 Minggu",
    wa: "Halo BetheOne Dev, saya ingin pesan layanan Sistem Informasi & Dashboard."
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Project Akademik / Tugas Akhir",
    price: "Rp 800.000 - Rp 3.000.000",
    desc: "Pendampingan skripsi/TA, prototype aplikasi web/mobile, integrasi IoT, dan machine learning.",
    timeline: "1 - 3 Minggu",
    wa: "Halo BetheOne Dev, saya butuh pendampingan/pembuatan Project Akademik / Tugas Akhir."
  },
  {
    icon: <Server className="w-6 h-6 text-accent" />,
    title: "Maintenance & Bug Fixing",
    price: "Mulai Rp 500.000",
    desc: "Perbaikan error sistem, optimasi performa, update fitur baru, atau migrasi server.",
    timeline: "1 - 5 Hari Kerja",
    wa: "Halo BetheOne Dev, saya membutuhkan layanan Maintenance / Bug Fixing."
  }
];

export const Pricelist: React.FC = () => {
  const getWhatsAppUrl = (text: string) => {
    return `https://wa.me/6285736508439?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="space-y-20 pt-16">
      {/* Header Pricelist */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
          <Zap size={14} />
          <span>Transparan & Fleksibel</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Pilihan Paket & <span className="text-primary">Pricelist</span>
        </h2>
        <p className="text-foreground/70 text-base md:text-lg">
          Investasi terbaik untuk mewujudkan solusi digital yang scalable, modern, dan tepat sasaran.
        </p>
      </div>

      {/* Tier Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {tierPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${
              plan.popular
                ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-100 md:-translate-y-2"
                : "border border-white/5 hover:border-primary/30"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                <Sparkles size={13} />
                <span>Paling Diminati</span>
              </div>
            )}

            <div className="mb-6 space-y-2">
              <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-xs text-foreground/70 min-h-[36px]">{plan.tagline}</p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/5 space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{plan.price}</div>
              {plan.priceNote && (
                <span className="text-xs text-foreground/50">{plan.priceNote}</span>
              )}
            </div>

            <div className="flex-grow space-y-3 mb-8">
              <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider block mb-2">
                Fitur Termasuk:
              </span>
              {plan.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <div className="p-0.5 rounded-full bg-primary/20 text-primary mt-0.5 shrink-0">
                    <Check size={13} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl(plan.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <Button
                variant={plan.popular ? "primary" : "outline"}
                size="md"
                className="w-full rounded-xl"
              >
                <span>Pilih Paket Ini</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Breakdown Per Layanan */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold">
            Estimasi Biaya <span className="text-accent">Per Layanan</span>
          </h3>
          <p className="text-sm text-foreground/70">
            Perkiraan kisaran harga untuk layanan spesifik. Biaya akhir disesuaikan dengan kompleksitas kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceBreakdowns.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                      <span className="text-xs text-foreground/50">Estimasi: {item.timeline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs text-foreground/50 block">Kisaran Biaya</span>
                  <span className="text-base font-bold text-primary">{item.price}</span>
                </div>
                <a
                  href={getWhatsAppUrl(item.wa)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <span>Konsultasi</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-accent/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-4">
          <div className="p-3.5 bg-primary/20 text-primary rounded-2xl shrink-0">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground">Garansi & Layanan Purna Jual</h4>
            <p className="text-xs md:text-sm text-foreground/70">
              Setiap pengerjaan dilengkapi garansi bug fix, panduan penggunaan, serta pendampingan langsung hingga sistem berjalan lancar.
            </p>
          </div>
        </div>
        <Link href="/contact" className="shrink-0">
          <Button variant="outline" size="sm" className="rounded-xl glass">
            Tanya Detail Garansi
          </Button>
        </Link>
      </div>
    </section>
  );
};
