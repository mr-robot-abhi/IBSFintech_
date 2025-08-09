import { getAllBlogPosts, BlogPost } from './blog';
import { getAllCaseStudies, CaseStudy } from './caseStudies';
import { getAllNewsArticles, NewsArticle } from './news';

// Types for enhanced chatbot context
export interface CompanyKnowledge {
  blogs: BlogPost[];
  caseStudies: CaseStudy[];
  news: NewsArticle[];
  products: ProductInfo[];
  services: ServiceInfo[];
}

export interface ProductInfo {
  name: string;
  category: 'enterprise' | 'sme';
  description: string;
  features: string[];
  url: string;
}

export interface ServiceInfo {
  name: string;
  description: string;
  benefits: string[];
  url: string;
}

// Static product and service information
const PRODUCTS: ProductInfo[] = [
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
      'Trade documentation',
      'Financing optimization',
      'Risk mitigation',
      'Workflow automation'
    ],
    url: '/products/enterprise/trade-finance'
  },
  {
    name: 'Supply Chain Finance',
    category: 'enterprise',
    description: 'Comprehensive supply chain financing solutions',
    features: [
      'Supplier financing programs',
      'Dynamic discounting',
      'Risk assessment',
      'Cash flow optimization',
      'Multi-party collaboration'
    ],
    url: '/products/enterprise/supply-chain-finance'
  },
  {
    name: 'Investment & Money Market',
    category: 'enterprise',
    description: 'Professional investment and money market management',
    features: [
      'Portfolio management',
      'Money market operations',
      'Risk analytics',
      'Performance tracking',
      'Regulatory reporting'
    ],
    url: '/products/enterprise/investment-money-market'
  },
  {
    name: 'Debt & Borrowings Management',
    category: 'enterprise',
    description: 'Comprehensive debt and borrowing management platform',
    features: [
      'Debt portfolio management',
      'Interest rate optimization',
      'Covenant monitoring',
      'Payment scheduling',
      'Risk assessment'
    ],
    url: '/products/enterprise/debt-borrowings'
  },
  {
    name: 'Treasury Payments',
    category: 'enterprise',
    description: 'Secure and efficient treasury payment solutions',
    features: [
      'Multi-bank connectivity',
      'Payment automation',
      'Fraud prevention',
      'Regulatory compliance',
      'Real-time tracking'
    ],
    url: '/products/enterprise/payments'
  }
];

const SERVICES: ServiceInfo[] = [
  {
    name: 'Cash Visibility & Forecasting',
    description: 'Real-time cash position visibility and intelligent forecasting',
    benefits: [
      'Improved liquidity management',
      'Better investment decisions',
      'Reduced borrowing costs',
      'Enhanced risk management'
    ],
    url: '/solutions/cash-visibility-forecasting'
  },
  {
    name: 'FX & Currency Risk Management',
    description: 'Comprehensive foreign exchange risk management solutions',
    benefits: [
      'Reduced currency exposure',
      'Automated hedging strategies',
      'Improved profit margins',
      'Regulatory compliance'
    ],
    url: '/solutions/fx-currency-risk'
  },
  {
    name: 'Commodity Risk Management',
    description: 'Advanced commodity price risk management and hedging',
    benefits: [
      'Price volatility protection',
      'Improved cost predictability',
      'Enhanced profitability',
      'Risk mitigation'
    ],
    url: '/solutions/commodity-risk'
  },
  {
    name: 'Trade Finance Solutions',
    description: 'Comprehensive trade finance and documentary credit solutions',
    benefits: [
      'Streamlined trade processes',
      'Reduced processing time',
      'Lower operational costs',
      'Enhanced security'
    ],
    url: '/solutions/trade-finance'
  },
  {
    name: 'Supply Chain Finance',
    description: 'Optimize working capital across your supply chain',
    benefits: [
      'Improved cash flow',
      'Supplier relationship enhancement',
      'Cost reduction',
      'Risk mitigation'
    ],
    url: '/solutions/supply-chain-finance'
  },
  {
    name: 'Investment & Money Market',
    description: 'Professional investment and money market management services',
    benefits: [
      'Optimized returns',
      'Diversified portfolio',
      'Risk management',
      'Regulatory compliance'
    ],
    url: '/solutions/investment-money-market'
  },
  {
    name: 'Debt Management',
    description: 'Comprehensive debt and borrowing optimization solutions',
    benefits: [
      'Reduced borrowing costs',
      'Optimized debt structure',
      'Improved cash flow',
      'Risk management'
    ],
    url: '/solutions/debt-management'
  },
  {
    name: 'Treasury Payments',
    description: 'Secure and efficient treasury payment processing',
    benefits: [
      'Streamlined payments',
      'Enhanced security',
      'Cost reduction',
      'Operational efficiency'
    ],
    url: '/solutions/treasury-payments'
  }
];

// Company information
export const COMPANY_INFO = {
  name: 'IBSFINtech',
  description: 'Leading treasury management solutions provider',
  mission: 'Transform treasury operations with AI-driven insights and seamless automation',
  established: '2010',
  headquarters: 'India',
  specialties: [
    'Treasury Management Systems',
    'Cash & Liquidity Management',
    'Currency & FX Risk Management',
    'Commodity Risk Management',
    'Trade Finance Solutions',
    'Supply Chain Finance',
    'Investment Management',
    'Debt Management',
    'Treasury Payments'
  ],
  industries: [
    'Manufacturing',
    'Pharmaceuticals',
    'Retail',
    'FMCG',
    'Automotive',
    'Textiles',
    'Chemicals',
    'Energy',
    'Financial Services'
  ],
  clientTypes: ['Large Enterprises', 'SMEs', 'Multinational Corporations'],
  keyDifferentiators: [
    'Real-time treasury visibility',
    'AI-driven insights and automation',
    'Seamless integration capabilities',
    'Comprehensive risk management',
    'Scalable cloud-based solutions',
    'Deep domain expertise',
    'Strong customer support'
  ]
};

// Function to get comprehensive company knowledge
export async function getCompanyKnowledge(): Promise<CompanyKnowledge> {
  try {
    // Fetch data from your existing CMS functions
    const [blogs, caseStudies, news] = await Promise.all([
      getAllBlogPosts(),
      getAllCaseStudies(),
      getAllNewsArticles()
    ]);

    return {
      blogs: blogs.slice(0, 10), // Limit to recent 10 for performance
      caseStudies: caseStudies.slice(0, 10),
      news: news.slice(0, 10),
      products: PRODUCTS,
      services: SERVICES
    };
  } catch (error) {
    console.error('Error fetching company knowledge:', error);
    
    // Return static data as fallback
    return {
      blogs: [],
      caseStudies: [],
      news: [],
      products: PRODUCTS,
      services: SERVICES
    };
  }
}

// Function to search for relevant content based on user query
export function searchRelevantContent(
  query: string,
  knowledge: CompanyKnowledge
): {
  blogs: BlogPost[];
  caseStudies: CaseStudy[];
  news: NewsArticle[];
  products: ProductInfo[];
  services: ServiceInfo[];
} {
  const searchTerm = query.toLowerCase();
  
  const relevantBlogs = knowledge.blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.excerpt.toLowerCase().includes(searchTerm) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    blog.category.toLowerCase().includes(searchTerm)
  ).slice(0, 3);

  const relevantCaseStudies = knowledge.caseStudies.filter(cs =>
    cs.title.toLowerCase().includes(searchTerm) ||
    cs.excerpt.toLowerCase().includes(searchTerm) ||
    cs.industry.toLowerCase().includes(searchTerm) ||
    cs.solution.toLowerCase().includes(searchTerm)
  ).slice(0, 3);

  const relevantNews = knowledge.news.filter(article =>
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.category.toLowerCase().includes(searchTerm)
  ).slice(0, 3);

  const relevantProducts = knowledge.products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm))
  ).slice(0, 3);

  const relevantServices = knowledge.services.filter(service =>
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm))
  ).slice(0, 3);

  return {
    blogs: relevantBlogs,
    caseStudies: relevantCaseStudies,
    news: relevantNews,
    products: relevantProducts,
    services: relevantServices
  };
}

// Function to generate enhanced context for chatbot
export function generateEnhancedContext(
  query: string,
  knowledge: CompanyKnowledge,
  currentPage?: string
): string {
  const relevantContent = searchRelevantContent(query, knowledge);
  let context = `Company: ${COMPANY_INFO.name} - ${COMPANY_INFO.description}\n`;
  
  // Add current page context
  if (currentPage) {
    context += `Current page: ${currentPage}\n`;
  }
  
  // Add relevant products
  if (relevantContent.products.length > 0) {
    context += `\nRelevant Products:\n`;
    relevantContent.products.forEach(product => {
      context += `- ${product.name}: ${product.description}\n`;
    });
  }
  
  // Add relevant services
  if (relevantContent.services.length > 0) {
    context += `\nRelevant Services:\n`;
    relevantContent.services.forEach(service => {
      context += `- ${service.name}: ${service.description}\n`;
    });
  }
  
  // Add relevant blog posts
  if (relevantContent.blogs.length > 0) {
    context += `\nRelevant Blog Posts:\n`;
    relevantContent.blogs.forEach(blog => {
      context += `- ${blog.title}: ${blog.excerpt.substring(0, 100)}...\n`;
    });
  }
  
  // Add relevant case studies
  if (relevantContent.caseStudies.length > 0) {
    context += `\nRelevant Case Studies:\n`;
    relevantContent.caseStudies.forEach(cs => {
      context += `- ${cs.title} (${cs.industry}): ${cs.excerpt.substring(0, 100)}...\n`;
    });
  }
  
  return context;
}
