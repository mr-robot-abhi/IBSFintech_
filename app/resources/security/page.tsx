import React from 'react';
import { Shield, Lock, EyeOff, Server, Key, FileLock, Check, ShieldCheck, Cpu, Users, Database, Cloud, AlertOctagon } from 'lucide-react';
import Image from 'next/image';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Compliance',
      description: 'Fully compliant with industry standards and regulations.'
    },
    {
      icon: <EyeOff className="h-6 w-6 text-purple-600" />,
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication.'
    },
    {
      icon: <Server className="h-6 w-6 text-red-600" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with regular security audits.'
    },
    {
      icon: <Key className="h-6 w-6 text-yellow-600" />,
      title: 'Data Privacy',
      description: 'Strict data privacy policies and procedures in place.'
    },
    {
      icon: <FileLock className="h-6 w-6 text-indigo-600" />,
      title: 'Backup & Recovery',
      description: 'Automated backups and disaster recovery solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/Banner & Tile Images for Resources & Company page/IBSFINtech-Security.jpg"
            alt="Security"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prioritizing Security, Prioritizing You
            </h1>
            <p className="mt-6 text-xl text-white max-w-4xl">
              IBSFINtech is an ISO/IEC 27001:2013 certified company, demonstrating our commitment to maintaining robust security measures aligned with international standards.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At IBSFINtech, we prioritize the security of our clients' data through a comprehensive set of measures designed to protect against unauthorized access and data breaches.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Column 1 */}
          <div className="space-y-12">
            {/* Compliance and Certification */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Compliance and Certification</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">ISO 27001 Certification:</span> IBSFINtech is ISO 27001 certified, reflecting our commitment to maintaining high standards in data privacy and security.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Regulatory Compliance:</span> We comply with data protection laws within Indian regulations, ensuring that our practices meet stringent legal requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Encryption */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Data Encryption</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Encryption at Rest:</span> Customer data stored in IBSFINtech applications is encrypted, providing an additional layer of security against unauthorized access.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Secure Communication:</span> Data in transit is protected using the HTTPS protocol by default, ensuring secure communication channels between clients and our servers.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure by Default */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Secure by Default</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Session Management:</span> Our session management includes stringent security policies, such as robust password and user ID policies, to prevent unauthorized access.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Password Security:</span> We use encryption for passwords and enforce comprehensive password policies to ensure strong user authentication.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Vault Integration:</span> Sensitive information, including certificates and API keys, is securely stored using vault integration, protecting critical data from exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-12">
            {/* Access Controls */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Access Controls</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Client User Access:</span> Robust Access Control mechanism is implemented in the application to ensure only the authorized user has the designated rights as required by the client.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Support & Maintenance Access:</span> Access for support personnel is granted on an as-needed basis, ensuring they can only access what is necessary to perform their duties.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Segregation of Duties:</span> Our policy of restricted access and segregation of duties reduces the risk of unnecessary data exposure and enhances overall security.
                  </p>
                </div>
              </div>
            </div>

            {/* Logical Security */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Logical Security</h2>
              </div>
              <p className="text-gray-600">
                Regular Vulnerability Assessment and Penetration Testing (VAPT) is conducted every six months or after major releases to identify and mitigate potential security vulnerabilities. Our products are VAPT certified, assuring our clients of robust security measures.
              </p>
            </div>

            {/* Physical Security */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="ml-3 text-xl font-semibold text-gray-900">Physical Security</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Secure Infrastructure:</span> We use Oracle OCI for our servers and environment, providing a highly secure, reliable, and scalable infrastructure.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Redundancy and Reliability:</span> Oracle OCI ensures high availability and redundancy, with multiple availability domains and regions.
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <span className="font-medium">Compliance and Certifications:</span> Oracle OCI complies with various industry standards and regulations, including ISO/IEC 27001, SOC, and GDPR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Security is Our Priority</h2>
            <p className="text-gray-600 mb-6">
              We continually review and update our security measures to address emerging threats. Our dedication to security is a core aspect of our service commitment, providing peace of mind to our clients as they entrust us with their critical business information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Security Team
              </a>
              <a
                href="/resources/whitepapers"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Security Whitepapers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
