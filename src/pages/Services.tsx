import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Zap, Droplets, Package, Home, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: "Construction & Procurement Engineering",
      icon: <Building className="w-8 h-8" />,
      description: "We provide end-to-end construction, marine, and procurement solutions, integrating advanced project management and digital tools to ensure efficiency, safety, and quality across all phases.",
      subServices: [
        "Foundation engineering (design and construction for buildings, jetties, offshore platforms with precision piling)",
        "Civil & structural construction (roads, bridges, earthworks with real-time progress tracking)",
        "Marine & Offshore Services (offshore logistics support, vessel charter, crew transport, FPSO operations)",
        "Marine construction (jetty, terminal, offshore platform installations)",
        "Dredging and coastal reclamation",
        "Diving/underwater inspection/salvage",
        "Bunkering, ship chandelling/spare parts/marine repairs",
        "Maritime consultancy/ship agency",
        "Marine environmental services (ballast water, oil spill containment)",
        "Tug/barge/ferry operations",
        "Support for offshore platforms",
        "Special transportation, cabotage, wreck removal",
        "Offshore/inshore haulage, escort security, pipeline protection",
        "Mechanical & electrical engineering (turbines, layouts, solar with IoT sensors)",
        "Corrosion control (cathodic protection, AI-driven mapping)",
        "Procurement services (oilfield materials, energy tools with supply chain analytics)",
        "EPC services (turnkey execution of oil & gas facilities, power plants, marine terminals with EPCM/QA/QC)",
        "General contracts (facility upgrades, pipeline welding, transportation)"
      ],
      feature: "3D project visualizations, real-time dashboards, and NDT inspection reports"
    },
    {
      id: 1,
      title: "Energy",
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
        "Blockchain trading",
        "IoT efficiency tracking",
        "AI/ML maintenance",
        "GIS mapping",
        "Cloud dashboards",
        "Energy fintech",
        "Digital twins"
      ],
      feature: "Energy audits and carbon footprint reports"
    },
    {
      id: 2,
      title: "Oil and Gas Drilling & Exploration",
      icon: <Droplets className="w-8 h-8" />,
      description: "We deliver comprehensive oil and gas services, from upstream exploration to downstream distribution, with marine support and digital innovations to optimize operations.",
      subServices: [
        "Drilling & well completion (casing, cementing, perforation with real-time analytics)",
        "Pipeline construction & maintenance (integrity management, pigging with digital twins)",
        "Oil & gas facility construction (refineries, depots, gas plants, LNG with EPCM)",
        "FPSO operations, offshore haulage, security services",
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
      title: "Supplies – Medical and Office",
      icon: <Package className="w-8 h-8" />,
      description: "Our supply division ensures timely delivery of medical, office, oilfield, and agricultural materials, optimized through advanced logistics and procurement strategies.",
      subServices: [
        "Medical supplies (surgical kits, PPE with cloud inventory)",
        "Office supplies (stationery, IT accessories with e-commerce)",
        "One-stop supplier for oilfield/marine materials",
        "Procurement/distribution/logistics",
        "Oilfield materials",
        "General contracts (infrastructure/energy/marine/environmental/technology)",
        "Grant management",
        "Cultivation, mechanized farming, poultry",
        "Land expansion",
        "Farm training/equipment",
        "Silo construction",
        "Export/import",
        "General goods/services",
        "Engineering/construction works",
        "Facility upgrades",
        "Energy services",
        "Labour supply",
        "Transportation",
        "Event centers",
        "Landed property",
        "Highway/bridge construction",
        "Construction materials",
        "Fumigation",
        "Oil/gas equipment",
        "Medical/hospitality supplies",
        "Non-Destructive Testing (NDT) - ultrasonic, radiographic, magnetic particle, dye penetrant, visual inspection",
        "NDT equipment supply and calibration services",
        "Certified NDT technicians and inspection services",
        "Office equipment",
        "Power plant maintenance",
        "Workforce training"
      ],
      feature: "Self-service portal for order tracking"
    },
    {
      id: 4,
      title: "Real Estate & Residential Construction",
      icon: <Home className="w-8 h-8" />,
      description: "Through Odernix Homes, we design and build luxury residential properties with modern amenities and virtual tour options. Visit https://www.odernixhomes.com to explore.",
      subServices: [
        "Luxury home construction",
        "Residential development",
        "Renovation and remodeling",
        "Virtual tours and 3D visualization",
        "Community insights and planning",
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

  const caseStudies = [
    { title: "Niger Delta Dredging", year: "2024", category: "Marine Engineering", description: "Large-scale coastal reclamation project" },
    { title: "Abuja Smart Grid", year: "2023", category: "Energy", description: "IoT-enabled power distribution system" },
    { title: "Enugu Odernix Homes", year: "2024", category: "Real Estate", description: "Luxury residential development" },
    { title: "Port Harcourt Supply Chain", year: "2024", category: "Supply", description: "Integrated logistics solution" }
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Odernix Nigeria Limited delivers a diverse portfolio of services spanning construction, energy, 
            oil & gas, supply, and real estate, leveraging cutting-edge technology, sustainability practices, 
            and global expertise.
          </p>
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
          <div className="hidden sm:flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-medium transition-colors duration-200 border-b-2 text-xs sm:text-sm lg:text-base ${
                  activeTab === index
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-purple-600'
                }`}
              >
                {service.icon}
                <span className="truncate max-w-[120px] sm:max-w-none">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-purple-600">
                    {services[activeTab].icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {services[activeTab].title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeTab].description}
                </p>
                <div className="bg-teal-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Special Feature</h3>
                  <p className="text-teal-700">{services[activeTab].feature}</p>
                </div>
                {activeTab === 4 && (
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-blue-50/80"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="text-blue-600">
                  {ndtServices.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {ndtServices.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {ndtServices.description}
              </p>
            </div>

            {/* NDT Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {ndtServices.methods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">{method.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{method.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {method.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications and Industries */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our NDT Certifications</h3>
                <div className="space-y-3">
                  {ndtServices.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <div className="space-y-3">
                  {ndtServices.industries.map((industry, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NDT CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need NDT Inspection Services?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our certified NDT technicians are ready to ensure your assets meet the highest safety and quality standards.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>Request NDT Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-50/70"></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our expertise across different service areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-sm text-gray-500">{study.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                <Link
                  to="/projects"
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center space-x-1 text-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              <span>Request a Case Study</span>
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