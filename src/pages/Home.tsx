import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Users, Award, Lightbulb, Leaf, Heart, Calendar, ExternalLink } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Engineering Excellence Across Industries",
      subtitle: "Odernix Nigeria Limited: Leading since 2016 with innovative solutions.",
      cta: "Explore Our Services",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Powering a Sustainable Tomorrow",
      subtitle: "From IPPs to smart grids, we deliver energy solutions.",
      cta: "Learn About Energy",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Oil & Gas Mastery",
      subtitle: "Drilling, pipelines, and marine support with precision.",
      cta: "Discover Oil & Gas",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Global Supply Expertise",
      subtitle: "Medical, office, and oilfield supplies at your service.",
      cta: "View Supply Options",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Marine & Agricultural Innovation",
      subtitle: "From dredging to farming, we expand horizons.",
      cta: "Learn More",
      ctaLink: "/services",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    },
    {
      title: "Your Dream Home Awaits",
      subtitle: "Odernix Homes: Crafting luxury residences with care.",
      cta: "Visit Odernix Homes",
      ctaLink: "https://www.odernixhomes.com",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
    }
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
      title: "Oil and Gas Drilling & Exploration",
      description: "Comprehensive services from upstream exploration to downstream distribution with marine support.",
      icon: "🛢️"
    },
    {
      title: "Supplies – Medical and Office",
      description: "Timely delivery of medical, office, oilfield, and agricultural materials with advanced logistics.",
      icon: "📦"
    },
    {
      title: "Real Estate & Residential Construction",
      description: "Odernix Homes builds luxury homes – Visit https://www.odernixhomes.com",
      icon: "🏠"
    }
  ];

  const whyChooseUs = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "Proven Track Record", description: "Over 70 successful projects since 2016" },
    { icon: <Award className="w-6 h-6" />, title: "Safety Standards", description: "ISO 9001:2015 certified with comprehensive safety protocols" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation Hub", description: "Cutting-edge technology and digital solutions" },
    { icon: <Leaf className="w-6 h-6" />, title: "Sustainability Leader", description: "Committed to environmental responsibility" },
    { icon: <Heart className="w-6 h-6" />, title: "Client-Centric Approach", description: "98% client satisfaction rate" }
  ];

  const projects = [
    { title: "Niger Delta Dredging", year: "2024", category: "Marine Engineering" },
    { title: "Abuja IPP", year: "2023", category: "Energy" },
    { title: "Port Harcourt FPSO Support", year: "2022", category: "Oil & Gas" },
    { title: "Enugu Odernix Homes", year: "2024", category: "Real Estate" },
    { title: "UK Smart Grid", year: "2023", category: "Energy" }
  ];

  const news = [
    { title: "Odernix Homes Opens New Development in Enugu", date: "August 2025" },
    { title: "New Marine Dredging Contract", date: "July 2025" },
    { title: "Smart Grid Deployment", date: "June 2025" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  {slide.ctaLink.startsWith('http') ? (
                    <a
                      href={slide.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                    >
                      <span>{slide.cta}</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <Link
                      to={slide.ctaLink}
                      className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Engineering Excellence Since 2016
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded on December 28, 2016 (RC: 1382295), Odernix Nigeria Limited, headquartered in Abuja, 
                leads in engineering, energy, and supply services. Through Odernix Homes, we excel in real estate, 
                with a global network including Port Harcourt, Enugu, the UK, and Canada.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Odernix team and global presence"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across five key sectors, delivering excellence in every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Odernix
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Trusted by clients across Nigeria and internationally for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise across diverse industries and regions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our recent developments and achievements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>
                <Link
                  to="/blog"
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              <span>Read Our Blog</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Vision with Odernix
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need engineering solutions or your dream home with Odernix Homes, 
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request a Quote
            </Link>
            <a
              href="https://www.odernixhomes.com"
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