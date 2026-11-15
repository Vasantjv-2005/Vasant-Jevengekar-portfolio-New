"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface ThemeToggleProps {
  className?: string
  isStandalone?: boolean
}

export function ThemeToggle({ className = "", isStandalone = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    const btn = (
      <Button 
        variant="outline" 
        size="icon" 
        disabled 
        className={`size-9 rounded-full border-black/10 dark:border-white/10 bg-background/50 backdrop-blur-sm ${className}`}
      >
        <Sun className="size-4" />
      </Button>
    )
    return isStandalone ? <div className="fixed top-6 right-6 z-50">{btn}</div> : btn
  }

  const btn = (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`size-9 rounded-full border-black/10 dark:border-white/10 bg-background/50 hover:bg-secondary backdrop-blur-sm transition-all duration-300 hover:rotate-12 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="size-4 transition-transform duration-300" />
      ) : (
        <Sun className="size-4 transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )

  return isStandalone ? <div className="fixed top-6 right-6 z-50">{btn}</div> : btn
}
