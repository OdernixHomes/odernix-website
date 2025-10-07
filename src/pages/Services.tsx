import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Zap, Droplets, Package, Home, CheckCircle, Drill, TestTube, Recycle } from 'lucide-react';
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
        "Foundation engineering (design and construction for buildings, offshore platforms with precision piling)",
        "Civil & structural construction (roads, bridges, railways, earthworks with real-time progress tracking)",
        "Marine construction (jetty, terminal, offshore platform installations)",
        "EPC services (turnkey execution of oil & gas facilities, power plants, marine terminals with EPCM/QA/QC)",
        "Mechanical & electrical engineering (turbines, layouts, solar with IoT sensors)",
        "Offshore/inshore haulage, escort security, pipeline protection",
        "Procurement services (oilfield materials, energy tools with supply chain analytics)",
        "General contracts (facility upgrades, pipeline welding, transportation)",
        "Quality assurance with ISO-certified NDT inspection services for all structural components"
      ],
      feature: "Infrastructure development in complex projects inclusive of offshore platforms, bridges, roads,railway and urban development with ISO-certified quality control"
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
        "Digital oilfield technologies (SCADA, remote monitoring, automation)",
        "Smart grid design",
        "Digital platforms (billing software, trading dashboards, apps)",
        "Energy audits and efficiency consulting",
        "Power plant equipment inspection with ISO-certified NDT services (turbines, boilers, pressure vessels)"
      ],
      feature: "Energy audits and carbon footprint reports with ISO-certified quality assurance"
    },
    {
      id: 2,
      title: "Oil and Gas Services",
      icon: <Droplets className="w-8 h-8" />,
      description: "We deliver comprehensive oil and gas services, from upstream exploration to downstream distribution, with marine support, and digital innovations to optimize operations across the entire value chain.",
      subServices: [
        "Pipeline construction & maintenance (integrity management, pigging with digital twins)",
        "Oil & gas facility construction (refineries, depots, gas plants, LNG with EPCM)",
        "Marine Support Services - Offshore rig support, crew boat services, supply vessel operations",
        "HSE & Environmental Compliance - Oil spill response, waste management, safety protocols",
        "Independent marketing & petroleum sales",
        "LNG processing & sales with storage solutions",
        "Petroleum merchants (chemicals/paints/oils)",
        "Solid minerals exploration & development",
        "Crude oil distribution, storage & terminal operations",
        "Gas station management & retail fuel operations",
        "Upstream/downstream operations integration",
        "Process engineering and optimization",
        "Facility maintenance and turnaround services",
        "Pipeline integrity assessment with ASNT-certified NDT inspection (UT, RT, MT, PT)",
        "Storage tank inspection & corrosion monitoring with ISO-certified technicians"
      ],
      feature: "Comprehensive oil & gas value chain services with digital monitoring, environmental compliance, and ASNT-certified NDT quality assurance"
    },
    {
      id: 3,
      title: "Drilling Services",
      icon: <Drill className="w-8 h-8" />,
      description: "Our specialized drilling division offers complete well lifecycle management with cutting-edge technology, advanced drilling capabilities, and comprehensive safety protocols for onshore and offshore operations.",
      subServices: [
        "Well completion - Installiation of well casting, tubing and completion accessories",
        "Cementing - Cementing of casing and liners, remedial cementing, squeeze cementing",
        "Perforation Services - Perforation walls to allow flow of oil and gas into the wellbore",
        "Wall testing - Testing the integrity of the wellbore, and to evaluate reservoir performance",
        "Completion Optimization - Optimizing completion designs for maximum production",
        "Drilling Waste Management - Cuttings treatment, fluid recycling, environmental compliance",
        "Drilling Safety & HSE - Blowout prevention, well control training, emergency response procedures",
        "Real-time Drilling Monitoring - Advanced telemetry, downhole sensors, automated drilling systems",
        "Drilling Performance Optimization - Rate of penetration enhancement, drilling efficiency analysis",
        "Wellbore Quality Assurance - Trajectory control, formation evaluation, completion readiness",
        "Casing & tubing inspection with ASNT-certified NDT technicians (UT thickness measurement, weld inspection)",
        "Rig equipment inspection with ISO 9712 certified NDT services for safety compliance"
      ],
      feature: "Advanced drilling capabilities with real-time monitoring, digital twins, ASNT-certified NDT quality control, and comprehensive auxiliary services for complete well lifecycle management"
    },
    {
      id: 4,
      title: "Waste Management & Solid Control Services",
      icon: <Recycle className="w-8 h-8" />,
      description: "Our comprehensive waste management and solid control division provides environmentally compliant solutions for drilling operations, industrial facilities, and construction projects, ensuring safe handling, treatment, and disposal of all waste streams.",
      subServices: [
        "Drilling Waste Management - Drill cuttings treatment, disposal, and recycling solutions",
        "Solid Control Systems - Shale shakers, mud cleaners, centrifuges, and desilters for drilling operations",
        "Mud Engineering - Drilling fluid design, optimization, and real-time monitoring",
        "Waste Treatment Technologies - Physical, chemical, and biological treatment processes",
        "Environmental Compliance - Regulatory adherence, waste characterization, and reporting",
        "Hazardous Waste Management - Safe handling, storage, and disposal of hazardous materials",
        "Oil-Based Mud (OBM) Recovery - Thermal desorption and solvent extraction technologies",
        "Water-Based Mud (WBM) Treatment - Solidification, stabilization, and beneficial reuse",
        "Industrial Waste Disposal - Treatment and disposal of industrial and oilfield waste",
        "Waste Minimization Programs - Reduction strategies and circular economy solutions",
        "On-site Waste Treatment Facilities - Mobile and fixed treatment units for remote locations",
        "Waste Audits & Consulting - Comprehensive waste stream analysis and optimization",
        "Sludge Management - Tank cleaning, sludge treatment, and disposal services",
        "Environmental Remediation - Contaminated soil treatment and site restoration"
      ],
      feature: "Zero-waste solutions with advanced solid control technology and environmental compliance for sustainable operations"
    },
    {
      id: 5,
      title: "Non-Destructive Testing (NDT)",
      icon: <TestTube className="w-8 h-8" />,
      description: "Our ISO-certified NDT specialists provide comprehensive non-destructive testing services to ensure structural integrity, safety compliance, and quality assurance across oil & gas, construction, and marine industries without damaging tested materials.",
      subServices: [
        "Ultrasonic Testing (UT) - Weld inspection, thickness measurement, flaw detection with advanced phased array technology",
        "Radiographic Testing (RT) - X-ray and gamma-ray imaging for internal defect detection in welds and castings",
        "Magnetic Particle Testing (MT) - Surface crack detection in ferromagnetic materials with fluorescent techniques",
        "Liquid Penetrant Testing (PT) - Surface discontinuity detection in non-porous materials",
        "Visual Testing (VT) - Surface condition and structural assessment with optical aids and digital documentation",
        "Eddy Current Testing (ECT) - Conductivity measurement and coating thickness analysis",
        "Pipeline Integrity Assessment - In-line inspection, corrosion mapping, and fitness-for-service evaluation",
        "Pressure Vessel Testing - Code compliance verification and safety assessment",
        "Storage Tank Floor Scanning - Bottom plate thickness measurement and corrosion detection",
        "Structural Steel Inspection - Building and bridge component testing with detailed reporting",
        "Marine Structure Testing - Offshore platform and vessel hull inspection",
        "Weld Quality Assessment - Pre-service and in-service weld evaluation with digital records",
        "Corrosion Monitoring - Real-time asset condition assessment and predictive maintenance",
        "Digital Radiography - Advanced imaging with immediate results and 3D flaw mapping",
        "Phased Array Ultrasonic Testing (PAUT) - Advanced flaw sizing and characterization"
      ],
      feature: "ISO-certified ASNT Level II/III technicians with digital reporting, 3D flaw mapping, and comprehensive industry compliance"
    },
    {
      id: 6,
      title: "General Services & Supplies",
      icon: <Package className="w-8 h-8" />,
      description: "Our supply division ensures timely delivery of medical, office, oilfield, and agricultural materials, optimized through advanced logistics and procurement strategies.",
      subServices: [
        "Medical supplies (surgical kits, PPE with cloud inventory)",
        "Office supplies (stationery, IT accessories with e-commerce)",
        "One-stop supplier for oilfield/marine materials",
        "Procurement/distribution/logistics",
        "Oilfield materials",
        "Land expansion",
        "Agricultural supplies",
        "Office equipment",
        "Power plant maintenance",
        "Workforce training"
      ],
      feature: "Global supply network with procurement and distribution capabilities"
    },
    {
      id: 7,
      title: "Real Estate Development",
      icon: <Home className="w-8 h-8" />,
      description: "Through Odernix Homes, we design and build luxury residential properties with modern amenities and virtual tour options. Visit https://www.odernixhomes.com to explore.",
      subServices: [
        "Luxury home construction",
        "Residential development",
        "Renovation and remodeling",
        "Sustainable building practices",
        "Smart home integration",
        "Custom architectural design",
        "Project management and consultation"
      ],
      feature: "Sustainability certificates"
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
    { title: "ISO-Certified NDT Services", category: "Quality Assurance", description: "ASNT Level II/III certified technicians with advanced testing capabilities", icon: "🔍" },
    { title: "Advanced Drilling Operations", category: "Oil & Gas", description: "Complete well lifecycle management with real-time monitoring", icon: "⛽" },
    { title: "Digital Engineering Solutions", category: "Technology", description: "3D modeling, IoT monitoring, and digital twin capabilities", icon: "💻" },
    { title: "Sustainable Energy Systems", category: "Green Technology", description: "Solar, smart grid, and energy storage solution expertise", icon: "⚡" },
    { title: "Global Supply Network", category: "Logistics", description: "International procurement and distribution capabilities", icon: "🌍" },
    { title: "EPC Project Management", category: "Construction", description: "End-to-end engineering, procurement and construction solutions", icon: "🏗️" }
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
                {activeTab === 7 && (
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
                {/* {activeTab === 4 && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
                  >
                    <span>Request NDT Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )} */}
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

      {/* Drilling Services Case Studies & Testimonials */}
      {activeTab === 3 && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Drilling Services Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proven track record in complex drilling operations across Nigeria's oil & gas sector
              </p>
            </div>

            {/* Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Niger Delta Offshore Drilling</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Successfully completed complex offshore drilling operations in challenging Niger Delta conditions, 
                  utilizing advanced directional drilling technology to reach multiple reservoir targets from a single platform.
                </p>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Depth:</strong> 12,000 ft</div>
                    <div><strong>Duration:</strong> 45 days</div>
                    <div><strong>Technology:</strong> MWD/LWD</div>
                    <div><strong>Safety:</strong> Zero incidents</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Onshore Development Wells</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Delivered comprehensive drilling and completion services for major international oil company's 
                  onshore development program, achieving exceptional drilling efficiency and wellbore quality.
                </p>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Wells:</strong> 15 wells</div>
                    <div><strong>Efficiency:</strong> +25% vs plan</div>
                    <div><strong>Quality:</strong> 100% success rate</div>
                    <div><strong>Client:</strong> International IOC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Client Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 italic">
                      "Odernix demonstrated exceptional drilling expertise and safety standards during our offshore campaign. 
                      Their real-time monitoring and proactive approach ensured zero NPT and excellent wellbore quality."
                    </p>
                  </div>
                  <div className="font-semibold text-gray-900">Operations Manager</div>
                  <div className="text-gray-600 text-sm">Major International Oil Company</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-teal-50 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 italic">
                      "The drilling auxiliary services provided by Odernix exceeded our expectations. Their mud logging and 
                      cementing quality control capabilities are world-class, delivering results on time and within budget."
                    </p>
                  </div>
                  <div className="font-semibold text-gray-900">Drilling Engineer</div>
                  <div className="text-gray-600 text-sm">Nigerian National Oil Company</div>
                </div>
              </div>
            </div>

            {/* Drilling Services CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Discuss Your Drilling Project?</h3>
                <p className="text-blue-100 mb-6">
                  Our drilling specialists are ready to provide comprehensive solutions for your next project
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>Request Drilling Services Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* NDT Services Detailed Section */}
      {activeTab === 5 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ISO-Certified NDT Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive non-destructive testing services ensuring structural integrity and safety compliance across industries
              </p>
            </div>

            {/* NDT Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {ndtServices.methods.map((method, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <TestTube className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{method.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Applications:</h4>
                    <ul className="space-y-1">
                      {method.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications & Industries */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Certifications & Standards
                </h3>
                <div className="space-y-3">
                  {ndtServices.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="w-6 h-6 text-purple-500 mr-3" />
                  Industries Served
                </h3>
                <div className="space-y-3">
                  {ndtServices.industries.map((industry, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NDT Services CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-blue-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Professional NDT Services?</h3>
                <p className="text-gray-100 mb-6">
                  Our ISO-certified specialists are ready to provide comprehensive testing solutions for your project
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>Request NDT Services Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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