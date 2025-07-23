import React from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const TopBanner = () => {
  const today = new Date();

  const currentDate = today.toLocaleDateString('hi-IN');
  const currentTime = today.toLocaleTimeString('hi-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-b border-orange-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-between text-xs">

          {/* Left: Date & Time */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-700">
              <Calendar size={12} className="text-orange-600" />
              <span className="font-medium">आज की तारीख: {currentDate}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700">
              <Clock size={12} className="text-orange-600" />
              <span className="font-medium">समय: {currentTime}</span>
            </div>
          </div>

          {/* Center: Visitor Stats */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-700">
              <Users size={12} className="text-green-600" />
              <span>
                आज के विज़िटर: <strong className="text-green-700">2,847</strong>
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-700">
              <Award size={12} className="text-blue-600" />
              <span>
                कुल छात्र: <strong className="text-blue-700">45,692</strong>
              </span>
            </div>
          </div>

          {/* Right: Weather & Server Status */}
          <div className="flex items-center space-x-4">
            <div className="text-gray-700">
              <span>
                पटना: <strong className="text-orange-700">28°C</strong>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">सर्वर सक्रिय</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBanner;
