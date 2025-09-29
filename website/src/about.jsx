import React, { useState, useEffect } from "react";
import { HeroShadowOverlay } from "./home";
import {
  ArrowRight,
  ChevronDown,
  Target,
  Shield,
  TrendingUp,
  Users,
  Award,
  Building,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Heart,
  Eye,
} from "lucide-react";
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";
import { BsBuildingFillGear } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiMedicinePills } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { LiaGopuramSolid } from "react-icons/lia";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { StonePileSculpturalFlow } from "./sculpture";
import ValuesSection from "./value";

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

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

// Hero Section
const HeroSection = () => {
  const scrollY = useScrollAnimation();

  return (
    <section className="relative h-[80vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://bard-santner.sgp1.cdn.digitaloceanspaces.com/acquirise/home17.jpg')",
          }}
        ></div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-pulse"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="space-y-6 sm:space-y-8 lg:space-y-12"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-sm border border-white/20">
              <span className="gellix-font text-xs sm:text-sm font-light text-white/90">
                ABOUT US
              </span>
            </div>

            <h1 className="gellix-font font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Building
              <span className="block text-transparent bg-clip-text bg-gray-300">
                Durable Value
              </span>
            </h1>

            <p className="gellix-font font-light text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Using proprietary capital and local insight to support businesses
              that deliver practical solutions across Sub-Saharan Africa.
            </p>
          </div>

          <button
            className="gellix-font font-light inline-flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-white rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-xs sm:text-sm"
            onClick={() =>
              document
                .getElementById("story")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
              color: colors.darkNavy,
            }}
          >
            <span>Discover Our Story</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Story Section
const StorySection = () => {
  const scrollY = useScrollAnimation();

  return (
    <section
      id="story"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div>
              <div className="gravesend-sans font-light inline-block px-3 py-2 sm:px-4 bg-slate-100 rounded-sm mb-3 sm:mb-4 lg:mb-6">
                <span className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">
                  OUR FOUNDATION
                </span>
              </div>
              <h2 className="gravesend-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
                Who
                <span className="block text-slate-500">We Are</span>
              </h2>
            </div>

            <div className="gellix-font space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
              <p>
                Acquirise is a private investment company. We invest our own
                capital in operating businesses in Sub-Saharan Africa and
                support them with governance and execution.
              </p>
              <p>
                We focus on a small number of sectors taking majority or
                constructive minority stakes. Our role is hands-on and
                long-term.
              </p>
            </div>

            <button
              className="gravesend-sans font-light group inline-flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-white rounded-sm hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
              style={{
                background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                color: colors.darkNavy,
              }}
              onClick={() => (window.location.href = "/holdings")}
            >
              <span>View our Holdings</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]"
              />
            </button>
          </div>

          {/* Visual Elements */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8 rounded-sm transform hover:scale-105 transition-all duration-300">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 rounded-sm flex items-center justify-center mb-4 sm:mb-6"
                    style={{
                      backgroundColor: colors.darkGray,
                      boxShadow: `0 4px 15px ${colors.lightGray}40`,
                    }}
                  >
                    <BsBuildingFillGear className="text-white" size={20} />
                  </div>
                  <h4 className="gravesend-sans text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Infrastructure
                  </h4>
                  <p className="gellix-font text-sm sm:text-base leading-relaxed text-slate-600">
                    Building foundations for sustainable growth
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 lg:p-8 rounded-sm transform hover:scale-105 transition-all duration-300">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-sm flex items-center justify-center mb-4 sm:mb-6"
                    style={{
                      backgroundColor: colors.darkGray,
                      boxShadow: `0 4px 15px ${colors.lightGray}40`,
                    }}
                  >
                    <GiMedicinePills className="text-white" size={20} />
                  </div>
                  <h4 className="gravesend-sans text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-2 sm:mb-3">
                    Healthcare
                  </h4>
                  <p className="gellix-font text-sm sm:text-base leading-relaxed text-slate-600">
                    Essential services for thriving communities
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 sm:mt-8 lg:mt-12">
                <div className="bg-gradient-to-br from-black/50 to-slate-100 p-4 sm:p-6 lg:p-8 rounded-sm transform hover:scale-105 transition-all duration-300">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-600 rounded-sm flex items-center justify-center mb-4 sm:mb-6"
                    style={{
                      backgroundColor: colors.darkGray,
                      boxShadow: `0 4px 15px ${colors.lightGray}40`,
                    }}
                  >
                    <GiReceiveMoney className="text-white" size={20} />
                  </div>
                  <h4 className="gravesend-sans text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-2 sm:mb-3">
                    Financial Inclusion
                  </h4>
                  <p className="gellix-font text-sm sm:text-base leading-relaxed text-slate-600">
                    Expanding access to opportunity
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-200 to-slate-100 p-4 sm:p-6 lg:p-8 rounded-sm transform hover:scale-105 transition-all duration-300">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-600 rounded-sm flex items-center justify-center mb-4 sm:mb-6"
                    style={{
                      backgroundColor: colors.darkGray,
                      boxShadow: `0 4px 15px ${colors.lightGray}40`,
                    }}
                  >
                    <GiFarmTractor className="text-white" size={20} />
                  </div>
                  <h4 className="gravesend-sans text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                    Trade & Agriculture
                  </h4>
                  <p className="gellix-font text-sm sm:text-base leading-relaxed text-slate-600">
                    Sustainable growth across markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Investment Philosophy Section
const PhilosophySection = () => {
  const scrollY = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 py-2 sm:px-4 bg-white rounded-sm mb-4 sm:mb-6 shadow-lg">
            <span className="gravesend-sans text-slate-600 text-xs sm:text-sm font-light tracking-wide">
              OUR APPROACH
            </span>
          </div>
          <h2 className="gravesend-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6 lg:mb-8">
            Our Investment
            <span className="block text-slate-500">Philosophy</span>
          </h2>
          <p className="gellix-font text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Our approach is anchored on three foundational pillars
          </p>
        </div>

        {/* Updated grid container for better alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {[
            {
              title: "Localization",
              description:
                "We pair proprietary capital with local insight, collaborating with experienced partners who understand regulatory, cultural and operating nuances. This enables disciplined selection, prudent structuring and effective delivery.",
              icon: SiLocal,
              color: "blue",
            },
            {
              title: "De-risking",
              description:
                "We combine staged funding tied to milestones, ring-fenced vehicles where appropriate, and diversified exposures to reduce downside risk. These measures help sustain operations through volatility and protect long-term value.",
              icon: SiWebmoney,
              color: "purple",
            },
            {
              title: "Value Creation",
              description:
                "We pair proprietary capital with hands-on support to help ventures scale responsibly. The objective is durable value for shareholders, employees and local communities.",
              icon: GiTakeMyMoney,
              color: "green",
            },
          ].map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="group relative h-full flex">
                <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200 flex flex-col w-full">
                  <div
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-sm flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    style={{
                      backgroundColor: colors.darkGray,
                      boxShadow: `0 4px 15px ${colors.lightGray}40`,
                    }}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="gravesend-sans text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-4 sm:mb-6 flex-shrink-0">
                    {pillar.title}
                  </h3>
                  <p className="gellix-font text-sm sm:text-base text-slate-600 leading-relaxed flex-grow">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Main About Us Page Component
const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <HeroSection />
      <StorySection />
      <PhilosophySection />
      <ValuesSection />
    </div>
  );
};

export default AboutUsPage;
