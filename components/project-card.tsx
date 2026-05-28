"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MagicCard } from "./ui/magic-card"
import { CardContent } from "./ui/card"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  image: string
  liveLink?: string
  githubLink?: string
  link?: string
  technologies: { name: string; src: string; invertDark?: boolean }[]
}

export function ProjectCard({ title, description, longDescription, image, liveLink, githubLink, link, technologies }: ProjectCardProps) {
  return (
    <MagicCard className="group h-full flex flex-col rounded-2xl bg-transparent border border-black/10 dark:border-white/10 overflow-hidden hover:border-primary/50 transition-colors" glareColor="rgba(147, 51, 234, 0.2)">
      <div className="relative w-full h-56 overflow-hidden border-b border-black/5 dark:border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <CardContent className="flex-grow flex flex-col pt-6 px-6 pb-6 relative z-20 bg-transparent">
        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground mb-4">{description}</p>
        
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
          {longDescription}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-secondary/50 rounded-xl border border-black/5 dark:border-white/5">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2, scale: 1.1 }}
              className="relative w-7 h-7"
              title={tech.name}
            >
              <Image 
                src={tech.src} 
                alt={tech.name} 
                fill 
                className={`object-contain drop-shadow-md ${tech.invertDark ? 'dark:invert' : ''}`} 
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl font-semibold transition-all hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              Live Project
              <ExternalLink className="ml-2 size-4" />
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 bg-foreground/5 hover:bg-foreground/10 text-foreground border border-foreground/10 rounded-xl font-semibold transition-all"
            >
              GitHub Link
              <ExternalLink className="ml-2 size-4" />
            </a>
          )}
          {link && !liveLink && !githubLink && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl font-semibold transition-all hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
              View Project
              <ExternalLink className="ml-2 size-4" />
            </a>
          )}
        </div>
      </CardContent>
    </MagicCard>
  )
}
