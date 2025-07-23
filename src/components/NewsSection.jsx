import React from 'react';
import { Calendar, ArrowRight, Megaphone } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'संस्कृत शिक्षा में नवीन पाठ्यक्रम की घोषणा',
      date: '15 दिसंबर 2024',
      description: 'आधुनिक तकनीक के साथ संस्कृत शिक्षा को जोड़ने का नया प्रयास',
      isBreaking: true,
    },
    {
      title: 'वार्षिक परीक्षा 2024 की तिथि घोषित',
      date: '10 दिसंबर 2024',
      description: 'सभी कक्षाओं की परीक्षा मार्च 2025 में आयोजित होगी',
      isBreaking: true,
    },
    {
      title: 'छात्रवृत्ति आवेदन की अंतिम तिथि 15 मार्च',
      date: '5 दिसंबर 2024',
      description: 'प्रतिभाशाली छात्रों के लिए विशेष छात्रवृत्ति योजना',
      isBreaking: false,
    },
    {
      title: 'शिक्षक भर्ती परीक्षा का परिणाम घोषित',
      date: '1 दिसंबर 2024',
      description: '500 शिक्षकों की भर्ती के लिए परिणाम जारी',
      isBreaking: false,
    },
  ];

  return (
    <>
      {/* Blink Animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        .blink {
          animation: blink 1s infinite;
        }
      `}</style>

      <section className="py-8 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Section Header */}
            <div className="bg-[#9c243a] text-white p-4 rounded-t shadow-lg">
              <h2 className="text-lg font-bold flex items-center justify-center">
                <Megaphone className="mr-2" size={20} />
                समाचार: तत् प्रसारणम्
                <span className="ml-2 px-2 py-1 bg-white text-[#9c243a] text-xs font-bold rounded blink">
                  BREAKING
                </span>
              </h2>
              <p className="text-center mt-1 text-pink-100 text-sm">
                परिषद् की नवीनतम घोषणाएं और महत्वपूर्ण सूचनाएं
              </p>
            </div>

            {/* News Items */}
            <div className="bg-white rounded-b shadow-lg">
              <div className="p-4 space-y-3">
                {newsItems.map((news, index) => (
                  <div
                    key={index}
                    className="group hover:bg-[#f8e9ec] p-3 rounded transition-all duration-300 border-l-2 border-transparent hover:border-[#9c243a] cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* Meta Info */}
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-[#9c243a] rounded-full"></div>

                          {news.isBreaking && (
                            <span className="px-1 py-0.5 bg-[#9c243a] text-white text-xs font-bold rounded blink">
                              BREAKING
                            </span>
                          )}

                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Calendar size={10} />
                            <span>{news.date}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-[#9c243a] transition-colors">
                          {news.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {news.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-[#9c243a] transition-colors opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="bg-gray-50 p-3 text-center border-t rounded-b">
                <button className="bg-[#9c243a] hover:bg-[#851e31] text-white px-4 py-2 rounded font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5">
                  सभी समाचार देखें →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
