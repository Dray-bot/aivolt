'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const caseStudies = [
  {
    title: 'AI Automation for Logistics Company',
    description: 'Streamlined supply chain processes, reduced operational costs by 35%, and increased delivery efficiency using AI-driven automation workflows.',
    image: '/illustrations/delivery.svg',
    industry: 'Logistics & Supply Chain',
  },
  {
    title: 'AI Chatbot for Fintech Support',
    description: 'Developed an intelligent chatbot that handled 70% of customer queries, reducing support tickets and improving customer satisfaction scores.',
    image: '/illustrations/chatbot.svg',
    industry: 'Fintech & Customer Support',
  },
  {
    title: 'Data Analytics for Healthcare Insights',
    description: 'Implemented advanced data pipelines for a healthcare provider, leading to 25% faster diagnosis and predictive patient care.',
    image: '/illustrations/analytics.svg',
    industry: 'Healthcare & Analytics',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-2 sm:px-0"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Real AI Impact Stories
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Dive into our success stories and see how AIVOLT delivers tangible, AI-powered business results across diverse industries.
        </p>
      </motion.div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition group border border-gray-200 overflow-hidden cursor-pointer"
          >
            <div className="w-full h-48 sm:h-56 relative">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-xs uppercase tracking-wide text-blue-600 font-medium">
                {caseStudy.industry}
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2 group-hover:text-blue-600 transition">
                {caseStudy.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                {caseStudy.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-20 sm:mt-24 bg-blue-600 rounded-xl text-white py-10 sm:py-12 px-6 sm:px-10 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-6"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Let's Write Your Success Story Next</h3>
          <p className="text-white/80 text-sm sm:text-base">Talk to our team and discover how AI can elevate your business operations.</p>
        </div>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Book a Free Strategy Call
        </a>
      </motion.section>

    </main>
  )
}
