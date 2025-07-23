import React from 'react';
import { Calendar, Bell, Download, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const MainContent = () => {
  const announcements = [
    { text: 'संस्कृत शिक्षा में नवीन पाठ्यक्रम की घोषणा', date: '15 दिसंबर 2024', isNew: true },
    { text: 'वार्षिक परीक्षा 2024 की तिथि घोषित', date: '10 दिसंबर 2024', isNew: true },
    { text: 'छात्रवृत्ति आवेदन की अंतिम तिथि 15 मार्च', date: '5 दिसंबर 2024', isNew: false },
    { text: 'शिक्षक भर्ती परीक्षा का परिणाम घोषित', date: '1 दिसंबर 2024', isNew: false },
    { text: 'नए संस्थानों के लिए मान्यता आवेदन', date: '25 नवंबर 2024', isNew: false }
  ];

  const quickLinks = [
    { text: 'परीक्षा फॉर्म भरें', icon: Download },
    { text: 'परिणाम देखें', icon: ExternalLink },
    { text: 'प्रवेश पत्र डाउनलोड करें', icon: Download },
    { text: 'पाठ्यक्रम डाउनलोड करें', icon: Download },
    { text: 'शुल्क जमा करें', icon: ExternalLink },
    { text: 'छात्रवृत्ति आवेदन', icon: Download },
    { text: 'मान्यता आवेदन', icon: ExternalLink },
    { text: 'शिकायत दर्ज करें', icon: ExternalLink }
  ];

  return (
    <>
      {/* Blinking Animation for Labels */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        .blink {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Left: Carousel Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded shadow overflow-hidden">
                <ImageCarousel />
              </div>
            </div>

            {/* Right: Announcements & Quick Links */}
            <div className="space-y-6">

              {/* Announcements */}
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-[#9c243a] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm font-semibold">
                    <Bell size={16} />
                    <span>महत्वपूर्ण सूचनाएं</span>
                    <span className="bg-yellow-400 text-[#9c243a] text-xs px-1.5 py-0.5 rounded font-bold blink">LIVE</span>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-3">
                  {announcements.map((item, index) => (
                    <div key={index} className="p-2 rounded hover:bg-red-50 transition-all border-l-2 hover:border-[#9c243a] border-transparent">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1 text-sm">
                          {item.isNew && (
                            <span className="bg-[#9c243a] text-white text-xs px-1 py-0.5 rounded font-bold blink">NEW</span>
                          )}
                          <p className="text-gray-700 hover:text-[#9c243a]">{item.text}</p>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock size={10} />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-gray-400 hover:text-[#9c243a] opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 text-center p-2 border-t">
                  <button className="text-[#9c243a] text-sm font-semibold hover:underline">
                    सभी सूचनाएं देखें →
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="bg-[#9c243a] text-white px-4 py-3 flex items-center space-x-2 text-sm font-semibold">
                  <ExternalLink size={16} />
                  <span>त्वरित लिंक</span>
                </div>

                <div className="px-4 py-3 space-y-2">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        href="#"
                        key={index}
                        className="flex justify-between items-center px-3 py-2 text-sm rounded border bg-white border-gray-200 hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon size={14} className="text-[#9c243a]" />
                          <span className="font-medium text-gray-800">
                            {link.text}
                          </span>
                        </div>
                        <ArrowRight size={12} className="text-gray-400 hover:text-[#9c243a]" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
