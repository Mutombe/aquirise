import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp } from 'lucide-react';
import Navigation from './nav';
// Custom hook for smooth scrolling animations
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-400/10 to-slate-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

// Premium Button Component
const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer";
  const variants = {
    primary: "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 shadow-lg hover:shadow-xl",
    outline: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      <span className="gravesend-sans relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </button>
  );
};

const HeroSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="African city skyline" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-20 pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div 
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="gravesend-sans text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Capital Deployment with
            <span className="block text-4xl sm:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mt-2">
              Local Insight
            </span>
          </h1>
          
          <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Deploying capital intelligently by leveraging deep, on-the-ground knowledge across Sub-Saharan Africa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <PremiumButton>
              Explore Opportunities
              <ArrowRight size={20} />
            </PremiumButton>
            <PremiumButton variant="outline">
              Learn More
            </PremiumButton>
          </div>
        </div>

        {/* Floating cards with core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 max-w-6xl mx-auto px-4">
          {[
            {
              icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
              title: "Risk Mitigation",
              description: "Actively managing risk through intelligent structuring and diversification strategies"
            },
            {
              icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
              title: "Value Creation", 
              description: "Building sustainable long-term value for all our stakeholders and communities"
            },
            {
              icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
              title: "Local Intelligence",
              description: "Deep market understanding combined with international investment standards"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: `translateY(${scrollY * 0.05}px)` 
              }}
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="gravesend-sans text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4" >{item.title}</h3>
              <p className="gellix-font text-slate-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            className="space-y-6 sm:space-y-8"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'serif' }}>
              About <span className="text-yellow-400">ACQUIRISE</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We are a catalyst for sustainable transformation, investing in businesses that solve real problems across key sectors in Sub-Saharan Africa.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Our thematic, impact-driven approach targets scalable ventures that achieve both exceptional returns and tangible developmental outcomes. With deep local knowledge and international standards, we bridge the gap between opportunity and capital.
            </p>
            <PremiumButton>
              Learn More About Us
              <ArrowRight size={18} />
            </PremiumButton>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Business meeting in Africa" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Focus Section Component
const FocusSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            OUR <span className="text-yellow-400">FOCUS</span>
          </h2>
          <p className="gellix-font text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We adopt a thematic, impact-driven approach, targeting scalable ventures that achieve both exceptional returns and tangible developmental outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              title: "Localization",
              description: "Deploying capital intelligently by leveraging deep, on-the-ground knowledge and local partnerships",
              gradient: "from-blue-500 to-cyan-400",
              image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "De-risking", 
              description: "Actively managing risk through intelligent structuring, diversification, and thorough due diligence",
              gradient: "from-purple-500 to-pink-400",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "Value Creation",
              description: "Building sustainable long-term value for stakeholders through strategic partnerships and expertise", 
              gradient: "from-yellow-500 to-orange-400",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg sm:text-xl">{index + 1}</span>
                </div>
                <h3 className="gravesend-sans text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="gellix-font text-slate-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 text-slate-400 text-base sm:text-lg bg-slate-800/50 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="gravesend-sans font-bold text-sm sm:text-base">Botswana | Mauritius | South Africa | Zambia | Zimbabwe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <FocusSection />
    </div>
  );
};

// About Page Component  
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-8">
            About <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            At our core, we are investors in real-world solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who we are?</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Founded with the belief that capital should do more than seek returns, it should catalyse progress, we invest in private ventures across Sub-Saharan Africa that address significant challenges and unlock scalable opportunities.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                We adopt a thematic, impact-driven approach, targeting high-potential businesses in key sectors such as infrastructure, agriculture, trade, healthcare and financial inclusion. By aligning capital with innovation and execution, we aim to deliver both exceptional returns and measurable development outcomes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Our Investment Philosophy</h3>
            <p className="text-slate-300 text-lg mb-6">Our approach is anchored on three foundational pillars:</p>
            <ul className="space-y-4">
              {['Localization', 'De-risking', 'Value Creation'].map((item, index) => (
                <li key={index} className="flex items-center text-slate-300 text-lg">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrity in Action",
                description: "We act with unwavering integrity in every relationship, decision, and investment. In markets where trust is earned through consistency and transparency, we uphold the highest ethical standards, ensuring that our partners, investors and stakeholders always know where we stand.",
                tagline: "We meet communities where they are and invest with a world-class lens."
              },
              {
                title: "Local Intelligence, Global Perspective", 
                description: "We believe in the power of local insight backed by global standards. Our strength lies in our ability to understand market realities on the ground, culturally, politically and economically while applying world-class investment discipline, governance and risk management.",
                tagline: "We meet communities where they are and invest with a world-class lens."
              },
              {
                title: "Purposeful Capital",
                description: "Capital must do more than generate returns, it must create value that endures. We back businesses that solve real problems and improve lives. Every investment we make is a commitment to economic inclusion, social upliftment and long-term resilience.",
                tagline: "We invest in purpose-driven growth, not just profit."
              },
              {
                title: "Partnership for Progress",
                description: "We are not passive investors, we are active partners in growth. We roll up our sleeves, work alongside founders and support teams in scaling sustainably. Our success is measured by the strength of the businesses and ecosystems we help build.",
                tagline: "We invest with you, not just in you."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-4">{value.description}</p>
                <p className="text-yellow-400 font-medium italic">{value.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Investee Companies Page
const InvesteeCompaniesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-8">
            Investee <span className="text-yellow-400">Companies</span>
          </h1>
          <p className="text-2xl text-slate-300">Current Investments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Bard Santner Incorporated",
              location: "Mauritius, Zimbabwe",
              gradient: "from-blue-500 to-cyan-400"
            },
            {
              name: "Rudiarius Capital Management", 
              location: "South Africa",
              gradient: "from-purple-500 to-pink-400"
            },
            {
              name: "Xagna Commodities",
              location: "Botswana, Zambia", 
              gradient: "from-yellow-500 to-orange-400"
            }
          ].map((company, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${company.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{company.name[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{company.name}</h3>
                <div className="flex items-center text-slate-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{company.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Page
const TeamPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-8">
            Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Acquirise has a highly experienced team with an established track record.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-16 border border-slate-700/50 text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-slate-900 text-4xl font-bold">A</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Team Information</h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team brings together decades of experience in investment management, financial services, and regional market expertise across Sub-Saharan Africa.
          </p>
          <PremiumButton>
            <Mail size={20} />
            Contact Our Team
          </PremiumButton>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-8">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-2xl text-slate-300">Get in touch with our team</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">UNITED KINGDOM</h2>
                <div className="space-y-4 text-slate-300 text-lg">
                  <p>2nd Floor Exchange House</p>
                  <p>54-62 Athol Street</p>
                  <p>Douglas,</p>
                  <p>Isle of Man</p>
                  <p>IM1 1JD</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    For more information or enquiries, please contact
                  </p>
                  <a 
                    href="mailto:info@acquirise.com"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    info@acquirise.com
                  </a>
                </div>

                <div>
                  <PremiumButton className="w-full">
                    Send Message
                    <ArrowRight size={20} />
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 text-slate-400 text-lg">
              <Globe className="w-6 h-6" />
              <span>Botswana | Mauritius | South Africa | Zambia | Zimbabwe</span>
            </div>
            <p className="text-slate-500 mt-4">www.acquirise.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-white">ACQUIRISE</span>
          </div>
          <div className="text-slate-400 text-center md:text-right">
            <p>© 2025 Acquirise Limited. All rights reserved.</p>
            <p className="text-sm mt-2">Deploying capital with local insight</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'investee-companies':
        return <InvesteeCompaniesPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Custom font loading */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        import Navigation from './nav';

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .font-gravesend {
          font-family: 'Gravesend Sans', 'Inter', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
        }
      `}</style>
      
      <AnimatedBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;