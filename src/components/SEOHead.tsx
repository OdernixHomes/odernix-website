import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        if (selector.includes('property')) {
          element.setAttribute('property', selector.split('property="')[1].split('"')[0]);
          element.setAttribute('content', content);
        } else {
          element.setAttribute('content', content);
        }
      }
    };

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.odernix.com';
    const siteName = import.meta.env.VITE_SITE_NAME || 'Odernix Nigeria Limited';
    const siteDescription = import.meta.env.VITE_SITE_DESCRIPTION || 'Leading Nigerian engineering company providing construction, energy, oil & gas, supply chain, and real estate services. Established 2016, serving Nigeria, UK & Canada.';
    const odernixHomesUrl = import.meta.env.VITE_ODERNIX_HOMES_URL || 'https://www.odernixhomes.com';

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', siteUrl);
    }

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', siteDescription);
    updateMetaTag('meta[name="author"]', siteName);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:url"]', siteUrl);
    updateMetaTag('meta[property="og:description"]', siteDescription);
    updateMetaTag('meta[property="og:image"]', `${siteUrl}/logo.jpg`);
    updateMetaTag('meta[property="og:site_name"]', siteName);

    // Update Twitter tags
    updateMetaTag('meta[property="twitter:url"]', siteUrl);
    updateMetaTag('meta[property="twitter:description"]', siteDescription);
    updateMetaTag('meta[property="twitter:image"]', `${siteUrl}/logo.jpg`);

    // Update structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "alternateName": "Odernix",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "foundingDate": "2016-12-28",
        "legalName": "Odernix Nigeria Limited",
        "vatID": "RC: 1382295",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abuja",
          "addressCountry": "NG",
          "addressRegion": "FCT"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": ["NG", "GB", "CA"],
          "availableLanguage": "English"
        },
        "sameAs": [
          odernixHomesUrl
        ],
        "description": siteDescription,
        "numberOfEmployees": "50-200",
        "industry": "Engineering Services",
        "serviceArea": {
          "@type": "Place",
          "name": "Nigeria, United Kingdom, Canada"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Construction & Procurement Engineering"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Energy Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Oil and Gas Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Supply Chain Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Real Estate Development"
              }
            }
          ]
        }
      };
      structuredData.textContent = JSON.stringify(data, null, 2);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SEOHead;