import React from 'react';
import { Search, Menu, Video, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 px-4">
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="flex items-center gap-1">
            <Video className="w-8 h-8 text-red-600" />
            <span className="text-xl font-semibold">YouTube</span>
          </a>
        </div>
        
        <div className="flex-1 max-w-2xl px-4">
          <div className="flex">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}