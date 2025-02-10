"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Home,
  Building2,
  Wrench,
  Cpu,
  Battery,
  SunMedium,
  Power,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Home,
    title: "Residential Wiring",
    description: "Complete home electrical installations and upgrades",
    basePrice: 150,
    options: {
      rooms: {
        label: "Number of Rooms",
        min: 1,
        max: 10,
        step: 1,
        multiplier: 50,
      },
      complexity: {
        label: "Job Complexity",
        min: 1,
        max: 3,
        step: 1,
        multiplier: 100,
      },
    },
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Comprehensive electrical solutions for businesses",
    basePrice: 500,
    options: {
      sqft: {
        label: "Square Footage (×100)",
        min: 10,
        max: 100,
        step: 10,
        multiplier: 5,
      },
      floors: {
        label: "Number of Floors",
        min: 1,
        max: 10,
        step: 1,
        multiplier: 200,
      },
    },
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast and reliable repair services",
    basePrice: 85,
    options: {
      urgency: {
        label: "Urgency Level",
        min: 1,
        max: 3,
        step: 1,
        multiplier: 50,
      },
      complexity: {
        label: "Job Complexity",
        min: 1,
        max: 3,
        step: 1,
        multiplier: 75,
      },
    },
  },
  {
    icon: Cpu,
    title: "Smart Home",
    description: "Modern automation and control systems",
    basePrice: 299,
    options: {
      devices: {
        label: "Number of Devices",
        min: 1,
        max: 20,
        step: 1,
        multiplier: 45,
      },
      integration: {
        label: "Integration Level",
        min: 1,
        max: 3,
        step: 1,
        multiplier: 150,
      },
    },
  },
  {
    icon: Battery,
    title: "Backup Power",
    description: "Generator installation and maintenance",
    basePrice: 1999,
    options: {
      capacity: {
        label: "Power Capacity (kW)",
        min: 5,
        max: 50,
        step: 5,
        multiplier: 100,
      },
      features: {
        label: "Feature Level",
        min: 1,
        max: 3,
        step: 1,
        multiplier: 500,
      },
    },
  },
  {
    icon: SunMedium,
    title: "Solar Solutions",
    description: "Solar panel installation and integration",
    basePrice: 5000,
    options: {
      panels: {
        label: "Number of Panels",
        min: 4,
        max: 40,
        step: 4,
        multiplier: 400,
      },
      battery: {
        label: "Battery Capacity",
        min: 0,
        max: 3,
        step: 1,
        multiplier: 2000,
      },
    },
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Energy-efficient lighting solutions",
    basePrice: 199,
    options: {
      fixtures: {
        label: "Number of Fixtures",
        min: 1,
        max: 20,
        step: 1,
        multiplier: 35,
      },
      smart: {
        label: "Smart Features",
        min: 0,
        max: 2,
        step: 1,
        multiplier: 100,
      },
    },
  },
  {
    icon: Power,
    title: "Panel Upgrades",
    description: "Electrical panel replacement and updates",
    basePrice: 899,
    options: {
      amperage: {
        label: "Amperage Upgrade",
        min: 100,
        max: 400,
        step: 100,
        multiplier: 2,
      },
      circuits: {
        label: "Additional Circuits",
        min: 0,
        max: 10,
        step: 1,
        multiplier: 75,
      },
    },
  },
];

type ServiceCardProps = {
  service: (typeof services)[0];
  isFlipped: boolean;
  onFlip: () => void;
};

function ServiceCard({ service, isFlipped, onFlip }: ServiceCardProps) {
  const [options, setOptions] = useState<Record<string, number>>(() =>
    Object.keys(service.options).reduce<Record<string, number>>(
      (acc, key) => ({
        ...acc,
        [key]: service.options[key].min,
      }),
      {}
    )
  );

  const calculatePrice = () => {
    let total = service.basePrice;
    Object.entries(options).forEach(([key, value]) => {
      total += value * service.options[key].multiplier;
    });
    return total;
  };

  return (
    <motion.div
      className="relative h-[400px] perspective-1000"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card
          className={`absolute inset-0 p-6 ${
            isFlipped ? "backface-hidden" : ""
          } bg-gray-900/50 border-blue-500/20 hover:border-blue-500/40 transition-colors`}
        >
          <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
            {React.createElement(service.icon, {
              className: "h-6 w-6 text-blue-500",
            })}
          </div>
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-400 mb-4">{service.description}</p>
          <p className="text-blue-500 font-semibold">
            Starting at ${service.basePrice}
          </p>
          <Button
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
            onClick={onFlip}
          >
            Calculate Price
          </Button>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute inset-0 p-6 [transform:rotateY(180deg)] ${
            !isFlipped ? "backface-hidden" : ""
          } bg-gray-900/50 border-blue-500/20`}
        >
          <h3 className="text-lg font-semibold mb-4">Price Calculator</h3>
          <div className="space-y-6">
            {Object.entries(service.options).map(([key, config]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{config.label}</span>
                  <span className="text-blue-500">{options[key]}</span>
                </div>
                <Slider
                  value={[options[key]]}
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  onValueChange={([value]) =>
                    setOptions((prev) => ({ ...prev, [key]: value }))
                  }
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-blue-500">
              ${calculatePrice()}
            </span>
          </div>
          <Button
            variant="outline"
            className="mt-4 w-full border-blue-500/50 hover:border-blue-500"
            onClick={onFlip}
          >
            Back to Service
          </Button>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-900 to-blue-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive electrical solutions tailored to your needs. From
            simple repairs to complete installations, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isFlipped={flippedCard === index}
              onFlip={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
