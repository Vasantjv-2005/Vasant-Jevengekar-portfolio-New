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

        <motion.div variants={item} className="flex gap-6">
          {[
            { icon: <Linkedin className="size-6" />, href: "https://www.linkedin.com/in/j-vasant-3226612b5/" },
            { icon: <Github className="size-6" />, href: "https://github.com/Vasantjv-2005" },
            { icon: <Mail className="size-6" />, href: "mailto:vasantjv2005@gmail.com" },
            { icon: <Image src="/images/x.png" alt="X" width={24} height={24} className="rounded-sm object-contain" />, href: "https://x.com/VasantJeve78956" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-secondary/50 backdrop-blur-md border border-white/5 hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
