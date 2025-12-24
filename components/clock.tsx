"use client"

import * as React from "react"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function Clock({ className = "" }: { className?: string }) {
  const [now, setNow] = React.useState<Date>(() => new Date())

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const hh = pad(now.getHours())
  const mm = pad(now.getMinutes())
  const ss = pad(now.getSeconds())

  return <span suppressHydrationWarning className={className}>{`${hh}:${mm}:${ss}`}</span>
}
