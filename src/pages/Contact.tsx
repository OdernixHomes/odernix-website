import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceCategory: '',
      message: ''
    });
  };

  const offices = [
    {
      name: "Corporate Headquarters",
      address: "A4, 29B N'Djamena Crescent, off Aminu Kano Crescent, Wuse II, Abuja, Nigeria",
      phone: "+234 703 490 0069",
      email: "info@odernix.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      type: "Main Office"
    },
    {
      name: "Port Harcourt Office",
      address: "Port Harcourt, Rivers State, Nigeria",
      phone: "+234 703 490 0069",
      email: "portharcourt@odernix.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      type: "Regional Office"
    },
    {
      name: "Enugu Office (Odernix Homes)",
      address: "Enugu, Enugu State, Nigeria",
      phone: "+234 703 490 0069",
      email: "homes@odernixhomes.com",
      hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
      type: "Real Estate"
    },
    {
      name: "United Kingdom",
      address: "London, United Kingdom",
      phone: "+44 (0) 20 XXXX XXXX",
      email: "uk@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      type: "International"
    },
    {
      name: "Canada",
      address: "Toronto, Ontario, Canada",
      phone: "+1 (416) XXX-XXXX",
      email: "canada@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      type: "International"
    }
  ];

  const faqs = [
    {
      question: "Can Odernix Homes build custom homes?",
      answer: "Yes, Odernix Homes specializes in custom luxury home construction with personalized design and modern amenities. Visit www.odernixhomes.com for more details."
    },
    {
      question: "Do you provide marine services?",
      answer: "Yes, we offer comprehensive marine services including dredging, offshore support, FPSO operations, and marine construction across Nigeria and internationally."
    },
    {
      question: "What digital solutions do you offer?",
      answer: "We provide digital oilfield technologies, smart grid solutions, IoT monitoring, digital twins, and various digital platforms for energy and industrial applications."
    },
    {
      question: "What certifications does Odernix hold?",
      answer: "We are certified with ISO 9001:2015, BR Safety Council, LEEA, BSI, IDDC, and NCDMB, ensuring the highest standards of quality and safety."
    },
    {
      question: "Do you operate internationally?",
      answer: "Yes, we have operations in Nigeria, the United Kingdom, and Canada, with projects spanning multiple continents."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Reach Odernix Nigeria Limited for engineering or supply needs, or contact Odernix Homes 
            for residential inquiries. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Category *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="construction">Construction & Procurement Engineering</option>
                      <option value="energy">Energy</option>
                      <option value="oilgas">Oil and Gas Drilling & Exploration</option>
                      <option value="supplies">Supplies – Medical and Office</option>
                      <option value="realestate">Real Estate & Residential Construction</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+2347034900069" className="text-gray-600 hover:text-purple-600 transition-colors">
                        +234 703 490 0069
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@odernix.com" className="block text-gray-600 hover:text-purple-600 transition-colors">
                          info@odernix.com
                        </a>
                        <a href="mailto:homes@odernixhomes.com" className="block text-gray-600 hover:text-purple-600 transition-colors">
                          homes@odernixhomes.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        A4, 29B N'Djamena Crescent,<br />
                        off Aminu Kano Crescent,<br />
                        Wuse II, Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Odernix Homes</h3>
                <p className="text-teal-700 mb-4">
                  For residential construction and real estate inquiries, visit our dedicated website.
                </p>
                <a
                  href="https://www.odernixhomes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  <span>Visit Odernix Homes</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have offices strategically located to serve our clients across multiple continents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{office.name}</h3>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {office.type}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-purple-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img
              src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
              alt="Interactive map showing Odernix office locations"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our services and capabilities
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a
              href="mailto:info@odernix.com"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Ask Us More</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;