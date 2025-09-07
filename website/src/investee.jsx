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
      <span className="gellix-font relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </button>
  );
};

const InvesteeCompaniesPage = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  
  const companies = [
    {
      name: "Bard Santner Incorporated",
      sector: "Financial Services",
      location: "Mauritius, Zimbabwe",
      description: "Leading financial services provider offering innovative banking solutions across multiple African markets.",
      founded: "2018",
      employees: "250+",
      revenue: "$45M",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-500 to-cyan-400",
      metrics: {
        growth: "+180%",
        markets: "3",
        customers: "25K+"
      }
    },
    {
      name: "Rudiarius Capital Management", 
      sector: "Investment Management",
      location: "South Africa",
      description: "Boutique asset management firm specializing in emerging market investments and alternative strategies.",
      founded: "2019",
      employees: "85+",
      revenue: "$32M",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-purple-500 to-pink-400",
      metrics: {
        growth: "+220%",
        markets: "5",
        aum: "$500M+"
      }
    },
    {
      name: "Xagna Commodities",
      sector: "Agriculture & Trading",
      location: "Botswana, Zambia", 
      description: "Agricultural commodity trading platform connecting farmers directly with international markets.",
      founded: "2020",
      employees: "150+",
      revenue: "$28M",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-green-500 to-emerald-400",
      metrics: {
        growth: "+300%",
        markets: "4",
        farmers: "5K+"
      }
    },
    {
      name: "MediConnect Africa",
      sector: "Healthcare",
      location: "South Africa, Zimbabwe",
      description: "Telemedicine platform providing accessible healthcare services to underserved communities.",
      founded: "2021",
      employees: "120+",
      revenue: "$18M",
      image: "/tele.webp",
      gradient: "from-red-500 to-pink-400",
      metrics: {
        growth: "+150%",
        markets: "2",
        patients: "50K+"
      }
    },
    {
      name: "EduTech Solutions",
      sector: "Education Technology",
      location: "Mauritius, Botswana",
      description: "Digital learning platform providing quality education content and tools for African students.",
      founded: "2019",
      employees: "95+",
      revenue: "$22M",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-indigo-500 to-purple-400",
      metrics: {
        growth: "+190%",
        markets: "3",
        students: "100K+"
      }
    },
    {
      name: "CleanEnergy Ventures",
      sector: "Renewable Energy",
      location: "Zambia, South Africa",
      description: "Solar and wind energy solutions provider focused on sustainable power generation across Africa.",
      founded: "2020",
      employees: "200+",
      revenue: "$35M",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-yellow-500 to-orange-400",
      metrics: {
        growth: "+250%",
        markets: "4",
        capacity: "50MW+"
      }
    }
  ];

  const sectors = ['all', 'Financial Services', 'Investment Management', 'Agriculture & Trading', 'Healthcare', 'Education Technology', 'Renewable Energy'];
  const regions = ['all', 'South Africa', 'Zimbabwe', 'Mauritius', 'Botswana', 'Zambia'];

  const filteredCompanies = companies.filter(company => {
    const sectorMatch = selectedSector === 'all' || company.sector === selectedSector;
    const regionMatch = selectedRegion === 'all' || company.location.includes(selectedRegion);
    return sectorMatch && regionMatch;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Portfolio Companies
          </h2>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>
            Our Investment <span className="text-amber-600">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Gellix, sans-serif' }}>
            Discover the innovative companies we've partnered with to drive sustainable growth and transformation across Sub-Saharan Africa.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>25+</div>
            <div className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Portfolio Companies</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>$200M+</div>
            <div className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Total Investment</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>5</div>
            <div className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Active Markets</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Gravesend Sans, serif' }}>2K+</div>
            <div className="text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>Jobs Created</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-slate-700 font-medium mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                Filter by Sector
              </label>
              <select 
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="gellix-font w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors duration-200"
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector} className='gellix-font'>
                    {sector === 'all' ? 'All Sectors' : sector}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-slate-700 font-medium mb-2" style={{ fontFamily: 'Gellix, sans-serif' }}>
                Filter by Region
              </label>
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors duration-200"
              >
                {regions.map(region => (
                  <option key={region} value={region} className='gellix-font'>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="group bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {company.sector}
                  </span>
                </div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${company.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="gellix-font text-white font-bold text-lg">{company.name[0]}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="gellix-font flex items-center gap-2 text-slate-500 text-sm mb-2">
                  <MapPin size={16} />
                  {company.location}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                  {company.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  {company.description}
                </p>
                
                {/* Company Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                  <div className="text-center">
                    <div className="gravesend-sans text-sm font-bold text-slate-900">{company.founded}</div>
                    <div className="gellix-font text-xs text-slate-500">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="gravesend-sans text-sm font-bold text-slate-900">{company.employees}</div>
                    <div className="gellix-font text-xs text-slate-500">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="gravesend-sans text-sm font-bold text-slate-900">{company.revenue}</div>
                    <div className="gellix-font text-xs text-slate-500">Revenue</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <div className="gravesend-sans text-lg font-bold text-amber-600">{company.metrics.growth}</div>
                    <div className="gellix-font text-xs text-slate-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="gravesend-sans text-lg font-bold text-slate-900">{company.metrics.markets}</div>
                    <div className="gellix-font text-xs text-slate-500">Markets</div>
                  </div>
                  <div className="text-center">
                    <div className="gravesend-sans text-lg font-bold text-slate-900">{Object.values(company.metrics)[2]}</div>
                    <div className="gravesend-sans text-xs text-slate-500">{Object.keys(company.metrics)[2].charAt(0).toUpperCase() + Object.keys(company.metrics)[2].slice(1)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Criteria Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Investment <span className="text-amber-600">Criteria</span>
            </h3>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Gellix, sans-serif' }}>
              We partner with exceptional companies that meet our strategic criteria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Potential",
                description: "Companies with scalable business models and clear growth trajectory"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Market Leadership",
                description: "Businesses with competitive advantages and strong market positions"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Exceptional Teams",
                description: "Experienced management teams with proven execution capabilities"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Regional Impact",
                description: "Operations that drive positive change across Sub-Saharan Africa"
              }
            ].map((criteria, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {criteria.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: 'Gravesend Sans, serif' }}>
                  {criteria.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'Gellix, sans-serif' }}>
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-12 border border-amber-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Gravesend Sans, serif' }}>
              Looking for Investment?
            </h3>
            <p className="text-xl text-slate-700 mb-8" style={{ fontFamily: 'Gellix, sans-serif' }}>
              If you're building an innovative company in Sub-Saharan Africa, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton>
                Submit Your Proposal
                <ArrowRight size={20} />
              </PremiumButton>
              <PremiumButton variant="outline">
                Schedule a Meeting
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesteeCompaniesPage;