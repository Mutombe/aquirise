import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { FaMapLocationDot } from "react-icons/fa6";
import { MdDangerous } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiWebmoney } from "react-icons/si";
import { SiSmartthings } from "react-icons/si";




const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary: "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25",
    outline: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 backdrop-blur-sm"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </button>
  );
};

const HeroSection = () => {
  const scrollY = useScrollAnimation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="African city skyline" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Capital Deployment with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 mt-2">
                Local Insight
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Gellix, sans-serif' }}>
              Deploying capital intelligently by leveraging deep, on-the-ground knowledge across Sub-Saharan Africa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <PremiumButton onClick={() => window.location.href='/contact'}>
                Explore Opportunities
                <ArrowRight size={20} />
              </PremiumButton>
              <PremiumButton variant="outline" onClick={() => window.location.href='/Aquirise_Profile.pdf'}>
                Download Our Profile
              </PremiumButton>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>$200M+</div>
                <div className="text-slate-600 text-sm" style={{ fontFamily: 'Gellix, sans-serif' }}>Capital Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>25+</div>
                <div className="text-slate-600 text-sm" style={{ fontFamily: 'Gellix, sans-serif' }}>Portfolio Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>5</div>
                <div className="text-slate-600 text-sm" style={{ fontFamily: 'Gellix, sans-serif' }}>Markets Active</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
                    <SiSmartthings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>Risk Mitigation</h3>
                    <p className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Intelligent structuring and diversification</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center">
                    <GrMoney className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>Value Creation</h3>
                    <p className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Sustainable long-term value building</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <GiTakeMyMoney className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Gravesend Sans, serif' }}>Local Intelligence</h3>
                    <p className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Deep market understanding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;