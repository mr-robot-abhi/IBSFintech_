"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Zap, Users, BarChart2, Building } from "lucide-react";
import Tilt from "react-parallax-tilt";

const caseStudies = [
  {
    title: "Global Bank Treasury Transformation",
    company: "BankCorp International",
    logo: "/case-studies/bankcorp.png",
    summary:
      "How BankCorp leveraged IBSFintech's platform to achieve 40% faster reconciliations and 25% reduction in manual effort across 12 countries.",
    highlights: [
      "40% Faster Reconciliation",
      "25% Manual Effort Reduction",
      "12 Countries, 1 Platform",
    ],
    icon: Globe,
    image: "/case-studies/bank-treasury.jpg",
  },
  {
    title: "Retail Giant: Cash Visibility at Scale",
    company: "RetailPay Group",
    logo: "/case-studies/retailpay.png",
    summary:
      "RetailPay unified 200+ accounts, automated cash forecasting, and improved working capital by 32% using IBSFintech.",
    highlights: [
      "200+ Accounts Unified",
      "32% Working Capital Gain",
      "Automated Forecasting",
    ],
    icon: Users,
    image: "/case-studies/retail-cash.jpg",
  },
  {
    title: "Manufacturing Risk Mitigation",
    company: "ManuBank",
    logo: "/case-studies/manubank.png",
    summary:
      "A multinational manufacturer reduced FX risk by 50% and improved compliance through real-time analytics.",
    highlights: [
      "50% FX Risk Reduction",
      "Real-Time Compliance",
      "Multinational Rollout",
    ],
    icon: Shield,
    image: "/case-studies/manufacturing-risk.jpg",
  },
  {
    title: "Fintech Startup: Scaling with Security",
    company: "TechFin",
    logo: "/case-studies/techfin.png",
    summary:
      "TechFin scaled to 1M users while maintaining robust security and uptime with IBSFintech services.",
    highlights: [
      "1M+ Users",
      "Zero Security Incidents",
      "99.99% Uptime",
    ],
    icon: Zap,
    image: "/case-studies/fintech-scale.jpg",
  },
  {
    title: "Insurance Group: Automated Compliance",
    company: "SecureLife Insurance",
    logo: "/case-studies/securelife.png",
    summary:
      "SecureLife automated regulatory reporting and improved audit readiness, reducing compliance costs by 37%.",
    highlights: [
      "37% Lower Compliance Cost",
      "Automated Audit Trails",
      "Instant Regulatory Reports",
    ],
    icon: Shield,
    image: "/case-studies/insurance-compliance.jpg",
  },
  {
    title: "NBFC: Centralized Lending Operations",
    company: "LendFast NBFC",
    logo: "/case-studies/lendfast.png",
    summary:
      "LendFast unified loan disbursal and risk analytics, scaling to 10K+ loans/month with 99% accuracy.",
    highlights: [
      "10K+ Loans/Month",
      "99% Accuracy",
      "Unified Disbursal Platform",
    ],
    icon: Building,
    image: "/case-studies/nbfc-lending.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">Case Studies</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
            Explore how leading organizations transformed their treasury and finance operations with IBSFintech.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 h-full flex flex-col">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <cs.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{cs.title}</h3>
                  <p className="text-blue-700 text-sm">{cs.summary}</p>
                  <div className="flex-grow"></div>
                  <span className="mt-4 inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full self-start hover:bg-blue-700 transition-colors">
                    {cs.highlights[0]}
                  </span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
