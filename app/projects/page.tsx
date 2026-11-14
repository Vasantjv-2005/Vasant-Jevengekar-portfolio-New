"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, FolderDot, Home, User, Briefcase, BookOpen, Send } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingDock } from "@/components/ui/floating-dock"
import { ProjectCard } from "@/components/project-card"
import { ALL_PROJECTS } from "@/lib/projects-data"
import { Clock } from "@/components/clock"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function ProjectsPage() {
  const dockItems = [
    { icon: <Home className="size-5" />, label: "Home", href: "/" },
    { icon: <User className="size-5" />, label: "About", href: "/#about" },
    { icon: <Briefcase className="size-5" />, label: "Experience", href: "/#experience" },
    { icon: <FolderDot className="size-5" />, label: "Projects", href: "/projects" },
    { icon: <BookOpen className="size-5" />, label: "Publications", href: "/#publications" },
    { icon: <Send className="size-5" />, label: "Contact", href: "/#contact" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-primary/30 selection:text-primary">
      <CursorGlow />
      <AnimatedBackground />

      {/* Theme Toggle & Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-black/10 dark:border-white/10 hover:border-primary/50 text-sm font-semibold text-foreground transition-all hover:scale-105"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <FloatingDock items={dockItems} />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-40 relative z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-[400px] bg-primary/5 blur-[160px] -z-10 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <FolderDot className="size-3.5" />
            <span>Complete Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of platforms, web applications, and interactive systems I have designed, developed, and am actively building.
          </p>
        </div>

        {/* All Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {ALL_PROJECTS.map((project) => (
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
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 bg-background/80 backdrop-blur-xl relative z-20 pb-24 md:pb-10">
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
