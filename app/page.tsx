"use client"

import { Navbar } from "@/components/navbar"
import { Clock } from "@/components/clock"
import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, GraduationCap, Send, ArrowUpRight } from "lucide-react"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { MagicCard } from "@/components/ui/magic-card"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectCard } from "@/components/project-card"
import { ResearchSection } from "@/components/research-section"
import { StackSection } from "@/components/stack-section"
import { ALL_PROJECTS } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-primary/30 selection:text-primary">
      <CursorGlow />
      <AnimatedBackground />
      
      <Navbar />

      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Technical Skills - STACK Section */}
      <StackSection />

      {/* Projects Showcase */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-32 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
        
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-xl text-muted-foreground">Cinematic showcases of my latest work</p>
        </motion.div>

        {/* 2 Projects Visible */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ALL_PROJECTS.slice(0, 2).map((project) => (
            <motion.div key={project.id} variants={fadeUpVariant} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                longDescription={project.longDescription}
                image={project.image}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                link={project.link}
                technologies={project.technologies}
                statusBadge={project.statusBadge}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button - navigates to dedicated /projects page */}
        <motion.div variants={fadeUpVariant} className="text-center mt-12 flex justify-center items-center">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(var(--primary),0.25)]">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Research & Publications Section */}
      <ResearchSection />

      {/* Services & Education */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div variants={fadeUpVariant} className="space-y-8">
            <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
              <Palette className="size-10 text-primary" />
              Services
            </h2>
            <MagicCard className="p-8 glass-card rounded-3xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Web Designer</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I transform ideas into engaging digital experiences with visually stunning and user-friendly interfaces.
              </p>
            </MagicCard>
            <MagicCard className="p-8 glass-card rounded-3xl" glareColor="rgba(147, 51, 234, 0.2)">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Web Developer</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I build fast, functional, and user-focused websites turning ideas into interactive digital experiences using modern web technologies.
              </p>
            </MagicCard>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="space-y-8">
            <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
              <GraduationCap className="size-10 text-accent" />
              Education
            </h2>
            <MagicCard className="p-8 glass-card rounded-3xl mb-6 border-l-4 border-l-accent">
              <h3 className="text-2xl font-bold mb-2 text-foreground">BS-MS in Computer Science</h3>
              <p className="text-accent mb-4 font-mono text-sm">Vishwa Vishwani Institute · 2023 - Present</p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Bachelor of Science in Computer Science, focusing on modern software development practices and emerging technologies.
              </p>
            </MagicCard>
            <MagicCard className="p-8 glass-card rounded-3xl border-l-4 border-l-primary/50">
              <h3 className="text-2xl font-bold mb-2 text-foreground">High School</h3>
              <p className="text-primary/80 mb-4 font-mono text-sm">Narayana Junior College · Graduated 2020</p>
              <p className="text-muted-foreground leading-relaxed">
                Completed high school education with an outstanding 10.0 CGPA, demonstrating academic excellence and dedication to learning.
              </p>
            </MagicCard>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="container mx-auto px-4 py-40 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-card p-16 rounded-[3rem] shadow-xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Looking for a developer who builds <br className="hidden md:block"/>
            <span className="gradient-text">extraordinary</span> products?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            If you have an opportunity that deserves someone who actually delivers, let&apos;s build the future together.
          </p>
          <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)]">
            <a href="mailto:vasantjv2005@gmail.com">
              <Send className="mr-3 size-6" />
              Let’s Talk Now
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 mt-20 bg-background/80 backdrop-blur-xl relative z-20 pb-24 md:pb-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold">V</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Vasant Jevengekar</p>
                <p className="text-sm">Cinematic Web Experiences</p>
              </div>
            </div>
            
            <div className="flex items-center md:items-end">
              <p className="flex items-center gap-2 text-sm bg-secondary/50 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 text-foreground">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
                Local time: <Clock className="font-mono text-foreground" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

