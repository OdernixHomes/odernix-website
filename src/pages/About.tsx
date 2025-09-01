import React from 'react';
import { MapPin, Target, Eye, Heart, Shield, Lightbulb, Users, Award, Building2, Zap, Globe, CheckCircle, Search } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  // Animation observers
  const heroSection = useIntersectionObserver();
  const companyOverviewSection = useIntersectionObserver();
  const valuesSection = useIntersectionObserver();
  const expertiseSection = useIntersectionObserver();
  // const teamSection = useIntersectionObserver(); // Reserved for future use
  
  const values = [
    { 
      icon: <Heart className="w-10 h-10" />, 
      title: "Integrity", 
      description: "We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in every business interaction and project delivery.",
      color: "from-red-500 to-pink-500"
    },
    { 
      icon: <Shield className="w-10 h-10" />, 
      title: "Safety Excellence", 
      description: "Safety is our top priority. We implement rigorous safety protocols and maintain zero-harm workplace standards across all our operations.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <Lightbulb className="w-10 h-10" />, 
      title: "Innovation", 
      description: "We embrace cutting-edge technology, creative problem-solving, and innovative methodologies to deliver exceptional solutions for complex challenges.",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: <Users className="w-10 h-10" />, 
      title: "Community Impact", 
      description: "We are committed to creating positive, lasting change in the communities we serve while fostering meaningful partnerships and relationships.",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      icon: <Award className="w-10 h-10" />, 
      title: "Excellence", 
      description: "We strive for excellence in every project, consistently delivering superior quality that exceeds client expectations and industry standards.",
      color: "from-purple-500 to-violet-500"
    },
    { 
      icon: <Globe className="w-10 h-10" />, 
      title: "Global Vision", 
      description: "With offices across Nigeria, UK, and Canada, we combine local expertise with international best practices to serve our diverse clientele.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const certifications = [
    { name: 'QMS Registered', src: '/certifications /QMS REGISTERED.png', description: 'ISO Quality Management System Certification for Superior Service Delivery' },
    { name: 'BSI Group', src: '/certifications /BSI.png', description: 'British Standards Institution Global Accreditation and Quality Assurance' },
    { name: 'LEEA', src: '/certifications /LEEA.png', description: 'Lifting Equipment Engineers Association - Marine & Offshore Excellence' },
    { name: 'NCDMB', src: '/certifications /NCDMB.png', description: 'Nigerian Content Development & Monitoring Board Partnership' },
    { name: 'ASNT', src: '/certifications /ASNT.png', description: 'American Society for Nondestructive Testing - Advanced Inspection Techniques' },
    { name: 'IWCF', src: '/certifications /IWCF.png', description: 'International Well Control Forum - Oil & Gas Safety Certification' },
    { name: 'PECB', src: '/certifications /PECB.png', description: 'Professional Evaluation and Certification Board - Technical Excellence' },
    { name: 'NipeX', src: '/certifications /NipeX.png', description: 'Nigerian Petroleum Exchange - Strategic Industry Partnership' },
    { name: 'OGTAN', src: '/certifications /OGTAN.png', description: 'Oil and Gas Trainers Association of Nigeria - Professional Development' },
    { name: 'NNPC', src: '/certifications /NNPC.png', description: 'Nigerian National Petroleum Corporation - Trusted Strategic Partner' },
    { name: 'DUNS', src: '/certifications /DUNS.png', description: 'Dun & Bradstreet Number - Global Business Identity Verification' },
    { name: 'NORD-LOCK', src: '/certifications /NORD-LOCK.png', description: 'Nord-Lock Group Partnership - Advanced Fastening Solutions' },
    { name: 'ISO', src: '/certifications /ISO.jpg', description: 'International Organization for Standardization - Quality Management Certification' }
  ];

  const locations = [
    {
      name: "Corporate Headquarters",
      city: "Abuja",
      country: "Nigeria",
      address: "A4, 29B N'Djamena Crescent, off Aminu Kano Crescent, Wuse II, Abuja, Nigeria",
      phone: "+234 9128 999 972",
      email: "info@odernix.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Our flagship headquarters housing executive leadership, engineering teams, and project management divisions."
    },
    {
      name: "Port Harcourt Operations",
      city: "Port Harcourt",
      country: "Nigeria", 
      address: "Port Harcourt, Rivers State, Nigeria",
      phone: "+234 9128 999 972",
      email: "portharcourt@odernix.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Strategic location for oil & gas operations, marine services, and Niger Delta project coordination."
    },
    {
      name: "Odernix Homes Enugu",
      city: "Enugu",
      country: "Nigeria",
      address: "Enugu, Enugu State, Nigeria",
      phone: "+234 9128 999 972",
      email: "homes@odernixhomes.com",
      hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
      description: "Dedicated real estate and residential construction hub serving the Southeast region."
    },
    {
      name: "European Operations",
      city: "London",
      country: "United Kingdom",
      address: "London, United Kingdom",
      phone: "+44 (0) 20 XXXX XXXX",
      email: "uk@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      description: "International business development, technology partnerships, and European market operations."
    },
    {
      name: "North American Office",
      city: "Toronto",
      country: "Canada",
      address: "Toronto, Ontario, Canada",
      phone: "+1 (416) XXX-XXXX",
      email: "canada@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      description: "North American operations focusing on energy solutions, technology transfer, and strategic partnerships."
    }
  ];


  const businessAreas = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Engineering & Construction",
      subtitle: "Infrastructure Excellence",
      description: "Comprehensive foundation engineering, marine construction, civil works, and infrastructure development with quality assurance. We specialize in complex projects including offshore platforms, bridges, roads, and urban development.",
      services: ["Foundation Engineering", "Marine Construction", "Civil Works", "Infrastructure Development", "Offshore Platforms"],
      stats: "Ready to Deliver Excellence"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Energy Solutions",
      subtitle: "Powering the Future",
      description: "Independent power projects, renewable energy systems, smart grid technologies, and energy infrastructure. Leading Nigeria's transition to sustainable energy solutions.",
      services: ["Independent Power Projects", "Renewable Energy", "Smart Grid Systems", "Energy Storage", "Power Distribution"],
      stats: "Sustainable Power Solutions"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Oil & Gas Services",
      subtitle: "Upstream & Downstream Excellence",
      description: "Comprehensive drilling, exploration, pipeline construction, and offshore support operations. Serving major oil companies with cutting-edge technology and safety standards.",
      services: ["Drilling & Exploration", "Pipeline Construction", "Offshore Support", "FPSO Operations", "Environmental Services"],
      stats: "Advanced Technology Ready"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Supply & Procurement",
      subtitle: "Integrated Logistics Solutions",
      description: "Medical supplies, office equipment, oilfield materials, and comprehensive logistics solutions. Serving healthcare, corporate, and industrial sectors with reliable supply chains.",
      services: ["Medical Supplies", "Office Equipment", "Oilfield Materials", "Logistics Solutions", "Supply Chain Management"],
      stats: "Global Supply Network"
    },
   /*  {
      icon: <Search className="w-12 h-12" />,
      title: " (Non-Destructive Testing)",
      subtitle: "Quality Assurance Excellence",
      description: "ASNT certified specialists providing comprehensive non-destructive testing services ensuring structural integrity, safety compliance, and quality assurance across all industrial sectors.",
      services: ["Ultrasonic Testing", "Radiographic Testing", "Magnetic Particle Testing", "Pipeline Integrity Assessment", "Weld Quality Assessment"],
      stats: "ASNT Level II/III Certified"
    } */
  ];


  const expertise = [
    {
      title: "Marine & Offshore Engineering",
      description: "Specialized in complex marine construction, dredging operations, and offshore platform development with state-of-the-art equipment and experienced crews.",
      features: ["Dredging & Reclamation", "Offshore Platforms", "Marine Terminals", "Coastal Protection"]
    },
    {
      title: "Foundation Engineering",
      description: "Expert foundation design and construction for buildings, bridges, and infrastructure with advanced geotechnical analysis and innovative construction techniques.",
      features: ["Deep Foundation Systems", "Pile Driving Operations", "Geotechnical Analysis", "Structural Support"]
    },
    {
      title: "Power Generation & Distribution",
      description: "Comprehensive energy solutions including power plant construction, grid development, and renewable energy integration with cutting-edge technology.",
      features: ["Independent Power Projects", "Grid Integration", "Renewable Energy", "Smart Systems"]
    },
    {
      title: "Real Estate Development",
      description: "Through Odernix Homes, we deliver luxury residential projects with modern amenities, sustainable design, and smart home integration.",
      features: ["Luxury Residences", "Smart Home Tech", "Sustainable Design", "Community Planning"]
    }
 /*    {
      title: "NDT & Quality Assurance",
      description: "Comprehensive non-destructive testing services with ASNT certified technicians ensuring safety, compliance, and structural integrity across all industrial applications.",
      features: ["Ultrasonic Testing", "Radiographic Testing", "Pipeline Integrity", "Weld Assessment"]
    } */
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroSection.elementRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/contact-background.jpg")' }}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              About
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Odernix
              </span>
              Nigeria Limited
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto font-light leading-relaxed px-4">
              Engineering Excellence Since 2016 • Building the Future Across Nigeria and Beyond
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
              <span className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                RC: 1382295
              </span>
              <span className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                Founded: December 28, 2016
              </span>
              <span className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                Headquarters: Abuja, Nigeria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview with Background */}
      <section 
        ref={companyOverviewSection.elementRef}
        className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            companyOverviewSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Who We Are
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 mx-auto rounded-full mb-8 sm:mb-10"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-light">
              Odernix Nigeria Limited is a leading multi-disciplinary engineering and construction company, 
              providing innovative solutions across infrastructure, energy, oil & gas, and residential development. 
              Through our subsidiary Odernix Homes, we deliver exceptional real estate projects that combine 
              modern design with sustainable practices, setting new standards in the industry.
            </p>
          </div>

          {/* Enhanced Business Areas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {businessAreas.map((area, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 ${
                  companyOverviewSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="flex items-start space-x-6 mb-6">
                  <div className="text-purple-600 bg-purple-100 p-4 rounded-2xl group-hover:bg-purple-200 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-lg text-purple-600 font-medium mb-4">{area.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{area.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 font-medium">Achievement</span>
                  <span className="text-lg font-bold text-purple-600">{area.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Enhanced */}
      <section className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-gray-900/60 to-teal-900/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">Our Purpose</h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="group transform hover:scale-105 transition-all duration-700">
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 text-center sm:text-left">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light text-center sm:text-left">
                  To deliver world-class engineering, construction, and real estate solutions that drive 
                  economic growth, enhance communities, and create lasting value for our clients across 
                  Nigeria and international markets. We are committed to excellence, innovation, and 
                  sustainable development in every project we undertake.
                </p>
              </div>
            </div>
            
            <div className="group transform hover:scale-105 transition-all duration-700">
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 text-center sm:text-left">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-light text-center sm:text-left">
                  To be West Africa's most trusted and innovative engineering conglomerate by 2030, 
                  recognized for our technical excellence, sustainable practices, and transformational 
                  impact on infrastructure and housing development. We envision a future where our 
                  projects contribute to sustainable development and improved quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section 
        ref={valuesSection.elementRef}
        className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            valuesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Core Values
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 mx-auto rounded-full mb-8 sm:mb-10"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              The fundamental principles that guide our operations, define our company culture, 
              and drive our commitment to excellence in every endeavor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 ${
                  valuesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-br ${value.color} p-6 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced Expertise Areas */}
      <section 
        ref={expertiseSection.elementRef}
        className="py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-gray-900/70 to-teal-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${
            expertiseSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Expertise
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 mx-auto rounded-full mb-10"></div>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light">
              Specialized knowledge and technical capabilities that set us apart in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {expertise.map((area, index) => (
              <div 
                key={index} 
                className={`group bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 border border-white/20 ${
                  expertiseSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{area.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {area.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications */}
      <section className="py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Certifications & Partnerships
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 mx-auto rounded-full mb-10"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Our commitment to excellence is validated through industry-leading certifications 
              and strategic partnerships with global organizations.
            </p>
          </div>
          
          {/* Continuous Scrolling Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Duplicate certifications for seamless scrolling */}
              {certifications.concat(certifications).map((cert, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-6 sm:mx-8 group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all duration-900 transform hover:scale-105 border border-gray-100 w-48 sm:w-56"
                >
                  <div className="flex items-center justify-center h-16 sm:h-20 mb-4 sm:mb-6">
                    <img
                      src={cert.src}
                      alt={cert.name}
                      className="max-h-12 sm:max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                      title={cert.name}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Global Locations */}
      <section className="py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/70 to-teal-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Global Presence
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 mx-auto rounded-full mb-10"></div>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-light">
              Strategically positioned offices across multiple continents to serve our diverse 
              clientele and expand our global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {locations.map((location, index) => (
              <div key={index} className="group bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border-l-6 border-purple-500 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-teal-500 p-3 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {location.name}
                    </h3>
                    <p className="text-lg text-purple-600 font-medium">{location.city}, {location.country}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{location.description}</p>
                
                <div className="space-y-3 text-gray-600 text-sm">
                  <p className="leading-relaxed"><span className="font-semibold text-gray-800">Address:</span> {location.address}</p>
                  <p><span className="font-semibold text-gray-800">Phone:</span> {location.phone}</p>
                  <p><span className="font-semibold text-gray-800">Email:</span> {location.email}</p>
                  <p><span className="font-semibold text-gray-800">Hours:</span> {location.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;