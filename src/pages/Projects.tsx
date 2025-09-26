import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
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
      status: "Completed",
      type: "Nigerian",
      projectSign: "Odernix Homes - Premium Residences"
    },
    {
      title: "Abuja Odernix Homes Phase - Bastion",
      year: "2025",
      category: "Real Estate",
      location: "Abuja, Nigeria",
      description: "Planned expansion of luxury residential development with enhanced sustainability features and smart infrastructure.",
      image: "./odernix-bastion.jpg",
      status: "Ongoing",
      type: "Nigerian",
      projectSign: "Bastion Phase - Smart Living"
    },
    // Nigerian Construction Projects
    {
      title: " Infrastructure Development",
      year: "2023",
      category: "Construction",
      location: " Nigeria",
      description: "Major infrastructure construction project including foundation engineering, civil works, and structural development for urban expansion.",
      image: "./project/project-image.jpg",
      status: "Completed",
      type: "Nigerian",
      projectSign: "Infrastructure Project - Odernix Construction"
    },
    {
      title: "ndustrial Complex",
      year: "2024",
      category: "Construction",
      location: "Nigeria",
      description: "Large-scale industrial construction project featuring advanced foundation systems, marine-grade materials, and environmental compliance measures.",
      image: "./project/project-image2.jpg",
      status: "Completed",
      type: "Nigerian",
      projectSign: "Rivers State Industrial Development - Odernix Engineering"
    },
    {
      title: "Abuja Commercial Complex",
      year: "2024",
      category: "Construction",
      location: "Abuja, Nigeria",
      description: "Modern commercial complex construction with smart building integration, sustainable design, and advanced security systems.",
      image: "./project/project-image3.jpg",
      status: "Completed",
      type: "Nigerian",
      projectSign: "FCT Commercial Development - Built by Odernix"
    },
    // International Case Studies & Capabilities
    {
      title: "UK Energy Infrastructure Case Study",
      year: "Case Study",
      category: "Energy",
      location: "London, United Kingdom",
      description: "Comprehensive case study for renewable energy infrastructure development with British engineering standards, featuring smart grid technology integration capabilities.",
      image: "../energy/energy1.jpg",
      status: "Case Study",
      type: "International",
      projectSign: "UK Energy Standards Case Study - Odernix Capabilities"
    },
    {
      title: "Canadian Technology Standards Analysis",
      year: "Case Study",
      category: "Energy",
      location: "British Columbia, Canada",
      description: "Detailed analysis and capability study for advanced energy storage systems and grid modernization techniques following Canadian engineering standards.",
      image: "../energy/energy2.jpg",
      status: "Case Study",
      type: "International",
      projectSign: "Canadian Standards Study - Odernix Global Capabilities"
    },
    // Service Capabilities - Nigerian Focus
    {
      title: "Niger Delta Marine Operations",
      year: "Ready",
      category: "Marine Engineering",
      location: "Niger Delta, Nigeria",
      description: "Specialized marine engineering services for offshore platforms, dredging operations, and coastal protection in the Niger Delta region.",
      image: "../marine/marine.jpg",
      status: "Available",
      type: "Nigerian",
      projectSign: "Niger Delta Marine Services - Odernix Marine Division"
    },
    {
      title: "Nigerian Oil & Gas Support Services",
      year: "Ready",
      category: "Oil & Gas",
      location: "Nigeria & West Africa",
      description: "Comprehensive drilling support, pipeline integrity, FPSO operations, and offshore logistics services with certified expertise for Nigerian oil sector.",
      image: "../oil-gas/oil-and-gas-background2.jpg",
      status: "Available",
      type: "Nigerian",
      projectSign: "Nigeria Oil & Gas Services - Odernix Petroleum Division"
    },
    // International Capabilities Study
    {
      title: "Global Supply Chain Standards Study",
      year: "Case Study",
      category: "Supply & Logistics",
      location: "International Markets",
      description: "Comprehensive capability study for international supply chain operations with global procurement standards for medical, industrial, and oilfield materials.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Case Study",
      type: "International",
      projectSign: "Global Supply Standards Study - Odernix Capabilities"
    }
  ];

  const categories = ['All', 'Real Estate', 'Marine Engineering', 'Energy', 'Oil & Gas', 'NDT Services', 'Supply & Logistics', 'Construction'];
  const projectTypes = ['All', 'Nigerian', 'International'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const typeMatch = selectedType === 'All' || project.type === selectedType;
    return categoryMatch && typeMatch;
  });

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
          {/* Mobile Dropdown Filters */}
          <div className="sm:hidden mb-6 space-y-4">
            <div>
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
            <div>
              <label htmlFor="type-select" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Location:
              </label>
              <select
                id="type-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-white"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type} Projects
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Desktop Button Filters */}
          <div className="hidden sm:block">
            {/* Category Filters */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Filter by Category:</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-medium transition-colors duration-200 text-xs sm:text-sm ${
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
            
            {/* Project Type Filters */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">Filter by Location:</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-colors duration-200 text-xs sm:text-sm ${
                      selectedType === type
                        ? 'bg-teal-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-teal-100 hover:text-teal-600'
                    }`}
                  >
                    <span className="whitespace-nowrap">{type} Projects</span>
                  </button>
                ))}
              </div>
            </div>
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
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-48 object-cover"
                  />
                  {/* Project Signpost Overlay */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/75 text-white px-3 py-2 rounded-lg text-xs font-medium">
                      {project.projectSign}
                    </div>
                  </div>
                  {/* Project Type Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      project.type === 'Nigerian' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full w-fit">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                      project.status === 'Available' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                      project.status === 'Case Study' ? 'bg-orange-100 text-orange-800' :
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

      {/* Before & After Construction Gallery */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Construction Project Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the remarkable transformations achieved through our construction and engineering expertise
            </p>
          </div>
          
          <div className="space-y-16">
            {/*  Infrastructure Project */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Infrastructure Development</h3>
                <p className="text-gray-600">Major urban infrastructure transformation in Lagos State</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-700 text-center">Before Construction</h4>
                  <div className="bg-gray-200 rounded-lg p-4 text-center">
                    <img 
                      src="./project/project-image.jpg" 
                      alt="Project before construction" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">Undeveloped land requiring infrastructure</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-700 text-center">After Completion</h4>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <img 
                      src="./project/project-image2.jpg" 
                      alt="Project after construction" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">Modern infrastructure with advanced systems</p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Industrial Complex */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Industrial Complex</h3>
                <p className="text-gray-600">Advanced industrial facility development in Rivers State</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-700 text-center">Construction Phase</h4>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <img 
                      src="./project/project-image3.jpg" 
                      alt="Project during construction" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">Active construction with marine-grade materials</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-700 text-center">Final Result</h4>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <img 
                      src="./project/project-image.jpg" 
                      alt="Project completed" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2">State-of-the-art industrial complex ready for operations</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Environmental compliance achieved</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced foundation systems installed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Zero safety incidents recorded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Delivered ahead of schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Construction Services CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Vision?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Our construction and engineering team is ready to deliver your next project with the same level of 
                excellence and attention to detail demonstrated in these transformations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <span>Request Construction Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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