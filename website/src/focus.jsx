import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, Shield, TrendingUp, Globe } from "lucide-react";
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";
import { SculpturalFlowShowcase, SharpSculpturalFlow } from "./sculpture";

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

const InvestmentFocusSection = () => {
  const scrollY = useScrollAnimation();

  // Color palette - Updated with new brand colors
  const colors = {
    darkNavy: "#001D39",
    navy: "#0A4174",
    darkGray: "#49769F",
    mediumGray: "#4E8EA2",
    gray: "#6EA2B3",
    lightGray: "#7BBDE8",
    paleGray: "#BDD8E9",
    silver: "#E8F4F8",
    offWhite: "#F5F9FB",
  };

  const colors1 = {
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
    <section className="gellix-font relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Patterns */}
      <SharpSculpturalFlow />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="focus"
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="gellix-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
            style={{
              color: colors.navy,
            }}
          >
            Our <span style={{ color: colors1.lightGray }}>Focus</span>
          </h2>
          <p
            className="gellix-font text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            style={{
              color: colors1.darkGray,
            }}
          >
            Acquirise invests its own capital in businesses that address clear,
            real-world needs in selected sectors. We work alongside portfolio
            teams to strengthen governance and execution. The information
            provided here is descriptive of our activities and is not an
            invitation to invest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {[
            {
              title: "Localization",
              description:
                "Deploying capital intelligently by leveraging deep, on-the-ground knowledge",
              icon: <SiLocal size={24} className="sm:w-8 sm:h-8" />,
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
              icon: <SiWebmoney size={24} className="sm:w-8 sm:h-8" />,
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
              icon: <GiTakeMyMoney size={24} className="sm:w-8 sm:h-8" />,
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
              className="group bg-white/95 backdrop-blur-sm rounded-sm p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] sm:hover:scale-105 cursor-pointer relative overflow-hidden touch-manipulation"
              style={{
                borderLeft: `3px sm:border-l-4 solid ${item.borderColor}`,
                boxShadow: `0 4px 15px ${item.shadowColor}20, 0 1px 4px ${item.shadowColor}10`,
                transform:
                  window.innerWidth > 768
                    ? `translateY(${scrollY * 0.02}px)`
                    : "none",
              }}
              onClick={() => (window.location.href = "/about")}
            >
              {/* Multi-layer gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.bgColor}05 0%, ${item.hoverBg}08 50%, transparent 100%)`,
                }}
              />

              {/* Arrow Icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <HiMiniArrowTrendingUp
                  size={16}
                  className="sm:w-5 sm:h-5"
                  style={{ color: item.hoverBg }}
                />
              </div>

              <div
                className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-sm flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: item.bgColor,
                  boxShadow: `0 4px 15px ${item.bgColor}40`,
                }}
              >
                <div style={{ color: item.iconColor }}>{item.icon}</div>
              </div>
              <h4
                className="gellix-font text-lg sm:text-xl lg:text-2xl font-light mb-2 sm:mb-3 lg:mb-4 relative"
                style={{
                  color: item.titleColor,
                }}
              >
                {item.title}
              </h4>
              <p
                className="gellix-font text-sm sm:text-base leading-relaxed relative"
                style={{
                  color: colors1.darkGray,
                }}
              >
                {item.description}
              </p>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${item.bgColor} 0%, ${item.hoverBg} 50%, ${item.shadowColor} 100%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Sectors We Target with Enhanced Design */}
        <div
          className="relative bg-white/90 backdrop-blur-sm rounded-sm p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(232,233,235,0.3) 100%)`,
            boxShadow: `0 10px 30px ${colors.paleGray}30, 0 5px 10px ${colors.silver}20`,
          }}
        >
          {/* Wave overlay for section */}
          <div className="absolute inset-0 opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient
                  id="section-wave"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={colors.paleGray}
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="50%"
                    stopColor={colors.silver}
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor={colors.offWhite}
                    stopOpacity="0.1"
                  />
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

          <div className="bg-white/95relative z-10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h4
                className="gellix-font text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4"
                style={{
                  color: colors.navy,
                  textShadow: `0 2px 8px ${colors.silver}30`,
                }}
              >
                Target{" "}
                <span
                  style={{
                    color: colors.lightGray,
                    background: `linear-gradient(135deg, ${colors1.lightGray} 0%, ${colors1.paleGray} 100%)`,
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
                className="w-12 sm:w-16 lg:w-20 h-0.5 mx-auto mb-2 sm:mb-3 lg:mb-4"
                style={{
                  background: `white`,
                }}
              />

              <p
                className="gellix-font text-base sm:text-lg lg:text-xl px-4 sm:px-0"
                style={{
                  color: colors1.darkGray,
                  textShadow: `0 1px 2px ${colors.offWhite}60`,
                }}
              >
                We focus on high-growth sectors with strong fundamentals
              </p>
            </div>

            <div className="bg-white grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Financial Services",
                  image:
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Healthcare",
                  image:
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Technology",
                  image:
                    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Infrastructure",
                  image:
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Agriculture",
                  image:
                    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Education",
                  image:
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Real Estate",
                  image:
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Energy",
                  image:
                    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
              ].map((sector, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg h-32 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h5 className="text-white font-semibold text-sm lg:text-base">
                      {sector.name}
                    </h5>
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
