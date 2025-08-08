import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const certifications = [
    { name: 'ISO 9001:2015', url: 'https://via.placeholder.com/50?text=ISO' },
    { name: 'BR Safety Council', url: 'https://via.placeholder.com/50?text=BR' },
    { name: 'LEEA', url: 'https://via.placeholder.com/50?text=LEEA' },
    { name: 'BSI', url: 'https://via.placeholder.com/50?text=BSI' },
    { name: 'IDDC', url: 'https://via.placeholder.com/50?text=IDDC' },
    { name: 'NCDMB', url: 'https://via.placeholder.com/50?text=NCDMB' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <img 
              src="https://via.placeholder.com/150x50?text=Odernix+Logo&color=ffffff&bg=6B2A77" 
              alt="Odernix Nigeria Limited Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Odernix Nigeria Limited delivers innovative engineering and supply solutions since 2016, 
              with Odernix Homes leading in real estate development across Nigeria and internationally.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>RC: 1382295</span>
              <span>•</span>
              <span>Incorporated: Dec 28, 2016</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
                { name: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>A4, 29B N'Djamena Crescent,</p>
                  <p>off Aminu Kano Crescent,</p>
                  <p>Wuse II, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:info@odernix.com" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  info@odernix.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+2347034900069" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +234 703 490 0069
                </a>
              </div>
            </div>
          </div>

          {/* Odernix Homes & Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Odernix Homes</h3>
            <p className="text-gray-300 text-sm mb-3">
              Luxury residential construction and development
            </p>
            <a 
              href="https://www.odernixhomes.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors text-sm"
            >
              <span>Visit Odernix Homes</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <h4 className="text-md font-semibold mt-6 mb-3 text-white">Certifications</h4>
            <div className="grid grid-cols-3 gap-2">
              {certifications.map((cert) => (
                <img 
                  key={cert.name}
                  src={cert.url} 
                  alt={cert.name}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  title={cert.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Odernix Nigeria Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a 
                href="https://www.odernix.com" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                www.odernix.com
              </a>
              <a 
                href="https://www.odernixhomes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                www.odernixhomes.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;