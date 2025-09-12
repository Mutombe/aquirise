import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Globe, Target, Users, TrendingUp, Compass, Map, Navigation } from 'lucide-react';
import { FaPeoplePulling } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdNaturePeople } from "react-icons/md";

// Custom hook for animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary: "text-white shadow-lg hover:shadow-xl",
    outline: "border-2 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm"
  };
  
  const primaryStyle = { 
    backgroundColor: '#273848',
    borderColor: '#273848'
  };
  
  const outlineStyle = {
    borderColor: 'white'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      onClick={onClick} 
      style={variant === 'primary' ? primaryStyle : outlineStyle}
      {...props}
    >
      <span className="gellix-font relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div 
        className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        style={{ backgroundColor: variant === 'primary' ? '#1a2631' : '#273848' }}
      ></div>
    </button>
  );
};

// Abstract Components
const AbstractCircles = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-15"
        style={{
          backgroundColor: '#273848',
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

const FloatingMaps = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute opacity-20 transform"
        style={{
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
        }}
      >
        <MapPin size={24 + Math.random() * 16} style={{ color: '#273848' }} />
      </div>
    ))}
  </div>
);

// Honeycomb Grid Component
const HoneycombGrid = () => {
  const images = [
    "/home2.jpg",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home3.jpg",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home4.jpg",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home8.jpg",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home9.jpg"
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] overflow-hidden">
      <div className="honeycomb-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="honeycomb-item group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="honeycomb-inner">
              <img
                src={src}
                alt={`Local insight ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center"
                style={{ backgroundColor: '#273848' }}
              >
                <Navigation size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Global business localization"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(39, 56, 72, 0.8)' }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
      </div>

      {/* Floating Abstract Elements */}
      <FloatingMaps className="w-full h-full" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          {/* Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-sm flex items-center justify-center border-2 border-white/20"
              style={{ backgroundColor: 'rgba(39, 56, 72, 0.2)' }}
            >
              <Compass size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
            </div>
          </div>
          
          <span 
            className="inline-block backdrop-blur-sm border px-3 py-2 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6 gellix-font"
            style={{ 
              backgroundColor: 'rgba(39, 56, 72, 0.2)',
              borderColor: 'rgba(39, 56, 72, 0.3)',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Our Foundation
          </span>
          
          <h1 
            className="gravesend-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            Local
            <span className="block text-gray-300">
              Intelligence
            </span>
          </h1>
          <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            Deep local insight drives intelligent capital deployment
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
          <PremiumButton onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Approach
            <ArrowRight size={18} />
          </PremiumButton>
          <PremiumButton variant="outline">
            View Opportunities
          </PremiumButton>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

// Main Content Section
const ContentSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section id="content" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <FloatingMaps className="top-20 right-20 w-64 h-64 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: '#273848' }}
          >
            Grounded in <span className="text-gray-500">Local Knowledge</span>
          </h2>
          <p 
            className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            We deploy capital with deep local insight, working closely with partners who understand market nuances
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          {/* Content */}
          <div 
            className="space-y-6 sm:space-y-8"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div className="space-y-6 gellix-font text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              <p>
                We deploy capital with deep local insight, working closely with partners who understand the nuances of their markets. This grounded approach allows us to identify underappreciated opportunities and navigate complexity with precision.
              </p>
              <p>
                Our localization strategy goes beyond surface-level market entry. We embed ourselves within communities, understanding cultural dynamics, regulatory landscapes, and emerging trends that others might miss.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              {[
                { number: '15+', label: 'Local Markets', icon: <Globe size={16} className="sm:w-5 sm:h-5" /> },
                { number: '50+', label: 'Local Partners', icon: <Users size={16} className="sm:w-5 sm:h-5" /> },
                { number: '95%', label: 'Success Rate', icon: <Target size={16} className="sm:w-5 sm:h-5" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#273848' }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div className="gravesend-sans text-xl sm:text-2xl font-bold" style={{ color: '#273848' }}>
                    {stat.number}
                  </div>
                  <div className="gellix-font text-xs sm:text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Honeycomb Images */}
          <div className="relative">
            <HoneycombGrid />
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Map size={24} className="sm:w-8 sm:h-8" />,
              title: "Market Intelligence",
              description: "Real-time insights from local networks and ground-level intelligence gathering"
            },
            {
              icon: <Navigation size={24} className="sm:w-8 sm:h-8" />,
              title: "Strategic Navigation",
              description: "Expert guidance through complex regulatory and cultural landscapes"
            },
            {
              icon: <Compass size={24} className="sm:w-8 sm:h-8" />,
              title: "Opportunity Discovery",
              description: "Identifying hidden gems through deep local relationships and market knowledge"
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-gray-50 p-6 sm:p-8 rounded-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#273848' }}
              >
                {feature.icon}
              </div>
              <h3 className="gravesend-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#273848' }}>
                {feature.title}
              </h3>
              <p className="gellix-font text-sm sm:text-base" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
const LocalizationPage = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -10px) rotate(1deg); }
          50% { transform: translate(-5px, -15px) rotate(-1deg); }
          75% { transform: translate(-10px, -5px) rotate(0.5deg); }
        }
        
        .honeycomb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          max-width: 400px;
          margin: 0 auto;
        }
        
        @media (min-width: 640px) {
          .honeycomb-grid {
            gap: 10px;
            max-width: 500px;
          }
        }
        
        .honeycomb-item {
          width: 80px;
          height: 69px;
          margin: 35px auto;
          position: relative;
          transform: rotate(30deg);
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @media (min-width: 640px) {
          .honeycomb-item {
            width: 120px;
            height: 104px;
            margin: 52px auto;
          }
        }
        
        .honeycomb-item:nth-child(4n+2) {
          margin-left: 40px;
        }
        
        .honeycomb-item:nth-child(4n+3) {
          margin-right: 40px;
        }
        
        @media (min-width: 640px) {
          .honeycomb-item:nth-child(4n+2) {
            margin-left: 60px;
          }
          
          .honeycomb-item:nth-child(4n+3) {
            margin-right: 60px;
          }
        }
        
        .honeycomb-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform: rotate(-30deg);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(39, 56, 72, 0.15);
        }
        
        @media (min-width: 640px) {
          .honeycomb-inner {
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(39, 56, 72, 0.15);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: rotate(30deg) translateY(30px);
          }
          to {
            opacity: 1;
            transform: rotate(30deg) translateY(0);
          }
        }
      `}</style>
      
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default LocalizationPage;