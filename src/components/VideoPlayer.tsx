import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, User } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  channel: string;
  views: string;
  description: string;
}

export default function VideoPlayer({ videoId, title, channel, views, description }: VideoPlayerProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <img 
          src={`https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=800&fit=crop`} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <User className="w-10 h-10 bg-gray-200 rounded-full p-2 mr-3" />
            <div>
              <h3 className="font-medium">{channel}</h3>
              <p className="text-sm text-gray-600">{views} views</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-red-600">
              <ThumbsUp className="w-5 h-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center gap-1 hover:text-red-600">
              <ThumbsDown className="w-5 h-5" />
              <span>Dislike</span>
            </button>
            <button className="flex items-center gap-1 hover:text-red-600">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
}