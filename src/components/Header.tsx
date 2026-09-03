import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  // Mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Header scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  // Desktop About dropdown
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Desktop Knowledge Hub dropdown
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);

  // Mobile Knowledge Hub dropdown
  const [isMobileKnowledgeOpen, setIsMobileKnowledgeOpen] = useState(false);

  // Current route
  const location = useLocation();

  // Check if current page is Home
  const isHomePage = location.pathname === '/';


  /* =====================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ====================================================== */

  useEffect(() => {
    setIsOpen(false);
    setIsMobileKnowledgeOpen(false);
    setIsAboutOpen(false);
    setIsKnowledgeOpen(false);
  }, [location.pathname]);


  /* =====================================================
     HANDLE HEADER SCROLL
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  /* =====================================================
     HEADER BACKGROUND
  ====================================================== */

  const getHeaderStyle = () => {
    if (!isHomePage) {
      return 'bg-white shadow-sm';
    }

    return isScrolled
      ? 'bg-white shadow-sm'
      : 'bg-transparent';
  };


  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${getHeaderStyle()}
      `}
    >

      <nav
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
          py-3
          sm:py-4
        "
      >

        {/* =================================================
            HEADER CONTENT
        ================================================== */}

        <div className="flex justify-between items-center">


          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="
              w-32
              sm:w-40
              flex
              items-center
            "
          >
            <img
              src="/images/logo/1.png"
              alt="CDF Logo"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                object-cover
                rounded-lg
                shadow-md
                hover:shadow-xl
                transition-shadow
                duration-300
                cursor-pointer
              "
            />
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              space-x-6
            "
          >

            {/* =================================================
                HOME
            ================================================== */}

            <Link
              to="/"
              className="
                text-gray-800
                font-medium
                hover:text-[#5c438c]
                transition-colors
                duration-300
              "
            >
              Home
            </Link>


            {/* =================================================
                KNOWLEDGE HUB DROPDOWN
            ================================================== */}

            <div
              className="relative"
              onMouseEnter={() => setIsKnowledgeOpen(true)}
              onMouseLeave={() => setIsKnowledgeOpen(false)}
            >

              {/* Knowledge Hub Button */}

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  text-gray-800
                  font-medium
                  hover:text-[#5c438c]
                  transition-colors
                  duration-300
                "
              >
                Knowledge Hub

                <ChevronDown
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-200
                    ${
                      isKnowledgeOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>


              {/* Knowledge Hub Dropdown */}

              <div
                className={`
                  absolute
                  right-0
                  top-full
                  mt-3
                  w-52
                  bg-white
                  rounded-xl
                  shadow-xl
                  border
                  border-gray-100
                  py-2

                  transition-all
                  duration-200

                  ${
                    isKnowledgeOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }
                `}
              >

                {/* Podcast */}

                <Link
                  to="/podcast"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  Podcast
                </Link>


                {/* Impact Report */}

                <Link
                  to="/impact-report"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  Impact Report
                </Link>


                {/* Resources */}

                <Link
                  to="/resources"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  Resources
                </Link>

              </div>

            </div>


            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              to="/contact"
              className="
                text-gray-800
                font-medium
                hover:text-[#5c438c]
                transition-colors
                duration-300
              "
            >
              Contact
            </Link>


            {/* =================================================
                ABOUT DROPDOWN
            ================================================== */}

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >

              {/* About Button */}

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  text-gray-800
                  font-medium
                  hover:text-[#5c438c]
                  transition-colors
                  duration-300
                "
              >
                About

                <ChevronDown
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-200
                    ${
                      isAboutOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>


              {/* About Dropdown */}

              <div
                className={`
                  absolute
                  right-0
                  top-full
                  mt-3
                  w-52
                  bg-white
                  rounded-xl
                  shadow-xl
                  border
                  border-gray-100
                  py-2

                  transition-all
                  duration-200

                  ${
                    isAboutOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }
                `}
              >

                {/* About CDF */}

                <Link
                  to="/about-cdf"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  About CDF
                </Link>


                {/* About Us */}

                <Link
                  to="/about-us"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  About Us
                </Link>


                {/* Founding Team */}

                <Link
                  to="/the-founding-team"
                  className="
                    block
                    px-5
                    py-3
                    text-gray-800
                    hover:bg-gray-50
                    hover:text-[#5c438c]
                    transition-colors
                    duration-200
                  "
                >
                  The Founding Team
                </Link>

              </div>

            </div>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            className="
              md:hidden
              p-2
              rounded-lg
              hover:bg-gray-100
              transition-colors
              duration-300
              text-gray-800
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >

            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}

          </button>

        </div>


        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}

        {isOpen && (
          <div
            className="
              md:hidden
              mt-4
              bg-white
              rounded-xl
              shadow-xl
              border
              border-gray-100
              p-3
            "
          >

            {/* =================================================
                HOME
            ================================================== */}

            <Link
              to="/"
              className="
                block
                py-3
                px-4
                text-gray-800
                hover:bg-gray-50
                hover:text-[#5c438c]
                rounded-lg
                transition-colors
              "
            >
              Home
            </Link>


            {/* =================================================
                KNOWLEDGE HUB
            ================================================== */}

            <div>

              <button
                type="button"
                onClick={() =>
                  setIsMobileKnowledgeOpen(
                    !isMobileKnowledgeOpen
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  py-3
                  px-4
                  text-gray-800
                  hover:bg-gray-50
                  hover:text-[#5c438c]
                  rounded-lg
                  transition-colors
                "
              >

                <span>
                  Knowledge Hub
                </span>

                <ChevronDown
                  className={`
                    w-5
                    h-5
                    transition-transform
                    duration-200
                    ${
                      isMobileKnowledgeOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

              </button>


              {/* =================================================
                  KNOWLEDGE HUB SUBMENU
              ================================================== */}

              {isMobileKnowledgeOpen && (
                <div
                  className="
                    ml-4
                    mt-1
                    mb-1
                    border-l-2
                    border-[#5c438c]/20
                    pl-2
                  "
                >

                  {/* Podcast */}

                  <Link
                    to="/podcast"
                    className="
                      block
                      py-2.5
                      px-4
                      text-gray-600
                      hover:text-[#5c438c]
                      hover:bg-gray-50
                      rounded-lg
                      transition-colors
                    "
                  >
                    Podcast
                  </Link>


                  {/* Impact Report */}

                  <Link
                    to="/impact-report"
                    className="
                      block
                      py-2.5
                      px-4
                      text-gray-600
                      hover:text-[#5c438c]
                      hover:bg-gray-50
                      rounded-lg
                      transition-colors
                    "
                  >
                    Impact Report
                  </Link>


                  {/* Resources */}

                  <Link
                    to="/resources"
                    className="
                      block
                      py-2.5
                      px-4
                      text-gray-600
                      hover:text-[#5c438c]
                      hover:bg-gray-50
                      rounded-lg
                      transition-colors
                    "
                  >
                    Resources
                  </Link>

                </div>
              )}

            </div>


            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              to="/contact"
              className="
                block
                py-3
                px-4
                text-gray-800
                hover:bg-gray-50
                hover:text-[#5c438c]
                rounded-lg
                transition-colors
              "
            >
              Contact
            </Link>


            {/* =================================================
                ABOUT
            ================================================== */}

            <Link
              to="/about-cdf"
              className="
                block
                py-3
                px-4
                text-gray-800
                hover:bg-gray-50
                hover:text-[#5c438c]
                rounded-lg
                transition-colors
              "
            >
              About CDF
            </Link>


            <Link
              to="/about-us"
              className="
                block
                py-3
                px-4
                text-gray-800
                hover:bg-gray-50
                hover:text-[#5c438c]
                rounded-lg
                transition-colors
              "
            >
              About Us
            </Link>


            <Link
              to="/the-founding-team"
              className="
                block
                py-3
                px-4
                text-gray-800
                hover:bg-gray-50
                hover:text-[#5c438c]
                rounded-lg
                transition-colors
              "
            >
              The Founding Team
            </Link>

          </div>
        )}

      </nav>

    </header>
  );
}