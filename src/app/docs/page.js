'use client';

import { motion } from 'framer-motion';
import { BookOpen, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'How to connect AI Automations?', answer: 'To connect AI Automations, navigate to the Projects page, click "New Automation", and follow the guided setup.' },
  { question: 'How do I manage my subscription?', answer: 'Go to the Billing section under Settings to upgrade, downgrade, or cancel your subscription.' },
  { question: 'How to troubleshoot API errors?', answer: 'Check your API keys in the Developer section. Make sure your endpoints are correct and monitor API usage limits.' },
  { question: 'Billing and Invoices', answer: 'You can download invoices and manage billing details in the Billing section of your Dashboard.' },
  { question: 'Contacting Support', answer: 'Use the Floating Help Button or email us at support@aivolt.com. Our team responds within 24 hours.' },
];

export default function HelpDocsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Help Center</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find answers to common questions or get in touch with our support team.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mt-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search help topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-4 pr-10 rounded-xl border text-gray-600 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          />
          <Search className="absolute right-3 top-3 text-gray-600" size={20} />
        </div>
      </div>

      {/* FAQs List */}
      <div className="mt-12 space-y-4 max-w-2xl mx-auto">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-blue-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-white/90 transition"
              >
                <p className="text-lg text-gray-700">{faq.question}</p>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 pb-4 text-gray-600"
              >
                {activeIndex === index && <p>{faq.answer}</p>}
              </motion.div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No topics found for “{searchTerm}”</p>
        )}
      </div>

      {/* CTA Contact Support */}
      <div className="mt-20 max-w-xl mx-auto text-center">
        <p className="text-gray-600 mb-4">Still need help?</p>
        <button
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
}
