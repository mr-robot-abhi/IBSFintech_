import React from 'react';
import { Download, Award, BarChart2, Check, FileText } from 'lucide-react';

const PRIMARY_COLOR = '#241F5D';

export default function FactSheetPage() {
  const factSheets = [
    {
      title: 'IDC MarketScape 2023 Vendor Assessment',
      date: 'December 2023',
      size: '2.8 MB',
      type: 'PDF',
      icon: Award,
      preview: 'IBSFINtech recognized as a Major Player in global SaaS and Cloud-Enabled Enterprise Treasury and Risk Management Applications.'
    },
    {
      title: 'LSEG & IBSFINtech TMS Survey 2023',
      date: 'November 2023',
      size: '3.2 MB',
      type: 'PDF',
      icon: BarChart2,
      preview: 'Key findings from the global survey of corporate treasurers on evolving trends and challenges in treasury management.'
    },
    {
      title: 'Integration Capabilities Overview',
      date: 'October 2023',
      size: '2.5 MB',
      type: 'PDF',
      icon: FileText,
      preview: 'Comprehensive guide to IBSFINtech\'s seamless connectivity across treasury ecosystems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">IBSFINtech Fact Sheets</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Access our latest reports, surveys, and technical documentation for comprehensive insights into our treasury management solutions
          </p>
        </div>

        {/* IDC MarketScape Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
              <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>IBSFINtech: A Major Player in IDC MarketScape's 2023 Vendor Assessment</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 mb-6">
                  IBSFINtech, a renowned SaaS and cloud-enabled enterprise treasury and risk management application provider, has been recognized by IDC MarketScape as a Major Player for global SaaS and Cloud-Enabled Enterprise Treasury and Risk Management Applications 2023 Vendor Assessment. This recognition underscores IBSFINtech's commitment to delivering innovative solutions that empower organizations to efficiently manage liquidity, risks and financial operations.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights from the Survey</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Recognition by IDC MarketScape:</span> IBSFINtech has been acknowledged as a Major Player in the 2023 assessment, highlighting its strong capabilities and robust treasury and risk management offerings.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Comprehensive Solutions:</span> IBSFINtech's SaaS and cloud-enabled applications provide comprehensive solutions for managing cash flow, liquidity, risk and financial operations, catering to the needs of modern enterprises.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Focus on Business Resiliency:</span> In a time of global economic uncertainty, IBSFINtech's solutions help CFOs prioritize business resiliency and continuity by optimizing liquidity management and ensuring efficient working capital management.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Innovation and Expertise:</span> Led by a team of seasoned professionals, IBSFINtech leverages cutting-edge technology and deep industry expertise to deliver scalable and secure solutions that meet businesses' evolving needs.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">In the Words of Industry Experts</h3>
                <p className="text-gray-700 mb-6 italic">
                  "As reflected in Kevin Permenter's statement, the growing importance of robust treasury and risk management solutions makes IBSFINtech an essential partner for businesses seeking to handle the complexities of today's financial world. The solution is designed to optimize liquidity management, enhance working capital management and ensure business resiliency and continuity, helping businesses thrive in uncertain economic times."
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Learn More</h4>
                  <p className="text-gray-700 mb-4">
                    Visit IBSFINtech website or contact our team of experts to learn how IBSFINtech can transform your treasury and risk management operations. Join the ranks of leading enterprises that trust IBSFINtech for their financial management needs.
                  </p>
                  <p className="text-sm text-gray-600">
                    IDC MarketScape: Worldwide SaaS and Cloud-Enabled Enterprise Treasury and Risk Management Applications 2023 Vendor Assessment
                  </p>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                  style={{ backgroundColor: '#FF2E2E' }}
                >
                  <Download className="-ml-1 mr-2 h-5 w-5" />
                  Download Full Report
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h4 className="font-medium text-gray-900 mb-3">Key Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2" style={{ color: PRIMARY_COLOR }}>•</span>
                    <span>Recognized as Major Player by IDC MarketScape 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2" style={{ color: PRIMARY_COLOR }}>•</span>
                    <span>Comprehensive treasury and risk management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2" style={{ color: PRIMARY_COLOR }}>•</span>
                    <span>Focus on business resiliency and continuity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2" style={{ color: PRIMARY_COLOR }}>•</span>
                    <span>Cutting-edge technology with deep industry expertise</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Contact Our Experts</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn how IBSFINtech can transform your treasury operations with our award-winning solutions.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LSEG Survey Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <BarChart2 className="h-8 w-8 mr-3" style={{ color: PRIMARY_COLOR }} />
              <h2 className="text-3xl font-bold" style={{ color: PRIMARY_COLOR }}>LSEG & IBSFINtech TMS Survey 2023</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-700 mb-6">
                  In collaboration with the London Stock Exchange Group (LSEG), IBSFINtech conducted a comprehensive global survey of corporate treasurers to explore the evolving trends and challenges in the treasury landscape. The findings from this survey offer valuable insights into how Treasury Management Systems (TMS) are being leveraged to address these challenges and optimize financial operations.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights from the Survey</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Emerging Trends:</span> The survey underscores key trends, including the rising adoption of digital technologies, the transition to cloud-based solutions and the growing focus on real-time data analytics in treasury operations.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Challenges Faced by Treasurers:</span> Corporate treasurers identified several challenges, including managing liquidity, mitigating risks, ensuring compliance with regulatory requirements and enhancing the efficiency of financial processes.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                    <span><span className="font-semibold">Role of TMS in Addressing Challenges:</span> The report showcases how advanced TMS solutions, like those provided by IBSFINtech, are crucial in helping organizations overcome these challenges. Key benefits include improved cash flow forecasting, enhanced risk management capabilities, streamlined operations and better decision-making.</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlights from the Report</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <FileText className="h-5 w-5 mr-2" style={{ color: PRIMARY_COLOR }} />
                      Adoption of Cloud-Based TMS
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A significant trend observed in the survey is the shift towards cloud-based TMS solutions. These systems offer flexibility, scalability, and accessibility, enabling organizations to respond swiftly to market changes and operational needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <FileText className="h-5 w-5 mr-2" style={{ color: PRIMARY_COLOR }} />
                      Integration with Other Financial Systems
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The integration of TMS with other financial systems and platforms is critical for achieving a unified and cohesive view of financial data, thereby improving accuracy and reducing the risk of errors.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <FileText className="h-5 w-5 mr-2" style={{ color: PRIMARY_COLOR }} />
                      Focus on Data Security and Compliance
                    </h4>
                    <p className="text-gray-600">
                      With increasing concerns over data security, treasurers are prioritizing the implementation of robust security measures within their TMS. Additionally, compliance with global and local regulatory standards remains a top priority.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Download the Full Report</h4>
                  <p className="text-gray-700 mb-4">
                    To gain a deeper understanding of the findings and learn how TMS solutions are transforming the treasury function, download the full report. The report provides detailed analysis, expert commentary, and actionable recommendations for enhancing your treasury operations.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    style={{ backgroundColor: '#FF2E2E' }}
                  >
                    <Download className="-ml-1 mr-2 h-5 w-5" />
                    Download Survey Report
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h4 className="font-medium text-gray-900 mb-3">Key Statistics</h4>
                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>87%</div>
                    <p className="text-sm text-gray-600">of treasurers prioritize cloud-based TMS solutions for better flexibility and scalability</p>
                  </li>
                  <li className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>92%</div>
                    <p className="text-sm text-gray-600">consider real-time analytics crucial for strategic decision making in treasury operations</p>
                  </li>
                  <li className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold mb-1" style={{ color: PRIMARY_COLOR }}>78%</div>
                    <p className="text-sm text-gray-600">report challenges with system integration when implementing new TMS solutions</p>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Request More Information</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in learning more about how our TMS solutions can address your treasury challenges?
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    Contact Our Experts
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {factSheets.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <Download className="-ml-0.5 mr-1.5 h-3.5 w-3.5 text-gray-500" />
                          Download
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{doc.preview}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>{doc.date}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.size}</span>
                        <span className="mx-2">•</span>
                        <span>{doc.type}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          
          <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Looking for something specific?{' '}
              <a href="/contact" className="font-medium text-blue-600 hover:text-blue-500">
                Contact our team
              </a>{' '}
              for more information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
