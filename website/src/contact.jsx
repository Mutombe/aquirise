import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  MapPin,
  Globe,
  ChevronDown,
  Target,
  Shield,
  TrendingUp,
  Users,
  Award,
  Building,
  CheckCircle,
  Star,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Send,
} from "lucide-react";
import { BsBrowserChrome } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import {
  SharpSculpturalFlow,
  CurvedSculpturalFlow,
  JigsawSculpturalFlow,
  SculpturalFlowShowcase,
  StonePileSculpturalFlow,
} from "./sculpture";

const colors = {
  darkNavy: "#1f2833",
  navy: "#273848",
  darkGray: "#2e3742",
  mediumGray: "#3d4654",
  gray: "#4d5866",
  lightGray: "#6d7885",
  paleGray: "#9ba3ad",
  silver: "#c5c9ce",
  offWhite: "#e8e9eb",
};

const ContactCard = ({ icon: Icon, title, content, link }) => (
  <div className="bg-white rounded-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group shadow-md">
    <div className="flex items-start gap-4">
      <div
        className="rounded-sm p-3 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: "#273848" }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3
          className="gravesend-sans text-xl font-bold mb-2"
          style={{ color: "#273848" }}
        >
          {title}
        </h3>
        {link ? (
          <a
            href={link}
            className="gellix-font transition-colors duration-300 hover:text-gray-600"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            {content}
          </a>
        ) : (
          <div className="gellix-font" style={{ color: "rgba(0, 0, 0, 0.6)" }}>
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
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css";
        document.head.appendChild(link);
      }

      // Add JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
        script.onload = initializeMap;
        document.body.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map centered on Isle of Man
        mapInstanceRef.current = window.L.map(mapRef.current).setView(
          [54.156, -4.4811],
          13
        );

        // Add dark theme tile layer
        window.L.tileLayer(
          "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 20,
          }
        ).addTo(mapInstanceRef.current);

        // Custom marker icon with color from palette
        const customIcon = window.L.divIcon({
          html: `<div style="background-color: ${colors.navy};" class="rounded-lg p-2 shadow-lg border-2 border-white">
                   <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                   </svg>
                 </div>`,
          className: "custom-marker",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        });

        // Add marker for the office location
        window.L.marker([54.156, -4.4811], { icon: customIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(
            `
            <div style="color: ${colors.navy}; background-color: white;" class="p-3 rounded-lg">
              <h3 class="gravesend-sans font-bold text-lg mb-2">Acquirise Limited</h3>
              <p class="gellix-font text-sm mb-1">2nd Floor Exchange House</p>
              <p class="gellix-font text-sm mb-1">54-62 Athol Street</p>
              <p class="gellix-font text-sm mb-1">Douglas, Isle of Man</p>
              <p class="gellix-font text-sm">IM1 1JD</p>
            </div>
          `
          )
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

  return (
    <div
      ref={mapRef}
      id="map-section"
      className="w-full h-96 rounded-lg overflow-hidden shadow-xl border border-gray-200 relative z-0"
    />
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent! We will get back to you soon.");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] min-h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 25%, ${colors.darkGray} 50%, ${colors.mediumGray} 75%, ${colors.gray} 100%)`
        }}
      >
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0">
          <CurvedSculpturalFlow className="w-full h-full opacity-20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `${colors.lightGray}30` }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl animate-pulse delay-700"
            style={{ backgroundColor: `${colors.paleGray}20` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full blur-3xl animate-spin"
            style={{ 
              background: `linear-gradient(45deg, ${colors.silver}15, ${colors.offWhite}08)`,
              animationDuration: "60s" 
            }}
          ></div>
          <div 
            className="absolute top-1/6 right-1/3 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-2xl animate-bounce"
            style={{ 
              backgroundColor: `${colors.paleGray}25`,
              animationDuration: "3s" 
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <span
              className="gravesend-sans font-light inline-block backdrop-blur-sm border px-4 py-2 sm:px-6 sm:py-3 rounded-sm text-sm sm:text-base font-light mb-6 sm:mb-8 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${colors.navy}50`,
                borderColor: `${colors.lightGray}60`,
                color: colors.offWhite,
                boxShadow: `0 8px 32px ${colors.darkNavy}40`
              }}
            >
              Contact Us
            </span>
            <h1 
              className="gravesend-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 leading-tight px-2"
              style={{ color: colors.offWhite }}
            >
              Get in <span style={{ color: colors.silver, textShadow: `0 0 20px ${colors.silver}40` }}>Touch</span>
            </h1>
            <p 
              className="gellix-font text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4 font-light"
              style={{ color: colors.paleGray }}
            >
              Acquirise is ready to provide the right solution according to your needs. 
              Let's collaborate to build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
            <button
              className="font-light inline-flex items-center space-x-3 px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                             onClick={() =>
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                color: colors.darkNavy,
                boxShadow: `0 10px 40px ${colors.darkNavy}30`
              }}
              onMouseEnter={(e) => {
                e.target.style.background = `linear-gradient(135deg, ${colors.paleGray} 0%, ${colors.silver} 100%)`;
                e.target.style.transform = "scale(1.05) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`;
                e.target.style.transform = "scale(1)";
              }}
            >
              <span className="gellix-font font-light font-medium">Contact Us Now</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            
            <button
              className="gellix-font font-light inline-flex items-center space-x-3 px-8 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 border-2 backdrop-blur-sm group"
              onClick={() =>
                document
                  .getElementById("map-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: `${colors.navy}20`,
                borderColor: `${colors.lightGray}60`,
                color: colors.offWhite,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = `${colors.navy}40`;
                e.target.style.borderColor = colors.silver;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = `${colors.navy}20`;
                e.target.style.borderColor = `${colors.lightGray}60`;
              }}
            >
              <MapPin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Find Us</span>
            </button>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse opacity-40"
              style={{
                backgroundColor: colors.silver,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 sm:py-20 bg-white"
        id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#273848" }}
            >
              Let's <span className="text-gray-500">Connect</span>
            </h2>
            <p
              className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              We're focused on building better solutions with efficient methods
              to solve the challenges of tomorrow
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
            {/* Get in Touch Section */}
            <div className="space-y-8">
              <div>
                <h3
                  className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                  style={{ color: "#273848" }}
                >
                  Get in touch
                </h3>
                <p
                  className="gellix-font text-base sm:text-lg mb-6 sm:mb-8"
                  style={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  We're focused on building better solutions with efficient
                  methods to solve the challenges of tomorrow.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <ContactCard
                  icon={FaMapLocationDot}
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
                  icon={MdMarkEmailRead}
                  title="Email Us"
                  content="info@acquirise.com"
                  link="mailto:info@acquirise.com"
                />

                <ContactCard
                  icon={LuPhoneCall}
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
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-sm p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3
                className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
                style={{ color: "#273848" }}
              >
                Send us a message
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: "#273848" }}
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      style={{
                        focusBorderColor: "#273848",
                        focusRingColor: "#273848",
                      }}
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "#273848";
                        e.target.style.boxShadow = "0 0 0 1px #273848";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: "#273848" }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "#273848";
                        e.target.style.boxShadow = "0 0 0 1px #273848";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: "#273848" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "#273848";
                        e.target.style.boxShadow = "0 0 0 1px #273848";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="gellix-font block text-sm font-medium mb-2"
                      style={{ color: "#273848" }}
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      onFocus={(e) => {
                        e.target.style.borderColor = "#273848";
                        e.target.style.boxShadow = "0 0 0 1px #273848";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="gellix-font block text-sm font-medium mb-2"
                    style={{ color: "#273848" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    onFocus={(e) => {
                      e.target.style.borderColor = "#273848";
                      e.target.style.boxShadow = "0 0 0 1px #273848";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="gellix-font block text-sm font-medium mb-2"
                    style={{ color: "#273848" }}
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className="gellix-font w-full px-4 py-3 bg-white border border-gray-300 rounded-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-300 h-32 resize-none"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    onFocus={(e) => {
                      e.target.style.borderColor = "#273848";
                      e.target.style.boxShadow = "0 0 0 1px #273848";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="gellix-font inline-flex items-center px-6 py-3 rounded-sm text-white hover:bg-amber-700 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                      color: colors.darkNavy,
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12 sm:mb-16">
            <h3
              className="gravesend-sans text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
              style={{ color: "#273848" }}
            >
              Find <span className="text-gray-500">Us</span>
            </h3>
            <LeafletMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
