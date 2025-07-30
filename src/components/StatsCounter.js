'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const counters = [
  { label: 'AI Projects Delivered', value: 50, suffix: '+' },
  { label: 'Automation Workflows Optimized', value: 120, suffix: '+' },
  { label: 'Average Client ROI Increase', value: 35, suffix: '%' },
  { label: 'Years of AI Innovation', value: 5, suffix: '+' },
]

export default function StatsCounter() {
  const [startCount, setStartCount] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      setStartCount(true)
    }
  }, [inView])

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {counters.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="cursor-default"
          >
            <h3 className="text-4xl font-extrabold text-blue-600 drop-shadow-md">
              {startCount && (
                <CountUp end={item.value} duration={2} suffix={item.suffix} />
              )}
            </h3>
            <p className="mt-2 text-gray-700 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
