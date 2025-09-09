import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Zap, Users, Target, Star, Layers, Sparkles, Award } from 'lucide-react';

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

// Abstract Growth Elements
const GrowthSpirals = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `growth-spiral ${8 + Math.random() * 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: 0.15
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path
            d="M20,20 Q30,10 20,10 Q10,10 20,20 Q30,30 20,30 Q10,30 20,20"
            stroke="#273848"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <TrendingUp size={16} style={{ color: '#273848' }} className="animate-bounce" />
        </svg>
      </div>
    ))}
  </div>
);

const FloatingStars = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        <Star size={12 + Math.random() * 8} style={{ color: '#273848' }} className="opacity-30" />
      </div>
    ))}
  </div>
);

// Organic Honeycomb Layout
const OrganicHoneycomb = () => {
  const images = [
    "/home4.jpg",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home8.jpg",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home2.jpg",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home9.jpg",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] flex items-center justify-center">
      <div className="organic-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="organic-cell group cursor-pointer"
            style={{ 
              animationDelay: `${index * 0.15}s`,
              '--index': index
            }}
          >
            <div className="organic-inner">
              <img
                src={src}
                alt={`Value creation ${index + 1}`}
                className="cell-image"
              />
              <div className="cell-overlay">
                <div className="overlay-content">
                  <Sparkles size={20} className="sm:w-7 sm:h-7 text-white mb-2" />
                  <div className="text-white text-xs font-medium">Growth</div>
                </div>
              </div>
              <div className="growth-indicator">
                <TrendingUp size={12} className="sm:w-4 sm:h-4 text-green-400" />
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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Value creation and growth"
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

      {/* Abstract Growth Elements */}
      <GrowthSpirals className="w-full h-full" />
      <FloatingStars className="w-full h-full" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          {/* Animated Growth Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-sm flex items-center justify-center border-2 border-white/20 animate-pulse"
                style={{ backgroundColor: 'rgba(39, 56, 72, 0.2)' }}
              >
                <TrendingUp size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <div 
                className="absolute inset-0 rounded-sm border-2 animate-ping"
                style={{ borderColor: 'rgba(39, 56, 72, 0.5)' }}
              ></div>
              <div 
                className="absolute inset-4 rounded-sm border animate-pulse"
                style={{ borderColor: 'rgba(39, 56, 72, 0.3)' }}
              ></div>
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
            Strategic Partnership
          </span>
          
          <h1 
            className="gravesend-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            Value
            <span className="block text-gray-300">
              Creation
            </span>
          </h1>
          <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            Building long-term value through strategic partnership and operational excellence
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
          <PremiumButton onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}>
            Explore Our Impact
            <ArrowRight size={18} />
          </PremiumButton>
          <PremiumButton variant="outline">
            Value Framework
          </PremiumButton>
        </div>
      </div>
      
      {/* Value Indicators */}
      <div className="absolute bottom-20 right-20 opacity-60 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {[
            { icon: <Award size={20} />, value: '95%', label: 'Success Rate' },
            { icon: <Users size={20} />, value: '2.5M+', label: 'Lives Impacted' },
            { icon: <TrendingUp size={20} />, value: '15x', label: 'Avg. Returns' }
          ].map((metric, i) => (
            <div key={i} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-sm px-4 py-2">
              <div style={{ color: 'rgba(39, 56, 72, 0.8)' }}>{metric.icon}</div>
              <div>
                <div className="text-white font-bold text-sm">{metric.value}</div>
                <div className="text-gray-200 text-xs">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Content Section
const ContentSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section id="content" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <FloatingStars className="top-20 left-20 w-80 h-80 hidden lg:block" />
      <GrowthSpirals className="bottom-20 right-20 w-64 h-64 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: '#273848' }}
          >
            Creating <span className="text-gray-500">Lasting Value</span>
          </h2>
          <p 
            className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            Beyond capital, we bring strategic partnership and operational insight to help ventures scale and thrive
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
                Beyond capital, we bring strategic partnership, operational insight and governance support to help ventures scale and thrive. We are committed to building long-term value for our stakeholders and the communities they serve.
              </p>
              <p>
                Our value creation approach combines hands-on operational support with strategic guidance, ensuring sustainable growth that benefits all stakeholders.
              </p>
            </div>
            
            {/* Value Creation Process */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-sm p-6 sm:p-8 border border-gray-100">
              <h4 className="gravesend-sans text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#273848' }}>
                Our Value Creation Process
              </h4>
              <div className="space-y-4">
                {[
                  { phase: 'Strategic Planning', progress: 95, color: 'bg-green-500' },
                  { phase: 'Operational Support', progress: 88, color: 'bg-blue-500' },
                  { phase: 'Market Expansion', progress: 75, color: 'bg-purple-500' },
                  { phase: 'Exit Preparation', progress: 60, color: 'bg-orange-500' }
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex justify-between items-center mb-2">
                      <span className="gellix-font text-sm font-medium" style={{ color: '#273848' }}>
                        {item.phase}
                      </span>
                      <span className="text-xs" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                        {item.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Organic Honeycomb */}
          <div className="relative">
            <OrganicHoneycomb />
          </div>
        </div>
        
        {/* Value Creation Framework */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-sm p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 mx-2 sm:mx-0">
          <div className="text-center mb-8 sm:mb-12">
            <h3 
              className="gravesend-sans text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: '#273848' }}
            >
              Value Creation <span className="text-gray-500">Framework</span>
            </h3>
            <p 
              className="gellix-font text-base sm:text-lg px-4"
              style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            >
              A holistic approach to building sustainable value across all dimensions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Target size={24} className="sm:w-8 sm:h-8" />,
                title: "Strategic Guidance",
                description: "Market positioning, competitive strategy, and growth planning",
                color: "#273848",
                features: ["Market Analysis", "Strategy Development", "Competitive Intelligence"]
              },
              {
                icon: <Zap size={24} className="sm:w-8 sm:h-8" />,
                title: "Operational Excellence",
                description: "Process optimization, technology integration, and efficiency gains",
                color: "#273848",
                features: ["Process Optimization", "Technology Integration", "Quality Management"]
              },
              {
                icon: <Users size={24} className="sm:w-8 sm:h-8" />,
                title: "Governance Support",
                description: "Board governance, risk management, and stakeholder alignment",
                color: "#273848",
                features: ["Board Advisory", "Risk Framework", "Stakeholder Management"]
              }
            ].map((pillar, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-sm p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden">
                  {/* Animated background */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: pillar.color }}
                  ></div>
                  
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm text-white flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.icon}
                  </div>
                  
                  <h4 className="gravesend-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#273848' }}>
                    {pillar.title}
                  </h4>
                  
                  <p className="gellix-font text-sm sm:text-base mb-4 sm:mb-6" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        ></div>
                        <span className="gellix-font text-xs sm:text-sm" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const ValueCreationPage = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes growth-spiral {
          0% { transform: rotate(0deg) scale(1); opacity: 0.1; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 0.3; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.1; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, -15px); }
          75% { transform: translate(-10px, -5px); }
        }
        
        .organic-grid {
          display: grid;
          grid-template-columns: repeat(4, 70px);
          grid-template-rows: repeat(3, 70px);
          gap: 10px;
          justify-content: center;
          align-items: center;
        }
        
        @media (min-width: 640px) {
          .organic-grid {
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 15px;
          }
        }
        
        .organic-cell {
          width: 70px;
          height: 70px;
          position: relative;
          animation: organic-rise 1s ease-out forwards;
          opacity: 0;
        }
        
        @media (min-width: 640px) {
          .organic-cell {
            width: 100px;
            height: 100px;
          }
        }
        
        .organic-cell:nth-child(1) { grid-column: 1; grid-row: 2; border-radius: 50%; }
        .organic-cell:nth-child(2) { grid-column: 2; grid-row: 1; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        .organic-cell:nth-child(3) { grid-column: 3; grid-row: 2; border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
        .organic-cell:nth-child(4) { grid-column: 4; grid-row: 1; border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; }
        .organic-cell:nth-child(5) { grid-column: 1; grid-row: 3; border-radius: 15px; }
        .organic-cell:nth-child(6) { grid-column: 2; grid-row: 3; border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%; }
        .organic-cell:nth-child(7) { grid-column: 3; grid-row: 3; border-radius: 50% 20% 50% 20%; }
        .organic-cell:nth-child(8) { grid-column: 4; grid-row: 2; border-radius: 12px; }
        
        @media (min-width: 640px) {
          .organic-cell:nth-child(5) { border-radius: 25px; }
          .organic-cell:nth-child(8) { border-radius: 20px; }
        }
        
        .organic-inner {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
          border-radius: inherit;
        }
        
        .organic-cell:hover .organic-inner {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 20px 40px rgba(39, 56, 72, 0.3);
        }
        
        .cell-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          border-radius: inherit;
        }
        
        .organic-cell:hover .cell-image {
          transform: scale(1.2);
          filter: brightness(0.8) saturate(1.2);
        }
        
        .cell-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(39, 56, 72, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          border-radius: inherit;
        }
        
        .organic-cell:hover .cell-overlay {
          opacity: 1;
        }
        
        .overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        
        .organic-cell:hover .overlay-content {
          transform: translateY(0);
        }
        
        .growth-indicator {
          position: absolute;
          top: -5px;
          right: -5px;
          background: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .growth-indicator {
            width: 24px;
            height: 24px;
          }
        }
        
        .organic-cell:hover .growth-indicator {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes organic-rise {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
      `}</style>
      
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default ValueCreationPage;