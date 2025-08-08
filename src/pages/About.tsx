import React from 'react';
import { MapPin, Target, Eye, Heart, Shield, Lightbulb, Users, Globe, Award, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Heart className="w-8 h-8" />, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: <Shield className="w-8 h-8" />, title: "Safety", description: "Uncompromising commitment to safety standards" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation", description: "Embracing cutting-edge technology and solutions" },
    { icon: <Users className="w-8 h-8" />, title: "Community Impact", description: "Creating positive change in communities we serve" },
    { icon: <Award className="w-8 h-8" />, title: "Excellence", description: "Delivering superior quality in every project" }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'BR Safety Council', description: 'Safety Excellence Recognition' },
    { name: 'LEEA', description: 'Lifting Equipment Engineers Association' },
    { name: 'BSI', description: 'British Standards Institution' },
    { name: 'IDDC', description: 'International Dredging & Development Corporation' },
    { name: 'NCDMB', description: 'Nigerian Content Development & Monitoring Board' }
  ];

  const locations = [
    {
      name: "Corporate Headquarters",
      address: "A4, 29B N'Djamena Crescent, off Aminu Kano Crescent, Wuse II, Abuja, Nigeria",
      phone: "+234 703 490 0069",
      email: "info@odernix.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      name: "Port Harcourt Office",
      address: "Port Harcourt, Rivers State, Nigeria",
      phone: "+234 703 490 0069",
      email: "portharcourt@odernix.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      name: "Enugu Office (Odernix Homes)",
      address: "Enugu, Enugu State, Nigeria",
      phone: "+234 703 490 0069",
      email: "homes@odernixhomes.com",
      hours: "Mon-Sat: 9:00 AM - 5:00 PM"
    },
    {
      name: "United Kingdom",
      address: "London, United Kingdom",
      phone: "+44 (0) 20 XXXX XXXX",
      email: "uk@odernix.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT"
    },
    {
      name: "Canada",
      address: "Toronto, Ontario, Canada",
      phone: "+1 (416) XXX-XXXX",
      email: "canada@odernix.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM EST"
    }
  ];

  const milestones = [
    { year: "2016", event: "Company Incorporation", description: "Odernix Nigeria Limited officially incorporated on December 28, 2016" },
    { year: "2019", event: "Marine Division Launch", description: "Expanded into marine dredging and offshore services" },
    { year: "2021", event: "Energy Sector Entry", description: "First Independent Power Project (IPP) commissioned" },
    { year: "2023", event: "Odernix Homes Established", description: "Launched residential construction and real estate division" },
    { year: "2025", event: "100th Home Milestone", description: "Odernix Homes completes 100th luxury residential unit" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Odernix Nigeria Limited
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Odernix Nigeria Limited, incorporated on December 28, 2016 (RC: 1382295), is a multi-disciplinary 
                firm based in Abuja at A4, 29B N'Djamena Crescent, Wuse II. Through Odernix Homes, we extend into 
                real estate, with branches in Port Harcourt, Enugu, the UK, and Canada.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">RC: 1382295</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Est. December 28, 2016</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Odernix Nigeria Limited headquarters and operations"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver innovative, safe, and sustainable solutions across engineering, energy, 
                and residential living, while maintaining the highest standards of quality and 
                client satisfaction in every project we undertake.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-teal-600">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading integrated provider of infrastructure and homes by 2030, 
                recognized for our innovation, sustainability, and positive impact on communities 
                across Nigeria and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 text-purple-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team, including experts in engineering and real estate, guides Odernix and Odernix Homes. 
              The Board brings strategic vision, supported by technical staff in construction and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${2379004 + index}/pexels-photo-${2379004 + index}.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`}
                  alt="Leadership team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership Member</h3>
                  <p className="text-purple-600 font-medium mb-2">Executive Position</p>
                  <p className="text-gray-600 text-sm">Bringing years of expertise in engineering and strategic leadership.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and safety is validated by industry-leading certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src={`https://via.placeholder.com/100?text=${cert.name.replace(/\s+/g, '+')}`}
                  alt={cert.name}
                  className="h-16 w-auto mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located offices to serve our clients across multiple continents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{location.address}</p>
                  <p><strong>Phone:</strong> {location.phone}</p>
                  <p><strong>Email:</strong> {location.email}</p>
                  <p><strong>Hours:</strong> {location.hours}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
              alt="Global map showing Odernix locations"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Milestones
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey of growth and achievement over the years
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;