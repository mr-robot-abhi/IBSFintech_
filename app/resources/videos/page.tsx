'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Play, Calendar, Clock, ExternalLink, Filter, Search, Grid, List, X, Youtube, Eye, Users, TrendingUp } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  date: string;
  type: string;
  series?: string;
  views?: string;
  tags?: string[];
}

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'duration'>('date');

  const categories = [
    { id: 'all', name: 'All Videos', count: 0, icon: '🎬' },
    { id: 'overview', name: 'Solution Overview', count: 0, icon: '🔍' },
    { id: 'products', name: 'Product Videos', count: 0, icon: '💼' },
    { id: 'testimonials', name: 'Client Testimonials', count: 0, icon: '💬' },
    { id: 'interviews', name: 'Interviews', count: 0, icon: '🎤' },
    { id: 'company', name: 'Company Events', count: 0, icon: '🏢' },
    { id: 'webinars', name: 'Webinars', count: 0, icon: '📚' },
  ];

  const videos: Video[] = [
    // IBSFINtech Videos
    {
      id: 1,
      title: 'IBSFINtech Solution Overview',
      description: 'Comprehensive overview of IBSFINtech treasury management solutions and how we help organizations optimize their financial operations.',
      category: 'overview',
      thumbnail: 'https://img.youtube.com/vi/ZclM0liK4G8/maxresdefault.jpg',
      videoId: 'ZclM0liK4G8',
      duration: '3:45',
      date: '2024',
      type: 'overview',
      views: '2.5K',
      tags: ['treasury', 'overview', 'solutions']
    },
    {
      id: 2,
      title: 'InTReaX® - Treasury Management Solution',
      description: 'Discover our flagship InTReaX® treasury management platform that revolutionizes corporate treasury operations.',
      category: 'products',
      thumbnail: 'https://img.youtube.com/vi/zQi54UARXGQ/maxresdefault.jpg',
      videoId: 'zQi54UARXGQ',
      duration: '4:12',
      date: '2024',
      type: 'product',
      views: '1.8K',
      tags: ['InTReaX', 'treasury', 'platform']
    },
    {
      id: 3,
      title: 'VNDZY® - Vendor Management Platform',
      description: 'Learn about VNDZY®, our comprehensive vendor management solution that streamlines supplier relationships.',
      category: 'products',
      thumbnail: 'https://img.youtube.com/vi/blY_eOWNCNg/maxresdefault.jpg',
      videoId: 'blY_eOWNCNg',
      duration: '3:28',
      date: '2024',
      type: 'product',
      views: '1.2K',
      tags: ['VNDZY', 'vendor', 'management']
    },
    {
      id: 4,
      title: 'Client Benefits of IBSFINtech Solutions',
      description: 'Real benefits and value delivered to our clients through our innovative treasury management solutions.',
      category: 'testimonials',
      thumbnail: 'https://img.youtube.com/vi/tS1pLXJEIac/maxresdefault.jpg',
      videoId: 'tS1pLXJEIac',
      duration: '5:15',
      date: '2024',
      type: 'testimonial',
      views: '3.1K',
      tags: ['client', 'benefits', 'testimonials']
    },
    {
      id: 5,
      title: 'Grover Sir Interview with Avinash Ananda',
      description: 'Whitepage international interview discussing IBSFINtech\'s vision and future roadmap in treasury technology.',
      category: 'interviews',
      thumbnail: 'https://img.youtube.com/vi/SwASUo5cRGg/maxresdefault.jpg',
      videoId: 'SwASUo5cRGg',
      duration: '8:32',
      date: '2024',
      type: 'interview',
      views: '4.2K',
      tags: ['interview', 'leadership', 'vision']
    },
    {
      id: 6,
      title: 'Kumar Ayashkanta on IBSFINtech',
      description: 'Leadership insights and company vision from Kumar Ayashkanta, discussing IBSFINtech\'s growth strategy.',
      category: 'interviews',
      thumbnail: 'https://img.youtube.com/vi/5ava2CtqVXc/maxresdefault.jpg',
      videoId: '5ava2CtqVXc',
      duration: '6:45',
      date: '2024',
      type: 'interview',
      views: '2.8K',
      tags: ['leadership', 'strategy', 'growth']
    },
    {
      id: 7,
      title: 'Company Offsite 2024',
      description: 'Highlights from our annual company offsite event showcasing team building and company culture.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/STN4Q8r01oA/maxresdefault.jpg',
      videoId: 'STN4Q8r01oA',
      duration: '4:18',
      date: '2024',
      type: 'company',
      views: '1.5K',
      tags: ['company', 'culture', 'team']
    },
    {
      id: 8,
      title: 'Moneycontrol Interview',
      description: 'Exclusive interview with Moneycontrol on IBSFINtech\'s growth and market position in treasury technology.',
      category: 'interviews',
      thumbnail: 'https://img.youtube.com/vi/KVvonwg3dcM/maxresdefault.jpg',
      videoId: 'KVvonwg3dcM',
      duration: '7:22',
      date: '2024',
      type: 'interview',
      views: '3.7K',
      tags: ['media', 'interview', 'growth']
    },
    {
      id: 9,
      title: 'IBSFINtech Short Overview',
      description: 'Quick overview of IBSFINtech and our mission to transform corporate treasury management.',
      category: 'overview',
      thumbnail: 'https://img.youtube.com/vi/SLkamJSqI58/maxresdefault.jpg',
      videoId: 'SLkamJSqI58',
      duration: '2:15',
      date: '2024',
      type: 'overview',
      views: '5.1K',
      tags: ['overview', 'mission', 'treasury']
    },
    
    // Webinar Highlights
    {
      id: 10,
      title: 'Rise of Digital Corporate Treasury - Part 1',
      description: 'Part 1 of our collaboration with LSEG on digital treasury transformation and industry insights.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/nVVWwmUgcvA/maxresdefault.jpg',
      videoId: 'nVVWwmUgcvA',
      duration: '45:30',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '8.9K',
      tags: ['webinar', 'digital', 'treasury', 'LSEG']
    },
    {
      id: 11,
      title: 'Rise of Digital Corporate Treasury - Part 2',
      description: 'Part 2: Exploring treasury reimagining in a tech-driven world with expert panel discussions.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/oo_jBacRnDE/maxresdefault.jpg',
      videoId: 'oo_jBacRnDE',
      duration: '52:15',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '7.2K',
      tags: ['webinar', 'technology', 'treasury']
    },
    {
      id: 12,
      title: 'Rise of Digital Corporate Treasury - Part 3',
      description: 'Part 3: Advanced treasury strategies and implementations for modern organizations.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/F9lz-Dw6EoY/maxresdefault.jpg',
      videoId: 'F9lz-Dw6EoY',
      duration: '48:42',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '6.8K',
      tags: ['webinar', 'strategies', 'implementation']
    },
    {
      id: 13,
      title: 'Rise of Digital Corporate Treasury - Part 4',
      description: 'Part 4: Future trends and emerging technologies in corporate treasury management.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/pVpB5EZfHcs/maxresdefault.jpg',
      videoId: 'pVpB5EZfHcs',
      duration: '51:08',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '6.1K',
      tags: ['webinar', 'future', 'technology']
    },
    {
      id: 14,
      title: 'Rise of Digital Corporate Treasury - Part 5',
      description: 'Part 5: Q&A and expert panel discussion on treasury transformation challenges.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/TkCq9YqWsr0/maxresdefault.jpg',
      videoId: 'TkCq9YqWsr0',
      duration: '38:25',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '5.4K',
      tags: ['webinar', 'Q&A', 'expert', 'panel']
    },
    {
      id: 15,
      title: 'Rise of Digital Corporate Treasury - Part 6',
      description: 'Part 6: Implementation strategies and best practices for treasury transformation.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/pvaXswvAaPg/maxresdefault.jpg',
      videoId: 'pvaXswvAaPg',
      duration: '44:17',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '5.9K',
      tags: ['webinar', 'best practices', 'implementation']
    },
    {
      id: 16,
      title: 'Rise of Digital Corporate Treasury - Part 7',
      description: 'Part 7: Risk management in digital treasury and compliance considerations.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/aUyHyyNR4xY/maxresdefault.jpg',
      videoId: 'aUyHyyNR4xY',
      duration: '46:33',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '5.2K',
      tags: ['webinar', 'risk management', 'compliance']
    },
    {
      id: 17,
      title: 'Rise of Digital Corporate Treasury - Part 8',
      description: 'Part 8: Compliance and regulatory considerations in digital treasury operations.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/A7HBqhKWB-g/maxresdefault.jpg',
      videoId: 'A7HBqhKWB-g',
      duration: '42:19',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '4.8K',
      tags: ['webinar', 'compliance', 'regulatory']
    },
    {
      id: 18,
      title: 'Rise of Digital Corporate Treasury - Part 9',
      description: 'Part 9: Success stories and case studies from treasury transformation projects.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/OyxzaquNjos/maxresdefault.jpg',
      videoId: 'OyxzaquNjos',
      duration: '49:56',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '4.5K',
      tags: ['webinar', 'case studies', 'success stories']
    },
    {
      id: 19,
      title: 'Rise of Digital Corporate Treasury - Part 10',
      description: 'Part 10: Closing thoughts and next steps for treasury transformation journey.',
      category: 'webinars',
      thumbnail: 'https://img.youtube.com/vi/ZPH24AGzvJE/maxresdefault.jpg',
      videoId: 'ZPH24AGzvJE',
      duration: '35:28',
      date: '2021',
      type: 'webinar',
      series: 'Digital Treasury 2021',
      views: '4.1K',
      tags: ['webinar', 'closing', 'next steps']
    },
    
    // Visual Identity Launch
    {
      id: 20,
      title: '14th Anniversary - Visual Identity Launch Part 1',
      description: 'Celebrating our journey with industry leaders and heartfelt wishes on our 14th anniversary.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/Tqy_9FD_Cy8/maxresdefault.jpg',
      videoId: 'Tqy_9FD_Cy8',
      duration: '5:42',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '3.3K',
      tags: ['anniversary', 'launch', 'celebration']
    },
    {
      id: 21,
      title: '14th Anniversary - Visual Identity Launch Part 2',
      description: 'Honourable Chairman\'s message and industry leader insights on IBSFINtech\'s transformation.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/9Spkbhd_VO8/maxresdefault.jpg',
      videoId: '9Spkbhd_VO8',
      duration: '6:18',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '2.9K',
      tags: ['chairman', 'leadership', 'transformation']
    },
    {
      id: 22,
      title: '14th Anniversary - Visual Identity Launch Part 3',
      description: 'Transformation journey and future vision for IBSFINtech in the treasury technology space.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/YT2mr76CVFk/maxresdefault.jpg',
      videoId: 'YT2mr76CVFk',
      duration: '4:55',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '2.6K',
      tags: ['transformation', 'vision', 'future']
    },
    {
      id: 23,
      title: '14th Anniversary - Visual Identity Launch Part 4',
      description: 'Technology showcase and innovation highlights from our treasury management platform.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/gzNmNDr9nIk/maxresdefault.jpg',
      videoId: 'gzNmNDr9nIk',
      duration: '5:33',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '2.4K',
      tags: ['technology', 'innovation', 'showcase']
    },
    {
      id: 24,
      title: '14th Anniversary - Visual Identity Launch Part 5',
      description: 'Client testimonials and success stories showcasing the value of our solutions.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/xQwtdFf5OmI/maxresdefault.jpg',
      videoId: 'xQwtdFf5OmI',
      duration: '6:47',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '2.8K',
      tags: ['testimonials', 'success', 'clients']
    },
    {
      id: 25,
      title: '14th Anniversary - Visual Identity Launch Part 6',
      description: 'Closing ceremony and future roadmap for IBSFINtech\'s continued growth.',
      category: 'company',
      thumbnail: 'https://img.youtube.com/vi/tURS29N2FcM/maxresdefault.jpg',
      videoId: 'tURS29N2FcM',
      duration: '4:21',
      date: '2024',
      type: 'company',
      series: 'Visual Identity Launch',
      views: '2.1K',
      tags: ['ceremony', 'roadmap', 'growth']
    }
  ];

  // Update category counts
  useEffect(() => {
    categories.forEach(cat => {
      if (cat.id === 'all') {
        cat.count = videos.length;
      } else {
        cat.count = videos.filter(video => video.category === cat.id).length;
      }
    });
  }, []);

  // Enhanced search and filtering
  const filteredVideos = useMemo(() => {
    let filtered = videos;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    // Search filter (enhanced to search in title, description, tags, and series)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        video.series?.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query)
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return parseDuration(a.duration) - parseDuration(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [videos, selectedCategory, searchQuery, sortBy]);

  const parseDuration = (duration: string) => {
    const parts = duration.split(':').map(Number);
    return parts[0] * 60 + parts[1];
  };

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const VideoCard = ({ video }: { video: Video }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="relative aspect-video bg-gray-200 overflow-hidden" onClick={() => openVideo(video)}>
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
            <Play className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {video.series && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {video.series}
          </div>
        )}
        {video.views && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            {video.views}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1.5" />
          <span>{video.date}</span>
          <span className="mx-2">•</span>
          <span className="capitalize">{video.category}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {video.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>

        {video.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {video.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <button 
            onClick={() => openVideo(video)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
            <Play className="h-4 w-4 mr-2" />
            Watch Now
          </button>
          
          <a
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            YouTube
          </a>
        </div>
      </div>
    </div>
  );

  const VideoListItem = ({ video }: { video: Video }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0 cursor-pointer" onClick={() => openVideo(video)}>
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-32 h-20 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
              <Play className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
            {video.duration}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {video.category}
            </span>
            {video.series && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {video.series}
              </span>
            )}
            {video.views && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                <Eye className="h-3 w-3 mr-1" />
                {video.views}
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {video.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>

          {video.tags && (
            <div className="flex flex-wrap gap-1 mb-3">
              {video.tags.slice(0, 4).map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>{video.date}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => openVideo(video)}
                className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              >
                <Play className="h-4 w-4 mr-1" />
                Watch
              </button>
              
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Videos & Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of videos, product demos, client testimonials, and expert webinars
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search videos, tags, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort and View Mode */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'duration')}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="duration">Sort by Duration</option>
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredVideos.length} of {videos.length} videos
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear search
            </button>
          )}
        </div>

        {/* Videos Grid/List */}
        {filteredVideos.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'space-y-4'
          }>
            {filteredVideos.map((video) => (
              viewMode === 'grid' ? (
                <VideoCard key={video.id} video={video} />
              ) : (
                <VideoListItem key={video.id} video={video} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <Play className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No videos found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery ? `No videos match "${searchQuery}". Try adjusting your search.` : 'Try adjusting your filter criteria.'}
            </p>
          </div>
        )}

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{selectedVideo.title}</h3>
                <button
                  onClick={closeVideo}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-600 mb-3">{selectedVideo.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Duration: {selectedVideo.duration}</span>
                  <span>Category: {selectedVideo.category}</span>
                  {selectedVideo.views && <span>Views: {selectedVideo.views}</span>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <div className="flex items-center mb-4">
                <Youtube className="h-8 w-8 text-white mr-3" />
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Watch More Videos on YouTube
                </h2>
              </div>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-red-100">
                Subscribe to our YouTube channel for the latest insights, product updates, webinars, and industry trends in treasury management technology.
              </p>
              <div className="mt-4 flex items-center text-red-100">
                <Users className="h-5 w-5 mr-2" />
                <span>Join thousands of treasury professionals</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col space-y-3 lg:mt-0 lg:ml-8 lg:space-y-0 lg:space-x-3 lg:flex-row">
              <a
                href="https://www.youtube.com/@ibsfintechindia4263"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 transition-colors duration-300"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Visit Channel
              </a>
              <a
                href="https://www.youtube.com/@ibsfintechindia4263"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-800 transition-colors duration-300"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Subscribe
              </a>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
          <div className="px-6 py-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Need More Information?
            </h3>
            <p className="text-blue-100 mb-4">
              Contact our team to learn more about our treasury management solutions
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
