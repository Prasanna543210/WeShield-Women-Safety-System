"use client"

import { useEffect, useRef, useState } from "react"
import { LogIn, Send, Settings, Bell, Map, CheckCircle, Video, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: LogIn,
    title: "User Login",
    description: "User logs in and selects their state, district, and sub-place for accurate location tracking",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Send,
    title: "Submit Report",
    description: "User sends voice message, photo, or triggers SOS emergency alert with GPS coordinates",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Settings,
    title: "Backend Processing",
    description: "System processes data, extracts location, and assigns report to appropriate regional admin",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bell,
    title: "Admin Alert",
    description: "Regional administrator receives instant notification with complete incident details",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Map,
    title: "Location Mapping",
    description: "Admin views precise location on OpenStreetMap with surrounding area context",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "Verification",
    description: "Admin verifies incident details and stores evidence securely for documentation",
    color: "from-green-500 to-lime-500",
  },
  {
    icon: Video,
    title: "Continuous Monitoring",
    description: "Ongoing surveillance through CCTV integration and real-time alert system",
    color: "from-red-500 to-pink-500",
  },
]

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            From Alert to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Follow the seamless journey of how weShield transforms an emergency alert into rapid, coordinated response
            and protection.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Steps Row */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full" />
              <div
                className="absolute top-12 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />

              <div className="grid grid-cols-7 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center text-center transition-all duration-500",
                      index <= activeStep ? "opacity-100" : "opacity-50",
                    )}
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={cn(
                        "relative z-10 p-4 rounded-2xl bg-gradient-to-br transition-all duration-500 cursor-pointer",
                        step.color,
                        index === activeStep ? "scale-110 shadow-xl" : "shadow-lg hover:scale-105",
                      )}
                    >
                      <step.icon className="h-6 w-6 text-white" />
                      {index === activeStep && (
                        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                      )}
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-primary">Step {index + 1}</span>
                      <h3 className="text-sm font-semibold mt-1">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Step Details */}
            <div className="mt-12 p-8 bg-card rounded-3xl border border-border shadow-xl">
              <div className="flex items-center gap-6">
                <div className={cn("p-6 rounded-2xl bg-gradient-to-br shrink-0", steps[activeStep].color)}>
                  {(() => {
                    const IconComponent = steps[activeStep].icon
                    return <IconComponent className="h-10 w-10 text-white" />
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-primary">Step {activeStep + 1}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {activeStep < steps.length - 1 ? `Step ${activeStep + 2}` : "Complete"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
                  <p className="text-muted-foreground">{steps[activeStep].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={cn("relative z-10 p-3 rounded-xl bg-gradient-to-br shrink-0", step.color)}>
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 pb-6">
                    <span className="text-xs font-semibold text-primary">Step {index + 1}</span>
                    <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
