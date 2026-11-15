"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, FileText, ArrowUpRight, Sparkles, MapPin } from "lucide-react"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5
      } 
    },
  }

  return (
    <section className="relative pt-12 sm:pt-16 pb-12 px-4 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 relative z-10"
      >
        {/* Top Header Row: Avatar + Greeting & Role */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
          {/* Avatar with subtle glow and live status ring */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-cyan-500/20 to-primary/30 blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative size-24 sm:size-28 md:size-32 rounded-full overflow-hidden border-2 border-background dark:border-card shadow-md">
              <Image
                src="/images/vasant.jpg.jpeg"
                alt="Vasant Jevengekar"
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            {/* Live Status indicator */}
            <div 
              className="absolute bottom-1 right-1 flex items-center justify-center size-5 rounded-full bg-background border-2 border-background dark:border-card shadow-sm"
              title="Available for opportunities"
            >
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500"></span>
              </span>
            </div>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="size-3" />
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Hi, <span className="gradient-text">Vasant</span> here
            </h1>

            <p className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground font-medium">
              <span>Full-Stack Engineer &amp; AI Researcher</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="inline-flex items-center gap-1 text-foreground/80">
                <MapPin className="size-3.5 text-primary" />
                India
              </span>
            </p>
          </div>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div variants={item} className="space-y-4 max-w-2xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I build cinematic web experiences, intelligent AI frameworks, and scalable full-stack applications. 
            I enjoy solving complex engineering problems from first principles, designing intuitive interfaces, 
            and building fast, reliable software that people actually use.
          </p>

          {/* "Right now building" Line */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground pt-1">
            <span>Right now building</span>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 hover:bg-amber-500/20 hover:scale-105 transition-all shadow-sm group"
            >
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-amber-500"></span>
              </span>
              <span className="font-semibold text-foreground group-hover:text-amber-500 transition-colors">Life-Flow</span>
              <span className="text-[11px] text-muted-foreground hidden sm:inline">— AI Decision Simulation</span>
              <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Action Buttons: Get in touch & Resume/CV */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          {/* Get in touch */}
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm text-background bg-foreground hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-foreground/10"
          >
            <Mail className="size-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Get in touch</span>
          </Link>

          {/* Resume / CV */}
          <a
            href="/Vasant%20Jevengekar%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm text-foreground bg-secondary/80 hover:bg-secondary border border-black/10 dark:border-white/10 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <FileText className="size-4 text-primary transition-transform group-hover:scale-110" />
            <span>Resume / CV</span>
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div variants={item} className="flex items-center gap-5 sm:gap-6 pt-3 text-muted-foreground/80 border-t border-black/5 dark:border-white/5">
          {/* X (Twitter) */}
          <a
            href="https://x.com/VasantJeve78956"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5 stroke-[1.6]" fill="none" stroke="currentColor">
              <path d="M4 4l16 16m0-16L4 20" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/j-vasant-3226612b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5 stroke-[1.6]" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <line x1="8" y1="11" x2="8" y2="17" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
              <line x1="12" y1="11" x2="12" y2="17" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vasantjv-2005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5 stroke-[1.6]" fill="none" stroke="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Peerlist */}
          <a
            href="https://peerlist.io/vasantjv2005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vasant Jevengekar on Peerlist"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5 stroke-[1.6]" fill="none" stroke="currentColor">
              <circle cx="6" cy="12" r="3" />
              <ellipse cx="12" cy="12" rx="2.5" ry="4" />
              <ellipse cx="18" cy="12" rx="1.5" ry="5" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:vasantjv2005@gmail.com"
            aria-label="Email"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-4 sm:size-5 stroke-[1.6]" fill="none" stroke="currentColor">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
