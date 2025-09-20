// utils/cookieManager.js
// Cookie management utility for your website

/**
 * Get current cookie consent preferences
 * @returns {Object|null} Cookie preferences or null if not set
 */
export const getCookieConsent = () => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return null;
    
    if (consent === 'accepted' || consent === 'declined') {
      return { type: consent };
    }
    
    return JSON.parse(consent);
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
};

/**
 * Check if a specific cookie type is allowed
 * @param {string} cookieType - 'essential', 'analytics', or 'marketing'
 * @returns {boolean}
 */
export const isCookieAllowed = (cookieType) => {
  const consent = getCookieConsent();
  
  if (!consent) return false;
  
  // Essential cookies are always allowed
  if (cookieType === 'essential') return true;
  
  // If user accepted all
  if (consent.type === 'accepted') return true;
  
  // If user declined all
  if (consent.type === 'declined') return false;
  
  // Check specific preference
  return consent[cookieType] === true;
};

/**
 * Initialize tracking services based on cookie consent
 */
export const initializeTracking = () => {
  const consent = getCookieConsent();
  
  if (!consent) {
    console.log('No cookie consent found');
    return;
  }

  // Initialize Google Analytics
  if (isCookieAllowed('analytics')) {
    initializeGoogleAnalytics();
  }

  // Initialize Marketing tools
  if (isCookieAllowed('marketing')) {
    initializeMarketingTools();
  }

  console.log('Tracking initialized with consent:', consent);
};

/**
 * Initialize Google Analytics
 */
const initializeGoogleAnalytics = () => {
  // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    // Privacy-friendly settings
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  console.log('Google Analytics initialized');
};

/**
 * Initialize marketing tools (Facebook Pixel, etc.)
 */
const initializeMarketingTools = () => {
  // Example: Facebook Pixel
  // Replace 'YOUR_PIXEL_ID' with your actual Facebook Pixel ID
  const FACEBOOK_PIXEL_ID = 'YOUR_PIXEL_ID';
  
  if (FACEBOOK_PIXEL_ID && FACEBOOK_PIXEL_ID !== 'YOUR_PIXEL_ID') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', FACEBOOK_PIXEL_ID);
    window.fbq('track', 'PageView');
    
    console.log('Facebook Pixel initialized');
  }

  // Add other marketing tools here (LinkedIn Pixel, Twitter Pixel, etc.)
};

/**
 * Track custom events (only if analytics cookies are allowed)
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (!isCookieAllowed('analytics')) {
    console.log('Analytics cookies not allowed, skipping event:', eventName);
    return;
  }

  // Google Analytics event tracking
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }

  // Facebook Pixel event tracking
  if (window.fbq && isCookieAllowed('marketing')) {
    window.fbq('track', eventName, eventData);
  }

  console.log('Event tracked:', eventName, eventData);
};

/**
 * Track page views
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!isCookieAllowed('analytics')) return;

  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }

  console.log('Page view tracked:', pagePath, pageTitle);
};

/**
 * Clear all tracking cookies and data
 */
export const clearTrackingData = () => {
  // Clear Google Analytics cookies
  const gaCookies = document.cookie
    .split(';')
    .filter(cookie => cookie.trim().startsWith('_ga'));
  
  gaCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  // Clear Facebook Pixel cookies
  document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = '_fbc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  console.log('Tracking data cleared');
};

/**
 * Reset cookie consent (useful for testing)
 */
export const resetCookieConsent = () => {
  localStorage.removeItem('cookie-consent');
  clearTrackingData();
  console.log('Cookie consent reset');
  
  // Reload page to show banner again
  window.location.reload();
};

// Initialize tracking when the module loads
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all components are loaded
  setTimeout(initializeTracking, 500);
});