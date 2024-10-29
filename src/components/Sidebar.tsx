import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Music2, Newspaper } from 'lucide-react';

const menuItems = [
  { icon: Home, text: 'Home' },
  { icon: Compass, text: 'Explore' },
  { icon: Clock, text: 'History' },
  { icon: ThumbsUp, text: 'Liked Videos' },
  { icon: PlaySquare, text: 'Your Videos' },
  { icon: Film, text: 'Movies' },
  { icon: Gamepad, text: 'Gaming' },
  { icon: Music2, text: 'Music' },
  { icon: Newspaper, text: 'News' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white overflow-y-auto">
      <nav className="p-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <item.icon className="w-6 h-6" />
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}