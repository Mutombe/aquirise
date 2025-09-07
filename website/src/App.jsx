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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        import PortfolioSection from './portifolio';

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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