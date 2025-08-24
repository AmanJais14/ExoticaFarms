'use client'

import React, { useState, useEffect } from 'react';
import { Calendar,Target, Users, Menu, X, Leaf, BookOpen } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    // Only run on client side
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleScheduleVisit = () => {
    // Scroll to contact form section
    scrollToSection('contact-form');
  };

  const handleInviteFriend = () => {
    // Scroll to invite friend section
    scrollToSection('invite-friend');
  };

  const handleBlogClick = () => {
    router.push('/blog');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
    setIsOpen(false);
  };

  const handleVisionClick = () => {
    router.push('/vision');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100' 
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-green-900">
                Exora<span className="text-emerald-600">Farms</span>
              </h1>
              <p className="text-xs text-green-600 hidden sm:block">Premium Agricultural Investment</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <button
              onClick={handleVisionClick}
              className={`flex items-center gap-2 text-green-700 hover:bg-green-50 hover:text-green-800 px-0 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                pathname === '/vision'
                  ? 'bg-green-100 text-green-700 border-2 border-green-300'
                  : ''
              }`}
              suppressHydrationWarning={true}
            >
              <Target className="w-4 h-4" />
              Exora Club
            </button>

            <button
              onClick={handleBlogClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                pathname.startsWith('/blog')
                  ? 'bg-green-100 text-green-700 border-2 border-green-300'
                  : 'text-green-700 hover:bg-green-50 hover:text-green-800'
              }`}
              suppressHydrationWarning={true}
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </button>

            {/* <button
              onClick={handleInviteFriend}
              className="flex items-center gap-2 text-green-700 hover:bg-green-50 hover:text-green-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              Invite Friend
            </button> */}

            <button
              onClick={handleScheduleVisit}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              suppressHydrationWarning={true}
            >
              <Calendar className="w-4 h-4" />
              Schedule a visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 transition-colors duration-300"
            suppressHydrationWarning={true}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-green-100 p-4 mt-2">
            <div className="space-y-3">
              <button
                onClick={handleVisionClick}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  pathname === '/vision'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300'
                }`}
              >
                Exora Club
              </button>

              <button
                onClick={handleBlogClick}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  pathname.startsWith('/blog')
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </button>

              <button
                onClick={handleScheduleVisit}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Schedule a visit
              </button>

              {/* <button
                onClick={handleInviteFriend}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-300 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Invite Friend
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
