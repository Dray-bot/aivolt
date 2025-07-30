'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Jane Doe',
    company: 'MediTech Solutions',
    feedback: 'AIVOLT transformed our diagnostics process with AI-driven insights. Their solutions are truly game-changing!',
  },
  {
    name: 'Michael Smith',
    company: 'BuildPro Constructions',
    feedback: 'The automation suite AIVOLT built for us saved us hundreds of man-hours. Top-tier service!',
  },
  {
    name: 'Sarah Johnson',
    company: 'FinX Analytics',
    feedback: 'Their AI integration was seamless. We’re now able to analyze financial trends with pinpoint accuracy.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by businesses across industries to deliver AI-powered excellence.
        </p>
      </motion.div>

      {/* Swiper Carousel */}
      <div className="mt-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 h-full flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold mb-2">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
                <p className="text-gray-600 text-sm mt-2 italic">"{testimonial.feedback}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-5"></div>
      </div>
    </section>
  )
}
