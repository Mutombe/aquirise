import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp } from 'lucide-react';
import Navigation from './nav';
import HomePage from './home';
import AboutUsPage from './about';
import TeamSection from './team';
import InvestmentFocusSection from './focus';
import LocalizationPage from './loacalisation';
import NewsSection from './news';
import ContactSection from './contact';
import Footer from './footer';
import InvesteeCompaniesPage from './investee';
import DeRiskingPage from './derisking';
import ValueCreationPage from './valuecreation';
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Component with your brand colors
const LoadingScreen = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ 
        background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 50%, ${colors.darkGray} 100%)`
      }}
    >
      {/* Background Pattern */}

      <div className="text-center relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container */}
          <div 
            className="w-32 h-32 mx-auto rounded-sm flex items-center justify-center shadow-2xl backdrop-blur-sm border border-opacity-20 p-4 relative"
            style={{ 
              backgroundColor: `${colors.silver}15`,
              borderColor: colors.silver,
            }}
          >
            {/* Your actual logo image */}
            <img
              src="/logo1.png" // Replace with your actual logo path
              alt="Company Logo"
              className="w-full h-full object-contain"
              style={{ 
                filter: 'brightness(1.2) contrast(1.1)',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
              onError={(e) => {
                // Fallback if logo doesn't load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback logo if image fails to load */}
            <div 
              className="w-full h-full items-center justify-center flex-col space-y-1"
              style={{ display: 'none' }}
            >
              <div 
                className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center"
                style={{ backgroundColor: colors.silver }}
              >
                <span 
                  className="gravesend-sans font-bold text-2xl"
                  style={{ color: colors.darkNavy }}
                >
                  L
                </span>
              </div>
              <div 
                className="text-xs font-semibold tracking-wider"
                style={{ color: colors.silver }}
              >
                LOGO
              </div>
            </div>
          </div>

          {/* Glow effect behind logo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-2xl"
          >
            <div 
              className="w-full h-full opacity-30 rounded-full" 
              style={{ 
                background: `linear-gradient(to right, ${colors.lightGray}, ${colors.paleGray})`
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-2">
            {[0, 0.2, 0.4].map((delay, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors.paleGray }}
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm mt-4 font-light tracking-wider gravesend-sans"
            style={{ color: colors.offWhite }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  return (
    <div className="App">
      <style jsx>{`
        @font-face {
          font-family: 'Gravesend Sans';
          src: url('./fonts/fonnts.com-Gravesend_Sans_Light.otf') format('opentype');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Gravesend Sans';
          src: url('./fonts/fonnts.com-Gravesend_Sans_Medium.otf') format('opentype');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Gravesend Sans';
          src: url('./fonts/fonnts.com-Gravesend_Sans_Bold.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        
        /* Century Gothic Font Face */
        @font-face {
          font-family: 'Century Gothic Custom';
          src: url('./fonts/weezerfont.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Gellix';
          src: url('./fonts/Gellix-Light.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Gellix';
          src: url('./fonts/Gellix-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        /* Font utility classes */
        .gravesend-sans {
          font-family: 'Gravesend Sans', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .roboto-font {
          font-family: 'Roboto', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .century-gothic {
          font-family: 'Century Gothic Custom', 'Century Gothic', 'Arial', sans-serif;
        }

        .gellix-font {
          font-family: 'Gellix', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
          overflow-x: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <ScrollToTop />
      <Navigation />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/focus" element={<InvestmentFocusSection />} />
          <Route path="/holdings" element={<InvesteeCompaniesPage />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/localisation" element={<LocalizationPage />} />
          <Route path="/de-risking" element={<DeRiskingPage />} />
          <Route path="/value-creation" element={<ValueCreationPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </div>
  );
};

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Initial app loading
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 2000); // Initial load time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnimatePresence mode="wait">
          {initialLoad ? (
            <LoadingScreen key="initial-loading" />
          ) : (
            <motion.div
              key="app-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AppContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;