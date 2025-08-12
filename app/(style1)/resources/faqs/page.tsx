import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs - Corporate Treasury Management Solutions',
  description: 'Frequently asked questions about Corporate Treasury Management Solutions',
};

const FaqItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{question}</h3>
    <div className="text-gray-600">{answer}</div>
  </div>
);

export default function FaqsPage() {
  const faqs = [
    {
      question: '1. What are the key benefits of Corporate Treasury Management Solutions?',
      answer: 'Corporate Treasury Management Solutions offer enhanced business continuity, improved risk management, effective cash and liquidity management, and increased transparency through digitization and automation.'
    },
    {
      question: '2. How do Corporate Treasury Management Solutions improve Cash and Liquidity Management?',
      answer: 'TMS integrates and consolidates data from various sources, allowing you to effectively plan and forecast cash flow, determine cash concentration, and generate accurate cash forecasts and variance reports.'
    },
    {
      question: '3. What features do Corporate Treasury Management Solutions provide for risk management?',
      answer: 'Corporate Treasury Management Solutions offer comprehensive risk management by capturing, managing, and monitoring hedges for FX and commodities, providing variance reporting, and optimizing working capital.'
    },
    {
      question: '4. Why is digitization important in Corporate Treasury Management?',
      answer: 'Digitization in Corporate Treasury Management enhances visibility, control, and efficiency, reducing reliance on spreadsheets and multiple systems, and providing real-time access to essential enterprise data for insightful decision-making.'
    },
    {
      question: '5. How do these solutions ensure regulatory compliance and governance?',
      answer: 'Corporate Treasury Management Solutions ensure adherence to internal and external regulatory compliances, provide audit trails, establish strong governance in finance and treasury transactions, and offer comprehensive reporting for compliance audits.'
    },
    {
      question: '6. What modules are included in Corporate Treasury Management Solutions?',
      answer: 'Modules include Cash and Liquidity Management, Hedge Accounting, Investment, Debt, Import-Export & Banking, Commodity, Currency/Foreign Exchange (FX), Document Management System, and Open Banking.'
    },
    {
      question: '7. Can Corporate Treasury Management Solutions integrate with existing ERP systems?',
      answer: 'Yes, these solutions seamlessly integrate with existing ERP systems, market data providers, and banks, improving communication within the treasury department and the rest of the firm, and facilitating secure data transfer.'
    },
    {
      question: '8. How do Corporate Treasury Management Solutions optimize full-time employee (FTE) utilization?',
      answer: 'By automating and digitizing treasury and trade finance workflows, these solutions reduce duplication of efforts, allowing employees to focus on strategic tasks and improving overall business efficiency.'
    },
    {
      question: '9. What is the importance of transparency in Corporate Treasury Management?',
      answer: 'Transparency in Corporate Treasury Management allows for real-time decision support, provides a comprehensive 360-degree view of business data, and ensures a single source of truth, leading to better decision-making.'
    },
    {
      question: '10. How do Corporate Treasury Management Solutions handle integration with banks and market data providers?',
      answer: 'These solutions offer API integrations for real-time data synchronization, streamline operations through open banking, and connect with market data providers to facilitate the efficient management of financial transactions and reporting needs.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Corporate Treasury Management Solutions</h2>
      
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <FaqItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}
