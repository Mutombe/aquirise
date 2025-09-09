import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Target, Shield, TrendingUp, Globe, MapPin } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  const slides = [
    {
      title: (
        <>
          Capital Deployment with <span className="text-gray-500">Local Insight</span>
        </>
      ),
      subtitle: "Deploying capital intelligently by leveraging deep, on-the-ground knowledge",
      image: "/home2.jpg",
      alt: "African business district with modern buildings"
    },
    {
      title: (
        <>
          Risk Mitigation and <span className="text-gray-500">Structuring</span>
        </>
      ),
      subtitle: "Actively managing risk through structuring and diversification",
      image: "/home3.jpg",
      alt: "African financial district skyline"
    },
    {
      title: (
        <>
          Sustainable Value <span className="text-gray-500">Creation</span>
        </>
      ),
      subtitle: "Building long-term value for our stakeholders",
      image: "/home4.jpg",
      alt: "African manufacturing and industrial activity"
    }
  ];

  // Preload images for faster loading
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden" id="home">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Fixed Grid Layout */}
              <div className="absolute inset-0 grid lg:grid-cols-2">
                {/* Content Side - Fixed Position */}
                <div className="relative z-10 flex items-start justify-center pt-32 px-8 lg:px-16 bg-white">
                  <div className="max-w-xl space-y-8">
                    <h1 
                      className="gravesend-sans text-5xl lg:text-6xl font-bold leading-tight transform transition-all duration-500 opacity-100"
                      style={{ color: '#273848' }}
                    >
                      {slide.title}
                    </h1>
                    <p className="gellix-font text-xl lg:text-2xl text-gray-600 leading-relaxed transform transition-all duration-500 opacity-100">
                      {slide.subtitle}
                    </p>
                    <button 
                      className="gravesend-sans group flex items-center space-x-3 px-8 py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: '#273848', color: 'white' }}
                    >
                      <span>Explore Opportunities</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Image Side - Fixed Dimensions */}
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0">
                    {imagesLoaded[index] ? (
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        style={{ 
                          objectPosition: 'center center',
                          minHeight: '100vh',
                          maxHeight: '100vh'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                        <div className="text-gray-500 text-lg">Loading...</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;