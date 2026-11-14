import { NextRequest, NextResponse } from "next/server"

const FALLBACK_COUNT = 1428

export async function GET(request: NextRequest) {
  try {
    // Check if the visitor already has our unique visitor cookie
    const hasVisitorCookie = request.cookies.get("vasant_unique_visitor_v1")
    const url = new URL(request.url)
    
    // Strict deduplication: Only increment if they NEVER had the cookie
    const isNewVisitor = !hasVisitorCookie
    const shouldIncrement = isNewVisitor && url.searchParams.get("increment") === "true"

    const targetUrl = shouldIncrement
      ? "https://api.counterapi.dev/v1/vasant-portfolio/visits/up"
      : "https://api.counterapi.dev/v1/vasant-portfolio/visits/"

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const response = await fetch(targetUrl, {
      cache: "no-store",
      signal: controller.signal
    })
    clearTimeout(timeoutId)

    let count: number = FALLBACK_COUNT

    if (response.ok) {
      const data = await response.json()
      if (typeof data?.count === "number") {
        count = data.count
      }
    }

    const res = NextResponse.json({
      count,
      unique: isNewVisitor
    })

    // If new visitor, lock in the 1-year cookie so refreshes, tab switches, and re-visits never duplicate
    if (isNewVisitor) {
      res.cookies.set("vasant_unique_visitor_v1", `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: "lax",
        httpOnly: true
      })
    }

    return res
  } catch {
    return NextResponse.json({ count: FALLBACK_COUNT, fallback: true })
  }
}
