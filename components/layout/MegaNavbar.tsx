"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  {
    label: "Home",
    href: "/?variant=illustrative1",
    submenus: [
      { label: "Illystrative Style 1", href: "/?variant=illustrative1" },
      { label: "Illustrative Style 2", href: "/?variant=illustrative2" },
      { label: "Illustrative Style 3", href: "/?variant=illustrative3" },
    ],
  },
  {
    label: "Products",
    mega: true,
    groups: [
      {
        title: "Enterprise TMS",
        items: [
          { label: "Cashflow & Liquidity", href: "/enterprise/cashflow-liquidity" },
          { label: "Currency (FX) Risk", href: "/enterprise/currency-fx-risk" },
          { label: "Investment (Money Market)", href: "/enterprise/investment-money-market" },
          { label: "Trade Finance – Import Export & Banking", href: "/enterprise/trade-finance" },
          { label: "Debt (Borrowings)", href: "/enterprise/debt-borrowings" },
          { label: "Commodity Risk", href: "/enterprise/commodity-risk" },
          { label: "Payments", href: "/enterprise/payments" },
          { label: "Supply Chain Finance – VNDZY®", href: "/enterprise/supply-chain-finance" },
        ],
      },
      {
        title: "SME – TMS",
        items: [
          { label: "InnoTTM", href: "/sme/innottm" },
          { label: "InnoInvest", href: "/sme/innovest" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    mega: true,
    groups: [
      {
        title: "Solutions",
        items: [
          { label: "Cash Visibility & Forecasting", href: "/solutions/cash-visibility-forecasting" },
          { label: "Navigate Foreign Exchange Risk", href: "/solutions/foreign-exchange-risk" },
          { label: "Manage end-to-end money market instruments", href: "/solutions/money-market" },
          { label: "Optimize Trade Finance Operations", href: "/solutions/trade-finance" },
          { label: "Manage Debt", href: "/solutions/manage-debt" },
          { label: "Mitigate Commodity Risk", href: "/solutions/commodity-risk" },
          { label: "Automate Treasury Payment Processes", href: "/solutions/treasury-payments" },
          { label: "Supply Chain Finance Platform", href: "/solutions/supply-chain-finance" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    mega: true,
    groups: [
      {
        title: "Menu Links",
        items: [
          { label: "Our Clients", href: "/resources/our-clients" },
          { label: "Success Stories", href: "/resources/success-stories" },
          { label: "Why Choose Us", href: "/resources/why-choose-us" },
          { label: "Integration Capabilities", href: "/resources/integration" },
          { label: "Security", href: "/resources/security" },
          { label: "Fact Sheet", href: "/resources/fact-sheet" },
          { label: "FAQs", href: "/resources/faqs" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Webinars", href: "/resources/webinars" },
          { label: "Videos", href: "/resources/videos" },
          { label: "Glossary", href: "/resources/glossary" },
          { label: "Help Center", href: "/resources/help-center" },
        ],
      },
    ],
  },
  {
    label: "Company",
    mega: true,
    groups: [
      {
        title: "Company Information",
        items: [
          { label: "About Us", href: "/company/about" },
          { label: "Leadership Team", href: "/company/leadership" },
          { label: "US Leadership Team", href: "/company/us-leadership" },
          { label: "Global Partners", href: "/company/partners" },
          { label: "Career", href: "/company/careers" },
        ],
      },
      {
        title: "Culture & Recognition",
        items: [
          { label: "Awards & Recognitions", href: "/company/awards" },
          { label: "Life at IBSFINtech", href: "/company/life" },
        ],
        extra: (
          <div className="pt-4">
            <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
              Company Culture Photo
            </div>
            <div className="mt-2">
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        )
      }
    ],
  },
];

const locales = [
  { code: "IND", label: "India" },
  { code: "US", label: "USA" },
];

export default function MegaNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [locale, setLocale] = useState("IND");

  return (
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-blue-100 border-b border-blue-100/40 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/?variant=illustrative1" className="flex items-center gap-2 group">
          <Image src="/ibs_logo_sample.png" alt="IBS Fintech" width={140} height={36} className="object-contain h-9 w-auto" priority />
        </Link>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menu.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`px-4 py-2 font-semibold text-blue-900 hover:text-blue-700 rounded-lg transition-colors flex items-center gap-1 ${openMenu === item.label ? "bg-blue-100/60" : ""}`}
              >
                {item.label}
                {item.submenus || item.mega ? <ChevronDown size={16} className="ml-1" /> : null}
              </button>
              {/* Dropdowns */}
              <AnimatePresence>
                {openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-0 top-full mt-2 z-40 ${item.mega ? "w-[700px]" : "w-56"}`}
                  >
                    <div className={`rounded-xl shadow-2xl border border-blue-100/50 bg-white/95 backdrop-blur-lg ${item.mega ? "p-6" : "p-3"}`}>
                      {/* Mega Menu */}
                      {item.mega ? (
                        <div className="grid grid-cols-2 gap-8">
                          {item.groups.map((group, gi) => (
                            <div key={group.title}>
                              <h4 className="text-blue-700 font-bold text-sm mb-2">{group.title}</h4>
                              <ul className="space-y-1">
                                {group.items.map((sub) => (
                                  <li key={sub.label}>
                                    <Link href={sub.href} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 text-blue-900 hover:text-blue-700 transition-colors">
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {group.extra}
                            </div>
                          ))}
                        </div>
                      ) : item.submenus ? (
                        <ul className="space-y-1">
                          {item.submenus.map((sub) => (
                            <li key={sub.label}>
                              <Link href={sub.href} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 text-blue-900 hover:text-blue-700 transition-colors">
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow transition-colors flex items-center gap-2"
          >
            Contact Us <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          {/* Locale Switcher */}
          <div className="ml-4 flex items-center gap-2 relative group">
            <button className="flex items-center gap-1 px-3 py-2 bg-white/80 border border-blue-200 rounded-lg text-blue-900 font-semibold hover:bg-blue-100 transition-colors">
              <Globe className="h-5 w-5 text-blue-500" />
              {locale}
              <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-1 z-50 w-32 hidden group-hover:block bg-white rounded-lg shadow border border-blue-100">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => setLocale(loc.code)}
                  className={`w-full text-left px-4 py-2 text-blue-900 hover:bg-blue-50 ${locale === loc.code ? "font-bold" : ""}`}
                >
                  {loc.code} <span className="ml-2 text-xs text-blue-400">{loc.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Hamburger - Placeholder, can be expanded */}
        <div className="md:hidden">
          <button className="p-2 rounded-lg bg-blue-100 text-blue-900">
            <span className="sr-only">Open Menu</span>
            <ChevronDown />
          </button>
        </div>
      </div>
    </nav>
  );
}
