import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { on } from './../node_modules/leaflet/src/dom/DomEvent';

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

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'focus', label: 'Investment Focus' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              ACQUIRISE
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-600 ${
                  currentPage === item.id ? 'text-amber-600' : 'text-slate-700'
                }`}
                style={{ fontFamily: 'Gellix, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}>
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id ? 'text-amber-600' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Premium Button Component
const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      <span className="relative z-10 flex items-center gap-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
        {children}
      </span>
    </button>
  );
};

// About Section
const AboutSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
                About Us
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                Transforming African 
                <span className="text-amber-600"> Investment</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>
              <p>
                We are a catalyst for sustainable transformation, investing in businesses that solve real problems across key sectors in Sub-Saharan Africa. Our thematic, impact-driven approach targets scalable ventures that achieve both exceptional returns and tangible developmental outcomes.
              </p>
              <p>
                With deep local knowledge and international standards, we bridge the gap between opportunity and capital, creating lasting value for all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>15+</div>
                <div className="text-slate-700" style={{ fontFamily: 'Gellix, sans-serif' }}>Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>98%</div>
                <div className="text-slate-700" style={{ fontFamily: 'Gellix, sans-serif' }}>Success Rate</div>
              </div>
            </div>
            
            <PremiumButton variant="primary" onClick={() => window.location.href = '/about'}>
              Learn More About Us
              <ArrowRight size={18} />
            </PremiumButton>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Business meeting" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="pt-8 space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern office" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Strategic planning" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Investment Focus Section


// Portfolio Section


// Team Section
const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Our Team
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
            Leadership <span className="text-amber-600">Excellence</span>
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Acquirise has a highly experienced team with an established track record in investment management and regional expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Dr. Sarah Mwangi",
              position: "Managing Partner",
              experience: "15+ years",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              name: "James Ochieng",
              position: "Investment Director", 
              experience: "12+ years",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              name: "Fatima Al-Rashid",
              position: "Portfolio Manager",
              experience: "10+ years", 
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                {member.name}
              </h4>
              <p className="text-amber-600 font-medium mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                {member.position}
              </p>
              <p className="text-slate-500 text-sm" style={{ fontFamily: 'Gellix, sans-serif' }}>
                {member.experience}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PremiumButton onClick={() => window.location.href = 'mailto:LxWwI@example.com'}>
            <Mail size={20} />
            Contact Our Team
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export { Navigation, AboutSection, TeamSection };