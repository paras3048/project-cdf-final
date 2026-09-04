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
   * NAVIGATION ITEM CLASSES
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
        ? 'text-[#5c438c] bg-[#5c438c]/10'
        : 'text-gray-700 hover:text-[#5c438c] hover:bg-white/70'
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
                bg-white/80
                backdrop-blur-xl
                border-white/70
                shadow-[0_8px_35px_rgba(38,25,65,0.10)]
              `
              : `
                bg-white/65
                backdrop-blur-lg
                border-white/50
                shadow-[0_6px_30px_rgba(38,25,65,0.06)]
              `
          }
        `}
      >
        {/* Subtle purple glow behind header */}
        <div
          className="
            absolute
            -top-20
            left-1/2
            -translate-x-1/2
            w-72
            h-20
            bg-[#5c438c]/10
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
                group-hover:shadow-[0_8px_25px_rgba(92,67,140,0.20)]
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

            {/* Tiny accent glow */}
            <div
              className="
                absolute
                -bottom-1
                left-1/2
                -translate-x-1/2
                w-5
                h-1
                rounded-full
                bg-[#5c438c]/40
                blur-sm
                opacity-0
                group-hover:opacity-100
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
            {/* ------------------------------------------------
                HOME
            ------------------------------------------------ */}

            <Link
              to="/"
              className={navItemClass(isActive('/'))}
            >
              <HomeIcon
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

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
                    bg-[#5c438c]
                  "
                />
              )}
            </Link>

            {/* ------------------------------------------------
                CONTACT
            ------------------------------------------------ */}

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
                    bg-[#5c438c]
                  "
                />
              )}
            </Link>

            {/* =================================================
                KNOWLEDGE HUB
                LAST DROPDOWN #1
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsKnowledgeOpen(true)}
              onMouseLeave={() => setIsKnowledgeOpen(false)}
            >
              <button
                type="button"
                className={navItemClass(isKnowledgeActive)}
                onClick={() =>
                  setIsKnowledgeOpen(!isKnowledgeOpen)
                }
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
                      bg-[#5c438c]
                    "
                  />
                )}
              </button>

              {/* Knowledge Hub Dropdown */}

              <div
                className={`
                  absolute
                  right-0
                  top-[calc(100%+10px)]
                  w-64
                  p-2
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/85
                  backdrop-blur-2xl
                  shadow-[0_20px_50px_rgba(38,25,65,0.16)]
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
                {/* Small top accent */}

                <div
                  className="
                    absolute
                    -top-1
                    right-8
                    w-3
                    h-3
                    rotate-45
                    bg-white/90
                    border-l
                    border-t
                    border-white/80
                  "
                />

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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
                LAST DROPDOWN #2
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                className={navItemClass(isAboutActive)}
                onClick={() =>
                  setIsAboutOpen(!isAboutOpen)
                }
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
                      bg-[#5c438c]
                    "
                  />
                )}
              </button>

              {/* About Dropdown */}

              <div
                className={`
                  absolute
                  right-0
                  top-[calc(100%+10px)]
                  w-64
                  p-2
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/85
                  backdrop-blur-2xl
                  shadow-[0_20px_50px_rgba(38,25,65,0.16)]
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
                {/* Small top accent */}

                <div
                  className="
                    absolute
                    -top-1
                    right-8
                    w-3
                    h-3
                    rotate-45
                    bg-white/90
                    border-l
                    border-t
                    border-white/80
                  "
                />

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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
                    hover:bg-[#5c438c]/8
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
                      bg-[#5c438c]/10
                      text-[#5c438c]
                      transition-all
                      duration-200
                      group-hover:bg-[#5c438c]
                      group-hover:text-white
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
              bg-white/70
              border
              border-white
              text-gray-800
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#5c438c]
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
                bg-white/60
                border
                border-white/70
                backdrop-blur-xl
              "
            >
              {/* ------------------------------------------------
                  HOME
              ------------------------------------------------ */}

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
                      ? 'bg-[#5c438c]/10 text-[#5c438c]'
                      : 'text-gray-700 hover:bg-white/80 hover:text-[#5c438c]'
                  }
                `}
              >
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>

              {/* ------------------------------------------------
                  CONTACT
              ------------------------------------------------ */}

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
                      ? 'bg-[#5c438c]/10 text-[#5c438c]'
                      : 'text-gray-700 hover:bg-white/80 hover:text-[#5c438c]'
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
                        ? 'bg-[#5c438c]/10 text-[#5c438c]'
                        : 'text-gray-700 hover:bg-white/80 hover:text-[#5c438c]'
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
                      border-[#5c438c]/15
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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
                        ? 'bg-[#5c438c]/10 text-[#5c438c]'
                        : 'text-gray-700 hover:bg-white/80 hover:text-[#5c438c]'
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
                      border-[#5c438c]/15
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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
                        hover:bg-[#5c438c]/5
                        hover:text-[#5c438c]
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