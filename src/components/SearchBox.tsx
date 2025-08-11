import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchData: SearchResult[] = useMemo(() => [
    {
      title: 'Construction & Procurement Engineering',
      description: 'End-to-end construction, marine, and procurement solutions',
      url: '/services',
      category: 'Services'
    },
    {
      title: 'Energy Solutions',
      description: 'Sustainable power generation and distribution',
      url: '/services',
      category: 'Services'
    },
    {
      title: 'Oil and Gas Services',
      description: 'Drilling, exploration, and marine support',
      url: '/services',
      category: 'Services'
    },
    {
      title: 'Medical & Office Supplies',
      description: 'Timely delivery of medical and office materials',
      url: '/services',
      category: 'Services'
    },
    {
      title: 'Real Estate Development',
      description: 'Luxury home construction through Odernix Homes',
      url: '/services',
      category: 'Services'
    },
    {
      title: 'About Odernix',
      description: 'Learn about our company history and mission',
      url: '/about',
      category: 'Company'
    },
    {
      title: 'Our Projects',
      description: 'View our portfolio of completed projects',
      url: '/projects',
      category: 'Portfolio'
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our team',
      url: '/contact',
      category: 'Contact'
    },
    {
      title: 'Careers',
      description: 'Join our growing team',
      url: '/careers',
      category: 'Company'
    },
    {
      title: 'Blog',
      description: 'Latest news and industry insights',
      url: '/blog',
      category: 'Resources'
    }
  ], []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    const searchTimer = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filteredResults.slice(0, 8));
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [query, searchData]);

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div ref={searchRef} className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4">
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, projects, or information..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-lg outline-none"
          />
          <button
            onClick={onClose}
            className="ml-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {query && (
          <div className="max-h-96 overflow-y-auto">
            {isSearching ? (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full mx-auto mb-2" />
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    onClick={handleResultClick}
                    className="flex items-start p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{result.title}</h3>
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{result.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1">Try searching for services, projects, or company information</p>
              </div>
            )}
          </div>
        )}

        {!query && (
          <div className="p-6 text-center text-gray-500">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="font-medium mb-1">Search Odernix</p>
            <p className="text-sm">Find services, projects, company information, and more</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;