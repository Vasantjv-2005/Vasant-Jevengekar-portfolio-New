import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  FileText,
  Send,
  Palette,
  Code2,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Clock } from "@/components/clock"

export default function Portfolio() {
  return (
    <div className="min-h-screen grid-pattern">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-start text-left max-w-4xl mx-auto">
          <Image
            src="/images/vasant.jpg.jpeg"
            alt="Vasant Jevengekar profile photo"
            width={180}
            height={180}
            className="rounded-full mb-8 ring-4 ring-primary/30 shadow-xl self-start"
            priority
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Hi, I&apos;m <span className="text-foreground">Vasant Jevengekar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl text-balance leading-relaxed">
            I build reliable and scalable web applications using <span className="font-semibold text-foreground">React.js</span>,
            <span className="font-semibold text-foreground"> Next.js</span>, <span className="font-semibold text-foreground">Supabase</span>, <span className="font-semibold text-foreground">MongoDB</span>, and
            <span className="font-semibold text-foreground"> TypeScript</span>.
          </p>

          <div className="flex flex-wrap gap-3 justify-start mb-8">
            <Button asChild size="lg">
              <Link href="#contact">
                <Send className="mr-2 size-4" />
                Get in touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/images/resume.jpg" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 size-4" />
                Resume / CV
              </a>
            </Button>
          </div>

          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/j-vasant-3226612b5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/Vasantjv-2005" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://x.com/VasantJeve78956" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Image src="/images/x.png" alt="X" width={20} height={20} className="rounded-sm object-contain" />
              <span className="sr-only">X</span>
            </Link>
            <Link href="mailto:vasantjv2005@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a web developer and designer with a passion for creating elegant solutions to complex problems.
              With expertise in React, Next.js, and modern web technologies, I build responsive and accessible web
              applications that make a difference.
            </p>
            <p>
              As an aspiring full-stack developer, I&apos;ve been actively building my skills through self-driven
              projects, internships, and continuous learning. I have successfully completed internships at Course
              Central, Alfido Tech, Codectechnologies, Codveda Technologies, InternCourse, and CodeAlpha, where I gained
              practical exposure to real-world projects and collaborative workflows.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Featured</div>
            <div className="flex items-center gap-3">
              <Briefcase className="size-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Through my internship experiences, I&apos;ve developed a strong foundation in modern Full stack and
                honed my ability to create clean, responsive, and accessible web interfaces. I&apos;m passionate about
                integrating AI to enhance user experiences through personalization and automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Course Central</Badge>
                <Badge variant="secondary">Alfido Tech</Badge>
                <Badge variant="secondary">Codectechnologies</Badge>
                <Badge variant="secondary">Codveda Technologies</Badge>
                <Badge variant="secondary">InternCourse</Badge>
                <Badge variant="secondary">CodeAlpha</Badge>
                <Badge variant="secondary">Acmegrade</Badge>
              </div>
              <div className="mt-8 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/images/course.png"
                          alt="Course Central logo"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>Front-End Development Trainee</CardTitle>
                          <CardDescription className="text-base">Course Central — Summer 2025</CardDescription>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">Internship</Badge>
                        <Badge className="bg-green-500 text-white animate-pulse">Completed</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        Completed Front-End Development training under the Summer Training / Internship Program 2025 in
                        collaboration with TRYST, IIT Delhi.
                      </li>
                      <li>Developed responsive user interfaces using HTML, CSS, and JavaScript.</li>
                      <li>Built interactive components and single-page UI features using React.js.</li>
                      <li>
                        Designed and implemented a Quiz App frontend, including question rendering, option selection,
                        score logic, and basic state handling.
                      </li>
                      <li>
                        Strengthened understanding of component-based architecture, DOM manipulation, and UI state
                        management.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/images/elevate.png"
                          alt="Elevate Labs logo"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>Web Development Intern</CardTitle>
                          <CardDescription className="text-base">Elevate Labs — Jun 2025 – Jul 2025</CardDescription>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">Internship</Badge>
                        <Badge className="bg-green-500 text-white animate-pulse">Completed</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        Successfully completed a Web Development Internship under the Skill India / MSME–supported program.
                      </li>
                      <li>Completed 8 practical tasks focused on real-world web development workflows.</li>
                      <li>
                        Built 1 complete project: a Developer Portfolio Website, emphasizing responsive design and clean UI.
                      </li>
                      <li>Implemented frontend features using HTML, CSS, JavaScript, and React.js.</li>
                      <li>
                        Applied best practices in layout structuring, component-based development, and user experience.
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://elevate-labs-project.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        Project Link
                        <ExternalLink className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/images/acemgrade.png"
                          alt="Acmegrade logo"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>Acmegrade</CardTitle>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">Training+Internship</Badge>
                        <Badge className="bg-green-500 text-white animate-pulse">Completed</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Learned and applied HTML, CSS, JavaScript, Node.js, and MySQL for full-stack web development.</li>
                      <li>Designed and developed an Electronics E-commerce website as a hands-on project.</li>
                      <li>Built responsive and user-friendly web pages for product listings and navigation.</li>
                      <li>Implemented backend logic using Node.js to handle application functionality.</li>
                      <li>Managed and stored application data using MySQL databases.</li>
                      <li>Gained practical experience in integrating frontend and backend components.</li>
                      <li>Improved problem-solving skills and understanding of real-world web application development.</li>
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="https://aura-commerce-njuq.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        Project Link
                        <ExternalLink className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="container" />

      {/* Technical Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="space-y-6">
            {[
              { name: "Frontend Development", percentage: 92 },
              { name: "HTML & CSS", percentage: 95 },
              { name: "JavaScript & TypeScript", percentage: 88 },
              { name: "React & Next.js", percentage: 90 },
              { name: "Responsive Design", percentage: 94 },
              { name: "UI/UX Design", percentage: 87 },
              { name: "Git and Github", percentage: 89 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Palette className="size-6 text-primary" />
                  </div>
                  <CardTitle>Web Designer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  I&apos;m a passionate and creative web designer dedicated to crafting visually stunning and
                  user-friendly websites. With a keen eye for design and a love for clean, functional interfaces, I
                  transform ideas into engaging digital experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="size-6 text-primary" />
                  </div>
                  <CardTitle>Web Developer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  I&apos;m a dedicated and innovative web developer with a passion for building fast, functional, and
                  user-focused websites. I specialize in turning ideas into interactive digital experiences using modern
                  web technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Canvas Collab
                  <ExternalLink className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>Collaborative Drawing Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A real-time collaborative canvas application built with modern web technologies, enabling multiple
                  users to draw and create together seamlessly.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="https://canvas-collab-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-commerce Website
                  <ExternalLink className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>Full-Featured Online Store</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A comprehensive e-commerce platform with product listings, shopping cart functionality, and responsive
                  design for optimal user experience.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="https://endearing-pastelito-fec631.netlify.app/" target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="size-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>BS-MS in Computer Science</CardTitle>
                <CardDescription className="text-base">Vishwa Vishwani Institute · 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing Bachelor of Science in Computer Science, focusing on modern software development
                  practices and emerging technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>High School</CardTitle>
                <CardDescription className="text-base">Narayana Junior College · Graduated 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed high school education with an outstanding 10.0 CGPA, demonstrating academic excellence and
                  dedication to learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Looking for a developer who builds fast, clean, and scalable products?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            If you have an opportunity that deserves someone who actually delivers
          </p>
          <Button asChild size="lg">
            <a href="mailto:vasantjv2005@gmail.com">
              <Send className="mr-2 size-4" />
              Let’s Talk
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground space-y-1">
            <p>
              Designed & Developed by <span className="font-medium text-foreground">Vasant Jevengekar</span>
            </p>
            <p>Inspired by great portfolios across the web</p>
            <p>
              <span className="mr-2">Local time:</span>
              <Clock className="font-mono" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
