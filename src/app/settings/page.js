'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, XCircle, Loader2, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.primaryEmailAddress?.emailAddress || '',
  });

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading settings...</p>
      </div>
    );
  }

  if (!isSignedIn) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  const handleDeleteAccount = () => {
    const confirm = window.confirm('Are you sure you want to delete your account? This action is irreversible.');
    if (confirm) {
      alert('Account deletion flow (simulation)');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
      >
        Account Settings
      </motion.h1>

      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-blue-100">
        
        {/* Profile Section */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Profile Information</h2>
        
        <div className="flex items-center gap-6 mb-8">
          <img
            src={user.imageUrl}
            alt="Profile Picture"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 shadow-md"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border text-gray-700 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border text-gray-700 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full mt-1 p-3 rounded-xl border text-gray-700 border-gray-300 bg-gray-100 shadow-sm"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="relative bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition flex items-center"
          >
            {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
            {success ? <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> : null}
            {loading ? 'Saving...' : success ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-blue-100 mt-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Preferences</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Receive Email Notifications</p>
            <input type="checkbox" className="w-5 h-5 accent-blue-600" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Enable Dark Mode (Coming Soon)</p>
            <span className="text-sm text-gray-500">Not available yet</span>
          </div>
        </div>
      </div>

      {/* Subscription Plan Section */}
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-blue-100 mt-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Subscription Plan</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-800">Current Plan: <span className="text-blue-600">Pro</span></p>
            <p className="text-sm text-gray-500">Renews on Sept 20, 2025</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow-sm hover:bg-blue-50 transition">
            Manage Subscription
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="w-full max-w-4xl bg-red-50 border border-red-200 p-8 rounded-3xl shadow-2xl mt-12">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Danger Zone</h2>
        <p className="text-sm text-red-600 mb-6">Deleting your account is permanent and will remove all your data from AiVolt. This action cannot be undone.</p>
        <button
          onClick={handleDeleteAccount}
          className="flex items-center bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition"
        >
          <Trash2 className="w-5 h-5 mr-2" /> Delete Account
        </button>
      </div>
    </div>
  );
}
