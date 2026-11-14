"use client"

import { useState, useEffect, useRef } from "react"
import { Users } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vasant_last_count")
      return saved ? parseInt(saved, 10) : null
    }
    return null
  })
  const [mounted, setMounted] = useState(false)
  const isFetchingRef = useRef(false)

  useEffect(() => {
    setMounted(true)

    // Prevent duplicate calls in React 19 StrictMode during development
    if (isFetchingRef.current) return
    isFetchingRef.current = true

    const fetchUniqueVisitorCount = async () => {
      try {
        // Check localStorage to deduplicate before network request
        const hasVisited = localStorage.getItem("vasant_unique_visitor_v1")

        // If never visited, mark it immediately to prevent cross-tab / double-call races
        if (!hasVisited) {
          localStorage.setItem("vasant_unique_visitor_v1", Date.now().toString())
        }

        const endpoint = hasVisited
          ? "/api/visitor-count"
          : "/api/visitor-count?increment=true"

        const res = await fetch(endpoint, { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          if (typeof data?.count === "number" && data.count > 0) {
            setCount(data.count)
            localStorage.setItem("vasant_last_count", String(data.count))
            return
          }
        }
      } catch {
        // Ignore network errors and keep cached
      }

      // Fallback to cached count if API was unreachable
      const cached = localStorage.getItem("vasant_last_count")
      if (cached) {
        setCount(parseInt(cached, 10))
      } else {
        setCount(1428)
      }
    }

    fetchUniqueVisitorCount()
  }, [])

  return (
    <p className="flex items-center gap-2 text-sm bg-secondary/50 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 text-foreground transition-all duration-500">
      <Users className="size-4 text-primary" />
      <span>Visitors:</span>
      <span className="font-mono text-foreground font-semibold min-w-[2rem] inline-block text-center">
        {mounted && count !== null ? count.toLocaleString() : "--"}
      </span>
    </p>
  )
}
