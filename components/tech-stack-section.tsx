"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code2,
  Layers,
  Database,
  Globe,
  Zap,
  Route,
  Map,
  Sparkles,
  Server,
  Webhook,
  Radio,
  HardDrive,
} from "lucide-react"

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
    techs: [
      { name: "React", description: "Component-based UI library", icon: Layers },
      { name: "Tailwind CSS", description: "Utility-first styling", icon: Sparkles },
      { name: "React Router", description: "Client-side navigation", icon: Route },
      { name: "Leaflet + OSM", description: "Interactive mapping", icon: Map },
      { name: "CSS Animations", description: "Smooth micro-interactions", icon: Zap },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    description: "Conceptual Architecture",
    techs: [
      { name: "Node.js / Python", description: "Server runtime", icon: Globe },
      { name: "REST APIs", description: "HTTP endpoints", icon: Webhook },
      { name: "WebSockets", description: "Real-time communication", icon: Radio },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    techs: [
      { name: "MongoDB", description: "Document storage", icon: HardDrive },
      { name: "PostgreSQL", description: "Relational data", icon: Database },
    ],
  },
]

export function TechStackSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Built With Modern{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            weShield leverages cutting-edge technologies to deliver a fast, secure, and reliable safety platform.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="p-6 bg-card rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    {category.description && (
                      <span className="text-xs text-muted-foreground">{category.description}</span>
                    )}
                  </div>
                </div>

                {/* Tech Items */}
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/30 transition-colors">
                        <tech.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Visual */}
        <div
          className={`mt-16 p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-purple-100/30 to-secondary/5 dark:from-primary/5 dark:via-purple-900/10 dark:to-secondary/5 rounded-3xl border border-primary/20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold text-center mb-8">System Architecture</h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {/* Client */}
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl mb-3">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold">Client App</span>
              <span className="text-xs text-muted-foreground">React + Tailwind</span>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500" />
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-purple-500" />
            </div>
            <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500" />

            {/* API */}
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mb-3">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold">API Server</span>
              <span className="text-xs text-muted-foreground">REST + WebSocket</span>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-500" />
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-emerald-500" />
            </div>
            <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-purple-500 to-emerald-500" />

            {/* Database */}
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg border border-border">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-3">
                <Database className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold">Database</span>
              <span className="text-xs text-muted-foreground">MongoDB / PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
