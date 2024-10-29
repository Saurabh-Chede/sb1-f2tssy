import React from 'react';
import VideoCard from '../components/VideoCard';
import SearchBar from '../components/SearchBar';

const MOCK_VIDEOS = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    title: 'Building a Modern Web Application with React',
    channel: 'Tech Tutorials',
    views: '125K',
    timestamp: '12:45'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    title: 'Complete JavaScript Course 2024',
    channel: 'Code Master',
    views: '89K',
    timestamp: '45:12'
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    title: 'Digital Marketing Strategies That Work',
    channel: 'Marketing Pro',
    views: '230K',
    timestamp: '28:30'
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    title: 'Financial Planning for Beginners',
    channel: 'Money Matters',
    views: '95K',
    timestamp: '15:20'
  },
  {
    id: '5',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    title: 'Advanced CSS Techniques',
    channel: 'Web Design Hub',
    views: '150K',
    timestamp: '22:15'
  },
  {
    id: '6',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    title: 'Machine Learning Fundamentals',
    channel: 'AI Academy',
    views: '180K',
    timestamp: '34:40'
  }
];

export default function Home() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_VIDEOS.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </main>
    </div>
  );
}