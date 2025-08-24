'use client'

import React from 'react'
import { Award, Users, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react'

const AuthoritySignals = () => {
  const achievements = [
    {
      icon: Award,
      title: "IIM Ahmedabad Alumni Leadership",
      description: "Founded by IIM Ahmedabad graduate with 15+ years in agribusiness"
    },
    {
      icon: Users,
      title: "500+ Satisfied Investors",
      description: "Successfully managing investments for over 500 high-net-worth individuals"
    },
    {
      icon: TrendingUp,
      title: "₹200+ Crores Assets Under Management",
      description: "Managing premium agricultural assets worth over ₹200 crores"
    },
    {
      icon: Shield,
      title: "100% Track Record",
      description: "Zero defaults in dividend payments since inception in 2020"
    }
  ]

  const certifications = [
    "Certified Organic Farming (NPOP)",
    "ISO 9001:2015 Quality Management",
    "FSSAI Food Safety Certification",
    "Export License for International Markets",
    "Water Conservation Award 2023",
    "Sustainable Agriculture Recognition"
  ]

  const testimonials = [
    {
      name: "Rajesh Sharma",
      designation: "Senior Executive, Tech Company",
      location: "Bangalore",
      investment: "₹50 Lakhs",
      returns: "16.5% Annual Return",
      quote: "Exora Farms has consistently delivered on their promises. The quarterly dividends are always on time, and the transparency in operations gives me complete confidence.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      designation: "Investment Banker",
      location: "Mumbai", 
      investment: "₹75 Lakhs",
      returns: "17.2% Annual Return",
      quote: "As someone from the finance industry, I appreciate their professional approach and detailed reporting. The returns have exceeded my expectations.",
      rating: 5
    },
    {
      name: "Dr. Suresh Kumar",
      designation: "Medical Professional",
      location: "Chennai",
      investment: "₹1.2 Crores",
      returns: "15.8% Annual Return",
      quote: "The tax-free nature of agricultural income combined with stable returns makes this an ideal investment for professionals like me.",
      rating: 5
    }
  ]

  const mediaFeatures = [
    {
      publication: "Economic Times",
      title: "Exotic Farming: The New Investment Frontier",
      date: "March 2024"
    },
    {
      publication: "Business Standard",
      title: "Agricultural Real Estate Gains Momentum",
      date: "February 2024"
    },
    {
      publication: "Mint",
      title: "Tax-Free Returns Through Farmland Investment",
      date: "January 2024"
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authority Signals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Industry Leaders & Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <IconComponent className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Certifications & Recognitions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Investors Say
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.designation}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-green-600 font-medium mt-2">
                    Investment: {testimonial.investment} | Returns: {testimonial.returns}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured In Leading Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
                <div className="font-semibold text-gray-900 mb-2">{feature.publication}</div>
                <div className="text-gray-700 mb-2">{feature.title}</div>
                <div className="text-sm text-gray-500">{feature.date}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AuthoritySignals
