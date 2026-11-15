"use client"

import Link from "next/link"
import { Home, User, Briefcase, FolderDot, BookOpen, Send } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Home", href: "#", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderDot },
  { label: "Research", href: "#publications", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: Send },
]

export function Navbar() {
  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-full bg-background/70 dark:bg-card/60 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg shadow-black/[0.03] dark:shadow-black/20 transition-all">
        {/* Left: Brand / Name */}
        <Link
          href="#"
          className="flex items-center gap-2 pl-2 sm:pl-3 group focus:outline-none"
        >
          <div className="size-7 sm:size-8 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center font-bold text-xs text-primary group-hover:scale-105 transition-transform">
            VJ
          </div>
          <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-foreground group-hover:text-primary transition-colors hidden min-[400px]:inline-block">
            Vasant Jevengekar
          </span>
        </Link>

        {/* Center: Floating Pill Navigation */}
        <nav aria-label="Main Navigation" className="flex items-center gap-0.5 sm:gap-1 bg-secondary/40 dark:bg-secondary/20 p-1 rounded-full border border-black/5 dark:border-white/5">
          {navLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-background/80 dark:hover:bg-card/80 transition-all duration-200"
              >
                <Icon className="size-3.5" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right: Theme Toggle */}
        <div className="pr-1">
          <ThemeToggle isStandalone={false} />
        </div>
      </div>
    </header>
  )
}
