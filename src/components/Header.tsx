// Import necessary dependencies from React and other libraries
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for mobile menu
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track if user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for About dropdown menu
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  // Get current route location
  const location = useLocation();
  
  // Check if we're on home page
  const isHomePage = location.pathname === '/';

  // Add scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state based on scroll position
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to determine header background style
  const getHeaderStyle = () => {
    if (!isHomePage) return 'bg-white shadow-sm';
    return isScrolled ? 'bg-white shadow-sm' : 'bg-transparent';
  };

  return (
    // Main header container with dynamic background
    <header className={`fixed w-full z-50 transition-all duration-300 ${getHeaderStyle()}`}>
      <nav className="max-w-7xl mx-auto px-8 py-4">
        {/* Header content wrapper */}
        <div className="flex justify-between items-center">
          {/* Logo container with home link */}
          <Link to="/" className="w-40">
            <img 
              src="/images/logo/1.png" 
              alt="CDF Logo" 
              className="w-12 h-12 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home link */}
            <Link to="/" className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300">
              Home
            </Link>
            
            {/* Archive link */}
            <Link to="/archive" className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300">
              Archive
            </Link>
            
            {/* Resources link */}
            <Link to="/resources" className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300">
              Resources
            </Link>
            
            {/* Contact link */}
            <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300">
              Contact
            </Link>
            
            {/* About dropdown container */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              {/* About dropdown trigger button */}
              <button className="text-gray-800 font-medium hover:text-gray-600 transition-colors duration-300">
                About
              </button>
              
              {/* Dropdown menu */}
              <div 
                className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${
                  isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {/* About CDF link */}
                <Link 
                  to="/about-cdf" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  About CDF
                </Link>
                
                {/* About Us link */}
                <Link 
                  to="/about-us" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu toggle button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Toggle between menu and close icons */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {/* Mobile menu links */}
            <Link to="/" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">Home</Link>
            <Link to="/archive" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">Archive</Link>
            <Link to="/resources" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">Resources</Link>
            <Link to="/contact" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">Contact</Link>
            <Link to="/about-cdf" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">About CDF</Link>
            <Link to="/about-us" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 rounded-lg">About Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
}