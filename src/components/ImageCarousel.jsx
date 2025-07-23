import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'बिहार संस्कृत शिक्षा की प्रगति',
      description: 'नवाचार और तकनीक के साथ शिक्षा की नई उड़ान',
      image: '/banner-1.webp',
    },
    {
      id: 2,
      title: 'सम्मान समारोह 2024',
      description: 'प्रतिभाशाली छात्रों को किया गया सम्मानित',
      image: '/banner-2.webp',
    },
    {
      id: 3,
      title: 'डिजिटल संस्कृत शिक्षा',
      description: 'ऑनलाइन शिक्षण और परीक्षा प्रणाली की शुरुआत',
      image: '/banner-3.webp',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-64 md:h-80 overflow-hidden shadow-lg rounded border border-gray-200">
      {/* Slide Track */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="max-w-lg">
                  <h2 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">{slide.description}</p>
                  <div className="mt-3">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded text-sm font-semibold transition-colors">
                      विस्तार से पढ़ें
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={18} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={18} className="text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-1 rounded-full transition-all duration-300"
      >
        {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
