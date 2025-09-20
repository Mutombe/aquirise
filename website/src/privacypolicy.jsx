// Example 2: Creating a Privacy Policy Page
// Create a new file: components/PrivacyPolicy.jsx

import React, { useEffect } from 'react';
import { trackPageView, resetCookieConsent } from './cookieManager';

const PrivacyPolicy = () => {
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

  useEffect(() => {
    trackPageView('/privacy-policy', 'Privacy Policy');
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.offWhite }}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="gravesend-sans font-bold text-4xl mb-4" style={{ color: colors.darkNavy }}>
            Privacy Policy
          </h1>
          <p className="gellix-font text-lg" style={{ color: colors.gray }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 gellix-font" style={{ color: colors.gray }}>
          
          <section>
            <h2 className="gravesend-sans font-semibold text-2xl mb-4" style={{ color: colors.navy }}>
              Cookie Policy
            </h2>
            <div className="space-y-4">
              <p>
                We use cookies and similar technologies to enhance your browsing experience, 
                provide personalized content, and analyze our website traffic.
              </p>
              
              <h3 className="font-semibold text-lg" style={{ color: colors.darkGray }}>
                Types of Cookies We Use:
              </h3>
              
              <div className="ml-4 space-y-3">
                <div>
                  <strong>Essential Cookies:</strong> Required for website functionality and security. 
                  These cannot be disabled as they are necessary for the site to work properly.
                </div>
                <div>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with 
                  our website by collecting and reporting information anonymously.
                </div>
                <div>
                  <strong>Marketing Cookies:</strong> Used to track visitors across websites to 
                  display relevant and engaging advertisements.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="gravesend-sans font-semibold text-2xl mb-4" style={{ color: colors.navy }}>
              Data Collection
            </h2>
            <p>
              We collect information you provide directly to us, such as when you contact us 
              or subscribe to our newsletter. We also automatically collect certain information 
              about your device when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="gravesend-sans font-semibold text-2xl mb-4" style={{ color: colors.navy }}>
              Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal information. 
              You can also withdraw your consent for cookie usage at any time.
            </p>
          </section>

          <section>
            <h2 className="gravesend-sans font-semibold text-2xl mb-4" style={{ color: colors.navy }}>
              Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@acquirise.com
            </p>
          </section>
        </div>

        {/* Cookie Preferences Button */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: colors.silver }}>
          <button
            onClick={resetCookieConsent}
            className="px-6 py-3 rounded-lg font-medium gellix-font transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.darkGray} 100%)`,
              color: colors.offWhite
            }}
          >
            Update Cookie Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;