"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Heart, Users, AlertTriangle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "What is weShield?",
    description:
      "weShield is an intelligent women's safety platform that combines real-time GPS tracking, emergency SOS alerts, CCTV monitoring, and anonymous reporting to create a comprehensive safety ecosystem.",
  },
  {
    icon: Heart,
    title: "Why We Built This",
    description:
      "Every woman deserves to feel safe. We created weShield to bridge the gap between technology and personal security, providing tools that empower women to navigate the world with confidence.",
  },
  {
    icon: AlertTriangle,
    title: "The Problem We Solve",
    description:
      "From harassment to emergencies, women face unique safety challenges daily. weShield addresses slow emergency response times, lack of evidence collection, and limited access to help when it's needed most.",
  },
  {
    icon: Users,
    title: "Building Safer Communities",
    description:
      "By connecting users with administrators and local authorities through real-time alerts and evidence-based reporting, we're creating a network of protection that extends beyond the individual.",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About the Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Protecting What Matters{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Most</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            weShield represents a new paradigm in women&apos;s safety — combining cutting-edge technology with
            human-centered design to create a platform that truly understands and addresses the unique security needs of
            women.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 bg-card rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Element */}
        <div
          className={`mt-16 p-8 lg:p-12 bg-gradient-to-r from-primary/10 via-purple-100/50 to-secondary/10 dark:from-primary/5 dark:via-purple-900/20 dark:to-secondary/5 rounded-3xl border border-primary/20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Safety is Not a{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Privilege
                </span>
              </h3>
              <p className="text-muted-foreground text-lg">
                It&apos;s a fundamental right. weShield is committed to making advanced safety technology accessible to
                every woman, regardless of location or circumstance.
              </p>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-float`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
