import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp } from 'lucide-react';
import Navigation from './nav';
import HeroSection from './home';
import { AboutSection, TeamSection} from './about';
import InvestmentFocusSection from './focus';
import PortfolioSection from './portifolio';
import NewsSection from './news';
import ContactSection from './contact';
import Footer from './footer';
import InvesteeCompaniesPage from './investee';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <HeroSection />
            <AboutSection />
            <InvestmentFocusSection />
            <PortfolioSection />
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'focus':
        return <InvestmentFocusSection />;
      case 'investee-companies':
        return <InvesteeCompaniesPage />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'team':
        return <TeamSection />;
      case 'news':
        return <NewsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <div>
            <HeroSection />
            <AboutSection />
            <InvestmentFocusSection />
            <PortfolioSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom fonts and global styles */}
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #f59e0b;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #d97706;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;