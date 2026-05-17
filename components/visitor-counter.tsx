"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Check if this user has already visited to avoid incrementing on every refresh
        const hasVisited = localStorage.getItem("has_visited_portfolio")
        const url = hasVisited 
          ? "https://api.counterapi.dev/v1/vasant-portfolio/visits"
          : "https://api.counterapi.dev/v1/vasant-portfolio/visits/up"

        const response = await fetch(url)
        const data = await response.json()
        
        if (data && typeof data.count === 'number') {
          setCount(data.count)
          if (!hasVisited) {
            localStorage.setItem("has_visited_portfolio", "true")
          }
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error)
      }
    }

    fetchVisitorCount()
  }, [])

  return (
    <p className="flex items-center gap-2 text-sm bg-secondary/50 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 text-foreground transition-all duration-500">
      <Users className="size-4 text-primary" />
      Visitors: <span className="font-mono text-foreground">{count !== null ? count.toLocaleString() : "..."}</span>
    </p>
  )
}
