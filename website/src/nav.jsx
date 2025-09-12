import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Globe,
  ChevronDown,
  Building,
  Users,
  Target,
  History,
  Shield,
  TrendingUp,
} from "lucide-react";
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";

// Custom hook for smooth scrolling animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

// Subtle Shadow Pattern for Navigation
const NavShadowPattern = () => {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1400 120"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.offWhite} stopOpacity="0.05" />
            <stop offset="20%" stopColor={colors.silver} stopOpacity="0.08" />
            <stop offset="40%" stopColor={colors.paleGray} stopOpacity="0.06" />
            <stop
              offset="60%"
              stopColor={colors.lightGray}
              stopOpacity="0.04"
            />
            <stop offset="80%" stopColor={colors.gray} stopOpacity="0.06" />
            <stop
              offset="100%"
              stopColor={colors.mediumGray}
              stopOpacity="0.05"
            />
          </linearGradient>

          <filter id="nav-blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#nav-gradient)"
          filter="url(#nav-blur)"
        />

        <ellipse
          cx="200"
          cy="60"
          rx="150"
          ry="40"
          fill={colors.paleGray}
          opacity="0.03"
          filter="url(#nav-blur)"
        >
          <animate
            attributeName="rx"
            values="150;180;150"
            dur="10s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="1200"
          cy="60"
          rx="200"
          ry="50"
          fill={colors.silver}
          opacity="0.02"
          filter="url(#nav-blur)"
        >
          <animate
            attributeName="rx"
            values="200;250;200"
            dur="15s"
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
    </div>
  );
};

// Enhanced Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);
  const scrollY = useScrollAnimation();
  const location = useLocation();
  const navigate = useNavigate();

  // Get current page from location
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

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

  useEffect(() => {
    setIsScrolled(scrollY > 80);
  }, [scrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", id: "home", path: "/" },
    {
      name: "About Us",
      id: "about",
      path: "/about",
      hasDropdown: false,
      dropdownItems: [
        { 
          name: "Investment Focus", 
          id: "focus", 
          path: "/focus", 
          icon: Target, 
          color: colors.darkNavy 
        },
        { 
          name: "De-risking", 
          id: "de-risking", 
          path: "/de-risking", 
          icon: Shield, 
          color: colors.darkGray 
        },
        { 
          name: "Value Creation", 
          id: "value-creation", 
          path: "/value-creation", 
          icon: TrendingUp, 
          color: colors.mediumGray 
        },
        { 
          name: "Localisation", 
          id: "localisation", 
          path: "/localisation", 
          icon: SiLocal, 
          color: colors.gray 
        },
      ]
    },
    { name: "Investee Companies", id: "investee-companies", path: "/investee-companies" },
    { name: "Team", id: "team", path: "/team" },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isCurrentPage = (itemId, dropdownItems = []) => {
    return currentPage === itemId || dropdownItems.some(subItem => currentPage === subItem.id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-2xl"
            : "bg-white/95 backdrop-blur-xl shadow-lg"
        }`}
        style={{
          borderBottom: `1px solid ${
            isScrolled ? colors.silver : colors.offWhite
          }40`,
          boxShadow: isScrolled
            ? `0 20px 40px ${colors.paleGray}20, 0 10px 20px ${colors.silver}15`
            : `0 10px 30px ${colors.offWhite}30, 0 5px 15px ${colors.silver}10`,
        }}
      >
        {/* Subtle pattern overlay */}
        <NavShadowPattern />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-700 ${
              isScrolled ? "h-20 sm:h-24" : "h-24 sm:h-28"
            }`}
          >
            {/* Logo with hover effect */}
            <Link
              to="/"
              className="flex items-center group cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                <img
                  src="/logo2.png"
                  alt="Acquirise Logo"
                  className={`transition-all duration-500 ${
                    isScrolled ? "h-30 sm:h-26" : "h-30 sm:h-26"
                  } w-auto relative z-10`}
                />
                {/* Logo glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${colors.paleGray}20 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    transform: "scale(1.5)",
                  }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-3">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative"
                    ref={item.hasDropdown ? dropdownRef : null}
                  >
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setAboutDropdownOpen(!aboutDropdownOpen)
                          }
                          className={`relative px-4 py-2.5 rounded-sm text-lg font-medium transition-all duration-300 group flex items-center space-x-1.5 ${
                            isCurrentPage(item.id, item.dropdownItems)
                              ? "bg-white shadow-xl translate-x-1"
                              : ""
                          }`}
                          style={{
                            color: isCurrentPage(item.id, item.dropdownItems)
                                ? colors.navy
                                : colors.gray,
                            borderLeft: isCurrentPage(item.id, item.dropdownItems)
                                ? `3px solid ${colors.navy}`
                                : "3px solid transparent",
                            background: isCurrentPage(item.id, item.dropdownItems)
                                ? `linear-gradient(90deg, ${colors.offWhite}10 0%, white 100%)`
                                : "transparent",
                            boxShadow: isCurrentPage(item.id, item.dropdownItems)
                                ? `0 4px 12px ${colors.paleGray}30`
                                : "none",
                          }}
                          onMouseEnter={(e) => {
                            if (!isCurrentPage(item.id, item.dropdownItems)) {
                              e.currentTarget.style.background = `linear-gradient(90deg, ${colors.offWhite}05 0%, transparent 100%)`;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isCurrentPage(item.id, item.dropdownItems)) {
                              e.currentTarget.style.background = "transparent";
                            }
                          }}
                        >
                          <span className="gravesend-sans font-light relative z-10">
                            {item.name}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-200 ${
                              aboutDropdownOpen ? "rotate-180" : ""
                            }`}
                            style={{ color: colors.lightGray }}
                          />
                        </button>

                        {/* Enhanced Desktop Dropdown */}
                        {aboutDropdownOpen && (
                          <div
                            className="absolute top-full left-0 mt-3 w-72 bg-white/98 backdrop-blur-xl rounded-lg shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden"
                            style={{
                              border: `1px solid ${colors.offWhite}60`,
                              boxShadow: `0 20px 40px ${colors.paleGray}25, 0 10px 20px ${colors.silver}15`,
                            }}
                          >
                            {/* Dropdown header gradient */}
                            <div
                              className="absolute top-0 left-0 right-0 h-1"
                              style={{
                                background: `linear-gradient(90deg, ${colors.darkNavy} 0%, ${colors.mediumGray} 50%, ${colors.lightGray} 100%)`,
                              }}
                            />

                            {item.dropdownItems.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <button
                                  key={subItem.name}
                                  onClick={() => handleNavClick(subItem.path)}
                                  className={`w-full text-left px-5 py-3.5 transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${
                                    currentPage === subItem.id
                                      ? "bg-gradient-to-r"
                                      : ""
                                  }`}
                                  style={{
                                    background:
                                      currentPage === subItem.id
                                        ? `linear-gradient(90deg, ${colors.offWhite}20 0%, transparent 100%)`
                                        : "transparent",
                                    borderLeft:
                                      currentPage === subItem.id
                                        ? `3px solid ${subItem.color}`
                                        : "3px solid transparent",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (currentPage !== subItem.id) {
                                      e.currentTarget.style.background = `linear-gradient(90deg, ${colors.offWhite}10 0%, transparent 100%)`;
                                      e.currentTarget.style.borderLeft = `3px solid ${subItem.color}40`;
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (currentPage !== subItem.id) {
                                      e.currentTarget.style.background =
                                        "transparent";
                                      e.currentTarget.style.borderLeft =
                                        "3px solid transparent";
                                    }
                                  }}
                                >
                                  <div
                                    className="p-2 rounded-sm transition-all duration-300 group-hover:scale-110"
                                    style={{
                                      backgroundColor: `${subItem.color}10`,
                                      border: `1px solid ${subItem.color}20`,
                                    }}
                                  >
                                    <IconComponent
                                      size={18}
                                      style={{ color: subItem.color }}
                                    />
                                  </div>
                                  <div>
                                    <span
                                      className="gellix-font font-medium block"
                                      style={{
                                        color:
                                          currentPage === subItem.id
                                            ? colors.darkNavy
                                            : colors.gray,
                                      }}
                                    >
                                      {subItem.name}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`relative px-4 py-2.5 rounded-sm text-lg font-medium transition-all duration-300 group block ${
                          currentPage === item.id
                            ? "bg-white shadow-xl translate-x-1"
                            : ""
                        }`}
                        style={{
                          color:
                            currentPage === item.id ? colors.navy : colors.gray,
                          borderLeft:
                            currentPage === item.id
                              ? `3px solid ${colors.navy}`
                              : "3px solid transparent",
                          background:
                            currentPage === item.id
                              ? `linear-gradient(90deg, ${colors.offWhite}10 0%, white 100%)`
                              : "transparent",
                          boxShadow:
                            currentPage === item.id
                              ? `0 4px 12px ${colors.paleGray}30`
                              : "none",
                        }}
                        onMouseEnter={(e) => {
                          if (currentPage !== item.id) {
                            e.currentTarget.style.background = `linear-gradient(90deg, ${colors.offWhite}05 0%, transparent 100%)`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (currentPage !== item.id) {
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                      >
                        <span className="gravesend-sans font-meduim relative z-10">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-lg transition-all duration-300"
              style={{
                background: isOpen
                  ? `linear-gradient(135deg, ${colors.offWhite} 0%, ${colors.silver}20 100%)`
                  : "transparent",
                boxShadow: isOpen ? `0 4px 12px ${colors.paleGray}20` : "none",
              }}
            >
              <div className="relative w-7 h-7">
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-3" : "translate-y-1"
                  }`}
                  style={{
                    backgroundColor: isOpen ? colors.darkNavy : colors.navy,
                    boxShadow: `0 1px 3px ${colors.paleGray}30`,
                  }}
                />
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "opacity-0" : "translate-y-3 opacity-100"
                  }`}
                  style={{
                    backgroundColor: colors.mediumGray,
                    boxShadow: `0 1px 3px ${colors.paleGray}30`,
                  }}
                />
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-3" : "translate-y-5"
                  }`}
                  style={{
                    backgroundColor: isOpen ? colors.darkGray : colors.gray,
                    boxShadow: `0 1px 3px ${colors.paleGray}30`,
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="bg-white/98 backdrop-blur-xl"
            style={{
              borderTop: `1px solid ${colors.offWhite}40`,
              background: `linear-gradient(180deg, white 0%, ${colors.offWhite}05 100%)`,
            }}
          >
            <div className="px-1 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                          className={`block w-full text-left px-6 py-4 rounded-sm font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                            isCurrentPage(item.id, item.dropdownItems)
                              ? "shadow-lg translate-x-2"
                              : "hover:translate-x-1"
                          }`}
                          style={{
                            color: isCurrentPage(item.id, item.dropdownItems)
                                ? colors.navy
                                : colors.gray,
                            borderLeft: isCurrentPage(item.id, item.dropdownItems)
                                ? `4px solid ${colors.navy}`
                                : "4px solid transparent",
                            backgroundColor: isCurrentPage(item.id, item.dropdownItems)
                                ? `${colors.offWhite}10`
                                : "transparent",
                            boxShadow: isCurrentPage(item.id, item.dropdownItems)
                                ? `0 4px 12px ${colors.paleGray}20`
                                : "none",
                            transitionDelay: `${index * 50}ms`,
                          }}
                        >
                          <div className="gellix-font flex items-center justify-between">
                            {item.name}
                            <div className="flex items-center space-x-2">
                              {isCurrentPage(item.id, item.dropdownItems) && (
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: colors.navy }}
                                />
                              )}
                              <ChevronDown
                                size={18}
                                className={`transform transition-transform duration-200 ${
                                  mobileAboutOpen ? "rotate-180" : ""
                                }`}
                                style={{ color: colors.lightGray }}
                              />
                            </div>
                          </div>
                        </button>

                        {/* Mobile Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileAboutOpen
                              ? "max-h-96 opacity-100 mt-2"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-4 space-y-1">
                            {item.dropdownItems.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={`block w-full text-left px-4 py-3 rounded-sm font-medium transition-all duration-300 transform hover:scale-[1.01] flex items-center space-x-3 ${
                                    currentPage === subItem.id
                                      ? "shadow-md bg-white translate-x-1"
                                      : "hover:translate-x-0.5"
                                  }`}
                                  style={{
                                    color:
                                      currentPage === subItem.id
                                        ? colors.darkNavy
                                        : colors.gray,
                                    borderLeft:
                                      currentPage === subItem.id
                                        ? `3px solid ${subItem.color}`
                                        : "3px solid transparent",
                                    backgroundColor:
                                      currentPage === subItem.id
                                        ? `${colors.offWhite}08`
                                        : "transparent",
                                    transitionDelay: `${subIndex * 30}ms`,
                                  }}
                                >
                                  <div
                                    className="p-1.5 rounded-sm"
                                    style={{
                                      backgroundColor: `${subItem.color}10`,
                                      border: `1px solid ${subItem.color}20`,
                                    }}
                                  >
                                    <IconComponent
                                      size={16}
                                      style={{ color: subItem.color }}
                                    />
                                  </div>
                                  <span className="gellix-font">
                                    {subItem.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block w-full text-left px-6 py-4 rounded-sm font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                          currentPage === item.id
                            ? "shadow-lg translate-x-2"
                            : "hover:translate-x-1"
                        }`}
                        style={{
                          color:
                            currentPage === item.id ? colors.navy : colors.gray,
                          borderLeft:
                            currentPage === item.id
                              ? `4px solid ${colors.navy}`
                              : "4px solid transparent",
                          backgroundColor:
                            currentPage === item.id
                              ? `${colors.offWhite}10`
                              : "transparent",
                          boxShadow:
                            currentPage === item.id
                              ? `0 4px 12px ${colors.paleGray}20`
                              : "none",
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="gellix-font flex items-center justify-between">
                          {item.name}
                          {currentPage === item.id && (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: colors.navy }}
                            />
                          )}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Mobile Footer */}
              <div
                className="pt-8 mt-8"
                style={{ borderTop: `1px solid ${colors.silver}30` }}
              >
                <div className="flex items-center justify-center space-x-8 mb-6">
                  {[
                    { icon: Phone, label: "Call Us", color: colors.darkNavy },
                    { icon: Mail, label: "Email", color: colors.darkGray },
                    { icon: Globe, label: "Website", color: colors.mediumGray },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="text-center group cursor-pointer"
                    >
                      <div
                        className="mx-auto mb-2 p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${item.color}10`,
                          border: `1px solid ${item.color}20`,
                        }}
                      >
                        <item.icon size={24} style={{ color: item.color }} />
                      </div>
                      <p
                        className="text-sm gellix-font"
                        style={{ color: colors.gray }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="gellix-font text-center px-6 py-3 rounded-lg font-medium"
                  style={{
                    background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkGray} 100%)`,
                    color: "white",
                    boxShadow: `0 4px 12px ${colors.navy}30`,
                  }}
                >
                  www.acquirise.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to prevent content jump */}
      <div className="h-24 sm:h-28" />
    </>
  );
};

export default Navigation;