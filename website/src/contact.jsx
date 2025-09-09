import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook, Send } from 'lucide-react';

const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary: "text-white shadow-lg hover:shadow-xl",
    outline: "border-2 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm",
    blue: "text-white shadow-lg hover:shadow-xl"
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
      style={variant === 'primary' || variant === 'blue' ? primaryStyle : outlineStyle}
      {...props}
    >
      <span className="gellix-font relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
      <div 
        className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        style={{ backgroundColor: '#1a2631' }}
      ></div>
    </button>
  );
};

const ContactCard = ({ icon: Icon, title, content, link }) => (
  <div className="bg-white rounded-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow-md">
    <div className="flex items-start gap-4">
      <div 
        className="rounded-sm p-3 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: '#273848' }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 
          className="gravesend-sans text-xl font-bold mb-2"
          style={{ color: '#273848' }}
        >
          {title}
        </h3>
        {link ? (
          <a 
            href={link} 
            className="gellix-font transition-colors duration-300 hover:text-gray-600"
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
          >
            {content}
          </a>
        ) : (
          <div 
            className="gellix-font"
            style={{ color: 'rgba(0, 0, 0, 0.6)' }}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  </div>
);

const LeafletMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = () => {
      // Add CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(link);
      }

      // Add JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
        script.onload = initializeMap;
        document.body.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map centered on Isle of Man
        mapInstanceRef.current = window.L.map(mapRef.current).setView([54.1560, -4.4811], 13);

        // Add tile layer - using a light theme to match the page
        window.L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 20,
        }).addTo(mapInstanceRef.current);

        // Custom marker icon
        const customIcon = window.L.divIcon({
          html: `<div style="background-color: #273848;" class="rounded-sm p-2 shadow-lg border-2 border-white">
                   <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                   </svg>
                 </div>`,
          className: 'custom-marker',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40]
        });

        // Add marker for the office location
        window.L.marker([54.1560, -4.4811], { icon: customIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <div style="color: #273848;" class="p-2">
              <h3 class="font-bold text-lg mb-2">Acquirise Limited</h3>
              <p class="text-sm mb-1">2nd Floor Exchange House</p>
              <p class="text-sm mb-1">54-62 Athol Street</p>
              <p class="text-sm mb-1">Douglas, Isle of Man</p>
              <p class="text-sm">IM1 1JD</p>
            </div>
          `)
          .openPopup();
      }
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-96 rounded-sm overflow-hidden shadow-lg border border-gray-200" />;
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern office contact"
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

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <span 
              className="inline-block backdrop-blur-sm border px-3 py-2 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6 gellix-font"
              style={{ 
                backgroundColor: 'rgba(39, 56, 72, 0.2)',
                borderColor: 'rgba(39, 56, 72, 0.3)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Contact Us
            </span>
            <h1 
              className="gravesend-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
            >
              Get in
              <span className="block text-gray-300">
                Touch
              </span>
            </h1>
            <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Acquirise is ready to provide the right solution according to your needs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
            <PremiumButton>
              Contact Us Now
              <ArrowRight size={18} />
            </PremiumButton>
            <PremiumButton variant="outline">
              Schedule a Meeting
            </PremiumButton>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#273848' }}
            >
              Let's <span className="text-gray-500">Connect</span>
            </h2>
            <p 
              className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: 'rgba(0, 0, 0, 0.5)' }}
            >
              We're focused on building better solutions with efficient methods to solve the challenges of tomorrow
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
            {/* Get in Touch Section */}
            <div className="space-y-8">
              <div>
                <h3 
                  className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                  style={{ color: '#273848' }}
                >
                  Get in touch
                </h3>
                <p 
                  className="gellix-font text-base sm:text-lg mb-6 sm:mb-8"
                  style={{ color: 'rgba(0, 0, 0, 0.6)' }}
                >
                  We're focused on building better solutions with efficient methods to solve the challenges of tomorrow.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <ContactCard
                  icon={MapPin}
                  title="Head Office"
                  content={
                    <div>
                      <p>2nd Floor Exchange House</p>
                      <p>54-62 Athol Street</p>
                      <p>Douglas, Isle of Man</p>
                      <p>IM1 1JD</p>
                    </div>
                  }
                />
                
                <ContactCard
                  icon={Mail}
                  title="Email Us"
                  content="info@acquirise.com"
                  link="mailto:info@acquirise.com"
                />
                
                <ContactCard
                  icon={Phone}
                  title="Call Us"
                  content={
                    <div>
                      <p>Phone: +44 1624 123456</p>
                      <p>Fax: +44 1624 123457</p>
                    </div>
                  }
                />
              </div>

              {/* Social Media */}
              <div>
                <h4 
                  className="gravesend-sans text-lg font-semibold mb-4"
                  style={{ color: '#273848' }}
                >
                  Follow our social media
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-sm transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#3b5998' }}
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-sm transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#1da1f2' }}
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-sm transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#0077b5' }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-sm transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#273848' }}
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-sm p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 
                className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                style={{ color: '#273848' }}
              >
                Send us a message
              </h3>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: '#273848' }}
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      style={{ 
                        focusBorderColor: '#273848',
                        focusRingColor: '#273848'
                      }}
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#273848';
                        e.target.style.boxShadow = '0 0 0 1px #273848';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: '#273848' }}
                    >
                      Company
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#273848';
                        e.target.style.boxShadow = '0 0 0 1px #273848';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: '#273848' }}
                    >
                      Phone
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#273848';
                        e.target.style.boxShadow = '0 0 0 1px #273848';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: '#273848' }}
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#273848';
                        e.target.style.boxShadow = '0 0 0 1px #273848';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="gellix-font block text-sm font-medium mb-2"
                    style={{ color: '#273848' }}
                  >
                    Subject
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#273848';
                      e.target.style.boxShadow = '0 0 0 1px #273848';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="gellix-font block text-sm font-medium mb-2"
                    style={{ color: '#273848' }}
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300 h-32 resize-none"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#273848';
                      e.target.style.boxShadow = '0 0 0 1px #273848';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <PremiumButton variant="blue" className="w-full" onClick={handleSubmit}>
                  Send Message
                  <Send size={20} />
                </PremiumButton>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12 sm:mb-16">
            <h3 
              className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
              style={{ color: '#273848' }}
            >
              Find <span className="text-gray-500">Us</span>
            </h3>
            <LeafletMap />
          </div>

          {/* Global Presence */}
          <div className="text-center bg-white rounded-sm p-6 sm:p-8 shadow-lg border border-gray-100 mx-2 sm:mx-0">
            <h4 
              className="gravesend-sans text-xl sm:text-2xl font-bold mb-4"
              style={{ color: '#273848' }}
            >
              Global <span className="text-gray-500">Presence</span>
            </h4>
            <div 
              className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-base sm:text-lg mb-4"
              style={{ color: 'rgba(0, 0, 0, 0.6)' }}
            >
              <div 
                className="w-6 h-6 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: '#273848' }}
              >
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="gellix-font text-center">
                Botswana | Mauritius | South Africa | Zambia | Zimbabwe
              </span>
            </div>
            <p 
              className="gellix-font"
              style={{ color: 'rgba(0, 0, 0, 0.4)' }}
            >
              www.acquirise.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;