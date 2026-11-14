import React from "react"

export interface ProjectItem {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  liveLink?: string
  githubLink?: string
  link?: string
  statusBadge?: React.ReactNode
  technologies: { name: string; src: string; invertDark?: boolean }[]
}

export function BuildingBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#8B4513]/15 text-[#8B4513] dark:text-[#E0A96D] border border-[#8B4513]/35 shadow-sm">
      <span className="relative flex size-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B4513] opacity-75"></span>
        <span className="relative inline-flex rounded-full size-2 bg-[#8B4513]"></span>
      </span>
      <span className="tracking-wide font-medium">Building</span>
    </div>
  )
}

export function CompletedBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/35 shadow-sm">
      <span className="relative flex size-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
      </span>
      <span className="tracking-wide font-medium">Completed</span>
    </div>
  )
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "life-flow",
    title: "Life-Flow",
    description: "AI-Powered Decision Simulation Platform",
    longDescription:
      "An AI-powered decision simulation platform that helps users explore possible outcomes, risks, and future scenarios before making important decisions.",
    image: "/life-flow.png",
    statusBadge: <BuildingBadge />,
    technologies: [
      { name: "React", src: "/react.png" },
      { name: "Next.js", src: "/next.png", invertDark: true },
      { name: "TypeScript", src: "/ty.png" },
      { name: "Tailwind CSS", src: "/tailwind.png" },
      { name: "MongoDB", src: "/mongodb.png" }
    ]
  },
  {
    id: "food-delivery",
    title: "Integrated Food Delivery System",
    description: "Full-Stack Food Delivery Platform",
    longDescription:
      "An integrated food delivery system is a full-stack application that allows users to browse restaurants, explore menus, add items to a cart, place orders, make payments, and track deliveries in real time.",
    image: "/6.png",
    statusBadge: <CompletedBadge />,
    link: "https://github.com/Vasantjv-2005/Integrated-Food-Delivery-and-Dine-out-Hospitality-platform.git",
    technologies: [
      { name: "React", src: "/react.png" },
      { name: "Tailwind CSS", src: "/tailwind.png" },
      { name: "TypeScript", src: "/ty.png" },
      { name: "Next.js", src: "/next.png", invertDark: true },
      { name: "MongoDB", src: "/mongodb.png" }
    ]
  },
  {
    id: "meter-flow",
    title: "Meter Flow",
    description: "API Key Management Platform",
    longDescription:
      "Generate, manage, and test API keys with production-ready analytics. Built with modern design principles and developer experience in mind.",
    image: "/2.png",
    statusBadge: <CompletedBadge />,
    link: "https://github.com/Vasantjv-2005/METER-FLOW-API.git",
    technologies: [
      { name: "React", src: "/react.png" },
      { name: "TypeScript", src: "/ty.png" },
      { name: "Tailwind CSS", src: "/tailwind.png" },
      { name: "Next.js", src: "/next.png", invertDark: true },
      { name: "MongoDB", src: "/mongodb.png" }
    ]
  },
  {
    id: "bug-tracker",
    title: "Bug Tracker",
    description: "Bug Tracking System",
    longDescription:
      "A powerful bug tracking system used to track, manage, and resolve bugs efficiently. Built with modern design principles and real-time updates.",
    image: "/1.png",
    statusBadge: <CompletedBadge />,
    liveLink: "https://bug-tracker-project-o1em.vercel.app/",
    githubLink: "https://github.com/Vasantjv-2005/Bug-Tracker-project.git",
    technologies: [
      { name: "React", src: "/react.png" },
      { name: "Tailwind CSS", src: "/tailwind.png" },
      { name: "Node.js", src: "/images/node.png" },
      { name: "Next.js", src: "/next.png", invertDark: true },
      { name: "MongoDB", src: "/mongodb.png" }
    ]
  },
  {
    id: "canvas-collab",
    title: "Canvas Collab",
    description: "Real-Time Collaborative Drawing",
    longDescription:
      "A real-time collaborative canvas application built with modern web technologies, enabling multiple users to draw and create together seamlessly.",
    image: "/3.png",
    statusBadge: <CompletedBadge />,
    link: "https://canvas-collab-five.vercel.app/",
    technologies: [
      { name: "React", src: "/react.png" },
      { name: "TypeScript", src: "/ty.png" },
      { name: "Tailwind CSS", src: "/tailwind.png" },
      { name: "Next.js", src: "/next.png", invertDark: true }
    ]
  }
]
