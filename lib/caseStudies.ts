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
    image: "/Case_Studies/FujairahGold.png",
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
    id: "automotive-manufacturer-digital-transformation",
    title: "Automotive Manufacturer's Digital Transformation: Streamlining Treasury Operations Across Global Markets",
    description: "A leading automotive manufacturer with operations across 25+ countries implemented IBSFINtech's treasury solution to achieve centralized control and real-time visibility.",
    excerpt: "A leading automotive manufacturer with operations across 25+ countries implemented IBSFINtech's treasury solution to achieve centralized control and real-time visibility.",
    image: "/Case_Studies/IBSFINtech-Client-Automotive.png",
    backgroundImage: "/Case_Studies/automotive-manufacturing.jpg",
    date: "June 15, 2024",
    category: "Automotive",
    slug: "automotive-manufacturer-digital-transformation",
    fullContent: `A leading automotive manufacturer with operations across 25+ countries faced significant challenges in managing their complex treasury operations. The company needed to streamline processes, improve cash visibility, and enhance risk management across their global footprint.

The organization's treasury challenges included:
- Fragmented treasury operations across 25+ countries
- Manual processes for managing multiple currencies and banking relationships
- Limited real-time visibility into global cash positions
- Complex regulatory compliance requirements across different jurisdictions
- Inefficient fund allocation and investment decisions

IBSFINtech implemented a comprehensive digital transformation solution:
- Centralized treasury management platform for all global operations
- Automated multi-currency cash management and forecasting
- Real-time integration with banking systems across all regions
- Automated regulatory compliance reporting for multiple jurisdictions
- Advanced risk management and analytics capabilities

The digital transformation delivered:
- 70% reduction in manual processing time across global operations
- 50% improvement in cash utilization efficiency
- Real-time visibility across 25+ countries and 15+ currencies
- Enhanced compliance and audit capabilities
- Improved decision-making through advanced analytics`,
    challenges: [
      "Fragmented treasury operations across 25+ countries",
      "Manual multi-currency management processes",
      "Limited real-time global cash visibility",
      "Complex multi-jurisdiction regulatory compliance"
    ],
    solutions: [
      "Centralized treasury management platform",
      "Automated multi-currency cash management",
      "Real-time banking system integration",
      "Automated regulatory compliance reporting"
    ],
    results: [
      "70% reduction in manual processing time",
      "50% improvement in cash utilization efficiency",
      "Real-time visibility across 25+ countries",
      "Enhanced compliance and audit capabilities"
    ],
    companyInfo: "A leading automotive manufacturer with operations across 25+ countries and revenues exceeding $50 billion annually."
  },
  {
    id: "pharmaceutical-company-treasury-automation",
    title: "Pharmaceutical Company Achieves Treasury Excellence Through Comprehensive Automation",
    description: "A global pharmaceutical company transformed their treasury operations with IBSFINtech's solution, achieving unprecedented efficiency and control.",
    excerpt: "A global pharmaceutical company transformed their treasury operations with IBSFINtech's solution, achieving unprecedented efficiency and control.",
    image: "/Case_Studies/IBSFINtech-Client-Pharma.png",
    backgroundImage: "/Case_Studies/pharmaceutical-lab.jpg",
    date: "May 20, 2024",
    category: "Pharmaceutical",
    slug: "pharmaceutical-company-treasury-automation",
    fullContent: `A global pharmaceutical company with operations in over 30 countries needed to modernize their treasury operations to support their rapid growth and complex financial requirements. The company required a solution that could handle their sophisticated cash management needs while ensuring compliance with strict regulatory requirements.

The company's treasury challenges included:
- Complex cash management across multiple therapeutic areas and business units
- Manual processes for managing large-scale clinical trial funding
- Limited integration between treasury and research & development financial systems
- Need for enhanced risk management in volatile currency markets
- Regulatory compliance requirements across multiple jurisdictions

IBSFINtech delivered a comprehensive treasury automation solution:
- Integrated cash management platform for all business units and therapeutic areas
- Automated clinical trial funding and expense tracking
- Seamless integration with R&D financial systems
- Advanced currency risk management and hedging capabilities
- Automated regulatory compliance and reporting

The automation achieved:
- 65% reduction in treasury processing time
- 45% improvement in cash flow forecasting accuracy
- Real-time visibility across all therapeutic areas and clinical trials
- Enhanced currency risk management and cost savings
- Improved regulatory compliance and audit readiness`,
    challenges: [
      "Complex cash management across multiple therapeutic areas",
      "Manual clinical trial funding processes",
      "Limited R&D financial system integration",
      "Currency risk management in volatile markets"
    ],
    solutions: [
      "Integrated cash management platform",
      "Automated clinical trial funding tracking",
      "Seamless R&D financial system integration",
      "Advanced currency risk management"
    ],
    results: [
      "65% reduction in treasury processing time",
      "45% improvement in cash flow forecasting accuracy",
      "Real-time visibility across therapeutic areas",
      "Enhanced currency risk management"
    ],
    companyInfo: "A global pharmaceutical company with operations in over 30 countries and significant R&D investments."
  },
  {
    id: "energy-sector-treasury-modernization",
    title: "Energy Sector Leader Modernizes Treasury Operations for the Digital Age",
    description: "A major energy company implemented IBSFINtech's treasury solution to navigate complex commodity markets and regulatory requirements.",
    excerpt: "A major energy company implemented IBSFINtech's treasury solution to navigate complex commodity markets and regulatory requirements.",
    image: "/Case_Studies/IBSFINtech-Client-Energy.png",
    backgroundImage: "/Case_Studies/energy-sector.jpg",
    date: "April 12, 2024",
    category: "Energy",
    slug: "energy-sector-treasury-modernization",
    fullContent: `A major energy company operating in multiple markets needed to modernize their treasury operations to better manage the complexities of commodity markets, regulatory requirements, and volatile energy prices. The company required a solution that could provide real-time insights and automated risk management.

The organization faced several treasury challenges:
- Complex commodity price risk management and hedging requirements
- Manual processes for managing large-scale energy trading operations
- Limited integration between treasury and trading systems
- Regulatory compliance requirements for energy sector operations
- Need for real-time cash flow management across multiple markets

IBSFINtech implemented a comprehensive treasury modernization solution:
- Integrated commodity risk management and hedging platform
- Automated energy trading cash flow management
- Seamless integration with trading and risk management systems
- Automated regulatory compliance for energy sector requirements
- Real-time cash flow monitoring and forecasting

The modernization delivered:
- 75% reduction in manual risk management processes
- 60% improvement in cash flow forecasting accuracy
- Real-time integration with trading operations
- Enhanced regulatory compliance and reporting
- Improved decision-making through advanced analytics`,
    challenges: [
      "Complex commodity price risk management",
      "Manual energy trading cash flow processes",
      "Limited trading system integration",
      "Energy sector regulatory compliance"
    ],
    solutions: [
      "Integrated commodity risk management platform",
      "Automated energy trading cash flow management",
      "Seamless trading system integration",
      "Automated energy sector compliance"
    ],
    results: [
      "75% reduction in manual risk management processes",
      "60% improvement in cash flow forecasting accuracy",
      "Real-time integration with trading operations",
      "Enhanced regulatory compliance"
    ],
    companyInfo: "A major energy company operating in multiple markets with significant commodity trading operations."
  },
  {
    id: "technology-startup-treasury-scaling",
    title: "Technology Startup Scales Treasury Operations for Rapid Growth",
    description: "A fast-growing technology startup implemented IBSFINtech's solution to support their rapid expansion and complex financial requirements.",
    excerpt: "A fast-growing technology startup implemented IBSFINtech's solution to support their rapid expansion and complex financial requirements.",
    image: "/Case_Studies/IBSFINtech-Client-Tech-Startup.png",
    backgroundImage: "/Case_Studies/technology-startup.jpg",
    date: "March 8, 2024",
    category: "Technology",
    slug: "technology-startup-treasury-scaling",
    fullContent: `A fast-growing technology startup experiencing rapid expansion needed to implement a scalable treasury solution to support their growth trajectory. The company required a system that could handle their complex funding rounds, international expansion, and sophisticated cash management needs.

The startup's treasury challenges included:
- Managing multiple funding rounds and investor relationships
- Complex cash management across international markets
- Limited treasury infrastructure for rapid scaling
- Need for sophisticated financial reporting for investors
- Currency risk management for global operations

IBSFINtech delivered a scalable treasury solution:
- Comprehensive funding round management and investor reporting
- Multi-currency cash management for international operations
- Scalable treasury infrastructure supporting rapid growth
- Advanced financial reporting and analytics for stakeholders
- Integrated currency risk management and hedging

The implementation achieved:
- 80% reduction in investor reporting time
- 55% improvement in cash flow management efficiency
- Scalable infrastructure supporting 10x growth
- Enhanced investor confidence through transparent reporting
- Optimized currency risk management`,
    challenges: [
      "Managing multiple funding rounds and investors",
      "Complex international cash management",
      "Limited scalable treasury infrastructure",
      "Sophisticated investor reporting requirements"
    ],
    solutions: [
      "Comprehensive funding round management",
      "Multi-currency cash management system",
      "Scalable treasury infrastructure",
      "Advanced investor reporting and analytics"
    ],
    results: [
      "80% reduction in investor reporting time",
      "55% improvement in cash flow management efficiency",
      "Scalable infrastructure supporting 10x growth",
      "Enhanced investor confidence"
    ],
    companyInfo: "A fast-growing technology startup with operations across multiple countries and significant venture capital backing."
  },
  {
    id: "retail-chain-treasury-optimization",
    title: "Retail Chain Optimizes Treasury Operations for Multi-Location Success",
    description: "A major retail chain implemented IBSFINtech's solution to streamline treasury operations across hundreds of locations.",
    excerpt: "A major retail chain implemented IBSFINtech's solution to streamline treasury operations across hundreds of locations.",
    image: "/Case_Studies/IBSFINtech-Client-Retail.png",
    backgroundImage: "/Case_Studies/retail-chain.jpg",
    date: "February 15, 2024",
    category: "Retail",
    slug: "retail-chain-treasury-optimization",
    fullContent: `A major retail chain with hundreds of locations across multiple states needed to optimize their treasury operations to improve cash management, reduce costs, and enhance financial control. The company required a solution that could handle the complexities of multi-location retail operations.

The retail chain's treasury challenges included:
- Complex cash management across hundreds of retail locations
- Manual processes for daily cash reconciliation and reporting
- Limited visibility into store-level cash positions
- Inefficient fund allocation and investment strategies
- Seasonal cash flow management and forecasting

IBSFINtech implemented a comprehensive treasury optimization solution:
- Centralized cash management for all retail locations
- Automated daily cash reconciliation and reporting
- Real-time visibility into store-level cash positions
- Optimized fund allocation and investment management
- Advanced seasonal cash flow forecasting and planning

The optimization delivered:
- 70% reduction in cash reconciliation time
- 50% improvement in cash utilization efficiency
- Real-time visibility across all retail locations
- Enhanced seasonal cash flow management
- Improved investment returns and cost savings`,
    challenges: [
      "Complex multi-location cash management",
      "Manual daily cash reconciliation processes",
      "Limited store-level cash visibility",
      "Seasonal cash flow management complexity"
    ],
    solutions: [
      "Centralized multi-location cash management",
      "Automated daily cash reconciliation",
      "Real-time store-level cash visibility",
      "Advanced seasonal cash flow forecasting"
    ],
    results: [
      "70% reduction in cash reconciliation time",
      "50% improvement in cash utilization efficiency",
      "Real-time visibility across all locations",
      "Enhanced seasonal cash flow management"
    ],
    companyInfo: "A major retail chain with hundreds of locations across multiple states and significant daily cash flows."
  },
  {
    id: "logistics-company-treasury-transformation",
    title: "Logistics Company Transforms Treasury Operations for Global Expansion",
    description: "A logistics company implemented IBSFINtech's solution to support their global expansion and complex supply chain financing needs.",
    excerpt: "A logistics company implemented IBSFINtech's solution to support their global expansion and complex supply chain financing needs.",
    image: "/Case_Studies/IBSFINtech-Client-Logistics.png",
    backgroundImage: "/Case_Studies/logistics-company.jpg",
    date: "January 20, 2024",
    category: "Logistics",
    slug: "logistics-company-treasury-transformation",
    fullContent: `A logistics company expanding globally needed to transform their treasury operations to support their international growth and complex supply chain financing requirements. The company required a solution that could handle multi-currency operations, trade finance, and sophisticated cash management.

The logistics company's treasury challenges included:
- Complex supply chain financing and trade finance operations
- Multi-currency cash management for global operations
- Limited integration with supply chain and logistics systems
- Regulatory compliance requirements across multiple countries
- Need for real-time cash flow management for large-scale operations

IBSFINtech delivered a comprehensive treasury transformation solution:
- Integrated supply chain financing and trade finance platform
- Multi-currency cash management for global operations
- Seamless integration with supply chain and logistics systems
- Automated regulatory compliance for international operations
- Real-time cash flow monitoring and forecasting

The transformation achieved:
- 65% reduction in trade finance processing time
- 45% improvement in cash flow forecasting accuracy
- Real-time integration with supply chain operations
- Enhanced international regulatory compliance
- Improved working capital management`,
    challenges: [
      "Complex supply chain financing operations",
      "Multi-currency global cash management",
      "Limited supply chain system integration",
      "International regulatory compliance requirements"
    ],
    solutions: [
      "Integrated supply chain financing platform",
      "Multi-currency global cash management",
      "Seamless supply chain system integration",
      "Automated international regulatory compliance"
    ],
    results: [
      "65% reduction in trade finance processing time",
      "45% improvement in cash flow forecasting accuracy",
      "Real-time integration with supply chain operations",
      "Enhanced international regulatory compliance"
    ],
    companyInfo: "A logistics company with global operations and complex supply chain financing requirements."
  },
  {
    id: "construction-company-treasury-automation",
    title: "Construction Company Automates Treasury Operations for Project-Based Success",
    description: "A construction company implemented IBSFINtech's solution to manage complex project-based cash flows and financing requirements.",
    excerpt: "A construction company implemented IBSFINtech's solution to manage complex project-based cash flows and financing requirements.",
    image: "/Case_Studies/IBSFINtech-Client-Construction.png",
    backgroundImage: "/Case_Studies/construction-company.jpg",
    date: "December 10, 2023",
    category: "Construction",
    slug: "construction-company-treasury-automation",
    fullContent: `A construction company managing multiple large-scale projects needed to automate their treasury operations to better manage project-based cash flows, financing requirements, and complex payment schedules. The company required a solution that could handle the unique challenges of construction project financing.

The construction company's treasury challenges included:
- Complex project-based cash flow management and forecasting
- Manual processes for managing multiple project financing arrangements
- Limited visibility into project-wise financial positions
- Need for sophisticated payment scheduling and management
- Regulatory compliance requirements for construction projects

IBSFINtech implemented a comprehensive treasury automation solution:
- Project-based cash flow management and forecasting platform
- Automated project financing arrangement management
- Real-time visibility into project-wise financial positions
- Advanced payment scheduling and management system
- Automated regulatory compliance for construction projects

The automation delivered:
- 75% reduction in project cash flow management time
- 60% improvement in project financing efficiency
- Real-time visibility across all construction projects
- Enhanced payment scheduling and management
- Improved project profitability and cash flow control`,
    challenges: [
      "Complex project-based cash flow management",
      "Manual project financing arrangement processes",
      "Limited project-wise financial visibility",
      "Sophisticated payment scheduling requirements"
    ],
    solutions: [
      "Project-based cash flow management platform",
      "Automated project financing arrangement management",
      "Real-time project-wise financial visibility",
      "Advanced payment scheduling and management"
    ],
    results: [
      "75% reduction in project cash flow management time",
      "60% improvement in project financing efficiency",
      "Real-time visibility across all projects",
      "Enhanced payment scheduling and management"
    ],
    companyInfo: "A construction company managing multiple large-scale projects with complex financing requirements."
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
