import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowUpRight,
  Clock,
  MessageCircle,
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f7f8f5]">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Blue top-right shape */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-210px]
          w-[460px]
          h-[330px]
          sm:w-[600px]
          sm:h-[400px]
          md:w-[700px]
          md:h-[460px]
          bg-[#318BC1]/12
          rotate-[10deg]
          rounded-[40%_5%_35%_10%]
          pointer-events-none
        "
      />

      {/* Green bottom-left shape */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-[-230px]
          w-[500px]
          h-[350px]
          sm:w-[650px]
          sm:h-[430px]
          md:w-[750px]
          md:h-[480px]
          bg-[#8BC21F]/14
          rotate-[-8deg]
          rounded-[10%_40%_5%_35%]
          pointer-events-none
        "
      />

      {/* Green glow */}
      <div
        className="
          absolute
          top-[35%]
          left-[5%]
          w-[280px]
          h-[220px]
          rounded-full
          bg-[#8BC21F]/8
          blur-3xl
          pointer-events-none
        "
      />

      {/* Blue glow */}
      <div
        className="
          absolute
          top-[55%]
          right-[5%]
          w-[280px]
          h-[220px]
          rounded-full
          bg-[#318BC1]/7
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTOUR LINES
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-35">

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 1600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#b8d5e5"
            strokeWidth="2"
          >
            <path d="M-100 100 C100 0 250 30 370 160 C490 290 590 280 720 160 C850 40 990 30 1120 150 C1250 270 1380 250 1540 120" />

            <path d="M-100 145 C100 45 250 75 370 205 C490 335 590 325 720 205 C850 85 990 75 1120 195 C1250 315 1380 295 1540 165" />

            <path d="M-100 190 C100 90 250 120 370 250 C490 380 590 370 720 250 C850 130 990 120 1120 240 C1250 360 1380 340 1540 210" />

            <path d="M-100 1280 C100 1180 250 1210 370 1340 C490 1470 590 1460 720 1340 C850 1220 990 1210 1120 1330 C1250 1450 1380 1430 1540 1300" />

            <path d="M-100 1325 C100 1225 250 1255 370 1385 C490 1515 590 1505 720 1385 C850 1265 990 1255 1120 1375 C1250 1495 1380 1475 1540 1345" />
          </g>
        </svg>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-28
          sm:pt-32
          pb-20
        "
      >

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/75
              backdrop-blur-xl
              border
              border-white
              shadow-sm
              mb-5
            "
          >

            <MessageCircle className="w-4 h-4 text-[#6f9900]" />

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                tracking-wide
                text-[#6f9900]
              "
            >
              LET'S CONNECT
            </span>

          </div>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              text-[#263238]
            "
          >
            Contact Us
          </h1>

          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              mt-5
            "
          >
            <div className="w-8 sm:w-12 h-1 rounded-full bg-[#318BC1]" />
            <div className="w-3 h-3 rounded-full bg-[#8BC21F]" />
            <div className="w-12 sm:w-16 h-1 rounded-full bg-[#8BC21F]" />
          </div>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              text-gray-600
            "
          >
            Have a question, an idea, or want to collaborate?
            We'd love to hear from you.
          </p>

        </section>

        {/* ===================================================
            CONTACT + MAP
        =================================================== */}

        <section
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-6
            lg:gap-8
            items-stretch
            max-w-6xl
            mx-auto
          "
        >

          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              border
              border-white
              shadow-[0_15px_50px_rgba(0,0,0,0.07)]
              p-6
              sm:p-8
            "
          >

            {/* Top accent */}

            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-1
                bg-gradient-to-r
                from-[#8BC21F]
                via-[#8BC21F]
                to-[#318BC1]
              "
            />

            <div className="mb-7">

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#6f9900]
                "
              >
                Get in Touch
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#263238]
                "
              >
                We'd love to hear from you
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  sm:text-base
                  leading-6
                  text-gray-600
                "
              >
                Reach out to us through any of the channels
                below. Whether you're looking to collaborate,
                volunteer, or simply connect, we're here to help.
              </p>

            </div>

            {/* =================================================
                ADDRESS
            ================================================= */}

            <ContactItem
              icon={<MapPin className="w-5 h-5" />}
              title="Visit Us"
              iconClass="bg-[#8BC21F]/15 text-[#6f9900]"
            >
              <p>
                J83C+5R8, Maharaja Agrasen College,
                <br />
                Ganpati Mandir Marg, Vasundhara Enclave,
                <br />
                Delhi-110096, New Delhi, India
              </p>
            </ContactItem>

            {/* =================================================
                PHONE
            ================================================= */}

            <ContactItem
              icon={<Phone className="w-5 h-5" />}
              title="Call Us"
              iconClass="bg-[#318BC1]/10 text-[#318BC1]"
            >
              <div className="space-y-2">

                <a
                  href="tel:+919717062028"
                  className="
                    block
                    text-sm
                    sm:text-base
                    text-gray-600
                    hover:text-[#6f9900]
                    transition-colors
                  "
                >
                  +91 97170 62028
                  <span className="block text-xs text-gray-400 mt-0.5">
                    Medhansh — Co-President
                  </span>
                </a>

                <a
                  href="tel:+918800520678"
                  className="
                    block
                    text-sm
                    sm:text-base
                    text-gray-600
                    hover:text-[#6f9900]
                    transition-colors
                  "
                >
                  +91 88005 20678
                  <span className="block text-xs text-gray-400 mt-0.5">
                    Yuvraj — Co-President
                  </span>
                </a>

              </div>
            </ContactItem>

            {/* =================================================
                EMAIL
            ================================================= */}

            <ContactItem
              icon={<Mail className="w-5 h-5" />}
              title="Email Us"
              iconClass="bg-[#8BC21F]/15 text-[#6f9900]"
            >
              <a
                href="mailto:cdf.mac.du@gmail.com"
                className="
                  text-sm
                  sm:text-base
                  text-gray-600
                  hover:text-[#6f9900]
                  transition-colors
                  break-all
                "
              >
                cdf.mac.du@gmail.com
              </a>
            </ContactItem>

            {/* =================================================
                CALENDLY
            ================================================= */}

            <a
              href="https://calendly.com/cdf-mac-du"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-7
                flex
                items-center
                justify-between
                gap-4
                rounded-2xl
                bg-[#263238]
                p-4
                sm:p-5
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              <div className="flex items-center gap-4 min-w-0">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-11
                    h-11
                    rounded-xl
                    bg-[#8BC21F]
                    text-white
                  "
                >
                  <Calendar className="w-5 h-5" />
                </div>

                <div className="min-w-0">

                  <p className="font-semibold text-sm sm:text-base">
                    Schedule a Meeting
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Connect with our team through Calendly
                  </p>

                </div>

              </div>

              <ArrowUpRight
                className="
                  w-5
                  h-5
                  shrink-0
                  text-[#8BC21F]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>

          </div>

          {/* =================================================
              RIGHT — MAP
          ================================================= */}

          <div
            className="
              relative
              min-h-[420px]
              lg:min-h-[650px]
              overflow-hidden
              rounded-3xl
              bg-white
              border
              border-white
              shadow-[0_15px_50px_rgba(0,0,0,0.09)]
            "
          >

            {/* Map */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8892450124087!2d77.31724561508876!3d28.606899982429473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e9d0e99aef%3A0xc766f5294f0a8974!2sMaharaja%20Agrasen%20College!5e0!3m2!1sen!2sin!4v1647887842012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: 'absolute',
                inset: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maharaja Agrasen College Location"
            />

            {/* Floating map label */}

            <div
              className="
                absolute
                left-4
                right-4
                sm:left-6
                sm:right-auto
                top-4
                sm:top-6
                z-10
                max-w-[300px]
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                p-4
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#8BC21F]/15
                    text-[#6f9900]
                  "
                >
                  <MapPin className="w-5 h-5" />
                </div>

                <div>

                  <p
                    className="
                      text-sm
                      font-bold
                      text-[#263238]
                    "
                  >
                    Maharaja Agrasen College
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                  >
                    University of Delhi
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom status */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                sm:left-auto
                sm:right-6
                sm:bottom-6
                z-10
                flex
                items-center
                gap-2
                w-fit
                max-w-[calc(100%-2rem)]
                rounded-full
                bg-white/90
                backdrop-blur-xl
                border
                border-white
                shadow-lg
                px-4
                py-2.5
              "
            >

              <Clock className="w-4 h-4 text-[#318BC1]" />

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  text-gray-600
                "
              >
                Visit us at our campus
              </span>

            </div>

          </div>

        </section>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <section className="max-w-6xl mx-auto mt-10 sm:mt-12">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#263238]
              px-6
              py-9
              sm:px-10
              sm:py-11
              text-center
              shadow-[0_20px_50px_rgba(0,0,0,0.14)]
            "
          >

            {/* Decorative glow */}

            <div
              className="
                absolute
                -top-24
                -right-16
                w-64
                h-64
                rounded-full
                bg-[#8BC21F]/15
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-16
                w-64
                h-64
                rounded-full
                bg-[#318BC1]/15
                blur-3xl
              "
            />

            <div className="relative z-10">

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Have an idea worth connecting?
              </h2>

              <p
                className="
                  max-w-xl
                  mx-auto
                  mt-3
                  text-sm
                  sm:text-base
                  leading-6
                  text-gray-300
                "
              >
                Let's turn conversations into collaborations
                and ideas into meaningful impact.
              </p>

              <a
                href="mailto:cdf.mac.du@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  px-5
                  py-3
                  rounded-xl
                  bg-[#8BC21F]
                  text-white
                  text-sm
                  font-semibold
                  shadow-[0_8px_25px_rgba(139,194,31,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#7eaf1c]
                  hover:shadow-[0_12px_30px_rgba(139,194,31,0.35)]
                "
              >
                Send us an Email

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

            </div>

          </div>

        </section>

        {/* ===================================================
            BOTTOM DECORATION
        =================================================== */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            mt-14
          "
        >

          <div className="w-8 sm:w-12 h-1 rounded-full bg-[#318BC1]" />

          <div className="w-3 h-3 rounded-full bg-[#8BC21F]" />

          <div className="w-14 sm:w-20 h-1 rounded-full bg-[#8BC21F]" />

        </div>

      </main>
    </div>
  );
}


/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
  icon,
  title,
  children,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-start
        gap-4
        py-4
        border-b
        border-gray-100
      "
    >

      {/* Icon */}

      <div
        className={`
          flex
          items-center
          justify-center
          shrink-0
          w-11
          h-11
          rounded-xl
          ${iconClass}
          transition-transform
          duration-300
          group-hover:scale-105
        `}
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0">

        <h3
          className="
            text-sm
            sm:text-base
            font-bold
            text-[#263238]
            mb-1.5
          "
        >
          {title}
        </h3>

        <div
          className="
            text-sm
            leading-6
            text-gray-600
          "
        >
          {children}
        </div>

      </div>

    </div>
  );
}