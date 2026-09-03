import React from 'react';

const resourceItems = [
  {
    image: "/images/resources/1.png",
    title: "Cognitive Science Labs Database",
    link: "https://erratic-forgery-cfc.notion.site/144bc6c4752580c2a3f3d72c28f37791?v=144bc6c47525812bac73000c764b3d25&pvs=4"
  },
  {
    image: "/images/resources/2.png",
    title: "Podcasts",
    link: "https://erratic-forgery-cfc.notion.site/143bc6c475258074a0fdf006515d1589?v=144bc6c475258186b1a3000cf0dc82e2&pvs=74"
  },
  {
    image: "/images/resources/3.png",
    title: "Parliament of India",
    link: "https://pine-torta-f08.notion.site/1417d6434fdd808f811de1a0afcbba6c?v=1417d6434fdd818a962d000cf1f002b9&pvs=74"
  },
  {
    image: "/images/resources/4.png",
    title: "Toolkit",
    link: "https://erratic-forgery-cfc.notion.site/144bc6c4752580638e60fe654621476d?v=144bc6c4752581bf9f98000c26af42a3&pvs=74"
  },
  {
    image: "/images/resources/5.png",
    title: "Invest India",
    link: "https://erratic-forgery-cfc.notion.site/161bc6c47525806e921bdf684af5923e?v=161bc6c475258196a4be000c27e64e9a"
  },
  {
    image: "/images/resources/6.png",
    title: "Niti Aayog",
    link: "https://erratic-forgery-cfc.notion.site/161bc6c47525801e9198ef39bf3fd048?v=161bc6c475258154b30c000cfe56fcd3&pvs=4"
  }
];

export default function Resources() {
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

        <div className="max-w-7xl mx-auto">


          {/* =================================================
              HEADER
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
              Resources
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

            <p
              className="
                mt-4
                sm:mt-5
                max-w-2xl
                mx-auto
                px-3
                text-base
                sm:text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Explore useful databases, tools, podcasts, reports,
              and other resources curated by CDF MAC Chapter.
            </p>

          </div>


          {/* =================================================
              RESOURCE GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
              sm:gap-7
              lg:gap-8
            "
          >

            {resourceItems.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  w-full
                  min-w-0
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-100
                  shadow-[0_5px_20px_rgba(0,0,0,0.07)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:scale-[1.015]
                  hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#5c438c]
                  focus:ring-offset-2
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-full
                    aspect-square
                    overflow-hidden
                    bg-gray-100
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}

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


                {/* CARD CONTENT */}

                <div
                  className="
                    px-5
                    py-5
                    sm:px-6
                    sm:py-6
                  "
                >

                  <h2
                    className="
                      font-['Times_New_Roman']
                      text-lg
                      sm:text-xl
                      font-semibold
                      text-gray-900
                      text-center
                      leading-snug
                      transition-colors
                      duration-300
                      group-hover:text-[#5c438c]
                    "
                  >
                    {item.title}
                  </h2>


                  {/* Small decorative line */}

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

            ))}

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