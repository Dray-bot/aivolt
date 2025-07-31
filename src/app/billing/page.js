'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Rocket, Shield, FileText } from 'lucide-react';
import { useState } from 'react';

export default function BillingPage() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [subscriptionStatus, setSubscriptionStatus] = useState('Active');

  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      price: 'Free',
      description: 'Perfect for individuals starting out.',
      features: ['1 AI Project', 'Basic Analytics', 'Email Support'],
      action: 'Get Started',
      current: false,
    },
    {
      name: 'Pro',
      icon: <Rocket className="w-6 h-6 text-white" />,
      price: '₦9,999/mo',
      description: 'For growing teams and startups.',
      features: ['10 AI Projects', 'Advanced Analytics', 'Priority Support'],
      action: 'Upgrade Now',
      current: true,
      highlight: true,
    },
    {
      name: 'Enterprise',
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      price: 'Contact Us',
      description: 'Custom solutions for large businesses.',
      features: ['Unlimited Projects', 'Custom Integrations', 'Dedicated Support'],
      action: 'Contact Sales',
      current: false,
    },
  ];

  const invoices = [
    { id: 'INV-2025-001', amount: '₦9,999', date: 'July 1, 2025', status: 'Paid' },
    { id: 'INV-2025-002', amount: '₦9,999', date: 'June 1, 2025', status: 'Paid' },
    { id: 'INV-2025-003', amount: '₦9,999', date: 'May 1, 2025', status: 'Paid' },
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading billing info...</p>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-800 mb-6 text-center"
      >
        Billing & Subscription
      </motion.h1>
      <p className="text-gray-600 text-center max-w-xl mb-12">
        Manage your AiVolt subscription, billing details, and invoices here.
      </p>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-6 shadow-xl border ${
              plan.highlight
                ? 'bg-blue-600 text-white border-blue-700'
                : 'bg-white/70 backdrop-blur-lg text-gray-800 border-blue-100'
            } flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                {plan.icon}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-lg font-semibold mb-2">{plan.price}</p>
              <p className="text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${plan.highlight ? 'text-white' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              {plan.current ? (
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                  Current Plan
                </span>
              ) : (
                <button
                  className={`w-full mt-4 px-6 py-3 rounded-xl shadow-md transition font-medium ${
                    plan.highlight
                      ? 'bg-white text-blue-700 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.action}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Billing Summary */}
      <div className="mt-16 w-full max-w-4xl bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Billing Summary</h2>
        <div className="flex flex-col sm:flex-row justify-between text-gray-600">
          <p>
            <span className="font-semibold">Plan:</span> Pro (₦9,999/mo)
          </p>
          <p>
            <span className="font-semibold">Next Billing Date:</span> August 31, 2025
          </p>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl hover:bg-gray-300 transition text-sm">
            Update Payment Method
          </button>
          <button
            onClick={() => setSubscriptionStatus('Canceled')}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition text-sm"
          >
            Cancel Subscription
          </button>
        </div>
        {subscriptionStatus === 'Canceled' && (
          <p className="mt-4 text-sm text-red-600">Your subscription has been canceled.</p>
        )}
      </div>

      {/* Invoices Section */}
      <div className="mt-16 w-full max-w-4xl bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-blue-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 flex items-center gap-2">
          <FileText className="w-6 h-6" /> Invoices
        </h2>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex justify-between items-center bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100 shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-700">{invoice.id}</p>
                <p className="text-sm text-gray-500">{invoice.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">{invoice.amount}</span>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    invoice.status === 'Paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {invoice.status}
                </span>
                <button className="text-blue-600 text-sm hover:underline">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
