"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Send, FileText, Linkedin, Github, Mail } from "lucide-react"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto flex flex-col items-center relative z-10"
      >
        <motion.div variants={item} className="relative mb-12">
          <div className="absolute inset-0 rounded-full animated-border" />
          <Image
            src="/images/vasant.jpg.jpeg"
            alt="Vasant Jevengekar"
            width={180}
            height={180}
            className="rounded-full relative z-10 border-4 border-background p-1"
            priority
          />
        </motion.div>

        <motion.h1 variants={item} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          Hi, I&apos;m <span className="gradient-text">Vasant Jevengekar</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-3xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          I build <span className="text-foreground font-semibold">cinematic</span> and{" "}
          <span className="text-foreground font-semibold">scalable</span> web experiences using React, Next.js, and modern 3D technologies.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-6 justify-center mb-12">
          <Link href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-background bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 glow-border">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <Send className="mr-2 size-5" />
            <span className="relative">Get in Touch</span>
          </Link>
          
          <a href="/Vasant%20Jevengekar%20(2).pdf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-foreground bg-secondary/50 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <FileText className="mr-2 size-5" />
            <span className="relative">View Resume</span>
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-7 md:gap-9 text-muted-foreground/80">
          {/* X (Twitter) */}
          <a
            href="https://x.com/VasantJeve78956"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="size-5 md:size-6 stroke-[1.6]" fill="none" stroke="currentColor">
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
            <svg viewBox="0 0 24 24" className="size-5 md:size-6 stroke-[1.6]" fill="none" stroke="currentColor">
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
            <svg viewBox="0 0 24 24" className="size-5 md:size-6 stroke-[1.6]" fill="none" stroke="currentColor">
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
            <svg viewBox="0 0 24 24" className="size-5 md:size-6 stroke-[1.6]" fill="none" stroke="currentColor">
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
            <svg viewBox="0 0 24 24" className="size-5 md:size-6 stroke-[1.6]" fill="none" stroke="currentColor">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
