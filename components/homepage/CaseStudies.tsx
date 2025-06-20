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
          <h2 className="text-3xl font-bold text-white dark:text-white mb-4 drop-shadow-lg">Case Studies</h2>
          <p className="text-lg text-white/90 dark:text-blue-100 max-w-2xl mx-auto drop-shadow">
            Explore how leading organizations transformed their treasury and finance operations with IBSFintech.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt className="h-full" tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.12}>
                <div className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-blue-100 dark:border-blue-800 overflow-hidden flex flex-col h-full">
                  <div className="relative h-40 w-full">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover w-full h-full"
                      style={{ filter: 'brightness(0.92)' }}
                    />
                    <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow">
                      <cs.icon className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image src={cs.logo} alt={cs.company} width={36} height={36} className="rounded-full bg-white border border-blue-100 dark:border-blue-800" />
                        <span className="font-semibold text-blue-900 dark:text-white text-lg">{cs.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">{cs.title}</h3>
                      <p className="text-gray-700 dark:text-blue-100 mb-3">{cs.summary}</p>
                      <ul className="mb-4 space-y-1">
                        {cs.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-sm">
                            <BarChart2 className="h-4 w-4 text-blue-400 dark:text-blue-500" /> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-2 px-5 py-2 bg-blue-700/90 text-white rounded-lg shadow hover:bg-blue-800/90 transition-colors flex items-center justify-center"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
