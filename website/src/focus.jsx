
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SiLocal } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Investment Focus
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
            Our Strategic <span className="text-amber-600">Approach</span>
          </h3>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto" style={{ fontFamily: 'Gellix, sans-serif' }}>
            We adopt a thematic, impact-driven approach, targeting scalable ventures that achieve both exceptional returns and tangible developmental outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Localization",
              description: "Deploying capital intelligently by leveraging deep, on-the-ground knowledge and local partnerships across Sub-Saharan Africa.",
              icon: <SiLocal className="w-8 h-8" />,
              gradient: "from-blue-500 to-cyan-400",
              image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "De-risking", 
              description: "Actively managing risk through intelligent structuring, diversification, and thorough due diligence processes.",
              icon: <SiWebmoney className="w-8 h-8" />,
              gradient: "from-purple-500 to-pink-400",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "Value Creation",
              description: "Building sustainable long-term value for stakeholders through strategic partnerships and operational expertise.", 
              icon: <MdOutlineReceiptLong className="w-8 h-8" />,
              gradient: "from-amber-500 to-orange-400",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>{item.title}</h4>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Gellix, sans-serif' }}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Sectors We Target */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Target Sectors
            </h4>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>
              We focus on high-growth sectors with strong fundamentals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Financial Services", icon: "💳" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Technology", icon: "💻" },
              { name: "Infrastructure", icon: "🏗️" },
              { name: "Agriculture", icon: "🌱" },
              { name: "Education", icon: "📚" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Energy", icon: "⚡" }
            ].map((sector, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <div className="text-slate-900 font-medium" style={{ fontFamily: 'Gellix, sans-serif' }}>{sector.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-slate-600 text-lg bg-white rounded-full px-8 py-4 shadow-lg border border-slate-100">
            <Globe className="w-6 h-6 text-amber-600" />
            <span className="font-medium" style={{ fontFamily: 'Gellix, sans-serif' }}>Botswana | Mauritius | South Africa | Zambia | Zimbabwe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocusSection;