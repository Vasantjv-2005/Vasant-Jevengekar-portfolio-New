"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

interface DockItem {
  icon: React.ReactNode
  label: string
  href: string
}

interface FloatingDockProps {
  items: DockItem[]
}

export function FloatingDock({ items }: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-2xl glass-card"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
    >
      {items.map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  )
}

function DockIcon({ mouseX, item }: { mouseX: any; item: DockItem }) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const heightSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <Link href={item.href} className="relative flex items-center justify-center rounded-full bg-secondary/80 hover:bg-secondary transition-colors border border-black/5 dark:border-white/5 group block">
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="flex items-center justify-center w-full h-full"
      >
        <span className="sr-only">{item.label}</span>
        <div className="text-foreground group-hover:text-primary transition-colors flex items-center justify-center scale-150">
          {item.icon}
        </div>
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none">
          {item.label}
        </div>
      </motion.div>
    </Link>
  )
}
