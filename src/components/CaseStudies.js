'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const caseStudies = [
  {
    title: 'AI Diagnostics Platform',
    description: 'Built an AI-driven healthcare diagnostics tool that increased diagnostic accuracy by 30%.',
    image: '/illustrations/healthcare.svg', // Ensure proper path
  },
  {
    title: 'Construction Automation Suite',
    description: 'Developed a project automation system that reduced manual tasks by 45% for a construction firm.',
    image: '/illustrations/construction.svg',
  },
  {
    title: 'Real Estate AI Insights',
    description: 'Created an AI dashboard for property market predictions &amp; customer behavior analysis.',
    image: '/illustrations/realestate.svg',
  },
]

export default function CaseStudies() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Success Stories &amp; Case Studies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          See how we&apos;ve helped businesses across industries leverage AI for real impact.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              className="relative bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transform transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 5, rotateY: -5 }}
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{caseStudy.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{caseStudy.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>

      {/* Subtle PatternPad Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-5"></div>
      </div>
    </section>
  )
}
