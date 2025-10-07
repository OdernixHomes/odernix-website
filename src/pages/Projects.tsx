import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
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
    /* {
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
    }, */
    // International Case Studies & Capabilities
    {
      title: "UK Energy Infrastructure Case Study",
      year: "Case Study",
      category: "Energy",
      location: "London, United Kingdom",
      description: "Comprehensive case study for renewable energy infrastructure development with British engineering standards, featuring smart grid technology integration capabilities. Study includes ISO-certified NDT protocols for power plant equipment inspection and quality assurance.",
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
      description: "Detailed analysis and capability study for advanced energy storage systems and grid modernization techniques following Canadian engineering standards. Includes comprehensive NDT inspection requirements for critical infrastructure components.",
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
      description: "Specialized marine engineering services for offshore platforms, dredging operations, and coastal protection in the Niger Delta region. All marine structures undergo comprehensive ISO-certified NDT inspection for safety compliance.",
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
      description: "Comprehensive pipeline construction, facility development, FPSO operations, and offshore logistics services with certified expertise for Nigerian oil sector. Pipeline integrity assessment performed by ASNT-certified NDT specialists (API 570, API 510, API 653).",
      image: "../oil-gas/oil-and-gas-background2.jpg",
      status: "Available",
      type: "Nigerian",
      projectSign: "Nigeria Oil & Gas Services - Odernix Petroleum Division"
    },
    {
      title: "Advanced Drilling Operations Portfolio",
      year: "Ready",
      category: "Drilling Services",
      location: "Nigeria & West Africa",
      description: "Specialized drilling services including rotary drilling, directional drilling, well completion, and real-time monitoring with cutting-edge technology and safety protocols. All casing, tubing, and rig equipment undergo ISO 9712 certified NDT inspection for wellbore integrity and safety compliance.",
      image: "../drilling/drilling2.jpg",
      status: "Available",
      type: "Nigerian",
      projectSign: "Advanced Drilling Services - Odernix Drilling Division"
    },
    {
      title: "Waste Management & Solid Control Services",
      year: "Ready",
      category: "Waste Management",
      location: "Nigeria & West Africa",
      description: "Comprehensive waste management and solid control services for drilling operations, industrial facilities, and construction projects. Advanced treatment technologies including drill cuttings treatment, solid control systems, mud engineering, and environmental compliance solutions with zero-waste strategies.",
      image: "../waste-management/Remediation-of-crude-oil-impacted-site2.png",
      status: "Available",
      type: "Nigerian",
      projectSign: "Environmental Solutions - Odernix Waste Management Division"
    },
    {
      title: "ISO-Certified NDT Inspection Services",
      year: "Ready",
      category: "NDT Services",
      location: "Nigeria & International",
      description: "Comprehensive non-destructive testing services including ultrasonic, radiographic, and magnetic particle testing with ISO-certified ASNT Level II/III technicians.",
      image: "../ndt/ndt.jpg",
      status: "Available",
      type: "Nigerian",
      projectSign: "NDT Quality Assurance - Odernix Testing Division"
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

  const categories = ['All', 'Real Estate', 'Marine Engineering', 'Energy', 'Oil & Gas', 'Drilling Services', 'NDT Services', 'Supply & Logistics', 'Construction'];
  const projectTypes = ['All', 'Nigerian', 'International'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const typeMatch = selectedType === 'All' || project.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const stats = [
    { image: "https://images.pexels.com/photos/351961/pexels-photo-351961.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop", value: "8", label: "Service Areas" },
    { image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop", value: "13+", label: "Certifications" },
    { image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop", value: "5", label: "Countries" },
    { image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop", value: "9", label: "Years Experience" }
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
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-16 md:h-16 bg-purple-100 rounded-full mb-4 p-2 overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full rounded-full object-cover"
                  />
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
      {/* <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Construction Project Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the remarkable transformations achieved through our construction and engineering expertise
            </p>
          </div>
          
          <div className="space-y-16"> */}
            {/*  Infrastructure Project */}
            {/* <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
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
              
            </div> */}

            {/* Industrial Complex */}
           {/*  <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 md:p-12">
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
          </div> */}

          {/* Construction Services CTA */}
          {/* <div className="text-center mt-16">
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
      </section>*/}

      {/* Work Gallery Section - Sample Pictures */}
      <section className="py-20 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/background.jpg")' }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sample showcase of our engineering and environmental capabilities across construction, marine works, and waste management services
            </p>
          </div>

          {/* Construction & Marine Engineering Samples */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Construction & Marine Engineering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/FABRICATED-SKIM-PILE-CAP-AND-CONNECTING-PIPES.png" alt="Marine Engineering" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Marine Engineering - Skim Pile Cap</h4>
                  <p className="text-gray-600 text-base">Specialized fabrication and installation of skim pile caps with precision connecting pipes</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/1FABRICATEDSKIM-PILE-CAP-AND-CONNECTING-PIPES2.png" alt="Skim Pile Installation" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Skim Pile Installation</h4>
                  <p className="text-gray-600 text-base">Advanced connecting pipe systems for complex marine engineering projects</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/PLATFORM-UPGRADE-FOR-SIR-RICHES.png" alt="Platform Infrastructure" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Platform Infrastructure</h4>
                  <p className="text-gray-600 text-base">Platform upgrade and structural enhancement with international safety standards</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/STRUCTURAL-BASE-CONSTRUCTION .png" alt="Foundation Engineering" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Marine Engineering</h4>
                  <p className="text-gray-600 text-base">Heavy-duty stell base with advanced marine techniques</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/WELDING-OPERATION .png" alt="Welding & Fabrication" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Welding & Fabrication</h4>
                  <p className="text-gray-600 text-base">Specialized welding operations with ISO-certified NDT inspection</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/marine-works.jpg" alt="Marine Works" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Marine Works</h4>
                  <p className="text-gray-600 text-base">Coastal protection and offshore support infrastructure</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./case-in-case/saftey.jpg" alt="Safety Management" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Safety Management</h4>
                  <p className="text-gray-600 text-base">HSE protocols implementation across all project sites</p>
                </div>
              </div>
            </div>
          </div>

          {/* Waste Management & Environmental Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Waste Management & Environmental Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./waste-management/Remediation-of-crude-oil-impacted-site2.png" alt="Environmental Remediation" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Environmental Remediation</h4>
                  <p className="text-gray-600 text-base">Crude oil impacted site remediation with bioremediation techniques</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./waste-management/Re–vegetation-of-remediated-crude-oil-impacted-site2.png" alt="Ecological Restoration" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Ecological Restoration</h4>
                  <p className="text-gray-600 text-base">Re-vegetation and biodiversity recovery of remediated sites</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./waste-management/In–situ-water-quality-measurement.png" alt="Water Quality Monitoring" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Water Quality Monitoring</h4>
                  <p className="text-gray-600 text-base">Real-time in-situ water quality assessment for environmental compliance</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./waste-management/Fumigation-of-company-premises.png" alt="Industrial Fumigation" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Industrial Fumigation</h4>
                  <p className="text-gray-600 text-base">Professional fumigation services for industrial facilities</p>
                </div>
              </div>
              <div className="bg-white shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <img src="./waste-management/Fumigation-of-company premises2.png" alt="Fumigation Services" className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Fumigation Services</h4>
                  <p className="text-gray-600 text-base">Comprehensive hygiene management for oil & gas installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you need engineering solutions or want to build your dream home, 
            let's collaborate to bring your vision to life.
          </p>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Projects;