import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

const MOCK_VIDEO = {
  id: '1',
  title: 'Building a Modern Web Application with React',
  channel: 'Tech Tutorials',
  views: '125K',
  description: `In this comprehensive tutorial, we'll walk through building a modern web application using React. 

Topics covered:
- Setting up your development environment
- Component architecture
- State management
- Routing
- API integration
- Best practices and optimization

Don't forget to like and subscribe for more content!`
};

export default function Watch() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <VideoPlayer {...MOCK_VIDEO} videoId={id || ''} />
    </div>
  );
}