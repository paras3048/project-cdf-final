import React from 'react';

export default function ImpactReport() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f7f7f5]">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-30">

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 1400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="#d9c9ed"
            strokeWidth="2"
          >
            <path d="M-100 100 C100 0 250 30 370 160 C490 290 590 280 720 160 C850 40 990 30 1120 150 C1250 270 1380 250 1540 120" />

            <path d="M-100 145 C100 45 250 75 370 205 C490 335 590 325 720 205 C850 85 990 75 1120 195 C1250 315 1380 295 1540 165" />

            <path d="M-100 190 C100 90 250 120 370 250 C490 380 590 370 720 250 C850 130 990 120 1120 240 C1250 360 1380 340 1540 210" />

            <path d="M-100 1100 C100 1000 250 1030 370 1160 C490 1290 590 1280 720 1160 C850 1040 990 1030 1120 1150 C1250 1270 1380 1250 1540 1120" />

            <path d="M-100 1145 C100 1045 250 1075 370 1205 C490 1335 590 1325 720 1205 C850 1085 990 1075 1120 1195 C1250 1315 1380 1295 1540 1165" />
          </g>
        </svg>

      </div>


      {/* =====================================================
          BLUE DECORATIVE SHAPE
      ====================================================== */}

      <div
        className="
          absolute
          top-[-90px]
          right-[-220px]
          w-[360px]
          h-[260px]
          sm:w-[500px]
          sm:h-[360px]
          md:w-[650px]
          md:h-[450px]
          bg-[#318bc1]
          rotate-[10deg]
          rounded-[35%_5%_30%_10%]
          opacity-80
          pointer-events-none
        "
      />


      {/* =====================================================
          GREEN DECORATIVE SHAPE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-[-130px]
          left-[-220px]
          w-[360px]
          h-[260px]
          sm:w-[500px]
          sm:h-[360px]
          md:w-[650px]
          md:h-[450px]
          bg-[#8bc21f]
          rotate-[-8deg]
          rounded-[10%_35%_5%_30%]
          opacity-80
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          px-4
          sm:px-6
          md:px-8
          pt-20
          sm:pt-24
          pb-20
          sm:pb-24
        "
      >

        <div className="max-w-5xl mx-auto">


          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="text-center mb-10 sm:mb-14">

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                text-gray-900
                tracking-tight
              "
            >
              Impact Report
            </h1>

            <div
              className="
                w-16
                sm:w-20
                h-1
                bg-[#5c438c]
                rounded-full
                mx-auto
                mt-4
                sm:mt-5
              "
            />

          </div>


          {/* =================================================
              CENTERED IMPACT REPORT CARD
          ================================================= */}

          <div className="flex justify-center">

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7493735810815393793"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CDF MAC Chapter Impact Report on LinkedIn"
              className="
                group
                block
                w-full
                max-w-3xl
                bg-white
                rounded-2xl
                sm:rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                focus:outline-none
                focus:ring-2
                focus:ring-[#5c438c]
                focus:ring-offset-2
              "
            >

              {/* =================================================
                  IMPACT REPORT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  w-full
                  aspect-[16/10]
                  sm:aspect-[16/9]
                  overflow-hidden
                  bg-gray-100
                "
              >

                <img
                  src="/images/resources/12.png"
                  alt="CDF MAC Chapter Impact Report"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/10
                    transition-all
                    duration-500
                  "
                />

              </div>


              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div
                className="
                  px-6
                  py-6
                  sm:px-8
                  sm:py-7
                "
              >

                <h2
                  className="
                    font-['Times_New_Roman']
                    text-xl
                    sm:text-2xl
                    font-semibold
                    text-gray-900
                    text-center
                    transition-colors
                    duration-300
                    group-hover:text-[#5c438c]
                  "
                >
                  CDF MAC Chapter Impact Report
                </h2>


                <p
                  className="
                    mt-2
                    text-sm
                    sm:text-base
                    text-gray-500
                    text-center
                  "
                >
                  View our Impact Report
                </p>


                <div
                  className="
                    w-10
                    h-1
                    bg-[#5c438c]
                    rounded-full
                    mx-auto
                    mt-4
                    transition-all
                    duration-300
                    group-hover:w-16
                  "
                />

              </div>

            </a>

          </div>


          {/* =================================================
              BOTTOM DECORATIVE ELEMENT
          ================================================= */}

          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              sm:gap-3
              mt-12
              sm:mt-16
            "
          >

            <div className="w-8 sm:w-12 h-1 rounded-full bg-[#318bc1]" />

            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#8bc21f]" />

            <div className="w-14 sm:w-20 h-1 rounded-full bg-[#5c438c]" />

          </div>

        </div>

      </div>

    </div>
  );
}