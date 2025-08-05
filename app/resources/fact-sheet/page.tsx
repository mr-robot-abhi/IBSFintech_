import React from 'react';
import { Download } from 'lucide-react';

export default function FactSheetPage() {
  const factSheets = [
    {
      title: 'Company Overview',
      date: 'August 2025',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      title: 'Product Features',
      date: 'July 2025',
      size: '1.8 MB',
      type: 'PDF'
    },
    {
      title: 'Case Study - Banking Sector',
      date: 'June 2025',
      size: '3.1 MB',
      type: 'PDF'
    },
    {
      title: 'Market Analysis',
      date: 'May 2025',
      size: '2.7 MB',
      type: 'PDF'
    },
    {
      title: 'Technology Overview',
      date: 'April 2025',
      size: '2.2 MB',
      type: 'PDF'
    },
    {
      title: 'Client Success Stories',
      date: 'March 2025',
      size: '2.9 MB',
      type: 'PDF'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fact Sheets</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our latest fact sheets and company information
          </p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Available Documents</h2>
            <p className="mt-1 text-sm text-gray-500">Download our fact sheets in PDF format</p>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {factSheets.map((doc, index) => (
              <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>{doc.date}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.size}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.type}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
                    Download
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="bg-gray-50 px-6 py-4 text-right">
            <p className="text-sm text-gray-500">
              Need a specific document?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
