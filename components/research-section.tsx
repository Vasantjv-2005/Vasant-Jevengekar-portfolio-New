"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  Copy,
  Check,
  GraduationCap
} from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"

// =========================================================================
// CONFIGURABLE RESEARCH & PUBLICATION SETTINGS
// Change the URL below to update your research paper link
// =========================================================================
export const ARTICLE_URL = "https://ijiemr.org/public/uploads/paper/561371793950954.pdf"

export const RESEARCH_PAPER = {
  title: "Beyond the Resume: An AI-Based Skill Graph Framework for Predicting Future Employability",
  articleUrl: ARTICLE_URL,
  journal: "International Journal for Innovative Engineering and Management Research (IJIEMR)",
  issn: "2456-5083",
  volume: "Volume 15, Issue 10 (New Series)",
  doiPrefix: "10.48047/IJIEMR",
  author: "Vasant Jevengekar",
  role: "Author / Researcher",
  presentation: 'Presented at the ICSSR-SRC sponsored Two-Day National Seminar on "Ethics on Artificial Intelligence – Challenges, Responsibilities and Future Directions"',
  institution: "Vishwa Vishwani Institute of Systems and Management",
  presentationDates: "12–13 November 2026",
  description: "This research explores an AI-based Skill Graph Framework that goes beyond traditional resumes by identifying skills, understanding relationships between them, and predicting future employability. It aims to provide a smarter approach to understanding an individual's skills and career readiness.",
  pdfFileName: "561371793950954.pdf",
  topics: [
    "AI Skill Graph",
    "Predictive Employability",
    "Career Readiness",
    "Ethics in AI"
  ]
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
}

export function ResearchSection() {
  const [copied, setCopied] = useState(false)

  const citationText = `${RESEARCH_PAPER.author} (2026). "${RESEARCH_PAPER.title}". ${RESEARCH_PAPER.journal}, ${RESEARCH_PAPER.volume}, ISSN: ${RESEARCH_PAPER.issn}, DOI: ${RESEARCH_PAPER.doiPrefix}.`

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <motion.section 
      id="publications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
      className="container mx-auto px-4 py-32 relative scroll-mt-20"
    >
      {/* Anchor for #research */}
      <div id="research" className="absolute -top-24 pointer-events-none" />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 blur-[160px] -z-10 rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
          <BookOpen className="size-4" />
          <span>Articles &amp; Publications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Research &amp; <span className="gradient-text">Publications</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Peer-reviewed academic contributions advancing artificial intelligence in employability modeling and skill prediction
        </p>
      </div>

      {/* Research Paper Premium Card */}
      <div className="max-w-4xl mx-auto">
        <MagicCard 
          className="glass-card rounded-3xl p-8 md:p-10 border border-black/10 dark:border-white/10 relative overflow-hidden transition-all duration-300 hover:border-primary/40 shadow-xl"
          glareColor="rgba(6, 182, 212, 0.2)"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute -top-24 -right-24 size-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top: Badges and Quick Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="size-3.5" />
                Published Research
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                <Sparkles className="size-3.5" />
                Paper Presented
              </span>
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-secondary/80 text-muted-foreground border border-black/5 dark:border-white/5">
                ISSN: {RESEARCH_PAPER.issn}
              </span>
            </div>

            <button
              onClick={handleCopyCitation}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 cursor-pointer"
              title="Copy academic citation"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Citation Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  <span>Cite Paper</span>
                </>
              )}
            </button>
          </div>

          {/* Paper Title & Main Icon */}
          <div className="flex items-start gap-5 mb-6 relative z-10">
            <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0 glow-border hidden sm:flex items-center justify-center">
              <FileText className="size-8" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-snug mb-3">
                {RESEARCH_PAPER.title}
              </h3>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <span className="size-2 rounded-full bg-primary" />
                  Author: <strong className="font-semibold">{RESEARCH_PAPER.author}</strong>
                </span>
                <span className="text-muted-foreground/60">•</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="size-4 text-primary/80" />
                  {RESEARCH_PAPER.institution}
                </span>
              </div>
            </div>
          </div>

          {/* Research Description Callout */}
          <div className="p-5 md:p-6 rounded-2xl bg-secondary/40 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8 relative z-10">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              &ldquo;{RESEARCH_PAPER.description}&rdquo;
            </p>
            
            {/* Topic Chips */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-black/5 dark:border-white/5">
              {RESEARCH_PAPER.topics.map((topic, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-md bg-background/80 dark:bg-white/5 border border-black/5 dark:border-white/10 text-muted-foreground font-medium"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </div>

          {/* Publication & Presentation Details Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 relative z-10">
            {/* Journal Details */}
            <div className="p-4 rounded-xl bg-secondary/30 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-sm">
                <BookOpen className="size-4" />
                <span>Journal Details</span>
              </div>
              <p className="font-semibold text-foreground text-sm leading-snug mb-1">
                {RESEARCH_PAPER.journal}
              </p>
              <div className="text-xs text-muted-foreground space-y-0.5 font-mono">
                <p>Volume: {RESEARCH_PAPER.volume}</p>
                <p>ISSN: {RESEARCH_PAPER.issn} · DOI Prefix: {RESEARCH_PAPER.doiPrefix}</p>
              </div>
            </div>

            {/* Presentation Details */}
            <div className="p-4 rounded-xl bg-secondary/30 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold text-sm">
                <GraduationCap className="size-4" />
                <span>Seminar &amp; Presentation</span>
              </div>
              <p className="font-medium text-foreground text-xs leading-relaxed mb-2">
                {RESEARCH_PAPER.presentation}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="size-3.5 text-primary/70" />
                <span>Dates: <strong className="text-foreground">{RESEARCH_PAPER.presentationDates}</strong></span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10 pt-2 border-t border-black/5 dark:border-white/5">
            {/* Read Research Paper Button */}
            <a
              href={RESEARCH_PAPER.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(var(--primary),0.25)] text-center cursor-pointer"
            >
              <FileText className="size-4" />
              <span>Read Research Paper</span>
              <ExternalLink className="size-4 ml-1" />
            </a>
          </div>

          {/* Direct File Link Pill */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground relative z-10">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Official Document:
              <a
                href={RESEARCH_PAPER.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-primary underline underline-offset-4 hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                {RESEARCH_PAPER.pdfFileName}
                <ExternalLink className="size-3" />
              </a>
            </span>
            <span className="text-muted-foreground/80">
              Verified Publication · Peer Reviewed
            </span>
          </div>
        </MagicCard>
      </div>
    </motion.section>
  )
}
