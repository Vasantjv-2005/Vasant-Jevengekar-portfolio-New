"use client"

import * as React from "react"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function Clock({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = React.useState(false)
  const [now, setNow] = React.useState<Date>(() => new Date())

  React.useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return <span className={className}>--:--:-- --</span>
  }

  let hours = now.getHours()
  const ampm = hours >= 12 ? "PM" : "AM"
  hours = hours % 12
  hours = hours ? hours : 12
  const hh = pad(hours)
  const mm = pad(now.getMinutes())
  const ss = pad(now.getSeconds())

  return (
    <span suppressHydrationWarning className={className}>
      {`${hh}:${mm}:${ss} ${ampm}`}
    </span>
  )
}
