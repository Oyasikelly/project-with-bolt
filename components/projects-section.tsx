"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description:
      "Complete electrical system installation for a 10-story office building",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Commercial", "Installation", "LED Lighting"],
  },
  {
    title: "Smart Home Integration",
    category: "Residential",
    description:
      "Full home automation system with voice control and energy monitoring",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    tags: ["Residential", "Smart Home", "Automation"],
  },
  {
    title: "Solar Power Installation",
    category: "Renewable Energy",
    description: "20kW solar panel system with battery backup",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200",
    tags: ["Solar", "Renewable", "Installation"],
  },
  {
    title: "Industrial Facility Upgrade",
    category: "Industrial",
    description: "Electrical system modernization for manufacturing plant",
    image: "https://unsplash.com/photos/person-in-white-top-HYQvV8wWX18",
    tags: ["Industrial", "Upgrade", "Power Systems"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-blue-950 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our portfolio of successful electrical installations and
            solutions across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-gray-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-blue-500/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
