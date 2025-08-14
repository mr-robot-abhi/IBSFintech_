// Define the ContentItem type
export type ContentItem = 
  | { type: 'heading'; text: string }
  | { type: 'text'; text: string }
  | { type: 'quote'; text: string; author: string }
  | { type: 'list'; items: string[] };

// Define the Award type
export type Award = {
  id: number;
  year: number;
  title: string;
  description?: string;
  imageUrl?: string;
  readMoreUrl?: string;
  event?: string;
  url?: string;
  readMoreContent?: ContentItem[];
  slug: string;
};

// Awards data organized by year with SEO-friendly slugs
export const awardsByYear: { [key: number]: Award[] } = {
  2023: [
    {
      id: 1,
      year: 2023,
      title: 'The Asset Triple Treasurise Awards 2023',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management Awards 2021',
      description: 'IBSFINtech featured as technology partner for top clients in various accolades',
      slug: 'asset-triple-treasurise-awards-2023',
      readMoreContent: [
        { type: 'heading', text: 'Polycab – Best Liquidity and Investment Solution' },
        { type: 'text', text: 'India\'s #1 Cable & Wire manufacturer, listed since Apr-19, with $2B+ market cap and $500M+ treasury portfolio' },
        { type: 'text', text: 'Network: 25 manufacturing facilities, exports to 40+ countries, 3,500+ distributors' },
        { type: 'quote', text: '\"It was a challenging task for us to find a tailor-made product under one umbrella to fulfil our organizational needs. Attempted customizing ERP, but it couldn\'t meet our needs. IBSFINtech\'s solution, with everything under one bucket, was the only one that met all requirements.\"', author: 'Sanjeev Chhabra, Chief Treasury Officer' },
        
        { type: 'heading', text: 'Blue Star – Best Hedging and Risk Solution: FX' },
        { type: 'text', text: 'India\'s leading AC/refrigeration company, annual revenue ₹5,400cr (US$720M), network of 32 offices, 5 facilities, 2,800 employees, 3,600 channel partners, 5500+ retail outlets' },
        { type: 'quote', text: '\"Many organizations still struggle with ERP for Treasury management, which often requires a dedicated solution. IBSFINtech helped us automate trade finance with a holistic, standardized product and easy configuration for corporate workflows. The embedded risk policy ensures compliance and transparency.\"', author: 'Kundip Thakker, Head – Treasury' },
        
        { type: 'heading', text: 'JSW International – Best Trade Finance Solution' },
        { type: 'text', text: 'JSW International Tradecorp Pte Ltd (Singapore, founded 2013): trading raw materials like iron ore, coal, coke' },
        { type: 'quote', text: '\"Earlier, separate MIS by various teams; now everything sorted. The product has excellent functional features, caters to almost all trading needs, highly user-friendly, includes double checks for bank charges and provides an audit trail.\"', author: 'Vishal Maheshwari, GM (F&A)' },
        
        { type: 'heading', text: 'Functional Coverage Highlighted:' },
        { type: 'list', items: [
          'Cash management',
          'Liquidity management',
          'Trade and structured finance',
          'Supply chain',
          'Working capital',
          'Hedging of FX, interest rate, commodity exposures',
          'Electronic implementation',
          'Renminbi internationalization'
        ]}
      ]
    },
  ],
  2022: [
    {
      id: 2,
      year: 2022,
      title: 'The Triple Asset A Award 2022',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management Awards 2021',
      description: 'IBSFINtech awarded as technology partner for our esteemed clients',
      slug: 'triple-asset-a-award-2022',
      readMoreContent: [
        { type: 'heading', text: 'The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management Awards 2021' },
        { type: 'text', text: 'The Asset Triple A Awards recognized IBSFINtech India at The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management, as the technology partner of our esteemed clients, Polycab, Blue Star and JSW International in various categories.' },
        
        { type: 'heading', text: 'Best Liquidity and Investment Solution – Polycab' },
        { type: 'text', text: 'Polycab India Limited is the no.1 Cable and Wire manufacturing in India, which is also listed on stock exchange in Apr-19. Company has USD 2 billion plus market capitalization and USD 500 million plus treasury portfolio. The company has 25 manufacturing facilities across the country and exports to 40+ countries globally, with a network of 3500+ distributors.' },
        { type: 'quote', text: '"It was a challenging task for us to find tailormade suitable product under one umbrella to fulfil our organizational needs. Attempted customizing existing ERP system which couldn\'t meet our needs. Finally, we started exploring proprietary solutions, one or the other way all solutions could not meet complete requirement as compared to IBSFINtech\'s Enterprise Treasury, Risk & Trade Finance Management® (TRTFM®) solution which has all the solutions under one bucket."', author: 'Sanjeev Chhabra, Chief Treasury Officer, Polycab Ltd' },
        
        { type: 'heading', text: 'Best Hedging and Risk Solution: FX – Blue Star' },
        { type: 'text', text: 'Blue Star Ltd is India\'s leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹5400 crores (over US$ 720 million), a network of 32 offices, 5 modern manufacturing facilities, 2800 employees, and 3600 channel partners with over 5500 stores for room ACs, packaged air conditioners, chillers, cold rooms as well as refrigeration products and systems; along with 800 service associates reaching out to customers in over 850 towns.' },
        { type: 'quote', text: '"Many organizations still struggle with using ERP as the solution for Treasury management. It may not be feasible to use ERP, as treasury function requires a dedicated solution designed for the purpose of automating the Treasury operations. We selected IBSFINtech as their comprehensive offerings helped us automate our trade finance operations with holistic approach. It is a standardized product, having most of the business scenarios pre-existing in the product and if required solution configuration as per the corporate workflows is very easy. The solution played a pivotal role in improving process efficiencies, ensuring data accuracy and 360-degree visibility. The embedded risk policy is the added advantage for us to ensure compliance and transparency of the entire operations."', author: 'Kundip Thakker, Head – Treasury, Blue Star Ltd' },
        
        { type: 'heading', text: 'Best Trade Finance Solution – JSW International' },
        { type: 'text', text: 'JSW International Tradecorp Pte Ltd, founded in 2013, engages in the purchase & trade of iron ore, coking coal, coke, and other raw materials in Singapore.' },
        { type: 'quote', text: '"Earlier we were maintaining separate MIS prepared by different Team members but with this product everything is sorted out completely. The product has excellent functional features which can cater to need of almost all Trading companies and moreover with customization as per Clients requirement, they make it highly user friendly. They have provided different checks so that Client cannot miss any transaction. Even provides double checks for bank charges which is an Audit Trail."', author: 'Vishal Maheshwari, General Manager (F&A) at JSW International' },
        
        { type: 'heading', text: 'About The Asset Awards' },
        { type: 'text', text: 'The Asset\'s annual Triple A recognition represents the industry\'s most prestigious awards for banking, finance, treasury and the capital markets. These awards recognize the technology firms and financial institutions that have excelled in innovation and developing a unique digital experience for clients across the Asia-Pacific and the Middle East.' },
        { type: 'heading', text: 'Award Categories Include:' },
        { type: 'list', items: [
          'Cash management',
          'Liquidity management',
          'Trade finance and structured trade finance',
          'Supply chain',
          'Working capital',
          'Hedging of FX, interest rate and commodities exposures',
          'Electronic implementation',
          'Renminbi internationalization'
        ]},
        { type: 'text', text: 'This is a testimony to how IBSFINtech is playing a pivotal role in empowering the digital transformation of Treasury, Risk and Trade Finance operations of the corporates globally.' }
      ]
    },
    {
      id: 3,
      year: 2022,
      title: 'Corporate Treasurer Awards 2022',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Corporate Treasurer Awards 2021',
      description: 'Recognized as the Software Provider in the category House Awards Service Provider (APAC)',
      slug: 'corporate-treasurer-awards-2022',
      readMoreContent: [
        { type: 'heading', text: 'Corporate Treasurer Awards 2021' },
        { type: 'text', text: 'IBSFINtech wins the prestigious Corporate Treasurer Awards 2021 recognized as the Software Provider in the category House Awards Service Provider (APAC).' },
        { type: 'text', text: 'The CorporateTreasurer awards recognize excellence in transaction banking/services, as well as all-new corporate/CFO awards to recognize the achievements of our readership. CorporateTreasurer invites all treasurers, CFOs, vendors and financial institutions in Asia to identify who is the "best of the best" in the region each year.' },
        { type: 'text', text: 'Entries were evaluated by a panel of Corporate Treasurer\'s jury comprising of 13 industry experts who actively participate in the APAC treasury community. After two months of discussion and deliberation in what was a very competitive process, the panel reviewed all applications in 2 rounds of judging and chose their winners. The awards recognize the achievements of treasury professionals who operate at the top of their class across the Asia Pacific region in different categories.' },
        { type: 'heading', text: 'About the Awards' },
        { type: 'text', text: 'The CorporateTreasurer awards celebrate standout individuals and strategies that redefine how treasury functions are managed in Asia. The awards highlight innovation, excellence, and leadership in the treasury and finance sectors across the Asia Pacific region.' }
      ]
    },
    {
      id: 4,
      year: 2022,
      title: 'Treasury Management International Awards 2022',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'TMI Awards 2021 - Best Investment Strategy',
      description: 'India Grid Trust with IBSFINtech recognized globally for Best Investment Strategy',
      slug: 'treasury-management-international-awards-2022',
      readMoreContent: [
        { type: 'heading', text: 'India Grid Trust with IBSFINtech recognized globally by TMI Awards 2021' },
        { type: 'text', text: 'India\'s first and largest infrastructure Investment Trust (InvIT) in the power transmission sector and IBSFINtech\'s prestigious client India Grid Trust has been awarded with Berkshire(UK) based Treasury Management International (TMI) Awards 2021 – the most esteemed accolade and the ultimate symbol of excellence in Treasury profession.' },
        { type: 'text', text: 'From a pool of 200+ entries received from around the world for Investment strategies category, India Grid trust won the award against stiff opposition beating out several high quality entries.' },
        { type: 'text', text: 'TMI\'s recognition of India Grid Trust with IBSFINtech as their technology partner reconfirms our ability to contribute to the end-to-end digitisation of our client\'s investment management functions.' },
        
        { type: 'heading', text: 'Client Testimonial' },
        { type: 'quote', text: '"IBSFINtech\'s solution has added a significant value to our Treasury operations. The comprehensive functionality of the product has helped us in eliminating the manual workflow and instead focus on other high-level strategic responsibilities. We were looking for something that was easy to use, something that we can understand very quickly and give us a visibility of where we stand at real time and IBSFINtech\'s solution was just the right fit for our corporate requirements. Its\' customizable and with its exhaustive MIS reports, we are able to manage crucial business data required for complex decision-making. The support team is very proactive and responsive, our experience with them has been positive throughout."', author: 'Giriraj Ajmera, Head – Treasury, India Grid Trust' },
        
        { type: 'heading', text: 'About Treasury Marketing International (UK)' },
        { type: 'text', text: 'For over 25 years, Treasury Management International (TMI) has been dedicated to promoting best practices and innovations in treasury management. With more than a decade of experience, these Awards have become firmly established as the quality benchmark for the treasury profession, formally recognising new frontiers and driving best practices in treasury management globally.' }
      ]
    },
    {
      id: 5,
      year: 2022,
      title: 'Singapore Fintech Festival 2022 – Finalists',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Adam Smith Asia Awards 2021 - Best Risk Management Solution',
      description: 'JSW International wins with IBSFINtech as technology partner',
      slug: 'singapore-fintech-festival-2022-finalists',
      readMoreContent: [
        { type: 'heading', text: 'JSW International wins "Best Risk Management Solution" at Adam Smith Asia Awards 2021 with IBSFINtech' },
        { type: 'text', text: 'IBSFINtech is honoured to be the technology partner of JSW International in empowering its treasury digital transformation journey.' },
        { type: 'text', text: 'Adam Smith Award is recognised as the ultimate industry benchmark for corporate best practice. A record-breaking 491 nominations were submitted this year and our panel of judges had the exceptionally challenging task of selecting the very best solutions in each category.' },
        { type: 'text', text: 'This recognition highlights the successful collaboration between JSW International and IBSFINtech in implementing innovative risk management solutions that set new standards in the industry.' }
      ]
    },
    {
      id: 6,
      year: 2022,
      title: 'Adam Smith Awards Asia 2022',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Risk Management Solution',
      description: 'JSW International wins with IBSFINtech as technology partner',
      slug: 'adam-smith-awards-asia-2022',
      readMoreContent: [
        { type: 'heading', text: 'JSW International wins "Best Risk Management Solution" at Adam Smith Asia Awards 2021 with IBSFINtech' },
        { type: 'text', text: 'IBSFINtech is honoured to be the technology partner of JSW International in empowering its treasury digital transformation journey.' },
        { type: 'text', text: 'Adam Smith Award is recognised as the ultimate industry benchmark for corporate best practice. A record-breaking 491 nominations were submitted this year and our panel of judges had the exceptionally challenging task of selecting the very best solutions in each category.' },
        { type: 'text', text: 'This recognition highlights the successful collaboration between JSW International and IBSFINtech in implementing innovative risk management solutions that set new standards in the industry.' }
      ]
    },
  ],
  2021: [
    {
      id: 7,
      year: 2021,
      title: 'Corporate Treasurer Awards 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'House Awards Service Provider (APAC)',
      description: 'Recognized as the Software Provider in the APAC region',
      slug: 'corporate-treasurer-awards-2021',
      readMoreContent: [
        { type: 'heading', text: 'IBSFINtech wins the prestigious Corporate Treasurer Awards 2021' },
        { type: 'text', text: 'IBSFINtech has been recognized as the Software Provider in the category House Awards Service Provider (APAC) at the Corporate Treasurer Awards 2021.' },
        { type: 'text', text: 'The CorporateTreasurer awards recognize excellence in transaction banking/services, as well as all-new corporate/CFO awards to recognize the achievements of our readership. CorporateTreasurer invites all treasurers, CFOs, vendors, and financial institutions in Asia to identify who is the "best of the best" in the region each year.' },
        { type: 'text', text: 'Entries were evaluated by a panel of Corporate Treasurer\'s jury comprising of 13 industry experts who actively participate in the APAC treasury community. After two months of discussion and deliberation in what was a very competitive process, the panel reviewed all applications in 2 rounds of judging and chose their winners.' },
        { type: 'text', text: 'The awards recognize the achievements of treasury professionals who operate at the top of their class across the Asia Pacific region in different categories, celebrating standout individuals and strategies that redefine how treasury functions are managed in Asia.' }
      ]
    },
    {
      id: 8,
      year: 2021,
      title: 'Treasury Management International Awards 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Investment Strategy',
      description: 'India Grid Trust recognized with IBSFINtech as technology partner',
      slug: 'treasury-management-international-awards-2021',
      readMoreContent: [
        { type: 'heading', text: 'India Grid Trust with IBSFINtech recognized globally by TMI Awards 2021' },
        { type: 'text', text: 'India\'s first and largest infrastructure Investment Trust (InvIT) in the power transmission sector and IBSFINtech\'s prestigious client India Grid Trust has been awarded with Berkshire(UK) based Treasury Management International (TMI) Awards 2021 – the most esteemed accolade and the ultimate symbol of excellence in Treasury profession.' },
        { type: 'text', text: 'From a pool of 200+ entries received from around the world for Investment strategies category, India Grid Trust won the award against stiff opposition beating out several high quality entries.' },
        { type: 'text', text: 'TMI\'s recognition of India Grid Trust with IBSFINtech as their technology partner reconfirms our ability to contribute to the end-to-end digitization of our client\'s investment management functions.' },
        
        { type: 'heading', text: 'Client Testimonial' },
        { type: 'quote', text: '\"IBSFINtech\'s solution has added a significant value to our Treasury operations. The comprehensive functionality of the product has helped us in eliminating the manual workflow and instead focus on other high-level strategic responsibilities. We were looking for something that was easy to use, something that we can understand very quickly and give us a visibility of where we stand at real time and IBSFINtech\'s solution was just the right fit for our corporate requirements. Its\' customizable and with its exhaustive MIS reports, we are able to manage crucial business data required for complex decision-making. The support team is very proactive and responsive, our experience with them has been positive throughout.\"', author: 'Giriraj Ajmera, Head – Treasury, India Grid Trust' },
        
        { type: 'heading', text: 'About Treasury Management International (UK)' },
        { type: 'text', text: 'For over 25 years, Treasury Management International (TMI) has been dedicated to promoting best practices and innovations in treasury management. With more than a decade of experience, these Awards have become firmly established as the quality benchmark for the treasury profession, formally recognizing new frontiers and driving best practices in treasury management globally.' }
      ]
    },
    {
      id: 9,
      year: 2021,
      title: 'Adam Smith Awards Asia 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Risk Management Solution',
      description: 'JSW International wins with IBSFINtech as technology partner',
      slug: 'adam-smith-awards-asia-2021',
      readMoreContent: [
        { type: 'heading', text: 'JSW International wins "Best Risk Management Solution" at Adam Smith Asia Awards 2021' },
        { type: 'text', text: 'IBSFINtech is honoured to be the technology partner of JSW International in empowering its treasury digital transformation journey.' },
        { type: 'text', text: 'Adam Smith Award is recognised as the ultimate industry benchmark for corporate best practice. A record-breaking 491 nominations were submitted this year and our panel of judges had the exceptionally challenging task of selecting the very best solutions in each category.' },
        { type: 'text', text: 'This recognition highlights the successful collaboration between JSW International and IBSFINtech in implementing innovative risk management solutions that set new standards in the industry.' }
      ]
    },
    {
      id: 10,
      year: 2021,
      title: 'The Triple Asset A Award 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Treasury, Trade, Sustainable Supply Chain and Risk Management Awards',
      description: 'Recognized as technology partner for Polycab, Blue Star, and JSW International',
      slug: 'triple-asset-a-award-2021',
      readMoreContent: [
        { type: 'heading', text: 'The Asset Triple A Treasury, Trade, Sustainable Supply Chain and Risk Management Awards 2021' },
        { type: 'text', text: 'The Asset Triple A Awards awarded IBSFINtech India as the technology partner of our esteemed clients, Polycab, Blue Star and JSW International in various categories.' },
        
        { type: 'heading', text: 'Best Liquidity and Investment Solution – Polycab' },
        { type: 'text', text: 'Polycab India Limited is the no.1 Cable and Wire manufacturer in India, which is also listed on stock exchange in Apr-19. Company has USD 2 billion plus market capitalization and USD 500 million plus treasury portfolio. The company has 25 manufacturing facilities across the country and exports to 40+ countries globally, with a network of 3500+ distributors.' },
        { type: 'quote', text: '\"It was a challenging task for us to find tailormade suitable product under one umbrella to fulfil our organizational needs. Attempted customizing existing ERP system which couldn\'t meet our needs. Finally, we started exploring proprietary solutions, one or the other way all solutions could not meet complete requirement as compared to IBSFINtech\'s Enterprise Treasury, Risk & Trade Finance Management® (TRTFM®) solution which has all the solutions under one bucket.\"', author: 'Sanjeev Chhabra, Chief Treasury Officer, Polycab Ltd' },
        
        { type: 'heading', text: 'Best Hedging and Risk Solution: FX – Blue Star' },
        { type: 'text', text: 'Blue Star Ltd is India\'s leading air conditioning and commercial refrigeration company, with an annual revenue of over ₹5400 crores (over US$ 720 million), a network of 32 offices, 5 modern manufacturing facilities, 2800 employees, and 3600 channel partners with over 5500 stores for room ACs, packaged air conditioners, chillers, cold rooms as well as refrigeration products and systems; along with 800 service associates reaching out to customers in over 850 towns.' },
        { type: 'quote', text: '\"Many organizations still struggle with using ERP as the solution for Treasury management. It may not be feasible to use ERP, as treasury function requires a dedicated solution designed for the purpose of automating the Treasury operations. We selected IBSFINtech as their comprehensive offerings helped us automate our trade finance operations with holistic approach. It is a standardized product, having most of the business scenarios pre-existing in the product and if required solution configuration as per the corporate workflows is very easy. The solution played a pivotal role in improving process efficiencies, ensuring data accuracy and 360-degree visibility. The embedded risk policy is the added advantage for us to ensure compliance and transparency of the entire operations.\"', author: 'Kundip Thakker, Head – Treasury, Blue Star Ltd' },
        
        { type: 'heading', text: 'Best Trade Finance Solution – JSW International' },
        { type: 'text', text: 'JSW International Tradecorp Pte Ltd, founded in 2013, engages in the purchase & trade of iron ore, coking coal, coke, and other raw materials in Singapore.' },
        { type: 'quote', text: '\"Earlier we were maintaining separate MIS prepared by different Team members but with this product everything is sorted out completely. The product has excellent functional features which can cater to need of almost all Trading companies and moreover with customization as per Clients requirement, they make it highly user friendly. They have provided different checks so that Client cannot miss any transaction. Even provides double checks for bank charges which is an Audit Trail.\"', author: 'Vishal Maheshwari, General Manager (F&A) at JSW International' },
        
        { type: 'heading', text: 'About The Asset Awards' },
        { type: 'text', text: 'The Asset\'s annual Triple A recognition represents the industry\'s most prestigious awards for banking, finance, treasury and the capital markets. These awards recognize the technology firms and financial institutions that have excelled in innovation and developing a unique digital experience for clients across the Asia-Pacific and the Middle East.' },
        { type: 'heading', text: 'Award Categories Include:' },
        { type: 'list', items: [
          'Cash management',
          'Liquidity management',
          'Trade finance and structured trade finance',
          'Supply chain',
          'Working capital',
          'Hedging of FX, interest rate and commodities exposures',
          'Electronic implementation',
          'Renminbi internationalization'
        ]},
        { type: 'text', text: 'This is a testimony to how IBSFINtech is playing a pivotal role in empowering the digital transformation of Treasury, Risk and Trade Finance operations of the corporates globally.' }
      ]
    },
    {
      id: 11,
      year: 2021,
      title: 'Global Finance FX Award 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Corporate for use of Currency Hedging',
      description: 'Recognized as technology partner for Blue Star',
      slug: 'global-finance-fx-award-2021',
      readMoreContent: [
        { type: 'heading', text: 'Global Finance Best FX Provider 2021' },
        { type: 'text', text: 'We are humbled and honored to have India\'s leading engineering conglomerate and our prestigious client Blue Star on being recognized as the "Best Corporate for use of Currency Hedging" at the prestigious Global Finance Corporate FX Awards 2021.' },
        { type: 'text', text: 'For more information: Global Finance Corporate FX Awards 2021 (https://www.gfmag.com/media/press-releases/press-release-corporate-fx-awards-2021)' },
        
        { type: 'heading', text: 'About Global Finance' },
        { type: 'text', text: 'Global Finance is the world\'s leading corporate finance publication, uniquely positioned to recognize and reward excellence in the Foreign Exchange sector. The Global Finance award is the most trusted standard of excellence for the global financial community.' },
        { type: 'text', text: 'IBSFINtech appreciates your commendable efforts and for giving us an opportunity to work together with your team. IBSFINtech is privileged to be recognized as Blue Star\'s Technology Partner in this esteemed win enabling their journey of digital transformation through our integrated solution for Treasury, Risk and Trade Finance.' },
        
        { type: 'heading', text: 'Client Testimonial' },
        { type: 'quote', text: '\"Many organizations still struggle with using ERP as the solution for Treasury management. It may not be feasible to use ERP, as treasury function requires a dedicated solution designed for the purpose of automating the Treasury operations. We selected IBSFINtech as their comprehensive offerings helped us automate our trade finance operations with holistic approach. It is a standardized product, having most of the business scenarios pre-existing in the product and if required solution configuration as per the corporate workflows is very easy. The solution played a pivotal role in improving process efficiencies, ensuring data accuracy and 360-degree visibility. The embedded risk policy is the added advantage for us to ensure compliance and transparency of the entire operations.\"', author: 'Kundip Thakker, Head – Treasury, Blue Star Ltd' }
      ]
    },
    {
      id: 12,
      year: 2021,
      title: 'Asia meets Tokyo Fintech Program Winner',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Featured in Global Treasury Management Software Market Report',
      description: 'Recognized as the only TMS player from APAC region',
      slug: 'asia-meets-tokyo-fintech-program-winner',
      readMoreContent: [
        { type: 'heading', text: 'IBSFINtech featured as the only TMS player from APAC region' },
        { type: 'text', text: 'IBSFINtech has been featured in a report published by an independent US-based research agency (Advance Market Analytics AMA) on the Global Treasury Management Software Market.' },
        { type: 'text', text: 'The report quotes players in Treasury Management Space from across the globe, and it is noteworthy that IBSFINtech is the ONLY player from APAC region in this niche space of Treasury Management, positioned globally alongside 4 players from the US, and rest 5 from Europe.' },
        { type: 'text', text: 'The report is a comprehensive study of Treasury Management Software by Organization Size (SMEs, Large Enterprises), Platform (Windows, Linux, Android, iOS), Pricing (Monthly, Annually, One-time license, Platform), Features (Debt management, Forecasting, Risk management, Others) Players and Region – Global Market Outlook to 2025.' },
        { type: 'text', text: 'To view the report, please follow the link: https://www.advancemarketanalytics.com/reports/91494-global-treasury-management-software-market' },
        
        { type: 'heading', text: 'About Advance Market Analytics' },
        { type: 'text', text: 'Advance Market Analytics is Global leaders of Market Research Industry provides the quantified B2B research to Fortune 500 companies on high growth emerging opportunities which will impact more than 80% of worldwide companies\' revenues.' },
        { type: 'text', text: 'Our Analyst is tracking high growth study with detailed statistical and in-depth analysis of market trends & dynamics that provide a complete overview of the industry. We follow an extensive research methodology coupled with critical insights related industry factors and market forces to generate the best value for our clients. We Provides reliable primary and secondary data sources, our analysts and consultants derive informative and usable data suited for our clients business needs. The research study enable clients to meet varied market objectives a from global footprint expansion to supply chain optimization and from competitor profiling to M&As.' },
        
        { type: 'heading', text: 'About IBSFINtech' },
        { type: 'text', text: 'IBSFINtech is a top global TMS provider offering comprehensive, innovative and integrated solution for risk, treasury and trade finance management. The solution enables Treasurers and CFOs to enhance visibility, improve control, mitigate operational risk, drive automation and optimize business efficiency.' },
        { type: 'text', text: 'IBSFINtech is a "Make-In-India" company, established by Ex-Bankers, having rich experience in banking, finance and treasury. During their stint with the leading public sector bank in India they identified a niche gap in the market and that led to the birth of the product.' },
        { type: 'text', text: 'With their experience in both finance as well as technology, the company grew fast from providing treasury to the leading media house of the country in the year 2013 to today, having 30th implementation catering to very large corporates & established brands across the country.' },
        { type: 'text', text: 'IBSFINtech is at the forefront, leading the transformation of cash & liquidity, treasury, risk and trade finance function of the corporate, by leveraging the power of technology. It is evident that Digitization and Automation is going to be the only way forward for corporates to ensure better control, visibility and transparency of the exposure to various risks, including but not limited to, Compliance, Financial and Operational Risks.' }
      ]
    },
    {
      id: 13,
      year: 2021,
      title: 'Micro Enterprise of the Year',
      description: 'National Enterprise Leadership Award 2021',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'IT Solution & Services Category',
      slug: 'micro-enterprise-of-the-year-2021',
      readMoreContent: [
        { type: 'heading', text: 'IBSFINtech awarded as the "Micro Enterprise of the year" at "National Enterprise Leadership Award 2021"' },
        { type: 'text', text: 'IBSFINtech is truly honoured to be awarded as the "Micro Enterprise of the Year" for "IT Solution & Services" in the National Enterprise Leadership Award 2021 organised by B2B Infomedia.' },
        { type: 'text', text: 'IBSFINtech was selected from the 100+ nominations received for different categories. The announcement of the winners was made at the virtual National Enterprise Leadership Award Felicitation ceremony on Jan 22, 2021 along with insights and views from featured thinkers from across the industries.' },
        
        { type: 'heading', text: 'About B2B Infomedia' },
        { type: 'text', text: 'B2B infomedia is a technology and media research company that has a focus on Banking & Finance, governance, Education verticals. B2B Infomedia Pvt. Ltd. was established in August 2017. It represents an innovative platform to the clients and is widely recognised as one of the pioneer networking platforms with a team of young, creative, dynamic and dedicated professionals.' },
        { type: 'text', text: 'The National Enterprise Leadership Awards recognize and honor organizations that have demonstrated exceptional leadership, innovation, and excellence in their respective industries, setting benchmarks for others to follow.' }
      ]
    },
  ],
  2020: [
    {
      id: 14,
      year: 2020,
      title: 'Global Finance FX Award 2020',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best FX Provider',
      description: 'Recognized for excellence in FX solutions for Olam Agro India and JSW Group',
      slug: 'global-finance-fx-award-2020',
      readMoreContent: [
        { type: 'heading', text: 'Global Finance Best FX Provider 2020' },
        { type: 'text', text: 'IBSFINtech has been awarded Global Finance Best FX Provider 2020 in two different categories:' },
        { 
          type: 'list',
          items: [
            'Best System for Real-Time Measurement of FX: Olam Agro India',
            'Best FX Netting Solution: JSW Group'
          ]
        },
        { type: 'text', text: 'The awards ceremony was held in London, recognizing excellence in foreign exchange solutions worldwide.' },
        
        { type: 'heading', text: 'About Global Finance Magazine' },
        { type: 'text', text: 'Global Finance is a monthly magazine founded in 1987 by publishing entrepreneurs Joseph Giarraputo and Carl Burgen. Giarraputo continues as Publisher and Editorial Director. Its mission is to help corporate leaders, bankers and investors chart the course of global business and finance.' },
        { type: 'text', text: 'Global Finance magazine has a circulation of 50,050, audited by BPA, and readers in 163 countries. Its headquarters are in New York, with offices in London and Milan.' },
        { type: 'text', text: 'Global Finance\'s audience includes Chairmen, Presidents, CEOs, CFOs, Treasurers and other senior financial officers responsible for making investment and strategic business decisions at multinational companies and financial institutions.' },
        { type: 'text', text: 'Each year Global Finance selects the best financial institutions around the world. These awards have become a recognized and trusted standard of excellence.' },
        { type: 'text', text: 'This recognition highlights IBSFINtech\'s commitment to providing innovative and effective foreign exchange solutions to its clients, helping them manage their currency risks more effectively.' }
      ]
    },
  ],
  2019: [
    {
      id: 17,
      year: 2019,
      title: 'Top 8 TMS Players Globally',
      description: 'Global Treasury Management Software Market Report',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Global Treasury Management Software Market',
      slug: 'top-8-tms-players-globally-2019',
      readMoreContent: [
        { type: 'heading', text: 'Recognized as one of the Top 8 TMS Players Globally' },
        { type: 'text', text: 'IBSFINtech was recognized as one of the Top 8 Treasury Management System (TMS) players globally in an independent market report on the Global Treasury Management Software Market 2019, published in March 2019.' },
        { type: 'text', text: 'This prestigious recognition highlights our position among the leading providers of treasury management solutions worldwide, showcasing our ability to compete with established global players in the financial technology sector.' },
        { 
          type: 'list',
          items: [
            'Recognized among top 8 global TMS providers',
            'Inclusion in comprehensive market analysis',
            'Validation of our technological capabilities',
            'Global recognition of our product excellence'
          ]
        },
        { type: 'text', text: 'The report analyzed various aspects of treasury management solutions, including functionality, market presence, innovation, and customer satisfaction, positioning IBSFINtech as a significant player in the global treasury technology landscape.' },
        { type: 'text', text: 'This achievement reflects our commitment to delivering cutting-edge treasury management solutions that meet the evolving needs of global enterprises, helping them optimize their financial operations and risk management strategies.' }
      ]
    },
    {
      id: 15,
      year: 2019,
      title: 'Singapore Fintech Festival 2019',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Finalist',
      description: 'Recognized among global fintech innovators',
      slug: 'singapore-fintech-festival-2019',
      readMoreContent: [
        { type: 'heading', text: 'Singapore Fintech Festival 2019' },
        { type: 'text', text: 'IBSFINtech was recognized as a finalist at one of the world\'s largest and most impactful Fintech festivals, organized by the Monetary Authority of Singapore.' },
        { type: 'text', text: 'The event brought together over 60,000 participants from across 140 countries, including key executives and decision makers from global financial institutions, corporates, fintech start-ups, unicorns, investors, and academia.' },
        { 
          type: 'list',
          items: [
            '40 finalists selected from 245 submissions',
            'Representation from over 30 countries',
            '60,000+ participants from 140+ countries',
            'Organized by the Monetary Authority of Singapore'
          ]
        },
        { type: 'text', text: 'This recognition highlights IBSFINtech\'s position as an innovative player in the global fintech ecosystem, showcasing our solutions to a diverse international audience of industry leaders and potential partners.' },
        { type: 'text', text: 'The Singapore Fintech Festival serves as a premier platform for the global fintech community to connect, collaborate, and co-create innovative solutions that shape the future of financial services.' }
      ]
    },
    {
      id: 16,
      year: 2019,
      title: 'Adam Smith Awards Asia 2019',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Risk Management Solution',
      description: 'Technology Partner to Olam Agro India',
      slug: 'adam-smith-awards-asia-2019',
      readMoreContent: [
        { type: 'heading', text: 'Adam Smith Asia Awards 2019 - Hattrick Achievement' },
        { type: 'text', text: 'We are thrilled to share that IBSFINtech has achieved a hattrick of the prestigious Adam Smith Asia Awards in 2019. IBSFINtech has been recognized as Technology Partner to Olam Agro India, the Overall Winners in the Best Risk Management Solution Category.' },
        { type: 'text', text: 'The Adam Smith Awards Asia programme, now in its sixth year, is recognized as the ultimate industry benchmark for corporate best practice. A record-breaking 300 nominations were submitted this year, making the judging panel\'s task exceptionally challenging in selecting the very best solutions in each category.' },
        { 
          type: 'list',
          items: [
            'Technology Partner to Olam Agro India',
            'Overall Winner - Best Risk Management Solution',
            'Record 300 nominations received',
            'Prestigious industry benchmark in corporate treasury'
          ]
        },
        { type: 'text', text: 'This year\'s winners showcase the region\'s very best and brightest, having demonstrated exceptional innovation in Asia\'s corporate treasury arena. The prestigious Adam Smith Awards Gala Presentation Lunch took place at the newly restored iconic Raffles Hotel, Singapore on Thursday, November 14th, 2019.' },
        { type: 'text', text: 'This recognition marks a significant milestone in our journey, highlighting our commitment to delivering innovative risk management solutions that help our clients navigate complex financial landscapes with confidence and strategic advantage.' }
      ]
    },
    {
      id: 20,
      year: 2019,
      title: 'The Corporate Treasurer Award 2018',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Treasury & Finance Strategies in Asia-Pacific',
      description: 'In partnership with Olam India',
      slug: 'corporate-treasurer-award-2018',
      readMoreContent: [
        { type: 'heading', text: 'Corporate Treasurer Awards 2018 - 4th International Award' },
        { type: 'text', text: 'IBSFINtech is thrilled to have won its 4th consecutive international award within 2 years. We were honored with the prestigious "The Corporate Treasurer Awards 2018" in its 7th annual event, in the category of "Best Treasury & Finance Strategies in Asia-Pacific" with Olam India.' },
        { type: 'text', text: 'Mr. Grover, the MD & CEO of IBSFINtech, represented the company at the awards ceremony held in Singapore on April 24th, 2019.' },
        
        { type: 'heading', text: 'Client Success Story: Olam India' },
        { type: 'text', text: 'Olam India\'s Head of Treasury, Mr. Anil Jena, transitioned from SAP to IBSFINtech\'s comprehensive and integrated treasury management solution. The decision was driven by our solution\'s ability to meet their complex treasury needs.' },
        { 
          type: 'quote',
          text: '\"After analysing multiple alternatives in the market for our treasury front-office operations, we at OLAM India finally selected IBSFINtech which can be integrated at real-time. We perform extensive hedging activities and getting live market data has become a straightforward job owing to the integration of IBSFINtech\'s TMS with Thomson Reuters\'s DSS. We have been using TR\'s FXALL for all hedging activities and STP from FXALL to IBSFINtech\'s TMS has been a boon to us.\"',
          author: 'Mr. Anil Jena, Head of Treasury, Olam India'
        },
        { type: 'text', text: '\"Bottom line, we have doubled the operation volumes over last one year of using this solution.\"' },
        
        { type: 'heading', text: 'About The Corporate Treasurer Awards' },
        { type: 'text', text: 'Organized by Corporate Treasurer, a leading media and renowned name in treasury across the APAC region, The Corporate Treasurer Awards is one of the most prestigious recognitions in the treasury industry. The 2018 edition marked the 7th season of this annual event.' },
        { 
          type: 'list',
          items: [
            '7th annual Corporate Treasurer Awards',
            'Recognized excellence in treasury and finance strategies',
            'Awarded in partnership with Olam India',
            'Ceremony held in Singapore, April 2019'
          ]
        },
        { type: 'text', text: 'This recognition highlights IBSFINtech\'s commitment to delivering innovative treasury solutions that drive operational excellence and strategic advantage for our clients across the Asia-Pacific region.' }
      ]
    },
  ],
  2018: [
    {
      id: 21,
      year: 2018,
      title: 'Adam Smith Asia Award 2018',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Solution in India',
      description: 'Technology Partner to JSW Group',
      slug: 'adam-smith-asia-award-2018',
      readMoreContent: [
        { type: 'heading', text: 'Adam Smith Asia Award 2018 - Back-to-Back Win' },
        { type: 'text', text: 'IBSFINtech is proud to announce our second consecutive win at the prestigious Adam Smith Asia Awards. In 2018, we were recognized as the Technology Partner to JSW Group, the winners of the Best Solution in India category.' },
        { type: 'text', text: 'This achievement marks our second consecutive win at the Adam Smith Asia Awards, solidifying our position as a leading technology provider in the treasury management space.' },
        
        { type: 'heading', text: 'Client Success: JSW Group' },
        { type: 'text', text: 'JSW Group faced significant challenges with market volatility, economic fluctuations, and political events affecting currencies and interest rates. To address these challenges, JSW implemented IBSFINtech\'s innovative Treasury 5.1i solution, transitioning from spreadsheets to an automated, end-to-end treasury operations platform.' },
        
        {
          type: 'quote',
          text: '\"I am excited to receive this award with our client JSW and continuing the same performance as a technology partner. Looking forward to keeping up with this performance for the upcoming years as well.\"',
          author: 'Mr. C M Grover, MD & CEO, IBSFINtech'
        },
        
        { type: 'heading', text: 'About the Achievement' },
        { 
          type: 'list',
          items: [
            'Second consecutive Adam Smith Asia Award win',
            'Recognized as Technology Partner to JSW Group',
            'Winner in the Best Solution in India category',
            'Award ceremony held in Singapore'
          ]
        },
        { type: 'text', text: 'This recognition underscores IBSFINtech\'s commitment to delivering innovative treasury solutions that help organizations navigate complex financial landscapes and achieve operational excellence.' }
      ]
    },
    {
      id: 22,
      year: 2018,
      title: 'Next Big Idea Contest 2018',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Indo-Canada Bilateral Entrepreneurship Program',
      description: 'Winner - Only Treasury Management Company Selected',
      slug: 'next-big-idea-contest-2018',
      readMoreContent: [
        { type: 'heading', text: 'Next BIG Idea Contest 2018 - Winner' },
        { type: 'text', text: 'IBSFINtech was honored to be selected as one of the winners of the prestigious Next BIG Idea Contest 2018, organized as part of the Indo-Canada bilateral entrepreneurship exchange program. This marked a significant milestone as we were the only company selected from the Treasury Management space among the winners.' },
        { type: 'text', text: 'The 6th edition of this annual contest, held on October 22, 2018, was conducted by Zone Startups India, a leading startup accelerator in India, in collaboration with the Governments of India and Canada.' },
        
        { type: 'heading', text: 'About the Contest' },
        { 
          type: 'list',
          items: [
            'Part of Indo-Canada bilateral entrepreneurship exchange program',
            'Organized by Zone Startups India',
            'A gateway to North American markets for Indian startups',
            'Identifies high-growth potential Indian startups'
          ]
        },
        
        { type: 'heading', text: 'Achievement Highlights' },
        { 
          type: 'list',
          items: [
            'Selected as one of only 13 winners from 1,100+ entries',
            'The only company selected from the Treasury Management sector',
            'Recognized for innovative technology and market potential',
            'Opportunity to expand into North American markets'
          ]
        },
        
        { type: 'heading', text: 'Program Benefits' },
        { 
          type: 'list',
          items: [
            'Access to North American markets through Canada',
            'Mentorship and guidance from industry experts',
            'Networking opportunities with potential partners and investors',
            'Recognition as an innovative startup with global potential'
          ]
        },
        
        { type: 'text', text: 'This recognition highlights IBSFINtech\'s position as an innovative leader in the treasury management space and validates our potential to make a significant impact in international markets.' }
      ]
    },
  ],
  2017: [
    {
      id: 23,
      year: 2017,
      title: 'Adam Smith Asia Awards 2017',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Best Solution in India',
      description: 'Technology Partner to Maruti Suzuki',
      slug: 'adam-smith-asia-awards-2017',
      readMoreContent: [
        { type: 'heading', text: 'Adam Smith Asia Awards 2017 - First International Recognition' },
        { type: 'text', text: 'IBSFINtech achieved a significant milestone by winning our first international award at the prestigious Adam Smith Asia Awards 2017. We were honored to be recognized as the Technology Partner to Maruti Suzuki, the winners of the Best Solution in India category.' },
        { type: 'text', text: 'This award marked a pivotal moment in our journey, establishing our presence on the international stage and validating our innovative treasury solutions.' },
        
        {
          type: 'quote',
          text: '\"It gives me immense pleasure to stand alongside our client, Maruti Suzuki and be acknowledged as their Technology Partner. I feel proud receiving the first of many International Awards for IBSFINtech.\"',
          author: 'Mr. C M Grover, MD & CEO, IBSFINtech'
        },
        
        { type: 'heading', text: 'Award Ceremony Highlights' },
        { 
          type: 'list',
          items: [
            'Held at the Four Seasons Hotel in Singapore',
            'Date: November 13, 2017',
            'Over 200 nominations received from 17 countries',
            'IBSFINtech hosted a lunch table for partners and prospective clients'
          ]
        },
        
        { type: 'heading', text: 'About the Achievement' },
        { 
          type: 'list',
          items: [
            'First international award for IBSFINtech',
            'Recognized as Technology Partner to Maruti Suzuki',
            'Winner in the Best Solution in India category',
            'Part of a record-breaking year for the Adam Smith Awards Asia'
          ]
        },
        
        { type: 'text', text: 'This recognition was particularly significant as it marked the beginning of IBSFINtech\'s international recognition, setting the stage for future achievements and establishing our reputation as a leading provider of innovative treasury management solutions in the Asian market.' }
      ]
    },
    {
      id: 24,
      year: 2017,
      title: 'Vizag Fintech Valley 2017',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'FinTech Spring Conference 2017',
      description: 'Runner-Up in Banking Category',
      slug: 'vizag-fintech-valley-2017',
      readMoreContent: [
        { type: 'heading', text: 'Vizag Fintech Valley 2017 - Runner-Up' },
        { type: 'text', text: 'IBSFINtech was honored to be recognized at the prestigious Vizag Fintech Valley 2017, securing the Runner-Up position in the Banking Category of the FinTech Challenge. This achievement placed us among the top fintech innovators in a highly competitive international field.' },
        
        { type: 'heading', text: 'About the Event' },
        { type: 'text', text: 'The FinTech Spring Conference 2017, held on March 9-10, 2017, was a flagship initiative by the Government of Andhra Pradesh to establish Vizag (Visakhapatnam) as a national and global hub for fintech innovation. The event brought together industry leaders, academic experts, and investors to foster innovation and collaboration in the fintech ecosystem.' },
        
        { type: 'heading', text: 'Competition Highlights' },
        { 
          type: 'list',
          items: [
            '150+ start-up companies from 15 countries participated',
            '4 distinct FinTech Challenges organized',
            'IBSFINtech ranked among top 3 finalists',
            'Awarded Runner-Up in the Banking Category'
          ]
        },
        
        { type: 'heading', text: 'Event Details' },
        { 
          type: 'list',
          items: [
            'Date: March 9-10, 2017',
            'Venue: Vizag (Visakhapatnam), India',
            'Award Ceremony: March 10, 2017',
            'Organizer: Government of Andhra Pradesh'
          ]
        },
        
        { type: 'heading', text: 'Significance' },
        { 
          type: 'list',
          items: [
            'Recognition as a leading fintech innovator in banking solutions',
            'Validation of our technology in a competitive international field',
            'Opportunity to showcase our solutions to global investors and partners',
            'Contribution to India\'s growing fintech ecosystem'
          ]
        },
        
        { type: 'text', text: 'This recognition at Vizag Fintech Valley 2017 marked an important milestone in our journey, reinforcing our commitment to innovation in financial technology and our position as a leading provider of banking and treasury solutions in the Indian market.' }
      ]
    },
  ],
  2016: [
    {
      id: 25,
      year: 2016,
      title: 'Thomson Reuters Fintech Challenge 2016',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'South Asia FinTech Innovation Challenge',
      description: 'Winner - First Prize',
      slug: 'thomson-reuters-fintech-challenge-2016',
      readMoreContent: [
        { type: 'heading', text: 'Thomson Reuters FinTech Challenge 2016 - Winner' },
        { type: 'text', text: 'IBSFINtech achieved a significant milestone by winning the prestigious Thomson Reuters FinTech Innovation Challenge 2016, emerging as the sole player in the Treasury Management space to receive this honor in the first-ever South Asia edition of the competition.' },
        { type: 'text', text: 'This victory marked a remarkable achievement in our journey, following our recognition as the Software Product of the Year 2015 by Express IT Awards, and represented a hat-trick of prestigious accolades for our innovative work in the FinTech domain.' },
        
        {
          type: 'quote',
          text: '\"We are thrilled to win the Thomson Reuters FinTech Challenge 2016. It is about time that industry starts recognizing our innovative solutions in treasury management space. There is still a long way to go, but this recent acknowledgement reflects that we are on the right track!\"',
          author: 'C M Grover, Executive Director, IBSFINtech'
        },
        
        { type: 'heading', text: 'Competition Highlights' },
        { 
          type: 'list',
          items: [
            'Selected as Winner from 59+ startups that applied',
            'Only treasury management solution to win in the challenge',
            'Earned a spot on the EIKON App Studio platform',
            'Received mentorship from FinTech Industry Leaders'
          ]
        },
        
        { type: 'heading', text: 'About the Challenge' },
        { type: 'text', text: 'Launched in September 2016, the Thomson Reuters FinTech Innovation Challenge India offered innovative FinTech start-ups the opportunity to collaborate with the Thomson Reuters EIKON App platform. This marked the first time Thomson Reuters opened its EIKON App studio to start-ups and technology companies in the BFSI industry in India.' },
        
        {
          type: 'quote',
          text: '\"We are glad to be associated with EIKON App Studio, as this opens up new avenues of opportunities for our software solution by providing access to the global library of specialist applications that offer analysis, calculations, data visualizations and communication capabilities across asset classes.\"',
          author: 'T M Manjunath, Technical Director, IBSFINtech'
        },
        
        { type: 'heading', text: 'Key Benefits' },
        { 
          type: 'list',
          items: [
            'Onboarding to the EIKON App Studio platform',
            'Mentorship from FinTech industry leaders',
            'Opportunity to co-create innovative solutions with Thomson Reuters',
            'Access to a global network of financial professionals',
            'Enhanced visibility in the FinTech ecosystem'
          ]
        },
        
        { type: 'heading', text: 'Significance' },
        { type: 'text', text: 'This recognition validated our position as an innovator in the FinTech space and provided a significant platform to showcase our treasury management solutions to a global audience. The win opened doors to new opportunities for collaboration and growth in the financial technology sector.' }
      ]
    },
    {
      id: 26,
      year: 2016,
      title: 'National Awards in IT Excellence 2016',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Dual Award Winner',
      description: 'Emerging IT Company & Solution Provider of the Year 2015',
      slug: 'national-awards-it-excellence-2016',
      readMoreContent: [
        { type: 'heading', text: 'National Awards in IT Excellence 2016 - Dual Winner' },
        { type: 'text', text: 'IBSFINtech was honored with two prestigious awards at the 4th National Awards in IT Excellence 2016: "Emerging IT Company of the Year 2015" and "Solution Provider of the Year 2015." This recognition marked a hat-trick of awards for the company within three months, following the Express IT Awards win in December 2015.' },
        
        { type: 'heading', text: 'Award Ceremony' },
        { 
          type: 'list',
          items: [
            'Date: February 22, 2016',
            'Venue: Mumbai, India',
            'Organized by: Star of the Industry Group & 94.3 My FM',
            'Award received by: C.M. Grover, Executive Director'
          ]
        },
        
        {
          type: 'quote',
          text: '\"We feel greatly honoured to receive this award. It feels proud to be acknowledged by the industry. I would like to take this opportunity to thank our clients and partners who have shown tremendous faith in our company and product.\"',
          author: 'C M Grover, Executive Director, IBSFINtech'
        },
        
        { type: 'heading', text: 'About the Awards' },
        { 
          type: 'list',
          items: [
            'Recognizes excellence throughout the IT industry',
            'Honors companies demonstrating leadership in IT for business transformation',
            'Acknowledges achievements in cost optimization and customer satisfaction',
            '4th edition in 2016'
          ]
        },
        
        { type: 'heading', text: 'Key Highlights' },
        { 
          type: 'list',
          items: [
            'Recognized for Innovative Treasury 5.0i and Trade Finance 5.0i solutions',
            'Serving leading corporates including Future Group, TOI, and Snapdeal',
            'Launched "Treasury on Cloud" for MSMEs',
            'Company growth with new clients like North End Foods Marketing'
          ]
        },
        
        {
          type: 'quote',
          text: '\"Corporates have started appreciating and acknowledging the importance of implementing a software solution for effective management of treasury and trade finance operations. A comprehensive product facilitates automation of operations, helps mitigate human error and provides quick access to real-time information.\"',
          author: 'T M Manjunath, Technical Director, IBSFINtech'
        },
        
        { type: 'heading', text: 'Treasury on Cloud' },
        { type: 'text', text: 'A significant innovation highlighted during this recognition was the launch of "Treasury on Cloud," a solution designed specifically for Micro, Small, and Medium Enterprises (MSMEs). This innovative approach allows MSMEs to effectively manage market risks with minimal investment through a pay-as-you-go model.' },
        
        { type: 'heading', text: 'Company Snapshot (2016)' },
        { 
          type: 'list',
          items: [
            'Headquarters: Bengaluru, Karnataka',
            'Implementation Office: Mumbai, Maharashtra',
            'Flagship Products: Innovative Treasury™ 5.0i, Innovative Trade Finance™ 5.0i',
            'Recent Achievement: Successful implementation at Future Retail, India\'s leading retail chain'
          ]
        }
      ]
    },
  ],
  2015: [
    {
      id: 27,
      year: 2015,
      title: 'Express I.T. Award 2015',
      imageUrl: '/Awards/Dabur_IBSFINtech_win_BestLiquidityInvestmentSolutionAward_TheAsset.jpg',
      event: 'Financial Express IT Awards',
      description: 'Software Product of the Year - Joint Winner',
      slug: 'express-it-award-2015',
      readMoreContent: [
        { type: 'heading', text: 'Express IT Awards 2015 - Software Product of the Year' },
        { type: 'text', text: 'IBSFINtech was honored with the prestigious "Software Product of the Year" award at the Financial Express IT Awards 2015. This recognition marked a significant milestone in our journey as a leading provider of specialized IT solutions for Forex, Treasury, and Trade Finance management.' },
        
        { type: 'heading', text: 'Award Ceremony' },
        { 
          type: 'list',
          items: [
            'Date: December 4, 2015',
            'Venue: Bengaluru, India',
            'Award received by: T.M. Manjunath (Technical Director) and C.M. Grover (Executive Director)',
            'Category: Software Product of the Year (Joint Winner)'
          ]
        },
        
        { type: 'heading', text: 'About the Award' },
        { 
          type: 'list',
          items: [
            'Prestigious recognition by Financial Express',
            'Acknowledges excellence in software product development',
            'Celebrates innovation and impact in the IT industry',
            'Highly competitive category with rigorous evaluation criteria'
          ]
        },
        
        { type: 'heading', text: 'Significance' },
        { type: 'text', text: 'This award served as a testament to IBSFINtech\'s commitment to developing cutting-edge treasury and trade finance solutions. Being recognized as a joint winner in the Software Product of the Year category highlighted our position as an emerging leader in the financial technology space.' },
        
        { type: 'heading', text: 'Company Milestone' },
        { 
          type: 'list',
          items: [
            'First major industry recognition for our treasury management solutions',
            'Validated our product strategy and market positioning',
            'Set the stage for future awards and recognitions',
            'Strengthened our credibility in the financial technology sector'
          ]
        },
        
        { type: 'text', text: 'This recognition at the Express IT Awards 2015 marked the beginning of IBSFINtech\'s journey as an award-winning financial technology provider, paving the way for numerous accolades in the years that followed.' }
      ]
    },
  ],
};

// Helper function to get all awards
export const getAllAwards = (): Award[] => {
  return Object.values(awardsByYear).flat();
};

// Helper function to get award by slug
export const getAwardBySlug = (slug: string): Award | undefined => {
  return getAllAwards().find(award => award.slug === slug);
};

// Helper function to get awards by year
export const getAwardsByYear = (year: number): Award[] => {
  return awardsByYear[year] || [];
};
