"use client"

import { motion } from "framer-motion"
import { Sparkles, Code2, Cpu, GraduationCap } from "lucide-react"

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  }

  return (
    <section id="about" className="relative py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6 relative z-10"
      >
        {/* Top Pill Badge */}
        <motion.div variants={item} className="flex items-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="size-3" />
            <span>About Me</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Designing the <span className="gradient-text">Future</span> of the Web
          </h2>
        </motion.div>

        {/* Narrative Paragraphs */}
        <motion.div variants={item} className="space-y-4 max-w-3xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;m a web developer and designer with a passion for creating elegant solutions to complex problems.
            With expertise in React, Next.js, and modern web technologies, I build responsive and accessible web
            applications that make a difference.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            As an aspiring full-stack developer, I&apos;ve been actively building my skills through self-driven
            projects, internships, and continuous learning.
          </p>
        </motion.div>

        {/* Highlights Row matching Hero Section aesthetic */}
        <motion.div variants={item} className="grid sm:grid-cols-3 gap-3.5 pt-2">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-black/5 dark:border-white/5 backdrop-blur-sm space-y-1.5 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Code2 className="size-4 text-primary" />
              <span>Modern Frontend</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              React 19, Next.js 15, TypeScript, Tailwind CSS, &amp; Framer Motion.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-black/5 dark:border-white/5 backdrop-blur-sm space-y-1.5 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Cpu className="size-4 text-primary" />
              <span>Scalable Backend</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Node.js, Go, PostgreSQL, MongoDB, Redis, Docker, &amp; REST APIs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-2xl bg-secondary/40 dark:bg-card/40 border border-black/5 dark:border-white/5 backdrop-blur-sm space-y-1.5 transition-all hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <GraduationCap className="size-4 text-primary" />
              <span>AI Research</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Published author in AI Skill Graph Frameworks for employability.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
