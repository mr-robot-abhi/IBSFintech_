'use client';

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What are the key benefits of Corporate Treasury Management Solutions?',
      answer: 'Corporate Treasury Management Solutions offer enhanced business continuity, improved risk management, effective cash and liquidity management, and increased transparency through digitization and automation.'
    },
    {
      question: 'How do Corporate Treasury Management Solutions improve Cash and Liquidity Management?',
      answer: 'TMS integrates and consolidates data from various sources, allowing you to effectively plan and forecast cash flow, determine cash concentration, and generate accurate cash forecasts and variance reports.'
    },
    {
      question: 'What features do Corporate Treasury Management Solutions provide for risk management?',
      answer: 'Corporate Treasury Management Solutions offer comprehensive risk management by capturing, managing, and monitoring hedges for FX and commodities, providing variance reporting, and optimizing working capital.'
    },
    {
      question: 'Why is digitization important in Corporate Treasury Management?',
      answer: 'Digitization in Corporate Treasury Management enhances visibility, control, and efficiency, reducing reliance on spreadsheets and multiple systems, and providing real-time access to essential enterprise data for insightful decision-making.'
    },
    {
      question: 'How do these solutions ensure regulatory compliance and governance?',
      answer: 'Corporate Treasury Management Solutions ensure adherence to internal and external regulatory compliances, provide audit trails, establish strong governance in finance and treasury transactions, and offer comprehensive reporting for compliance audits.'
    },
    {
      question: 'What modules are included in Corporate Treasury Management Solutions?',
      answer: 'Modules include Cash and Liquidity Management, Hedge Accounting, Investment, Debt, Import-Export & Banking, Commodity, Currency/Foreign Exchange (FX), Document Management System, and Open Banking.'
    },
    {
      question: 'Can Corporate Treasury Management Solutions integrate with existing ERP systems?',
      answer: 'Yes, these solutions seamlessly integrate with existing ERP systems, market data providers, and banks, improving communication within the treasury department and the rest of the firm, and facilitating secure data transfer.'
    },
    {
      question: 'How do Corporate Treasury Management Solutions optimize full-time employee (FTE) utilization?',
      answer: 'By automating and digitizing treasury and trade finance workflows, these solutions reduce duplication of efforts, allowing employees to focus on strategic tasks and improving overall business efficiency.'
    },
    {
      question: 'What is the importance of transparency in Corporate Treasury Management?',
      answer: 'Transparency in Corporate Treasury Management allows for real-time decision support, provides a comprehensive 360-degree view of business data, and ensures a single source of truth, leading to better decision-making.'
    },
    {
      question: 'How do Corporate Treasury Management Solutions handle integration with banks and market data providers?',
      answer: 'These solutions offer API integrations for real-time data synchronization, streamline operations through open banking, and connect with market data providers to facilitate the efficient management of financial transactions and reporting needs.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#241F5D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">Find answers to common questions about our Corporate Treasury Management Solutions</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center ${openIndex === index ? 'bg-[#241F5D] text-white' : 'bg-white text-gray-800'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 py-4' : 'max-h-0'}`}
              >
                <div className="pb-4 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you with any questions about our solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#241F5D] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
