"use client"

import { useEffect, useState } from "react"
import { Shield, MapPin, Video, Bell } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 dark:from-purple-950/50 dark:via-pink-950/30 dark:to-indigo-950/50 animate-gradient" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delay-2" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-float-delay-1" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-32 left-[15%] transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 animate-float">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div
          className={`absolute top-40 right-[18%] transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-secondary/20 animate-float-delay-1">
            <Video className="h-8 w-8 text-secondary" />
          </div>
        </div>
        <div
          className={`absolute bottom-32 left-[20%] transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 animate-float-delay-2">
            <Bell className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div
          className={`absolute bottom-40 right-[15%] transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-secondary/20 animate-float-delay-3">
            <Shield className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Shield Animation */}
        <div
          className={`mb-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 scale-150 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-glow" />
            <div className="relative p-8 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl animate-float">
              <Shield className="h-20 w-20 sm:h-28 sm:w-28 text-primary-foreground" strokeWidth={1.5} />
            </div>
            {/* Orbiting Ring */}
            <div
              className="absolute inset-0 scale-[1.8] border-2 border-dashed border-primary/30 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="bg-gradient-to-r from-primary via-pink-500 to-secondary bg-clip-text text-transparent">
            weShield
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Empowering Women Through Smart Safety Technology
        </p>

        {/* Description */}
        <p
          className={`text-lg text-muted-foreground max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          A comprehensive platform designed to protect, monitor, and respond — ensuring every woman feels safe,
          connected, and empowered wherever she goes.
        </p>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { value: "24/7", label: "Real-time Monitoring" },
            { value: "< 3s", label: "SOS Response Time" },
            { value: "100%", label: "Data Encryption" },
            { value: "GPS", label: "Precise Tracking" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
