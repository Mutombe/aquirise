import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Shield, TrendingUp, Globe } from 'lucide-react';
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineReceiptLong } from "react-icons/md";


const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

const InvestmentFocusSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="gravesend-sans text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#273848' }}
          >
            Our <span className="text-gray-500">Focus</span>
          </h2>
          <p className="gellix-font text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
            We are a catalyst for sustainable transformation by investing in businesses that solve real problems 
            across key sectors. We adopt a thematic, impact-driven approach, targeting scalable ventures that 
            achieve both exceptional returns and tangible developmental outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Localization",
              description: "Deploying capital intelligently by leveraging deep, on-the-ground knowledge",
              icon: <SiLocal size={32} className="text-gray-300"/>
            },
            {
              title: "De-risking", 
              description: "Actively managing risk through structuring and diversification",
              icon: <SiWebmoney size={32} className="text-gray-300"/>
            },
            {
              title: "Value Creation",
              description: "Building long term value for our stakeholders", 
              icon: <GiTakeMyMoney size={32} className="text-gray-300"/>
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-sm p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer relative"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              onClick={() => window.location.href = '#about'}
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 opacity-0 opacity-100 transition-opacity duration-300">
                <HiMiniArrowTrendingUp size={20} style={{ color: '#273848' }} />
              </div>
              
              <div 
                className="w-16 h-16 rounded-sm flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#273848' }}
              >
                {item.icon}
              </div>
              <h4 
                className="gravesend-sans text-2xl font-bold mb-4"
                style={{ color: '#273848' }}
              >
                {item.title}
              </h4>
              <p className="gellix-font leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sectors We Target */}
        <div className="bg-white rounded-sm p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h4 
              className="gravesend-sans text-3xl font-bold mb-4"
              style={{ color: '#273848'}}
            >
              Target Sectors
            </h4>
            <p className="gellix-font text-xl" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
              We focus on high-growth sectors with strong fundamentals
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Financial Services", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
              { name: "Healthcare", image: "/home9.jpg" },
              { name: "Technology", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
              { name: "Infrastructure", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
              { name: "Agriculture", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
              { name: "Education", image: "/home8.jpg" },
              { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
              { name: "Energy", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
            ].map((sector, index) => (
              <div 
                key={index} 
                className="relative text-center p-6 rounded-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-32 flex items-center justify-center"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                  style={{ backgroundImage: `url(${sector.image})` }}
                ></div>
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{ backgroundColor: '#273848' }}
                ></div>
                
                {/* Text */}
                <div 
                  className="gravesend-sans relative z-10 font-medium text-white"
                >
                  {sector.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocusSection;