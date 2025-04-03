// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    // Main footer container
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and company info section */}
          <div>
            {/* Company logo */}
            <img 
              src="/images/logo/1.png" 
              alt="CDF Logo" 
              className="w-16 h-16 object-cover rounded-lg shadow-md mb-4"
            />
            {/* Company description */}
            <p className="text-gray-700 mb-2">Connecting Dreams Foundation</p>
            <p className="text-sm text-gray-600">Maharaja Agrasen College Chapter</p>
          </div>

          {/* About links section */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {/* About Us link */}
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-gray-800">About Us</Link>
              </li>
              {/* MOU link */}
              <li>
                <Link to="/mou" className="text-gray-600 hover:text-gray-800">Memorandum of Understanding</Link>
              </li>
              {/* Contact Us link */}
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social links section */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Socials</h3>
            <ul className="space-y-2">
              {/* Website link */}
              <li>
                <a 
                  href="https://www.linkedin.com/company/connecting-dreams-foundation-mac-chapter/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Globe2 className="w-5 h-5 mr-2" /> LinkedIn
                </a>
              </li>
              {/* Instagram link */}
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </a>
              </li>
              {/* Twitter link */}
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Twitter className="w-5 h-5 mr-2" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}