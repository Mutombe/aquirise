import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Target,
  Users,
  Globe,
  Building2,
  Award,
  CheckCircle,
} from "lucide-react";
import { GiMoneyStack } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { GiFarmTractor } from "react-icons/gi";
import { TbSunrise } from "react-icons/tb";

const colors = {
  darkNavy: "#1f2833",
  navy: "#273848",
  darkGray: "#2e3742",
  mediumGray: "#3d4654",
  gray: "#4d5866",
  lightGray: "#6d7885",
  paleGray: "#9ba3ad",
  silver: "#c5c9ce",
  offWhite: "#e8e9eb",
};

const InvesteeCompaniesPage = () => {
  const companies = [
    {
      name: "Bard Santner Incorporated",
      location: "Mauritius, Zimbabwe",
      sector: "Financial Services",
      logo: "/logob.png",
      height: "h-22",
      width: "w-36",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: "Rudiarius Capital Management",
      location: "South Africa",
      sector: "Investment",
      logo: "/logoa.png",
      height: "h-22",
      width: "w-36",
      gradient: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section with Background Image  */}
      <div className="relative h-[80vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image  */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern city skyline"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(39, 56, 72, 0.8)" }}
          ></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "60s" }}
          ></div>
        </div>

        {/* Content  */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <span
              className="gravesend-sans font-light inline-block backdrop-blur-sm border px-3 py-2 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm  mb-4 sm:mb-6"
              style={{
                backgroundColor: "rgba(39, 56, 72, 0.2)",
                borderColor: "rgba(39, 56, 72, 0.3)",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Portfolio Companies
            </span>
            <h1 className="gravesend-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 sm:mb-8 leading-tight px-2">
              Current
              <span className="block text-gray-300">Investments</span>
            </h1>
            <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Discover how we drive sustainable growth and innovation across
              Africa
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
            <button
              className="gellix-font font-light inline-flex items-center space-x-3 px-8 py-4 text-white rounded-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                color: colors.darkNavy,
              }}
            >
              <span>Investment Opportunities</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Companies Section  */}
      <div
        className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100"
        id="portfolio"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header  */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#273848" }}
            >
              Our <span className="text-gray-500">Portfolio</span>
            </h2>
            <p
              className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              Strategic investments in innovative companies driving
              transformation across key sectors
            </p>
          </div>

          {/* Companies Grid  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {companies.map((company, index) => (
              <div key={index} className="group relative mx-2 sm:mx-0">
                {/* Main Card  */}
                <div className="bg-white rounded-sm shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                  {/* Header with Logo  */}
                  <div className="relative p-6 sm:p-8 pb-4 sm:pb-6">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                      {/* Logo  */}
                      <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={company.logo}
                          alt={`${company.name} Logo`}
                          className={`object-contain ${company.height} ${company.width}`}
                        />
                      </div>

                      {/* Sector Badge */}
                      <span
                        className="px-3 py-1 rounded-sm text-xs sm:text-sm font-medium border whitespace-nowrap gellix-font"
                        style={{
                          backgroundColor: "rgba(39, 56, 72, 0.05)",
                          color: "#273848",
                          borderColor: "rgba(39, 56, 72, 0.2)",
                        }}
                      >
                        {company.sector}
                      </span>
                    </div>

                    {/* Company Info  
                    <h3
                      className="gravesend-sans text-xl sm:text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors duration-300"
                      style={{ color: "#273848" }}
                    >
                      {company.name}
                    </h3>*/}

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />
                      <span className="gellix-font text-sm">
                        {company.location}
                      </span>
                    </div>
                  </div>

                  {/* Status Indicator  */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-sm p-3">
                      <CheckCircle size={16} />
                      <span className="gellix-font text-sm font-medium">
                        Active Investment
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                </div>
              </div>
            ))}
          </div>

          {/* Investment Focus Areas */}
          <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 mx-2 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <h3
                className="gravesend-sans text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#273848" }}
              >
                Investment <span className="text-gray-500">Focus</span>
              </h3>
              <p
                className="gellix-font text-lg sm:text-xl px-4"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                We target high-growth opportunities across key sectors in
                Sub-Saharan Africa
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: <GiMoneyStack className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Financial Services",
                  description: "Banking, fintech, and payment solutions",
                },
                {
                  icon: <TbPigMoney className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Investment Management",
                  description: "Asset management and capital markets",
                },
                {
                  icon: <GiFarmTractor className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Agriculture & Trading",
                  description: "Commodity trading and agricultural innovation",
                },
                {
                  icon: <TbSunrise className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Strategic Growth",
                  description: "Scalable businesses with regional impact",
                },
              ].map((focus, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-sm bg-gradient-to-b from-gray-100 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: colors.darkNavy }}
                  >
                    {focus.icon}
                  </div>
                  <h4
                    className="gravesend-sans text-base sm:text-lg font-bold mb-2 sm:mb-3"
                    style={{ color: "#273848" }}
                  >
                    {focus.title}
                  </h4>
                  <p
                    className="gellix-font text-sm leading-relaxed px-2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {focus.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvesteeCompaniesPage;
