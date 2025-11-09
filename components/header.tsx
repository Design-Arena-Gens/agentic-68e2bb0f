"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-provider";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" className="btn-ghost p-2 rounded-lg" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="btn-ghost p-2 rounded-lg" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#contact" className="btn-ghost p-2 rounded-lg" aria-label="Email"><Mail size={18} /></a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
