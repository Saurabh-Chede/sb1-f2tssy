import React from 'react';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const videos: Video[] = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
    title: 'Building a Modern Web Application',
    channel: 'Tech Academy',
    views: '120K views',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    title: 'Complete JavaScript Course 2024',
    channel: 'Code Master',
    views: '89K views',
    timestamp: '5 days ago'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&q=80',
    title: 'Machine Learning Fundamentals',
    channel: 'AI Hub',
    views: '250K views',
    timestamp: '1 week ago'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80',
    title: 'Web Development Tips & Tricks',
    channel: 'DevPro',
    views: '75K views',
    timestamp: '3 days ago'
  },
  {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=80',
    title: 'UX Design Principles',
    channel: 'Design Masters',
    views: '180K views',
    timestamp: '6 days ago'
  },
  {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80',
    title: 'Mobile App Development Guide',
    channel: 'App Academy',
    views: '95K views',
    timestamp: '4 days ago'
  }
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col gap-2">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="object-cover w-full h-full hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gray-200"></div>
            </div>
            <div>
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <p className="text-sm text-gray-600">
                {video.views} • {video.timestamp}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}