'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Home, MessageCircle, Calendar, ArrowRight, Phone, Mail } from 'lucide-react';

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hi! I just submitted a form on your website. I'm interested in learning more about your agricultural investment opportunities.";
    const whatsappUrl = `https://wa.me/919379627377?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          {/* Animated rings */}
          <div className="relative">
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-green-200 rounded-full animate-ping"></div>
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-green-100 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Thank You! 🌱
          </h1>
          <h2 className="text-xl md:text-2xl text-green-600 font-semibold mb-6">
            Your Request Has Been Received
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We appreciate your interest in <span className="font-semibold text-green-700">Exora Farms</span>. 
            Our team will review your information and contact you within <span className="font-semibold">24 hours</span> 
            to discuss your agricultural investment opportunities.
          </p>
        </div>

        {/* What's Next Section */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-6">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">We'll Call You</h4>
              <p className="text-sm text-gray-600">Our expert will contact you within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Schedule Visit</h4>
              <p className="text-sm text-gray-600">Book a convenient time to visit our farms</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Start Investing</h4>
              <p className="text-sm text-gray-600">Begin your agricultural investment journey</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Us Now
          </button>
        </div>

        {/* Contact Information */}
        <div className={`mt-12 p-6 bg-gray-50 rounded-xl transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <a 
              href="tel:+919379627377"
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 93796 27377
            </a>
            <a 
              href="mailto:info@exorafarms.co.in"
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@exorafarms.co.in
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              Secure & Confidential
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              24h Response Time
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              No Spam Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
