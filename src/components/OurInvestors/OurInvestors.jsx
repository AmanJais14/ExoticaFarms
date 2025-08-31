import React from 'react';

const OurInvestors = () => {
  // Investor companies/organizations
  const investors = [
    {
      id: 1,
      name: "Flipkart",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      type: "E-commerce Partner"
    },
    {
      id: 2,
      name: "Samsung",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png",
      type: "Technology Partner"
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
      type: "Technology Partner"
    },
    {
      id: 4,
      name: "Leadschool",
      logo: "https://www.medianews4u.com/wp-content/uploads/2021/07/LEAD-School-rebrands-as-LEAD-to-focus-on-transforming-conventional-schooling.jpg",
      type: "Education Partner"
    },
    {
      id: 5,
      name: "Godrej Properties",
      logo: "https://images.moneycontrol.com/static-mcnews/2020/02/Godrej-Properties.jpg?impolicy=website&width=1600&height=900",
      type: "Real Estate Partner"
    },
    {
      id: 6,
      name: "P&G",
      logo: "https://images.seeklogo.com/logo-png/10/1/pg-logo-png_seeklogo-105020.png",
      type: "Consumer Goods"
    },
    {
      id: 7,
      name: "HUL",
      logo: "https://give.do/static/img/logos/1BGY/af1a396f-1b55-40b6-854d-ac26e36f6987.png",
      type: "Consumer Products"
    },
    {
      id: 8,
      name: "Walmart",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpG93o8je0tkT6VWgsEdx2tkW2BrWyIizUJA&s",
      type: "Retail Giant"
    },
    {
      id: 9,
      name: "Cadbury",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoF1AtstiZXYEj3oCosO9WuP7DvPuTkUdAnA&s",
      type: "Food & Beverage"
    },
    {
      id: 10,
      name: "Pepsi",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Pepsi-Logo.png",
      type: "Beverage Company"
    },
    // {
    //   id: 11,
    //   name: "Godrej",
    //   logo: "https://logos-world.net/wp-content/uploads/2021/02/Godrej-Logo.png",
    //   type: "Conglomerate"
    // },
    {
      id: 12,
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
      type: "IT Services"
    },
    {
      id: 13,
      name: "EXL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VLC2GTW-nMCqVfnC8pRXRc_WAq-5DnrLjg&s", // Replace with actual logo
      type: "Financial Partner"
    }
    // {
    //   id: 7,
    //   name: "NABARD",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   type: "Agricultural Development"
    // },
    // {
    //   id: 8,
    //   name: "Angel Investors",
    //   logo: "/api/placeholder/120/60", // Replace with actual logo
    //   type: "Private Equity"
    // }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-black text-green-900 mb-2">
            Our<span className="gradient-text"> Investors</span>
          </h2>
          <p className="text-xs sm:text-sm text-black max-w-2xl mx-auto">
            Investors at Farmties are from these leading companies.
          </p>
        </div>

        {/* Investors Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-2 md:gap-8 lg:gap-8 justify-items-center">
              {investors.map((investor, index) => (
                <div
                  key={investor.id}
                  className="group transition-all duration-300 hover:scale-110 animate-fade-in rounded-lg border-black-100 border-2 min-w-20 max-w-28 p-1 flex items-center justify-center min-h-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                  
                >
                  {/* <img
                    src={investor.logo}
                    alt={`${investor.name} logo`}
                    className="h-10 w-20 sm:h-12 sm:w-24 md:h-14 md:w-28 object-contain group-hover:opacity-100 transition-opacity duration-300"
                    title={investor.name}
                  /> */}
                  <p className="text-xs  text-gray-600  text-center">{investor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">₹50Cr+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Total Investment</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '900ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">8+</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Financial Partners</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '1000ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">AAA</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Credit Rating</div>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '1100ms' }}>
              <div className="text-2xl sm:text-3xl font-black text-green-900 mb-1">100%</div>
              <div className="text-green-600 text-sm sm:text-base font-medium">Loan Approval</div>
            </div>
          </div>
        </div> */}

        {/* Trust Statement */}
        {/* <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100">
            <p className="text-green-800 text-base sm:text-lg font-medium leading-relaxed">
              "Backed by India's most trusted financial institutions, ensuring secure and profitable agricultural investments with guaranteed returns."
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 text-sm font-semibold">Verified & Trusted</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurInvestors;
