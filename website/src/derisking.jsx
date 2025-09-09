import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Lock, Zap, Activity, BarChart3, TrendingDown, Layers, ShieldCheck } from 'lucide-react';

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

// Abstract Shield Patterns
const AbstractShields = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute opacity-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `shield-float ${6 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      >
        <Shield size={32 + Math.random() * 24} style={{ color: '#273848' }} />
      </div>
    ))}
  </div>
);

const GeometricPatterns = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
      {[...Array(20)].map((_, i) => {
        const size = 20 + Math.random() * 40;
        const x = Math.random() * 350;
        const y = Math.random() * 350;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={size}
            height={size}
            fill="none"
            stroke="#273848"
            strokeWidth="1"
            transform={`rotate(${Math.random() * 45} ${x + size/2} ${y + size/2})`}
            style={{
              animation: `geometric-pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        );
      })}
    </svg>
  </div>
);

// Advanced Honeycomb Grid with Hexagonal Shape
const HexagonalGrid = () => {
  const images = [
    "/home3.jpg",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home4.jpg",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home2.jpg",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "/home8.jpg"
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] flex items-center justify-center">
      <div className="hexagon-container">
        {images.map((src, index) => (
          <div
            key={index}
            className="hexagon group cursor-pointer"
            style={{ 
              animationDelay: `${index * 0.2}s`,
              '--index': index
            }}
          >
            <div className="hexagon-inner">
              <img
                src={src}
                alt={`Risk management ${index + 1}`}
                className="hexagon-image"
              />
              <div className="hexagon-overlay">
                <ShieldCheck size={24} className="sm:w-8 sm:h-8 text-white" />
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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Risk management and security"
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

      {/* Abstract Elements */}
      <AbstractShields className="w-full h-full" />
      <GeometricPatterns className="top-20 right-20 w-64 h-64 hidden lg:block" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          {/* Animated Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-sm flex items-center justify-center border-2 border-white/20 animate-pulse"
                style={{ backgroundColor: 'rgba(39, 56, 72, 0.2)' }}
              >
                <Lock size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-sm border-2 border-white/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-sm border border-white/20 animate-spin-reverse"></div>
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
            Risk Management
          </span>
          
          <h1 
            className="gravesend-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            De-
            <span className="block text-gray-300">
              risking
            </span>
          </h1>
          <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            Active risk management through robust structuring and diversification
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
          <PremiumButton onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}>
            Discover Our Methods
            <ArrowRight size={18} />
          </PremiumButton>
          <PremiumButton variant="outline">
            Risk Framework
          </PremiumButton>
        </div>
      </div>
      
      {/* Floating risk indicators */}
      <div className="absolute bottom-20 left-20 opacity-50 hidden lg:block">
        <div className="flex space-x-4">
          {['LOW', 'MED', 'HIGH'].map((risk, i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`w-4 h-16 rounded-full ${
                  i === 0 ? 'bg-green-400' : i === 1 ? 'bg-yellow-400' : 'bg-red-400'
                } relative overflow-hidden`}
              >
                <div 
                  className="absolute bottom-0 w-full bg-white/30 rounded-full transition-all duration-2000"
                  style={{ height: `${(3-i) * 30}%` }}
                ></div>
              </div>
              <span className="text-white text-xs mt-2">{risk}</span>
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
      <GeometricPatterns className="bottom-20 left-20 w-80 h-80 hidden lg:block" />
      <AbstractShields className="top-20 right-20 w-64 h-64 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: '#273848' }}
          >
            Protecting <span className="text-gray-500">Capital</span>
          </h2>
          <p 
            className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
            style={{ color: 'rgba(0, 0, 0, 0.5)' }}
          >
            We actively manage risk through robust structuring and diversification, safeguarding capital while enabling flexibility
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
          {/* Hexagonal Grid */}
          <div className="relative order-2 lg:order-1">
            <HexagonalGrid />
          </div>
          
          {/* Content */}
          <div 
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div className="space-y-6 gellix-font text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
              <p>
                We actively manage risk through robust structuring and diversification, safeguarding our capital while enabling flexibility in dynamic environments. Our strategies are built to absorb shocks and preserve value.
              </p>
              <p>
                Every investment undergoes rigorous stress testing and scenario analysis, ensuring our portfolio can weather market volatility and unexpected challenges.
              </p>
            </div>
            
            {/* Risk Management Metrics */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              {[
                { 
                  icon: <Activity size={20} className="sm:w-6 sm:h-6" />, 
                  title: "Portfolio Monitoring",
                  description: "Real-time risk assessment across all positions"
                },
                { 
                  icon: <BarChart3 size={20} className="sm:w-6 sm:h-6" />, 
                  title: "Stress Testing",
                  description: "Comprehensive scenario analysis and modeling"
                },
                { 
                  icon: <Layers size={20} className="sm:w-6 sm:h-6" />, 
                  title: "Diversification",
                  description: "Strategic asset allocation across sectors"
                },
                { 
                  icon: <TrendingDown size={20} className="sm:w-6 sm:h-6" />, 
                  title: "Downside Protection",
                  description: "Structured products and hedging strategies"
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#273848' }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="gravesend-sans text-base sm:text-lg font-bold mb-2" style={{ color: '#273848' }}>
                    {item.title}
                  </h4>
                  <p className="gellix-font text-xs sm:text-sm" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Risk Framework */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-sm p-6 sm:p-8 lg:p-12 shadow-lg mx-2 sm:mx-0">
          <div className="text-center mb-8 sm:mb-12">
            <h3 
              className="gravesend-sans text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: '#273848' }}
            >
              Our Risk <span className="text-gray-500">Framework</span>
            </h3>
            <p 
              className="gellix-font text-base sm:text-lg px-4"
              style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            >
              A comprehensive approach to identifying, measuring, and mitigating investment risks
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Identification', description: 'Comprehensive risk mapping' },
              { step: '02', title: 'Assessment', description: 'Quantitative risk modeling' },
              { step: '03', title: 'Mitigation', description: 'Strategic risk controls' },
              { step: '04', title: 'Monitoring', description: 'Continuous oversight' }
            ].map((phase, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="bg-white p-6 sm:p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl sm:text-6xl font-bold opacity-10 mb-3 sm:mb-4" style={{ color: '#273848' }}>
                    {phase.step}
                  </div>
                  <h4 className="gravesend-sans text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#273848' }}>
                    {phase.title}
                  </h4>
                  <p className="gellix-font text-sm sm:text-base" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {phase.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 transform -translate-y-1/2">
                    <ArrowRight size={20} style={{ color: '#273848' }} className="opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
const DeRiskingPage = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes shield-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes geometric-pulse {
          0%, 100% { opacity: 0.2; stroke-width: 1; }
          50% { opacity: 0.6; stroke-width: 2; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .hexagon-container {
          display: grid;
          grid-template-columns: repeat(3, 80px);
          grid-gap: 8px;
          justify-content: center;
          align-items: center;
        }
        
        @media (min-width: 640px) {
          .hexagon-container {
            grid-template-columns: repeat(3, 120px);
            grid-gap: 10px;
          }
        }
        
        .hexagon {
          width: 80px;
          height: 69px;
          position: relative;
          margin: 35px 0;
          animation: hexagon-rise 1s ease-out forwards;
          opacity: 0;
        }
        
        @media (min-width: 640px) {
          .hexagon {
            width: 120px;
            height: 104px;
            margin: 52px 0;
          }
        }
        
        .hexagon:nth-child(even) {
          margin-top: 17px;
        }
        
        @media (min-width: 640px) {
          .hexagon:nth-child(even) {
            margin-top: 26px;
          }
        }
        
        .hexagon-inner {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.5s ease;
        }
        
        @media (min-width: 640px) {
          .hexagon-inner {
            border-radius: 12px;
          }
        }
        
        .hexagon:hover .hexagon-inner {
          transform: scale(1.1) rotate(5deg);
        }
        
        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        
        .hexagon:hover .hexagon-image {
          transform: scale(1.2);
          filter: brightness(0.7);
        }
        
        .hexagon-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(39, 56, 72, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .hexagon:hover .hexagon-overlay {
          opacity: 1;
        }
        
        @keyframes hexagon-rise {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
      
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default DeRiskingPage;