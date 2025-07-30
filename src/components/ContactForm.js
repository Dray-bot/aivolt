'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
    alert('Thank you for reaching out! We will contact you soon.')
  }

  return (
    <section className="relative bg-gray-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Let&apos;s Build Something Powerful
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Fill in the form and we&apos;ll reach out to discuss how AIVOLT can bring AI solutions to your business.
        </p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 bg-white p-8 rounded-xl shadow-xl space-y-6"
        >
          <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 border text-black ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full px-4 py-3 border text-black ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }} className="w-full">
            <textarea
              rows="5"
              placeholder="Your Message"
              {...register('message', { required: 'Message is required' })}
              className={`w-full px-4 py-3 border text-black ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Send Message
          </motion.button>

          {isSubmitSuccessful && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </motion.div>

      {/* Subtle PatternPad Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-5"></div>
      </div>
    </section>
  )
}
