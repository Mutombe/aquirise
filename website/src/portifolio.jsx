import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

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

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Our Portfolio
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
            Investment <span className="text-amber-600">Success Stories</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "FinTech Solutions Ltd",
              sector: "Financial Services",
              location: "Botswana",
              description: "Digital banking platform serving underbanked communities",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              metrics: { growth: "+150%", users: "50K+" }
            },
            {
              company: "AgriTech Innovations",
              sector: "Agriculture",
              location: "Zimbabwe",
              description: "Smart farming solutions for small-scale farmers",
              image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
              metrics: { growth: "+200%", users: "10K+" }
            },
            {
              company: "HealthCare Access",
              sector: "Healthcare",
              location: "South Africa",
              description: "Telemedicine platform for rural communities",
              image: "/heathcare.avif",
              metrics: { growth: "+120%", users: "25K+" }
            }
          ].map((company, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={company.image}
                  alt={company.company}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {company.sector}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <MapPin size={16} />
                  {company.location}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                  {company.company}
                </h4>
                <p className="text-slate-600 mb-6" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  {company.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{company.metrics.growth}</div>
                    <div className="text-xs text-slate-500">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{company.metrics.users}</div>
                    <div className="text-xs text-slate-500">Active Users</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <PremiumButton variant="outline"
            onClick={() => window.location.href = '/portfolio'}>
            View All Portfolio Companies
            <ArrowRight size={18} />
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;