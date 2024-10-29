import React from 'react';
import { Clock, ThumbsUp, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

export default function VideoCard({ id, thumbnail, title, channel, views, timestamp }: VideoCardProps) {
  return (
    <Link to={`/watch/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            <Clock className="inline-block w-3 h-3 mr-1" />
            {timestamp}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 group-hover:text-red-600">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <User className="w-4 h-4 mr-1" />
            <span>{channel}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <ThumbsUp className="w-3 h-3 mr-1" />
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </Link>
  );
}