import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f7f8f5]">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Blue top-right shape */}
      <div
        className="
          absolute
          -top-32
          -right-40
          w-[420px]
          h-[300px]
          sm:w-[600px]
          sm:h-[400px]
          bg-[#318BC1]/10
          rotate-[10deg]
          rounded-[40%_5%_35%_10%]
          pointer-events-none
        "
      />

      {/* Green bottom-left shape */}
      <div
        className="
          absolute
          -bottom-40
          -left-48
          w-[450px]
          h-[320px]
          sm:w-[650px]
          sm:h-[420px]
          bg-[#8BC21F]/12
          rotate-[-8deg]
          rounded-[10%_40%_5%_35%]
          pointer-events-none
        "
      />

      {/* Soft green glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[180px]
          bg-[#8BC21F]/8
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTOUR LINES
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#b8d4e4"
            strokeWidth="2"
          >
            <path d="M-100 100 C100 0 250 30 370 160 C490 290 590 280 720 160 C850 40 990 30 1120 150 C1250 270 1380 250 1540 120" />

            <path d="M-100 145 C100 45 250 75 370 205 C490 335 590 325 720 205 C850 85 990 75 1120 195 C1250 315 1380 295 1540 165" />

            <path d="M-100 190 C100 90 250 120 370 250 C490 380 590 370 720 250 C850 130 990 120 1120 240 C1250 360 1380 340 1540 210" />

            <path d="M-100 560 C100 460 250 490 370 620 C490 750 590 740 720 620 C850 500 990 490 1120 610 C1250 730 1380 710 1540 580" />

            <path d="M-100 605 C100 505 250 535 370 665 C490 795 590 785 720 665 C850 545 990 535 1120 655 C1250 775 1380 755 1540 625" />
          </g>
        </svg>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-16
          sm:pt-20
          pb-8
        "
      >

        {/* ===================================================
            TOP BRAND SECTION
        =================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
            mb-12
          "
        >

          {/* Brand */}

          <div className="max-w-xl">

            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  relative
                  w-16
                  h-16
                  sm:w-[72px]
                  sm:h-[72px]
                  rounded-2xl
                  bg-white
                  border
                  border-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                  overflow-hidden
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:scale-105
                  group-hover:shadow-[0_12px_35px_rgba(139,194,31,0.25)]
                "
              >
                <img
                  src="/images/logo/1.png"
                  alt="Connecting Dreams Foundation Logo"
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

              <div>
                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    tracking-tight
                    text-[#263238]
                  "
                >
                  Connecting Dreams Foundation
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    text-gray-500
                  "
                >
                  Maharaja Agrasen College Chapter
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                sm:text-base
                leading-7
                text-gray-600
              "
            >
              Connecting ideas, people and purpose to create
              meaningful impact through the CDF MAC Chapter.
            </p>
          </div>

          {/* Small identity badge */}

          <div
            className="
              inline-flex
              self-start
              lg:self-auto
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white/70
              backdrop-blur-xl
              border
              border-white
              shadow-sm
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-xl
                bg-[#8BC21F]/15
                text-[#6f9900]
              "
            >
              <MapPin className="w-4 h-4" />
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Chapter
              </p>

              <p className="text-sm font-semibold text-gray-700">
                Maharaja Agrasen College
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#8BC21F]/30
            to-transparent
            mb-10
          "
        />

        {/* ===================================================
            FOOTER CONTENT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            lg:gap-12
          "
        >

          {/* =================================================
              ABOUT
          ================================================= */}

          <div
            className="
              rounded-3xl
              bg-white/65
              backdrop-blur-xl
              border
              border-white
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            "
          >
            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  bg-[#8BC21F]/15
                  text-[#6f9900]
                "
              >
                <span className="text-lg font-bold">
                  +
                </span>
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#263238]
                "
              >
                Explore
              </h3>
            </div>

            <ul className="space-y-2">

              <li>
                <Link
                  to="/about-us"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#8BC21F]/10
                    hover:text-[#5f8d00]
                    transition-all
                    duration-200
                  "
                >
                  <span>About Us</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="/about-cdf"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#8BC21F]/10
                    hover:text-[#5f8d00]
                    transition-all
                    duration-200
                  "
                >
                  <span>About CDF</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7493735810815393793/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#8BC21F]/10
                    hover:text-[#5f8d00]
                    transition-all
                    duration-200
                  "
                >
                  <span>Impact Report</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </a>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#8BC21F]/10
                    hover:text-[#5f8d00]
                    transition-all
                    duration-200
                  "
                >
                  <span>Contact Us</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

            </ul>
          </div>

          {/* =================================================
              KNOWLEDGE HUB
          ================================================= */}

          <div
            className="
              rounded-3xl
              bg-white/65
              backdrop-blur-xl
              border
              border-white
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            "
          >
            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  bg-[#318BC1]/12
                  text-[#318BC1]
                "
              >
                <span className="text-lg">
                  ✦
                </span>
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#263238]
                "
              >
                Knowledge Hub
              </h3>
            </div>

            <ul className="space-y-2">

              <li>
                <Link
                  to="/podcast"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#318BC1]/8
                    hover:text-[#318BC1]
                    transition-all
                    duration-200
                  "
                >
                  <span>Podcast</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="/resources"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#318BC1]/8
                    hover:text-[#318BC1]
                    transition-all
                    duration-200
                  "
                >
                  <span>Resources</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="/impact-report"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    text-sm
                    text-gray-600
                    hover:bg-[#318BC1]/8
                    hover:text-[#318BC1]
                    transition-all
                    duration-200
                  "
                >
                  <span>Impact Report</span>

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                    "
                  />
                </Link>
              </li>

            </ul>
          </div>

          {/* =================================================
              SOCIALS
          ================================================= */}

          <div
            className="
              rounded-3xl
              bg-white/65
              backdrop-blur-xl
              border
              border-white
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            "
          >

            <div className="flex items-center gap-3 mb-5">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  bg-[#8BC21F]/15
                  text-[#6f9900]
                "
              >
                <Mail className="w-4 h-4" />
              </div>

              <h3
                className="
                  text-lg
                  font-bold
                  text-[#263238]
                "
              >
                Connect
              </h3>

            </div>

            <div className="space-y-3">

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/connecting-dreams-foundation-mac-chapter/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  bg-white/60
                  border
                  border-transparent
                  hover:border-[#318BC1]/20
                  hover:bg-[#318BC1]/8
                  transition-all
                  duration-300
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
                    duration-300
                    group-hover:bg-[#318BC1]
                    group-hover:text-white
                  "
                >
                  <Linkedin className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    LinkedIn
                  </p>

                  <p className="text-xs text-gray-400">
                    Follow our journey
                  </p>
                </div>

              </a>

              {/* Instagram */}

              <a
                href="https://instagram.com/cdfmac"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  bg-white/60
                  border
                  border-transparent
                  hover:border-[#8BC21F]/30
                  hover:bg-[#8BC21F]/8
                  transition-all
                  duration-300
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
                    bg-[#8BC21F]/12
                    text-[#6f9900]
                    transition-all
                    duration-300
                    group-hover:bg-[#8BC21F]
                    group-hover:text-white
                  "
                >
                  <Instagram className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Instagram
                  </p>

                  <p className="text-xs text-gray-400">
                    @cdfmac
                  </p>
                </div>

              </a>

              {/* YouTube */}

              <a
                href="https://www.youtube.com/@ConnectingDreamsFoundationMAC/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  bg-white/60
                  border
                  border-transparent
                  hover:border-[#318BC1]/20
                  hover:bg-[#318BC1]/8
                  transition-all
                  duration-300
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
                    duration-300
                    group-hover:bg-[#318BC1]
                    group-hover:text-white
                  "
                >
                  <Youtube className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    YouTube
                  </p>

                  <p className="text-xs text-gray-400">
                    Watch our stories
                  </p>
                </div>

              </a>

            </div>
          </div>

        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            mt-12
            pt-6
            border-t
            border-gray-200/70
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-center
            sm:text-left
          "
        >

          <p
            className="
              text-xs
              sm:text-sm
              text-gray-500
            "
          >
            © {new Date().getFullYear()} Connecting Dreams Foundation —
            Maharaja Agrasen College Chapter
          </p>

          {/* Decorative identity */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                w-8
                sm:w-10
                h-1
                rounded-full
                bg-[#318BC1]
              "
            />

            <span
              className="
                w-3
                h-3
                rounded-full
                bg-[#8BC21F]
              "
            />

            <span
              className="
                w-10
                sm:w-14
                h-1
                rounded-full
                bg-[#8BC21F]
              "
            />
          </div>

        </div>

      </div>
    </footer>
  );
}