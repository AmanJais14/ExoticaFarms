import React from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/NavbarNextjs';
import {
  Building2,
  TrendingUp,
  Shield,
  Users,
  Globe,
  Leaf,
  CheckCircle,
  Star,
  Award,
  Target
} from 'lucide-react';

const AboutUsPage = () => {
  const perfectNeighbourhoodFeatures = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Early Access & Exclusive Deals",
      description: "Pre-launch projects, premium inventory, and preferential pricing."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: "Trusted Partnerships",
      description: "10+ years with Bangalore's top developers."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Zero Brokerage",
      description: "Saving clients money with every deal."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Seamless Service",
      description: "From selection to handover, we manage it all."
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: "NRI Advantage",
      description: "Virtual tours, digital documentation, legal guidance, and property management support."
    }
  ];

  const exoraFarmsFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "12–18% Annual Dividend Potential",
      description: "With assured demand linkages."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Long-Term Land Appreciation",
      description: "Beyond traditional assets."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Diversification",
      description: "A stable hedge outside stocks and real estate."
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Trust & Scale",
      description: "Backed by Farmties, with 200+ acres active and 600+ acres in pipeline."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="gradient-text">Us</span>
            </h1>
            <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Where real estate expertise meets alternative investment opportunities – from dream homes to farmland assets like Exora Farms.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect Neighbourhood LLP Section */}
      <section className="pt-2 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <Building2 className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Perfect Neighbourhood LLP
              </h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Where real estate expertise meets alternative investment opportunities. We combine exclusive project access, trusted builder partnerships, and innovative investment models to deliver transparency, value, and long-term growth.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perfectNeighbourhoodFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Exora Farms - Our Product */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center mb-6">
                <Leaf className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Our Product: Exora Farms
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We exclusively market Exora Farms in collaboration with Farmties – a pioneering farmland investment opportunity that combines sustainable farming with wealth creation.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {exoraFarmsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Promise</span>
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-gray-800">
            <p className="leading-relaxed">
              At Perfect Neighbourhood LLP, we are not just helping clients buy property – we are enabling them to grow wealth, diversify smartly, and secure their future. Through our exclusive real estate deals and our flagship product Exora Farms, we deliver alternative investment opportunities with maximum value.
            </p>
          </div>
        </div>
      </section> */}

      {/* Farmties Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center mb-6">
              <Leaf className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Farmties (I) Pvt. Ltd.
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-8">
              <p>
                At Farmties, we empower sustainable agriculture by cultivating climate-specific exotic crops, building complete value chains, and creating strong market linkages.
              </p>
              <p>
                Our approach begins with developing genuine planting material, matching crops to the right soil, and designing best-practice packages. We invest in futuristic infrastructure—warehouses, cold chains, grading, and processing centers.
              </p>
              <p>
                Every exotic crop is backed by rigorous market research and proven through pilot POCs. Once viable, these models are scaled via community farms, ensuring control over quality, quantity, and price stability.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Sustainable Agriculture</h3>
                  <p className="text-xs text-gray-600">Climate-specific crops</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Infrastructure</h3>
                  <p className="text-xs text-gray-600">Cold chains & processing</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Market Research</h3>
                  <p className="text-xs text-gray-600">Pilot POCs & analysis</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">Community Farms</h3>
                  <p className="text-xs text-gray-600">Local collaborations</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Ready to Grow Your Wealth?
            </h2>
            <p className="mb-6 text-gray-700">
              Discover exclusive real estate deals and our flagship alternative investment product Exora Farms with Perfect Neighbourhood LLP.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919379627377"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-sm"
              >
                Contact Us Today
              </a>
              <Link
                href="/"
                className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
