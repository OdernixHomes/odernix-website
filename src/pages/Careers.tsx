import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Award, Heart, Lightbulb, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: "Marine Engineer",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      department: "Marine Engineering",
      experience: "3-5 years",
      description: "Lead marine construction projects, offshore operations, and dredging activities. Requires expertise in marine engineering and project management.",
      requirements: [
        "Bachelor's degree in Marine Engineering or related field",
        "3+ years experience in marine construction",
        "Knowledge of offshore operations and FPSO support",
        "Strong project management skills",
        "Professional certifications preferred"
      ]
    },
    {
      title: "Energy Systems Analyst",
      location: "Abuja, Nigeria",
      type: "Full-time",
      department: "Energy Division",
      experience: "2-4 years",
      description: "Analyze energy systems, develop smart grid solutions, and optimize power distribution networks. Focus on renewable energy integration.",
      requirements: [
        "Bachelor's degree in Electrical Engineering or Energy Systems",
        "Experience with smart grid technologies",
        "Knowledge of renewable energy systems",
        "Proficiency in energy modeling software",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Residential Design Architect",
      location: "Enugu, Nigeria",
      type: "Full-time",
      department: "Odernix Homes",
      experience: "2-6 years",
      description: "Design luxury residential properties with modern amenities and sustainable features. Work closely with clients to create custom home solutions.",
      requirements: [
        "Bachelor's degree in Architecture",
        "Experience in residential design and construction",
        "Proficiency in CAD software and 3D modeling",
        "Knowledge of sustainable building practices",
        "Strong creative and communication skills"
      ]
    },
    {
      title: "Supply Chain Coordinator",
      location: "Abuja, Nigeria",
      type: "Full-time",
      department: "Supply Division",
      experience: "1-3 years",
      description: "Coordinate procurement and logistics for medical, office, and industrial supplies. Manage vendor relationships and optimize supply chain processes.",
      requirements: [
        "Bachelor's degree in Supply Chain Management or related field",
        "Experience in procurement and logistics",
        "Knowledge of inventory management systems",
        "Strong organizational and communication skills",
        "Familiarity with international trade regulations"
      ]
    },
    {
      title: "Digital Solutions Developer",
      location: "Remote/Abuja",
      type: "Full-time",
      department: "Digital Innovation",
      experience: "3-5 years",
      description: "Develop digital platforms for energy management, IoT solutions, and industrial automation. Work on cutting-edge technology projects.",
      requirements: [
        "Bachelor's degree in Computer Science or Software Engineering",
        "Experience with IoT platforms and cloud technologies",
        "Knowledge of industrial automation systems",
        "Proficiency in multiple programming languages",
        "Experience with AI/ML applications preferred"
      ]
    },
    {
      title: "Project Manager - International",
      location: "London, UK / Toronto, Canada",
      type: "Full-time",
      department: "International Operations",
      experience: "5+ years",
      description: "Manage international projects across multiple disciplines. Coordinate with global teams and ensure project delivery excellence.",
      requirements: [
        "Bachelor's degree in Engineering or Project Management",
        "PMP certification preferred",
        "5+ years international project management experience",
        "Strong leadership and communication skills",
        "Willingness to travel internationally"
      ]
    },
    {
      title: "NDT Inspector Level II",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      department: "Quality Assurance",
      experience: "3-5 years",
      description: "Perform non-destructive testing using multiple methods including UT, RT, MT, and PT. Ensure compliance with international standards and safety protocols.",
      requirements: [
        "ASNT Level II certification in at least 2 NDT methods",
        "3+ years experience in industrial NDT applications",
        "Knowledge of API, ASME, and AWS codes and standards",
        "Experience with oil & gas, marine, or power generation industries",
        "Strong attention to detail and safety consciousness"
      ]
    },
    {
      title: "Senior NDT Technician",
      location: "Abuja, Nigeria",
      type: "Full-time",
      department: "Quality Assurance",
      experience: "5+ years",
      description: "Lead NDT inspection teams, develop inspection procedures, and ensure quality compliance across multiple projects and industries.",
      requirements: [
        "ASNT Level III certification preferred",
        "5+ years NDT experience with supervisory responsibilities",
        "Expertise in advanced NDT methods and equipment",
        "Strong project management and leadership skills",
        "Experience with digital reporting and inspection software"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance-based bonuses and comprehensive benefits packages."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Training Opportunities",
      description: "Access to international training programs, certifications, and professional development across our global offices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear career progression paths with mentorship programs and leadership development opportunities."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and work-life balance initiatives."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Culture",
      description: "Work on cutting-edge projects with access to latest technologies and innovation labs."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Global Mobility",
      description: "Opportunities to work across our offices in Nigeria, UK, and Canada with relocation support."
    }
  ];

  const values = [
    "Excellence in everything we do",
    "Innovation and continuous learning",
    "Safety as our top priority",
    "Integrity and transparency",
    "Collaboration and teamwork",
    "Community impact and sustainability"
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join Odernix Nigeria Limited or Odernix Homes to shape engineering excellence and residential innovation. 
            Build your career with a company that values growth, innovation, and global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#openings"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Open Positions
            </a>
            <a
              href="https://www.odernixhomes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Odernix Homes Careers</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Odernix
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of engineering, energy, and residential construction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 text-purple-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Odernix, we believe in creating an environment where talented individuals can thrive, 
                innovate, and make a meaningful impact on communities worldwide.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Odernix team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across our diverse business divisions
            </p>
          </div>
          <div className="space-y-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                      Apply Now
                    </button>
                    <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                      Save Job
                    </button>
                    <Link
                      to="/contact"
                      className="w-full text-center text-purple-600 hover:text-purple-700 font-medium inline-flex items-center justify-center space-x-1"
                    >
                      <span>Ask Questions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to identify the best talent while providing a positive candidate experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application and resume through our career portal" },
              { step: "2", title: "Initial Review", description: "Our HR team reviews your qualifications and experience" },
              { step: "3", title: "Interview Process", description: "Technical and cultural fit interviews with our team" },
              { step: "4", title: "Welcome Aboard", description: "Onboarding and integration into your new role" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join a team that's committed to excellence, innovation, and making a positive impact on communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact HR Team
            </Link>
            <a
              href="mailto:careers@odernix.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;