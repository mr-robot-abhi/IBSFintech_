"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  DollarSign,
  CreditCard,
  TrendingUp,
  Coins,
  Shield,
  PieChart,
  FileText,
  Building,
  Banknote,
  BarChart3,
  Database,
  Settings,
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Cash & Liquidity",
    description: "Visibility, forecasting, bank analysis",
    iconSvg: "/Services_icons_teal/Cash-Liquidity-Management.svg",
    angle: 0,
  },
  {
    id: 2,
    title: "Payments",
    description: "Approvals, automation, centralization",
    iconSvg: "/Services_icons_teal/Payments.svg",
    angle: 45,
  },
  {
    id: 3,
    title: "Supply Chain",
    description: "AP/AR automation, working capital",
    iconSvg: "/Services_icons_teal/Supply-Chain-Finance.svg",
    angle: 90,
  },
  {
    id: 4,
    title: "Commodity",
    description: "Margin, hedging, exposure tracking",
    iconSvg: "/Services_icons_teal/Commodity-Management.svg",
    angle: 135,
  },
  {
    id: 5,
    title: "Currency Risk",
    description: "Hedging, derivatives, valuation",
    iconSvg: "/Services_icons_teal/Currency-Risk-Management.svg",
    angle: 180,
  },
  {
    id: 6,
    title: "Investment",
    description: "Mutual funds, FDs, PMS, bonds",
    iconSvg: "/Services_icons_teal/Investment-Management.svg",
    angle: 225,
  },
  {
    id: 7,
    title: "Trade Finance",
    description: "LCs, BCs, shipment finance",
    iconSvg: "/Services_icons_teal/Trade-Finance-Management.svg",
    angle: 270,
  },
  {
    id: 8,
    title: "Debt Mgmt",
    description: "Borrowings, loans, intercompany",
    iconSvg: "/Services_icons_teal/Debt-Management.svg",
    angle: 315,
  },
]

const interfaces = [
  {
    id: 1,
    title: "Banks",
    icon: Banknote,
  },
  {
    id: 2,
    title: "Dealing Platforms",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Marketing Data Providers",
    icon: Database,
  },
  {
    id: 4,
    title: "ERP & 3rd Party",
    icon: Settings,
  },
]

export default function FintechEcosystem() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredInterface, setHoveredInterface] = useState<number | null>(null)

  const handleServiceClick = (serviceId: number) => {
    // Navigate to service page (404 for now since pages aren't created yet)
    window.location.href = '/404'
  }

  const handleInterfaceClick = (interfaceId: number) => {
    console.log(`Navigate to interface ${interfaceId}`)
  }

  return (
    <div className="w-full flex items-center justify-center py-12 bg-gradient-to-b from-white to-teal-50 dark:from-teal-900/30 dark:to-gray-900 transition-colors duration-200">
      <div className="relative w-full max-w-6xl mx-auto h-[700px]">
        {/* Left side text content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72 z-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-teal-900 dark:text-teal-100 mb-6">Our Offerings</h2>
            <p className="text-lg text-teal-800 dark:text-teal-100/90 leading-relaxed">
              Explore our comprehensive suite of solutions designed to address your every financial need. Our platform
              integrates seamlessly to provide unparalleled control and insight.
            </p>
          </motion.div>
        </div>

        {/* Central logo and title */}
        <div
          className="absolute z-30"
          style={{
            left: "calc(50% + 80px)", // Moved right to make space for text
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-teal-900/80 backdrop-blur-sm rounded-full w-[160px] h-[160px] flex flex-col items-center justify-center shadow-lg border border-teal-200 dark:border-teal-600/30 transition-all duration-300 hover:bg-teal-50 dark:hover:bg-teal-800/70">
              <Image src="/ibs_logo_1.png" alt="IBSFintech Logo" width={64} height={64} className="mx-auto mb-2" />
              <motion.div className="space-y-1 text-center">
                <motion.div 
                  className="text-[14px] font-bold text-teal-800 dark:text-teal-50 leading-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  IBSFINtech
                </motion.div>
                <motion.div 
                  className="text-[10px] text-teal-700 dark:text-teal-100/80 leading-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Treasurytech Platform
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Service cards in circle */}
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% + 80px)", // Moved right
            top: "50%",
          }}
        >
          {services.map((service, index) => {
            const radius = 240 // Increased radius to create more space between service circles and central logo
            const angleRad = (service.angle * Math.PI) / 180
            const x = radius * Math.cos(angleRad)
            const y = radius * Math.sin(angleRad)

            return (
              <motion.div
                key={service.id}
                className="absolute cursor-pointer z-20"
                style={{
                  left: x - 80, // Adjusted for smaller box
                  top: y - 55, // Adjusted for smaller box
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: service.id * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service.id)}
              >
                <div
                  className={`
                    w-40 h-32 bg-white dark:bg-teal-900/20 
                    rounded-xl shadow-lg border border-teal-200 dark:border-teal-600/20 p-4 
                    transition-all duration-300 hover:shadow-xl hover:shadow-teal-300 hover:bg-teal-50 
                    dark:hover:bg-teal-800/30 hover:scale-105 hover:border-teal-300 backdrop-blur-sm
                    cursor-pointer transform
                    ${hoveredService === service.id ? "shadow-teal-300 shadow-xl bg-teal-50 dark:bg-teal-800/30 scale-105 border-teal-300" : ""}
                  `}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="bg-teal-100 dark:bg-teal-800/60 rounded-full p-3 mb-2">
                      <Image src={service.iconSvg} alt={service.title} width={24} height={24} className="w-6 h-6" />
                    </div>
                    <div className="text-teal-800 dark:text-teal-200 text-sm font-medium mb-1">{service.title}</div>
                    <div className="text-teal-700 dark:text-teal-100/80 text-xs leading-tight">{service.description}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Lines connecting CENTER to service boxes - BEHIND BOXES */}
        <div
          className="absolute z-5"
          style={{
            left: "calc(50% + 80px)", // Moved right
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg className="w-[400px] h-[400px] pointer-events-none">
            {services.map((service) => {
              const radius = 240
              const angleRad = (service.angle * Math.PI) / 180
              const centerX = 200
              const centerY = 200

              // PRECISE radius calculations for each specific angle to just touch boxes
              let serviceBoxRadius
              switch (service.angle) {
                case 0: // Cash & Liquidity (right)
                  serviceBoxRadius = radius - 70
                  break
                case 45: // Payments (bottom-right)
                  serviceBoxRadius = radius - 72
                  break
                case 90: // Supply Chain (bottom)
                  serviceBoxRadius = radius - 68
                  break
                case 135: // Commodity (bottom-left)
                  serviceBoxRadius = radius - 72
                  break
                case 180: // Currency Risk (left)
                  serviceBoxRadius = radius - 70
                  break
                case 225: // Investment (top-left) - FIXED GAP
                  serviceBoxRadius = radius - 75
                  break
                case 270: // Trade Finance (top)
                  serviceBoxRadius = radius - 68
                  break
                case 315: // Debt Mgmt (top-right) - FIXED GAP
                  serviceBoxRadius = radius - 75
                  break
                default:
                  serviceBoxRadius = radius - 70
              }

              const endX = centerX + serviceBoxRadius * Math.cos(angleRad)
              const endY = centerY + serviceBoxRadius * Math.sin(angleRad)

              // PRECISE logo box radius - touch the edge exactly
              const logoBoxRadius = 80
              const startX = centerX + logoBoxRadius * Math.cos(angleRad)
              const startY = centerY + logoBoxRadius * Math.sin(angleRad)

              return (
                <g key={`connection-${service.id}`}>
                  <motion.line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="#0d9488"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: service.id * 0.1 }}
                  />

                  <motion.circle
                    r="4"
                    fill="#0d9488"
                    initial={{
                      cx: startX,
                      cy: startY,
                      opacity: 0,
                    }}
                    animate={{
                      cx: endX,
                      cy: endY,
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: 2 + service.id * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Additional particle for more visual effect */}
                  <motion.circle
                    r="2"
                    fill="#14b8a6"
                    initial={{
                      cx: startX,
                      cy: startY,
                      opacity: 0,
                    }}
                    animate={{
                      cx: endX,
                      cy: endY,
                      opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: 3 + service.id * 0.4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Curly brace - POSITIONED BETWEEN SERVICES AND INTERFACES */}
        <motion.div
          className="absolute z-40"
          style={{
            left: "calc(50% + 420px)", // Moved further right but less than interfaces
            top: "calc(50% - 140px)", // Extended to span more vertically
            transform: "translate(0, 0)",
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <svg width="80" height="280" viewBox="0 0 80 280">
            <path
              d="M 10 10 Q 20 10 20 20 L 20 130 Q 20 140 30 140 Q 20 140 20 150 L 20 260 Q 20 270 10 270"
              stroke="#3B82F6"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Interface cards */}
        <div
          className="absolute z-20"
          style={{
            left: "calc(50% + 460px)", // Moved further right to avoid overlap
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <motion.h2
            className="text-lg font-bold text-teal-900 dark:text-teal-100 mb-3 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Interfaces
          </motion.h2>
          <div className="space-y-2">
            {interfaces.map((interface_, index) => {
              const Icon = interface_.icon

              return (
                <motion.div
                  key={interface_.id}
                  className="cursor-pointer"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredInterface(interface_.id)}
                  onHoverEnd={() => setHoveredInterface(null)}
                  onClick={() => handleInterfaceClick(interface_.id)}
                >
                  <div
                    className={`
                      w-40 h-14 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-600 dark:to-teal-700 
                      rounded-lg shadow-lg p-3 transition-all duration-300
                      ${hoveredInterface === interface_.id ? "shadow-teal-300 shadow-xl from-teal-200 to-teal-300 dark:from-teal-700 dark:to-teal-800" : ""}
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="bg-teal-200 dark:bg-teal-800/60 rounded-full p-1">
                        <Icon className="w-4 h-4 text-teal-800 dark:text-teal-200" />
                      </div>
                      <h3 className="font-semibold text-teal-800 dark:text-teal-200 text-sm">{interface_.title}</h3>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
