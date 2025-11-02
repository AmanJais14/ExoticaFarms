import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '../../src/components/Contact/ContactForm'
import Navbar from '../../src/components/Navbar/NavbarNextjs'

export const metadata = {
  title: 'Contact Us - Exora Farms',
  description: 'Get in touch with Exora Farms. Have questions about our agricultural investment opportunities? Contact our team today.',
  keywords: ['contact', 'exora farms', 'agricultural investment', 'support'],
  openGraph: {
    title: 'Contact Us - Exora Farms',
    description: 'Get in touch with Exora Farms. Have questions about our agricultural investment opportunities? Contact our team today.',
    type: 'website',
    url: 'https://exorafarms.com/contact',
  },
}

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-green-100">Have questions about Exora Farms? We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@exorafarms.com" className="text-green-600 hover:text-green-700">
                      info@exorafarms.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+919606445048" className="text-green-600 hover:text-green-700">
                      +91 96064 45048
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <MessageCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919606445048?text=Hi%20Exora%20Farms%2C%20I%20have%20a%20question%20about%20your%20agricultural%20investment%20opportunities."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700 mb-3">
                      Perfect Neighbourhood LLP<br />
                      Bengaluru, Karnataka<br />
                      India
                    </p>
                    {/* PNH Logo */}
                    <Image
                      src="/assets/logos/pnh.png"
                      alt="Perfect Neighbourhood LLP Logo"
                      width={120}
                      height={60}
                      className="h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
                      Home
                    </Link>
                  </li>
                    <li>
                      <Link href="/blog" className="text-green-600 hover:text-green-700 font-medium">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium">
                        Terms & Conditions
                      </Link>
                    </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-neutral-700 pt-6">
            <p className="text-neutral-500 text-sm">
              © 2025 Perfect Neighbourhood LLP | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

