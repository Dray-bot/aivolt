'use client'

import { motion } from 'framer-motion'
import { Building2, Banknote, Stethoscope, Truck, Globe2 } from 'lucide-react'

const industries = [
  {
    name: 'Finance & Fintech',
    description: 'Empowering financial services with AI-driven automation, fraud detection, and personalized customer experiences.',
    icon: <Banknote size={32} className="text-blue-600" />,
  },
  {
    name: 'Healthcare & Medical',
    description: 'Optimizing patient care with predictive analytics, AI diagnostics, and automated healthcare workflows.',
    icon: <Stethoscope size={32} className="text-blue-600" />,
  },
  {
    name: 'Logistics & Supply Chain',
    description: 'Streamlining logistics operations with AI-powered route optimization and inventory management.',
    icon: <Truck size={32} className="text-blue-600" />,
  },
  {
    name: 'Real Estate & Property',
    description: 'Enhancing property listings, client interactions, and automated valuations through intelligent systems.',
    icon: <Building2 size={32} className="text-blue-600" />,
  },
  {
    name: 'E-commerce & Retail',
    description: 'Boosting sales and customer retention with AI recommendations, demand forecasting, and process automation.',
    icon: <Globe2 size={32} className="text-blue-600" />,
  },
]

export default function IndustriesPage() {
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
          Industries We Transform
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          AIVOLT's AI solutions are crafted to address specific challenges across industries. Here's where we make the biggest impact.
        </p>
      </motion.div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group border border-gray-200 cursor-pointer"
          >
            <div className="flex items-center space-x-4 mb-4">
              {industry.icon}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {industry.name}
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{industry.description}</p>
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
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Not Sure Where to Start?</h3>
          <p className="text-white/80 text-sm sm:text-base">Let's discuss how AIVOLT can elevate your industry with tailored AI solutions.</p>
        </div>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Get a Free Consultation
        </a>
      </motion.section>

    </main>
  )
}
