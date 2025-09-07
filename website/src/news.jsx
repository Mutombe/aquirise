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

const NewsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Latest News
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
            Industry <span className="text-amber-600">Insights</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "African Fintech Sector Shows Unprecedented Growth",
              excerpt: "New report highlights the massive potential in Sub-Saharan Africa's financial technology sector...",
              date: "March 15, 2025",
              category: "Market Analysis",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "Sustainable Investment Strategies for Emerging Markets",
              excerpt: "Our latest whitepaper explores sustainable investment approaches in African markets...",
              date: "March 10, 2025", 
              category: "Research",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            },
            {
              title: "Acquirise Announces New Partnership in Healthcare",
              excerpt: "Strategic partnership aims to expand access to quality healthcare across rural communities...",
              date: "March 5, 2025",
              category: "Company News",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            }
          ].map((article, index) => (
            <article key={index} className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-slate-500 text-sm mb-3" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  {article.date}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                  {article.title}
                </h4>
                <p className="text-slate-600 mb-6" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  {article.excerpt}
                </p>
                <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300 flex items-center gap-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <PremiumButton variant="outline">
            View All News
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
