'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Clock, ArrowRight, Home, ArrowUp } from 'lucide-react';
import ModernMegaMenu from '@/components/layout/ModernMegaMenu';

const BlogPage = () => {
  const [activePost, setActivePost] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const blogPosts = [
    {
      id: 'cashflow-management',
      title: 'What is Cashflow Management?',
      excerpt: 'Understanding the fundamentals of cashflow management and why it\'s crucial for business success.',
      readTime: '8 min read',
      date: 'July 25, 2024',
      content: [
        'Think of Cashflow as the money flowing in and out of a business. Positive cash flow means more water is coming in than going out, which is good! This is like having cash in your pocket. High liquidity means you can easily pay for things without having to sell other assets.',
        {
          heading: 'Understanding Cash Inflows vs Cash Outflows',
          subSections: [
            {
              title: 'Cash Inflow',
              content: 'Cash inflow is the amount of money coming into your business. When cash inflow exceeds cash outflow, your business experiences a positive cash flow. This is crucial for maintaining financial health, as it ensures that your business has enough money to support its operations and growth.'
            },
            {
              title: 'Components of Cash Inflow',
              items: [
                'Customer Payments: The largest portion of cash inflow typically comes from customers who pay for the products or services you sell.',
                'Investment Gains: Cash inflow also includes returns from investments made by your business.',
                'Project Revenues: For specific projects, cash inflows include revenues from selling the project\'s products or services, salvage value of project assets, and any tax benefits or subsidies received.'
              ]
            },
            {
              title: 'Cash Outflow',
              content: 'Cash outflow refers to the money moving out of your business. It encompasses all the expenses and payments your business must make to operate and grow.'
            },
            {
              title: 'Components of Cash Outflow',
              items: [
                'Operational Expenses: Cash outflow occurs when paying salaries to employees and covering rent expenses.',
                'Fixed Assets: Includes the money spent on purchasing fixed assets like equipment, machinery, or property.',
                'Loan Payments: Encompasses the interest payments your business is required to make on loans.'
              ]
            },
            {
              title: 'Net Cash Flow',
              content: 'Net cash flow is the difference between the cash coming into and going out of a project during each period. It shows the overall impact of the project on the business\'s cash balance. Net cash flow is crucial for calculating the net present value (NPV) and the internal rate of return (IRR), which are key methods in capital budgeting. NPV is the total of the discounted net cash flows of a project, subtracting the initial investment. IRR is the discount rate that makes a project\'s NPV zero. Both NPV and IRR assess the profitability and appeal of a project.'
            }
          ]
        },
        {
          heading: 'Why is cashflow management important?',
          content: 'Managing cash flow effectively is essential for the financial health of any business. It involves constant diligence, regular reporting, and strict control over expenses. Without careful cash flow management, your business can quickly face serious financial difficulties.'
        },
        {
          heading: 'Negative Outcomes of Poor Cash Flow Management',
          items: [
            'Insolvency: Without adequate cash flow, your business may struggle to meet its financial obligations, leading to insolvency.',
            'Increased Debt: Poor cash flow management can result in the need to take on additional debt to cover expenses, which can further strain your finances.',
            'Reduced Profit Margins: High levels of debt and poor cash flow can erode your profit margins, making it harder to sustain and grow your business.',
            'Liquidation: In the worst-case scenario, inadequate cash flow can force your business into liquidation, ending operations entirely.'
          ]
        },
        {
          heading: 'Benefits of Good Cash Flow Management',
          items: [
            'Operational Stability: Ensures that you have enough cash to cover day-to-day expenses, such as salaries, rent, and supplies.',
            'Growth and Investment: Provides the necessary funds to invest in new opportunities and expand your business.',
            'Financial Health: Helps maintain a healthy balance sheet, reducing the risk of financial distress and enhancing the overall stability of your business.'
          ]
        },
        'Cash forecasting: Predicting future cash flow, like planning a road trip and estimating gas stops.',
        'In summary, diligent cash flow management is crucial for maintaining the financial health and stability of your business, enabling you to meet obligations, avoid debt, and pursue growth opportunities.'
      ]
    },
    {
      id: 'foreign-exchange-risk',
      title: 'What is Foreign Exchange (FX) Risk and How to Manage It',
      excerpt: 'Understanding and mitigating the risks associated with currency fluctuations in international business.',
      readTime: '6 min read',
      date: 'July 20, 2024',
      content: [
        'In the interconnected world of global finance, businesses regularly engage in transactions involving multiple currencies. This exposure to various currencies brings along the potential for Foreign Exchange Risk, also known as FX Risk or Currency Risk. Understanding and effectively managing this risk is crucial for maintaining financial stability and ensuring profitability.',
        {
          heading: 'What is Foreign Exchange Risk?',
          content: 'Foreign Exchange Risk, or FX Risk, arises when a company engages in financial transactions denominated in a foreign currency. The risk is that fluctuations in exchange rates can lead to unexpected financial losses. For instance, if a company based in India enters into a contract with an American supplier to pay in US dollars, any significant fluctuation in the USD/INR exchange rate can impact the amount the company ultimately pays.'
        },
        {
          heading: 'Types of Foreign Exchange Risk',
          items: [
            'Transaction Risk: This occurs when a company has receivables or payables denominated in a foreign currency. Any change in the exchange rate between the time the transaction is agreed upon and the time it is settled can affect the cash flows.',
            'Translation Risk: This arises when a multinational company consolidates its financial statements. The assets and liabilities held in foreign currencies must be converted to the parent company\'s reporting currency, which can result in gains or losses due to exchange rate movements.',
            'Economic Risk: Also known as operating exposure, this type of risk affects a company\'s market value due to unexpected changes in exchange rates impacting future cash flows and competitive position.'
          ]
        },
        {
          heading: 'Mitigating Foreign Exchange Risk',
          subSections: [
            {
              title: 'Hedging with Forward Contracts',
              content: 'Forward contracts allow companies to lock in an exchange rate for a future date, providing certainty about the rate at which the currency will be exchanged. This can help manage transaction risk by stabilizing expected cash flows.'
            },
            {
              title: 'Natural Hedging',
              content: 'Companies can offset foreign currency exposure by matching revenues and expenses in the same currency. For example, an Indian-based company with significant sales in the United States can reduce FX Risk by also sourcing its supplies from the United States.'
            },
            {
              title: 'Currency Options',
              content: 'These financial derivatives provide the right, but not the obligation, to exchange currency at a predetermined rate on a specific date. This offers protection against unfavorable currency movements while allowing the company to benefit from favorable changes.'
            },
            {
              title: 'Diversification',
              content: 'By diversifying its operations and revenue streams across multiple currencies, a company can reduce the impact of adverse currency movements. This spread of risk can stabilize overall financial performance.'
            },
            {
              title: 'Leading and Lagging',
              content: 'Adjusting the timing of receivables and payables to take advantage of favorable exchange rates. For instance, if a currency is expected to strengthen, a company might accelerate receivables or delay payables.'
            },
            {
              title: 'Centralized Treasury Management',
              content: 'A centralized approach to managing foreign exchange can provide better oversight and coordination of currency risk management strategies. This includes using a centralized TMS module to streamline and control FX transactions effectively.'
            }
          ]
        },
        'The Role of Technology in FX Risk Management',
        'Advanced TMS play a critical role in managing currency risk. On-premise solutions designed for FX Risk Management can provide comprehensive tools for real-time tracking of currency exposures, automated reporting, and scenario analysis to assess potential impacts and plan mitigation strategies.'
      ]
    },
    {
      id: 'trade-finance',
      title: 'What is Trade Finance and Its Associated Risks',
      excerpt: 'Exploring the world of trade finance and strategies to manage its inherent risks in global trade.',
      readTime: '7 min read',
      date: 'July 15, 2024',
      content: [
        'Trade Finance is a critical component in the realm of international commerce, functioning as a pivotal mechanism that enables businesses to manage payments and mitigate risks associated with cross-border trade. Let\'s dive into the world of Trade Finance and understand the key risks it addresses.',
        {
          heading: 'What is Trade Finance',
          content: 'At its core, Trade Finance encompasses various financial instruments and products that facilitate international trade by providing a framework for the movement of goods and services between exporters and importers. The primary objective is to ensure that exporters receive timely payment for their shipments while importers receive their goods as expected. This process not only promotes the seamless flow of trade but also instills confidence among trading partners.'
        },
        {
          heading: 'Essential Trade Finance Instruments',
          content: 'Key instruments of Trade Finance include letters of credit, trade credit insurance, factoring, and export financing. These instruments serve to bridge the trust gap between parties who may be unfamiliar with each other or operating under different legal and economic environments. For instance, a letter of credit issued by the importer\'s bank guarantees payment to the exporter upon fulfillment of the specified conditions, thereby safeguarding both parties against default.'
        },
        {
          heading: 'Key Risks in Trade Finance',
          items: [
            'Credit Risk: The risk that the importer will not pay the exporter for the goods or services received. This can arise due to insolvency or other financial difficulties faced by the importer.',
            'Currency Risk: Fluctuations in exchange rates can impact the value of transactions conducted in foreign currencies, leading to potential financial losses.',
            'Political Risk: Changes in political conditions in the importer\'s country, such as government instability, expropriation, or changes in trade policies, can affect trade transactions.',
            'Transport Risk: Risks associated with the transportation of goods, including damage, loss, or delay, can disrupt the trade process and result in financial losses.',
            'Documentation Risk: Errors or discrepancies in trade documents can lead to non-payment or delays in payment, as financial institutions and customs authorities may reject incorrect or incomplete documentation.'
          ]
        },
        {
          heading: 'Mitigating Trade Finance Risks',
          items: [
            'Letters of Credit: This financial instrument ensures that the exporter gets paid once the terms and conditions agreed upon in the letter of credit are met. It mitigates credit risk by providing payment assurance.',
            'Trade Credit Insurance: This insurance protects exporters against non-payment by the importer, reducing credit risk and providing peace of mind.',
            'Currency Hedging: Using financial instruments such as forward contracts and options to lock in exchange rates can help manage currency risk and protect against unfavorable currency movements.',
            'Political Risk Insurance: This insurance covers losses arising from political events, providing protection against political risk in the importer\'s country.',
            'Robust Documentation Practices: Ensuring accurate and complete documentation can prevent delays and disputes, mitigating documentation risk. Utilizing digital solutions can streamline the documentation process and reduce errors.',
            'Freight Insurance: Insuring goods in transit can mitigate transport risk, ensuring that any losses or damages are compensated.'
          ]
        },
        'The Role of Technology in Trade Finance',
        'Advanced Trade Finance software solutions play a crucial role in managing Trade Finance Risk. These solutions can provide real-time monitoring, automate documentation processes, and integrate with any system to offer a comprehensive view of the lifecycle of trade instruments.'
      ]
    }
  ];

  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      return <p className="mb-4 text-gray-700 leading-relaxed">{content}</p>;
    }
    
    if (content.heading) {
      return (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">{content.heading}</h3>
          {content.content && <p className="mb-4 text-gray-700 leading-relaxed">{content.content}</p>}
          {content.items && (
            <ul className="list-disc pl-6 mb-4 space-y-2">
              {content.items.map((item: string, i: number) => (
                <li key={i} className="text-gray-700 leading-relaxed">{item}</li>
              ))}
            </ul>
          )}
          {content.subSections && content.subSections.map((subSection: any, i: number) => (
            <div key={i} className="mb-4">
              <h4 className="text-xl font-medium text-gray-900 mb-2">{subSection.title}</h4>
              <p className="text-gray-700 leading-relaxed">{subSection.content}</p>
              {subSection.items && (
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {subSection.items.map((item: string, j: number) => (
                    <li key={j} className="text-gray-700 text-sm">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-white">
      {/* Modern Mega Menu */}
      <ModernMegaMenu />
      
      <main className="relative z-10 pt-24 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, news, and updates about treasury management, financial technology, and industry trends.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {!activePost && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-100 relative">
                    <Image
                      src={`/blog/${post.id}-thumbnail.jpg`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button
                      onClick={() => {
                        setActivePost(post.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Blog Post */}
          {activePost && (
            <div className="max-w-4xl mx-auto">
              {blogPosts
                .filter(post => post.id === activePost)
                .map((post) => (
                  <article key={post.id} className="mb-16">
                    <div className="mb-8">
                      <div className="h-96 bg-gray-100 rounded-xl overflow-hidden relative">
                        <Image
                          src={`/blog/${post.id}-banner.jpg`}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
                      
                      <div className="prose max-w-none">
                        {post.content.map((content, index) => (
                          <React.Fragment key={index}>
                            {renderContent(content)}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                      <button
                        onClick={() => setActivePost(null)}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
                        Back to all posts
                      </button>
                      <button
                        onClick={scrollToTop}
                        className="text-gray-500 hover:text-gray-700 flex items-center"
                      >
                        Back to top
                        <ArrowUp className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on treasury management and financial technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 text-gray-900"
              />
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
