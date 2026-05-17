import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const increment = url.searchParams.get("increment") === "true"
    const targetUrl = increment
      ? "https://api.counterapi.dev/v1/vasant-portfolio/visits/up"
      : "https://api.counterapi.dev/v1/vasant-portfolio/visits/"

    const response = await fetch(targetUrl, { cache: "no-store" })
    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message ?? "Failed to fetch visitor count" },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch visitor count", detail: String(error) },
      { status: 500 }
    )
  }
}
