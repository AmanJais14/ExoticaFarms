import React from 'react';
import Image from 'next/image';

const FloatingActionButton = ({ activeCard, setActiveCard }) => {
  return (
    <div className="fixed bottom-8  right-8 z-50">
      <div className="relative group">
        {/* Main FAB */}
        <button
          className="w-14 h-14 bg-transparent rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative overflow-hidden"
          onMouseEnter={() => setActiveCard('fab')}
          onMouseLeave={() => setActiveCard(null)}
          onClick={() => {
            const message = "Hi! I'm interested in learning more about your agricultural investment opportunities. Could you please provide more details?";
            const whatsappUrl = `https://wa.me/919379627377?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
          suppressHydrationWarning={true}
        >
          <Image
            src="/assets/whatsapp_icon.png"
            alt="WhatsApp"
            width={56}
            height={56}
            className="rounded-full group-hover:scale-110 transition-all duration-300 relative z-10 object-cover"
          />

          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              WhatsApp Us
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
            </div>
          </div>
        </button>
        
        {/* Floating particles around FAB */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse delay-500 opacity-60"></div>
          <div className="absolute -top-1 -right-3 w-1 h-1 bg-green-300 rounded-full animate-bounce delay-1000 opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
