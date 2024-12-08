"use client";

import React from 'react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const sidebarItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { label: 'Car Rent', icon: 'car', path: '/car-rent' },
    { label: 'Insight', icon: 'insight', path: '/insight' },
    { label: 'Reimburse', icon: 'receipt', path: '/reimburse' },
    { label: 'Inbox', icon: 'inbox', path: '/inbox' },
    { label: 'Calender', icon: 'calendar', path: '/calendar' },
  ];

  const preferences = [
    { label: 'Settings', icon: 'settings-3', path: '/settings' },
    { label: 'Help Center', icon: 'help', path: '/help' },
    { label: 'Dark Mode', icon: 'moon-line', path: '/dark-mode' },

  ];
  return (
    <div className="bg-white p-6 flex flex-col w-60 gap-4 h-full">
      <div> 
        <p className='text-muted-foreground mb-4 text-sm'>Main Menu</p>
        {sidebarItems.map((item) => (
          <div
            key={item.path}
            className={`flex items-center space-x-4 p-3 rounded-md cursor-pointer hover:bg-gray-200 ${
              activeItem === item.path ? 'bg-primary-500 ' : ''
            }`}
            onClick={() => onItemClick(item.path)}
          >
            <i className={`ri-${item.icon}-line text-gray-500`} />
            <span className={`font-medium ${activeItem === item.path ?"text-white":"text-gray-700"}`}>{item.label}</span>
          </div>
        ))}
      </div>
      <div> 
        <p className='text-muted-foreground mb-4 text-sm'>Preferences</p>
        {preferences.map((item) => (
          <div
            key={item.path}
            className={`flex items-center space-x-4 p-3 rounded-md cursor-pointer hover:bg-gray-200 ${
              activeItem === item.path ? 'bg-primary-500 ' : ''
            }`}
            onClick={() => onItemClick(item.path)}
          >
            <i className={`ri-${item.icon}-line text-gray-500`} />
            <span className={`font-medium ${activeItem === item.path ?"text-white":"text-gray-700"}`}>{item.label}</span>
          </div>
        ))}
      </div>
      <div
            className="flex items-center space-x-4 p-3 rounded-md cursor-pointer hover:bg-gray-200 mt-auto"
          >
            <i className={` text-gray-500`} />
            <span className={`font-medium `}>{"Logout"}</span>
          </div>
      <div className="flex items-center space-x-4">
        <i className="ri-settings-3-line text-gray-500" />
        <i className="ri-help-line text-gray-500" />
        <i className="ri-logout-box-r-line text-gray-500" />
      </div>
    </div>
  );
};

export default Sidebar;