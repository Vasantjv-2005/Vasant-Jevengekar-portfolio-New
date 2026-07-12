"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Briefcase, 
  ChevronDown, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Calendar,
  Sparkles,
  Code2,
  Award,
  Eye,
  X
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  id: string
  role: string
  company: string
  duration: string
  type: string
  completed: boolean
  certificate?: string
  points: string[]
  skills?: string[]
  projectLink?: string
}

const experiences: ExperienceItem[] = [
  {
    id: "innovexis",
    role: "Web Development Intern",
    company: "INNOVEXIS",
    duration: "04/2026 – 07/2026 (3 Months)",
    type: "Internship",
    completed: true,
    certificate: "/certificates/innovexis-certificate.png",
    points: [
      "Completed training in Full Stack Web Development and worked on multiple real-world projects using modern web technologies.",
      "Developed a Bug Tracker application to manage, assign, and track software bugs with user authentication and status management.",
      "Built a Meter Flow Management System to monitor and manage meter-related data with a clean and responsive interface.",
      "Developed a Smart ERP System with modules for customer management, inventory, billing, suppliers, employees, sales, purchases, and reports.",
      "Created an AI Chatbot application to provide instant responses and improve user interaction.",
      "Built a Document Signature Application that allows users to upload, sign, and manage digital documents securely.",
      "Designed responsive user interfaces, developed backend APIs, integrated databases, and connected frontend and backend to build complete full-stack applications.",
      "Worked testing endpoints using Postman, fixed bugs, and followed clean coding practices throughout development.",
      "Collaborated using Git and GitHub while improving problem-solving and full-stack development skills."
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GitHub",
      "Postman"
    ]
  },
  {
    id: "infotact",
    role: "Full Stack Developer Intern",
    company: "INFOTACT SOLUTIONS",
    duration: "05/04/2026 – 05/07/2026 (3 Months)",
    type: "Internship",
    completed: true,
    certificate: "/certificates/infotact-certificate.png",
    points: [
      "Completed training in Full Stack Web Development and worked on real-world projects.",
      "Developed a Telecommunication Healthcare Application with features for patient management, doctor management, appointments, and electronic health records.",
      "Built an Integrated Food Delivery System with restaurant management, menu management, order processing, and delivery tracking features.",
      "Created responsive and user-friendly web pages using HTML, CSS, JavaScript, and React.",
      "Developed backend APIs using Node.js and Express.js for handling application data.",
      "Worked with MongoDB to store and manage user, order, and healthcare information.",
      "Integrated frontend and backend modules to build complete full-stack applications.",
      "Tested REST APIs using Postman and fixed bugs during development.",
      "Used Git and GitHub for version control and project collaboration.",
      "Improved problem-solving skills by working on practical development tasks and following clean coding practices."
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "Postman"
    ]
  },
  {
    id: "course-central",
    role: "Front-End Development Trainee",
    company: "Course Central",
    duration: "Summer 2025",
    type: "Internship",
    completed: true,
    points: [
      "Completed Front-End Development training under the Summer Training / Internship Program 2025 in collaboration with TRYST, IIT Delhi.",
      "Developed responsive user interfaces using HTML, CSS, JavaScript.",
      "Built interactive components and single-page UI features using React.js.",
      "Designed and implemented a Quiz App frontend, including question rendering, option selection, score logic, and basic state handling.",
      "Strengthened understanding of component-based architecture, DOM manipulation, and UI state management."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "UI/UX"]
  },
  {
    id: "elevate-labs",
    role: "Web Development Intern",
    company: "Elevate Labs",
    duration: "Jun 2025 - Jul 2025",
    type: "Internship",
    completed: true,
    points: [
      "Successfully completed a Web Development Internship under the Skill India / MSME-supported program.",
      "Completed 8 practical tasks focused on real-world web development workflows.",
      "Built 1 complete project: a Developer Portfolio Website, emphasizing responsive design and clean UI.",
      "Implemented frontend features using HTML, CSS, JavaScript, and React.js.",
      "Applied best practices in layout structuring, component-based development, and user experience."
    ],
    projectLink: "https://elevate-labs-project.vercel.app/",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"]
  },
  {
    id: "acmegrade",
    role: "Training + Internship",
    company: "Acmegrade",
    duration: "2025",
    type: "Training + Internship",
    completed: true,
    points: [
      "Learned and applied HTML, CSS, JavaScript, Node.js, and MySQL for full-stack web development.",
      "Designed and developed an Electronics E-commerce website as a hands-on project.",
      "Built responsive and user-friendly web pages for product listings and navigation.",
      "Implemented backend logic using Node.js to handle application functionality.",
      "Managed and stored application data using MySQL databases.",
      "Gained practical experience in integrating frontend and backend components.",
      "Improved problem-solving skills and understanding of real-world web application development."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"]
  }
]

const collaborations = [
  "Alfido Tech",
  "Codectechnologies",
  "Codveda Technologies",
  "InternCourse",
  "CodeAlpha"
]

export function ExperienceSection() {
  const [openIds, setOpenIds] = useState<string[]>(["innovexis", "infotact"])
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string
    image: string
  } | null>(null)

  const toggleExperience = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (openIds.length === experiences.length) {
      setOpenIds([])
    } else {
      setOpenIds(experiences.map((e) => e.id))
    }
  }

  return (
    <section id="experience" className="container mx-auto px-4 py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-4">
          <Briefcase className="size-10 text-primary" />
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-6">
          My professional journey, internships, and verified certificates
        </p>

        <div className="flex justify-center">
          <button
            onClick={toggleAll}
            className="text-sm font-medium px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-foreground flex items-center gap-2 backdrop-blur-md"
          >
            <Sparkles className="size-4 text-primary" />
            {openIds.length === experiences.length
              ? "Collapse All Experiences"
              : "Expand All Experiences"}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp) => {
          const isOpen = openIds.includes(exp.id)

          return (
            <div
              key={exp.id}
              className="group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 overflow-hidden shadow-sm hover:shadow-lg"
            >
              {/* Card Header / Dropdown Trigger */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                <button
                  type="button"
                  onClick={() => toggleExperience(exp.id)}
                  className="text-left space-y-2 flex-1 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      <Building2 className="size-3.5" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/10 dark:border-white/10">
                      <Calendar className="size-3.5" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                </button>

                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className="border-black/10 dark:border-white/10 text-foreground bg-black/5 dark:bg-white/5 px-3 py-1 font-medium"
                    >
                      {exp.type}
                    </Badge>

                    {exp.certificate && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCertificate({
                            title: `${exp.company} Certificate`,
                            image: exp.certificate!
                          })
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-all shadow-sm"
                      >
                        <Award className="size-3.5" />
                        Certificate
                      </button>
                    )}

                    <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 flex items-center gap-1.5 font-semibold px-3 py-1 shadow-sm">
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                      Completed
                    </Badge>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExperience(exp.id)}
                    className="size-9 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-foreground group-hover:border-primary/40 group-hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    <ChevronDown
                      className={`size-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Dropdown Expanded Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 border-t border-black/10 dark:border-white/10 space-y-6">
                      {/* Responsibilities / Points */}
                      <ul className="space-y-3.5 text-muted-foreground leading-relaxed pt-2">
                        {exp.points.map((point, index) => (
                          <li key={index} className="flex gap-3.5 items-start">
                            <span className="text-primary mt-1 text-lg leading-none shrink-0 font-bold">
                              •
                            </span>
                            <span className="text-base text-foreground/90">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Used */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="pt-2">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            <Code2 className="size-3.5 text-primary" />
                            Skills Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Certificate Preview Card */}
                      {exp.certificate && (
                        <div className="pt-3 border-t border-black/10 dark:border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                              <Award className="size-4" />
                              Official Internship Certificate
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedCertificate({
                                  title: `${exp.company} Certificate`,
                                  image: exp.certificate!
                                })
                              }
                              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                            >
                              <Eye className="size-3.5" />
                              Click to view full screen
                            </button>
                          </div>
                          <div
                            onClick={() =>
                              setSelectedCertificate({
                                title: `${exp.company} Certificate`,
                                image: exp.certificate!
                              })
                            }
                            className="group/cert relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/20 dark:bg-black/40 cursor-pointer max-w-md hover:border-primary/50 transition-all duration-300 shadow-md"
                          >
                            <img
                              src={exp.certificate}
                              alt={`${exp.company} Internship Certificate`}
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover/cert:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                                <Eye className="size-4 text-primary" />
                                Click to enlarge certificate
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Project Link */}
                      {exp.projectLink && (
                        <div className="pt-1">
                          <a
                            href={exp.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 px-4 py-2 rounded-xl transition-all"
                          >
                            <span>View Live Project</span>
                            <ExternalLink className="size-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Other Collaborations */}
        <div className="pt-10">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Other Collaborations
          </h3>
          <div className="flex flex-wrap gap-3">
            {collaborations.map((company, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="px-4 py-2 text-sm bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground backdrop-blur-md font-medium"
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal / Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-background/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 rounded-3xl p-6 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="size-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    {selectedCertificate.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    <span>Open Full Size</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(null)}
                    className="size-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/20 flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
