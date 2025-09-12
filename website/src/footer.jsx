import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { BsBrowserChrome } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";


const Footer = () => {
  const colors = {
    darkNavy: '#1f2833',
    navy: '#273848',
    darkGray: '#2e3742',
    mediumGray: '#3d4654',
    gray: '#4d5866',
    lightGray: '#6d7885',
    paleGray: '#9ba3ad',
    silver: '#c5c9ce',
    offWhite: '#e8e9eb'
  };


  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16"
      style={{ backgroundColor: '#273848'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Company Info - Takes up 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="mb-6 sm:mb-8">
              <img src="/logo1.png" alt="Acquirise" className="w-28 sm:w-32 h-auto" />   
            </div>
            <p 
              className="gellix-font text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md"
            >
              Deploying capital intelligently by leveraging deep, on-the-ground knowledge across Sub-Saharan Africa. 
              Building sustainable value for all stakeholders.
            </p>
          </div>

          {/* Quick Links - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <h4 
              className="gravesend-sans text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white"
            >
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { text: "About Us", href: "#about" },
                { text: "Investment Focus", href: "#focus" },
                { text: "Portfolio", href: "#portfolio" },
                { text: "Team", href: "#team" },
                { text: "News", href: "#news" },
                { text: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="gellix-font text-slate-300 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.text}
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes up 4 columns */}
          <div className="lg:col-span-4">
            <h4 
              className="gravesend-sans text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white"
            >
              Contact Information
            </h4>
            <div className="space-y-4 sm:space-y-5">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: '#273848' }}
                >
                  <FaMapLocationDot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="gellix-font text-slate-300 text-sm sm:text-base">
                  <p className="font-medium text-white mb-1">Head Office</p>
                  <p>2nd Floor Exchange House</p>
                  <p>54-62 Athol Street</p>
                  <p>Douglas, Isle of Man IM1 1JD</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#273848' }}
                >
                  <MdMarkEmailRead className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="gellix-font text-slate-300 text-sm sm:text-base">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <a 
                    href="mailto:info@acquirise.com" 
                    className="hover:text-white transition-colors duration-300 hover:underline"
                  >
                    info@acquirise.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#273848' }}
                >
                  <LuPhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="gellix-font text-slate-300 text-sm sm:text-base">
                  <p className="font-medium text-white mb-1">Call Us</p>
                  <p>Phone: +44 1624 123456</p>
                  <p>Fax: +44 1624 123457</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center rounded-sm p-6 sm:p-8 backdrop-blur-sm border border-slate-700"
        >
            <h4 
              className="gravesend-sans text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white"
            >
              Global <span className="text-slate-400">Presence</span>
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base mb-4">
              <div 
                className="w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#273848' }}
              >
                <BsBrowserChrome className="w-4 h-4 text-white" />
              </div>
              <span className="gellix-font text-slate-300 text-center">
                Botswana | Mauritius | South Africa | Zambia | Zimbabwe
              </span>
            </div>
            <p className="gellix-font text-slate-400 text-sm sm:text-base">
              www.acquirise.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p 
              className="gellix-font text-slate-400 text-center sm:text-left text-sm sm:text-base"
            >
              © 2025 Acquirise Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-slate-400 text-sm sm:text-base">
              <a 
                href="#" 
                className="gellix-font hover:text-white transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="gellix-font hover:text-white transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="gellix-font hover:text-white transition-colors duration-300 hover:underline"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;