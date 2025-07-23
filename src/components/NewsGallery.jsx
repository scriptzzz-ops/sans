import React, { useState } from 'react';
import { Calendar, Eye, ArrowRight, Image as ImageIcon } from 'lucide-react';

const NewsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsImages = [
    {
      id: 1,
      title: 'संस्कृत शिक्षा सम्मेलन 2024',
      description: 'राज्यव्यापी संस्कृत शिक्षा सम्मेलन का आयोजन',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      date: '15 दिसंबर 2024',
      category: 'conference',
      views: 1250,
    },
    {
      id: 2,
      title: 'छात्रवृत्ति वितरण समारोह',
      description: 'प्रतिभाशाली छात्रों को छात्रवृत्ति प्रदान की गई',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      date: '10 दिसंबर 2024',
      category: 'scholarship',
      views: 980,
    },
    {
      id: 3,
      title: 'शिक्षक सम्मान समारोह',
      description: 'उत्कृष्ट शिक्षकों को सम्मानित किया गया',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      date: '5 दिसंबर 2024',
      category: 'award',
      views: 756,
    },
    {
      id: 4,
      title: 'परीक्षा पंजीकरण कार्यक्रम',
      description: 'वार्षिक परीक्षा के लिए पंजीकरण प्रक्रिया',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
      date: '1 दिसंबर 2024',
      category: 'exam',
      views: 1456,
    },
    {
      id: 5,
      title: 'पुस्तक वितरण कार्यक्रम',
      description: 'निःशुल्क पुस्तकों का वितरण',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      date: '25 नवंबर 2024',
      category: 'distribution',
      views: 623,
    },
    {
      id: 6,
      title: 'सांस्कृतिक कार्यक्रम',
      description: 'वार्षिक सांस्कृतिक उत्सव का आयोजन',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      date: '20 नवंबर 2024',
      category: 'cultural',
      views: 892,
    },
  ];

  const categories = [
    { key: 'all', label: 'सभी' },
    { key: 'conference', label: 'सम्मेलन' },
    { key: 'scholarship', label: 'छात्रवृत्ति' },
    { key: 'award', label: 'पुरस्कार' },
    { key: 'exam', label: 'परीक्षा' },
  ];

  const filteredNews =
    selectedCategory === 'all'
      ? newsImages
      : newsImages.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="bg-[#9c243a] text-white p-4 rounded-t shadow-lg">
            <h2 className="text-lg font-bold flex items-center justify-center">
              <ImageIcon className="mr-2" size={20} />
              समाचार और कार्यक्रम
              <span className="ml-2 px-2 py-1 bg-yellow-400 text-[#9c243a] text-xs font-bold rounded animate-pulse">
                LIVE
              </span>
            </h2>
            <p className="mt-1 text-red-100 text-sm">
              परिषद् की गतिविधियों और महत्वपूर्ण कार्यक्रमों की झलकियां
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-3 py-1 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category.key
                  ? 'bg-[#9c243a] text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-[#9c243a] border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div className="bg-white rounded-b shadow-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNews.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-white border border-gray-100 rounded shadow hover:shadow-md transform transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-[#9c243a] text-white text-xs px-2 py-1 rounded flex items-center gap-1 font-semibold">
                      <Calendar size={10} />
                      <span>{item.date}</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <Eye size={10} />
                      <span>{item.views}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#9c243a] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={10} />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-[#9c243a] font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        विस्तार से
                        <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <button className="bg-[#9c243a] text-white px-6 py-2 rounded font-semibold text-sm hover:bg-[#831e32] transition-all duration-300 transform hover:-translate-y-0.5">
              और देखें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
