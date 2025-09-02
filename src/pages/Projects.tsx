import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const heroSection = useIntersectionObserver();

  const projects = [
    // Real Estate Projects - Actual Odernix Homes achievements
    {
      title: "Odernix Homes Development - Terrazza",
      year: "2024",
      category: "Real Estate",
      location: "Abuja, Nigeria",
      description: "Luxury residential development featuring modern homes with smart home technology and sustainable design by our subsidiary Odernix Homes.",
      image: "./terrazza.png",
      status: "Completed"
    },
    {
      title: "Abuja Odernix Homes Phase - Bastion",
      year: "2025",
      category: "Real Estate",
      location: "Abuja, Nigeria",
      description: "Planned expansion of luxury residential development with enhanced sustainability features and smart infrastructure.",
      image: "./odernix-bastion.jpg",
      status: "Ongoing"
    },
    // Service Capabilities - Ready to deliver
    {
      title: "Marine Engineering Capabilities",
      year: "Ready",
      category: "Marine Engineering",
      location: "Nigeria & International",
      description: "Advanced dredging, coastal reclamation, offshore platform support, and marine terminal construction capabilities with certified teams.",
      image: "../marine/marine.jpg",
      status: "Available"
    },
    {
      title: "Energy Solutions Portfolio",
      year: "Ready",
      category: "Energy",
      location: "Nigeria & Global",
      description: "Independent power projects, smart grid systems, renewable energy integration, and energy storage solution capabilities.",
      image: "../energy/energy.jpg",
      status: "Available"
    },
    {
      title: "Oil & Gas Service Readiness",
      year: "Ready",
      category: "Oil & Gas",
      location: "Nigeria & West Africa",
      description: "Comprehensive drilling support, pipeline integrity, FPSO operations, and offshore logistics services with certified expertise.",
      image: "../oil-gas/oil-and-gas-background2.jpg",
      status: "Available"
    },
 /*    {
      title: "NDT Inspection Services",
      year: "Ready",
      category: "NDT Services",
      location: "Nigeria & International",
      description: "ASNT certified NDT technicians ready for comprehensive inspection services across all industries with advanced equipment.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Available"
    }, */
    {
      title: "Global Supply Chain Network",
      year: "Ready",
      category: "Supply & Logistics",
      location: "International Network",
      description: "Comprehensive supply and procurement services with global partnerships for medical, office, and industrial materials.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Available"
    },
    {
      title: "Construction & Infrastructure",
      year: "Ready",
      category: "Construction",
      location: "Nigeria & Regional",
      description: "Foundation engineering, civil works, structural construction with digital project management and quality assurance systems.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Available"
    }
  ];

  const categories = ['All', 'Real Estate', 'Marine Engineering', 'Energy', 'Oil & Gas', 'NDT Services', 'Supply & Logistics', 'Construction'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "8", label: "Service Areas" },
    { icon: <Users className="w-8 h-8" />, value: "13+", label: "Certifications" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "5", label: "Countries" },
    { icon: <Calendar className="w-8 h-8" />, value: "9", label: "Years Experience" }
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroSection.elementRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/project-background.jpg")' }}
      >
        {/* Animated overlay background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/background.jpg")',
            animation: 'zoomBackground 25s ease-in-out infinite alternate',
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-blue-900/75 to-teal-900/85"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rotate-45 animate-bounce" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/6 w-4 h-4 sm:w-5 sm:h-5 bg-white/10 rotate-12 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex items-center justify-center">
          <div className={`space-y-6 sm:space-y-8 md:space-y-10 transform transition-all duration-1000 ${
            heroSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Our
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto font-light leading-relaxed px-4">
              Explore our comprehensive service capabilities and Odernix Homes' successful residential developments. 
              Ready to deliver world-class engineering solutions across multiple industries and continents.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-16 md:h-16 bg-purple-100 rounded-full mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-base md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Dropdown Filter */}
          <div className="sm:hidden mb-4">
            <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category:
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Button Filter */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                <span className="whitespace-nowrap">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-50/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-48 object-cover"
                />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full w-fit">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                      project.status === 'Available' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-white relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key achievements and innovations across our project portfolio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-8 md:p-10 bg-purple-50 rounded-lg">
              <div className="text-5xl md:text-4xl font-bold text-purple-600 mb-4">10+</div>
              <div className="text-xl md:text-lg font-semibold text-gray-900 mb-4">Projects Delivered</div>
              <p className="text-gray-600 text-base">Successfully completed projects across multiple sectors and countries</p>
            </div>
            <div className="text-center p-8 md:p-10 bg-teal-50 rounded-lg">
              <div className="text-5xl md:text-4xl font-bold text-teal-600 mb-4">98%</div>
              <div className="text-xl md:text-lg font-semibold text-gray-900 mb-4">Client Satisfaction</div>
              <p className="text-gray-600 text-base">Consistently high client satisfaction rates across all project types</p>
            </div>
            <div className="text-center p-8 md:p-10 bg-gold-50 rounded-lg">
              <div className="text-5xl md:text-4xl font-bold text-yellow-600 mb-4">VR</div>
              <div className="text-xl md:text-lg font-semibold text-gray-900 mb-4">Virtual Tour Technology</div>
              <p className="text-gray-600 text-base">Cutting-edge visualization technology for project planning and client engagement</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              <span>View Detailed Reports</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need engineering solutions or want to build your dream home, 
            let's collaborate to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;