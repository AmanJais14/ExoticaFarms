import React from 'react';
import { TrendingUp, ShoppingCart, Truck, Globe } from 'lucide-react';
// Use public paths for Next.js compatibility
const zepto = '/assets/saleschannel/zepto.png';
const blinkit = '/assets/saleschannel/blinkit.png';
const more = '/assets/saleschannel/more.png';



const SalesChannel = () => {
  // Sales channel partners/companies
  const salesChannels = [
    {
      id: 1,
      name: "Blinkit",
      category: "Quick Commerce",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmDGgwscraLV6qOR2wopoIKTaPS3rHokvkg&s",
    },
    {
      id: 2,
      name: "Zepto",
      category: "Quick Commerce", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaQF-vl5-Jm84yoNV0uxJCK18iJ8bJU4yEw&s",
    },
    {
      id: 3,
      name: "More",
      category: "Online Retail",
      logo: more,
    },
    {
      id: 4,
      name: "Swiggy Instamart",
      category: "E-commerce",
      logo: "https://static.businessworld.in/Swiggy%20Instamart%20Orange-20%20(1)_20240913021826_ogImage_9.jpg", // Replace with actual logo
      description: "Premium fresh produce delivery",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 7,
      name: "Amazon fresh",
      category: "International",
      logo: "https://images.seeklogo.com/logo-png/38/1/amazon-fresh-logo-png_seeklogo-386992.png", // Replace with actual logo
      description: "Premium export to Middle East & Europe",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      name: "Country Delight",
      category: "Dairy & Fresh",
      logo: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/3d746872-7c2a-4179-92cb-68c2c7405e58/image.png?t=1709152104",
      description: "Premium fresh produce delivery platform",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 10,
      name: "24 Mantra",
      category: "Organic Foods",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN05JUYOg54Ike3yh6wZZ8fC3rbuNajtlcw&s",
      description: "Leading organic food brand in India",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 11,
      name: "Pure O Natural",
      category: "Health Foods",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJ-cCqcdK9UO-9VsMjgzFh-FbE7_57zctKw&s",
      description: "Natural and healthy food products",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 12,
      name: "Farmizen",
      category: "Farm-to-Table",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjlvMkcxsV5_FtN0jCPAtptOT4WWamDb69g&s",
      description: "Direct farm-to-consumer platform",
      color: "from-purple-500 to-pink-500"
    }
    // {
    //   id: 5,
    //   name: "Reliance Fresh",
    //   category: "Retail Chain",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   description: "Leading retail chain across India",
    //   color: "from-indigo-500 to-purple-500"
    // },
    // {
    //   id: 6,
    //   name: "Export Markets",
    //   category: "International",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   description: "Premium export to Middle East & Europe",
    //   color: "from-yellow-500 to-orange-500"
    // }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black  text-green-900 mb-2">
            Our Sales <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-3xl mx-auto leading-relaxed">
            Premium exotic fruits delivered through India's leading platforms.
          </p>
        </div>

        {/* Sales Channels Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:grid lg:grid-cols-5 lg:gap-8 lg:justify-items-center">
              {salesChannels.map((channel, index) => (
                <div
                  key={channel.id}
                  className="group transition-all duration-300 hover:scale-110 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={channel.logo}
                    alt={`${channel.name} logo`}
                    className="h-10 w-20 sm:h-12 sm:w-24 md:h-14 md:w-28 object-contain group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">6+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Sales Channels</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '700ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">10+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Cities Covered</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">2x</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Premium Pricing</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '900ms' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">3+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Export Markets</div>
            </div>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base">Guaranteed Market Access</p>
                <p className="text-green-100 text-xs">Pre-sold through established channels</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SalesChannel;
