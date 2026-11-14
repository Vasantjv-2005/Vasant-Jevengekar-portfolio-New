"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code2, Database, Terminal, Cpu, Sparkles } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"

interface TechPill {
  name: string
  icon?: string
  invertDark?: boolean
  svg?: React.ReactNode
}

const coreStack: TechPill[] = [
  { name: "React", icon: "/react.png" },
  { name: "Next.js", icon: "/next.png", invertDark: true },
  { name: "TypeScript", icon: "/ty.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "HTML5", icon: "/images/html.png" },
  { name: "CSS3", icon: "/images/css.png" },
  {
    name: "Go",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-[#00ADD8]">
        <path d="M1.811 10.231c-.047-.172-.032-.375.047-.5l1.047-1.422a.58.58 0 01.453-.25.86.86 0 01.375.094l2.422 1.344a.69.69 0 00.328.094.43.43 0 00.344-.172L8.797 6.7c.078-.11.078-.25 0-.36L7.36 4.969a.63.63 0 01-.156-.375c0-.188.094-.344.25-.453l1.453-.984a.67.67 0 01.422-.125c.188 0 .344.078.469.219l1.828 2.062a.66.66 0 00.5.219.57.57 0 00.422-.188l1.437-1.64c.11-.126.25-.188.422-.188.141 0 .282.047.391.141l1.547 1.25a.65.65 0 01.219.438.56.56 0 01-.141.422l-1.375 1.703c-.078.094-.094.219-.047.328.047.11.141.172.266.172h2.515c.188 0 .344.078.453.203.11.125.156.281.125.469l-.36 2.015c-.03.188-.14.329-.311.407a.64.64 0 01-.485 0l-2.422-.985a.57.57 0 00-.234-.047.46.46 0 00-.36.188l-1.78 2.375a.51.51 0 01-.422.219c-.141 0-.282-.063-.391-.188L9.203 12.36a.6.6 0 00-.469-.219.64.64 0 00-.437.188l-1.782 2.046a.63.63 0 01-.437.204.6.6 0 01-.422-.172l-1.578-1.516a.56.56 0 01-.172-.422c0-.172.078-.328.219-.437l2.094-1.688c.11-.078.156-.203.125-.328a.4.4 0 00-.156-.234L3.78 8.653a.62.62 0 00-.375-.125.56.56 0 00-.438.203L1.812 10.23zm10.953 4.14a4.11 4.11 0 01-1.39-3.203c0-1.25.437-2.312 1.328-3.187C13.594 7.105 14.656 6.67 15.89 6.67c1.25 0 2.313.437 3.203 1.312.89.875 1.344 1.938 1.344 3.188 0 1.234-.453 2.312-1.344 3.203-.89.89-1.953 1.328-3.203 1.328-1.234 0-2.296-.437-3.125-1.328z"/>
      </svg>
    )
  }
]

const backendStack: TechPill[] = [
  { name: "Node.js", icon: "/images/node.png" },
  {
    name: "Express.js",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M24 18.571l-4.148-7.143L24 4.286h-3.428l-2.429 4.285-2.428-4.285H12.28l4.148 7.142-4.148 7.143h3.429l2.428-4.286 2.429 4.286H24zM6.857 15.143c-2.368 0-4.286-1.918-4.286-4.286 0-2.368 1.918-4.286 4.286-4.286 1.777 0 3.313 1.077 3.978 2.625h2.89C13.003 5.485 10.207 3.429 6.857 3.429 2.766 3.429-.571 6.766-.571 10.857s3.337 7.429 7.428 7.429c3.35 0 6.146-2.057 6.868-4.753h-2.89c-.665 1.548-2.201 2.625-3.978 2.625z"/>
      </svg>
    )
  },
  { name: "MongoDB", icon: "/mongodb.png" },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-[#336791]">
        <path d="M12.016 0C5.38 0 0 5.38 0 12.016c0 6.635 5.38 12.015 12.016 12.015 6.635 0 12.015-5.38 12.015-12.015C24.03 5.38 18.65 0 12.016 0zm-.016 3.52c4.686 0 8.496 3.81 8.496 8.496 0 4.685-3.81 8.495-8.496 8.495S3.504 16.7 3.504 12.016c0-4.686 3.81-8.496 8.496-8.496z"/>
      </svg>
    )
  },
  { name: "Redis", icon: "/images/redis.png" },
  {
    name: "REST APIs",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="2">
        <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
      </svg>
    )
  }
]

const devopsStack: TechPill[] = [
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-[#2496ED]">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0-2.714h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 5.428h2.118a.185.185 0 00.186-.185V11.72a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.118a.185.185 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 2.714h2.12a.185.185 0 00.184-.185V11.72a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm17.51-2.15c-.247-.17-1.127-.677-2.39-.677-.852 0-1.636.257-2.186.634a6.837 6.837 0 00-1.87-2.585l-.544-.457-.457.543c-.496.59-1.042.946-1.667 1.085v-.012H.186A.186.186 0 000 12.01c.21 4.29 2.915 8.01 6.88 9.475a13.385 13.385 0 004.99.938c7.408 0 12.87-4.63 12.87-11.895 0-.472-.033-.94-.09-1.408a2.532 2.532 0 00-2.793-1.034z"/>
      </svg>
    )
  },
  { name: "GitHub", icon: "/github.png", invertDark: true },
  { name: "Vercel", icon: "/images/vercel.png", invertDark: true },
  { name: "Postman", icon: "/images/postman.png" },
  { name: "VS Code", icon: "/images/vs.png" },
  { name: "Netlify", icon: "/images/net.png" },
  { name: "Antigravity", icon: "/images/anti.png" }
]

const stackCategories = [
  {
    num: "01",
    title: "Core & Frontend",
    description: "Modern frameworks, types, and reactive styling systems",
    icon: <Code2 className="size-5 text-primary" />,
    items: coreStack,
    accentGlow: "rgba(6, 182, 212, 0.2)"
  },
  {
    num: "02",
    title: "Backend & Systems",
    description: "Robust application runtimes, databases, and APIs",
    icon: <Database className="size-5 text-emerald-500 dark:text-emerald-400" />,
    items: backendStack,
    accentGlow: "rgba(16, 185, 129, 0.2)"
  },
  {
    num: "03",
    title: "DevOps & Tooling",
    description: "Deployment pipelines, developer tools, and environments",
    icon: <Terminal className="size-5 text-purple-500 dark:text-purple-400" />,
    items: devopsStack,
    accentGlow: "rgba(168, 85, 247, 0.2)"
  }
]

export function StackSection() {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-24 md:py-32 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <Cpu className="size-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            A refined collection of core engineering technologies, backend architectures, and developer tooling
          </p>
        </div>

        {/* 3-Column Luxury Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat) => (
            <MagicCard
              key={cat.num}
              className="glass-card rounded-3xl p-6 md:p-7 border border-black/10 dark:border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-primary/40 transition-all duration-300"
              glareColor={cat.accentGlow}
            >
              {/* Subtle background number watermark */}
              <span className="absolute -top-4 -right-2 text-7xl font-black font-mono text-muted-foreground/[0.07] dark:text-muted-foreground/[0.05] pointer-events-none select-none">
                {cat.num}
              </span>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-secondary/80 dark:bg-white/[0.05] border border-black/5 dark:border-white/10 glow-border">
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground tracking-wider block">
                        STACK {cat.num}
                      </span>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-6 leading-relaxed relative z-10">
                  {cat.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {cat.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/50 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-primary/50 hover:bg-secondary/80 dark:hover:bg-white/[0.08] transition-all shadow-sm cursor-default"
                    >
                      {tech.icon ? (
                        <div className="relative size-4 shrink-0">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className={`object-contain ${tech.invertDark ? "dark:invert" : ""}`}
                          />
                        </div>
                      ) : (
                        <span className="shrink-0 flex items-center justify-center">
                          {tech.svg}
                        </span>
                      )}
                      <span className="text-xs font-medium text-foreground/90">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-muted-foreground relative z-10 font-mono">
                <span>{cat.items.length} Technologies</span>
                <span className="text-primary font-semibold">Production Ready</span>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
