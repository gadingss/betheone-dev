"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Project", path: "/project" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 md:pt-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl rounded-2xl md:rounded-full px-5 md:px-7 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f111a]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/50"
            : "bg-white/[0.02] backdrop-blur-md border border-white/[0.05]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-accent tracking-tight"
          >
            BetheOne Dev
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-foreground/75 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started
              <ArrowUpRight size={14} />
            </Link>

            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden pt-4 pb-2 border-t border-white/[0.08] mt-3 space-y-2"
            >
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary font-semibold border border-primary/30"
                        : "text-foreground/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full mt-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-md"
              >
                Get Started
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
