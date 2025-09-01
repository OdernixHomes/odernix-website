import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Award, Lightbulb, Leaf, Heart, ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import { useAnalytics } from '../hooks/useAnalytics';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountAnimation } from '../hooks/useCountAnimation';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { trackEvent } = useAnalytics();
  
  // Animation observers
  const aboutSection = useIntersectionObserver();
  const servicesSection = useIntersectionObserver();
  const whyChooseUsSection = useIntersectionObserver();
  const statsSection = useIntersectionObserver();
  
  // Animated counters
  const certificationsCount = useCountAnimation(13, 2000, statsSection.isVisible);
  const serviceAreaCount = useCountAnimation(6, 2000, statsSection.isVisible);
  const yearsCount = useCountAnimation(9, 1500, statsSection.isVisible);

  const heroSlides = [
     {
      title: "Your Dream Home Awaits",
      subtitle: "Odernix Homes: Crafting luxury residences with care.",
      cta: "Visit Odernix Homes",
      ctaLink: import.meta.env.VITE_ODERNIX_HOMES_URL || "https://www.odernixhomes.com",
      image: "/odernix-homes-apartment.jpg"
    },
    
    {
      title: "Powering a Sustainable Tomorrow",
      subtitle: "From IPPs to smart grids, we deliver energy solutions.",
      cta: "Learn About Energy",
      ctaLink: "/services",
      image: "../energy/energy1.jpg"
    },
    {
      title: "Oil & Gas",
      subtitle: "Drilling, pipelines, and marine support with precision.",
      cta: "Discover Oil & Gas",
      ctaLink: "/services",
      image: "../oil-gas/oil-and-gas-background.jpg"
    },
    {
      title: "Global Supply Expertise",
      subtitle: "Medical, office, and oilfield supplies at your service.",
      cta: "View Supply Options",
      ctaLink: "/services",
      image: "../supply-chain/supply-chain-background.png"
    },
    {
      title: "Marine & Agricultural Innovation",
      subtitle: "From dredging to farming, we expand horizons.",
      cta: "Learn More",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Engineering Excellence Across Industries",
      subtitle: "Odernix Nigeria Limited: Leading since 2016 with innovative solutions.",
      cta: "Explore Our Services",
      ctaLink: "/services",
      image: "/home-page-background.jpg"
    }
    /* {
      title: "NDT Excellence & Quality Assurance",
      subtitle: "Advanced non-destructive testing for structural integrity and safety across all industries.",
      cta: "Learn More",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    } */
   
  ];

  const services = [
    {
      title: "Construction & Procurement Engineering",
      description: "End-to-end construction, marine, and procurement solutions with advanced project management.",
      icon: "🏗️"
    },
    {
      title: "Energy",
      description: "Sustainable power generation, distribution, and digital solutions for decarbonization goals.",
      icon: "⚡"
    },
    {
      title: "Oil and Gas Services",
      description: "Comprehensive services from upstream exploration to downstream distribution with marine support.",
      icon: "🛢️"
    },
    {
      title: "General Supplies – Medical and Office",
      description: "Timely delivery of medical, office, oilfield materials with NDT services and advanced logistics.",
      icon: "📦"
    },
/*     {
      title: "NDT (Non-Destructive Testing)",
      description: "Comprehensive testing services ensuring structural integrity and safety compliance across oil & gas, construction, and marine sectors.",
      icon: "🔍"
    }, */
    {
      title: "Real Estate & Residential Construction",
      description: `Odernix Homes builds luxury homes – Visit ${import.meta.env.VITE_ODERNIX_HOMES_URL || "https://www.odernixhomes.com"}`,
      icon: "🏠"
    }
  ];

  const whyChooseUs = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "Industry Expertise", description: "Expert team ready to deliver world-class engineering solutions" },
    { icon: <Award className="w-6 h-6" />, title: "Global Certifications", description: "ISO 9001:2015 and multiple international standards compliance" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation Hub", description: "Cutting-edge technology and digital solutions" },
    { icon: <Leaf className="w-6 h-6" />, title: "Sustainability Leader", description: "Committed to environmental responsibility and green practices" },
    { icon: <Heart className="w-6 h-6" />, title: "Client-Centric Approach", description: "Dedicated to exceeding expectations with personalized service" }
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    // Don't handle touch events on buttons or links
    const target = e.target as Element;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    // Don't handle touch events on buttons or links
    const target = e.target as Element;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      trackEvent('swipe', 'hero_carousel', 'left');
    } else if (isRightSwipe) {
      prevSlide();
      trackEvent('swipe', 'hero_carousel', 'right');
    }
  };

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-teal-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-500/20 rotate-12 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Hero Carousel */}
      <section 
        className="relative h-screen overflow-hidden z-10"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative h-full flex items-center">
              {/* Floating particles for current slide */}
              {index === currentSlide && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-400/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
                </div>
              )}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-4xl w-full">
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight transform transition-all duration-1200 ${
                    index === currentSlide ? 'translate-y-0 opacity-100 scale-100 rotate-0' : 'translate-y-12 opacity-0 scale-95 -rotate-1'
                  }`} style={{ 
                    transitionDelay: '300ms',
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    {slide.title}
                  </h1>
                  <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 md:mb-10 leading-relaxed transform transition-all duration-1100 ${
                    index === currentSlide ? 'translate-y-0 translate-x-0 opacity-100 scale-100' : 'translate-y-10 translate-x-4 opacity-0 scale-95'
                  }`} style={{ 
                    transitionDelay: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}>
                    {slide.subtitle}
                  </p>
                  <div className={`transform transition-all duration-1000 ${
                    index === currentSlide ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
                  }`} style={{ 
                    transitionDelay: '700ms',
                    transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}>
                    {slide.ctaLink.startsWith('http') ? (
                      <a
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackEvent('click', 'hero_cta', slide.cta);
                        }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-lg text-base sm:text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl animate-pulse hover:animate-none"
                      >
                        <span>{slide.cta}</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <Link
                        to={slide.ctaLink}
                        onClick={() => {
                          trackEvent('click', 'hero_cta', slide.cta);
                        }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-lg text-base sm:text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl animate-pulse hover:animate-none"
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors z-20"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors z-20"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section
      <section 
        ref={statsSection.elementRef}
        className="relative py-12 sm:py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center">
            <div className={`transform transition-all duration-1000 ${
              statsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <TrendingUp className="w-10 h-10 sm:w-8 sm:h-8 text-teal-400 mb-2 sm:mb-0 sm:mr-3" />
                <span className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400">{certificationsCount}+</span>
              </div>
              <h3 className="text-xl sm:text-lg font-semibold mb-2">Industry Certifications</h3>
              <p className="text-gray-300 text-base sm:text-sm">Global standards and accreditations</p>
            </div>
            
            <div className={`transform transition-all duration-1000 ${
              statsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <Users className="w-10 h-10 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-0 sm:mr-3" />
                <span className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400">{serviceAreaCount}</span>
              </div>
              <h3 className="text-xl sm:text-lg font-semibold mb-2">Service Areas</h3>
              <p className="text-gray-300 text-base sm:text-sm">Comprehensive engineering solutions</p>
            </div>
            
            <div className={`transform transition-all duration-1000 ${
              statsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <Zap className="w-10 h-10 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-0 sm:mr-3" />
                <span className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">{yearsCount}+</span>
              </div>
              <h3 className="text-xl sm:text-lg font-semibold mb-2">Years of Excellence</h3>
              <p className="text-gray-300 text-base sm:text-sm">Leading engineering innovation</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Teaser */}
      <section 
        ref={aboutSection.elementRef}
        className="py-20 bg-gray-50 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-50/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${
              aboutSection.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Engineering Excellence Since 2016
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded on December 28, 2016 (RC: 1382295), Odernix Nigeria Limited, headquartered in Abuja, 
                leads in engineering, energy, and supply services. Through Odernix Homes, we excel in real estate, 
                with a global network including  Nigeria, United Kingdom, and Canada.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className={`relative transform transition-all duration-1000 ${
              aboutSection.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg opacity-20 blur-lg animate-pulse"></div>
              <LazyImage
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Odernix team and global presence"
                className="relative rounded-lg shadow-2xl h-80 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section 
        ref={servicesSection.elementRef}
        className="py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            servicesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across six key sectors, delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card-hover hover-glow bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl group border-l-4 border-transparent hover:border-purple-500 relative overflow-hidden ${
                  servicesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${(index + 1) * 150}ms`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
                }}
              >
                {/* Floating background element */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-teal-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 hover:animate-bounce">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center space-x-1 group-hover:translate-x-3 hover:scale-105 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseUsSection.elementRef} className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            whyChooseUsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Odernix
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Trusted by clients across Nigeria and internationally for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={`text-center group card-hover ${
                  whyChooseUsSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 md:w-20 md:h-20 bg-white/20 rounded-full mb-6 text-white group-hover:bg-white/40 group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-xl font-semibold mb-4 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105">{item.title}</h3>
                <p className="text-purple-100 group-hover:text-white transition-all duration-300 group-hover:scale-105 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications & Partners */}
      <section 
        className="py-16 bg-white relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certified Excellence & Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our certifications and partnerships demonstrate our commitment to quality, safety, and industry standards
            </p>
          </div>
          
          {/* Continuous Scrolling Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of certifications */}
              {[
                { name: 'QMS Registered', src: '/certifications /QMS REGISTERED.png' },
                { name: 'BSI Group', src: '/certifications /BSI.png' },
                { name: 'LEEA', src: '/certifications /LEEA.png' },
                { name: 'NCDMB', src: '/certifications /NCDMB.png' },
                { name: 'ASNT', src: '/certifications /ASNT.png' },
                { name: 'IWCF', src: '/certifications /IWCF.png' },
                { name: 'PECB', src: '/certifications /PECB.png' },
                { name: 'NipeX', src: '/certifications /NipeX.png' },
                { name: 'OGTAN', src: '/certifications /OGTAN.png' },
                { name: 'NNPC', src: '/certifications /NNPC.png' },
                { name: 'DUNS', src: '/certifications /DUNS.png' },
                { name: 'NORD-LOCK', src: '/certifications /NORD-LOCK.png' },
                { name: 'ISO', src: '/certifications /ISO.jpg' }
              ].concat([
                { name: 'QMS Registered', src: '/certifications /QMS REGISTERED.png' },
                { name: 'BSI Group', src: '/certifications /BSI.png' },
                { name: 'LEEA', src: '/certifications /LEEA.png' },
                { name: 'NCDMB', src: '/certifications /NCDMB.png' },
                { name: 'ASNT', src: '/certifications /ASNT.png' },
                { name: 'IWCF', src: '/certifications /IWCF.png' },
                { name: 'PECB', src: '/certifications /PECB.png' },
                { name: 'NipeX', src: '/certifications /NipeX.png' },
                { name: 'OGTAN', src: '/certifications /OGTAN.png' },
                { name: 'NNPC', src: '/certifications /NNPC.png' },
                { name: 'DUNS', src: '/certifications /DUNS.png' },
                { name: 'NORD-LOCK', src: '/certifications /NORD-LOCK.png' },
                { name: 'ISO', src: '/certifications /ISO.jpg' }
              ]).map((cert, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center p-3 sm:p-4 rounded-xl bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-1900 w-24 h-16 sm:w-32 sm:h-20 shadow-md hover:shadow-lg group hover-lift border border-gray-100 hover:border-purple-200"
                >
                  <img 
                    src={cert.src} 
                    alt={cert.name}
                    className="max-h-8 sm:max-h-12 max-w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 filter group-hover:brightness-110"
                    title={cert.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: 'url("/odernix-bastion.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-teal-600/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Vision with Odernix
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need engineering solutions or your dream home with Odernix Homes, 
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request a Quote
            </Link>
            <a
              href={import.meta.env.VITE_ODERNIX_HOMES_URL || "https://www.odernixhomes.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Visit Odernix Homes</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;