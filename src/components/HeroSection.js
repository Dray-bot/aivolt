'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ShapeDivider from './ShapeDivider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import UiVerseButton from './UiVerseButton'  

export default function Hero() {
  return (
    <section className="relative bg-gray-50 pt-32 pb-20 overflow-hidden">
      {/* PatternPad Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          AI-Powered Solutions for <span className="text-blue-600">Real-World Impact</span>
        </motion.h1>

        {/* Animated Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Transform your business with custom-built AI software that automates workflows, enhances insights, and drives growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <UiVerseButton href="/solutions">Discover Solutions</UiVerseButton>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 text-lg hover:underline"
          >
            Talk to an Expert
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>

        {/* unDraw Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="\illustrations\ai-collaboration.svg" 
            alt="AI Collaboration"
            width={600}
            height={400}
            priority
          />
        </motion.div>
      </div>

      {/* Shape Divider Bottom with subtle motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ShapeDivider />
      </motion.div>
    </section>
  )
}
