import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Globe,
  ChevronDown,
  Building,
  Users,
  Target,
  History,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Shield,
  TrendingUp,
  MapPin,
} from "lucide-react";
import InvestmentFocusSection from "./focus";
import { trackEvent, trackPageView, isCookieAllowed } from "./cookieManager";

// Flowing Shadow Overlay for Hero
export const HeroShadowOverlay = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        className="w-full h-full opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="hero-shadow-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1f2833" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#273848" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2e3742" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#3d4654" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4d5866" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="hero-shadow-radial" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#273848" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1f2833" stopOpacity="0.6" />
          </radialGradient>

          <filter id="hero-blur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Flowing shadow shapes */}
        <ellipse
          cx="100"
          cy="100"
          rx="400"
          ry="300"
          fill="url(#hero-shadow-1)"
          filter="url(#hero-blur)"
        >
          <animate
            attributeName="rx"
            values="400;500;400"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="300;400;300"
            dur="12s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="1100"
          cy="700"
          rx="500"
          ry="400"
          fill="url(#hero-shadow-radial)"
          filter="url(#hero-blur)"
        >
          <animate
            attributeName="rx"
            values="500;600;500"
            dur="15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="400;500;400"
            dur="18s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Wavy overlay pattern */}
        <path
          d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z"
          fill="url(#hero-shadow-1)"
          opacity="0.5"
          filter="url(#hero-blur)"
        >
          <animate
            attributeName="d"
            values="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z;M0,250 Q300,350 600,250 T1200,250 L1200,800 L0,800 Z;M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    trackPageView('/', 'Home Page');
  }, []);

  const handleExploreClick = () => {
    // Track the event only if analytics cookies are allowed
    trackEvent('explore_opportunities_click', {
      button_location: 'hero_section',
      page: 'home'
    });
    
    // Your existing scroll logic
    document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" });
  };

  // Color palette
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

  const slides = [
    {
      title: (
        <>
          Capital Deployment with{" "}
          <span style={{ color: colors.silver }}>Local Insight</span>
        </>
      ),
      subtitle:
        "Deploying capital intelligently by leveraging deep, on-the-ground knowledge",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "African business district with modern buildings",
      overlayGradient: `linear-gradient(135deg, ${colors.darkNavy}ee 0%, ${colors.navy}cc 50%, ${colors.darkGray}99 100%)`,
    },
    {
      title: (
        <>
          Risk Mitigation and{" "}
          <span style={{ color: colors.paleGray }}>Structuring</span>
        </>
      ),
      subtitle:
        "Actively managing risk through structuring and diversification",
      image: "https://bard-santner.sgp1.cdn.digitaloceanspaces.com/acquirise/home12.jpg",
      alt: "African financial district skyline",
      overlayGradient: ``,
    },
    {
      title: (
        <>
          Sustainable Value{" "}
          <span style={{ color: colors.offWhite }}>Creation</span>
        </>
      ),
      subtitle: "Building long-term value for our stakeholders",
      image: "https://bard-santner.sgp1.cdn.digitaloceanspaces.com/acquirise/home11.jpg",
      alt: "African manufacturing and industrial activity",
      overlayGradient: ``,
    },
  ];

  // Preload images for faster loading
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [index]: true }));
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
      {/* Hero Slider with Shadow Overlays */}
      <section
        className="relative h-[80vh] min-h-[300px] overflow-hidden"
        id="home"
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {imagesLoaded[index] ? (
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
                  <div className="text-gray-300 text-sm sm:text-lg">...</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Gradient Overlay based on slide */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{ background: slides[currentSlide].overlayGradient }}
        />

        {/* Flowing Shadow Overlay 
        <HeroShadowOverlay />
*/}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="gravesend-sans font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-white transform transition-all duration-500 opacity-100">
                {slides[currentSlide].title}
              </h1>
              <p
                className="gellix-font font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl transform transition-all duration-500 opacity-100"
                style={{ color: colors.silver }}
              >
                {slides[currentSlide].subtitle}
              </p>
              <button
                className="group flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                  color: colors.darkNavy,
                }}
                onClick={handleExploreClick}
              >
                <span className="gellix-font font-medium">
                  Explore Opportunities
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Arrow Navigation with color palette */}
        <button
          onClick={prevSlide}
          className="absolute hidden sm:block left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
          style={{
            backgroundColor: `${colors.darkNavy}cc`,
            border: `1px solid ${colors.silver}40`,
          }}
        >
          <ChevronLeft
            size={20}
            className="sm:w-6 sm:h-6"
            style={{ color: colors.offWhite }}
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hidden sm:block right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
          style={{
            backgroundColor: `${colors.darkNavy}cc`,
            border: `1px solid ${colors.silver}40`,
          }}
        >
          <ChevronRight
            size={20}
            className="sm:w-6 sm:h-6"
            style={{ color: colors.offWhite }}
          />
        </button>

        {/* Slide Indicators with gradient colors */}
        <div className="absolute bottom-3 sm:bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "scale-125" : "hover:scale-110"
              }`}
              style={{
                backgroundColor:
                  index === currentSlide ? colors.offWhite : colors.paleGray,
                boxShadow:
                  index === currentSlide
                    ? `0 0 10px ${colors.offWhite}80`
                    : "none",
              }}
            />
          ))}
        </div>
      </section>
      <InvestmentFocusSection />

      {/* Add custom CSS animations */}
      <style jsx>{`
        @keyframes float0 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(120deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;