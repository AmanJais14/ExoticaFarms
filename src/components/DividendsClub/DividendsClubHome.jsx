'use client'

import React, { useState } from 'react'
import { ArrowRight, Play, Users, TrendingUp, Shield, Award, Menu, X, Sparkles, Star, Zap, Target, Calendar, Mail, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const DividendsClubHome = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Form state management
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentInterest: "",
    slotDateTime: "",
    notes: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    const errors = {}
    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.investmentInterest) errors.investmentInterest = "Please select investment interest"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)
    setFormErrors({})

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        investmentInterest: "",
        slotDateTime: "",
        notes: "",
      })

      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-black"></div>
      {/* Simple Navigation */}
      <nav className="relative z-50 bg-black border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-black-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div> */}
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">
                    Exora Club
                  </h1>
                  <p className="text-xs text-gray-400 font-medium">Premium Investment Platform</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">
                Exora Farms
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors font-medium">
                Blog
              </Link>
              {/* <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-colors font-semibold">
                Get Started
              </button> */}
              {/* <Link href="/exoticafarms/blog" className="text-gray-300 hover:text-white transition-colors font-medium">
                Contact Us
              </Link> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-4 space-y-2 bg-black/95 border-t border-white/10 backdrop-blur-xl">
                <Link
                  href="/exoticafarms"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Exora Farms
                </Link>
                <Link
                  href="/exoticafarms/blog"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                {/* <button className="w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold mt-2">
                  Get Started
                </button> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-2 sm:pb-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* Premium Badge */}
            {/* <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 rounded-full px-8 py-4 mb-12">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-black" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">PREMIUM INVESTMENT PLATFORM</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div> */}

            {/* Main Headline */}
            <div className="space-y-4 mb-4">
              <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-black leading-tight">
                <span className=" text-white mb-2">Introduction to </span>
                <span className=" bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                   Exora Club
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-2">
              <p className="text-lg sm:text-md text-white max-w-5xl mx-auto leading-relaxed font-light">
                {/* A <span className="text-blue-400 font-semibold">dividends-first platform</span> that transforms agriculture into a
                <span className="text-purple-400 font-semibold"> multi-sector investment ecosystem</span>
                delivering safe, steady returns. */}
                {/* Invest in Real Assets, Earn Steady Dividends, */}
               Exora Club isn’t just another investment platform—it’s your gateway to hand-picked opportunities that most investors will never see.
We specialize in discovering and designing investible businesses across high-growth, non-traditional sectors—each backed by tangible assets—so your money doesn’t just grow, it works harder.

                {/* Dividends Club is a dividends-first platform. We start with agriculture and aim to grow into a multi-sector investment ecosystem that gives safe, steady returns and helps diversify your portfolio. */}
              </p>
              <p className="text-lg sm:text-lg text-white max-w-5xl mx-auto leading-relaxed font-light">Our mission? To unlock double-digit annual dividends for our members and become India’s #1 destination for smart, alternative investments.</p>

              {/* <p className="text-xl text-white max-w-6xl mx-auto leading-relaxed">
                Our flagship product, <span className="text-green-400 font-semibold">Exotic Farming</span>, bridges the gap where traditional investments fall short.
                While real estate, mutual funds, and gold struggle with regular income, we offer both
                <span className="text-purple-400 font-semibold"> land appreciation</span> and
                <span className="text-blue-400 font-semibold"> double-digit dividends</span> from Year 3–4 onwards.
              </p> */}
            </div>

            {/* CTA Buttons */}
            <div className=" text-xs flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* <Link
                href="/exoticafarms"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center space-x-3"
              >
                <span>Click to know more</span>
                <ArrowRight className="w-5 h-5" />
              </Link> */}
              {/* <button className="border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 font-medium flex items-center space-x-3">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Section - Fixed Visibility */}
      <section className="relative z-10 pt-0 sm:pt-1 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Zap className="w-6 h-6 text-green-400" />
              <span className="text-xs font-bold text-white tracking-wide">Agri Sector</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
              <span className="text-white">Flagship Product : </span>
              <span className="text-green-400">Exora Farms</span>
            </h2>

            {/* <p className="text-2xl text-white max-w-4xl mx-auto mb-8 font-light">
              Where agriculture meets innovation. Premium exotic farming with guaranteed returns.
            </p> */}
            <p className="text-lg sm:text-lg font-light  text-white max-w-6xl mx-auto leading-relaxed mb-12">
              {/* Our flagship product, <span className="text-green-400 font-bold">Exotic Farming</span>, bridges the gap where traditional investments fall short.
              While real estate, mutual funds, and gold struggle with regular income, we offer both
              <span className="text-purple-400 font-bold"> land appreciation</span> and
              <span className="text-blue-400 font-bold"> double-digit dividends</span> from Year 3–4 onwards. */}
              Our vision is to make land-backed exotic farming the #1 dividend opportunity in India.
            </p>

            {/* <Link
              href="/exoticafarms"
              className="group inline-flex text-xs items-center gap-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-8 py-5 rounded-full font-bold  hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-green-500/30 border border-white/20"
            >
              <span>Explore Exotica Farms</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link> */}
          </div>

          {/* Desktop Two-Column Layout: Video + Research */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-0">
            {/* Left Side - Video Section */}
            <div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 relative overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500">
                <div className="relative">
                  {/* Video with Autoplay - Preserves Original Aspect Ratio */}
                  <video
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-screen rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    // controls
                    poster="/assets/dividendsclub/land-video-poster.jpg"
                  >
                    <source src="/assets/dividendsclub/land-vdo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay */}
                  <div className="absolute top-3 sm:top-6 left-3 sm:left-6 z-20">
                    <div className="bg-black/70 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 border border-white/20">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">LOCATION VIEW</span>
                    </div>
                  </div>

                  {/* Quality Badge */}
                  {/* <div className="absolute top-6 right-6 z-20">
                    <div className="bg-black/70 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                      <span className="text-white text-xs font-bold">4K</span>
                    </div>
                  </div> */}

                  {/* Video Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                  {/* Bottom Video Info */}
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 z-20">
                    <div className="bg-black/70 backdrop-blur-md rounded-xl px-3 sm:px-6 py-2 sm:py-4 border border-white/20">
                      {/* <h4 className="text-white font-semibold text-lg mb-1">Bangalore-Anantapur Belt</h4> */}
                      <p className="text-gray-300 text-xs sm:text-sm">Approx. 95km from Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Why Now Cards */}
            <div className="space-y-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-10">
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">MARKET OPPORTUNITY</span>
                </div>
                {/* <h3 className="text-3xl font-bold text-white">Why Now?</h3>
                <p className="text-gray-300 text-lg">The perfect storm of market conditions</p> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-green-400 transition-colors">Rising Demand</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Demand for exotic fruits like dates and avocados is rising fast in India</p>
                </div>

                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                    <Shield className="w-8 h-8 text-white" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-blue-400 transition-colors">Tax Benefits</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Agri income is tax-free — one of the safest ways to earn</p>
                </div>

                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/25">
                    <TrendingUp className="w-8 h-8 text-white transform rotate-180" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-red-400 transition-colors">Market Volatility</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Stocks and real estate are volatile or give 0 - 4% dividends</p>
                </div>

                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                    <Award className="w-8 h-8 text-white" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">First Mover</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Exotic farming is still new, giving early movers a clear edge</p>
                </div>
                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                    <Award className="w-8 h-8 text-white" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">Proven Model</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">7+ years of proven product market fit in BLR - Anantpur belt</p>
                </div>
                <div className="group text-center p-4 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                    <Award className="w-8 h-8 text-white" />
                  </div> */}
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">Entry Barriers</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">High cost of plantation & needs scale to operate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Now Section */}
          {/* <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-white border border-white/10 shadow-2xl shadow-blue-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-6">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-white tracking-wide">MARKET OPPORTUNITY</span>
              </div>
              <h3 className="text-4xl font-bold mb-4 text-white">Why Now?</h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">The perfect storm of market conditions for agricultural investment</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Rising Demand</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Demand for exotic fruits like dates and avocados is rising fast in India</p>
              </div>

              <div className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Tax Benefits</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Agri income is tax-free — one of the safest ways to earn</p>
              </div>

              <div className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/25">
                  <TrendingUp className="w-8 h-8 text-white transform rotate-180" />
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">Market Volatility</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Stocks and real estate are volatile or give low returns (3–4%)</p>
              </div>

              <div className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/25">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">First Mover</h4>
                <p className="text-gray-300 text-sm leading-relaxed">Exotic farming is still new, giving early movers a clear edge</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* CTA Button - Centered below Flagship Section */}
        <div className="text-center py-12">
          <Link
            href="/exorafarms"
            className="group inline-flex text-xs items-center gap-4 bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 text-white px-8 py-5 rounded-full font-bold hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-green-500/30 border border-white/20"
          >
            <span>Explore Exora Farms</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>


      {/* Our Team Section - Fixed Visibility */}
      {/* <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 leading-tight">
              Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">20+ Years Experience</h3>
              <p className="text-gray-300 leading-relaxed text-xs">
                We bring two decades of proven expertise in real estate and agriculture sectors.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
             
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">IIM Leadership</h3>
              <p className="text-gray-300 leading-relaxed text-xs">
                Agri operations are led by an IIM-Mumbai alumnus with proven expertise.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Corporate Mentorship</h3>
              <p className="text-gray-300 leading-relaxed text-xs">
                Mentored by leaders from Flipkart, Samsung, and EXL for best practices and scalability.
              </p>
            </div>
          </div>

        </div>
      </section> */}

      {/* Contact Form Section */}
      {/* <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-8 shadow-lg">
              <MessageCircle className="w-6 h-6 text-green-400" />
              <span className="text-sm font-bold text-white tracking-wide">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our experts and discover how exotic farming can diversify your portfolio
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                <p className="text-green-400 text-center font-semibold">
                  Thank you! We'll contact you soon to schedule your consultation.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
                <p className="text-red-400 text-center font-semibold">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-4 rounded-2xl border ${
                      formErrors.fullName
                        ? "border-red-400"
                        : "border-white/20"
                    } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20`}
                    required
                  />
                  {formErrors.fullName && (
                    <p className="text-red-300 text-sm mt-2">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address (Optional)"
                    className={`w-full px-4 py-4 rounded-2xl border ${
                      formErrors.email
                        ? "border-red-400"
                        : "border-white/20"
                    } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20`}
                  />
                  {formErrors.email && (
                    <p className="text-red-300 text-sm mt-2">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-4 rounded-2xl border ${
                      formErrors.phone
                        ? "border-red-400"
                        : "border-white/20"
                    } bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20`}
                    required
                  />
                  {formErrors.phone && (
                    <p className="text-red-300 text-sm mt-2">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div className="relative group">
                  <select
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-4 rounded-2xl border ${
                      formErrors.investmentInterest
                        ? "border-red-400"
                        : "border-white/20"
                    } bg-white/10 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20`}
                    required
                  >
                    <option value="" className="text-gray-800">
                      Investment Interest
                    </option>
                    <option value="1-acre" className="text-gray-800">
                      1 Acre
                    </option>
                    <option value="2-3-acre" className="text-gray-800">
                      2-3 Acres
                    </option>
                    <option value="3-5-acre" className="text-gray-800">
                      3-5 Acres
                    </option>
                    <option value="5+-acre" className="text-gray-800">
                      5+ Acres
                    </option>
                    <option value="consultation" className="text-gray-800">
                      Just Consultation
                    </option>
                  </select>
                  {formErrors.investmentInterest && (
                    <p className="text-red-300 text-sm mt-2">
                      {formErrors.investmentInterest}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative group">
                <label className="block text-white/70 text-sm mb-3 font-medium">
                  Book a Consultation Slot (Optional)
                </label>
                <input
                  type="datetime-local"
                  name="slotDateTime"
                  value={formData.slotDateTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 rounded-2xl border ${
                    formErrors.slotDateTime
                      ? "border-red-400"
                      : "border-white/20"
                  } bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white`}
                  style={{
                    colorScheme: "light",
                  }}
                />
                {formErrors.slotDateTime && (
                  <p className="text-red-300 text-sm mt-2">
                    {formErrors.slotDateTime}
                  </p>
                )}
              </div>

              <div className="relative group">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional notes or questions (Optional)"
                  rows="4"
                  className="w-full px-4 py-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-300 backdrop-blur-sm group-hover:bg-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700"
                } text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 flex items-center justify-center gap-3 group`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Schedule Consultation
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Farm Portfolio Section - Consistent Styling */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-8 shadow-lg">
              <Target className="w-6 h-6 text-green-400" />
              <span className="text-sm font-bold text-white tracking-wide">FARM PORTFOLIO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium Crop Selection
              </span>
            </h2>
            <p className="text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
              Strong, Resilient, High-Demand Crops for Maximum Returns
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-6 text-left font-bold text-lg">Attribute</th>
                    <th className="px-6 py-6 text-left font-bold text-lg">Barhi Dates (Low Risk)</th>
                    <th className="px-6 py-6 text-left font-bold text-lg">Avocados (High Demand)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Yield Stability</td>
                    <td className="px-6 py-5 text-gray-300">High – consistent annual harvests</td>
                    <td className="px-6 py-5 text-gray-300">Medium – stabilises after maturity</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Market Demand</td>
                    <td className="px-6 py-5 text-gray-300">Strong & growing; peaks during Ramadan</td>
                    <td className="px-6 py-5 text-gray-300">Very high; imports rising, urban health trend</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Price Volatility</td>
                    <td className="px-6 py-5 text-gray-300">Low–Moderate; steady with festive spikes</td>
                    <td className="px-6 py-5 text-gray-300">Moderate; premium but seasonal swings</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Pest/Disease Risk</td>
                    <td className="px-6 py-5 text-gray-300">Low – hardy, minimal susceptibility</td>
                    <td className="px-6 py-5 text-gray-300">Medium – manageable with best practices</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Lifespan</td>
                    <td className="px-6 py-5 text-gray-300">30+ years</td>
                    <td className="px-6 py-5 text-gray-300">30+ years</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Post-Harvest Use</td>
                    <td className="px-6 py-5 text-gray-300">Fresh (Khalal), semi-ripe (Rutab), dried (Tamar), syrup, processed foods</td>
                    <td className="px-6 py-5 text-gray-300">Fresh fruit, juices, processed foods, cosmetics, health products</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-5 font-semibold text-white">Why It Stands Out</td>
                    <td className="px-6 py-5 text-gray-300">Long lifespan, multiple revenue windows, low operational risk</td>
                    <td className="px-6 py-5 text-gray-300">India's fastest-growing exotic fruit, premium "green gold" demand</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* Compact Disclaimers & Next Steps - Fixed Visibility */}
      {/* <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <h3 className="text-xl font-bold text-white"> Disclaimer</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-sm">
                  Agricultural investments are subject to inherent risks - weather, market fluctuations, and
                  regulatory changes can affect yields and revenues. While our projections are precautionary and
                  based on real pilot data, future payouts may vary. We strongly advise consulting financial and
                  agricultural experts before investing.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to plant the seeds of steady income?</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Register your interest or Contact Us to learn more about joining our next farmland.
                  <span className="text-green-400 font-semibold"> Grow your wealth</span> with real agricultural dividends today!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/exorafarms"
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Exotica Farms</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer - Fixed Visibility */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black">
        {/* Test visibility */}
        {/* <div className="bg-red-500 p-4 mb-8 text-center">
          <h1 className="text-4xl font-black text-yellow-400">TEST: FOOTER SECTION</h1>
        </div> */}

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div> */}
              <div className='sm:text-center md:text-left'>
                <h3 className=" text-xl font-bold text-white">Exora Club</h3>
                <p className="text-gray-400 text-xs">Premium Investment Platform</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Exora Farms
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Blog
              </Link>
              {/* <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Contact
              </Link> */}
              {/* <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Privacy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Terms
              </Link> */}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Exora Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DividendsClubHome

