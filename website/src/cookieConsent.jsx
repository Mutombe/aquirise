// components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import { X, Shield, BarChart, Target } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Your website's color palette
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
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to ensure page has loaded
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Initialize analytics/tracking
    initializeTracking('all');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Only essential cookies
    initializeTracking('essential');
  };

  const handleAcceptSelected = () => {
    const essential = document.getElementById('essential-cookies')?.checked || true;
    const analytics = document.getElementById('analytics-cookies')?.checked || false;
    const marketing = document.getElementById('marketing-cookies')?.checked || false;
    
    const preferences = {
      essential,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    initializeTracking(preferences);
  };

  const initializeTracking = (consent) => {
    // Add your actual tracking initialization here
    if (consent === 'all' || (typeof consent === 'object' && consent.analytics)) {
      // Initialize Google Analytics, etc.
      console.log('Analytics cookies enabled');
      // gtag('config', 'GA_MEASUREMENT_ID');
    }
    
    if (consent === 'all' || (typeof consent === 'object' && consent.marketing)) {
      // Initialize marketing cookies
      console.log('Marketing cookies enabled');
      // Facebook Pixel, etc.
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ backgroundColor: `${colors.darkNavy}20` }}
        onClick={() => setShowDetails(false)}
      />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out">
        <div 
          className="mx-2 mb-2 sm:mx-4 sm:mb-4 rounded-lg shadow-2xl backdrop-blur-md border"
          style={{ 
            backgroundColor: colors.offWhite,
            borderColor: colors.silver,
            boxShadow: `0 25px 50px -12px ${colors.darkNavy}40`
          }}
        >
          <div className="p-4 sm:p-6">
            {!showDetails ? (
              // Simple banner view
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.navy }}
                    >
                      <Shield size={16} style={{ color: colors.offWhite }} />
                    </div>
                    <h3 
                      className="gravesend-sans font-semibold text-lg"
                      style={{ color: colors.darkNavy }}
                    >
                      Cookie Preferences
                    </h3>
                  </div>
                  <p 
                    className="gellix-font text-sm leading-relaxed"
                    style={{ color: colors.gray }}
                  >
                    We use cookies to enhance your browsing experience, provide personalized content, 
                    and analyze our website traffic. Your privacy is important to us.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 gellix-font border"
                    style={{ 
                      color: colors.navy,
                      backgroundColor: 'transparent',
                      borderColor: colors.paleGray
                    }}
                  >
                    Customize
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 gellix-font"
                    style={{ 
                      color: colors.gray,
                      backgroundColor: colors.silver
                    }}
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2 text-sm font-medium rounded transition-all duration-200 gellix-font shadow-md hover:shadow-lg"
                    style={{ 
                      color: colors.offWhite,
                      background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkGray} 100%)`
                    }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              // Detailed preferences view
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 
                    className="gravesend-sans font-semibold text-xl"
                    style={{ color: colors.darkNavy }}
                  >
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-1 rounded transition-colors"
                    style={{ color: colors.gray }}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <p 
                  className="gellix-font text-sm"
                  style={{ color: colors.gray }}
                >
                  Choose which cookies you want to accept. You can change these settings at any time.
                </p>

                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div 
                    className="flex items-start space-x-4 p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: `${colors.silver}20`,
                      borderColor: colors.silver
                    }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <Shield size={20} style={{ color: colors.navy }} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <label 
                            htmlFor="essential-cookies" 
                            className="gellix-font font-medium"
                            style={{ color: colors.darkNavy }}
                          >
                            Essential Cookies
                          </label>
                          <input
                            type="checkbox"
                            id="essential-cookies"
                            checked={true}
                            disabled={true}
                            className="ml-auto"
                            style={{ accentColor: colors.navy }}
                          />
                        </div>
                        <p 
                          className="text-xs mt-1"
                          style={{ color: colors.gray }}
                        >
                          Required for website functionality and security. Cannot be disabled.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div 
                    className="flex items-start space-x-4 p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: `${colors.paleGray}15`,
                      borderColor: colors.paleGray
                    }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <BarChart size={20} style={{ color: colors.lightGray }} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <label 
                            htmlFor="analytics-cookies" 
                            className="gellix-font font-medium"
                            style={{ color: colors.darkNavy }}
                          >
                            Analytics Cookies
                          </label>
                          <input
                            type="checkbox"
                            id="analytics-cookies"
                            defaultChecked={false}
                            className="ml-auto"
                            style={{ accentColor: colors.navy }}
                          />
                        </div>
                        <p 
                          className="text-xs mt-1"
                          style={{ color: colors.gray }}
                        >
                          Help us understand website usage and improve user experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div 
                    className="flex items-start space-x-4 p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: `${colors.lightGray}15`,
                      borderColor: colors.lightGray
                    }}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <Target size={20} style={{ color: colors.mediumGray }} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <label 
                            htmlFor="marketing-cookies" 
                            className="gellix-font font-medium"
                            style={{ color: colors.darkNavy }}
                          >
                            Marketing Cookies
                          </label>
                          <input
                            type="checkbox"
                            id="marketing-cookies"
                            defaultChecked={false}
                            className="ml-auto"
                            style={{ accentColor: colors.navy }}
                          />
                        </div>
                        <p 
                          className="text-xs mt-1"
                          style={{ color: colors.gray }}
                        >
                          Used for targeted advertising and measuring campaign effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: colors.silver }}>
                  <div className="text-xs space-x-4" style={{ color: colors.lightGray }}>
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/cookie-policy" className="hover:underline">Cookie Policy</a>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={handleDecline}
                      className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 gellix-font"
                      style={{ 
                        color: colors.gray,
                        backgroundColor: colors.silver
                      }}
                    >
                      Decline All
                    </button>
                    <button
                      onClick={handleAcceptSelected}
                      className="px-4 py-2 text-sm font-medium rounded transition-all duration-200 gellix-font shadow-md hover:shadow-lg"
                      style={{ 
                        color: colors.offWhite,
                        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkGray} 100%)`
                      }}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;