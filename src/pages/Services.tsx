import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Zap, Droplets, Package, Home, CheckCircle, Search } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const heroSection = useIntersectionObserver();

  const services = [
    {
      id: 0,
      title: "Engineering Procurement & Construction (EPC)",
      icon: <Building className="w-8 h-8" />,
      description: "We provide end-to-end construction, marine, and procurement solutions, integrating advanced project management and digital tools to ensure efficiency, safety, and quality across all phases.",
      subServices: [
        "Foundation engineering (design and construction for buildings, jetties, offshore platforms with precision piling)",
        "Civil & structural construction (roads, bridges, railways, earthworks with real-time progress tracking)",
        "Marine & Offshore Services (offshore logistics support, vessel charter, crew transport, FPSO operations)",
        "Marine construction (jetty, terminal, offshore platform installations)",
        "EPC services (turnkey execution of oil & gas facilities, power plants, marine terminals with EPCM/QA/QC)",
        "Mechanical & electrical engineering (turbines, layouts, solar with IoT sensors)",
        "Dredging and coastal reclamation",
        "Diving/underwater inspection/salvage",
        "Bunkering, ship chandelling/spare parts/marine repairs",
        "Special transportation, cabotage, wreck removal",
        "Offshore/inshore haulage, escort security, pipeline protection",
        "Procurement services (oilfield materials, energy tools with supply chain analytics)",
       "General contracts (facility upgrades, pipeline welding, transportation)"
      ],
      feature: "3D project visualizations, real-time dashboards, and NDT inspection reports"
    },
    {
      id: 1,
      title: "Energy Solutions",
      icon: <Zap className="w-8 h-8" />,
      description: "Our energy division offers sustainable power generation, distribution, and digital solutions, aligning with global decarbonization goals and client-specific needs.",
      subServices: [
        "Independent power projects (IPPs)",
        "Embedded power plants",
        "Diesel/gas/hybrid generation for estates/malls/industries",
        "Transmission/distribution infrastructure (transformers, lines, substations)",
        "Smart grid solutions (IoT monitoring, automated management)",
        "Metering/billing systems",
        "Energy storage (battery banks, UPS, backup power)",
        "Power plant design/construction (renewable/conventional)",
        "Electrical engineering (load scheduling, solar streetlights)",
        "Energy equipment procurement with vendor tracking",
        "Digital oilfield technologies (SCADA, remote monitoring, automation)",
        "Smart grid design",
        "Digital platforms (billing software, trading dashboards, apps)",
        "Digital twins"
      ],
      feature: "Energy audits and carbon footprint reports"
    },
    {
      id: 2,
      title: "Oil and Gas Services",
      icon: <Droplets className="w-8 h-8" />,
      description: "We deliver comprehensive oil and gas services, from upstream exploration to downstream distribution, with marine support and digital innovations to optimize operations.",
      subServices: [
        "Drilling & well completion (casing, cementing, perforation with real-time analytics)",
        "Pipeline construction & maintenance (integrity management, pigging with digital twins)",
        "Oil & gas facility construction (refineries, depots, gas plants, LNG with EPCM)",
        "Independent marketing",
        "Petroleum sales",
        "Oil services",
        "LNG sales",
        "Petroleum merchants (chemicals/paints/oils)",
        "Solid minerals exploration",
        "Crude oil/distribution/storage",
        "Gas station management",
        "Upstream/downstream operations",
        "Environmental compliance (oil spill response, waste treatment)"
      ],
      feature: "Risk assessment dashboards and decarbonization roadmaps"
    },
    {
      id: 3,
      title: " General Supplies",
      icon: <Package className="w-8 h-8" />,
      description: "Our supply division ensures timely delivery of medical, office, oilfield, and agricultural materials, optimized through advanced logistics and procurement strategies.",
      subServices: [
        "Medical supplies (surgical kits, PPE with cloud inventory)",
        "Office supplies (stationery, IT accessories with e-commerce)",
        "One-stop supplier for oilfield/marine materials",
        "Procurement/distribution/logistics",
        "Oilfield materials",
        "Grant management",
        "Land expansion",
        "Medical/hospitality supplies",
        "Office equipment",
        "Power plant maintenance",
        "Workforce training"
      ],
      feature: "Self-service portal for order tracking"
    },
    /* {
      id: 4,
      title: "NDT (Non-Destructive Testing)",
      icon: <Search className="w-8 h-8" />,
      description: "Our certified NDT specialists provide comprehensive non-destructive testing services to ensure structural integrity, safety, and quality assurance across oil & gas, construction, and marine industries.",
      subServices: [
        "Ultrasonic Testing (UT) - Weld inspection, thickness measurement, flaw detection",
        "Radiographic Testing (RT) - Internal defect detection in welds and castings",
        "Magnetic Particle Testing (MT) - Surface crack detection in ferromagnetic materials",
        "Liquid Penetrant Testing (PT) - Surface discontinuity detection",
        "Visual Testing (VT) - Surface condition and structural assessment",
        "Eddy Current Testing (ECT) - Conductivity and coating thickness measurement",
        "Pipeline Integrity Assessment - In-line inspection and corrosion mapping",
        "Pressure Vessel Testing - Code compliance and safety verification",
        "Storage Tank Floor Scanning - Bottom plate thickness and corrosion detection",
        "Structural Steel Inspection - Building and bridge component testing",
        "Marine Structure Testing - Offshore platform and vessel hull inspection",
        "Weld Quality Assessment - Pre-service and in-service weld evaluation",
        "Corrosion Monitoring - Real-time asset condition assessment",
        "Digital Radiography - Advanced imaging with immediate results",
        "Phased Array Ultrasonic Testing (PAUT) - Advanced flaw sizing and characterization"
      ],
      feature: "ASNT Level II/III certified technicians with digital reporting and 3D flaw mapping"
    }, */
    {
      id: 5,
      title: "Real Estate Development",
      icon: <Home className="w-8 h-8" />,
      description: "Through Odernix Homes, we design and build luxury residential properties with modern amenities and virtual tour options. Visit https://www.odernixhomes.com to explore.",
      subServices: [
        "Luxury home construction",
        "Residential development",
        "Renovation and remodeling",
        "Virtual tours and 3D visualization",
        "Sustainable building practices",
        "Smart home integration",
        "Custom architectural design",
        "Project management and consultation"
      ],
      feature: "Immersive VR tours and sustainability certificates"
    }
  ];

  const ndtServices = {
    title: "Non-Destructive Testing (NDT)",
    icon: <CheckCircle className="w-8 h-8" />,
    description: "Our certified NDT specialists provide comprehensive inspection services to ensure structural integrity, safety compliance, and quality assurance across all industries without damaging the tested materials.",
    methods: [
      {
        name: "Ultrasonic Testing (UT)",
        description: "High-frequency sound waves detect internal flaws, thickness measurement, and material characterization",
        applications: ["Pipeline integrity", "Weld inspection", "Thickness gauging", "Flaw detection"]
      },
      {
        name: "Radiographic Testing (RT)",
        description: "X-ray and gamma-ray imaging reveals internal discontinuities and structural defects",
        applications: ["Weld quality assessment", "Casting inspection", "Corrosion detection", "Assembly verification"]
      },
      {
        name: "Magnetic Particle Testing (MT)",
        description: "Magnetic fields and iron particles detect surface and near-surface discontinuities in ferromagnetic materials",
        applications: ["Surface crack detection", "Weld inspection", "Component testing", "Quality control"]
      },
      {
        name: "Dye Penetrant Testing (PT)",
        description: "Liquid penetrant reveals surface-breaking defects in non-porous materials",
        applications: ["Surface crack detection", "Porosity identification", "Component inspection", "Maintenance checks"]
      },
      {
        name: "Visual Testing (VT)",
        description: "Direct visual examination and optical aids for surface condition assessment",
        applications: ["General inspection", "Weld assessment", "Corrosion monitoring", "Damage evaluation"]
      },
      {
        name: "Eddy Current Testing (ET)",
        description: "Electromagnetic induction detects surface and near-surface flaws in conductive materials",
        applications: ["Tube inspection", "Surface crack detection", "Conductivity measurement", "Coating thickness"]
      }
    ],
    certifications: [
      "ASNT (American Society for Nondestructive Testing) Level II & III certified technicians",
      "ISO 9712 international certification compliance",
      "API 570, API 510, API 653 inspection certifications",
      "NACE corrosion specialist certifications",
      "AWS (American Welding Society) certified welding inspectors"
    ],
    industries: [
      "Oil & Gas (pipelines, refineries, offshore platforms)",
      "Marine & Offshore (vessels, rigs, subsea structures)",
      "Power Generation (turbines, boilers, pressure vessels)",
      "Construction (bridges, buildings, infrastructure)",
      "Manufacturing (aerospace, automotive, heavy machinery)",
      "Petrochemical (storage tanks, process equipment)"
    ]
  };

  const capabilities = [
    { title: "Advanced NDT Services", category: "Quality Assurance", description: "ASNT certified technicians ready for comprehensive inspection services", icon: "🔍" },
    { title: "Digital Engineering Solutions", category: "Technology", description: "3D modeling, IoT monitoring, and digital twin capabilities", icon: "💻" },
    { title: "Sustainable Energy Systems", category: "Green Technology", description: "Solar, smart grid, and energy storage solution expertise", icon: "⚡" },
    { title: "Global Supply Network", category: "Logistics", description: "International procurement and distribution capabilities", icon: "🌍" }
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section 
        ref={heroSection.elementRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("../energy/energy2.jpg")' }}
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
                Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto font-light leading-relaxed px-4">
              Odernix Nigeria Limited delivers a diverse portfolio of services spanning construction, energy, 
              oil & gas, supply, and real estate, leveraging cutting-edge technology, sustainability practices, 
              and global expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          {/* Mobile Dropdown */}
          <div className="sm:hidden mb-8">
            <label htmlFor="service-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Service:
            </label>
            <select
              id="service-select"
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              {services.map((service, index) => (
                <option key={index} value={index}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:flex flex-wrap justify-center mb-12 border-b border-gray-200 gap-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-4 md:px-6 py-4 font-medium transition-colors duration-200 border-b-2 text-sm md:text-base rounded-t-lg ${
                  activeTab === index
                    ? 'border-purple-600 text-purple-600 bg-purple-50'
                    : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                {service.icon}
                <span className="truncate max-w-[140px] md:max-w-none">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="text-purple-600 text-3xl sm:text-2xl">
                    {services[activeTab].icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {services[activeTab].title}
                  </h2>
                </div>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeTab].description}
                </p>
                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Special Feature</h3>
                  <p className="text-teal-700">{services[activeTab].feature}</p>
                </div>
                {activeTab === 5 && (
                  <a
                    href="https://www.odernixhomes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                  >
                    <span>Visit Odernix Homes</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {activeTab === 4 && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                  >
                    <span>Request NDT Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Sub-Services</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {services[activeTab].subServices.map((subService, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{subService}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* NDT Services Section */}
     

      {/* Our Capabilities */}
      <section className="py-20 bg-gray-50 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-50/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready-to-deploy expertise and cutting-edge solutions across all engineering disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-5xl md:text-4xl mb-6">{capability.icon}</div>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {capability.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-lg font-semibold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 text-base md:text-sm mb-6">{capability.description}</p>
                {/* <Link
                  to="/contact"
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center space-x-1 text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link> */}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
            Need a Service or a New Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team for engineering and supply solutions, or visit Odernix Homes for your residential needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
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

export default Services;