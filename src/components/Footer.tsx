import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {

  return (
    <footer 
      className="bg-gray-900 text-white relative"
      style={{
        backgroundImage: 'url(/footer.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile-first layout - stack vertically on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section - Always visible, centered on mobile */}
          <div className="lg:col-span-1 text-center md:text-left">
            <img 
              src="/logo.png" 
              alt="Odernix Nigeria Limited Logo" 
              className="h-12 md:h-16 w-auto mb-4 object-contain mx-auto md:mx-0"
            />
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              Delivering innovative engineering and supply solutions since 2016, 
              with Odernix Homes leading in real estate development.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs md:text-sm text-gray-400 mb-6">
              <span>RC: 1382295</span>
              <span>•</span>
              <span>Est. 2016</span>
            </div>
            
            {/* Social Media Links - Larger on mobile */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/odernixnigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 md:p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-full transition-all duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 md:w-4 md:h-4" />
              </a>
              <a 
                href="https://www.twitter.com/odernixnigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 md:p-2 bg-gray-800 hover:bg-sky-500 text-gray-400 hover:text-white rounded-full transition-all duration-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 md:w-4 md:h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/odernix-nigeria-limited" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 md:p-2 bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white rounded-full transition-all duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-4 md:h-4" />
              </a>
              <a 
                href="https://www.instagram.com/odernixnigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 md:p-2 bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white rounded-full transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 md:w-4 md:h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@odernixnigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 md:p-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-full transition-all duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - Hidden on mobile, visible on md+ screens */}
          <div className="hidden md:block">
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

          {/* Contact Information - Optimized for mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 md:space-y-3">
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 space-y-2 md:space-y-0">
                <MapPin className="w-5 h-5 md:w-4 md:h-4 text-purple-400 mt-0 md:mt-1 flex-shrink-0" />
                <div className="text-sm md:text-sm text-gray-300 text-center md:text-left">
                  <p>A4, 29B N'Djamena Crescent,</p>
                  <p>off Aminu Kano Crescent,</p>
                  <p>Wuse II, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 space-y-2 md:space-y-0">
                <Mail className="w-5 h-5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
                <a 
                  href="mailto:info@odernix.com" 
                  className="text-base md:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  info@odernix.com
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 space-y-2 md:space-y-0">
                <Phone className="w-5 h-5 md:w-4 md:h-4 text-purple-400 flex-shrink-0" />
                <a 
                  href="tel:+2347034900069" 
                  className="text-base md:text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +234 703 490 0069
                </a>
              </div>
            </div>
          </div>

          {/* Odernix Homes & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Odernix Homes</h3>
            <p className="text-gray-300 text-sm mb-4">
              Luxury residential construction and development across Nigeria and internationally.
            </p>
            <a 
              href="https://www.odernixhomes.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors text-sm mb-4"
            >
              <span>Visit Odernix Homes</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="hidden md:block">
            <h4 className="text-md font-semibold mb-2 text-white">Core Services</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Engineering & Construction</li>
              <li>• Energy Solutions</li>
              <li>• Oil & Gas Services</li>
              <li>• Supply & Procurement</li>
              <li>• Real Estate Development</li>
            </ul>
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
      </div>
    </footer>
  );
};

export default Footer;