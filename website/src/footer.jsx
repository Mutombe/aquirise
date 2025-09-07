import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, MapPin, Globe, ChevronDown, Target, Shield, TrendingUp, Users, Award, Building, CheckCircle, Star, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo1.png" alt="Workflow" className="w-32 h-22" />   
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Gellix, sans-serif' }}>
              Deploying capital intelligently by leveraging deep, on-the-ground knowledge across Sub-Saharan Africa. 
              Building sustainable value for all stakeholders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>Quick Links</h4>
            <ul className="space-y-3" style={{ fontFamily: 'Gellix, sans-serif' }}>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">Investment Focus</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">Team</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">News</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gravesend Sans, serif' }}>Contact</h4>
            <div className="space-y-4 text-slate-300" style={{ fontFamily: 'Gellix, sans-serif' }}>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p>2nd Floor Exchange House</p>
                  <p>Douglas, Isle of Man IM1 1JD</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@acquirise.com" className="hover:text-amber-400 transition-colors duration-300">
                  info@acquirise.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>www.acquirise.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0" style={{ fontFamily: 'Gellix, sans-serif' }}>
              © 2025 Acquirise Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400" style={{ fontFamily: 'Gellix, sans-serif' }}>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;