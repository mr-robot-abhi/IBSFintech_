export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string;
  backgroundImage: string;
  featured: boolean;
  tags: string[];
  readTime: string;
  views?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "strategic-cash-management-corporate-treasurer",
    title: "Strategic Cash Management for Corporate Treasurer",
    excerpt: "For corporate treasurers to properly manage liquidity and make educated financial decisions, real-time visibility into cash flows is critical. To achieve real-time visibility into cash",
    content: `
      <p>For corporate treasurers to properly manage liquidity and make educated financial decisions, real-time visibility into cash flows is critical. To achieve real-time visibility into cash flows, treasurers need access to comprehensive data from multiple sources including bank accounts, investment portfolios, and operational systems.</p>
      
      <h2>The Importance of Real-Time Cash Visibility</h2>
      <p>Real-time cash visibility enables treasurers to:</p>
      <ul>
        <li>Make informed investment and borrowing decisions</li>
        <li>Optimize working capital management</li>
        <li>Reduce idle cash and maximize returns</li>
        <li>Improve cash forecasting accuracy</li>
        <li>Enhance risk management capabilities</li>
      </ul>
      
      <h2>Key Components of Strategic Cash Management</h2>
      <p>Effective cash management requires:</p>
      <ul>
        <li>Centralized cash pooling structures</li>
        <li>Automated cash concentration</li>
        <li>Real-time cash positioning</li>
        <li>Integrated forecasting tools</li>
        <li>Comprehensive reporting and analytics</li>
      </ul>
    `,
    date: "December 7, 2023",
    category: "Cash Management",
    author: "IBSFINtech Team",
    image: "/Blogs/IBSFINtech-Strategic-Cash-Management-System-1.jpg",
    backgroundImage: "/bg_1.jpg",
    featured: true,
    tags: ["Cash Management", "Treasury", "Liquidity", "Financial Planning"],
    readTime: "5 min read"
  },
  {
    id: "2",
    slug: "diverse-inclusive-vibrant-culture-ibsfintech",
    title: "The Diverse, Inclusive & Vibrant culture of IBSFINtech",
    excerpt: "In our dynamic and ever-changing world, continual learning and transformation are essential to thrive in the competitive landscape. At IBSFINtech, we foster a culture of",
    content: `
      <p>In our dynamic and ever-changing world, continual learning and transformation are essential to thrive in the competitive landscape. At IBSFINtech, we foster a culture of innovation, collaboration, and continuous improvement that empowers our team members to reach their full potential.</p>
      
      <h2>Our Core Values</h2>
      <p>At IBSFINtech, we believe in:</p>
      <ul>
        <li>Embracing diversity and inclusion in all aspects of our work</li>
        <li>Fostering a collaborative environment where every voice matters</li>
        <li>Encouraging continuous learning and professional development</li>
        <li>Promoting work-life balance and employee well-being</li>
        <li>Celebrating achievements and recognizing contributions</li>
      </ul>
      
      <h2>Building a Vibrant Workplace</h2>
      <p>Our vibrant culture is built on:</p>
      <ul>
        <li>Open communication and transparent leadership</li>
        <li>Innovation labs and creative problem-solving sessions</li>
        <li>Team building activities and social events</li>
        <li>Mentorship programs and career development</li>
        <li>Community engagement and social responsibility</li>
      </ul>
    `,
    date: "August 1, 2023",
    category: "Company Culture",
    author: "IBSFINtech Team",
    image: "/Blogs/Outing.jpg",
    backgroundImage: "/bg_2.jpg",
    featured: true,
    tags: ["Company Culture", "Diversity", "Innovation", "Team Building"],
    readTime: "4 min read"
  },
  {
    id: "3",
    slug: "why-us-inflation-shot-up-so-high",
    title: "Why US inflation shot up so high?",
    excerpt: "Since past few quarters, we have been witnessing that the US inflation is shooting up and the Federal Reserve is under lot of pressure to",
    content: `
      <p>Since past few quarters, we have been witnessing that the US inflation is shooting up and the Federal Reserve is under lot of pressure to control it. The unprecedented rise in inflation has been driven by multiple factors including supply chain disruptions, fiscal stimulus measures, and pent-up consumer demand.</p>
      
      <h2>Key Factors Contributing to High Inflation</h2>
      <p>The surge in US inflation can be attributed to:</p>
      <ul>
        <li>Supply chain disruptions from the COVID-19 pandemic</li>
        <li>Massive fiscal stimulus packages</li>
        <li>Pent-up consumer demand post-lockdown</li>
        <li>Rising energy and commodity prices</li>
        <li>Labor market tightness and wage pressures</li>
      </ul>
      
      <h2>Federal Reserve Response</h2>
      <p>The Federal Reserve has implemented several measures to combat inflation:</p>
      <ul>
        <li>Aggressive interest rate hikes</li>
        <li>Quantitative tightening policies</li>
        <li>Forward guidance on monetary policy</li>
        <li>Monitoring of inflation expectations</li>
      </ul>
    `,
    date: "October 17, 2022",
    category: "Economic Analysis",
    author: "IBSFINtech Team",
    image: "/Blogs/Why-US-inflation-shoyt-up-so-high-768x320.png",
    backgroundImage: "/bg_3.jpg",
    featured: false,
    tags: ["Inflation", "Federal Reserve", "Economic Analysis", "Monetary Policy"],
    readTime: "6 min read"
  },
  {
    id: "4",
    slug: "india-banking-liquidity-slips-deficit",
    title: "India's Banking Liquidity slips in to Deficit",
    excerpt: "As per the latest RBI report, on 20/09/2022, Indian banking system witnessed a deficit in liquidity for the first time in the past 40 months",
    content: `
      <p>As per the latest RBI report, on 20/09/2022, Indian banking system witnessed a deficit in liquidity for the first time in the past 40 months. This significant shift from surplus to deficit liquidity has important implications for the banking sector and the broader economy.</p>
      
      <h2>Understanding the Liquidity Deficit</h2>
      <p>The liquidity deficit indicates:</p>
      <ul>
        <li>Reduced excess liquidity in the banking system</li>
        <li>Increased demand for funds from banks</li>
        <li>Potential upward pressure on interest rates</li>
        <li>Changed monetary policy transmission dynamics</li>
      </ul>
      
      <h2>Implications for Banking Sector</h2>
      <p>This development affects:</p>
      <ul>
        <li>Banks' ability to meet credit demand</li>
        <li>Interest rate movements in the economy</li>
        <li>Monetary policy effectiveness</li>
        <li>Financial market stability</li>
      </ul>
    `,
    date: "September 30, 2022",
    category: "Banking & Finance",
    author: "IBSFINtech Team",
    image: "/Blogs/IBSFINtech_BankingLiquiditySlipsIntoDeficit-768x320.png",
    backgroundImage: "/bg_4.jpg",
    featured: false,
    tags: ["Banking", "Liquidity", "RBI", "Monetary Policy"],
    readTime: "5 min read"
  },
  {
    id: "5",
    slug: "effect-diminishing-forex-reserves-emerging-asian-economies",
    title: "Effect of diminishing Forex Reserves of Emerging Asian Economies",
    excerpt: "Forex reserves are the assets held by the Central Bank of a country which are denominated in a foreign currency. These reserves generally include bank",
    content: `
      <p>Forex reserves are the assets held by the Central Bank of a country which are denominated in a foreign currency. These reserves generally include bank deposits, government bonds, and other financial assets denominated in foreign currencies.</p>
      
      <h2>Role of Forex Reserves</h2>
      <p>Forex reserves serve several critical functions:</p>
      <ul>
        <li>Maintaining exchange rate stability</li>
        <li>Providing confidence to foreign investors</li>
        <li>Meeting external payment obligations</li>
        <li>Acting as a buffer against external shocks</li>
      </ul>
      
      <h2>Challenges for Emerging Asian Economies</h2>
      <p>Diminishing reserves pose challenges such as:</p>
      <ul>
        <li>Reduced ability to defend currency values</li>
        <li>Increased vulnerability to external shocks</li>
        <li>Higher borrowing costs in international markets</li>
        <li>Limited policy flexibility</li>
      </ul>
    `,
    date: "September 22, 2022",
    category: "Foreign Exchange",
    author: "IBSFINtech Team",
    image: "/Blogs/EffectOfDiminishingForexReserves_IBSFINtech-768x320.png",
    backgroundImage: "/bg_5.jpg",
    featured: false,
    tags: ["Forex Reserves", "Emerging Markets", "Currency", "Central Banks"],
    readTime: "7 min read"
  },
  {
    id: "6",
    slug: "fasten-seatbelts-currency-markets-turbulent",
    title: "Fasten your seatbelts – Currency markets to be turbulent",
    excerpt: "In a recent interview, Arvind Panagariya, Professor of Economics and the Jagadish Bhagwati Professor of Indian Political Economy at Columbia University and the former vice-chairman",
    content: `
      <p>In a recent interview, Arvind Panagariya, Professor of Economics and the Jagadish Bhagwati Professor of Indian Political Economy at Columbia University and the former vice-chairman of NITI Aayog, highlighted the potential for increased volatility in currency markets.</p>
      
      <h2>Factors Contributing to Currency Volatility</h2>
      <p>Several factors are expected to drive currency market turbulence:</p>
      <ul>
        <li>Divergent monetary policies among major central banks</li>
        <li>Geopolitical tensions and trade disputes</li>
        <li>Economic recovery disparities across regions</li>
        <li>Inflation differentials and policy responses</li>
      </ul>
      
      <h2>Implications for Businesses</h2>
      <p>Currency volatility affects businesses through:</p>
      <ul>
        <li>Increased hedging costs and complexity</li>
        <li>Uncertainty in international trade</li>
        <li>Impact on cross-border investments</li>
        <li>Challenges in financial planning and budgeting</li>
      </ul>
    `,
    date: "September 15, 2022",
    category: "Currency Markets",
    author: "IBSFINtech Team",
    image: "/Blogs/Currency-Exposure-Management-768x320.png",
    backgroundImage: "/bg_6.jpg",
    featured: false,
    tags: ["Currency Markets", "Volatility", "Foreign Exchange", "Risk Management"],
    readTime: "6 min read"
  },
  {
    id: "7",
    slug: "why-unicorns-new-age-companies-need-treasury-management-system",
    title: "Why do unicorns & new-age companies need a Treasury Management System?",
    excerpt: "India has recently drawn the attention of the global business community due to its cutting-edge companies and vibrant entrepreneurial culture. The nation now has 100",
    content: `
      <p>India has recently drawn the attention of the global business community due to its cutting-edge companies and vibrant entrepreneurial culture. The nation now has 100+ unicorns, representing a diverse range of sectors from fintech to e-commerce.</p>
      
      <h2>Unique Challenges for Unicorns</h2>
      <p>Unicorns and new-age companies face specific challenges:</p>
      <ul>
        <li>Rapid scaling and growth requirements</li>
        <li>Complex funding structures and investor relations</li>
        <li>International expansion and multi-currency operations</li>
        <li>Regulatory compliance across jurisdictions</li>
      </ul>
      
      <h2>Benefits of Treasury Management Systems</h2>
      <p>A robust TMS provides:</p>
      <ul>
        <li>Centralized cash and liquidity management</li>
        <li>Automated risk management and compliance</li>
        <li>Real-time financial reporting and analytics</li>
        <li>Scalable infrastructure for growth</li>
      </ul>
    `,
    date: "September 7, 2022",
    category: "Treasury Management",
    author: "IBSFINtech Team",
    image: "/Blogs/WhyUnicornsNeedTreasuryManagementSystem-768x320.png",
    backgroundImage: "/bg_1.jpg",
    featured: false,
    tags: ["Unicorns", "Treasury Management", "Startups", "Digital Transformation"],
    readTime: "8 min read"
  },
  {
    id: "8",
    slug: "key-mastering-art-forex-hedging",
    title: "The Key to Mastering the Art of Forex Hedging",
    excerpt: "In Kung-Fu, it is believed that the best defense is not to be present at the place where your opponent is going to hit you.Likewise,",
    content: `
      <p>In Kung-Fu, it is believed that the best defense is not to be present at the place where your opponent is going to hit you. Likewise, in forex hedging, the best approach is to anticipate and mitigate currency risks before they materialize.</p>
      
      <h2>Principles of Effective Forex Hedging</h2>
      <p>Successful forex hedging requires:</p>
      <ul>
        <li>Understanding of currency risk exposure</li>
        <li>Selection of appropriate hedging instruments</li>
        <li>Timing of hedge implementation</li>
        <li>Regular monitoring and adjustment</li>
      </ul>
      
      <h2>Hedging Strategies</h2>
      <p>Common hedging approaches include:</p>
      <ul>
        <li>Forward contracts for predictable exposures</li>
        <li>Options for flexible risk management</li>
        <li>Natural hedging through operational adjustments</li>
        <li>Dynamic hedging for volatile markets</li>
      </ul>
    `,
    date: "August 30, 2022",
    category: "Forex Hedging",
    author: "IBSFINtech Team",
    image: "/Blogs/The-key-to-Mastering-the-Art-of-Forex-Hedging_InTReaX-768x320.png",
    backgroundImage: "/bg_2.jpg",
    featured: false,
    tags: ["Forex Hedging", "Risk Management", "Currency", "Derivatives"],
    readTime: "7 min read"
  },
  {
    id: "9",
    slug: "life-ibsfintech-journey-new-heights",
    title: "Life at IBSFINtech – The Journey to new heights",
    excerpt: "FinTech is an ever-evolving cutting-edge technology-driven part of the finance industry. The world is treading down a path where digitization and automation are the currency",
    content: `
      <p>FinTech is an ever-evolving cutting-edge technology-driven part of the finance industry. The world is treading down a path where digitization and automation are the currency of success. At IBSFINtech, we are at the forefront of this transformation.</p>
      
      <h2>Our Journey of Innovation</h2>
      <p>IBSFINtech's journey has been marked by:</p>
      <ul>
        <li>Continuous innovation in treasury technology</li>
        <li>Deep domain expertise in financial operations</li>
        <li>Strong partnerships with leading organizations</li>
        <li>Commitment to customer success</li>
      </ul>
      
      <h2>Technology-Driven Solutions</h2>
      <p>We leverage cutting-edge technology to deliver:</p>
      <ul>
        <li>Real-time treasury management capabilities</li>
        <li>Advanced analytics and reporting</li>
        <li>Seamless integration with existing systems</li>
        <li>Scalable and secure cloud solutions</li>
      </ul>
    `,
    date: "April 7, 2022",
    category: "Company",
    author: "IBSFINtech Team",
    image: "/Blogs/Outing.jpg",
    backgroundImage: "/bg_3.jpg",
    featured: false,
    tags: ["Company", "Innovation", "Technology", "FinTech"],
    readTime: "5 min read"
  },
  {
    id: "10",
    slug: "treasury-evolution-participate-corporate-esg-initiative",
    title: "Treasury's Evolution to Participate in Corporate's ESG Initiative",
    excerpt: "In times like today's where the world is facing unprecedented disruption – many companies around the globe are re-evaluating their business models and strategic priorities.",
    content: `
      <p>In times like today's where the world is facing unprecedented disruption – many companies around the globe are re-evaluating their business models and strategic priorities. Environmental, Social, and Governance (ESG) considerations have become central to corporate strategy.</p>
      
      <h2>Treasury's Role in ESG</h2>
      <p>Treasury functions can contribute to ESG initiatives through:</p>
      <ul>
        <li>Sustainable financing and green bonds</li>
        <li>ESG-linked investment strategies</li>
        <li>Supply chain finance with ESG criteria</li>
        <li>Risk management for climate-related risks</li>
      </ul>
      
      <h2>ESG Integration in Treasury Operations</h2>
      <p>Key areas of integration include:</p>
      <ul>
        <li>ESG scoring in counterparty risk assessment</li>
        <li>Sustainable cash management practices</li>
        <li>Green treasury policies and procedures</li>
        <li>ESG reporting and disclosure</li>
      </ul>
    `,
    date: "April 30, 2021",
    category: "ESG",
    author: "IBSFINtech Team",
    image: "/Blogs/IBSFINtech ESG contributor.png",
    backgroundImage: "/bg_4.jpg",
    featured: false,
    tags: ["ESG", "Sustainability", "Treasury", "Corporate Responsibility"],
    readTime: "8 min read"
  },
  {
    id: "11",
    slug: "currency-volatility",
    title: "Currency Volatility",
    excerpt: "The Indian Rupee (INR) has been one of the strongest performing Asian currencies this year and has appreciated steadily with the spot USD/INR rates settling",
    content: `
      <p>The Indian Rupee (INR) has been one of the strongest performing Asian currencies this year and has appreciated steadily with the spot USD/INR rates settling at favorable levels for importers and challenging levels for exporters.</p>
      
      <h2>Factors Driving INR Performance</h2>
      <p>The rupee's strength can be attributed to:</p>
      <ul>
        <li>Strong foreign portfolio investments</li>
        <li>Robust economic fundamentals</li>
        <li>Central bank intervention strategies</li>
        <li>Global risk sentiment</li>
      </ul>
      
      <h2>Implications for Businesses</h2>
      <p>Currency volatility affects:</p>
      <ul>
        <li>Import and export competitiveness</li>
        <li>Foreign debt servicing costs</li>
        <li>Investment decisions and capital flows</li>
        <li>Risk management strategies</li>
      </ul>
    `,
    date: "September 22, 2017",
    category: "Currency Markets",
    author: "IBSFINtech Team",
    image: "/Blogs/Currency-Exposure-Management-768x320.png",
    backgroundImage: "/bg_5.jpg",
    featured: false,
    tags: ["Currency", "INR", "Foreign Exchange", "Volatility"],
    readTime: "6 min read"
  },
  {
    id: "12",
    slug: "challenges-corporate-treasurer",
    title: "Challenges For Corporate Treasurer",
    excerpt: "This article is authored by C M Grover, Executive Director, IBSFINtech and published in CIO Magazine, October 2015 issue. Read complete article here: Globalization has",
    content: `
      <p>This article is authored by C M Grover, Executive Director, IBSFINtech and published in CIO Magazine, October 2015 issue. Globalization has fundamentally changed the landscape of corporate treasury operations, presenting both opportunities and challenges.</p>
      
      <h2>Key Challenges Facing Corporate Treasurers</h2>
      <p>Modern treasurers must navigate:</p>
      <ul>
        <li>Complex regulatory environments across jurisdictions</li>
        <li>Currency risk in global operations</li>
        <li>Technology integration and digital transformation</li>
        <li>Talent acquisition and retention</li>
      </ul>
      
      <h2>Strategic Responses</h2>
      <p>Successful treasurers address these challenges through:</p>
      <ul>
        <li>Robust risk management frameworks</li>
        <li>Technology-enabled solutions</li>
        <li>Continuous learning and adaptation</li>
        <li>Strategic partnerships and collaborations</li>
      </ul>
    `,
    date: "November 16, 2015",
    category: "Treasury Management",
    author: "C M Grover",
    image: "/Blogs/Key Challenges in treasury.jpg",
    backgroundImage: "/bg_6.jpg",
    featured: false,
    tags: ["Treasury Management", "Challenges", "Globalization", "Risk Management"],
    readTime: "7 min read"
  },
  {
    id: "13",
    slug: "treasury-management-peripheral-application",
    title: "Treasury Management Peripheral Application",
    excerpt: "Is Treasury Management lost in the pile of Peripheral Applications? If this question was asked 10 years ago, the answer might have been a \"Yes\".",
    content: `
      <p>Is Treasury Management lost in the pile of Peripheral Applications? If this question was asked 10 years ago, the answer might have been a "Yes". However, the landscape has evolved significantly with treasury management becoming a core strategic function.</p>
      
      <h2>Evolution of Treasury Management</h2>
      <p>Treasury management has transformed from:</p>
      <ul>
        <li>A peripheral function to a strategic center</li>
        <li>Manual processes to automated solutions</li>
        <li>Reactive to proactive risk management</li>
        <li>Isolated systems to integrated platforms</li>
      </ul>
      
      <h2>Modern Treasury Solutions</h2>
      <p>Today's treasury management systems provide:</p>
      <ul>
        <li>Real-time cash visibility and forecasting</li>
        <li>Integrated risk management capabilities</li>
        <li>Automated compliance and reporting</li>
        <li>Seamless banking and market connectivity</li>
      </ul>
    `,
    date: "September 2, 2015",
    category: "Treasury Management",
    author: "IBSFINtech Team",
    image: "/Blogs/Treasury Management Key points IBSFINtech.jpeg",
    backgroundImage: "/bg_1.jpg",
    featured: false,
    tags: ["Treasury Management", "Digital Transformation", "Technology", "Strategy"],
    readTime: "6 min read"
  },
  {
    id: "14",
    slug: "treasury-management-tips",
    title: "Treasury Management Tips",
    excerpt: "Rapid shift of economic activity and constant turbulence in the forex markets have inspired many CFOs to strengthen their treasury divisions. These turbulent times demand",
    content: `
      <p>Rapid shift of economic activity and constant turbulence in the forex markets have inspired many CFOs to strengthen their treasury divisions. These turbulent times demand robust treasury management practices and strategic approaches to financial operations.</p>
      
      <h2>Essential Treasury Management Tips</h2>
      <p>Key strategies for effective treasury management include:</p>
      <ul>
        <li>Maintaining adequate cash reserves</li>
        <li>Diversifying funding sources</li>
        <li>Implementing comprehensive risk management</li>
        <li>Leveraging technology for efficiency</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Successful treasury operations follow:</p>
      <ul>
        <li>Regular cash flow forecasting</li>
        <li>Strong banking relationships</li>
        <li>Continuous process improvement</li>
        <li>Compliance with regulatory requirements</li>
      </ul>
    `,
    date: "June 24, 2015",
    category: "Treasury Management",
    author: "IBSFINtech Team",
    image: "/Blogs/APIs IBSFINtech.png",
    backgroundImage: "/bg_2.jpg",
    featured: false,
    tags: ["Treasury Management", "Best Practices", "Risk Management", "Cash Flow"],
    readTime: "5 min read"
  },
  {
    id: "15",
    slug: "being-currency-aware",
    title: "Being Currency Aware",
    excerpt: "It has become evident for every organization dealing across international markets to manage currency risk. Owing to the financial impact these international market dealings bring",
    content: `
      <p>It has become evident for every organization dealing across international markets to manage currency risk. Owing to the financial impact these international market dealings bring, currency awareness has become a critical competency for treasury professionals.</p>
      
      <h2>Understanding Currency Risk</h2>
      <p>Currency risk encompasses:</p>
      <ul>
        <li>Transaction risk from foreign currency exposures</li>
        <li>Translation risk in financial reporting</li>
        <li>Economic risk from competitive factors</li>
        <li>Political and regulatory risks</li>
      </ul>
      
      <h2>Currency Risk Management Strategies</h2>
      <p>Effective currency risk management involves:</p>
      <ul>
        <li>Identifying and quantifying exposures</li>
        <li>Implementing appropriate hedging strategies</li>
        <li>Monitoring and adjusting positions</li>
        <li>Regular risk assessment and reporting</li>
      </ul>
    `,
    date: "March 13, 2015",
    category: "Currency Risk",
    author: "IBSFINtech Team",
    image: "/Blogs/Being Currency Aware IBSFINtech.jpg",
    backgroundImage: "/bg_3.jpg",
    featured: false,
    tags: ["Currency Risk", "Foreign Exchange", "Risk Management", "International Business"],
    readTime: "7 min read"
  }
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

// Strapi integration placeholder functions
export async function fetchBlogPostsFromStrapi(): Promise<BlogPost[]> {
  // TODO: Implement Strapi API integration
  // This function will fetch blog posts from Strapi CMS
  // Example implementation:
  // const response = await fetch(`${process.env.STRAPI_API_URL}/api/blog-posts?populate=*`);
  // const data = await response.json();
  // return data.data.map((item: any) => ({
  //   id: item.id,
  //   slug: item.attributes.slug,
  //   title: item.attributes.title,
  //   excerpt: item.attributes.excerpt,
  //   content: item.attributes.content,
  //   date: item.attributes.date,
  //   category: item.attributes.category,
  //   author: item.attributes.author,
  //   image: item.attributes.image?.data?.attributes?.url,
  //   backgroundImage: item.attributes.backgroundImage?.data?.attributes?.url,
  //   featured: item.attributes.featured,
  //   tags: item.attributes.tags,
  //   readTime: item.attributes.readTime,
  //   views: item.attributes.views
  // }));
  
  return blogPosts; // Return hardcoded data for now
}

export async function fetchBlogPostBySlugFromStrapi(slug: string): Promise<BlogPost | null> {
  // TODO: Implement Strapi API integration
  // This function will fetch a single blog post from Strapi CMS
  // Example implementation:
  // const response = await fetch(`${process.env.STRAPI_API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  // const data = await response.json();
  // if (data.data.length === 0) return null;
  // const item = data.data[0];
  // return {
  //   id: item.id,
  //   slug: item.attributes.slug,
  //   title: item.attributes.title,
  //   excerpt: item.attributes.excerpt,
  //   content: item.attributes.content,
  //   date: item.attributes.date,
  //   category: item.attributes.category,
  //   author: item.attributes.author,
  //   image: item.attributes.image?.data?.attributes?.url,
  //   backgroundImage: item.attributes.backgroundImage?.data?.attributes?.url,
  //   featured: item.attributes.featured,
  //   tags: item.attributes.tags,
  //   readTime: item.attributes.readTime,
  //   views: item.attributes.views
  // };
  
  return getBlogPostBySlug(slug) || null; // Return hardcoded data for now
}
