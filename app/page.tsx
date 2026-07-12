"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  FileText,
  Send,
  Palette,
  Code2,
  Database,
  GraduationCap,
  Briefcase,
  Home,
  User,
  FolderDot,
  ExternalLink
} from "lucide-react"
import Image from "next/image"
import { Clock } from "@/components/clock"
import { VisitorCounter } from "@/components/visitor-counter"
import { motion } from "framer-motion"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingDock } from "@/components/ui/floating-dock"
import { MagicCard } from "@/components/ui/magic-card"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  const dockItems = [
    { icon: <Home className="size-5" />, label: "Home", href: "#" },
    { icon: <User className="size-5" />, label: "About", href: "#about" },
    { icon: <Briefcase className="size-5" />, label: "Experience", href: "#experience" },
    { icon: <FolderDot className="size-5" />, label: "Projects", href: "#projects" },
    { icon: <Send className="size-5" />, label: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-primary/30 selection:text-primary">
      <CursorGlow />
      <AnimatedBackground />
      
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <FloatingDock items={dockItems} />

      <HeroSection />

      {/* About Me Section - Cinematic Split */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="container mx-auto px-4 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Designing the <span className="gradient-text">Future</span> of the Web
            </h2>
            <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a web developer and designer with a passion for creating elegant solutions to complex problems.
                With expertise in React, Next.js, and modern web technologies, I build responsive and accessible web
                applications that make a difference.
              </p>
              <p>
                As an aspiring full-stack developer, I&apos;ve been actively building my skills through self-driven
                projects, internships, and continuous learning.
              </p>
            </div>
          </div>
          <MagicCard className="p-8 glass-card border-black/5 dark:border-white/5 rounded-3xl" glareColor="rgba(6, 182, 212, 0.2)">
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every great developer has an origin story. Mine involves late nights, endless cups of coffee, and an insatiable curiosity for how things work on the web.
            </p>
          </MagicCard>
        </div>
      </motion.section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Technical Skills - Bento Grid */}
      <motion.section 
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-4 py-32"
      >
        <motion.div variants={fadeUpVariant} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="text-xl text-muted-foreground">The tools I use to build digital experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div variants={fadeUpVariant} className="md:col-span-1">
            <MagicCard className="h-full glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/20 rounded-2xl glow-border">
                  <Code2 className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React', src: '/react.png' },
                  { name: 'Next.js', src: '/next.png' },
                  { name: 'TypeScript', src: '/ty.png' },
                  { name: 'Tailwind', src: '/tailwind.png' },
                  { name: 'HTML', src: '/images/html.png' },
                  { name: 'CSS', src: '/images/css.png' },
                  { name: 'JavaScript', src: '/images/js.png' },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <Image src={tech.src} alt={tech.name} width={40} height={40} className="mb-3 object-contain drop-shadow-lg" />
                    <span className="text-xs font-medium text-foreground/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="md:col-span-1">
            <MagicCard className="h-full glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-black dark:bg-white rounded-2xl glow-border">
                  <Database className="size-8 text-white dark:text-black" />
                </div>
                <h3 className="text-2xl font-bold">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Node.js', src: '/images/node.png' },
                  { name: 'MongoDB', src: '/mongodb.png' },
                  { name: 'Redis', src: '/images/redis.png' }
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <Image src={tech.src} alt={tech.name} width={40} height={40} className="mb-3 object-contain drop-shadow-lg" />
                    <span className="text-xs font-medium text-foreground/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="md:col-span-1">
            <MagicCard className="h-full glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/20 rounded-2xl glow-border">
                  <Briefcase className="size-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'VS Code', src: '/images/vs.png' },
                  { name: 'Antigravity', src: '/images/anti.png' },
                  { name: 'GitHub', src: '/github.png', invert: true },
                  { name: 'Vercel', src: '/images/vercel.png', invert: true },
                  { name: 'Netlify', src: '/images/net.png' },
                  { name: 'Postman', src: '/images/postman.png' }
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <Image src={tech.src} alt={tech.name} width={40} height={40} className={`mb-3 object-contain drop-shadow-lg ${tech.invert ? 'dark:invert' : ''}`} />
                    <span className="text-xs font-medium text-foreground/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </motion.section>

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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div variants={fadeUpVariant} className="h-full">
            <ProjectCard
              title="Integrated Food Delivery System"
              description="Full-Stack Food Delivery Platform"
              longDescription="An integrated food delivery system is a full-stack application that allows users to browse restaurants, explore menus, add items to a cart, place orders, make payments, and track deliveries in real time."
              image="/6.png"
              link="https://github.com/Vasantjv-2005/Integrated-Food-Delivery-and-Dine-out-Hospitality-platform.git"
              technologies={[
                { name: 'React', src: '/react.png' },
                { name: 'Tailwind CSS', src: '/tailwind.png' },
                { name: 'TypeScript', src: '/ty.png' },
                { name: 'Next.js', src: '/next.png', invertDark: true },
                { name: 'MongoDB', src: '/mongodb.png' }
              ]}
            />
          </motion.div>
          
          <motion.div variants={fadeUpVariant} className="h-full">
            <ProjectCard
              title="Meter Flow"
              description="API Key Management Platform"
              longDescription="Generate, manage, and test API keys with production-ready analytics. Built with modern design principles and developer experience in mind."
              image="/2.png"
              link="https://github.com/Vasantjv-2005/METER-FLOW-API.git"
              technologies={[
                { name: 'React', src: '/react.png' },
                { name: 'TypeScript', src: '/ty.png' },
                { name: 'Tailwind CSS', src: '/tailwind.png' },
                { name: 'Next.js', src: '/next.png', invertDark: true },
                { name: 'MongoDB', src: '/mongodb.png' }
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUpVariant} className="h-full">
            <ProjectCard
              title="Bug Tracker"
              description="Bug Tracking System"
              longDescription="A powerful bug tracking system used to track, manage, and resolve bugs efficiently. Built with modern design principles and real-time updates."
              image="/1.png"
              liveLink="https://bug-tracker-project-o1em.vercel.app/"
              githubLink="https://github.com/Vasantjv-2005/Bug-Tracker-project.git"
              technologies={[
                { name: 'React', src: '/react.png' },
                { name: 'Tailwind CSS', src: '/tailwind.png' },
                { name: 'Node.js', src: '/images/node.png' },
                { name: 'Next.js', src: '/next.png', invertDark: true },
                { name: 'MongoDB', src: '/mongodb.png' }
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUpVariant} className="h-full">
            <ProjectCard
              title="Canvas Collab"
              description="Real-Time Collaborative Drawing"
              longDescription="A real-time collaborative canvas application built with modern web technologies, enabling multiple users to draw and create together seamlessly."
              image="/3.png"
              link="https://canvas-collab-five.vercel.app/"
              technologies={[
                { name: 'React', src: '/react.png' },
                { name: 'TypeScript', src: '/ty.png' },
                { name: 'Tailwind CSS', src: '/tailwind.png' },
                { name: 'Next.js', src: '/next.png', invertDark: true }
              ]}
            />
          </motion.div>
        </div>
      </motion.section>

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
            
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="flex items-center gap-2 text-sm bg-secondary/50 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 text-foreground">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
                Local time: <Clock className="font-mono text-foreground" />
              </p>
              <VisitorCounter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

