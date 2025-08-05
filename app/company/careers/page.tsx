import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  department: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function CareersPage() {
  const jobOpenings: JobOpening[] = [
    {
      id: 'dev-2023-001',
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Bangalore, India',
      department: 'Engineering',
      experience: '5+ years',
      description: 'We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building user interfaces and implementing features for our treasury management platform.',
      requirements: [
        '5+ years of experience with React.js and TypeScript',
        'Strong understanding of state management (Redux/Context API)',
        'Experience with responsive and adaptive design',
        'Familiarity with RESTful APIs and GraphQL',
        'Knowledge of modern authorization mechanisms'
      ],
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable components and front-end libraries',
        'Translate designs and wireframes into high-quality code',
        'Optimize components for maximum performance'
      ],
      postedDate: '2023-08-01'
    },
    {
      id: 'sales-2023-002',
      title: 'Enterprise Sales Executive',
      type: 'Full-time',
      location: 'New York, USA',
      department: 'Sales',
      experience: '7+ years',
      description: 'We are seeking an experienced Enterprise Sales Executive to drive revenue growth by acquiring new enterprise clients in the financial services sector.',
      requirements: [
        '7+ years of enterprise software sales experience',
        'Proven track record of meeting/exceeding sales quotas',
        'Experience selling to financial institutions',
        'Strong understanding of treasury/finance technology',
        'Excellent communication and presentation skills'
      ],
      responsibilities: [
        'Identify and qualify new sales opportunities',
        'Develop and execute strategic account plans',
        'Conduct product demonstrations and presentations',
        'Negotiate and close business'
      ],
      postedDate: '2023-08-05'
    },
    {
      id: 'intern-2023-003',
      title: 'Product Management Intern',
      type: 'Internship',
      location: 'Remote',
      department: 'Product',
      experience: 'Student/Recent Graduate',
      description: 'Gain hands-on experience in product management by working closely with our product team on real projects and initiatives.',
      requirements: [
        'Currently pursuing or recently completed a degree in Business, CS, or related field',
        'Strong analytical and problem-solving skills',
        'Excellent written and verbal communication',
        'Interest in fintech and financial services'
      ],
      responsibilities: [
        'Assist with market research and competitive analysis',
        'Help gather and analyze product requirements',
        'Support product documentation and training materials',
        'Participate in team meetings and strategy sessions'
      ],
      postedDate: '2023-07-28'
    },
    {
      id: 'devops-2023-004',
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Pune, India',
      department: 'Engineering',
      experience: '4+ years',
      description: 'Join our DevOps team to build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        '4+ years of experience in DevOps or related role',
        'Experience with AWS, Docker, and Kubernetes',
        'Proficiency in infrastructure as code (Terraform/CloudFormation)',
        'Strong scripting skills (Bash, Python)',
        'Experience with monitoring and logging tools'
      ],
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage and optimize cloud infrastructure',
        'Implement security best practices',
        'Troubleshoot production issues'
      ],
      postedDate: '2023-08-03'
    },
    {
      id: 'ux-2023-005',
      title: 'UX/UI Designer',
      type: 'Full-time',
      location: 'Mumbai, India',
      department: 'Design',
      experience: '3+ years',
      description: 'We are looking for a talented UX/UI Designer to create amazing user experiences for our financial products.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in design tools (Figma, Sketch, Adobe XD)',
        'Strong portfolio of design projects',
        'Experience with user research and testing',
        'Knowledge of front-end development is a plus'
      ],
      responsibilities: [
        'Create user flows, wireframes, and prototypes',
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Collaborate with product and engineering teams'
      ],
      postedDate: '2023-07-31'
    },
    {
      id: 'support-2023-006',
      title: 'Customer Support Engineer',
      type: 'Full-time',
      location: 'Singapore',
      department: 'Customer Success',
      experience: '2+ years',
      description: 'Provide technical support to our customers and help them maximize the value of our products.',
      requirements: [
        '2+ years of experience in technical support or related role',
        'Strong problem-solving skills',
        'Excellent communication skills',
        'Basic understanding of databases and APIs',
        'Customer-focused mindset'
      ],
      responsibilities: [
        'Respond to customer inquiries and resolve issues',
        'Troubleshoot technical problems',
        'Document solutions and create knowledge base articles',
        'Escalate complex issues to appropriate teams'
      ],
      postedDate: '2023-08-02'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and performance-based bonuses.',
      icon: <DollarSign className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Flexible Work',
      description: 'Work from home or our modern offices with flexible hours.',
      icon: <Clock className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Learning & Development',
      description: 'Budget for courses, conferences, and professional development.',
      icon: <Award className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Great Team',
      description: 'Work with talented, passionate, and supportive colleagues.',
      icon: <Users className="h-6 w-6 text-orange-600" />
    }
  ];

  const departments = ['All Departments', 'Engineering', 'Product', 'Design', 'Sales', 'Marketing', 'Customer Success', 'Finance', 'HR'];
  const locations = ['All Locations', 'Bangalore', 'Mumbai', 'Pune', 'New York', 'Singapore', 'Remote'];
  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Help us build the future of treasury and financial management technology.
            </p>
            <div className="mt-10">
              <a
                href="#open-positions"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                View Open Positions
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Work at IBSFINtech?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            We're building a company where the best talent can thrive and do their best work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div id="open-positions" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Find your next career opportunity with us
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  id="department"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="All Departments"
                >
                  {departments.map((dept) => (
                    <option key={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  id="location"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="All Locations"
                >
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select
                  id="job-type"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="All Types"
                >
                  {jobTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {jobOpenings.map((job) => (
                <li key={job.id} className="hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-blue-600 truncate">{job.title}</h3>
                        <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                          <div className="flex items-center text-sm text-gray-500">
                            <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {job.type}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="text-gray-500">Posted on {new Date(job.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={`/company/careers/${job.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* No Jobs Message */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No open positions</h3>
              <p className="mt-1 text-sm text-gray-500">There are currently no open positions matching your filters.</p>
            </div>
          )}
        </div>
      </div>

      {/* Culture Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:p-16 lg:p-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold text-white">Our Culture</h2>
              <p className="mt-4 max-w-3xl text-lg text-blue-100">
                At IBSFINtech, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our employees to do their best work and make a real impact.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Inclusive and diverse workplace',
                  'Continuous learning opportunities',
                  'Work-life balance',
                  'Innovation-driven environment',
                  'Employee recognition programs',
                  'Social and team-building activities'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Don't see a role that fits?</h3>
                <p className="text-gray-600 mb-4">
                  We're always looking for talented individuals to join our team. Send us your resume and we'll contact you when a matching position becomes available.
                </p>
                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit Your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
