'use client';

import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from 'recharts';
import { TrendingUp, Activity, Users, PieChart as PieIcon, Sparkles, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  const { isSignedIn, isLoaded, user } = useUser();

  const usageData = [
    { name: 'Jan', Projects: 5 },
    { name: 'Feb', Projects: 8 },
    { name: 'Mar', Projects: 12 },
    { name: 'Apr', Projects: 10 },
    { name: 'May', Projects: 15 },
    { name: 'Jun', Projects: 18 },
  ];

  const revenueGrowth = [
    { name: 'Jan', Revenue: 1000 },
    { name: 'Feb', Revenue: 2500 },
    { name: 'Mar', Revenue: 4000 },
    { name: 'Apr', Revenue: 3800 },
    { name: 'May', Revenue: 5200 },
    { name: 'Jun', Revenue: 6000 },
  ];

  const resourceDistribution = [
    { name: 'AI Automations', value: 50 },
    { name: 'API Usage', value: 30 },
    { name: 'Storage', value: 20 },
  ];

  const COLORS = ['#3B82F6', '#6366F1', '#22C55E'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading analytics...</p>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-800 mb-6 text-center"
      >
        Analytics Dashboard
      </motion.h1>
      <p className="text-gray-600 text-center max-w-xl mb-12">
        Track your AI projects, resource usage, revenue, and business growth in real-time.
      </p>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl mb-16">
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex items-center gap-4">
          <TrendingUp className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-xl font-bold text-gray-800">₦4.8M</p>
            <p className="text-sm text-gray-500">Monthly Revenue</p>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex items-center gap-4">
          <Activity className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-xl font-bold text-gray-800">87</p>
            <p className="text-sm text-gray-500">Projects Automated</p>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex items-center gap-4">
          <Users className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-xl font-bold text-gray-800">1,245</p>
            <p className="text-sm text-gray-500">Active Users</p>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex items-center gap-4">
          <Sparkles className="w-10 h-10 text-yellow-500" />
          <div>
            <p className="text-xl font-bold text-gray-800">24%</p>
            <p className="text-sm text-gray-500">AI Efficiency Boost</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Project Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usageData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Projects" fill="#3B82F6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
            <PieIcon className="w-5 h-5" /> Resource Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={resourceDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {resourceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Revenue Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 w-full max-w-4xl bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Revenue Growth Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Revenue" stroke="#6366F1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
}
