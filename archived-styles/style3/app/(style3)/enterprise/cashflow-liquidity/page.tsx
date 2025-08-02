'use client';

import React from 'react';
import MegaMenu3 from '@/components/homepage/MegaMenu3';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function CashflowLiquidity() {
  return (
    <div className="relative overflow-x-hidden transition-colors duration-200 bg-white dark:bg-gray-900 min-h-screen">
      <MegaMenu3 />
      <ThemeToggle />

      {/* Dark mode background image container */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 dark:bg-[url('/bg_dark_2.jpg')] dark:bg-cover dark:bg-center dark:bg-no-repeat dark:opacity-10" />
      </div>

      <main className="container mx-auto px-4 max-w-7xl pt-24 pb-16">
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-teal-900 dark:text-teal-400 mb-2 border-b-4 border-teal-700 inline-block">
            Cashflow & Liquidity Management Module
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-300 mt-4 max-w-4xl">
            Optimize Your Cash Flow and Liquidity with IBSFINtech&apos;s Cashflow & Liquidity Module
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-400 max-w-4xl">
            Transform your cash flow management and liquidity oversight with our comprehensive module, designed to enhance visibility, streamline operations, and maximize financial efficiency.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-6xl">
          <div>
            <h2 className="text-teal-800 dark:text-teal-300 font-semibold mb-3">All-in-One Solution</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-400">
              <li>Global Cash position across group entities, locations, currencies, and banks.</li>
              <li>Generation of cash position report on daily basis for requisite intervals.</li>
              <li>Reading of Bank statement in MT940, MT942, Excel, CSV format.</li>
              <li>Statement reading can be done multiple times during the day subject to the availability of the updated statement on designated email id.</li>
              <li>Auto-Categorization of bank statement transactions as per user-defined rules and generation of dashboard to analyze the spends and receipts.</li>
              <li>Cash Flow Forecasting for short, medium and long term horizons.</li>
              <li>Plotting Actuals vs Projections and performing variance analysis</li>
              <li>Analysis of liquidity position</li>
            </ol>
          </div>
          <div>
            <h2 className="text-teal-800 dark:text-teal-300 font-semibold mb-3">Analytics for Top Management</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-400 mb-6">
              <li>Provides a consolidated platform to view the overall global cash position.</li>
              <li>Covers Cash projections for different time horizons.</li>
              <li>Cash flow reports - Group wise, Company and Bank wise.</li>
              <li>Real time dashboard.</li>
            </ol>

            <h2 className="text-teal-800 dark:text-teal-300 font-semibold mb-3">Enhanced Risk Management & Compliance</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-400">
              <li>Audit Trails.</li>
              <li>Real-time Alerts, Notifications and Mail Reminders.</li>
            </ol>
          </div>
        </section>

        <section className="max-w-4xl">
          <p className="font-semibold text-gray-800 dark:text-gray-300">
            Unlock the full potential of your cash flow and liquidity management with our advanced module.
          </p>
        </section>
      </main>
    </div>
  );
}
