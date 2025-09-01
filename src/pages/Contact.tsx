import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, MessageCircle, ExternalLink, Users, Globe, Building, CheckCircle, Star, Award, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | 'idle';
    message: string;
  }>({ type: 'idle', message: '' });

  // Animation observers
  const heroSection = useIntersectionObserver();
  const contactFormSection = useIntersectionObserver();
  const officesSection = useIntersectionObserver();
  const ctaSection = useIntersectionObserver();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_odernix';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing again
    if (submitStatus.type !== 'idle') {
      setSubmitStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.serviceCategory) {
      setSubmitStatus({ type: 'error', message: 'Please select a service category' });
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Project details are required' });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setSubmitStatus({ type: 'error', message: 'Please provide more detailed project information (minimum 10 characters)' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service_category: formData.serviceCategory,
        message: formData.message,
        to_email: 'info@odernix.com', // Where the email will be sent
        reply_to: formData.email,
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your inquiry! We have received your message and will get back to you within 24 hours.' 
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceCategory: '',
          message: ''
        });
        
        // Log success for debugging
        console.log('✅ Email sent successfully via EmailJS:', result);
      } else {
        throw new Error('Email service returned non-200 status');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at info@odernix.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: "Corporate Headquarters",
      city: "Abuja",
      country: "Nigeria",
      address: "A4, 29B N'djamena Crescent, off Aminu Kano Crescent, Wuse II, 900288, AMAC Abuja",
      phone: "+234(0) 9128 999 972",
      email: "info@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      type: "Main Office",
      description: "Our flagship headquarters housing executive leadership, engineering teams, and project management divisions.",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Port Harcourt Operations",
      city: "Port Harcourt",
      country: "Nigeria",
      address: "No 12 Agip Road, Mile 4 Rumueme, Port Harcourt, Rivers State, Nigeria",
      phone: "+234(0) 9128 999 972",
      email: "portharcourt@odernix.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      type: "Regional Office",
      description: "Strategic location for oil & gas operations, marine services, and Niger Delta project coordination.",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Odernix Enugu",
      city: "Enugu",
      country: "Nigeria",
      address: "19 IGBARIAM STREET, ACHARA LAYOUT, ENUGU, ENUGU STATE",
      phone: "+234(0) 9128 999 972",
      email: "info@odernix.com",
      hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
      type: "Regional Office",
      description: "Dedicated real estate and residential construction hub serving the Southeast region with luxury homes.",
      color: "from-green-500 to-green-600"
    },
    {
      name: "European Operations",
      city: "London",
      country: "United Kingdom",
      address: "2 Pelican House, 42 Freshwharf Road Barking, London. IG11 7HH",
      phone: "+234(0) 9128 999 972",
      email: "uk@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      type: "International",
      description: "International business development, technology partnerships, and European market operations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "North American Office",
      city: "Toronto",
      country: "Canada",
      address: "Unit 15, 14151 58a Avenue, Surrey B.C., V3X 0L1",
      phone: "+234(0) 9128 999 972",
      email: "canada@odernix.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      type: "International",
      description: "North American operations focusing on energy solutions, technology transfer, and strategic partnerships.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Call Us",
      description: "Speak directly with our expert team",
      value: "+234(0) 9128 999 972",
      action: "tel:+2349128999972",
      gradient: "from-blue-500 to-blue-700",
      feature: "24/7 Support Available"
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Email Us",
      description: "Send detailed project inquiries",
      value: "info@odernix.com",
      action: "mailto:info@odernix.com",
      gradient: "from-purple-500 to-purple-700",
      feature: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "WhatsApp",
      description: "Quick consultation via WhatsApp",
      value: "+234 9128 999 972",
      action: "https://wa.me/2349128999972",
      gradient: "from-green-500 to-green-700",
      feature: "Instant messaging support"
    }
  ];

  const serviceCategories = [
    { value: "construction", label: " Engineering Procurement & Construction", icon: <Building className="w-5 h-5" /> },
    { value: "energy", label: "Energy Solutions", icon: <Globe className="w-5 h-5" /> },
    { value: "oilgas", label: "Oil & Gas Services", icon: <Award className="w-5 h-5" /> },
    { value: "supplies", label: "Supply & Procurement", icon: <Star className="w-5 h-5" /> },
    { value: "realestate", label: "Real Estate & Odernix Homes", icon: <Users className="w-5 h-5" /> },
    { value: "marine", label: "Marine & Offshore Services", icon: <Globe className="w-5 h-5" /> },
    { value: "general", label: "General Inquiry", icon: <MessageCircle className="w-5 h-5" /> }
  ];

  const whyContactUs = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Expert Consultation",
      description: "Free initial assessment by our experienced engineering professionals and certified specialists"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours during business days with detailed proposals"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ready Expertise",
      description: "13+ international certifications and proven capabilities across multiple engineering disciplines"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Personal project manager assigned to guide you from initial consultation to project completion"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section with Contact Background */}
      <section 
        ref={heroSection.elementRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/contact-us.jpg")' }}
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
              Let's Build Something
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto font-light leading-relaxed px-4">
              Connect with Odernix Nigeria Limited for world-class engineering solutions, 
              or reach Odernix Homes for luxury residential projects. We're here to turn 
              your vision into reality with innovative expertise and proven excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.includes('wa.me') ? '_blank' : undefined}
                  rel={method.action.includes('wa.me') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center space-x-3 bg-gradient-to-r ${method.gradient} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-white/20 backdrop-blur-sm`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-bold">{method.title}</div>
                    <div className="text-xs opacity-90 hidden sm:block">{method.feature}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Enhanced Contact Form Section */}
      <section 
        ref={contactFormSection.elementRef}
        className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/75 to-teal-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Enhanced Contact Form */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 transform transition-all duration-1000 ${
              contactFormSection.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Project Today
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Tell us about your vision and we'll provide expert guidance to make it reality
                </p>
              </div>
              
              {/* Status Messages */}
              {submitStatus.type !== 'idle' && (
                <div className={`p-4 rounded-xl mb-6 flex items-center space-x-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Category *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
                    placeholder="Tell us about your project scope, timeline, budget range, and specific requirements. The more details you provide, the better we can assist you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 text-sm sm:text-base ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Your Inquiry</span>
                    </>
                  )}
                </button>
                
                <div className="text-center text-xs sm:text-sm text-gray-500 pt-4">
                  <p>By submitting this form, you agree to our privacy policy and terms of service.</p>
                  <p className="mt-2 font-medium text-purple-600">Expected response time: Within 24 hours</p>
                </div>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${
              contactFormSection.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              
              {/* Contact Methods */}
              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.includes('wa.me') ? '_blank' : undefined}
                    rel={method.action.includes('wa.me') ? 'noopener noreferrer' : undefined}
                    className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                  >
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className={`bg-gradient-to-br ${method.gradient} p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">{method.description}</p>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{method.value}</p>
                        <p className="text-xs sm:text-sm text-purple-600 mt-2 font-medium">{method.feature}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-100">
                <div className="flex items-center space-x-4 mb-6">
                  <Clock className="w-8 h-8 text-teal-600" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div>
                    <p className="font-semibold text-gray-900">Nigeria Offices:</p>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM (Enugu)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">International:</p>
                    <p className="text-gray-700">UK: 9:00 AM - 5:00 PM GMT</p>
                    <p className="text-gray-700">Canada: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white/60 rounded-xl border border-teal-200">
                  <p className="text-sm text-teal-700 font-medium">
                    <strong>Emergency Projects:</strong> We provide 24/7 support for urgent engineering and construction needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why Choose Odernix?
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 mx-auto rounded-full mb-8 sm:mb-10"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              Experience the difference of working with Nigeria's leading engineering and construction company
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyContactUs.map((reason, index) => (
              <div 
                key={index}
                className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 text-center border border-gray-100"
              >
                <div className="text-purple-600 bg-purple-100 p-4 sm:p-5 rounded-full inline-flex mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Office Locations */}
      <section 
        ref={officesSection.elementRef}
        className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            officesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Global Presence
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-600 mx-auto rounded-full mb-8 sm:mb-10"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto font-light">
              Strategically located offices ensure we're always close to our clients, 
              providing personalized service across Nigeria and internationally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className={`group bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-gray-100 ${
                  officesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${office.color}`}></div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                        {office.name}
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm sm:text-base">
                        {office.city}, {office.country}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      office.type === 'Main Office' ? 'bg-purple-100 text-purple-700' :
                      office.type === 'Regional Office' ? 'bg-teal-100 text-teal-700' :
                      office.type === 'Real Estate Hub' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    } whitespace-nowrap`}>
                      {office.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{office.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Interactive Map Section */}
          <div className={`mt-16 sm:mt-20 lg:mt-24 transform transition-all duration-1000 ${
            officesSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visit Our Headquarters
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
                Located in the heart of Abuja, our corporate headquarters welcomes clients for consultations, 
                project planning sessions, and partnership discussions.
              </p>
            </div>
            
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 opacity-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3939.7642573241!2d7.4631911!3d9.0813301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bad6b8e0b5d%3A0x5d4c8e9f2a1b6c7e!2sOdernix%20Homes!5e0!3m2!1sen!2sng!4v1699876543210!5m2!1sen!2sng&z=17&q=Odernix+Homes,+29b+Ndjamena+Crescent,+Wuse,+Abuja+900001,+Federal+Capital+Territory"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
                title="Odernix Homes - 29b Ndjamena Crescent, Wuse, Abuja Location"

/>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Corporate Address</h4>
                    <p className="text-xs sm:text-sm text-gray-600">29b Ndjamena Crescent, Wuse, Abuja 900001</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Phone className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Direct Line</h4>
                    <a href="tel:+2349128999972" className="text-xs sm:text-sm text-teal-600 hover:text-teal-700 font-medium">
                      +234(0) 912 8999 972
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section 
        ref={ctaSection.elementRef}
        className="py-16 sm:py-20 lg:py-32 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/85 to-teal-900/90"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: '8s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${
            ctaSection.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Whether it's engineering excellence or your dream home with Odernix Homes, 
              we're here to make it happen. Let's discuss your vision and turn it into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="mailto:info@odernix.com"
                className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-sm sm:text-base"
              >
                Start a Conversation
              </a>
              <a
                href="https://www.odernixhomes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Explore Odernix Homes</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;