'use client';

import React from 'react';
import Image from 'next/image';
import { BarChart2 } from 'lucide-react';

import Link from 'next/link';

export default function CashflowLiquidity() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Modern Mega Menu */}

      
              <main className="relative z-10 pt-20 px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <BarChart2 className="text-blue-600 mr-3" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Cashflow & Liquidity Management</h1>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Transform your cash flow management and liquidity oversight with our comprehensive module, designed to enhance visibility, streamline operations, and maximize financial efficiency.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center">
              Request Demo
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src="/Inner pages/Products/Cashflow & Liquidity Management.png"
                alt="Cashflow & Liquidity Management"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Comprehensive Cash Management</h2>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 mb-6">
              <Image
                src="/Inner pages/Products/Cash_position_50.jpg"
                alt="Cash Position Analytics"
                fill
                className="object-cover"
              />
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Global cash position across group entities, locations, currencies, and banks</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Daily cash position reports and dynamic forecasting</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Automated bank statement processing (MT940, MT942, Excel, CSV)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Analytics & Reporting</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Consolidated global and group cash position and projections</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Cash flow reports — groupwise, company, and bank-wise</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Real-time dashboards for actionable insights</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100">
                    <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700">Audit trails for every action with complete transparency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Cash Management?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Unlock the full potential of your cash flow and liquidity management with our advanced module.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center">
            Get Started
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      </main>
    </div>
  );
}
