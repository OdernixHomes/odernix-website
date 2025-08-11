import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Award, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Niger Delta Dredging",
      year: "2024",
      category: "Marine Engineering",
      location: "Niger Delta, Nigeria",
      description: "Large-scale coastal reclamation and dredging project to restore waterways and create new land for development.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Abuja Independent Power Project",
      year: "2023",
      category: "Energy",
      location: "Abuja, Nigeria",
      description: "50MW independent power plant with smart grid integration and renewable energy components.",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Port Harcourt FPSO Support",
      year: "2022",
      category: "Oil & Gas",
      location: "Port Harcourt, Nigeria",
      description: "Comprehensive marine support services for offshore FPSO operations including logistics and maintenance.",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Enugu Odernix Homes Development",
      year: "2024",
      category: "Real Estate",
      location: "Enugu, Nigeria",
      description: "Luxury residential development featuring 50 modern homes with smart home technology and sustainable design.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Ongoing"
    },
    {
      title: "UK Smart Grid Implementation",
      year: "2023",
      category: "Energy",
      location: "London, UK",
      description: "Advanced smart grid deployment with IoT monitoring and automated energy management systems.",
      image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Canada Environmental Cleanup",
      year: "2024",
      category: "Environmental",
      location: "Toronto, Canada",
      description: "Marine environmental services including oil spill containment and coastal restoration.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Lagos Marine Terminal",
      year: "2023",
      category: "Marine Engineering",
      location: "Lagos, Nigeria",
      description: "Construction of modern marine terminal with advanced cargo handling facilities.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Completed"
    },
    {
      title: "Port Harcourt Pipeline Project",
      year: "2024",
      category: "Oil & Gas",
      location: "Port Harcourt, Nigeria",
      description: "Pipeline construction and maintenance with digital twin technology for integrity management.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Ongoing"
    },
    {
      title: "Abuja Odernix Homes Phase II",
      year: "2025",
      category: "Real Estate",
      location: "Abuja, Nigeria",
      description: "Second phase of luxury residential development with enhanced sustainability features.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
      status: "Planning"
    }
  ];

  const categories = ['All', 'Marine Engineering', 'Energy', 'Oil & Gas', 'Real Estate', 'Environmental'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: <Award className="w-8 h-8" />, value: "70+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, value: "98%", label: "Client Satisfaction" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "5", label: "Countries" },
    { icon: <Calendar className="w-8 h-8" />, value: "9", label: "Years Experience" }
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Odernix Nigeria Limited's project portfolio showcases expertise in engineering, energy, 
            oil & gas, supply, and residential construction through Odernix Homes.
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key achievements and innovations across our project portfolio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">70+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Projects Delivered</div>
              <p className="text-gray-600">Successfully completed projects across multiple sectors and countries</p>
            </div>
            <div className="text-center p-8 bg-teal-50 rounded-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Client Satisfaction</div>
              <p className="text-gray-600">Consistently high client satisfaction rates across all project types</p>
            </div>
            <div className="text-center p-8 bg-gold-50 rounded-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">VR</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Virtual Tour Technology</div>
              <p className="text-gray-600">Cutting-edge visualization technology for project planning and client engagement</p>
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
        </div>
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