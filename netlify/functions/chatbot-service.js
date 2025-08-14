// CommonJS version of chatbot service for Netlify Functions
const COMPANY_INFO = {
  name: 'IBSFINtech',
  description: 'leading provider of Treasury, Risk & Trade Finance Management® (TRTFM®) solutions',
  website: 'https://ibsfintech.com',
  email: 'info@ibsfintech.com',
  phone: '+1-XXX-XXX-XXXX'
};

// Static product and service information
const PRODUCTS = [
  {
    name: 'InnoTreasury',
    category: 'sme',
    description: 'Comprehensive treasury management system designed for SMEs',
    features: [
      'Cash flow management',
      'Automated reporting',
      'Risk management',
      'Bank connectivity',
      'Investment tracking'
    ],
    url: '/products/sme/innotreasury'
  },
  {
    name: 'InnoInvest',
    category: 'sme',
    description: 'Investment portfolio management solution for SMEs',
    features: [
      'Portfolio optimization',
      'Risk assessment',
      'Performance analytics',
      'Automated rebalancing',
      'Compliance monitoring'
    ],
    url: '/products/sme/innoinvest'
  },
  {
    name: 'Cash Flow & Liquidity Management',
    category: 'enterprise',
    description: 'Enterprise-grade cash and liquidity management solution',
    features: [
      'Real-time cash visibility',
      'Automated cash forecasting',
      'Liquidity optimization',
      'Multi-currency support',
      'Advanced analytics'
    ],
    url: '/products/enterprise/cashflow-liquidity'
  },
  {
    name: 'Currency & FX Risk Management',
    category: 'enterprise',
    description: 'Comprehensive foreign exchange risk management platform',
    features: [
      'Real-time FX exposure tracking',
      'Automated hedging strategies',
      'Market data integration',
      'Risk reporting',
      'Compliance management'
    ],
    url: '/products/enterprise/currency-fx-risk'
  },
  {
    name: 'Commodity Risk Management',
    category: 'enterprise',
    description: 'Advanced commodity risk management and hedging solutions',
    features: [
      'Commodity exposure analysis',
      'Price risk hedging',
      'Market intelligence',
      'Portfolio optimization',
      'Regulatory compliance'
    ],
    url: '/products/enterprise/commodity-risk-management'
  },
  {
    name: 'Trade Finance Solutions',
    category: 'enterprise',
    description: 'End-to-end trade finance management platform',
    features: [
      'Letter of credit management',
      'Document processing',
      'Risk assessment',
      'Compliance monitoring',
      'Automated workflows'
    ],
    url: '/solutions/trade-finance'
  }
];

const SERVICES = [
  {
    name: 'Treasury Management',
    description: 'Comprehensive treasury operations and cash management',
    benefits: [
      'Centralized treasury operations',
      'Real-time cash visibility',
      'Automated reconciliation',
      'Multi-bank connectivity'
    ],
    url: '/services'
  },
  {
    name: 'Risk Management',
    description: 'Integrated risk management across all treasury functions',
    benefits: [
      'FX risk monitoring',
      'Commodity risk assessment',
      'Interest rate risk management',
      'Compliance reporting'
    ],
    url: '/services'
  },
  {
    name: 'Trade Finance',
    description: 'End-to-end trade finance and supply chain solutions',
    benefits: [
      'Document automation',
      'Risk mitigation',
      'Compliance management',
      'Supply chain optimization'
    ],
    url: '/services'
  }
];

// Mock data for blogs, case studies, and news
const MOCK_BLOGS = [
  {
    title: 'Digital Transformation in Treasury Management',
    excerpt: 'How modern technology is revolutionizing corporate treasury operations',
    url: '/resources/blog/digital-transformation-treasury'
  },
  {
    title: 'FX Risk Management Best Practices',
    excerpt: 'Essential strategies for managing foreign exchange risk',
    url: '/resources/blog/fx-risk-management-best-practices'
  }
];

const MOCK_CASE_STUDIES = [
  {
    title: '360One Treasury Transformation',
    excerpt: 'How 360One achieved 40% efficiency improvement',
    url: '/resources/case-studies/360one'
  },
  {
    title: 'BlueStar Commodity Risk Success',
    excerpt: 'BlueStar\'s journey to effective commodity risk management',
    url: '/resources/case-studies/bluestar'
  }
];

const MOCK_NEWS = [
  {
    title: 'IBSFINtech Announces Strategic Partnerships',
    excerpt: 'Expanding our global reach and capabilities',
    url: '/resources/news/strategic-partnerships'
  }
];

// Function to get company knowledge
async function getCompanyKnowledge() {
  return {
    blogs: MOCK_BLOGS,
    caseStudies: MOCK_CASE_STUDIES,
    news: MOCK_NEWS,
    products: PRODUCTS,
    services: SERVICES
  };
}

// Function to generate enhanced context
function generateEnhancedContext(message, companyKnowledge, currentPage) {
  const lowerMessage = message.toLowerCase();
  let context = '';

  // Add relevant products
  const relevantProducts = companyKnowledge.products.filter(product => 
    lowerMessage.includes(product.name.toLowerCase()) ||
    product.features.some(feature => lowerMessage.includes(feature.toLowerCase()))
  );

  if (relevantProducts.length > 0) {
    context += 'Relevant Products:\n';
    relevantProducts.forEach(product => {
      context += `- ${product.name}: ${product.description}\n`;
      context += `  Features: ${product.features.join(', ')}\n`;
      context += `  Learn more: ${product.url}\n\n`;
    });
  }

  // Add relevant services
  const relevantServices = companyKnowledge.services.filter(service =>
    lowerMessage.includes(service.name.toLowerCase()) ||
    service.benefits.some(benefit => lowerMessage.includes(benefit.toLowerCase()))
  );

  if (relevantServices.length > 0) {
    context += 'Relevant Services:\n';
    relevantServices.forEach(service => {
      context += `- ${service.name}: ${service.description}\n`;
      context += `  Benefits: ${service.benefits.join(', ')}\n`;
      context += `  Learn more: ${service.url}\n\n`;
    });
  }

  // Add case studies if relevant
  if (lowerMessage.includes('case study') || lowerMessage.includes('success story') || lowerMessage.includes('example')) {
    context += 'Success Stories:\n';
    companyKnowledge.caseStudies.slice(0, 2).forEach(caseStudy => {
      context += `- ${caseStudy.title}: ${caseStudy.excerpt}\n`;
      context += `  Read more: ${caseStudy.url}\n\n`;
    });
  }

  // Add recent news if relevant
  if (lowerMessage.includes('news') || lowerMessage.includes('announcement') || lowerMessage.includes('update')) {
    context += 'Recent News:\n';
    companyKnowledge.news.slice(0, 2).forEach(news => {
      context += `- ${news.title}: ${news.excerpt}\n`;
      context += `  Read more: ${news.url}\n\n`;
    });
  }

  return context || 'IBSFINtech offers comprehensive treasury management solutions for enterprises and SMEs.';
}

module.exports = {
  getCompanyKnowledge,
  generateEnhancedContext,
  COMPANY_INFO
};
