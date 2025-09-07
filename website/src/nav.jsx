import React, { useState, useEffect } from "react";
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
  Building2,
  Users,
  Award,
  Phone,
  Linkedin,
  Twitter,
} from "lucide-react";

// Custom CSS for fade-in animation
const customStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-slideDown {
    animation: slideDown 0.5s ease-out forwards;
  }
`;

// Custom hook for smooth scrolling animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Add custom styles to head
    if (!document.getElementById("navigation-styles")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "navigation-styles";
      styleSheet.textContent = customStyles;
      document.head.appendChild(styleSheet);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

// Premium Button Component
const PremiumButton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary:
      "bg-slate-900 text-gray-50 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25",
    outline:
      "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-gray-50 backdrop-blur-sm",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </button>
  );
};

// Enhanced Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollAnimation();

  useEffect(() => {
    setIsScrolled(scrollY > 80);
  }, [scrollY]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Investee Companies", id: "investee-companies" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xl shadow-slate-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-700 ${
              isScrolled ? "h-26 sm:h-18" : "h-20 sm:h-24"
            }`}
          >
            {/* Logo */}
            <div
              onClick={() => handleNavClick("home")}
              className="flex items-center group cursor-pointer transition-all duration-500 hover:scale-105"
            >
              {isScrolled ? (
                <img
                  src="/logo2.png"
                  alt="Acquirise Logo"
                  className="h-18 sm:h-26 w-auto transition-all duration-500 opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: "200ms",
                    animationFillMode: "forwards",
                  }}
                />
              ) : (
                <img
                  src="/logo2.png"
                  alt="Acquirise Logo"
                  className="h-18 sm:h-26 w-auto transition-all duration-500"
                />
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-500 ${
                  isScrolled
                    ? "bg-slate-50/80 backdrop-blur-sm border border-slate-200/50"
                    : "bg-white/10 backdrop-blur-md border border-white/20"
                }`}
              >
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${
                      currentPage === item.id
                        ? isScrolled
                          ? "text-slate-900 bg-white shadow-sm"
                          : "text-slate-900 bg-white/20"
                        : isScrolled
                        ? "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                        : "text-slate-700 hover:text-slate-300 hover:bg-white/10"
                    }`}
                    style={{
                      fontFamily: "Gellix, sans-serif",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {currentPage === item.id && (
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          isScrolled
                            ? "bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200/50"
                            : "bg-gradient-to-r from-slate/50 to-slate/70 border border-slate/50"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="ml-6">
                <PremiumButton
                  variant={isScrolled ? "primary" : "outline"}
                  className="text-sm px-6 py-2.5 h-auto"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </PremiumButton>
              </div>
            </div>

            {/* Mobile menu button */}
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl transition-all duration-300 text-slate-900 hover:text-slate-700 hover:bg-slate-100"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-slate-900 rounded-full transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-slate-900 rounded-full transform transition-all duration-300 ${
                    isOpen ? "opacity-0" : "translate-y-2.5 opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-slate-900 rounded-full transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${
              isScrolled
                ? "bg-white/98 border-t border-slate-200/80"
                : "bg-slate-900/98 border-t border-white/10"
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${
                      currentPage === item.id
                        ? isScrolled
                          ? "text-slate-900 bg-amber-50 border border-amber-200/50 translate-x-2"
                          : "text-amber-300 bg-white/10 border border-white/20 translate-x-2"
                        : isScrolled
                        ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 hover:translate-x-1"
                        : "text-white/90 hover:text-white hover:bg-white/10 hover:translate-x-1"
                    }`}
                    style={{
                      fontFamily: "Gellix, sans-serif",
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/20">
                <PremiumButton
                  variant="primary"
                  className="w-full justify-center text-sm"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                  <ArrowRight size={18} />
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to prevent content jump */}
      <div className="h-20 sm:h-24" />
    </>
  );
};

export default Navigation;
