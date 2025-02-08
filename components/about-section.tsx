"use client"

import { Shield, Clock, Award, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified electrical contractors with comprehensive insurance coverage"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency electrical services when you need them most"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Highly skilled electricians with years of industry experience"
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated to exceeding customer expectations with quality service"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">About KelightElectrical</h2>
          <p className="text-gray-400 text-lg">
            With over 15 years of experience, we've been delivering exceptional electrical services
            to residential and commercial clients. Our commitment to quality and safety sets us apart.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 bg-gray-900/50 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}