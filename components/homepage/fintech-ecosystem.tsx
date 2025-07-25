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
    icon: DollarSign,
    angle: 0,
  },
  {
    id: 2,
    title: "Payments",
    description: "Approvals, automation, centralization",
    icon: CreditCard,
    angle: 45,
  },
  {
    id: 3,
    title: "Supply Chain",
    description: "AP/AR automation, working capital",
    icon: TrendingUp,
    angle: 90,
  },
  {
    id: 4,
    title: "Commodity",
    description: "Margin, hedging, exposure tracking",
    icon: Coins,
    angle: 135,
  },
  {
    id: 5,
    title: "Currency Risk",
    description: "Hedging, derivatives, valuation",
    icon: Shield,
    angle: 180,
  },
  {
    id: 6,
    title: "Investment",
    description: "Mutual funds, FDs, PMS, bonds",
    icon: PieChart,
    angle: 225,
  },
  {
    id: 7,
    title: "Trade Finance",
    description: "LCs, BCs, shipment finance",
    icon: FileText,
    angle: 270,
  },
  {
    id: 8,
    title: "Debt Mgmt",
    description: "Borrowings, loans, intercompany",
    icon: Building,
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
    console.log(`Navigate to service ${serviceId}`)
  }

  const handleInterfaceClick = (interfaceId: number) => {
    console.log(`Navigate to interface ${interfaceId}`)
  }

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="relative w-full max-w-6xl mx-auto h-[800px]">
        {/* Left side text content */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 z-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Offerings</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Explore our comprehensive suite of solutions designed to address your every financial need. Our platform
              integrates seamlessly to provide unparalleled control and insight.
            </p>
          </motion.div>
        </div>

        {/* Central logo and title - REDUCED SIZE */}
        <div
          className="absolute z-30"
          style={{
            left: "calc(50% + 100px)", // Moved right to make space for text
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
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl border-2 border-white/20 min-w-[160px]">
              <Image src="/ibs_logo_1.png" alt="IBSFintech Logo" width={45} height={45} className="mx-auto mb-2" />
              <motion.div className="space-y-0.5">
                <motion.div 
                  className="text-[10px] font-bold text-white leading-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  IBS Fintech
                </motion.div>
                <motion.div 
                  className="text-[9px] text-white/80 leading-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Treasury Tech Platform
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Service cards in circle - REDUCED SIZE */}
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "calc(50% + 100px)", // Moved right
            top: "50%",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const radius = 220 // Original size
            const angleRad = (service.angle * Math.PI) / 180
            const x = radius * Math.cos(angleRad)
            const y = radius * Math.sin(angleRad)

            return (
              <motion.div
                key={service.id}
                className="absolute cursor-pointer z-20"
                style={{
                  left: x - 55, // Adjusted for smaller box
                  top: y - 40, // Adjusted for smaller box
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
                    w-28 h-20 bg-white/10 
                    rounded-xl shadow-lg border border-white/20 p-2 
                    transition-all duration-300 hover:shadow-xl backdrop-blur-sm
                    ${hoveredService === service.id ? "shadow-blue-300 shadow-xl bg-white/20" : ""}
                  `}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="bg-blue-500 rounded-full p-1 mb-1">
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className="text-white text-xs font-medium mb-0.5">{service.title}</div>
                    <div className="text-white/80 text-[10px] leading-tight">{service.description}</div>
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
            left: "calc(50% + 100px)", // Moved right
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg className="w-[500px] h-[500px] pointer-events-none">
            {services.map((service) => {
              const radius = 220
              const angleRad = (service.angle * Math.PI) / 180
              const centerX = 250
              const centerY = 250

              // PRECISE radius calculations for each specific angle to eliminate gaps/overlaps
              let serviceBoxRadius
              switch (service.angle) {
                case 0: // Cash & Liquidity (right)
                  serviceBoxRadius = radius - 45
                  break
                case 45: // Payments (bottom-right)
                  serviceBoxRadius = radius - 48
                  break
                case 90: // Supply Chain (bottom)
                  serviceBoxRadius = radius - 42
                  break
                case 135: // Commodity (bottom-left)
                  serviceBoxRadius = radius - 48
                  break
                case 180: // Currency Risk (left)
                  serviceBoxRadius = radius - 45
                  break
                case 225: // Investment (top-left)
                  serviceBoxRadius = radius - 48
                  break
                case 270: // Trade Finance (top)
                  serviceBoxRadius = radius - 42
                  break
                case 315: // Debt Mgmt (top-right)
                  serviceBoxRadius = radius - 48
                  break
                default:
                  serviceBoxRadius = radius - 45
              }

              const endX = centerX + serviceBoxRadius * Math.cos(angleRad)
              const endY = centerY + serviceBoxRadius * Math.sin(angleRad)

              // PRECISE logo box radius - touch the edge exactly
              const logoBoxRadius = 92
              const startX = centerX + logoBoxRadius * Math.cos(angleRad)
              const startY = centerY + logoBoxRadius * Math.sin(angleRad)

              return (
                <g key={`connection-${service.id}`}>
                  <motion.line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, delay: service.id * 0.1 }}
                  />

                  <motion.circle
                    r="3"
                    fill="#60A5FA"
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
                      duration: 2,
                      delay: 2 + service.id * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Curly brace - REDUCED SIZE */}
        <motion.div
          className="absolute z-40"
          style={{
            left: "calc(50% + 370px)", // Moved further right to avoid overlap
            top: "calc(50% - 100px)", // Adjusted
            transform: "translate(0, -50%)",
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <svg width="120" height="200" viewBox="0 0 120 200">
            <path
              d="M 20 25 Q 40 25 40 45 L 40 85 Q 40 100 60 100 Q 40 100 40 115 L 40 155 Q 40 175 20 175"
              stroke="#3B82F6"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Interface cards - REDUCED SIZE */}
        <div
          className="absolute z-20"
          style={{
            left: "calc(50% + 440px)", // Adjusted
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <motion.h2
            className="text-lg font-bold text-blue-900 mb-3 text-center"
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
                      w-36 h-12 bg-gradient-to-r from-blue-600 to-blue-700 
                      rounded-lg shadow-lg p-2 transition-all duration-300
                      ${hoveredInterface === interface_.id ? "shadow-blue-400 shadow-xl from-blue-700 to-blue-800" : ""}
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-500 rounded-full p-1">
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <h3 className="font-semibold text-white text-xs">{interface_.title}</h3>
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
