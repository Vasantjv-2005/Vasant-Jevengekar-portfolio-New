"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <Button variant="outline" size="icon" disabled>
          <Sun className="size-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <Moon className="size-5" /> : <Sun className="size-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
