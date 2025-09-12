import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  TrendingUp,
  Target,
  Users,
  Globe,
  Building2,
  Award,
  CheckCircle,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaEye } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiHandshake } from "react-icons/pi";
import { TbCurrentLocation } from "react-icons/tb";
import { Phone } from "lucide-react";
import {
  SharpSculpturalFlow,
  CurvedSculpturalFlow,
  StonePileSculpturalFlow,
  JigsawSculpturalFlow,
} from "./sculpture";

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

// Team Member Card Component
const TeamCard = ({ member, index }) => (
  <div
    className="group relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
    style={{
      animationDelay: `${index * 0.1}s`,
      animation: "fadeInUp 0.6s ease-out forwards",
    }}
  >
    <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="w-full h-64 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
          <span className="text-3xl font-bold text-slate-600">
            {member.name.charAt(0)}
          </span>
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-slate-600 font-medium mb-3">{member.position}</p>
      <p className="text-slate-500 text-sm leading-relaxed">
        {member.description}
      </p>
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

// Sample team data
const teamMembers = [
  {
    name: "Sarah Mitchell",
    position: "Chief Executive Officer",
    description:
      "15+ years of investment banking experience with a focus on African markets and strategic partnerships.",
  },
  {
    name: "David Okafor",
    position: "Chief Investment Officer",
    description:
      "Former Goldman Sachs executive specializing in emerging market investments and portfolio optimization.",
  },
  {
    name: "Amara Diallo",
    position: "Managing Director",
    description:
      "Expert in sustainable finance with extensive experience in ESG investments across Sub-Saharan Africa.",
  },
  {
    name: "James Thompson",
    position: "Head of Research",
    description:
      "PhD in Economics with 12 years of experience analyzing African financial markets and economic trends.",
  },
];

const TeamLeadershipSection = () => {
  const handleContactClick = () => {
    // Scroll to contact section or show contact modal
    console.log("Contact team clicked");
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative py-24 bg-white overflow-hidden" id="team">
        {/* Background Patterns - Circular pattern now more visible */}
        <SharpSculpturalFlow />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="gravesend-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: "#273848" }}
            >
              Our <span className="text-gray-500">Leadership</span>
            </h2>
            <p
              className="gellix-font text-lg sm:text-xl max-w-3xl mx-auto px-4"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              Meet the experienced professionals driving our investment strategy
              and delivering exceptional results
            </p>
          </div>
          <br />
          <br />

          {/* Team Grid */}
          <TeamCards />

          {/* Team Values */}
          <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-12 shadow-lg border border-gray-100 mx-2 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <h3
                className="gravesend-sans text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#273848" }}
              >
                Our <span className="text-gray-500">Values</span>
              </h3>
              <p
                className="gellix-font text-lg sm:text-xl px-4"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                The principles that guide our approach to investment and
                partnership
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: <FaEye className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Strategic Vision",
                  description: "Long-term thinking with strategic focus",
                },
                {
                  icon: <FaPeopleRoof className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Collaborative Approach",
                  description: "Working together for mutual success",
                },
                {
                  icon: <PiHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Excellence Driven",
                  description: "Committed to delivering exceptional results",
                },
                {
                  icon: <TbCurrentLocation className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Regional Expertise",
                  description: "Deep understanding of African markets",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 rounded-sm bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: "#273848" }}
                  >
                    {value.icon}
                  </div>
                  <h4
                    className="gravesend-sans text-base sm:text-lg font-bold mb-2 sm:mb-3"
                    style={{ color: "#273848" }}
                  >
                    {value.title}
                  </h4>
                  <p
                    className="gellix-font text-sm leading-relaxed px-2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              className="gellix-font font-light inline-flex items-center space-x-3 px-8 py-4 text-white rounded-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                document
                  .getElementById("story")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                color: colors.darkNavy,
              }}
            >
              <span>Contact Our Team</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const TeamCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
      {[
        {
          name: "John Doe",
          position: "Non-Executive Director",
          experience: "15+ years",
          image: "/John.jpg",
          linkedin: "https://linkedin.com/in/sarah-johnson",
          email: "sarah@acquirise.com",
          phone: "+1 (555) 123-4567",
          twitter: "@sarahjohnson",
          bio: "Strategic advisor with expertise in M&A and corporate governance",
        },
        {
          name: "John Doe",
          position: "Non-Executive Director",
          experience: "12+ years",
          image: "/John.jpg",
          linkedin: "https://linkedin.com/in/james-wilson",
          email: "james@acquirise.com",
          phone: "+1 (555) 234-5678",
          twitter: "@jameswilson",
          bio: "Former investment banker with deep industry knowledge",
        },
        {
          name: "Jane Doe",
          position: "Non-Executive Director",
          experience: "10+ years",
          image: "/John.jpg",
          linkedin: "https://linkedin.com/in/fatima-al-rashid",
          email: "fatima@acquirise.com",
          phone: "+1 (555) 345-6789",
          twitter: "@fatima_ar",
          bio: "Technology executive specializing in digital transformation",
        },
      ].map((member, index) => (
        <div key={index} className="group relative">
          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
            {/* Profile Image */}
            <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Social Links Overlay - Mobile optimized */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 hover:scale-110 transition-all duration-300 active:scale-95"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 hover:scale-110 transition-all duration-300 active:scale-95"
                    title="Email"
                  >
                    <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 hover:scale-110 transition-all duration-300 active:scale-95"
                    title="Phone"
                  >
                    <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a
                    href={`https://twitter.com/${member.twitter.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 hover:scale-110 transition-all duration-300 active:scale-95"
                    title="Twitter"
                  >
                    <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Member Info - Flexible bottom section */}
            <div className="p-3 sm:p-4 lg:p-6 flex-grow flex flex-col">
              <h4
                className="gravesend-sans font-light text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight"
                style={{ color: "#273848" }}
              >
                {member.name}
              </h4>
              <p
                className="gellix-font font-medium mb-2 text-sm sm:text-base leading-tight"
                style={{ color: "rgba(39, 56, 72, 0.7)" }}
              >
                {member.position}
              </p>
              <p
                className="gellix-font text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed"
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                {member.experience} • {member.bio}
              </p>

              {/* Contact Details - Improved mobile layout */}
              <div className=" space-y-2 text-xs sm:text-sm mt-auto">
                {/* Email */}
                <div className="flex items-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="gellix-font hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 text-gray-600 min-w-0"
                  >
                    <Mail
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                    />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <a
                    href={`tel:${member.phone}`}
                    className="gellix-font hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 text-gray-600"
                  >
                    <Phone
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                    />
                    <span>{member.phone}</span>
                  </a>
                </div>

                {/* Twitter */}
                <div className="flex items-center">
                  <span className="gellix-font flex items-center space-x-2 text-gray-600">
                    <Twitter
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 flex-shrink-0"
                    />
                    <span>{member.twitter}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SubtleCircularPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-50">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute border border-gray-400 rounded-full animate-pulse"
        style={{
          width: `${(i + 3) * 200}px`,
          height: `${(i + 3) * 200}px`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${4 + i}s`,
        }}
      />
    ))}
  </div>
);

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home13.jpg"
            alt="Professional business team"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(39, 56, 72, 0.8)" }}
          ></div>
        </div>

        {/* Animated Background Elements*/}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "60s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative z-10 mb-8">
            <span
              className="gravesend-sans font-light inline-block backdrop-blur-sm border px-3 py-2 sm:px-4 sm:py-2 rounded-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              style={{
                backgroundColor: "rgba(39, 56, 72, 0.2)",
                borderColor: "rgba(39, 56, 72, 0.3)",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Our Team
            </span>
            <h1 className="gravesend-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 sm:mb-8 leading-tight px-2">
              Leadership
              <span className="block text-gray-300">Excellence</span>
            </h1>
            <p className="gellix-font text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Acquirise has a highly experienced team with an established track
              record in investment management and regional expertise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
            <button
              className="gellix-font font-light inline-flex items-center space-x-3 px-8 py-4 text-white rounded-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={() =>
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.paleGray} 100%)`,
                color: colors.darkNavy,
              }}
            >
              <span>Meet Our Team</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamLeadershipSection />
    </div>
  );
};

export default TeamSection;
