import React from 'react';
import { Award, Heart, Users, Coffee, Calendar, TrendingUp, Globe, Zap, Smile } from 'lucide-react';

const LifeAtIBSFINtech = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new ideas that drive progress.',
      icon: <Zap className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve common goals.',
      icon: <Users className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering quality results.',
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices.',
      icon: <Heart className="h-8 w-8 text-red-600" />
    }
  ];

  const perks = [
    {
      title: 'Flexible Work',
      description: 'Hybrid work model with flexible hours to support work-life balance.',
      icon: <Calendar className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Learning & Development',
      description: 'Comprehensive training programs and support for professional growth.',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Global Opportunities',
      description: 'Work with international teams and clients across the globe.',
      icon: <Globe className="h-6 w-6 text-purple-600" />
    },
    {
      title: 'Wellness Programs',
      description: 'Health insurance, fitness subsidies, and mental health support.',
      icon: <Heart className="h-6 w-6 text-red-600" />
    },
    {
      title: 'Team Events',
      description: 'Regular team outings, celebrations, and social activities.',
      icon: <Users className="h-6 w-6 text-yellow-600" />
    },
    {
      title: 'Great Workspace',
      description: 'Modern offices designed for collaboration and productivity.',
      icon: <Coffee className="h-6 w-6 text-indigo-600" />
    }
  ];

  const testimonials = [
    {
      quote: "Working at IBSFINtech has been an incredible journey of growth and learning. The collaborative environment and challenging projects make every day exciting.",
      author: "Priya Sharma",
      role: "Senior Product Manager",
      tenure: "4 years at IBSFINtech"
    },
    {
      quote: "The work-life balance and supportive culture here are unmatched. I've grown both professionally and personally since joining the team.",
      author: "Rahul Mehta",
      role: "Lead Developer",
      tenure: "3 years at IBSFINtech"
    },
    {
      quote: "What I love most is the opportunity to work on innovative projects that make a real impact in the fintech space. The leadership team truly values employee input.",
      author: "Ananya Patel",
      role: "UX Designer",
      tenure: "2 years at IBSFINtech"
    }
  ];

  const gallery = [
    { id: 1, alt: "Team celebration", category: "events" },
    { id: 2, alt: "Office workspace", category: "office" },
    { id: 3, alt: "Team meeting", category: "team" },
    { id: 4, alt: "Hackathon event", category: "events" },
    { id: 5, alt: "Training session", category: "learning" },
    { id: 6, alt: "Team outing", category: "team" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Life at</span>
                  <span className="block text-blue-200">IBSFINtech</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Where innovation meets passion, and every team member contributes to our success story.
                </p>
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/company/careers"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Join Our Team
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The principles that guide our actions and decisions
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture & Environment */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Culture & Environment
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              A workplace where you can grow, innovate, and make an impact
            </p>
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Workspaces</h3>
                <p className="text-gray-600 mb-6">
                  Our modern offices are designed to foster collaboration and creativity. From open workspaces to quiet zones, we provide environments that suit different work styles and needs.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Learning & Growth</h3>
                <p className="text-gray-600">
                  We invest in our people's growth through continuous learning opportunities, mentorship programs, and challenging projects that push boundaries and expand skills.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {gallery.slice(0, 4).map((item) => (
                  <div key={item.id} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Smile className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perks & Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perks & Benefits
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We take care of our team with a comprehensive benefits package
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 rounded-md p-2">
                    {perk.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{perk.title}</h3>
                    <p className="mt-1 text-gray-600">{perk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hear From Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              What our employees say about working at IBSFINtech
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 inline"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-medium">
                  <p className="text-gray-900">{testimonial.author}</p>
                  <p className="text-blue-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to join our team?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            We're always looking for talented individuals who are passionate about making an impact in fintech.
          </p>
          <a
            href="/company/careers"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LifeAtIBSFINtech;
