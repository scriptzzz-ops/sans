import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-orange-500 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src="/BSSB-Logo2.png"
              alt="Bihar Logo"
              className="w-36 h-24 object-contain"
            />
          </div>

          {/* Center - Text */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              बिहार संस्कृत शिक्षा बोर्ड
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">
              Bihar Sanskrit Shiksha Board
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-2">
              17 बैक हार्डिंग रोड, पटना - 800001
            </p>
          </div>

          {/* Right - Logo */}
          <div className="flex items-center">
            <img
              src="BSSB-Logo1.jpg"
              alt="Digital India"
              className="w-20 h-20 object-contain"
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
