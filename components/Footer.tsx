import React from "react";
import Link from "next/link";
import { GitBranch, Globe, Briefcase, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 block">
              BetheOne Dev
            </Link>
            <p className="text-foreground/70 max-w-md mb-6 leading-relaxed">
              Transforming Ideas Into Digital Solutions. We help businesses, organizations, and students build robust web applications and information systems.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors">
                <GitBranch size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="mailto:contact@betheonedev.com" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/project" className="text-foreground/70 hover:text-primary transition-colors">Project</Link></li>
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">Web Development</li>
              <li className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">UI/UX Design</li>
              <li className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">Dashboard Systems</li>
              <li className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">IT Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} BetheOne Dev. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
