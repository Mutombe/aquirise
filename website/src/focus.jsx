import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, Shield, TrendingUp, Globe } from "lucide-react";
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";
import { SharpSculpturalFlow, CurvedSculpturalFlow } from "./sculpture";

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

// Subtle circular pattern that works well with waves
const SubtleCircularPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute border border-gray-400 rounded-full animate-pulse"
        style={{
          width: `${(i + 1) * 200}px`,
          height: `${(i + 1) * 200}px`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + i}s`,
        }}
      />
    ))}
  </div>
);

const InvestmentFocusSection = () => {
  const scrollY = useScrollAnimation();

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

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Patterns - Circular pattern now more visible */}
      <SharpSculpturalFlow />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="gravesend-sans text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: colors.navy }}
          >
            Our <span style={{ color: colors.lightGray }}>Focus</span>
          </h2>
          <p
            className="gellix-font text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: colors.gray }}
          >
            We are a catalyst for sustainable transformation by investing in
            businesses that solve real problems across key sectors. We adopt a
            thematic, impact-driven approach, targeting scalable ventures that
            achieve both exceptional returns and tangible developmental
            outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Localization",
              description:
                "Deploying capital intelligently by leveraging deep, on-the-ground knowledge",
              icon: <SiLocal size={32} />,
              bgColor: colors.darkNavy,
              iconColor: colors.offWhite,
              titleColor: colors.navy,
              borderColor: colors.silver,
              shadowColor: colors.paleGray,
              hoverBg: colors.lightGray,
            },
            {
              title: "De-risking",
              description:
                "Actively managing risk through structuring and diversification",
              icon: <SiWebmoney size={32} />,
              bgColor: colors.darkGray,
              iconColor: colors.silver,
              titleColor: colors.darkNavy,
              borderColor: colors.paleGray,
              shadowColor: colors.lightGray,
              hoverBg: colors.mediumGray,
            },
            {
              title: "Value Creation",
              description: "Building long term value for our stakeholders",
              icon: <GiTakeMyMoney size={32} />,
              bgColor: colors.mediumGray,
              iconColor: colors.offWhite,
              titleColor: colors.navy,
              borderColor: colors.lightGray,
              shadowColor: colors.gray,
              hoverBg: colors.darkGray,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-sm p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer relative overflow-hidden"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
                boxShadow: `0 10px 30px ${item.shadowColor}20, 0 1px 8px ${item.shadowColor}10`,
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
              onClick={() => (window.location.href = "#about")}
            >
              {/* Multi-layer gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.bgColor}05 0%, ${item.hoverBg}08 50%, transparent 100%)`,
                }}
              />

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiMiniArrowTrendingUp
                  size={20}
                  style={{ color: item.hoverBg }}
                />
              </div>

              <div
                className="relative w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: item.bgColor,
                  boxShadow: `0 4px 15px ${item.bgColor}40`,
                }}
              >
                <div style={{ color: item.iconColor }}>{item.icon}</div>
              </div>
              <h4
                className="gravesend-sans text-2xl font-light mb-4 relative"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </h4>
              <p
                className="gellix-font leading-relaxed relative"
                style={{ color: colors.gray }}
              >
                {item.description}
              </p>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${item.bgColor} 0%, ${item.hoverBg} 50%, ${item.shadowColor} 100%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Sectors We Target with Enhanced Design */}
        <div
          className="relative bg-white/90 backdrop-blur-sm rounded-sm p-12 shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(232,233,235,0.3) 100%)`,
            boxShadow: `0 20px 60px ${colors.paleGray}30, 0 10px 20px ${colors.silver}20`,
          }}
        >
          {/* Additional wave overlay for this section */}
          <div className="absolute inset-0 opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="section-wave" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.paleGray} stopOpacity="0.3" />
                  <stop offset="50%" stopColor={colors.silver} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={colors.offWhite} stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q200,150 400,180 Q600,210 800,160 L800,400 L0,400 Z"
                fill="url(#section-wave)"
              >
                <animate
                  attributeName="d"
                  values="M0,200 Q200,150 400,180 Q600,210 800,160 L800,400 L0,400 Z;M0,220 Q200,270 400,200 Q600,130 800,180 L800,400 L0,400 Z;M0,200 Q200,150 400,180 Q600,210 800,160 L800,400 L0,400 Z"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h4
                className="gravesend-sans text-3xl font-bold mb-4"
                style={{
                  color: colors.navy,
                  textShadow: `0 2px 8px ${colors.silver}30`,
                }}
              >
                Target{" "}
                <span
                  style={{
                    color: colors.lightGray,
                    background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Sectors
                </span>
              </h4>

              {/* Decorative line */}
              <div
                className="w-20 h-0.5 mx-auto mb-4"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${colors.mediumGray} 50%, transparent 100%)`,
                }}
              />

              <p
                className="gellix-font text-xl"
                style={{
                  color: colors.gray,
                  textShadow: `0 1px 2px ${colors.offWhite}60`,
                }}
              >
                We focus on{" "}
                <span style={{ color: colors.darkGray, fontWeight: "500" }}>
                  high-growth sectors
                </span>{" "}
                with{" "}
                <span style={{ color: colors.mediumGray, fontWeight: "500" }}>
                  strong fundamentals
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Financial Services",
                  image:
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.darkNavy,
                },
                {
                  name: "Healthcare",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.navy,
                },
                {
                  name: "Technology",
                  image:
                    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.darkGray,
                },
                {
                  name: "Infrastructure",
                  image:
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.mediumGray,
                },
                {
                  name: "Agriculture",
                  image:
                    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.gray,
                },
                {
                  name: "Education",
                  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.darkNavy,
                },
                {
                  name: "Real Estate",
                  image:
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.navy,
                },
                {
                  name: "Energy",
                  image:
                    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  overlay: colors.darkGray,
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="relative text-center rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-32 flex items-center justify-center group"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${sector.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${sector.overlay} 0%, ${sector.overlay}dd 50%, ${sector.overlay}99 100%)`,
                    }}
                  />

                  {/* Text */}
                  <div className="gravesend-sans relative z-10 font-medium text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                    {sector.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocusSection;