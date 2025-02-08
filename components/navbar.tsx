"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { scrollY } = useScroll()
  const height = useTransform(scrollY, [0, 100], [80, 64])
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.95)"]
  )

  return (
    <motion.header
      style={{ height, backgroundColor }}
      className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="h-6 w-6 text-blue-500" />
          </motion.div>
          <span className="font-bold text-xl">KelightElectrical</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {["About", "Services", "Projects", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20"
            >
              Request Quote
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}