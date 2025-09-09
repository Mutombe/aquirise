import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

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
// Custom hook for smooth scrolling animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Abstract Background Components
const AbstractSpheres = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <div className="relative w-full h-full">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            backgroundColor: '#273848',
            width: `${Math.random() * 30 + 15}px`,
            height: `${Math.random() * 30 + 15}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
          }}
        />
      ))}
    </div>
  </div>
);

const AbstractDots = ({ className = "" }) => (
  <div className={`absolute ${className}`}>
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
      {[...Array(80)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 400}
          cy={Math.random() * 400}
          r={Math.random() * 2 + 1}
          fill="#273848"
          style={{
            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </svg>
  </div>
);

// Hero Section Component
const HeroSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/home3.jpg"
          alt="About us background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        <div 
          className="absolute inset-0 opacity-80"
          style={{ backgroundColor: '#273848' }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div 
          className="space-y-8"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <div className="space-y-6">
            <h1 
              className="gravesend-sans text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              About <span className="text-gray-300">Our Vision</span>
            </h1>
            <p 
              className="gellix-font text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            >
              Investors in real-world solutions, catalysing progress across Sub-Saharan Africa
            </p>
          </div>
          
          <button 
            className="gravesend-sans group flex items-center space-x-3 px-8 py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 mx-auto bg-white"
            style={{ color: '#273848' }}
            onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Discover Our Story</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Abstract Section Divider
const AbstractDivider = ({ side = 'left' }) => (
  <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-0 w-64 h-full pointer-events-none`}>
    <AbstractSpheres className="w-full h-full" />
    <div className="absolute top-1/4 w-32 h-32 opacity-30">
      <img
        src="/home2.jpg"
        alt="Decorative"
        className="w-full h-full object-cover rounded-full shadow-lg"
      />
    </div>
  </div>
);

// Main Story Section
const StorySection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            className="space-y-12 relative z-10"
            style={{ transform: `translateY(${scrollY * 0.01}px)` }}
          >
            <div>
              <h2 
                className="gellix-font text-sm font-bold uppercase tracking-wider mb-4"
                style={{ color: '#273848' }}
              >
                Our Foundation
              </h2>
              <h3 
                className="gravesend-sans text-4xl lg:text-5xl font-bold leading-tight mb-8"
                style={{ color: '#273848' }}
              >
                Capital That <span className="text-gray-500">Catalyses</span>
              </h3>
            </div>
            
            <div className="space-y-8 gellix-font text-lg leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
              <p>
                At our core, we are investors in real-world solutions. Founded with the belief that capital should do more than seek returns, it should catalyse progress, we invest in private ventures across Sub-Saharan Africa that address significant challenges and unlock scalable opportunities.
              </p>
              <p>
                We adopt a thematic, impact-driven approach, targeting high-potential businesses in key sectors such as infrastructure, agriculture, trade, healthcare and financial inclusion. By aligning capital with innovation and execution, we aim to deliver both exceptional returns and measurable development outcomes.
              </p>
            </div>

            <button 
              className="gravesend-sans group flex items-center space-x-3 px-8 py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#273848', color: 'white' }}
            >
              <span>View Our Portfolio</span>
              <Globe size={18} className="group-hover:translate-x-1 transition-transform text-gray-300" />
            </button>
          </div>
          
          {/* Visual Elements with Images */}
          <div className="relative">
            <div className="relative z-10 space-y-8">
              {/* Key Sectors Cards with Images */}
              <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-sm overflow-hidden">
                    <img
                      src="/home4.jpg"
                      alt="Infrastructure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="gravesend-sans text-xl font-bold mb-2" style={{ color: '#273848' }}>
                      Infrastructure
                    </h4>
                    <p className="gellix-font" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                      Building foundations for growth
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ml-8 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-sm overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Financial Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="gravesend-sans text-xl font-bold mb-2" style={{ color: '#273848' }}>
                      Financial Inclusion
                    </h4>
                    <p className="gellix-font" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                      Expanding access to opportunity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 rounded-sm overflow-hidden">
                    <img
                      src="/home9.jpg"
                      alt="Healthcare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="gravesend-sans text-xl font-bold mb-2" style={{ color: '#273848' }}>
                      Healthcare & Agriculture
                    </h4>
                    <p className="gellix-font" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                      Essential services, sustainable growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Focus Areas Section
const FocusAreasSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract Background */}
      <AbstractDots className="top-10 right-10 w-80 h-80 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="gravesend-sans text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#273848' }}
          >
            Our <span className="text-gray-500">Approach</span>
          </h2>
          <p className="gellix-font text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            We believe in active partnership, strategic guidance, and sustainable value creation through three core pillars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Impact-Driven Investment",
              description: "We seek opportunities that generate both financial returns and positive societal impact, focusing on businesses that solve real problems.",
              image: "/home8.jpg"
            },
            {
              title: "Local Expertise", 
              description: "Our deep understanding of Sub-Saharan markets enables us to identify opportunities and navigate challenges with precision.",
              image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "Strategic Partnership",
              description: "We work closely with management teams to unlock value, providing not just capital but strategic guidance and operational support.", 
              image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-sm p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer relative"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              {/* Background Image */}
              <div className="w-full h-48 mb-6 rounded-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h4 
                className="gravesend-sans text-2xl font-bold mb-4"
                style={{ color: '#273848' }}
              >
                {item.title}
              </h4>
              <p className="gellix-font leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Values Section with Images
const ValuesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <AbstractSpheres className="top-32 left-1/4 w-60 h-60 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="gravesend-sans text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#273848' }}
          >
            Our <span className="text-gray-500">Values</span>
          </h2>
          <p className="gellix-font text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            These principles guide every decision we make and every partnership we forge
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                title: "Integrity",
                description: "We conduct business with the highest ethical standards, building trust through transparency and accountability."
              },
              {
                title: "Excellence",
                description: "We strive for exceptional outcomes in everything we do, from deal sourcing to portfolio management."
              },
              {
                title: "Innovation",
                description: "We embrace new ideas and approaches that can drive sustainable growth and positive change."
              },
              {
                title: "Partnership",
                description: "We believe in collaborative relationships built on mutual respect and shared vision for success."
              }
            ].map((value, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div 
                  className="w-12 h-12 rounded-sm flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: '#273848' }}
                >
                  <CheckCircle size={20} className="text-gray-300"/>
                </div>
                <div>
                  <h4 className="gravesend-sans text-xl font-bold mb-2" style={{ color: '#273848' }}>
                    {value.title}
                  </h4>
                  <p className="gellix-font" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our team and values"
                className="w-full h-64 object-cover rounded-sm mb-6"
              />
              <h4 className="gravesend-sans text-2xl font-bold mb-4" style={{ color: '#273848' }}>
                Driven by Purpose
              </h4>
              <p className="gellix-font" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                Our commitment extends beyond financial returns to creating lasting positive impact across the communities and markets we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Us Page Component
const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
      
      <HeroSection />
      <StorySection />
      <FocusAreasSection />
      <ValuesSection />
    </div>
  );
};

export default AboutUsPage;