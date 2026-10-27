import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2, Sparkles } from "lucide-react";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - BetheOne Dev`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="container mx-auto px-6 max-w-5xl pt-10 pb-24 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors glass px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Semua Project</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Action Buttons: Live Demo & GitHub */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all"
          >
            <ExternalLink size={18} />
            <span>Kunjungi Live Demo</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-foreground font-medium hover:bg-white/10 hover:scale-[1.02] transition-all"
          >
            <GitBranch size={18} />
            <span>Repository GitHub</span>
          </a>
        </div>
      </div>

      {/* Slideshow */}
      <ProjectSlideshow
        title={project.title}
        images={project.images && project.images.length > 0 ? project.images : [project.image]}
      />

      {/* Detail Content Section */}
      <div className="grid md:grid-cols-3 gap-8 pt-6">
        <div className="md:col-span-2 space-y-6">
          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Tentang Project</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed text-base">
              {project.longDescription}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4">
            <h3 className="text-xl font-bold text-foreground">Fitur & Keunggulan</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Desain responsif dan dioptimasi untuk performa tinggi di semua ukuran layar.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Arsitektur kode bersih, modular, dan mudah dikembangkan untuk jangka panjang.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Integrasi modern menggunakan teknologi standar industri terbaru.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-5">
            <h3 className="text-lg font-bold text-foreground border-b border-white/5 pb-3">
              Informasi Project
            </h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-foreground/50 block text-xs mb-1">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Selesai / Live
                </span>
              </div>

              <div>
                <span className="text-foreground/50 block text-xs mb-1">Teknologi Utama</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-foreground/50 block text-xs mb-1">Akses Tautan</span>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs text-primary hover:underline"
                  >
                    <span className="flex items-center gap-1.5">
                      <ExternalLink size={13} />
                      Live Demo URL
                    </span>
                    <span className="text-foreground/40 text-[10px]">↗</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs text-foreground/70 hover:text-white hover:underline"
                  >
                    <span className="flex items-center gap-1.5">
                      <GitBranch size={13} />
                      Source Code GitHub
                    </span>
                    <span className="text-foreground/40 text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="glass-card p-6 rounded-2xl text-center space-y-3 bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
            <h4 className="font-bold text-sm">Tertarik dengan project seperti ini?</h4>
            <p className="text-xs text-foreground/70">Konsultasikan kebutuhan pembuatan website atau sistem Anda bersama kami.</p>
            <Link
              href="https://wa.me/6285736508439?text=Halo%20BetheOne%20Dev,%20saya%20tertarik%20dengan%20project%20seperti%20"
              className="inline-block w-full py-2.5 px-4 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md"
            >
              Hubungi Kami via WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Other Projects Preview */}
      {otherProjects.length > 0 && (
        <div className="pt-12 border-t border-white/5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Project Lainnya</h3>
            <Link href="/project" className="text-sm text-primary hover:underline">
              Lihat Semua →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/project/${p.slug}`}
                className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-bold group-hover:text-primary transition-colors mb-2 line-clamp-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-foreground/70 line-clamp-2 mb-4 flex-grow">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] text-primary">
                    {p.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="bg-primary/10 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
