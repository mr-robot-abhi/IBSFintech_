'use client';

import React, { useState } from 'react';
import { Play, Youtube } from 'lucide-react';

type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
};

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'ZclM0liK4G8',
      title: 'IBSFINtech Solution Overview',
      url: 'https://www.youtube.com/watch?v=ZclM0liK4G8',
      thumbnail: 'https://img.youtube.com/vi/ZclM0liK4G8/maxresdefault.jpg',
    },
    {
      id: 'zQi54UARXGQ',
      title: 'InTReaX®',
      url: 'https://www.youtube.com/watch?v=zQi54UARXGQ',
      thumbnail: 'https://img.youtube.com/vi/zQi54UARXGQ/maxresdefault.jpg',
    },
    {
      id: 'blY_eOWNCNg',
      title: 'VNDZY®',
      url: 'https://www.youtube.com/watch?v=blY_eOWNCNg',
      thumbnail: 'https://img.youtube.com/vi/blY_eOWNCNg/maxresdefault.jpg',
    },
    {
      id: 'tS1pLXJEIac',
      title: 'Benefits of IBSFINtech solution availed by clients',
      url: 'https://www.youtube.com/watch?v=tS1pLXJEIac',
      thumbnail: 'https://img.youtube.com/vi/tS1pLXJEIac/maxresdefault.jpg',
    },
    {
      id: 'SwASUo5cRGg',
      title: 'Grover Sir interview with Avinash Ananda (Whitepage international)',
      url: 'https://www.youtube.com/watch?v=SwASUo5cRGg',
      thumbnail: 'https://img.youtube.com/vi/SwASUo5cRGg/maxresdefault.jpg',
    },
    {
      id: '5ava2CtqVXc',
      title: 'Kumar Ayashkanta on IBSFINtech',
      url: 'https://www.youtube.com/watch?v=5ava2CtqVXc',
      thumbnail: 'https://img.youtube.com/vi/5ava2CtqVXc/maxresdefault.jpg',
    },
    {
      id: 'STN4Q8r01oA',
      title: 'Company offsite 2024',
      url: 'https://www.youtube.com/watch?v=STN4Q8r01oA',
      thumbnail: 'https://img.youtube.com/vi/STN4Q8r01oA/maxresdefault.jpg',
    },
    {
      id: 'KVvonwg3dcM',
      title: 'Moneycontrol Interview',
      url: 'https://www.youtube.com/watch?v=KVvonwg3dcM',
      thumbnail: 'https://img.youtube.com/vi/KVvonwg3dcM/maxresdefault.jpg',
    },
    {
      id: 'SLkamJSqI58',
      title: 'Short video on IBSFINtech',
      url: 'https://www.youtube.com/watch?v=SLkamJSqI58',
      thumbnail: 'https://img.youtube.com/vi/SLkamJSqI58/maxresdefault.jpg',
    },
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#241F5D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IBSFINtech Videos</h1>
            <p className="text-xl text-blue-100">Explore our collection of videos showcasing our solutions and insights</p>
          </div>
        </div>
      </div>

      {/* Video Player Section */}
      {selectedVideo && (
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[500px]"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-900 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h2>
                <button
                  onClick={closeVideo}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Videos Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 text-white p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Youtube className="h-4 w-4 mr-2 text-red-600" />
                  <span>Watch on YouTube</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to see more?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for the latest updates and insights.
          </p>
          <a
            href="https://www.youtube.com/c/IBSFINtech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            <Youtube className="h-6 w-6 mr-2" />
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
