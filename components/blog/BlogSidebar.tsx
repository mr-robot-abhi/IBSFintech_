'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Building2, Users, Eye, TrendingUp, PiggyBank, FileText, DollarSign, BarChart3, CreditCard, Network } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogSidebarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  const enterpriseProducts = [
    {
      name: "Cashflow & Liquidity",
      href: "/products/enterprise/cashflow-liquidity",
      icon: Eye,
    },
    {
      name: "Currency (FX) Risk",
      href: "/products/enterprise/currency-fx-risk",
      icon: TrendingUp,
    },
    {
      name: "Investment (Money Market)",
      href: "/products/enterprise/investment-money-market",
      icon: PiggyBank,
    },
    {
      name: "Trade Finance",
      href: "/products/enterprise/trade-finance",
      icon: FileText,
    },
    {
      name: "Debt (Borrowings)",
      href: "/products/enterprise/debt-borrowings",
      icon: DollarSign,
    },
    {
      name: "Commodity Risk",
      href: "/products/enterprise/commodity-risk-management",
      icon: BarChart3,
    },
    {
      name: "Payments",
      href: "/products/enterprise/payments",
      icon: CreditCard,
    },
    {
      name: "Supply Chain Finance",
      href: "/products/enterprise/supply-chain-finance",
      icon: Network,
    },
  ];

  const smeProducts = [
    {
      name: "InnoTreasury",
      href: "/products/sme/innotreasury",
      icon: Building2,
    },
    {
      name: "InnoInvest",
      href: "/products/sme/innoinvest",
      icon: Users,
    },
  ];

  const solutions = [
    {
      name: "Cash Visibility & Forecasting",
      href: "/solutions/cash-visibility-forecasting",
      icon: Eye,
    },
    {
      name: "FX Risk Management",
      href: "/solutions/fx-currency-risk",
      icon: TrendingUp,
    },
    {
      name: "Money Market Management",
      href: "/solutions/investment-money-market",
      icon: PiggyBank,
    },
    {
      name: "Trade Finance",
      href: "/solutions/trade-finance",
      icon: FileText,
    },
    {
      name: "Debt Management",
      href: "/solutions/debt-management",
      icon: DollarSign,
    },
    {
      name: "Commodity Risk",
      href: "/solutions/commodity-risk",
      icon: BarChart3,
    },
    {
      name: "Treasury Payments",
      href: "/solutions/treasury-payments",
      icon: CreditCard,
    },
    {
      name: "Supply Chain Finance",
      href: "/solutions/supply-chain-finance",
      icon: Network,
    },
  ];

  return (
    <div className="w-full lg:w-80 space-y-8">
      {/* Search Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Search Blogs
        </h3>
        <form onSubmit={handleSearch} className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#241F5D] focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#241F5D] text-white py-2 px-4 rounded-lg hover:bg-[#3B3486] transition-colors duration-200 font-medium"
          >
            Search
          </button>
        </form>
      </div>

      {/* Products Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Explore our Products
        </h3>
        
        {/* Enterprise Products */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
            Enterprise
          </h4>
          <div className="space-y-2">
            {enterpriseProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <product.icon className="h-4 w-4 text-[#241F5D] group-hover:text-[#3B3486]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {product.name}
                  </span>
                </div>
                <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#241F5D] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* SME Products */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
            SME
          </h4>
          <div className="space-y-2">
            {smeProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <product.icon className="h-4 w-4 text-[#241F5D] group-hover:text-[#3B3486]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {product.name}
                  </span>
                </div>
                <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#241F5D] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/all_products"
          className="inline-flex items-center text-[#241F5D] hover:text-[#3B3486] font-medium text-sm transition-colors duration-200"
        >
          View All Products
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {/* Solutions Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Explore our Solutions
        </h3>
        <div className="space-y-2">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <solution.icon className="h-4 w-4 text-[#241F5D] group-hover:text-[#3B3486]" />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                  {solution.name}
                </span>
              </div>
              <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-[#241F5D] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <Link
          href="/all_solutions"
          className="inline-flex items-center text-[#241F5D] hover:text-[#3B3486] font-medium text-sm transition-colors duration-200 mt-4"
        >
          View All Solutions
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
