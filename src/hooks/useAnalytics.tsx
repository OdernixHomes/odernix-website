import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type GtagArguments = [string, string, Record<string, unknown>?];

declare global {
  interface Window {
    gtag: (...args: GtagArguments) => void;
  }
}

const GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only initialize if GA ID is provided
    if (!GOOGLE_ANALYTICS_ID || GOOGLE_ANALYTICS_ID === 'your-google-analytics-id-here') {
      console.warn('Google Analytics ID not configured. Please set VITE_GOOGLE_ANALYTICS_ID in your .env file');
      return;
    }

    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GOOGLE_ANALYTICS_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;

    if (!document.querySelector(`script[src*="googletagmanager"]`)) {
      document.head.appendChild(script1);
      document.head.appendChild(script2);
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (GOOGLE_ANALYTICS_ID && typeof window.gtag !== 'undefined') {
      window.gtag('config', GOOGLE_ANALYTICS_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (GOOGLE_ANALYTICS_ID && typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackConversion = (eventName: string, parameters?: Record<string, unknown>) => {
    if (GOOGLE_ANALYTICS_ID && typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters);
    }
  };

  return {
    trackEvent,
    trackConversion,
  };
};