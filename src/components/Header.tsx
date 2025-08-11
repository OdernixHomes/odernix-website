import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import SearchBox from './SearchBox';

// Add CSS animation styles
const slideInRightStyles = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// Inject styles into the document head
if (typeof document !== 'undefined' && !document.querySelector('#mobile-menu-animations')) {
  const style = document.createElement('style');
  style.id = 'mobile-menu-animations';
  style.textContent = slideInRightStyles;
  document.head.appendChild(style);
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/odernix-logo.png" 
              alt="Odernix Nigeria Limited Logo" 
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Show on desktop and large tablets */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base lg:text-lg font-semibold transition-colors duration-200 hover:text-purple-600 ${
                  location.pathname === item.path 
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Contact - Show on desktop and large tablets */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-3 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Buttons - Show on mobile and small tablets */}
          <div className="md:hidden flex items-center space-x-3 mobile-menu-container">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 relative border border-gray-200 hover:border-purple-200 transform hover:scale-105 shadow-sm hover:shadow-md"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black transition-opacity duration-500 z-40 ${
          isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`} />

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-50 transform transition-all duration-500 ease-in-out mobile-menu-container ${
          isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95 pointer-events-none'
        }`}>
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 mx-2 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:translate-x-2 active:scale-[0.98] ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg border-l-4 border-purple-400'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md border-l-4 border-transparent hover:border-purple-300'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : undefined,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </span>
                </Link>
              ))}
              
              <div className="pt-6 mt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-4 mx-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                  style={{
                    animationDelay: `${navItems.length * 100 + 200}ms`,
                    animation: isMenuOpen ? 'slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : undefined,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <Phone className="w-6 h-6" />
                  <span>Contact Us</span>
                  <span className="ml-auto">📞</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Modal */}
      <SearchBox isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;