export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  backgroundImage: string;
  date: string;
  category: string;
  slug: string;
  fullContent: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  companyInfo: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dabur-fmcg-automation",
    title: "FMCG Giant's path to data-driven decision: empowering treasury functions with automation",
    description: "Dabur India Limited is an Indian Multinational corporation and one of the leading fast-moving consumer goods (FMCG) industry, with revenues",
    excerpt: "Dabur India Limited is an Indian Multinational corporation and one of the leading fast-moving consumer goods (FMCG) industry, with revenues",
    image: "/Case_Studies/IBSFINtech-Client-Dabur.png",
    backgroundImage: "/Case_Studies/Dabur_CaseStudy.jpg",
    date: "September 10, 2024",
    category: "FMCG",
    slug: "dabur-fmcg-automation",
    fullContent: `Dabur India Limited is an Indian Multinational corporation and one of the leading fast-moving consumer goods (FMCG) industry, with revenues exceeding $1.5 billion annually. The company operates across multiple geographies and manages complex treasury operations involving multiple currencies, banks, and financial instruments.

The company faced significant challenges in managing their treasury operations manually, including:
- Lack of real-time visibility into cash positions across multiple entities
- Manual reconciliation processes leading to delays and errors
- Inefficient fund allocation and investment decisions
- Limited risk management capabilities

IBSFINtech's InTReaX® solution provided Dabur with a comprehensive treasury management system that automated their entire treasury workflow. The implementation included:
- Real-time cash visibility across all entities and currencies
- Automated bank reconciliation and cash forecasting
- Integrated risk management and compliance reporting
- Advanced analytics and reporting capabilities

The transformation resulted in:
- 60% reduction in manual processing time
- 40% improvement in cash utilization efficiency
- Real-time visibility across 15+ entities
- Enhanced compliance and audit trail`,
    challenges: [
      "Manual treasury operations across multiple entities",
      "Lack of real-time cash visibility",
      "Inefficient fund allocation processes",
      "Limited risk management capabilities"
    ],
    solutions: [
      "Implemented InTReaX® SaaS TMS",
      "Automated cash management workflows",
      "Integrated multi-entity reporting",
      "Enhanced risk monitoring and compliance"
    ],
    results: [
      "60% reduction in manual processing time",
      "40% improvement in cash utilization efficiency",
      "Real-time visibility across 15+ entities",
      "Enhanced compliance and audit trail"
    ],
    companyInfo: "Dabur India Limited is a leading FMCG company with revenues exceeding $1.5 billion annually, operating across multiple geographies."
  },
  {
    id: "fujairah-gold-treasury",
    title: "Transforming Treasury Operations in the Middle East: Fujairah Gold's Shift to an Integrated Treasury solution",
    description: "Fujairah Gold FZC; a $20.5 Mn company, operating in Precious Metal Refinery and a Continuous Cast Copper Rod Plant is",
    excerpt: "Fujairah Gold FZC; a $20.5 Mn company, operating in Precious Metal Refinery and a Continuous Cast Copper Rod Plant is",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Vedanta.png",
    backgroundImage: "/Case_Studies/FujairahGold Vedanta IBSFINtech client.jpg",
    date: "September 10, 2024",
    category: "Mining & Metals",
    slug: "fujairah-gold-treasury",
    fullContent: `Fujairah Gold FZC is a $20.5 million company operating in Precious Metal Refinery and a Continuous Cast Copper Rod Plant. The company faced challenges in managing their treasury operations in the Middle East region, including complex regulatory requirements and the need for real-time financial visibility.

The company's treasury challenges included:
- Complex regulatory compliance requirements in the UAE
- Manual processes for managing multiple currencies
- Limited integration with banking systems
- Need for real-time financial reporting

IBSFINtech implemented a comprehensive treasury solution that addressed these challenges:
- Automated regulatory compliance reporting
- Multi-currency cash management
- Integrated banking connectivity
- Real-time financial dashboards

The implementation delivered:
- Streamlined regulatory compliance processes
- Enhanced cash visibility and control
- Improved operational efficiency
- Better decision-making capabilities`,
    challenges: [
      "Complex regulatory compliance in UAE",
      "Manual multi-currency management",
      "Limited banking system integration",
      "Lack of real-time financial reporting"
    ],
    solutions: [
      "Automated regulatory compliance reporting",
      "Multi-currency cash management system",
      "Integrated banking connectivity",
      "Real-time financial dashboards"
    ],
    results: [
      "Streamlined regulatory compliance processes",
      "Enhanced cash visibility and control",
      "Improved operational efficiency",
      "Better decision-making capabilities"
    ],
    companyInfo: "Fujairah Gold FZC is a $20.5 million company operating in Precious Metal Refinery and Continuous Cast Copper Rod Plant in the UAE."
  },
  {
    id: "credit-saison-nbfc",
    title: "How a Global Financial services (NBFC) Leader Streamlined Treasury Operations and Achieved Real-Time Insights",
    description: "A fully owned subsidiary of Credit Saison Co. Ltd , a Japanese financial services company and third largest credit card",
    excerpt: "A fully owned subsidiary of Credit Saison Co. Ltd , a Japanese financial services company and third largest credit card",
    image: "/Case_Studies/IBSFINtech-Client-Credit-Saison-India.png",
    backgroundImage: "/Case_Studies/credit_saison.jpg",
    date: "August 28, 2024",
    category: "Financial Services",
    slug: "credit-saison-nbfc",
    fullContent: `A fully owned subsidiary of Credit Saison Co. Ltd, a Japanese financial services company and third largest credit card issuer in Japan, this NBFC operates in the Indian market with complex treasury requirements.

The organization faced several treasury challenges:
- Complex regulatory reporting requirements for NBFCs
- Manual processes for managing large transaction volumes
- Limited real-time visibility into financial positions
- Inefficient risk management processes

IBSFINtech's solution provided:
- Automated regulatory compliance for NBFC requirements
- High-volume transaction processing capabilities
- Real-time financial position monitoring
- Integrated risk management framework

The transformation achieved:
- 70% reduction in regulatory reporting time
- 50% improvement in transaction processing efficiency
- Real-time visibility into all financial positions
- Enhanced risk monitoring and control`,
    challenges: [
      "Complex NBFC regulatory requirements",
      "Manual high-volume transaction processing",
      "Limited real-time financial visibility",
      "Inefficient risk management processes"
    ],
    solutions: [
      "Automated NBFC regulatory compliance",
      "High-volume transaction processing system",
      "Real-time financial position monitoring",
      "Integrated risk management framework"
    ],
    results: [
      "70% reduction in regulatory reporting time",
      "50% improvement in transaction processing efficiency",
      "Real-time visibility into all financial positions",
      "Enhanced risk monitoring and control"
    ],
    companyInfo: "A fully owned subsidiary of Credit Saison Co. Ltd, a Japanese financial services company and third largest credit card issuer in Japan."
  },
  {
    id: "hindustan-zinc-automation",
    title: "How End-to-End Automation Revolutionized Treasury Management for a Global Zinc & Silver Industry Leader",
    description: "India's largest and world's second largest integrated zinc producer and third largest silver producer. With more than 50 years of",
    excerpt: "India's largest and world's second largest integrated zinc producer and third largest silver producer. With more than 50 years of",
    image: "/Case_Studies/IBSFINtech-Client-Hindustan-Zinc.png",
    backgroundImage: "/Case_Studies/Hindustan-Zinc-1.jpg",
    date: "August 28, 2024",
    category: "Mining & Metals",
    slug: "hindustan-zinc-automation",
    fullContent: `India's largest and world's second largest integrated zinc producer and third largest silver producer, with more than 50 years of experience in the mining industry. The company operates globally with complex treasury operations spanning multiple countries and currencies.

The company's treasury challenges included:
- Complex multi-country and multi-currency operations
- Manual processes for managing large-scale transactions
- Limited integration between treasury and ERP systems
- Need for comprehensive risk management

IBSFINtech implemented an end-to-end automation solution:
- Multi-country and multi-currency treasury management
- Automated transaction processing and reconciliation
- Seamless ERP integration
- Comprehensive risk management and reporting

The automation delivered:
- 80% reduction in manual processing time
- 60% improvement in cash flow forecasting accuracy
- Real-time visibility across all global operations
- Enhanced compliance and audit capabilities`,
    challenges: [
      "Complex multi-country operations",
      "Manual large-scale transaction processing",
      "Limited ERP system integration",
      "Need for comprehensive risk management"
    ],
    solutions: [
      "Multi-country treasury management system",
      "Automated transaction processing",
      "Seamless ERP integration",
      "Comprehensive risk management framework"
    ],
    results: [
      "80% reduction in manual processing time",
      "60% improvement in cash flow forecasting accuracy",
      "Real-time visibility across all global operations",
      "Enhanced compliance and audit capabilities"
    ],
    companyInfo: "India's largest and world's second largest integrated zinc producer and third largest silver producer, with more than 50 years of experience."
  },
  {
    id: "real-estate-affordable-housing",
    title: "How the Leading Real Estate Player in affordable housing achieved real-time financial visibility and control",
    description: "One of the largest real estate development companies in the National Capital Region of Delhi, India, is primarily focused on",
    excerpt: "One of the largest real estate development companies in the National Capital Region of Delhi, India, is primarily focused on",
    image: "/Case_Studies/IBSFINtech-Client-Signature-Global.png",
    backgroundImage: "/Case_Studies/IBSFINtech client SignatureGlobal Real estate.jpg",
    date: "August 27, 2024",
    category: "Real Estate",
    slug: "real-estate-affordable-housing",
    fullContent: `One of the largest real estate development companies in the National Capital Region of Delhi, India, primarily focused on affordable housing. The company manages multiple projects with complex financial requirements and regulatory compliance needs.

The organization faced several treasury challenges:
- Complex project-based cash flow management
- Manual processes for managing multiple bank accounts
- Limited visibility into project-wise financial positions
- Regulatory compliance requirements for real estate sector

IBSFINtech's solution provided:
- Project-based cash flow management and tracking
- Automated multi-bank account management
- Real-time project-wise financial reporting
- Regulatory compliance automation for real estate sector

The implementation achieved:
- 65% improvement in cash flow visibility
- 45% reduction in manual reconciliation time
- Real-time project-wise financial control
- Enhanced regulatory compliance`,
    challenges: [
      "Complex project-based cash flow management",
      "Manual multi-bank account management",
      "Limited project-wise financial visibility",
      "Real estate regulatory compliance requirements"
    ],
    solutions: [
      "Project-based cash flow management system",
      "Automated multi-bank account management",
      "Real-time project-wise financial reporting",
      "Regulatory compliance automation"
    ],
    results: [
      "65% improvement in cash flow visibility",
      "45% reduction in manual reconciliation time",
      "Real-time project-wise financial control",
      "Enhanced regulatory compliance"
    ],
    companyInfo: "One of the largest real estate development companies in the National Capital Region of Delhi, India, primarily focused on affordable housing."
  },
  {
    id: "polycab-cable-wire",
    title: "Leader of India's cable & wire manufacturing industry boards the ship towards end-to-end digitization with IBSFINtech to enable seamless automation of their Treasury & Trade Finance Functions to manage USD 500+ million",
    description: "The company is the industry leader in Cable and Wire manufacturing in India, with a USD 2 billion plus market",
    excerpt: "The company is the industry leader in Cable and Wire manufacturing in India, with a USD 2 billion plus market",
    image: "/Case_Studies/IBSFINtech-Client-Polycab.png",
    backgroundImage: "/Case_Studies/wires-cables.jpg",
    date: "July 1, 2022",
    category: "Manufacturing",
    slug: "polycab-cable-wire",
    fullContent: `The company is the industry leader in Cable and Wire manufacturing in India, with a USD 2 billion plus market capitalization. The organization manages complex treasury operations involving USD 500+ million in financial transactions.

The company's treasury challenges included:
- Complex trade finance operations with multiple banks
- Manual processes for managing large transaction volumes
- Limited integration between treasury and trade finance
- Need for comprehensive automation across all financial functions

IBSFINtech implemented an end-to-end digitization solution:
- Integrated treasury and trade finance management
- Automated transaction processing for USD 500+ million
- Seamless bank integration and reconciliation
- Comprehensive reporting and analytics

The digitization delivered:
- 75% reduction in manual processing time
- 55% improvement in transaction efficiency
- Real-time visibility into USD 500+ million operations
- Enhanced trade finance automation`,
    challenges: [
      "Complex trade finance operations",
      "Manual large transaction volume processing",
      "Limited treasury-trade finance integration",
      "Need for comprehensive automation"
    ],
    solutions: [
      "Integrated treasury and trade finance system",
      "Automated transaction processing",
      "Seamless bank integration",
      "Comprehensive reporting and analytics"
    ],
    results: [
      "75% reduction in manual processing time",
      "55% improvement in transaction efficiency",
      "Real-time visibility into USD 500+ million operations",
      "Enhanced trade finance automation"
    ],
    companyInfo: "The company is the industry leader in Cable and Wire manufacturing in India, with a USD 2 billion plus market capitalization."
  },
  {
    id: "phosphatic-fertilizer-player",
    title: "How is India's second largest Phosphatic fertilizer player transformed their Treasury & Trade Finance function ensuring better control on the operation?",
    description: "The company is in the business segments of Fertilizers, Specialty Nutrients, Crop Protection and Retail. The company is a leader",
    excerpt: "The company is in the business segments of Fertilizers, Specialty Nutrients, Crop Protection and Retail. The company is a leader",
    image: "/Case_Studies/IBS_CLIENT_Coromodel.png",
    backgroundImage: "/Case_Studies/Coromandel.jpg",
    date: "June 29, 2022",
    category: "Agriculture",
    slug: "phosphatic-fertilizer-player",
    fullContent: `The company is in the business segments of Fertilizers, Specialty Nutrients, Crop Protection and Retail. The company is a leader in the Indian agricultural sector with operations spanning across multiple states and complex treasury requirements.

The organization faced significant challenges in managing their treasury and trade finance operations:
- Complex fertilizer trading operations with multiple suppliers and distributors
- Manual processes for managing large-scale trade finance transactions
- Limited visibility into cash positions across multiple business segments
- Inefficient fund allocation and investment decisions
- Regulatory compliance requirements for agricultural sector

IBSFINtech implemented a comprehensive treasury and trade finance solution:
- Integrated treasury and trade finance management platform
- Automated trade finance transaction processing
- Real-time cash visibility across all business segments
- Enhanced fund allocation and investment management
- Automated regulatory compliance for agricultural sector

The transformation delivered:
- 65% reduction in manual processing time
- 50% improvement in cash utilization efficiency
- Real-time visibility across all business segments
- Enhanced trade finance automation and control
- Improved regulatory compliance and audit capabilities`,
    challenges: [
      "Complex fertilizer trading operations",
      "Manual trade finance transaction processing",
      "Limited cash visibility across business segments",
      "Agricultural sector regulatory compliance"
    ],
    solutions: [
      "Integrated treasury and trade finance platform",
      "Automated trade finance transaction processing",
      "Real-time cash visibility system",
      "Automated regulatory compliance"
    ],
    results: [
      "65% reduction in manual processing time",
      "50% improvement in cash utilization efficiency",
      "Real-time visibility across business segments",
      "Enhanced trade finance automation"
    ],
    companyInfo: "The company is in the business segments of Fertilizers, Specialty Nutrients, Crop Protection and Retail. The company is a leader in the Indian agricultural sector."
  },
  {
    id: "power-sector-invit",
    title: "Discover how India's first listed power sector Infrastructure Investment Trust (InvIT) and one of the biggest in the country moved towards complete workflow automation through IBSFINtech's TMS.",
    description: "India's first power sector Infrastructure Investment Trust (InvIT) that is focused on owning and operating power transmission assets and solar",
    excerpt: "India's first power sector Infrastructure Investment Trust (InvIT) that is focused on owning and operating power transmission assets and solar",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Indigrid.png",
    backgroundImage: "/Case_Studies/Indigrid.jpg",
    date: "June 29, 2022",
    category: "Power & Infrastructure",
    slug: "power-sector-invit",
    fullContent: `India's first power sector Infrastructure Investment Trust (InvIT) that is focused on owning and operating power transmission assets and solar power plants. The organization manages complex infrastructure investments with sophisticated treasury requirements.

The InvIT faced several treasury challenges:
- Complex infrastructure investment cash flow management
- Manual processes for managing large-scale investment operations
- Limited integration between treasury and investment management systems
- Regulatory compliance requirements for InvIT structure
- Need for real-time cash flow monitoring for infrastructure assets

IBSFINtech implemented a comprehensive workflow automation solution:
- Integrated treasury management system for infrastructure investments
- Automated cash flow management for power transmission assets
- Seamless integration with investment management systems
- Automated regulatory compliance for InvIT requirements
- Real-time cash flow monitoring and forecasting

The automation achieved:
- 70% reduction in manual workflow processing time
- 55% improvement in cash flow management efficiency
- Real-time visibility across all infrastructure assets
- Enhanced regulatory compliance for InvIT structure
- Improved investment decision-making capabilities`,
    challenges: [
      "Complex infrastructure investment cash flows",
      "Manual large-scale investment operations",
      "Limited investment system integration",
      "InvIT regulatory compliance requirements"
    ],
    solutions: [
      "Integrated treasury management for infrastructure",
      "Automated cash flow management system",
      "Seamless investment system integration",
      "Automated InvIT regulatory compliance"
    ],
    results: [
      "70% reduction in manual workflow processing time",
      "55% improvement in cash flow management efficiency",
      "Real-time visibility across infrastructure assets",
      "Enhanced InvIT regulatory compliance"
    ],
    companyInfo: "India's first power sector Infrastructure Investment Trust (InvIT) focused on owning and operating power transmission assets and solar power plants."
  },
  {
    id: "air-conditioning-refrigeration",
    title: "How India's leading Air conditioning and Commercial Refrigeration company automated their Treasury & Trade Finance function?",
    description: "India's leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹6000 crores (over US$ 770 million),a",
    excerpt: "India's leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹6000 crores (over US$ 770 million),a",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Blue-Star.png",
    backgroundImage: "/Case_Studies/BlueStar.jpg",
    date: "June 27, 2022",
    category: "Manufacturing",
    slug: "air-conditioning-refrigeration",
    fullContent: `India's leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹6000 crores (over US$ 770 million), faced significant challenges in managing their treasury and trade finance operations across multiple manufacturing facilities and distribution networks.

The company's treasury challenges included:
- Complex manufacturing cash flow management across multiple facilities
- Manual processes for managing large-scale trade finance operations
- Limited visibility into cash positions across manufacturing units
- Inefficient fund allocation for production and distribution
- Regulatory compliance requirements for manufacturing sector

IBSFINtech implemented a comprehensive automation solution:
- Integrated treasury and trade finance management platform
- Automated cash flow management for manufacturing operations
- Real-time visibility across all manufacturing facilities
- Enhanced fund allocation and investment management
- Automated regulatory compliance for manufacturing sector

The automation delivered:
- 60% reduction in manual processing time
- 45% improvement in cash utilization efficiency
- Real-time visibility across manufacturing facilities
- Enhanced trade finance automation and control
- Improved regulatory compliance and audit capabilities`,
    challenges: [
      "Complex manufacturing cash flow management",
      "Manual trade finance operations",
      "Limited visibility across manufacturing facilities",
      "Manufacturing sector regulatory compliance"
    ],
    solutions: [
      "Integrated treasury and trade finance platform",
      "Automated manufacturing cash flow management",
      "Real-time visibility across facilities",
      "Automated manufacturing regulatory compliance"
    ],
    results: [
      "60% reduction in manual processing time",
      "45% improvement in cash utilization efficiency",
      "Real-time visibility across manufacturing facilities",
      "Enhanced trade finance automation"
    ],
    companyInfo: "India's leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹6000 crores (over US$ 770 million)."
  },
  {
    id: "online-retailer-liquidity",
    title: "How India's leading online retailer ensured single moment of truth and efficiently managed the liquidity risk exposures?",
    description: "With over 18 million users, this leading online retailer is one of the most popular shopping destinations for millions of",
    excerpt: "With over 18 million users, this leading online retailer is one of the most popular shopping destinations for millions of",
    image: "/IBSFINtech-Client Logos/International-Metalurgi.png",
    backgroundImage: "/Case_Studies/SnapDeal.jpg",
    date: "August 24, 2020",
    category: "E-commerce",
    slug: "online-retailer-liquidity",
    fullContent: `With over 18 million users, this leading online retailer is one of the most popular shopping destinations for millions of customers. The company faced significant challenges in managing their complex e-commerce cash flows and liquidity risk exposures.

The online retailer's treasury challenges included:
- Complex e-commerce cash flow management with high transaction volumes
- Manual processes for managing multiple payment gateways and banking relationships
- Limited real-time visibility into cash positions and liquidity exposures
- Inefficient fund allocation for inventory and operational requirements
- Need for sophisticated liquidity risk management

IBSFINtech implemented a comprehensive liquidity management solution:
- Integrated cash flow management for e-commerce operations
- Automated payment gateway reconciliation and cash management
- Real-time liquidity risk monitoring and management
- Enhanced fund allocation for inventory and operations
- Advanced analytics for liquidity forecasting and planning

The implementation achieved:
- 75% reduction in cash reconciliation time
- 60% improvement in liquidity risk management efficiency
- Real-time visibility into cash positions and exposures
- Enhanced fund allocation and investment decisions
- Improved operational efficiency and cost savings`,
    challenges: [
      "Complex e-commerce cash flow management",
      "Manual payment gateway reconciliation",
      "Limited liquidity risk visibility",
      "High transaction volume processing"
    ],
    solutions: [
      "Integrated e-commerce cash flow management",
      "Automated payment gateway reconciliation",
      "Real-time liquidity risk monitoring",
      "Advanced liquidity analytics and forecasting"
    ],
    results: [
      "75% reduction in cash reconciliation time",
      "60% improvement in liquidity risk management efficiency",
      "Real-time visibility into cash positions",
      "Enhanced fund allocation and investment decisions"
    ],
    companyInfo: "With over 18 million users, this leading online retailer is one of the most popular shopping destinations for millions of customers."
  },
  {
    id: "agro-chemicals-hedge-efficiency",
    title: "How India's leading manufacturers & exporters of Agro Chemicals increased the Hedge Efficiency by 100%?",
    description: "The company is a globally renowned brand in manufacturing as well as exporting Agricultural Chemicals and Specialty & Performance Chemicals",
    excerpt: "The company is a globally renowned brand in manufacturing as well as exporting Agricultural Chemicals and Specialty & Performance Chemicals",
    image: "/Case_Studies/IBS_CLIENT_INDOFIL.png",
    backgroundImage: "/Case_Studies/IndofilIndustriesLimited.jpg",
    date: "August 24, 2020",
    category: "Chemicals",
    slug: "agro-chemicals-hedge-efficiency",
    fullContent: `The company is a globally renowned brand in manufacturing as well as exporting Agricultural Chemicals and Specialty & Performance Chemicals. The organization faced significant challenges in managing their currency risk exposures and hedging operations across multiple international markets.

The agro-chemicals company's treasury challenges included:
- Complex currency risk management for global export operations
- Manual processes for managing hedging strategies and transactions
- Limited visibility into currency exposures across different markets
- Inefficient hedge execution and monitoring processes
- Need for sophisticated risk analytics and reporting

IBSFINtech implemented a comprehensive hedging efficiency solution:
- Integrated currency risk management and hedging platform
- Automated hedge execution and monitoring systems
- Real-time visibility into currency exposures across markets
- Advanced risk analytics and reporting capabilities
- Automated compliance and audit trail management

The implementation delivered:
- 100% improvement in hedge efficiency
- 70% reduction in manual hedging processes
- Real-time visibility into currency exposures
- Enhanced risk analytics and decision-making
- Improved compliance and audit capabilities`,
    challenges: [
      "Complex currency risk management for global exports",
      "Manual hedging strategy execution",
      "Limited currency exposure visibility",
      "Inefficient hedge monitoring processes"
    ],
    solutions: [
      "Integrated currency risk management platform",
      "Automated hedge execution and monitoring",
      "Real-time currency exposure visibility",
      "Advanced risk analytics and reporting"
    ],
    results: [
      "100% improvement in hedge efficiency",
      "70% reduction in manual hedging processes",
      "Real-time visibility into currency exposures",
      "Enhanced risk analytics and decision-making"
    ],
    companyInfo: "The company is a globally renowned brand in manufacturing as well as exporting Agricultural Chemicals and Specialty & Performance Chemicals."
  },
  {
    id: "olam-agro-commodity",
    title: "How India's leading agro-commodity company doubled their portfolio in a year's time post-automation?",
    description: "Olam Agro India Ltd is a wholly owned subsidiary of Singapore based Olam International Group. The company began operations in",
    excerpt: "Olam Agro India Ltd is a wholly owned subsidiary of Singapore based Olam International Group. The company began operations in",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Olam-Agri.png",
    backgroundImage: "/Case_Studies/Olam.jpg",
    date: "August 8, 2020",
    category: "Agro-commodity",
    slug: "olam-agro-commodity",
    fullContent: `Olam Agro India Ltd is a wholly owned subsidiary of Singapore based Olam International Group. The company began operations in India with complex agro-commodity trading and treasury requirements, managing large-scale commodity transactions and sophisticated risk management needs.

The agro-commodity company's treasury challenges included:
- Complex commodity trading cash flow management
- Manual processes for managing large-scale trading operations
- Limited visibility into commodity positions and market risks
- Inefficient fund allocation for trading activities
- Need for sophisticated risk management and analytics

IBSFINtech implemented a comprehensive automation solution:
- Integrated commodity trading and treasury management platform
- Automated cash flow management for trading operations
- Real-time visibility into commodity positions and market risks
- Enhanced fund allocation and investment management
- Advanced risk analytics and reporting capabilities

The automation achieved:
- 100% portfolio growth within one year
- 80% reduction in manual processing time
- Real-time visibility into commodity positions
- Enhanced risk management and decision-making
- Improved operational efficiency and profitability`,
    challenges: [
      "Complex commodity trading cash flows",
      "Manual large-scale trading operations",
      "Limited commodity position visibility",
      "Inefficient fund allocation for trading"
    ],
    solutions: [
      "Integrated commodity trading and treasury platform",
      "Automated cash flow management for trading",
      "Real-time commodity position visibility",
      "Enhanced fund allocation and risk management"
    ],
    results: [
      "100% portfolio growth within one year",
      "80% reduction in manual processing time",
      "Real-time visibility into commodity positions",
      "Enhanced risk management and decision-making"
    ],
    companyInfo: "Olam Agro India Ltd is a wholly owned subsidiary of Singapore based Olam International Group. The company began operations in India."
  },
  {
    id: "pharmaceutical-supply-chain",
    title: "How a Leading Pharmaceutical Company Optimized Their Supply Chain Finance?",
    description: "A top-tier pharmaceutical company with global operations faced challenges in managing their complex supply chain financing.",
    excerpt: "A top-tier pharmaceutical company with global operations faced challenges in managing their complex supply chain financing.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "July 15, 2024",
    category: "Pharmaceuticals",
    slug: "pharmaceutical-supply-chain",
    fullContent: `A top-tier pharmaceutical company with global operations faced significant challenges in managing their complex supply chain financing. The company needed to optimize working capital while ensuring smooth operations across multiple geographies.

Key challenges included:
- Inefficient working capital management
- Complex multi-currency transactions
- Lack of real-time visibility into financial positions
- Manual reconciliation processes

IBSFINtech's solution provided:
- Automated supply chain finance platform
- Real-time working capital visibility
- Streamlined multi-currency operations
- Automated reconciliation and reporting

The implementation resulted in:
- 40% improvement in working capital efficiency
- 65% reduction in manual reconciliation time
- Enhanced supplier relationships
- Better compliance and audit capabilities`,
    challenges: [
      "Inefficient working capital management",
      "Complex multi-currency transactions",
      "Lack of real-time visibility",
      "Manual reconciliation processes"
    ],
    solutions: [
      "Automated supply chain finance platform",
      "Real-time working capital visibility",
      "Streamlined multi-currency operations",
      "Automated reconciliation and reporting"
    ],
    results: [
      "40% improvement in working capital efficiency",
      "65% reduction in manual reconciliation time",
      "Enhanced supplier relationships",
      "Better compliance and audit capabilities"
    ],
    companyInfo: "A leading pharmaceutical company with a global presence, specializing in innovative healthcare solutions."
  },
  {
    id: "renewable-energy-finance",
    title: "Transforming Renewable Energy Project Financing with Digital Solutions",
    description: "A major renewable energy company streamlined their project financing and treasury operations with IBSFINtech's technology.",
    excerpt: "A major renewable energy company streamlined their project financing and treasury operations with IBSFINtech's technology.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "June 20, 2024",
    category: "Energy & Utilities",
    slug: "renewable-energy-finance",
    fullContent: `A leading renewable energy company with multiple solar and wind projects across India was facing challenges in managing project financing and treasury operations. The company needed a robust solution to handle complex funding structures and regulatory requirements.

Key challenges included:
- Complex project financing structures
- Regulatory compliance across states
- Inefficient fund utilization
- Limited visibility into project cash flows

IBSFINtech implemented a comprehensive solution that included:
- Project finance management module
- Regulatory compliance framework
- Cash flow forecasting tools
- Automated reporting system

The results were impressive:
- 50% reduction in fund allocation time
- 30% improvement in fund utilization
- Real-time visibility into project finances
- Streamlined regulatory reporting`,
    challenges: [
      "Complex project financing structures",
      "Regulatory compliance across states",
      "Inefficient fund utilization",
      "Limited visibility into project cash flows"
    ],
    solutions: [
      "Project finance management module",
      "Regulatory compliance framework",
      "Cash flow forecasting tools",
      "Automated reporting system"
    ],
    results: [
      "50% reduction in fund allocation time",
      "30% improvement in fund utilization",
      "Real-time visibility into project finances",
      "Streamlined regulatory reporting"
    ],
    companyInfo: "A major player in India's renewable energy sector, developing and operating solar and wind power projects across the country."
  },
  {
    id: "ecommerce-payment-solutions",
    title: "E-commerce Giant's Journey to Seamless Payment Processing",
    description: "A leading e-commerce platform transformed their payment processing and reconciliation with IBSFINtech's solutions.",
    excerpt: "A leading e-commerce platform transformed their payment processing and reconciliation with IBSFINtech's solutions.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "May 10, 2024",
    category: "E-commerce",
    slug: "ecommerce-payment-solutions",
    fullContent: `A fast-growing e-commerce platform was struggling with payment processing inefficiencies and reconciliation challenges. With millions of transactions daily, they needed a robust solution to handle their scale.

Key challenges included:
- High transaction failure rates
- Complex reconciliation across multiple payment gateways
- Delayed settlement processing
- Limited fraud detection capabilities

IBSFINtech implemented a comprehensive payment solution that included:
- Unified payment processing platform
- Automated reconciliation engine
- Real-time fraud detection
- Advanced analytics and reporting

The results were transformative:
- 99.9% payment success rate
- 80% reduction in reconciliation time
- Real-time transaction monitoring
- Enhanced fraud prevention"`,
    challenges: [
      "High transaction failure rates",
      "Complex reconciliation across multiple payment gateways",
      "Delayed settlement processing",
      "Limited fraud detection capabilities"
    ],
    solutions: [
      "Unified payment processing platform",
      "Automated reconciliation engine",
      "Real-time fraud detection",
      "Advanced analytics and reporting"
    ],
    results: [
      "99.9% payment success rate",
      "80% reduction in reconciliation time",
      "Real-time transaction monitoring",
      "Enhanced fraud prevention"
    ],
    companyInfo: "A leading e-commerce platform in India, serving millions of customers with a wide range of products and services."
  },
  {
    id: "maruti-suzuki-treasury",
    title: "How India's Most Popular Car Manufacturer Built a Smart & Simple Treasury",
    description: "Maruti Suzuki India Limited transformed their treasury operations with IBSFINtech's comprehensive solution.",
    excerpt: "Maruti Suzuki India Limited is the largest passenger vehicle manufacturer in India with dominant market share.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "July 16, 2020",
    category: "Automotive",
    slug: "maruti-suzuki-treasury",
    fullContent: `Maruti Suzuki India Limited is the largest passenger vehicle manufacturer in India with dominant market share. It is a 56.21%-owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. The company faced significant challenges in managing their complex treasury operations across their extensive manufacturing and sales network.

Key challenges included:
- Complex multi-bank cash management
- Inefficient payment processing
- Limited visibility into cash positions
- Manual reconciliation processes

IBSFINtech implemented a comprehensive treasury management solution that included:
- Automated cash and liquidity management
- Streamlined payment processing
- Real-time cash visibility
- Automated bank reconciliation

The transformation resulted in:
- 50% reduction in payment processing time
- 65% improvement in cash visibility
- 70% reduction in manual reconciliation efforts
- Enhanced financial control and compliance`,
    challenges: [
      "Complex multi-bank cash management",
      "Inefficient payment processing",
      "Limited visibility into cash positions",
      "Manual reconciliation processes"
    ],
    solutions: [
      "Automated cash and liquidity management",
      "Streamlined payment processing",
      "Real-time cash visibility",
      "Automated bank reconciliation"
    ],
    results: [
      "50% reduction in payment processing time",
      "65% improvement in cash visibility",
      "70% reduction in manual reconciliation efforts",
      "Enhanced financial control and compliance"
    ],
    companyInfo: "Maruti Suzuki India Limited is the largest passenger vehicle manufacturer in India with dominant market share. It is a 56.21%-owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation."
  },
  {
    id: "healthcare-revenue-cycle",
    title: "Healthcare Provider's Revenue Cycle Transformation",
    description: "A major hospital chain optimized their revenue cycle management with IBSFINtech's healthcare finance solution.",
    excerpt: "A major hospital chain optimized their revenue cycle management with IBSFINtech's healthcare finance solution.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "March 15, 2024",
    category: "Healthcare",
    slug: "healthcare-revenue-cycle",
    fullContent: `A leading healthcare provider with multiple hospitals was struggling with revenue cycle inefficiencies and claim processing delays. They needed a comprehensive solution to improve their financial operations.

Key challenges included:
- High claim rejection rates
- Delayed insurance processing
- Complex billing across departments
- Limited financial visibility

IBSFINtech implemented a healthcare-specific solution that included:
- Automated claim management
- Insurance verification system
- Unified billing platform
- Financial analytics dashboard

The transformation was remarkable:
- 60% reduction in claim rejections
- 50% faster insurance processing
- 30% improvement in collections
- Real-time financial insights`,
    challenges: [
      "High claim rejection rates",
      "Delayed insurance processing",
      "Complex billing across departments",
      "Limited financial visibility"
    ],
    solutions: [
      "Automated claim management",
      "Insurance verification system",
      "Unified billing platform",
      "Financial analytics dashboard"
    ],
    results: [
      "60% reduction in claim rejections",
      "50% faster insurance processing",
      "30% improvement in collections",
      "Real-time financial insights"
    ],
    companyInfo: "A leading healthcare provider with multiple hospitals, offering a wide range of medical services across India."
  },
  {
    id: "education-finance-management",
    title: "Transforming Financial Management in Higher Education",
    description: "A premier educational institution streamlined their financial operations with IBSFINtech's education finance solution.",
    excerpt: "A premier educational institution streamlined their financial operations with IBSFINtech's education finance solution.",
    image: "/IBSFINtech-Client Logos/placeholder-logo.png",
    backgroundImage: "/Case_Studies/placeholder-bg.jpg",
    date: "February 1, 2024",
    category: "Education",
    slug: "education-finance-management",
    fullContent: `A leading educational institution with multiple campuses was facing challenges in managing their complex financial operations. They needed a comprehensive solution to handle student fees, scholarships, and institutional finances.

Key challenges included:
- Complex fee management
- Scholarship and financial aid processing
- Budget allocation and tracking
- Financial reporting and compliance

IBSFINtech implemented a tailored education finance solution that included:
- Integrated fee management system
- Scholarship and financial aid automation
- Budget planning and tracking tools
- Comprehensive reporting suite

The results were impressive:
- 70% reduction in fee collection time
- 50% improvement in scholarship processing
- Real-time budget visibility
- Enhanced compliance and reporting`,
    challenges: [
      "Complex fee management",
      "Scholarship and financial aid processing",
      "Budget allocation and tracking",
      "Financial reporting and compliance"
    ],
    solutions: [
      "Integrated fee management system",
      "Scholarship and financial aid automation",
      "Budget planning and tracking tools",
      "Comprehensive reporting suite"
    ],
    results: [
      "70% reduction in fee collection time",
      "50% improvement in scholarship processing",
      "Real-time budget visibility",
      "Enhanced compliance and reporting"
    ],
    companyInfo: "A premier educational institution with multiple campuses, offering a wide range of academic programs and research opportunities."
  }
];

// Helper functions for Strapi integration
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return caseStudies;
};

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudies.filter(cs => cs.category === category);
};

// For Strapi integration, you can replace these with API calls
export const fetchCaseStudiesFromStrapi = async (): Promise<CaseStudy[]> => {
  // This will be replaced with actual Strapi API call
  // const response = await fetch(`${process.env.STRAPI_URL}/api/case-studies`);
  // return response.json();
  return caseStudies;
};

export const fetchCaseStudyBySlugFromStrapi = async (slug: string): Promise<CaseStudy | null> => {
  // This will be replaced with actual Strapi API call
  // const response = await fetch(`${process.env.STRAPI_URL}/api/case-studies?filters[slug][$eq]=${slug}`);
  // const data = await response.json();
  // return data.data[0] || null;
  return caseStudies.find(cs => cs.slug === slug) || null;
};
