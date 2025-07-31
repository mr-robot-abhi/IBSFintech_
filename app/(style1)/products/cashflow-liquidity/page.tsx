'use client';

import React from 'react';
import { BarChart2 } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';
import Footer from '@/components/layout/Footer';

export default function CashflowLiquidity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ModernMegaMenu />
      <main className="flex-grow px-4 sm:px-6 py-10 md:py-16 flex flex-col items-center bg-gradient-to-br from-background via-card to-background/90">
        <div className="max-w-3xl w-full bg-card rounded-2xl shadow-2xl p-8 md:p-10 border border-border">
          <div className="flex items-center mb-6 gap-3">
            <span className="bg-primary/10 rounded-full p-2">
              <BarChart2 className="text-primary" size={32} />
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Cashflow &amp; Liquidity Management</h1>
          </div>
          <p className="text-lg mb-8 text-muted-foreground">
            Transform your cash flow management and liquidity oversight with a comprehensive module, designed to enhance visibility, streamline operations, and maximize financial efficiency.
          </p>
          <ul className="list-disc pl-6 space-y-4 marker:text-primary text-foreground">
            <li>
              <span className="font-semibold text-primary">All-in-One Solution:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1 marker:text-secondary text-muted-foreground">
                <li>Global cash position across group entities, locations, currencies, and banks</li>
                <li>Daily cash position reports and dynamic forecasting <span className="text-xs text-accent">(short, medium, long-term)</span></li>
                <li>Automated bank statement processing (<span className="text-xs font-medium">MT940, MT942, Excel, CSV</span>)</li>
                <li>Auto-categorization of bank transactions for dashboard analytics</li>
                <li>Actuals vs projections, variance, and liquidity analysis</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-primary">Analytics for Top Management:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1 marker:text-secondary text-muted-foreground">
                <li>Consolidated global and group cash positions &amp; projections</li>
                <li>Cash flow reports—groupwise, company, and bank-wise</li>
                <li>Real-time dashboards for actionable insights</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-primary">Enhanced Risk Management &amp; Compliance:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1 marker:text-secondary text-muted-foreground">
                <li>Audit trails for every action</li>
                <li>Real-time alerts, notifications, and mail reminders</li>
              </ul>
            </li>
          </ul>
          <p className="mt-10 text-lg font-semibold text-primary text-center border-t border-muted pt-6">
            Unlock the full potential of your cash flow and liquidity management with our advanced module.
          </p>
        </div>
      </main>
    </div>
  );
}
