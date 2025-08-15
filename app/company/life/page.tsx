import React from 'react';
import { Award, Heart, Users, Coffee, Calendar, TrendingUp, Globe, Zap, Smile, Star } from 'lucide-react';
import Image from 'next/image';

const LifeAtIBSFINtech = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Innovation runs in our blood.',
      icon: <Zap className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Customer Focused',
      description: 'Customer is the king and our first priority.',
      icon: <Heart className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Dynamic Work Environment',
      description: 'We cherish everyday at work.',
      icon: <Users className="h-8 w-8 text-green-600" />
    },
    {
      title: 'Passion',
      description: 'Passionate about every single thing we do.',
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: 'Exponential Learning',
      description: 'Sky\'s the limit to learning',
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Challenging Environment',
      description: 'We grow with each challenge.',
      icon: <Globe className="h-8 w-8 text-orange-600" />
    },
    {
      title: 'Equality',
      description: 'Diversity is our strength.',
      icon: <Users className="h-8 w-8 text-teal-600" />
    },
    {
      title: 'Strive for Excellence',
      description: 'Hungry for growth, we strive for excellence at each step.',
      icon: <Star className="h-8 w-8 text-yellow-600" />
    }
  ];

  const testimonials = [
    {
      quote: "It has been a very exciting and enriching experience being a part IBSFINtech since the beginning of its journey. Here, you get to wear multiple hats and take more responsibilities. Management is highly knowledgeable, encouraging and passionate. I have grown personally as well as professionally while working at IBSFINtech. Proud to be an IBSFINtech'er.",
      author: "Sanghmitra",
      role: "Team Member"
    },
    {
      quote: "I started my career with IBSFINtech and I must say, it is a great company to work with. I got wonderful opportunity to work on projects from across the industry and enhance my technical skills. Definitely a place where you can grow with a great team that is always willing to go an extra mile to help their fellow colleagues.",
      author: "Nilesh",
      role: "Team Member"
    },
    {
      quote: "Excellent work environment. The positive can-do environment at IBSFINtech encourages me to take joy in my work and also provide support to others. Everyday is a learning process here and a new experience to take home.",
      author: "Srinidhi",
      role: "Team Member"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Outing.jpg */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Banner & Tile Images for Resources & Company page/Life-at-IBSFINtech.jpg"
            alt="Life at IBSFINtech"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8 xl:mt-12">
              <div className="sm:text-left lg:text-left">
                <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-2xl max-w-md ml-0">
                  <h1 className="text-2xl tracking-tight font-extrabold text-white sm:text-3xl">
                    <span className="block">Life at</span>
                    <span className="block text-blue-200">IBSFINtech</span>
                  </h1>
                  <p className="mt-2 text-sm text-blue-100 sm:mt-3 sm:text-base">
                    Where innovation meets passion, and every team member contributes to our success story.
                  </p>
                  <div className="mt-4 sm:flex sm:justify-start lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/company/careers"
                        className="inline-flex items-center justify-center px-4 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
                      >
                        View Jobs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We are IBSFINtech!
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
              We are the Chosen Ones. We Stand together Today & Tomorrow.
              <br />
              Always a Family, Always a Team.
              <br />
              We are IBSFINtech Family.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Greatest Strength</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At IBSFINtech, our greatest strength is "OUR PEOPLE". Every IBSFINtech'er has played a pivotal role in driving the growth of the company. Working together as one big family, IBSFINtech team enjoys a mutual passion for FinTech establishing a strong bond within the entire team.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Headquartered in Bengaluru – The Silicon Valley of India, IBSFINtech is India's fastest growing FinTech company in the space of Treasury, Risk & Trade Finance Management®.
              </p>
              <p className="text-gray-600 leading-relaxed">
                IBSFINtech team enjoys a mutual passion for FinTech establishing a strong bond within the entire team.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/LifeAtIBSFINtech.jpg"
                alt="Life at IBSFINtech"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The principles that guide our actions and decisions
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun at Work Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fun at Work
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
              Excellent work environment. The positive can-do environment at IBSFINtech encourages me to take joy in my work and also provide support to others. Everyday is a learning process here and a new experience to take home.
            </p>
          </div>
          
          {/* Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/Banner & Tile Images for Resources & Company page/Vibrant-culture-IBSFINtech.jpg"
                alt="Vibrant Culture at IBSFINtech"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/LifeAtIBSFINtech.jpg"
                alt="Life at IBSFINtech"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Testimonials */}
      <div className="py-16 bg-gray-50">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
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
                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-medium">
                  <p className="text-gray-900">{testimonial.author}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome to Innovation Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to the World of Innovation
            </h2>
            <p className="mt-6 max-w-3xl text-xl text-gray-600 mx-auto leading-relaxed">
              FinTech is the booming sector of the industry today. Do you enjoy challenges and working in a dynamic environment? If yes, then IBSFINtech is your dream organization.
            </p>
            <p className="mt-6 max-w-3xl text-lg text-gray-600 mx-auto leading-relaxed">
              At IBSFINtech, we know our greatest strength is YOU! We are always looking for great talent and passionate folks to join our team. If honesty, integrity, discipline, and responsibility match your characteristics, write to us today at{' '}
              <a href="mailto:career@ibsfintech.com" className="text-blue-600 hover:text-blue-800 font-medium">
                career@ibsfintech.com
              </a>
            </p>
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
