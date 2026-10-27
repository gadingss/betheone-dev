"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Eye, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects-data";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-6 max-w-7xl pt-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Project <span className="text-primary">Terbaik Kami</span></h1>
        <p className="text-xl text-foreground/70">
          Eksplorasi berbagai project digital yang telah kami kembangkan untuk klien dan mitra kami.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.slug || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary/30 transition-all duration-300"
          >
            <Link href={`/project/${project.slug}`} className="relative aspect-video overflow-hidden bg-white/5 block">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            
            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <Link href={`/project/${project.slug}`} className="group/title">
                <h3 className="text-xl font-bold mb-3 group-hover/title:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} className="opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all text-primary" />
                </h3>
              </Link>

              <p className="text-foreground/70 text-sm mb-5 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 text-xs">
                <Link 
                  href={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                >
                  <Eye size={14} />
                  <span>Detail Project</span>
                </Link>

                <div className="flex items-center gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/70 hover:text-white transition-colors"
                  >
                    <ExternalLink size={13} />
                    <span>Live Demo</span>
                  </a>
                  <span className="text-white/20">•</span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground/70 hover:text-white transition-colors"
                  >
                    <GitBranch size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
