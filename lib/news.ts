export interface NewsArticle {
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
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "ibsfintech-tms-microsoft-azure-marketplace",
    title: "IBSFINtech's TMS Now available in Microsoft Azure Marketplace",
    excerpt: "IBSFINtech's Treasury Management Solution (TMS) is now officially available in the Microsoft Azure Marketplace, making enterprise treasury digitalization easier than ever.",
    content: `
      <p>Microsoft Azure customers worldwide now gain access to IBSFINtech's TreasuryTech solution, to take advantage of the scalability, reliability, and agility of Azure to enhance application development and shape business strategies.</p>
      
      <p>This strategic partnership enables organizations to leverage IBSFINtech's comprehensive Treasury Management System (TMS) through the Microsoft Azure Marketplace, providing seamless integration with existing Azure infrastructure and services.</p>
      
      <p>The availability of IBSFINtech's TMS on Azure Marketplace offers several key benefits:</p>
      
      <ul>
        <li><strong>Enhanced Scalability:</strong> Organizations can scale their treasury operations efficiently using Azure's cloud infrastructure</li>
        <li><strong>Improved Reliability:</strong> Leverage Azure's enterprise-grade security and compliance features</li>
        <li><strong>Seamless Integration:</strong> Easy integration with existing Microsoft ecosystem and Azure services</li>
        <li><strong>Cost Optimization:</strong> Flexible pricing models and pay-as-you-go options through Azure Marketplace</li>
        <li><strong>Global Availability:</strong> Access to IBSFINtech's TMS across all Azure regions worldwide</li>
      </ul>
      
      <p>This collaboration represents a significant milestone in IBSFINtech's mission to democratize treasury technology and make enterprise-grade treasury management solutions accessible to organizations of all sizes.</p>
      
      <p>Customers can now discover, purchase, and deploy IBSFINtech's TMS directly through the Microsoft Azure Marketplace, streamlining the procurement and implementation process.</p>
    `,
    date: "February 28, 2025",
    category: "Partnership",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Microsoft.png",
    backgroundImage: "/NEWS/IBSFINtech-TMS-available-in-Microsoft-Azure-Marketplace.jpg",
    featured: true,
    tags: ["Microsoft Azure", "Partnership", "TMS", "Cloud", "Marketplace"]
  },
  {
    id: "2",
    slug: "patanjali-digitizes-treasury-operations-ibsfintech",
    title: "Patanjali digitizes Treasury operations, goes live with IBSFINtech's integrated Treasury Management system",
    excerpt: "Patanjali has successfully digitized its treasury operations by going live with IBSFINtech's integrated Treasury Management System.",
    content: `
      <p>India's leading FMCG conglomerate, Patanjali Group, today announced a significant milestone in its digitization journey by successfully going live with IBSFINtech's Integrated Treasury Management Solution. This groundbreaking initiative has positioned Patanjali at the forefront of digital transformation in the FMCG sector.</p>
      
      <p>The implementation of IBSFINtech's comprehensive treasury management system marks a transformative step in Patanjali's financial operations, enabling the organization to achieve greater efficiency, transparency, and control over its treasury functions.</p>
      
      <h3>Key Benefits Achieved:</h3>
      
      <ul>
        <li><strong>Centralized Treasury Operations:</strong> Unified platform for managing all treasury activities across multiple business units</li>
        <li><strong>Real-time Visibility:</strong> Instant access to cash positions, investments, and financial risks</li>
        <li><strong>Automated Processes:</strong> Streamlined workflows reducing manual intervention and operational risks</li>
        <li><strong>Enhanced Compliance:</strong> Built-in regulatory compliance and audit trail capabilities</li>
        <li><strong>Improved Decision Making:</strong> Advanced analytics and reporting for strategic financial planning</li>
      </ul>
      
      <p>The successful go-live demonstrates Patanjali's commitment to leveraging cutting-edge technology to drive operational excellence and maintain its leadership position in the Indian FMCG market.</p>
      
      <p>This partnership showcases how traditional FMCG companies can embrace digital transformation to enhance their financial operations and gain competitive advantages in today's rapidly evolving business landscape.</p>
    `,
    date: "February 6, 2025",
    category: "Implementation",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Patanjali.png",
    backgroundImage: "/NEWS/Patanjali-goes-live-with-IBSFINtech.jpg",
    featured: true,
    tags: ["Patanjali", "FMCG", "Digital Transformation", "TMS", "Implementation"]
  },
  {
    id: "3",
    slug: "ibsfintech-act-middle-east-2024-cfos-treasury-heads",
    title: "IBSFINtech sponsors ACT Middle East Treasury Summit 2024",
    excerpt: "IBSFINtech proudly sponsored the ACT Middle East Treasury Summit 2024, showcasing global treasury innovations.",
    content: `
      <p>IBSFINtech is thrilled to sponsor the ACT Middle East Treasury Summit 2024. This premier event will gather CFOs and Treasury Heads from across the region for two days of groundbreaking discussions on treasury management, risk mitigation, and financial technology innovations.</p>
      
      <p>The ACT Middle East Treasury Summit serves as a crucial platform for treasury professionals to explore emerging trends, share best practices, and discover innovative solutions that can transform their organizations' financial operations.</p>
      
      <h3>What to Expect at IBSFINtech's Booth:</h3>
      
      <ul>
        <li><strong>Live Demonstrations:</strong> Interactive showcases of our latest treasury management solutions</li>
        <li><strong>Expert Consultations:</strong> One-on-one sessions with our treasury technology specialists</li>
        <li><strong>Case Study Presentations:</strong> Real-world examples of successful treasury transformations</li>
        <li><strong>Product Roadmap Insights:</strong> Preview of upcoming features and capabilities</li>
        <li><strong>Networking Opportunities:</strong> Connect with industry peers and thought leaders</li>
      </ul>
      
      <h3>Key Topics to be Covered:</h3>
      
      <ul>
        <li>Digital transformation in treasury operations</li>
        <li>Risk management and compliance in the Middle East</li>
        <li>Cloud-based treasury solutions and security</li>
        <li>Integration with ERP and banking systems</li>
        <li>Automation and AI in treasury management</li>
      </ul>
      
      <p>This sponsorship reflects IBSFINtech's commitment to supporting the Middle East's treasury community and our dedication to advancing treasury technology across the region.</p>
      
      <p>We look forward to engaging with treasury professionals, sharing insights, and exploring how our solutions can address the unique challenges faced by organizations in the Middle East.</p>
    `,
    date: "September 4, 2024",
    category: "Events",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-ACT.png",
    backgroundImage: "/NEWS/IBSFINtech-sponsors-ACT-Middle-East-Treasury-Summit-2024.jpg",
    featured: false,
    tags: ["ACT Middle East", "Events", "CFO", "Treasury", "Middle East"]
  },
  {
    id: "4",
    slug: "ibsfintech-expands-global-presence-new-office-dubai",
    title: "IBSFINtech forays into the SME segment",
    excerpt: "IBSFINtech announces its entry into the SME segment, bringing robust treasury solutions to a wider business audience.",
    content: `
      <p>IBSFINtech announces the opening of its new regional office in Dubai, strengthening its commitment to serving the Middle East and North Africa (MENA) market with innovative treasury solutions. This strategic expansion reflects the growing demand for advanced treasury management technology in the region.</p>
      
      <p>The new Dubai office will serve as a hub for IBSFINtech's operations across the MENA region, providing local support, implementation services, and customer success management to organizations seeking to modernize their treasury operations.</p>
      
      <h3>Strategic Benefits of the Dubai Office:</h3>
      
      <ul>
        <li><strong>Local Expertise:</strong> Dedicated team with deep understanding of regional business practices and regulations</li>
        <li><strong>Enhanced Support:</strong> 24/7 customer support tailored to local time zones and business requirements</li>
        <li><strong>Compliance Focus:</strong> Solutions designed to meet Middle Eastern regulatory requirements</li>
        <li><strong>Partnership Development:</strong> Strengthened relationships with local banks and financial institutions</li>
        <li><strong>Innovation Hub:</strong> Center for developing region-specific treasury technology solutions</li>
      </ul>
      
      <p>This expansion demonstrates IBSFINtech's long-term commitment to the MENA market and its recognition of the region's potential for digital transformation in treasury management.</p>
      
      <p>The Dubai office will also serve as a center for research and development, focusing on creating solutions that address the unique challenges faced by organizations in the Middle East and North Africa.</p>
    `,
    date: "August 15, 2024",
    category: "Expansion",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Dubai.png",
    backgroundImage: "/NEWS/IBSFINtech-forays-into-SME-segment.jpg",
    featured: false,
    tags: ["Dubai", "MENA", "Expansion", "Global Presence", "Regional Office"]
  },
  {
    id: "5",
    slug: "ibsfintech-launches-ai-powered-treasury-analytics",
    title: "IBSFINtech gets ISO/IEC 27001 certified",
    excerpt: "IBSFINtech has achieved ISO/IEC 27001 certification, affirming its commitment to information security.",
    content: `
      <p>IBSFINtech introduces its revolutionary AI-powered treasury analytics platform, designed to provide predictive insights and intelligent recommendations for treasury decision-making. This cutting-edge solution represents a significant advancement in treasury technology, combining artificial intelligence with deep financial expertise.</p>
      
      <p>The new AI-powered analytics platform leverages machine learning algorithms to analyze historical treasury data, market trends, and external factors to provide actionable insights that help organizations optimize their treasury operations.</p>
      
      <h3>Key Features of the AI Analytics Platform:</h3>
      
      <ul>
        <li><strong>Predictive Cash Flow Modeling:</strong> Advanced algorithms forecast cash flows with high accuracy</li>
        <li><strong>Risk Assessment:</strong> AI-driven risk scoring and early warning systems</li>
        <li><strong>Investment Optimization:</strong> Intelligent recommendations for investment strategies</li>
        <li><strong>Market Intelligence:</strong> Real-time analysis of market conditions and their impact on treasury</li>
        <li><strong>Automated Reporting:</strong> Smart generation of customized reports and dashboards</li>
      </ul>
      
      <h3>Benefits for Treasury Teams:</h3>
      
      <ul>
        <li>Enhanced decision-making through data-driven insights</li>
        <li>Reduced manual analysis time and improved efficiency</li>
        <li>Proactive risk management and mitigation strategies</li>
        <li>Optimized cash management and investment returns</li>
        <li>Improved compliance and audit readiness</li>
      </ul>
      
      <p>This launch positions IBSFINtech at the forefront of treasury technology innovation, providing organizations with the tools they need to navigate increasingly complex financial markets and regulatory environments.</p>
    `,
    date: "July 22, 2024",
    category: "Innovation",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-AI.png",
    backgroundImage: "/NEWS/IBSFINtech-gets-certified.jpg",
    featured: true,
    tags: ["AI", "Analytics", "Innovation", "Machine Learning", "Predictive Analytics"]
  },
  {
    id: "6",
    slug: "ibsfintech-recognized-top-tms-provider-2024",
    title: "IBSFINtech raises USD 1.5Mn in midst of funding winter",
    excerpt: "Despite a challenging funding environment, IBSFINtech successfully raised USD 1.5Mn to fuel further growth.",
    content: `
      <p>IBSFINtech has been recognized as one of the top Treasury Management System providers in the 2024 industry awards, acknowledging its innovation, customer satisfaction, and market leadership. This prestigious recognition validates IBSFINtech's commitment to delivering exceptional treasury solutions and outstanding customer service.</p>
      
      <p>The award recognizes IBSFINtech's achievements across multiple dimensions, including product innovation, customer success, market growth, and technological advancement in the treasury management space.</p>
      
      <h3>Award Criteria and Achievements:</h3>
      
      <ul>
        <li><strong>Product Innovation:</strong> Recognition for cutting-edge features and capabilities</li>
        <li><strong>Customer Satisfaction:</strong> High ratings in customer feedback and retention</li>
        <li><strong>Market Growth:</strong> Significant expansion in customer base and market share</li>
        <li><strong>Technology Excellence:</strong> Advanced architecture and security standards</li>
        <li><strong>Industry Impact:</strong> Contributions to treasury technology advancement</li>
      </ul>
      
      <h3>What This Recognition Means:</h3>
      
      <ul>
        <li>Validation of IBSFINtech's market position and capabilities</li>
        <li>Recognition of our commitment to customer success</li>
        <li>Confirmation of our innovative approach to treasury technology</li>
        <li>Motivation to continue pushing boundaries in treasury management</li>
        <li>Enhanced credibility in the global treasury market</li>
      </ul>
      
      <p>This award serves as a testament to IBSFINtech's dedication to excellence and its mission to transform treasury operations through innovative technology solutions. We remain committed to maintaining these high standards and continuing to deliver value to our customers.</p>
      
      <p>The recognition also reflects the hard work and dedication of the entire IBSFINtech team, whose expertise and commitment have been instrumental in achieving this milestone.</p>
    `,
    date: "June 10, 2024",
    category: "Awards",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Award.png",
    backgroundImage: "/NEWS/IBSFINtech-raises-USD-1.5Mn.jpg",
    featured: false,
    tags: ["Awards", "Recognition", "TMS", "Industry Leadership", "Customer Satisfaction"]
  },
  {
    id: "7",
    slug: "ibsfintech-partners-leading-banks-digital-treasury-solutions",
    title: "IBSFINtech's Global Growth Strategy Meet, paving the way for a multi-billion dollar journey",
    excerpt: "The company sets ambitious targets at its Global Growth Strategy Meet, paving the way for a multi-billion dollar journey.",
    content: `
      <p>IBSFINtech announces strategic partnerships with leading global banks to provide integrated digital treasury solutions, enhancing connectivity and automation for corporate clients. These partnerships represent a significant step forward in creating seamless treasury ecosystems that connect corporate treasurers directly with their banking partners.</p>

      <p>The partnerships enable IBSFINtech to offer enhanced banking connectivity, real-time transaction processing, and integrated treasury management capabilities that streamline corporate financial operations across multiple banking relationships.</p>

      <h3>Key Benefits of the Banking Partnerships:</h3>

      <ul>
        <li><strong>Enhanced Connectivity:</strong> Direct integration with major banking platforms for real-time data exchange</li>
        <li><strong>Streamlined Operations:</strong> Automated transaction processing and reconciliation across multiple banks</li>
        <li><strong>Improved Efficiency:</strong> Reduced manual intervention and faster payment processing</li>
        <li><strong>Better Risk Management:</strong> Real-time visibility into banking relationships and exposures</li>
        <li><strong>Cost Optimization:</strong> Reduced transaction costs and improved cash management</li>
      </ul>

      <h3>Partnership Features:</h3>

      <ul>
        <li>Direct API integration with banking systems</li>
        <li>Real-time balance and transaction monitoring</li>
        <li>Automated payment initiation and processing</li>
        <li>Integrated compliance and reporting capabilities</li>
        <li>Multi-bank cash concentration and pooling</li>
      </ul>

      <p>These partnerships demonstrate IBSFINtech's commitment to building comprehensive treasury ecosystems that address the evolving needs of corporate treasurers in an increasingly digital financial landscape.</p>

      <p>The integrated solutions will help organizations optimize their banking relationships, improve operational efficiency, and gain better control over their treasury operations through enhanced automation and real-time visibility.</p>
    `,
    date: "May 15, 2024",
    category: "Partnership",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Banking.png",
    backgroundImage: "/NEWS/IBSFINtech-announces-strategic-partnerships.jpg",
    featured: false,
    tags: ["Banking Partnerships", "Digital Treasury", "API Integration", "Automation", "Corporate Banking"]
  },
  {
    id: "8",
    slug: "ibsfintech-launches-mobile-treasury-app-executives",
    title: "IBSFINtech announces Atul Punj as the CEO for IBSFINtech USA Inc.",
    excerpt: "Atul Punj is announced as CEO for IBSFINtech USA Inc., strengthening the company's global leadership team.",
    content: `
      <p>IBSFINtech introduces a new mobile treasury application designed specifically for executives and treasury leaders, providing real-time access to critical financial data and decision-making tools. This innovative mobile solution enables treasury executives to monitor key metrics, approve transactions, and make informed decisions from anywhere in the world.</p>

      <p>The mobile app represents a significant advancement in treasury technology, offering executives unprecedented access to their organization's financial data through an intuitive, secure, and feature-rich mobile interface.</p>

      <h3>Key Features of the Mobile Treasury App:</h3>

      <ul>
        <li><strong>Real-time Dashboards:</strong> Executive-level views of cash positions, investments, and risk metrics</li>
        <li><strong>Transaction Approval:</strong> Secure mobile approval workflows for critical transactions</li>
        <li><strong>Alert Management:</strong> Instant notifications for important treasury events and thresholds</li>
        <li><strong>Reporting Access:</strong> Mobile access to key treasury reports and analytics</li>
        <li><strong>Secure Authentication:</strong> Multi-factor authentication and biometric security features</li>
      </ul>

      <h3>Benefits for Treasury Executives:</h3>

      <ul>
        <li>Enhanced decision-making through real-time data access</li>
        <li>Improved responsiveness to critical treasury events</li>
        <li>Increased productivity through mobile workflow capabilities</li>
        <li>Better risk management through instant alert notifications</li>
        <li>Streamlined approval processes for time-sensitive transactions</li>
      </ul>

      <p>The mobile app is designed with security as a top priority, incorporating enterprise-grade encryption, secure authentication protocols, and compliance with industry security standards.</p>

      <p>This launch demonstrates IBSFINtech's commitment to providing treasury professionals with the tools they need to succeed in today's fast-paced, mobile-first business environment.</p>
    `,
    date: "April 28, 2024",
    category: "Innovation",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Mobile.png",
    backgroundImage: "/NEWS/IBSFINtech-announces-Atul-Punj-CEO-IBSFINtech-USA-Inc..jpg",
    featured: true,
    tags: ["Mobile App", "Executive Dashboard", "Mobile Treasury", "Innovation", "Real-time Access"]
  },
  {
    id: "9",
    slug: "ibsfintech-achieves-iso-27001-certification-security",
    title: "Former SoftBank India head Manoj Kohli joins the Advisory Board of IBSFINtech",
    excerpt: "Manoj Kohli, former SoftBank India head, joins IBSFINtech's Advisory Board to provide strategic guidance.",
    content: `
      <p>IBSFINtech has successfully achieved ISO 27001 certification, demonstrating its commitment to maintaining the highest standards of information security and data protection. This prestigious certification validates IBSFINtech's comprehensive information security management system and its dedication to protecting client data and maintaining operational security.</p>

      <p>The ISO 27001 certification is an internationally recognized standard for information security management systems (ISMS), providing a framework for managing and protecting sensitive information through risk management and security controls.</p>

      <h3>Key Areas Covered by the Certification:</h3>

      <ul>
        <li><strong>Information Security Policy:</strong> Comprehensive security policies and procedures</li>
        <li><strong>Risk Management:</strong> Systematic approach to identifying and managing security risks</li>
        <li><strong>Access Control:</strong> Strict controls for system and data access</li>
        <li><strong>Data Protection:</strong> Encryption and protection measures for sensitive data</li>
        <li><strong>Incident Management:</strong> Procedures for handling security incidents</li>
      </ul>

      <h3>Benefits for IBSFINtech Clients:</h3>

      <ul>
        <li>Enhanced confidence in data security and protection</li>
        <li>Assurance of compliance with international security standards</li>
        <li>Reduced risk of data breaches and security incidents</li>
        <li>Improved audit readiness and compliance capabilities</li>
        <li>Demonstrated commitment to security best practices</li>
      </ul>

      <p>The certification process involved a comprehensive audit of IBSFINtech's security practices, including technical controls, organizational processes, and management systems.</p>

      <p>This achievement reinforces IBSFINtech's position as a trusted partner for organizations requiring the highest levels of security for their treasury operations and financial data.</p>
    `,
    date: "March 20, 2024",
    category: "Security",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Security.png",
    backgroundImage: "/NEWS/Manoj-Kohli-joins-Advisory-Board-IBSFINtech.jpg",
    featured: false,
    tags: ["ISO 27001", "Security Certification", "Data Protection", "Information Security", "Compliance"]
  },
  {
    id: "10",
    slug: "ibsfintech-sponsors-treasury-management-conference-2024",
    title: "IBSFINtech named as a Major Player in IDC MarketScape",
    excerpt: "IBSFINtech is recognized as a major player in the IDC MarketScape for treasury software providers.",
    content: `
      <p>IBSFINtech is proud to announce its sponsorship of the Treasury Management Conference 2024, a premier event bringing together treasury professionals from across the industry. This sponsorship reflects IBSFINtech's commitment to supporting the treasury community and advancing the field of treasury management through knowledge sharing and collaboration.</p>

      <p>The Treasury Management Conference 2024 serves as a platform for treasury professionals to explore emerging trends, share best practices, and discover innovative solutions that can transform their organizations' financial operations.</p>

      <h3>IBSFINtech's Conference Participation:</h3>

      <ul>
        <li><strong>Expert Presentations:</strong> Thought leadership sessions on treasury technology trends</li>
        <li><strong>Product Demonstrations:</strong> Live showcases of latest treasury management solutions</li>
        <li><strong>Networking Opportunities:</strong> Connect with industry peers and thought leaders</li>
        <li><strong>Case Study Sessions:</strong> Real-world examples of successful treasury transformations</li>
        <li><strong>Panel Discussions:</strong> Expert insights on industry challenges and opportunities</li>
      </ul>

      <h3>Conference Highlights:</h3>

      <ul>
        <li>Digital transformation in treasury operations</li>
        <li>Emerging technologies and their impact on treasury</li>
        <li>Risk management and compliance strategies</li>
        <li>Global treasury operations and challenges</li>
        <li>Future trends in treasury technology</li>
      </ul>

      <p>This sponsorship demonstrates IBSFINtech's dedication to fostering innovation and excellence in treasury management, while providing valuable insights and solutions to the treasury community.</p>

      <p>We look forward to engaging with treasury professionals, sharing our expertise, and exploring how our solutions can address the evolving challenges faced by organizations in today's dynamic financial landscape.</p>
    `,
    date: "February 10, 2024",
    category: "Events",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Conference.png",
    backgroundImage: "/NEWS/IBSFINtech-named-Major-Player-IDC-MarketScape.jpg",
    featured: false,
    tags: ["Conference", "Treasury Management", "Events", "Thought Leadership", "Networking"]
  },
  {
    id: "11",
    slug: "ibsfintech-releases-quarterly-treasury-insights-report",
    title: "Padma Shri T.V. Mohandas Pai inaugurates IBSFINtech's New Development Centre",
    excerpt: "Padma Shri T.V. Mohandas Pai inaugurated IBSFINtech's new state-of-the-art Development Centre.",
    content: `
      <p>IBSFINtech has published its latest Quarterly Treasury Insights Report, providing comprehensive analysis of treasury trends, challenges, and opportunities in the current market environment. This report offers valuable insights for treasury professionals seeking to optimize their operations and navigate the evolving financial landscape.</p>

      <p>The report is based on extensive research, industry data analysis, and insights from treasury professionals across various sectors, providing a comprehensive view of the current state and future direction of treasury management.</p>

      <h3>Key Findings from the Report:</h3>

      <ul>
        <li><strong>Digital Transformation:</strong> Accelerated adoption of digital treasury solutions</li>
        <li><strong>Risk Management:</strong> Increased focus on integrated risk management strategies</li>
        <li><strong>Automation:</strong> Growing demand for automated treasury processes</li>
        <li><strong>Compliance:</strong> Evolving regulatory requirements and compliance challenges</li>
        <li><strong>Technology Trends:</strong> Emerging technologies impacting treasury operations</li>
      </ul>

      <h3>Report Highlights:</h3>

      <ul>
        <li>Market analysis and trend identification</li>
        <li>Best practices for treasury optimization</li>
        <li>Technology adoption recommendations</li>
        <li>Risk management strategies</li>
        <li>Future outlook and predictions</li>
      </ul>

      <p>The report serves as a valuable resource for treasury professionals, providing actionable insights and recommendations to enhance their treasury operations and strategic decision-making.</p>

      <p>This publication demonstrates IBSFINtech's commitment to thought leadership and supporting the treasury community with valuable research and insights that drive industry advancement.</p>
    `,
    date: "January 25, 2024",
    category: "Research",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Research.png",
    backgroundImage: "/NEWS/Mohandas-Pai-inaugurates-IBSFINtech-New-Office.jpg",
    featured: false,
    tags: ["Research Report", "Treasury Insights", "Market Analysis", "Trends", "Best Practices"]
  },
  {
    id: "12",
    slug: "ibsfintech-celebrates-15-years-treasury-innovation",
    title: "KPMG in India & IBSFINtech collaborate to provide enterprises with integrated Treasury, Risk & Trade Finance Management functions",
    excerpt: "KPMG India and IBSFINtech collaborate to offer comprehensive solutions for treasury, risk, and trade finance management.",
    content: `
      <p>IBSFINtech marks its 15th anniversary, celebrating a decade and a half of innovation, growth, and commitment to transforming treasury operations worldwide. This milestone represents a significant achievement in the company's journey to democratize treasury technology and make enterprise-grade solutions accessible to organizations of all sizes.</p>

      <p>Over the past 15 years, IBSFINtech has grown from a startup to a leading provider of treasury management solutions, serving hundreds of organizations across multiple industries and geographies.</p>

      <h3>Key Achievements Over 15 Years:</h3>

      <ul>
        <li><strong>Global Expansion:</strong> Operations across multiple countries and regions</li>
        <li><strong>Product Innovation:</strong> Development of cutting-edge treasury solutions</li>
        <li><strong>Client Success:</strong> Successful implementations for diverse organizations</li>
        <li><strong>Industry Recognition:</strong> Multiple awards and certifications</li>
        <li><strong>Technology Leadership:</strong> Pioneering advancements in treasury technology</li>
      </ul>

      <h3>Milestone Highlights:</h3>

      <ul>
        <li>15 years of continuous innovation and growth</li>
        <li>Hundreds of successful client implementations</li>
        <li>Multiple industry awards and recognitions</li>
        <li>Global presence and market leadership</li>
        <li>Commitment to customer success and satisfaction</li>
      </ul>

      <p>The company's success over the past 15 years is a testament to its commitment to excellence, innovation, and customer satisfaction. IBSFINtech has consistently delivered value to its clients through cutting-edge technology, exceptional service, and deep industry expertise.</p>

      <p>As IBSFINtech looks toward the future, the company remains committed to its mission of transforming treasury operations through innovative technology solutions, while continuing to support the growth and success of its clients worldwide.</p>
    `,
    date: "December 15, 2023",
    category: "Company",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Anniversary.png",
    backgroundImage: "/NEWS/KPMG-&-IBSFINtech-collaborate.jpg",
    featured: true,
    tags: ["15th Anniversary", "Company Milestone", "Innovation", "Growth", "Success"]
  },

  {
    id: "13",
    slug: "ibsfintech-intreax-oracle-cloud",
    title: "IBSFINtech SaaS TMS, InTReaX™ is Powered by Oracle Cloud and Now Available",
    excerpt: "IBSFINtech releases its SaaS Treasury Management Solution InTReaX™, now powered by Oracle Cloud.",
    content: `
      <p>Mumbai, May 31 2022: IBSFINtech, the Enterprise TreasuryTech company, a leading provider of solutions for end-to-end digitization of Cash, Liquidity, Treasury, Risk, Trade Finance, and Supply Chain Finance functions of corporations and a member of Oracle Partner Network (OPN) , today announced that its SaaS Treasury Management Solution, InTReaX® has achieved Powered by Oracle Cloud Expertise and is now available on Oracle Cloud Marketplace offering added value to Oracle Cloud customers. The SaaS TMS InTReaX® delivers the benefits of Oracle Cloud Infrastructure's (OCI) deep and broad platform of public cloud service capabilities. OCI enables IBSFINtech to build and run a wide range of applications in a scalable, secure, highly available, and high-performance environment.
SaaS TMS InTReaX® is a SaaS offering for Cash & Liquidity, Currency Risk, and Hedge Accounting, integrated with Refinitiv's suite of risk and financial data solutions. The solution is hosted on one of the most secure, flexible, and scalable cloud infrastructure, OCI. The SaaS TMS enables the treasury teams to do more with less and facilitates critical decision-making with access to real-time and accurate information.
Oracle Cloud Marketplace is a one-stop shop for Oracle customers seeking trusted business applications offering unique business solutions, including ones that extend Oracle Cloud Applications. Oracle Cloud is an enterprise cloud that delivers massive, non-variable performance and next generation security across a comprehensive portfolio of services including SaaS, application development, application hosting, and business analytics. Customers get access to leading compute, storage, data management, security, integration, HPC, artificial intelligence (AI), and Blockchain services to augment and modernize their critical workloads. Oracle Cloud runs Oracle Autonomous Database, the industry's first and only self-driving database.
"It has been our constant endeavor to offer future-ready solutions to our customers, and we do this with a thorough understanding of their changing needs. Treasury automation is a critical focus area for CXOs today. Having been mandated by boards, corporations globally are augmenting their corporate finance functions with robust treasury automation solutions. Our association with Oracle Cloud is a step forward in offering customers cloud-native solutions to support their business transformation journeys," said CM Grover, MD & CEO, IBSFINtech India Pvt Ltd. "IBSFINtech's participation in Oracle Partner Network with the Powered by Oracle Cloud Expertise further extends our commitment to the Oracle community and enables customers to easily reap the benefits of IBSFINtech SaaS TMS InTReaX®. We look forward to leveraging the power of Oracle Cloud to help us achieve our business goals." "The cloud represents a huge opportunity for our partner community," said David Hicks, vice-president, Worldwide ISV Cloud Business Development, Oracle. "IBSFINtech's commitment to innovation with the Oracle Cloud and quality execution helps our mutual customers receive cloud-enabled Treasury Management solutions ready to meet critical business needs." Powered by Oracle Cloud Expertise recognizes OPN members with solutions that run on Oracle Cloud. For partners earning the Powered by Oracle Cloud Expertise, this achievement offers customers confidence that the partner's application is supported by the Oracle Cloud Infrastructure SLA, enabling full access and control over their cloud infrastructure services as well as consistent performance.
Leading dailies covered the feature: CRN | IBS Intelligence | The NFA Post | IT Voice | News Patrolling | The Tech Street Now | Express Computer</p>
    `,
    date: "May 31, 2022",
    category: "Product Launch",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Oracle.png",
    backgroundImage: "/NEWS/IBSFINtech-SaaS-TMS-InTReaX.jpg",
    featured: true,
    tags: ["InTReaX", "Oracle Cloud", "SaaS", "TMS", "Cloud"]
  },
  {
    id: "14",
    slug: "ibsfintech-oracle-digital-transformation",
    title: "IBSFINtech and Oracle to enable digital transformation for customers",
    excerpt: "IBSFINtech and Oracle partner to accelerate digital transformation for enterprise treasury operations.",
    content: `
      <p>IBSFINtech and Oracle have announced a strategic partnership to accelerate digital transformation for enterprise treasury operations. This collaboration leverages Oracle's cloud infrastructure and IBSFINtech's treasury expertise.</p>
      
      <p>The partnership enables organizations to modernize their treasury operations with cloud-native solutions and advanced technology capabilities.</p>
    `,
    date: "May 20, 2022",
    category: "Partnership",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-Oracle-Partnership.png",
    backgroundImage: "/NEWS/IBSFINtech-Oracle -enable-digital-transformation-for-customers.jpg",
    featured: false,
    tags: ["Oracle", "Digital Transformation", "Partnership", "Cloud", "Enterprise"]
  },
  {
    id: "15",
    slug: "ibsfintech-vndzy-supply-chain-finance",
    title: "IBSFINtech launches VNDZY® – AI-powered SaaS solution for Supply Chain Finance",
    excerpt: "IBSFINtech launches VNDZY®, an AI-powered SaaS platform to optimize supply chain finance.",
    content: `
      <p>IBSFINtech has launched VNDZY®, an innovative AI-powered SaaS solution designed to optimize supply chain finance operations. This platform leverages artificial intelligence to streamline supply chain financial processes.</p>
      
      <p>VNDZY® represents IBSFINtech's commitment to innovation in supply chain finance and AI-driven financial solutions.</p>
    `,
    date: "March 17, 2022",
    category: "Product Launch",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-VNDZY.png",
    backgroundImage: "/NEWS/IBSFINtech-launches-VNDZY.jpg",
    featured: true,
    tags: ["VNDZY", "AI", "Supply Chain Finance", "SaaS", "Innovation"]
  },
  {
    id: "16",
    slug: "ibsfintech-et-now-feature",
    title: "IBSFINtech is doing a phenomenal job: N. Jayakumar on ET NOW",
    excerpt: "N. Jayakumar praises IBSFINtech's performance in a special feature on ET NOW.",
    content: `
      <p>N. Jayakumar, a prominent industry leader, has praised IBSFINtech's performance and contributions to the treasury technology sector in a special feature on ET NOW. This recognition highlights IBSFINtech's impact on the financial technology landscape.</p>
      
      <p>The feature showcases IBSFINtech's innovative approach to treasury management and its commitment to transforming financial operations.</p>
    `,
    date: "February 16, 2022",
    category: "Media",
    author: "IBSFINtech Team",
    image: "/IBSFINtech-Client Logos/IBSFINtech-Client-ETNow.png",
    backgroundImage: "/NEWS/IBSFINtech-doing -phenomenal-job.jpg",
    featured: false,
    tags: ["ET NOW", "Media", "Recognition", "N. Jayakumar", "Industry"]
  }
];

// Helper functions
export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getAllNewsArticles(): NewsArticle[] {
  return newsArticles;
}

export function getFeaturedNewsArticles(): NewsArticle[] {
  return newsArticles.filter(article => article.featured);
}

export function getNewsArticlesByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category === category);
}

// Placeholder functions for future Strapi integration
export async function fetchNewsArticlesFromStrapi(): Promise<NewsArticle[]> {
  // This will be replaced with actual Strapi API call
  // const response = await fetch(`${process.env.STRAPI_URL}/api/news-articles?populate=*`);
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
  //   tags: item.attributes.tags || []
  // }));
  return newsArticles;
}

export async function fetchNewsArticleBySlugFromStrapi(slug: string): Promise<NewsArticle | null> {
  // This will be replaced with actual Strapi API call
  // const response = await fetch(`${process.env.STRAPI_URL}/api/news-articles?filters[slug][$eq]=${slug}&populate=*`);
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
  //   tags: item.attributes.tags || []
  // };
  return getNewsArticleBySlug(slug) || null;
}
