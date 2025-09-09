import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, TrendingUp, Target, Users, Globe, Building2, Award, CheckCircle, Linkedin, Twitter } from 'lucide-react';

const PremiumButton = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseClasses = "group relative overflow-hidden px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base";
  const variants = {
    primary: "text-white shadow-lg hover:shadow-xl",
    outline: "border-2 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm"
  };
  
  const primaryStyle = { 
    backgroundColor: '#273848',
    borderColor: '#273848'
  };
  
  const outlineStyle = {
    borderColor: 'white'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      onClick={onClick} 
      style={variant === 'primary' ? primaryStyle : outlineStyle}
      {...props}
    >
      <span className="gellix-font relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div 
        className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"
        style={{ backgroundColor: variant === 'primary' ? '#1a2631' : '#273848' }}
      ></div>
    </button>
  );
};

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Professional business team"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(39, 56, 72, 0.8)' }}
          ></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <span 
              className="inline-block backdrop-blur-sm border px-3 py-2 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6 gellix-font"
              style={{ 
                backgroundColor: 'rgba(39, 56, 72, 0.2)',
                borderColor: 'rgba(39, 56, 72, 0.3)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Our Team
            </span>
            <h1 
              className="gravesend-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
            >
              Leadership
              <span className="block text-gray-300">
                Excellence
              </span>
            </h1>
            <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Acquirise has a highly experienced team with an established track record in investment management and regional expertise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
            <PremiumButton>
              Meet Our Team
              <ArrowRight size={18} />
            </PremiumButton>
            <PremiumButton variant="outline">
              Join Our Team
            </PremiumButton>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#273848' }}
            >
              Our <span className="text-gray-500">Leadership</span>
            </h2>
            <p 
              className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: 'rgba(0, 0, 0, 0.5)' }}
            >
              Meet the experienced professionals driving our investment strategy and delivering exceptional results
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                name: "Dr. Sarah Mwangi",
                position: "Managing Partner",
                experience: "15+ years",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                linkedin: "#",
                email: "sarah@acquirise.com"
              },
              {
                name: "James Ochieng",
                position: "Investment Director", 
                experience: "12+ years",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                linkedin: "#",
                email: "james@acquirise.com"
              },
              {
                name: "Fatima Al-Rashid",
                position: "Portfolio Manager",
                experience: "10+ years", 
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                linkedin: "#",
                email: "fatima@acquirise.com"
              }
            ].map((member, index) => (
              <div key={index} className="group relative mx-2 sm:mx-0">
                {/* Main Card */}
                <div className="bg-white rounded-sm p-6 sm:p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
                  {/* Profile Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-sm overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <h4 
                    className="gravesend-sans text-lg sm:text-xl font-bold mb-2"
                    style={{ color: '#273848' }}
                  >
                    {member.name}
                  </h4>
                  <p 
                    className="gellix-font font-medium mb-2 text-sm sm:text-base"
                    style={{ color: 'rgba(39, 56, 72, 0.7)' }}
                  >
                    {member.position}
                  </p>
                  <p 
                    className="gellix-font text-xs sm:text-sm mb-4"
                    style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    {member.experience}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#273848' }}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-500 rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Floating Elements */}
                <div 
                  className="absolute -top-2 -right-2 w-4 sm:w-6 h-4 sm:h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: '#273848' }}
                ></div>
                <div className="absolute -bottom-2 -left-2 w-3 sm:w-4 h-3 sm:h-4 bg-gray-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 mx-2 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <h3 
                className="gravesend-sans text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: '#273848' }}
              >
                Our <span className="text-gray-500">Values</span>
              </h3>
              <p 
                className="gellix-font text-lg sm:text-xl px-4"
                style={{ color: 'rgba(0, 0, 0, 0.5)' }}
              >
                The principles that guide our approach to investment and partnership
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Strategic Vision",
                  description: "Long-term thinking with strategic focus"
                },
                {
                  icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Collaborative Approach",
                  description: "Working together for mutual success"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Excellence Driven",
                  description: "Committed to delivering exceptional results"
                },
                {
                  icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Regional Expertise",
                  description: "Deep understanding of African markets"
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-4 sm:p-6 rounded-sm bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: '#273848' }}
                  >
                    {value.icon}
                  </div>
                  <h4 
                    className="gravesend-sans text-base sm:text-lg font-bold mb-2 sm:mb-3"
                    style={{ color: '#273848' }}
                  >
                    {value.title}
                  </h4>
                  <p 
                    className="gellix-font text-sm leading-relaxed px-2"
                    style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <PremiumButton onClick={() => window.location.href = 'mailto:team@acquirise.com'}>
              <Mail size={20} />
              Contact Our Team
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;