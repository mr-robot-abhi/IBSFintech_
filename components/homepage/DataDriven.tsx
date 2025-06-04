'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BarChart, LineChart, PieChart, Area, Bar, CartesianGrid, XAxis, YAxis, 
  Tooltip, Legend, Line, Pie, ResponsiveContainer, Cell, Sector
} from 'recharts';
import ClientLogoStrip from '@/components/common/ClientLogoStrip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap, DollarSign, BarChart2, Globe, Users, Building, Factory, Truck, Newspaper, Handshake } from 'lucide-react';

// Sample data for charts
const operationalData = [
  { name: 'Jan', before: 100, after: 60 },
  { name: 'Feb', before: 110, after: 65 },
  { name: 'Mar', before: 115, after: 62 },
  { name: 'Apr', before: 120, after: 70 },
  { name: 'May', before: 125, after: 75 },
  { name: 'Jun', before: 130, after: 78 },
];

const savingsData = [
  { name: 'Cash Mgmt', value: 40 },
  { name: 'Risk Mgmt', value: 30 },
  { name: 'Automation', value: 20 },
  { name: 'Compliance', value: 10 },
];

const industryData = [
  { name: 'Automotive', value: 25, impact: '30% cost reduction' },
  { name: 'Manufacturing', value: 20, impact: '40% efficiency gain' },
  { name: 'Financial Services', value: 30, impact: '50% risk mitigation' },
  { name: 'Healthcare', value: 15, impact: '35% cash flow improvement' },
  { name: 'Retail', value: 10, impact: '25% transaction savings' },
];

const COLORS = ['#6C63FF', '#4FC3F7', '#A78BFA', '#7C3AED', '#FF6B6B'];

export default function DataDriven() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % savingsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey + 18} textAnchor={textAnchor} fill="#999">
          {`${payload.impact}`}
        </text>
      </g>
    );
  };

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Main Banner with Data Visualization */}
      <section className="pt-28 pb-16 px-4 bg-[#F8F9FA] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#F0F9FF] to-[#F8F9FA] z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#6C63FF] bg-opacity-10 text-[#6C63FF] text-sm font-medium mb-4">
                Data-Driven Treasury Management
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
                Optimize <span className="text-[#6C63FF]">Treasury with Data</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Achieve 40% cost reduction and 70% efficiency gains with our analytics-driven Treasury Management Platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] hover:from-[#5B52E5] hover:to-[#3DA8D8] text-white">
                  Explore Data <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Request Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white p-6 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-center mb-4">Operational Cost Reduction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart 
                  data={operationalData} 
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  barGap={0}
                  barCategoryGap="20%"
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    itemStyle={{
                      padding: '0.25rem 0',
                      color: '#1f2937',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    labelStyle={{
                      color: '#4b5563',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem'
                    }}
                    formatter={(value: any, name: string) => {
                      return [`$${value}K`, name];
                    }}
                  />
                  <Legend 
                    verticalAlign="top"
                    height={36}
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{
                      paddingBottom: '1rem',
                    }}
                  />
                  <defs>
                    <linearGradient id="beforeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="afterGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Bar 
                    dataKey="before" 
                    name="Before Platform" 
                    fill="url(#beforeGradient)"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    {operationalData.map((entry, index) => (
                      <Cell 
                        key={`cell-before-${index}`}
                        style={{
                          opacity: 0.8,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Bar>
                  <Bar 
                    dataKey="after" 
                    name="With Platform" 
                    fill="url(#afterGradient)"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationEasing="ease-out"
                    animationBegin={200}
                  >
                    {operationalData.map((entry, index) => (
                      <Cell 
                        key={`cell-after-${index}`}
                        style={{
                          opacity: 0.8,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <style jsx global>{`
                .recharts-bar-rectangle:hover {
                  opacity: 1 !important;
                  transform: translateY(-2px);
                  transition: all 0.3s ease;
                }
                .recharts-tooltip-cursor {
                  fill: rgba(0, 0, 0, 0.05);
                }
                .recharts-legend-item {
                  cursor: pointer;
                  transition: opacity 0.2s;
                }
                .recharts-legend-item:hover {
                  opacity: 0.7;
                }
              `}</style>
              <p className="text-sm text-gray-600 text-center mt-4">
                Average 40% reduction in operational costs across clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip (Unchanged) */}
      <ClientLogoStrip variant="datadriven" />

      {/* Winning Together Section with Charts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Winning Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our data-driven Treasury Management Platform delivers quantifiable improvements in efficiency, accuracy, and cost-effectiveness for leading organizations.
            </p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cost Savings Breakdown</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={savingsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      activeIndex={activeIndex}
                      activeShape={{
                        fill: '#ff7300',
                        stroke: '#fff',
                        strokeWidth: 2
                      } as const}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {savingsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Interactive breakdown of cost savings by category
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">Efficiency Improvements</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { month: 'Jan', efficiency: 20 },
                      { month: 'Feb', efficiency: 35 },
                      { month: 'Mar', efficiency: 45 },
                      { month: 'Apr', efficiency: 55 },
                      { month: 'May', efficiency: 65 },
                      { month: 'Jun', efficiency: 78 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis label={{ value: 'Efficiency %', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      name="Efficiency Increase"
                      stroke="#3b82f6" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                Average 70% increase in efficiency within 6 months
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Offerings</h2>
            <p className="text-lg text-gray-600">
              Analytics-driven solutions delivering measurable business impact
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Treasury Management",
                description: "Centralize operations with 45% improved efficiency.",
                icon: DollarSign,
                stats: { value: 45, label: "Efficiency Gain" }
              },
              {
                title: "Risk Management",
                description: "Mitigate risks with 50% reduction in exposure.",
                icon: Shield,
                stats: { value: 50, label: "Risk Reduction" }
              },
              {
                title: "Trade Finance",
                description: "Streamline processes with 40% faster documentation.",
                icon: Globe,
                stats: { value: 40, label: "Processing Speed" }
              },
              {
                title: "Supply Chain Finance",
                description: "Optimize working capital with 35% cost savings.",
                icon: Truck,
                stats: { value: 35, label: "Cost Savings" }
              },
              {
                title: "Debt Management",
                description: "Reduce servicing costs by 30% with analytics.",
                icon: BarChart2,
                stats: { value: 30, label: "Cost Reduction" }
              },
              {
                title: "Analytics & Insights",
                description: "60% faster reporting with real-time dashboards.",
                icon: TrendingUp,
                stats: { value: 60, label: "Reporting Speed" }
              }
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-blue-50 p-6">
                  <div className="flex justify-between items-center">
                    <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                      <offering.icon size={24} />
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-700">{offering.stats.value}%</span>
                      <TrendingUp size={20} className="text-green-500 ml-1" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${offering.stats.value}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-blue-700 mt-1">{offering.stats.label}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{offering.title}</h3>
                  <p className="text-gray-600 mb-4">{offering.description}</p>
                  <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300">
                    View Analytics <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236C63FF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E" + ")"
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              Our platform delivers unparalleled value through data-driven insights and scalable solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Platform",
                description: "Seamless digitization with 80% process automation.",
                icon: Globe,
                stats: { value: 80, label: "Automation Rate" }
              },
              {
                title: "Advanced Analytics",
                description: "Real-time insights with 60% faster reporting.",
                icon: BarChart2,
                stats: { value: 60, label: "Reporting Speed" }
              },
              {
                title: "Scalable Solutions",
                description: "Adaptable tools with 90% client retention.",
                icon: TrendingUp,
                stats: { value: 90, label: "Retention Rate" }
              }
            ].map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-blue-50 p-6">
                  <div className="flex justify-between items-center">
                    <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                      <diff.icon size={24} />
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-700">{diff.stats.value}%</span>
                      <TrendingUp size={20} className="text-green-500 ml-1" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${diff.stats.value}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-blue-700 mt-1">{diff.stats.label}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{diff.title}</h3>
                  <p className="text-gray-600 mb-4">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries with Radial Chart */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236C63FF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E" + ")"
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Industries</h2>
            <p className="text-lg text-gray-600">
              Our platform delivers tailored analytics for diverse industries, driving measurable impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-2xl h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                    activeIndex={activeIndustryIndex ?? 0}
                    activeShape={renderActiveShape}
                    onMouseEnter={(_, index) => setActiveIndustryIndex(index)}
                    onMouseLeave={() => setActiveIndustryIndex(null)}
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          <p className="text-sm text-gray-600 text-center mt-4">
            Hover over segments to see industry-specific impact metrics
          </p>
        </div>
      </section>

      {/* Innovation in Action */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236C63FF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E" + ")"
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Innovation in Action</h2>
            <p className="text-lg text-gray-600">
              Explore how our clients have achieved measurable results with our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Bank Success",
                description: "50% reduction in processing time with automated workflows.",
                image: "/case-study-1.jpg",
                stats: "50% Time Saved"
              },
              {
                title: "Manufacturing Efficiency",
                description: "40% improved cash flow across 20+ subsidiaries.",
                image: "/case-study-2.jpg",
                stats: "40% Cash Flow Gain"
              },
              {
                title: "Retail Optimization",
                description: "$2M annual savings through supply chain finance.",
                image: "/case-study-3.jpg",
                stats: "$2M Saved"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="px-4 py-2 bg-blue-50 rounded-lg inline-block">
                    <p className="text-sm font-medium text-blue-700">{caseStudy.stats}</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300">
                    Read Case Study <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Strategic Partnerships</h2>
            <p className="text-lg text-gray-600">
              We collaborate with industry leaders to enhance our analytics-driven solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Partner A', 'Partner B', 'Partner C', 'Partner D'].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <Handshake size={24} className="text-blue-600 mr-2" />
                <p className="text-gray-800 font-medium">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0-1.343 0-3-3c-1.343-3s1.343-3-3-3s3-1.343 0 3 1.343 3 3 3zm56-76c1.657 0-1.343-3-3s3-1.343-3 0 1.343-0-3-3-1.343 3-3 3 3 3 3 3zM12 86c2.21 0 4-6.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0-4-1.79-4-4-4s-1.79-4-4-4-4-4 1.79 4-4 1.79-4 4zm23-11c2.76 0-2-5.24-5-5-5s-2.24-5-5-5-5-5 2.24-5 4-5 5 5 5 5 5-5zm-6 60c2.21 0-4-1.79-4-4-4s-4-1.79-4-4-4-4-4 1.79-4-4 4-4-4 1.79-4 4zm29-22c2.76-2-2.24-5-5-2-5s-2.24-5-5-5-5-5-5 2.24-5-5 5-4-5 2.24-5 5 5 5 5-5zM32 63c2.76-5-2.24-5-5-5-5s-5-5-5 2-5-2.24 5-5-5-5 5-4-5 2.24-5 5 5 5 5-10zm57-13c2.76-4-2-5-5-5-5s-5-2.24-4-5-4-5-5 2.24-5-5 5-5-5 5 2-5 5 5 5-5-5zm-9-21c1.105-0-2-2.895-4-2-2s-4-2 .895-2 2-2 2 2 .895 2-2 2 2 2 2 2zm60 0c1.105 0 2-2-2-2-2-2s-2-2 .895-2-2-2 2-2-2 .895 2 2 .895 2 2-2zM35 2c1.105 0-2-2-2.895-2-2-2s-2-2 .895-2-2-2 2-2-2 2 .895 2 2 .zM12 2 z' fill='none'/%' fill='none' fill='%236C63FF%' fill-opacity='0.2'/%3E%3C/svg%3E' %3C/svg%3E" + "%'')"
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest News</h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest insights and achievements.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Analytics Dashboard Launch",
                date: "May 2025",
                description: "New real-time analytics for treasury insights.",
                stats: "30% Faster Insights"
              },
              {
                title: "Global Expansion",
                date: "April 2025",
                description: "Serving clients in 30+ countries.",
                stats: "30+ Countries"
              },
              {
                title: "Industry Award",
                date: "March 2025",
                description: "Top Treasury Platform by FinTech Awards.",
                stats: "Award Winner"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Newspaper size={24} className="text-blue-600 mr-2" />
                    <p className="text-sm text-gray-500">{news.date}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <div className="px-4 py-2 bg-blue-50 rounded-lg inline-block mb-4">
                    <p className="text-sm font-medium text-blue-700">{news.stats}</p>
                  </div>
                  <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2z' fill='%236C63FF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E" + ")"
            }}
          />
        </div>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Finance Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how industry leaders are transforming their treasury operations
            </p>
          </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Morgan',
                role: 'CTO, Finovate',
                image: '/avatars/man5.jpg',
                content: 'The data visualization tools have given us unprecedented visibility into our cash flow.',
                stats: '75% faster decision-making',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                name: 'Nina Patel',
                role: 'CFO, TechGlobal',
                image: '/avatars/woman6.jpg',
                content: 'Predictive analytics reduced our idle cash by 45% while maintaining liquidity.',
                stats: '45% reduction in idle cash',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'David Kim',
                role: 'Treasury Director, NexGen',
                image: '/avatars/man6.jpg',
                content: 'We automated 90% of manual processes, freeing our team for strategic work.',
                stats: '90% process automation',
                color: 'from-purple-500 to-blue-500'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200`}></div>
                <div className="relative bg-white p-6 rounded-lg h-full shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                        style={{ objectFit: 'cover' }} // Replacing fill with objectFit style
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="relative">
                    <svg
                      className="absolute -top-6 -left-2 h-12 w-12 text-gray-100"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.152-9.12l-0.192 0.032zM22.112 4c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.224 6.24 8.224 3.168 0 5.28-2.336 5.28-5.28 0-2.88-2.016-4.992-4.8-4.992-0.832 0-1.6 0.192-2.304 0.544 0.256-3.2 2.24-6.72 5.12-9.12l-0.192 0.032z" />
                    </svg>
                    <p className="text-gray-700 pl-8 relative z-10">"{testimonial.content}"</p>
                    <div className="mt-4 px-4 py-2 bg-gray-50 rounded-lg inline-block">
                      <p className="text-sm font-medium text-gray-900">{testimonial.stats}</p>
                    </div>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
          <div className="mt-3 text-center">
            <div className="inline-flex items-center gap-1 bg-gray-50 px-6 py-3 rounded-full">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
          ))}
          <span className="ml-2 text-gray-600 font-medium text-sm">Rated 4.8/5 by finance professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect (Footer) */}
      <footer className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 mb-4">Let's Connect</h2>
            <p className="text-lg text-blue-100 mb-8 mb-6">Ready to unlock data-driven treasury success? Contact us now today!</p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button
                  title="lg button"
                  className="bg-white text-blue-600 hover:bg-blue-50">
                    Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-blue-500 hover:bg-blue-600 hover:bg-blue-600">
                    Request ROI Analysis
                </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm">© 2025 Treasury Management Platform. All rights reserved.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#!" className="text-blue-100 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-blue-100 hover:text-white">Terms of Service</a>
                <a href="#" className="text-blue-100 hover:text-blue-2 hover:text-white">Support</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}