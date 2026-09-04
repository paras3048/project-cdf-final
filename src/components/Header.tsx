import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Home as HomeIcon,
  Mail,
  BookOpen,
  Users,
  Podcast as PodcastIcon,
  FileText,
  Library,
  Building2,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);

  const [isMobileKnowledgeOpen, setIsMobileKnowledgeOpen] =
    useState(false);

  const [isMobileAboutOpen, setIsMobileAboutOpen] =
    useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  /*
   * ============================================================
   * CLOSE MENUS WHEN ROUTE CHANGES
   * ============================================================
   */

  useEffect(() => {
    setIsOpen(false);
    setIsMobileKnowledgeOpen(false);
    setIsMobileAboutOpen(false);
    setIsAboutOpen(false);
    setIsKnowledgeOpen(false);
  }, [location.pathname]);

  /*
   * ============================================================
   * HEADER SCROLL EFFECT
   * ============================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * ============================================================
   * ACTIVE ROUTE HELPERS
   * ============================================================
   */

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isKnowledgeActive = [
    '/podcast',
    '/impact-report',
    '/resources',
  ].includes(location.pathname);

  const isAboutActive = [
    '/about-cdf',
    '/about-us',
    '/the-founding-team',
  ].includes(location.pathname);

  /*
   * ============================================================
   * DESKTOP NAVIGATION ITEM
   * ============================================================
   */

  const navItemClass = (active: boolean) => `
    relative
    flex
    items-center
    gap-2
    px-4
    py-2.5
    rounded-full
    text-sm
    font-medium
    whitespace-nowrap
    transition-all
    duration-300
    ease-out
    ${
      active
        ? 'text-[#5f8d00] bg-[#8BC21F]/15 shadow-sm'
        : 'text-[#263238] hover:text-[#5f8d00] hover:bg-white/80'
    }
  `;

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ease-out
        ${
          isScrolled || !isHomePage
            ? 'pt-2 sm:pt-3'
            : 'pt-3 sm:pt-5'
        }
      `}
    >
      <nav
        className={`
          relative
          mx-auto
          w-[calc(100%-1rem)]
          sm:w-[calc(100%-2rem)]
          max-w-7xl
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            isScrolled || !isHomePage
              ? `
                bg-white/85
                backdrop-blur-xl
                border-white
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              `
              : `
                bg-white/70
                backdrop-blur-xl
                border-white/70
                shadow-[0_8px_35px_rgba(0,0,0,0.07)]
              `
          }
        `}
      >
        {/* =====================================================
            DECORATIVE GREEN GLOW
        ===================================================== */}

        <div
          className="
            absolute
            -top-16
            left-1/2
            -translate-x-1/2
            w-72
            h-24
            bg-[#8BC21F]/10
            blur-3xl
            rounded-full
            pointer-events-none
          "
        />

        {/* =====================================================
            DECORATIVE BLUE GLOW
        ===================================================== */}

        <div
          className="
            absolute
            -bottom-16
            right-20
            w-48
            h-20
            bg-[#318BC1]/8
            blur-3xl
            rounded-full
            pointer-events-none
          "
        />

        <div
          className="
            relative
            flex
            items-center
            justify-between
            px-3
            sm:px-5
            lg:px-6
            py-2.5
            sm:py-3
          "
        >
          {/* ====================================================
              LOGO
          ==================================================== */}

          <Link
            to="/"
            className="
              group
              relative
              flex
              items-center
              shrink-0
            "
          >
            <div
              className="
                relative
                flex
                items-center
                justify-center
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-xl
                overflow-hidden
                bg-white
                border
                border-white
                shadow-[0_4px_18px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:scale-105
                group-hover:shadow-[0_8px_25px_rgba(139,194,31,0.25)]
              "
            >
              <img
                src="/images/logo/1.png"
                alt="CDF Logo"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Green logo glow */}

            <div
              className="
                absolute
                -bottom-1
                left-1/2
                -translate-x-1/2
                w-6
                h-1
                rounded-full
                bg-[#8BC21F]
                blur-sm
                opacity-0
                group-hover:opacity-80
                transition-opacity
                duration-300
              "
            />
          </Link>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-1.5
            "
          >
            {/* =================================================
                HOME
            ================================================= */}

            <Link
              to="/"
              className={navItemClass(isActive('/'))}
            >
              <HomeIcon className="w-4 h-4" />

              <span>Home</span>

              {isActive('/') && (
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-1
                    h-1
                    rounded-full
                    bg-[#8BC21F]
                  "
                />
              )}
            </Link>

            {/* =================================================
                CONTACT
            ================================================= */}

            <Link
              to="/contact"
              className={navItemClass(isActive('/contact'))}
            >
              <Mail className="w-4 h-4" />

              <span>Contact</span>

              {isActive('/contact') && (
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-1
                    h-1
                    rounded-full
                    bg-[#8BC21F]
                  "
                />
              )}
            </Link>

            {/* =================================================
                KNOWLEDGE HUB
                LAST DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsKnowledgeOpen(true)}
              onMouseLeave={() => setIsKnowledgeOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsKnowledgeOpen(!isKnowledgeOpen)
                }
                className={navItemClass(isKnowledgeActive)}
              >
                <BookOpen className="w-4 h-4" />

                <span>Knowledge Hub</span>

                <ChevronDown
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    ${
                      isKnowledgeOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

                {isKnowledgeActive && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      -translate-x-1/2
                      w-1
                      h-1
                      rounded-full
                      bg-[#8BC21F]
                    "
                  />
                )}
              </button>

              {/* =================================================
                  KNOWLEDGE HUB DROPDOWN
              ================================================= */}

              <div
                className={`
                  absolute
                  right-0
                  top-[calc(100%+10px)]
                  w-64
                  p-2
                  rounded-2xl
                  border
                  border-white
                  bg-white/90
                  backdrop-blur-2xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  origin-top-right
                  ${
                    isKnowledgeOpen
                      ? 'opacity-100 visible translate-y-0 scale-100'
                      : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                  }
                `}
              >
                {/* Dropdown pointer */}

                <div
                  className="
                    absolute
                    -top-1
                    right-8
                    w-3
                    h-3
                    rotate-45
                    bg-white
                    border-l
                    border-t
                    border-white
                  "
                />

                {/* Podcast */}

                <Link
                  to="/podcast"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#8BC21F]/15
                      text-[#6f9900]
                      transition-all
                      duration-200
                      group-hover:bg-[#8BC21F]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <PodcastIcon className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Podcast
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Scholar's Weekly
                    </p>
                  </div>
                </Link>

                {/* Impact Report */}

                <Link
                  to="/impact-report"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#318BC1]/10
                      text-[#318BC1]
                      transition-all
                      duration-200
                      group-hover:bg-[#318BC1]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <FileText className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Impact Report
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Our work &amp; impact
                    </p>
                  </div>
                </Link>

                {/* Resources */}

                <Link
                  to="/resources"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#8BC21F]/15
                      text-[#6f9900]
                      transition-all
                      duration-200
                      group-hover:bg-[#8BC21F]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Library className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Resources
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Explore our resources
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* =================================================
                ABOUT
                LAST DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsAboutOpen(!isAboutOpen)
                }
                className={navItemClass(isAboutActive)}
              >
                <Users className="w-4 h-4" />

                <span>About</span>

                <ChevronDown
                  className={`
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    ${
                      isAboutOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

                {isAboutActive && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      -translate-x-1/2
                      w-1
                      h-1
                      rounded-full
                      bg-[#8BC21F]
                    "
                  />
                )}
              </button>

              {/* =================================================
                  ABOUT DROPDOWN
              ================================================= */}

              <div
                className={`
                  absolute
                  right-0
                  top-[calc(100%+10px)]
                  w-64
                  p-2
                  rounded-2xl
                  border
                  border-white
                  bg-white/90
                  backdrop-blur-2xl
                  shadow-[0_20px_50px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  origin-top-right
                  ${
                    isAboutOpen
                      ? 'opacity-100 visible translate-y-0 scale-100'
                      : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                  }
                `}
              >
                {/* Dropdown pointer */}

                <div
                  className="
                    absolute
                    -top-1
                    right-8
                    w-3
                    h-3
                    rotate-45
                    bg-white
                    border-l
                    border-t
                    border-white
                  "
                />

                {/* About CDF */}

                <Link
                  to="/about-cdf"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#8BC21F]/15
                      text-[#6f9900]
                      transition-all
                      duration-200
                      group-hover:bg-[#8BC21F]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Building2 className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      About CDF
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      About the organization
                    </p>
                  </div>
                </Link>

                {/* About Us */}

                <Link
                  to="/about-us"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#318BC1]/10
                      text-[#318BC1]
                      transition-all
                      duration-200
                      group-hover:bg-[#318BC1]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Users className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      About Us
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Meet our chapter
                    </p>
                  </div>
                </Link>

                {/* Founding Team */}

                <Link
                  to="/the-founding-team"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-200
                    hover:bg-[#8BC21F]/10
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-lg
                      bg-[#8BC21F]/15
                      text-[#6f9900]
                      transition-all
                      duration-200
                      group-hover:bg-[#8BC21F]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Users className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      The Founding Team
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Meet the founding team
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* ====================================================
              MOBILE MENU BUTTON
          ==================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              bg-white/75
              border
              border-white
              text-gray-800
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#8BC21F]
              hover:text-white
              hover:shadow-lg
              active:scale-95
            "
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ======================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-400
            ease-out
            ${
              isOpen
                ? 'max-h-[700px] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >
          <div className="px-3 pb-3">
            <div
              className="
                p-2
                rounded-2xl
                bg-white/70
                border
                border-white
                backdrop-blur-xl
                shadow-inner
              "
            >
              {/* =================================================
                  HOME
              ================================================= */}

              <Link
                to="/"
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive('/')
                      ? 'bg-[#8BC21F]/15 text-[#5f8d00]'
                      : 'text-gray-700 hover:bg-white/80 hover:text-[#5f8d00]'
                  }
                `}
              >
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>

              {/* =================================================
                  CONTACT
              ================================================= */}

              <Link
                to="/contact"
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isActive('/contact')
                      ? 'bg-[#8BC21F]/15 text-[#5f8d00]'
                      : 'text-gray-700 hover:bg-white/80 hover:text-[#5f8d00]'
                  }
                `}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Link>

              {/* =================================================
                  KNOWLEDGE HUB
              ================================================= */}

              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileKnowledgeOpen(
                      !isMobileKnowledgeOpen
                    )
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isKnowledgeActive
                        ? 'bg-[#8BC21F]/15 text-[#5f8d00]'
                        : 'text-gray-700 hover:bg-white/80 hover:text-[#5f8d00]'
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4" />
                    Knowledge Hub
                  </span>

                  <ChevronDown
                    className={`
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      ${
                        isMobileKnowledgeOpen
                          ? 'rotate-180'
                          : ''
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isMobileKnowledgeOpen
                        ? 'max-h-60 opacity-100'
                        : 'max-h-0 opacity-0'
                    }
                  `}
                >
                  <div
                    className="
                      ml-5
                      mt-1
                      mb-1
                      pl-3
                      border-l-2
                      border-[#8BC21F]/30
                    "
                  >
                    <Link
                      to="/podcast"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <PodcastIcon className="w-4 h-4" />
                      Podcast
                    </Link>

                    <Link
                      to="/impact-report"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <FileText className="w-4 h-4" />
                      Impact Report
                    </Link>

                    <Link
                      to="/resources"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <Library className="w-4 h-4" />
                      Resources
                    </Link>
                  </div>
                </div>
              </div>

              {/* =================================================
                  ABOUT
              ================================================= */}

              <div className="mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileAboutOpen(
                      !isMobileAboutOpen
                    )
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isAboutActive
                        ? 'bg-[#8BC21F]/15 text-[#5f8d00]'
                        : 'text-gray-700 hover:bg-white/80 hover:text-[#5f8d00]'
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4" />
                    About
                  </span>

                  <ChevronDown
                    className={`
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      ${
                        isMobileAboutOpen
                          ? 'rotate-180'
                          : ''
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isMobileAboutOpen
                        ? 'max-h-60 opacity-100'
                        : 'max-h-0 opacity-0'
                    }
                  `}
                >
                  <div
                    className="
                      ml-5
                      mt-1
                      mb-1
                      pl-3
                      border-l-2
                      border-[#8BC21F]/30
                    "
                  >
                    <Link
                      to="/about-cdf"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <Building2 className="w-4 h-4" />
                      About CDF
                    </Link>

                    <Link
                      to="/about-us"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <Users className="w-4 h-4" />
                      About Us
                    </Link>

                    <Link
                      to="/the-founding-team"
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-lg
                        text-sm
                        text-gray-600
                        hover:bg-[#8BC21F]/10
                        hover:text-[#6f9900]
                        transition-colors
                      "
                    >
                      <Users className="w-4 h-4" />
                      The Founding Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}