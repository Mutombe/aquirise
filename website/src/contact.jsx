import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook, Send } from 'lucide-react';

const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary: "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white backdrop-blur-sm",
    blue: "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:shadow-xl"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      <span className="relative z-10 flex items-center gap-2 justify-center" style={{ fontFamily: 'Gellix, sans-serif' }}>
        {children}
      </span>
    </button>
  );
};

const ContactCard = ({ icon: Icon, title, content, link }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-400/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>{title}</h3>
        {link ? (
          <a href={link} className="text-slate-600 hover:text-amber-600 transition-colors duration-300" style={{ fontFamily: 'Gellix, sans-serif' }}>
            {content}
          </a>
        ) : (
          <div className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>{content}</div>
        )}
      </div>
    </div>
  </div>
);

const InputField = ({ label, type = 'text', placeholder, required = false, textarea = false }) => {
  const baseClasses = "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300";
  
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {textarea ? (
        <textarea 
          className={`${baseClasses} h-32 resize-none`}
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input 
          type={type}
          className={baseClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

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
          html: `<div class="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-2 shadow-lg border-2 border-white">
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
            <div class="text-slate-900 p-2">
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

  return <div ref={mapRef} className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200" />;
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
              Contact Us
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Get in <span className="text-amber-600">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gellix, sans-serif' }}>
              Acquirise is ready to provide the right solution according to your needs
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Get in Touch Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Gravesend Sans, serif' }}>Get in touch</h2>
                <p className="text-slate-600 text-lg mb-8" style={{ fontFamily: 'Gellix, sans-serif' }}>
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
                <h3 className="text-lg font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>Follow our social media</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-slate-700 hover:bg-slate-800 p-3 rounded-full transition-colors duration-300">
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Gravesend Sans, serif' }}>Send us a message</h2>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                      Company
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                      Phone
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                    Subject
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300 h-32 resize-none"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: 'Gravesend Sans, serif' }}>Find Us</h2>
            <LeafletMap />
          </div>

          {/* Global Presence */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Global Presence
            </h3>
            <div className="inline-flex items-center gap-4 text-slate-600 text-lg mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
              <Globe className="w-6 h-6 text-amber-600" />
              <span>Botswana | Mauritius | South Africa | Zambia | Zimbabwe</span>
            </div>
            <p className="text-slate-500" style={{ fontFamily: 'Gellix, sans-serif' }}>
              www.acquirise.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;