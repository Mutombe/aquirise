import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Globe, ChevronDown, Building, Users, Target, History } from "lucide-react";

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

// Enhanced Navigation Component
const Navigation = ({ currentPage = "home", setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);
  const scrollY = useScrollAnimation();

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

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Our Focus", id: "focus" },
    { 
      name: "About Us", 
      id: "about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", id: "about", icon: History },
        { name: "Localisation", id: "localisation", icon: Target },
        { name: "De-risking", id: "de-risking", icon: Users },
        { name: "Value Creation", id: "value-creation", icon: Building }
      ]
    },
    { name: "Investee Companies", id: "investee-companies" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (pageId) => {
    if (setCurrentPage) {
      setCurrentPage(pageId);
    }
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-xl"
            : "bg-white/95 backdrop-blur-xl border-b border-gray-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-700 ${
              isScrolled ? "h-20 sm:h-24" : "h-24 sm:h-28"
            }`}
          >
            {/* Logo */}
            <div
              onClick={() => handleNavClick("home")}
              className="flex items-center group cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <img
                src="/logo2.png"
                alt="Acquirise Logo"
                className={`transition-all duration-500 ${
                  isScrolled ? "h-24 sm:h-26" : "h-28 sm:h-32"
                } w-auto`}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-3">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                          className={`relative px-3 py-2 rounded-sm text-lg font-medium transition-all duration-300 group flex items-center space-x-1 ${
                            currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id)
                              ? "bg-white shadow-lg border border translate-x-2"
                              : "hover:bg-gray-50"
                          }`}
                          style={{
                            color: currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id) ? '#273848' : 'rgba(0, 0, 0, 0.7)',
                            borderColor: currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id) ? '#273848' : 'transparent',
                          }}
                        >
                          <span className="gellix-font relative z-10">{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                          />
                          {(currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id)) && (
                            <div
                              className="absolute inset-0 rounded-sm transition-all duration-300 opacity-10"
                              style={{ backgroundColor: '#feffffff' }}
                            />
                          )}
                        </button>
                        
                        {/* Desktop Dropdown */}
                        {aboutDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.dropdownItems.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <button
                                  key={subItem.name}
                                  onClick={() => handleNavClick(subItem.id)}
                                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group ${
                                    currentPage === subItem.id ? 'bg-gray-50 border-r-2' : ''
                                  }`}
                                  style={{
                                    borderColor: currentPage === subItem.id ? '#273848' : 'transparent',
                                  }}
                                >
                                  <IconComponent 
                                    size={18} 
                                    style={{ color: currentPage === subItem.id ? '#273848' : 'rgba(0, 0, 0, 0.6)' }}
                                    className="group-hover:scale-110 transition-transform duration-200"
                                  />
                                  <span 
                                    className="gellix-font font-medium"
                                    style={{ color: currentPage === subItem.id ? '#273848' : 'rgba(0, 0, 0, 0.8)' }}
                                  >
                                    {subItem.name}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`relative px-3 py-2 rounded-sm text-lg font-medium transition-all duration-300 group ${
                          currentPage === item.id
                            ? "bg-white shadow-lg border border translate-x-2"
                            : "hover:bg-gray-50"
                        }`}
                        style={{
                          color: currentPage === item.id ? '#273848' : 'rgba(0, 0, 0, 0.7)',
                          borderColor: currentPage === item.id ? '#273848' : 'transparent',
                        }}
                      >
                        <span className="gellix-font relative z-10">{item.name}</span>
                        {currentPage === item.id && (
                          <div
                            className="absolute inset-0 rounded-sm transition-all duration-300 opacity-10"
                            style={{ backgroundColor: '#feffffff' }}
                          />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl transition-all duration-300 hover:bg-gray-100"
              style={{ color: '#273848' }}
            >
              <div className="relative w-7 h-7">
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-3" : "translate-y-1"
                  }`}
                  style={{ backgroundColor: '#273848' }}
                />
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "opacity-0" : "translate-y-3 opacity-100"
                  }`}
                  style={{ backgroundColor: '#273848' }}
                />
                <span
                  className={`absolute top-0 left-0 w-7 h-0.5 rounded-full transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-3" : "translate-y-5"
                  }`}
                  style={{ backgroundColor: '#273848' }}
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
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-200">
            <div className="px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                          className={`block w-full text-left px-6 py-4 rounded-sm font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                            currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id)
                              ? "shadow-lg border translate-x-2"
                              : "hover:bg-gray-50 hover:translate-x-1"
                          }`}
                          style={{
                            color: currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id) ? '#273848' : 'rgba(0, 0, 0, 0.7)',
                            borderColor: currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id) ? '#273848' : 'transparent',
                            backgroundColor: currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id) ? 'white' : 'transparent',
                            transitionDelay: `${index * 50}ms`,
                          }}
                        >
                          <div className="gellix-font flex items-center justify-between">
                            {item.name}
                            <div className="flex items-center space-x-2">
                              {(currentPage === item.id || item.dropdownItems?.some(subItem => currentPage === subItem.id)) && (
                                <div 
                                  className="w-2 h-2 rounded-sm"
                                  style={{ backgroundColor: '#273848' }}
                                />
                              )}
                              <ChevronDown 
                                size={18} 
                                className={`transform transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`}
                                style={{ color: '#273848' }}
                              />
                            </div>
                          </div>
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileAboutOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-4 space-y-1">
                            {item.dropdownItems.map((subItem, subIndex) => {
                              const IconComponent = subItem.icon;
                              return (
                                <button
                                  key={subItem.name}
                                  onClick={() => handleNavClick(subItem.id)}
                                  className={`block w-full text-left px-4 py-3 rounded-sm font-medium transition-all duration-300 transform hover:scale-[1.01] flex items-center space-x-3 ${
                                    currentPage === subItem.id
                                      ? "shadow-md border bg-white translate-x-1"
                                      : "hover:bg-gray-50 hover:translate-x-0.5"
                                  }`}
                                  style={{
                                    color: currentPage === subItem.id ? '#273848' : 'rgba(0, 0, 0, 0.6)',
                                    borderColor: currentPage === subItem.id ? '#273848' : 'transparent',
                                    transitionDelay: `${subIndex * 30}ms`,
                                  }}
                                >
                                  <IconComponent 
                                    size={16} 
                                    style={{ color: currentPage === subItem.id ? '#273848' : 'rgba(0, 0, 0, 0.5)' }}
                                  />
                                  <span className="gellix-font">{subItem.name}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-6 py-4 rounded-sm font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                          currentPage === item.id
                            ? "shadow-lg border translate-x-2"
                            : "hover:bg-gray-50 hover:translate-x-1"
                        }`}
                        style={{
                          color: currentPage === item.id ? '#273848' : 'rgba(0, 0, 0, 0.7)',
                          borderColor: currentPage === item.id ? '#273848' : 'transparent',
                          backgroundColor: currentPage === item.id ? 'white' : 'transparent',
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="gellix-font flex items-center justify-between">
                          {item.name}
                          {currentPage === item.id && (
                            <div 
                              className="w-2 h-2 rounded-sm"
                              style={{ backgroundColor: '#273848' }}
                            />
                          )}
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Mobile Footer */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <Phone size={24} style={{ color: '#273848' }} className="mx-auto mb-2" />
                    <p className="text-sm gellix-font" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Call Us</p>
                  </div>
                  <div className="text-center">
                    <Mail size={24} style={{ color: '#273848' }} className="mx-auto mb-2" />
                    <p className="text-sm gellix-font" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Email</p>
                  </div>
                  <div className="text-center">
                    <Globe size={24} style={{ color: '#273848' }} className="mx-auto mb-2" />
                    <p className="text-sm gellix-font" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Website</p>
                  </div>
                </div>
                
                <div 
                  className="gellix-font text-center px-6 py-3 rounded-xl font-medium"
                  style={{ 
                    backgroundColor: '#273848', 
                    color: 'white',
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