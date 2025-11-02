import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../../src/components/Navbar/NavbarNextjs'

export const metadata = {
  title: 'Terms & Conditions - Exora Farms',
  description: 'Read the Terms and Conditions for Exora Farms. Understand our policies, investment disclaimers, and legal information.',
  keywords: ['terms', 'conditions', 'legal', 'exora farms', 'investment disclaimer'],
  openGraph: {
    title: 'Terms & Conditions - Exora Farms',
    description: 'Read the Terms and Conditions for Exora Farms. Understand our policies, investment disclaimers, and legal information.',
    type: 'website',
    url: 'https://exorafarms.com/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-green-100">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-700">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-[0.9rem] leading-relaxed">Welcome to ExoraFarms.com (the "Website"), owned and managed by Perfect Neighbourhood LLP, in collaboration with Farmties India. By accessing or using this website, you agree to be bound by the following Terms and Conditions. If you do not agree, please refrain from using the site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Project Information</h2>
              <p className="text-[0.9rem] leading-relaxed">Exora Farms is a managed farmland investment project offering investors an opportunity to co-own or purchase farmland parcels that are professionally maintained by our farm management partners.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-[0.9rem]">
                <li>All details shared on the website—including pricing, expected returns, crop details, and timelines—are for informational purposes only and are subject to change without prior notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Investment Disclaimer</h2>
              <p className="text-[0.9rem] leading-relaxed">Farmland ownership is governed by applicable state land and agricultural laws.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-[0.9rem]">
                <li>All investments are subject to risk, and past performance does not guarantee future returns.</li>
                <li>The mentioned dividends or appreciation percentages are illustrative projections, not assured returns.</li>
                <li>Investors are advised to conduct their own due diligence or consult a professional advisor before making any investment decision.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking & Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-[0.9rem]">
                <li>Expression of Interest (EOI) payments are fully refundable within the EOI window as per our project terms.</li>
                <li>Final allotment of farmland is confirmed only upon completion of all legal, financial, and KYC processes.</li>
                <li>All payments should be made only to authorized company bank accounts shared officially by Perfect Neighbourhood LLP or Farmties India.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Use of Website</h2>
              <ul className="list-disc pl-6 space-y-2 text-[0.9rem]">
                <li>Users agree to use this website only for lawful purposes.</li>
                <li>Copying, distributing, or modifying content without written consent is strictly prohibited.</li>
                <li>Any attempt to misuse, hack, or damage the website's functionality will lead to legal action.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-[0.9rem] leading-relaxed">All content on this website—including text, images, graphics, logos, and videos—is the intellectual property of Exora Farms / Perfect Neighbourhood LLP. You may not reproduce, republish, or exploit any material without prior written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-[0.9rem] leading-relaxed">Exora Farms and its partners shall not be liable for any direct or indirect losses, damages, or delays arising out of the use or inability to use the website, project data, or any linked third-party platforms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-[0.9rem] leading-relaxed">Our website may contain links to other websites or social media platforms. We are not responsible for the content, accuracy, or privacy practices of such third-party websites.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy Policy</h2>
              <p className="text-[0.9rem] leading-relaxed">Use of this website is also governed by our Privacy Policy, which explains how we collect and handle user data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-[0.9rem] leading-relaxed">Exora Farms reserves the right to modify these Terms and Conditions at any time. Updates will be posted on this page, and continued use of the website implies acceptance of the updated terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-[0.9rem] leading-relaxed">For any queries or clarifications, please contact us at:</p>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 text-[0.9rem]">
                <p className="font-semibold text-gray-900">📧 Email:</p>
                <p className="text-green-600"><a href="mailto:info@exorafarms.com">info@exorafarms.com</a></p>
                <p className="font-semibold text-gray-900 mt-3">📞 Phone:</p>
                <p className="text-green-600"><a href="tel:+919606445048">+91 96064 45048</a></p>
                <p className="font-semibold text-gray-900 mt-3">🏢 Address:</p>
                <p className="text-gray-700">Perfect Neighbourhood LLP, Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-6 text-[0.9rem]">Get in touch with our team for more information about Exora Farms.</p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-neutral-700 pt-6">
            <p className="text-neutral-500 text-sm">
              © 2025 Perfect Neighbourhood LLP | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

