'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Calendar, ArrowRight } from 'lucide-react';
import {
  submitContactForm,
  validateFormData,
  formatFormData,
} from '../../services/formService';

const PopupForm = ({ isOpen, onClose, delay = 5000 }) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentInterest: "",
    slotDateTime: "",
    notes: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Check if popup was already shown in this session
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('popupShown');
    if (popupShown) {
      setHasShownPopup(true);
      return;
    }

    // Show popup after delay if not already shown
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, hasShownPopup]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formattedData = formatFormData(formData);
    const validation = validateFormData(formattedData);

    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const docId = await submitContactForm(formattedData);

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        investmentInterest: "",
        slotDateTime: "",
        notes: "",
      });

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    if (onClose) onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showPopup && !isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl">
          <h2 className="text-xl font-bold mb-2">
            🌱 Ready to Own Profitable Farmland?
          </h2>
          <p className="text-green-100 text-sm">
            Get exclusive access to premium agricultural investments
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm text-center">
              ✅ Thank you! Your request has been submitted successfully. We'll contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm text-center">
              ❌ Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  formErrors.fullName ? "border-red-400" : "border-gray-200"
                } bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-sm`}
                required
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address (Optional)"
                className={`w-full px-4 py-3 rounded-xl border ${
                  formErrors.email ? "border-red-400" : "border-gray-200"
                } bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-sm`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-xl border ${
                  formErrors.phone ? "border-red-400" : "border-gray-200"
                } bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-sm`}
                required
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>

            {/* Investment Interest */}
            <div>
              <select
                name="investmentInterest"
                value={formData.investmentInterest}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  formErrors.investmentInterest ? "border-red-400" : "border-gray-200"
                } bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-sm`}
                required
              >
                <option value="">Investment Interest</option>
                <option value="1-acre">1 Acre</option>
                <option value="2-3 acre">2-3 Acre</option>
                <option value="3-5 acre">3-5 Acre</option>
                <option value="5+ acre">5+ Acre</option>
              </select>
              {formErrors.investmentInterest && (
                <p className="text-red-500 text-xs mt-1">{formErrors.investmentInterest}</p>
              )}
            </div>

            {/* Date Time Slot */}
            <div>
              <label className="block text-gray-700 text-sm mb-2 font-medium">
                Book a Slot (Optional)
              </label>
              {isClient ? (
                <input
                  type="datetime-local"
                  name="slotDateTime"
                  value={formData.slotDateTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formErrors.slotDateTime ? "border-red-400" : "border-gray-200"
                  } bg-gray-50 text-gray-900 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 text-sm`}
                />
              ) : (
                <div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 text-sm">
                  Select date and time
                </div>
              )}
              {formErrors.slotDateTime && (
                <p className="text-red-500 text-xs mt-1">{formErrors.slotDateTime}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              } text-white py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center gap-4 text-gray-500 text-xs">
              <span>🔒 100% Secure</span>
              <span>•</span>
              <span>📞 24h Response</span>
              <span>•</span>
              <span>🚫 No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
