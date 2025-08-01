import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IBSFINtech</h3>
            <p className="text-gray-400 mb-4 text-justify">
              We are an enterprise TreasuryTech company (ISO/IEC 27001: 2013 certified) that facilitates end-to-end digitization of cash & liquidity, investment, treasury, risk, trade finance, supply chain finance management of the corporations all over the world.
            </p>
          </div>
          
          <div className="md:ml-16 lg:ml-24">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                    <ReactCountryFlag 
                      countryCode="IN"
                      svg
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                      title="India"
                    />
                  </div>
                  <span className="font-medium">INDIA</span>
                </div>
                <div className="space-y-2 text-gray-400 pl-8">
                  <div className="flex items-start space-x-2">
                    <Mail size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>contactus@ibsfintech.com</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Phone size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>(+91) 9591599720</div>
                      <div>(+91) 8041219181</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                    <ReactCountryFlag 
                      countryCode="US"
                      svg
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                      title="United States"
                    />
                  </div>
                  <span className="font-medium">USA</span>
                </div>
                <div className="space-y-2 text-gray-400 pl-8">
                  <div className="flex items-start space-x-2">
                    <Mail size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>sales-us@ibsfintech.com</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Phone size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>+1 (908) 529-1096</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on treasury management solutions and financial insights.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
          <p> 2025 IBS Fintech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}