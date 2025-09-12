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

const SharpSculpturalFlow = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Precision gradients with mathematical perfection */}
          <linearGradient
            id="sharp-gradient-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="12%" stopColor="#fefefe" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#fafbfc" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#f6f7f8" stopOpacity="0.88" />
            <stop offset="62%" stopColor="#f1f3f4" stopOpacity="0.83" />
            <stop offset="78%" stopColor="#eceff1" stopOpacity="0.77" />
            <stop offset="92%" stopColor="#e8eaed" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#e3e5e8" stopOpacity="0.65" />
          </linearGradient>

          <linearGradient
            id="sharp-gradient-2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="18%" stopColor="#fcfcfd" stopOpacity="0.92" />
            <stop offset="35%" stopColor="#f8f9fa" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#f3f4f6" stopOpacity="0.82" />
            <stop offset="75%" stopColor="#eef0f2" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#e6e8eb" stopOpacity="0.68" />
          </linearGradient>

          <linearGradient
            id="sharp-gradient-3"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="22%" stopColor="#fafbfc" stopOpacity="0.88" />
            <stop offset="45%" stopColor="#f5f6f7" stopOpacity="0.82" />
            <stop offset="68%" stopColor="#f0f1f3" stopOpacity="0.75" />
            <stop offset="88%" stopColor="#eaecef" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#e4e6e9" stopOpacity="0.58" />
          </linearGradient>

          <linearGradient
            id="metallic-accent"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#f8f9fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#e9ecef" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#dee2e6" stopOpacity="0.65" />
          </linearGradient>

          {/* Ultra-precision shadow system */}
          <filter
            id="architectural-shadow"
            x="-150%"
            y="-150%"
            width="400%"
            height="400%"
          >
            {/* Sharp contact shadow */}
            <feDropShadow
              dx="0.5"
              dy="1"
              stdDeviation="0.5"
              floodOpacity="0.08"
              floodColor="#000000"
            />
            {/* Medium definition shadow */}
            <feDropShadow
              dx="1"
              dy="3"
              stdDeviation="2"
              floodOpacity="0.06"
              floodColor="#000000"
            />
            {/* Soft ambient shadow */}
            <feDropShadow
              dx="2"
              dy="8"
              stdDeviation="8"
              floodOpacity="0.04"
              floodColor="#000000"
            />
            {/* Ultra-soft depth shadow */}
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="20"
              floodOpacity="0.02"
              floodColor="#000000"
            />
          </filter>

          {/* Crystalline edge enhancement */}
          <filter id="crystal-edge">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.5"
              result="blur"
            />
            <feOffset in="blur" dx="0" dy="0" result="offset" />
            <feFlood floodColor="#ffffff" floodOpacity="0.4" />
            <feComposite in2="offset" operator="in" result="inner" />
            <feMerge>
              <feMergeNode in="inner" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Master crystalline form 1 - Perfect angles */}
        <path
          d="M-50,140 L160,90 L280,115 L420,85 L560,110 L720,75 L880,100 L1040,70 L1200,95 L1360,65 L1450,85 L1450,330 L1280,365 L1120,340 L960,370 L800,345 L640,375 L480,350 L320,380 L160,355 L0,385 L-50,365 Z"
          fill="url(#sharp-gradient-1)"
          filter="url(#architectural-shadow)"
        >
          <animate
            attributeName="d"
            values="M-50,140 L160,90 L280,115 L420,85 L560,110 L720,75 L880,100 L1040,70 L1200,95 L1360,65 L1450,85 L1450,330 L1280,365 L1120,340 L960,370 L800,345 L640,375 L480,350 L320,380 L160,355 L0,385 L-50,365 Z;M-50,160 L160,110 L280,135 L420,105 L560,130 L720,95 L880,120 L1040,90 L1200,115 L1360,85 L1450,105 L1450,350 L1280,385 L1120,360 L960,390 L800,365 L640,395 L480,370 L320,400 L160,375 L0,405 L-50,385 Z;M-50,135 L160,85 L280,110 L420,80 L560,105 L720,70 L880,95 L1040,65 L1200,90 L1360,60 L1450,80 L1450,325 L1280,360 L1120,335 L960,365 L800,340 L640,370 L480,345 L320,375 L160,350 L0,380 L-50,360 Z;M-50,140 L160,90 L280,115 L420,85 L560,110 L720,75 L880,100 L1040,70 L1200,95 L1360,65 L1450,85 L1450,330 L1280,365 L1120,340 L960,370 L800,345 L640,375 L480,350 L320,380 L160,355 L0,385 L-50,365 Z"
            dur="32s"
            repeatCount="indefinite"
          />
        </path>

        {/* Master crystalline form 2 - Mathematical precision */}
        <path
          d="M-50,270 L180,240 L320,265 L460,235 L600,260 L740,230 L880,255 L1020,225 L1160,250 L1300,220 L1450,240 L1450,490 L1320,525 L1180,500 L1040,530 L900,505 L760,535 L620,510 L480,540 L340,515 L200,545 L60,520 L-50,550 Z"
          fill="url(#sharp-gradient-2)"
          filter="url(#architectural-shadow)"
        >
          <animate
            attributeName="d"
            values="M-50,270 L180,240 L320,265 L460,235 L600,260 L740,230 L880,255 L1020,225 L1160,250 L1300,220 L1450,240 L1450,490 L1320,525 L1180,500 L1040,530 L900,505 L760,535 L620,510 L480,540 L340,515 L200,545 L60,520 L-50,550 Z;M-50,290 L180,260 L320,285 L460,255 L600,280 L740,250 L880,275 L1020,245 L1160,270 L1300,240 L1450,260 L1450,510 L1320,545 L1180,520 L1040,550 L900,525 L760,555 L620,530 L480,560 L340,535 L200,565 L60,540 L-50,570 Z;M-50,265 L180,235 L320,260 L460,230 L600,255 L740,225 L880,250 L1020,220 L1160,245 L1300,215 L1450,235 L1450,485 L1320,520 L1180,495 L1040,525 L900,500 L760,530 L620,505 L480,535 L340,510 L200,540 L60,515 L-50,545 Z;M-50,270 L180,240 L320,265 L460,235 L600,260 L740,230 L880,255 L1020,225 L1160,250 L1300,220 L1450,240 L1450,490 L1320,525 L1180,500 L1040,530 L900,505 L760,535 L620,510 L480,540 L340,515 L200,545 L60,520 L-50,550 Z"
            dur="38s"
            repeatCount="indefinite"
          />
        </path>

        {/* Master crystalline form 3 - Foundation perfection */}
        <path
          d="M-50,450 L200,420 L350,445 L500,415 L650,440 L800,410 L950,435 L1100,405 L1250,430 L1400,400 L1450,420 L1450,670 L1300,705 L1150,680 L1000,710 L850,685 L700,715 L550,690 L400,720 L250,695 L100,725 L-50,700 Z"
          fill="url(#sharp-gradient-3)"
          filter="url(#architectural-shadow)"
        >
          <animate
            attributeName="d"
            values="M-50,450 L200,420 L350,445 L500,415 L650,440 L800,410 L950,435 L1100,405 L1250,430 L1400,400 L1450,420 L1450,670 L1300,705 L1150,680 L1000,710 L850,685 L700,715 L550,690 L400,720 L250,695 L100,725 L-50,700 Z;M-50,470 L200,440 L350,465 L500,435 L650,460 L800,430 L950,455 L1100,425 L1250,450 L1400,420 L1450,440 L1450,690 L1300,725 L1150,700 L1000,730 L850,705 L700,735 L550,710 L400,740 L250,715 L100,745 L-50,720 Z;M-50,445 L200,415 L350,440 L500,410 L650,435 L800,405 L950,430 L1100,400 L1250,425 L1400,395 L1450,415 L1450,665 L1300,700 L1150,675 L1000,705 L850,680 L700,710 L550,685 L400,715 L250,690 L100,720 L-50,695 Z;M-50,450 L200,420 L350,445 L500,415 L650,440 L800,410 L950,435 L1100,405 L1250,430 L1400,400 L1450,420 L1450,670 L1300,705 L1150,680 L1000,710 L850,685 L700,715 L550,690 L400,720 L250,695 L100,725 L-50,700 Z"
            dur="44s"
            repeatCount="indefinite"
          />
        </path>

        {/* Perfect geometric accent crystals */}
        <polygon
          points="220,130 290,105 340,140 320,180 280,205 230,180 200,145"
          fill="url(#metallic-accent)"
          opacity="0.9"
          filter="url(#architectural-shadow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 270 155;2 270 155;0 270 155"
            dur="25s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          points="840,200 910,175 960,210 940,250 880,275 820,250 800,215"
          fill="url(#metallic-accent)"
          opacity="0.85"
          filter="url(#architectural-shadow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 880 225;-1.5 880 225;0 880 225"
            dur="30s"
            repeatCount="indefinite"
          />
        </polygon>

        <polygon
          points="1120,160 1190,135 1240,170 1220,210 1160,235 1100,210 1080,175"
          fill="url(#metallic-accent)"
          opacity="0.95"
          filter="url(#architectural-shadow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 1160 185;3 1160 185;0 1160 185"
            dur="20s"
            repeatCount="indefinite"
          />
        </polygon>

        {/* Precision architectural accent lines */}
        <path
          d="M100,340 L260,320 L420,360 L580,340 L740,380 L900,360 L1060,400 L1220,380"
          stroke="url(#sharp-gradient-1)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
          filter="url(#crystal-edge)"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1120;1120,1120;0,1120"
            dur="18s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M160,480 L320,460 L480,500 L640,480 L800,520 L960,500 L1120,540 L1280,520"
          stroke="url(#sharp-gradient-2)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          filter="url(#crystal-edge)"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1120;1120,1120;0,1120"
            dur="22s"
            repeatCount="indefinite"
          />
        </path>

        {/* Ultra-fine detail lines */}
        <path
          d="M0,200 L1400,240"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1400;1400,1400;0,1400"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

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
      image: "/home12.jpg",
      alt: "African financial district skyline",
      overlayGradient: `linear-gradient(135deg, ${colors.navy}ee 0%, ${colors.darkGray}cc 50%, ${colors.mediumGray}99 100%)`,
    },
    {
      title: (
        <>
          Sustainable Value{" "}
          <span style={{ color: colors.offWhite }}>Creation</span>
        </>
      ),
      subtitle: "Building long-term value for our stakeholders",
      image: "/home11.jpg",
      alt: "African manufacturing and industrial activity",
      overlayGradient: `linear-gradient(135deg, ${colors.darkGray}ee 0%, ${colors.mediumGray}cc 50%, ${colors.gray}99 100%)`,
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

        {/* Flowing Shadow Overlay */}
        <HeroShadowOverlay />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="gravesend-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white transform transition-all duration-500 opacity-100">
                {slides[currentSlide].title}
              </h1>
              <p
                className="gellix-font font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl transform transition-all duration-500 opacity-100"
                style={{ color: colors.silver }}
              >
                {slides[currentSlide].subtitle}
              </p>
              <button
                className="group flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                  color: colors.darkNavy,
                }}
                onClick={() =>
                  document
                    .getElementById("focus")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
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
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
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
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
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
