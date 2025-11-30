"use client"

import { useEffect, useRef, useState } from "react"
import {
  MapPin,
  Mic,
  Camera,
  AlertCircle,
  FileText,
  Upload,
  LayoutDashboard,
  Shield,
  Filter,
  Video,
  Bell,
  Map,
  Search,
  Moon,
  Sun,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"

const userFeatures = [
  {
    icon: MapPin,
    title: "Location Selection",
    description: "State → District → Sub-place select flow for precise location reporting",
  },
  {
    icon: Mic,
    title: "Voice Upload",
    description: "Record and upload voice messages with automatic geo-location tagging",
  },
  {
    icon: Camera,
    title: "Photo Capture",
    description: "Camera-based auto-geotag photo capture with secure cloud storage",
  },
  {
    icon: AlertCircle,
    title: "SOS Emergency",
    description: "One-tap SOS button with real-time GPS tracking and instant alerts",
  },
  {
    icon: FileText,
    title: "Anonymous Complaints",
    description: "Submit complaints anonymously with full identity protection",
  },
  {
    icon: Upload,
    title: "Proof Upload",
    description: "Upload photos, videos, and documents as supporting evidence",
  },
  {
    icon: LayoutDashboard,
    title: "User Dashboard",
    description: "Clean, responsive dashboard with intuitive navigation",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "End-to-end encrypted storage for all sensitive data",
  },
]

const adminFeatures = [
  {
    icon: Filter,
    title: "Region Filtering",
    description: "Filter by state → district → sub-area for targeted monitoring",
  },
  {
    icon: Video,
    title: "CCTV Grid",
    description: "Main feed + rotating 6 CCTV grid with auto-switching every 10s",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "SOS alerts, user submissions, and camera detection alerts",
  },
  {
    icon: Map,
    title: "SOS Alert Map",
    description: "OpenStreetMap integration displaying live SOS locations",
  },
  {
    icon: Search,
    title: "Detection & Proof",
    description: "Auto-collected evidence section with verification tools",
  },
  {
    icon: User,
    title: "Complaint Management",
    description: "Comprehensive user complaints management screen",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"user" | "admin">("user")
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

  const features = activeTab === "user" ? userFeatures : adminFeatures

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <LayoutDashboard className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Features Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Complete Protection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore the comprehensive set of features designed for both users seeking protection and administrators
            managing safety operations.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex p-1.5 bg-card rounded-2xl border border-border shadow-lg">
            <button
              onClick={() => setActiveTab("user")}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                activeTab === "user"
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <User className="inline-block h-4 w-4 mr-2" />
              User Features
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                activeTab === "admin"
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Shield className="inline-block h-4 w-4 mr-2" />
              Admin Features
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`group p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-4 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Theme Toggle Feature */}
        <div
          className={`mt-12 p-6 lg:p-8 bg-card rounded-3xl border border-border shadow-xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl border-2 border-card">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <div className="p-3 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-xl border-2 border-card">
                  <Moon className="h-6 w-6 text-indigo-200" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Light & Dark Mode</h3>
                <p className="text-sm text-muted-foreground">Seamless theme switching for comfortable viewing</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>All features use clean vector icons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
