import React, { useEffect } from 'react';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App Component
const App = () => {
  return (
    <Router>
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
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <ScrollToTop />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/focus" element={<InvestmentFocusSection />} />
            <Route path="/investee-companies" element={<InvesteeCompaniesPage />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/news" element={<NewsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/localisation" element={<LocalizationPage />} />
            <Route path="/de-risking" element={<DeRiskingPage />} />
            <Route path="/value-creation" element={<ValueCreationPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;