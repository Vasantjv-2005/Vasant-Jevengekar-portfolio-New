"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface MagicCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  id?: string
}

export function MagicCard({ children, className = "", glareColor = "rgba(255,255,255,0.1)", id }: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  return (
    <motion.div
      id={id}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full rounded-xl transition-all duration-300 ease-out ${isHovered ? "z-10 shadow-2xl" : "z-0"} ${className}`}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, ${glareColor}, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
      {children}
    </motion.div>
  )
}
