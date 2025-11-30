"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Lock, Globe, AlertTriangle, EyeOff, MapPin, Users, ShieldCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "Military-grade encryption for all file handling and data storage",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Globe,
    title: "Full HTTPS",
    description: "End-to-end secure communication across all connections",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: AlertTriangle,
    title: "SOS Failsafe",
    description: "Emergency failsafe logic ensuring alerts are never lost",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: EyeOff,
    title: "Anonymous Protection",
    description: "Complete identity protection for anonymous complaints",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "Precise Location",
    description: "Accurate GPS extraction with multi-source verification",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Strict Admin/User access controls with audit logging",
    color: "from-amber-500 to-yellow-500",
  },
]

export function SecuritySection() {
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
    <section id="security" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Security Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Your Safety,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Priority
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            weShield is built with security at its core, implementing industry-leading protection measures to keep your
            data and identity safe.
          </p>
        </div>

        {/* Central Shield Animation */}
        <div
          className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            {/* Outer Ring */}
            <div
              className="absolute inset-0 scale-[2] border-2 border-dashed border-primary/20 rounded-full animate-spin"
              style={{ animationDuration: "30s" }}
            />

            {/* Middle Ring */}
            <div className="absolute inset-0 scale-[1.5] border-2 border-primary/30 rounded-full" />

            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse-glow" />

            {/* Shield Icon */}
            <div className="relative p-10 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl animate-float">
              <Shield className="h-20 w-20 text-primary-foreground" strokeWidth={1.5} />
            </div>

            {/* Orbiting Security Icons */}
            {securityFeatures.slice(0, 6).map((feature, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={index}
                  className="absolute hidden lg:flex"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                >
                  <div
                    className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div
          className={`mt-16 p-8 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">100% Secure</h3>
                <p className="opacity-90">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">256-bit</div>
                <div className="text-sm opacity-90">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
