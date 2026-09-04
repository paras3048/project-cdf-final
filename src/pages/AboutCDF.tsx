import React from 'react';
import {
  HeartHandshake,
  Lightbulb,
  Handshake,
  ArrowRight,
  Target,
  Globe2,
} from 'lucide-react';

export default function AboutCDF() {
  const coreValues = [
    {
      title: 'Empathy',
      description:
        'Understanding and addressing the needs of underserved communities.',
      icon: HeartHandshake,
      color: 'green',
    },
    {
      title: 'Innovation',
      description:
        'Encouraging creative and sustainable solutions for real-world problems.',
      icon: Lightbulb,
      color: 'blue',
    },
    {
      title: 'Collaboration',
      description:
        'Building partnerships to amplify social impact.',
      icon: Handshake,
      color: 'green',
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f7f8f5]">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Blue top-right shape */}
      <div
        className="
          absolute
          -top-32
          -right-48
          w-[420px]
          h-[300px]
          sm:w-[600px]
          sm:h-[400px]
          md:w-[700px]
          md:h-[450px]
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
          left-[-250px]
          w-[450px]
          h-[320px]
          sm:w-[650px]
          sm:h-[420px]
          md:w-[750px]
          md:h-[480px]
          bg-[#8BC21F]/14
          rotate-[-8deg]
          rounded-[10%_40%_5%_35%]
          pointer-events-none
        "
      />

      {/* Soft green glow */}
      <div
        className="
          absolute
          top-[35%]
          left-[10%]
          w-[280px]
          h-[220px]
          bg-[#8BC21F]/8
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      {/* Soft blue glow */}
      <div
        className="
          absolute
          top-[50%]
          right-[5%]
          w-[260px]
          h-[200px]
          bg-[#318BC1]/7
          blur-3xl
          rounded-full
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
            stroke="#b9d8e8"
            strokeWidth="2"
          >
            <path d="M-100 120 C100 20 250 50 370 180 C490 310 590 300 720 180 C850 60 990 50 1120 170 C1250 290 1380 270 1540 140" />

            <path d="M-100 165 C100 65 250 95 370 225 C490 355 590 345 720 225 C850 105 990 95 1120 215 C1250 335 1380 315 1540 185" />

            <path d="M-100 210 C100 110 250 140 370 270 C490 400 590 390 720 270 C850 150 990 140 1120 260 C1250 380 1380 360 1540 230" />

            <path d="M-100 1320 C100 1220 250 1250 370 1380 C490 1510 590 1500 720 1380 C850 1260 990 1250 1120 1370 C1250 1490 1380 1470 1540 1340" />

            <path d="M-100 1365 C100 1265 250 1295 370 1425 C490 1555 590 1545 720 1425 C850 1305 990 1295 1120 1415 C1250 1535 1380 1515 1540 1385" />
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

        <section className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">

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
              mb-6
            "
          >
            <span
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-[#8BC21F]
                shadow-[0_0_10px_rgba(139,194,31,0.5)]
              "
            />

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                tracking-wide
                text-[#5f8d00]
              "
            >
              CONNECTING DREAMS FOUNDATION
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
              leading-tight
            "
          >
            Connecting Dreams
            <span className="block text-[#6f9900]">
              Foundation
            </span>
          </h1>

          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              mt-5
              mb-6
            "
          >
            <span className="w-8 sm:w-12 h-1 rounded-full bg-[#318BC1]" />
            <span className="w-3 h-3 rounded-full bg-[#8BC21F]" />
            <span className="w-12 sm:w-16 h-1 rounded-full bg-[#8BC21F]" />
          </div>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              leading-8
              text-gray-600
              max-w-3xl
              mx-auto
            "
          >
            Connecting people, ideas and opportunities to create
            sustainable solutions for real-world challenges.
          </p>
        </section>

        {/* ===================================================
            MAIN DESCRIPTION CARD
        =================================================== */}

        <section
          className="
            max-w-5xl
            mx-auto
            mb-16
            sm:mb-24
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-white/75
              backdrop-blur-xl
              border
              border-white
              shadow-[0_15px_50px_rgba(0,0,0,0.07)]
              p-6
              sm:p-8
              md:p-12
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)]
            "
          >

            {/* Card accent */}

            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-1
                bg-gradient-to-r
                from-[#8BC21F]
                via-[#8BC21F]
                to-[#318BC1]
              "
            />

            <div className="flex items-center gap-3 mb-7">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  bg-[#8BC21F]/15
                  text-[#6f9900]
                "
              >
                <Globe2 className="w-5 h-5" />
              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#263238]
                "
              >
                Who We Are
              </h2>

            </div>

            <div
              className="
                space-y-5
                text-sm
                sm:text-base
                md:text-lg
                leading-8
                text-gray-600
              "
            >
              <p>
                Connecting Dreams Foundation (CDF) is a globally
                recognized, not-for-profit organization dedicated
                to transforming challenges into opportunities and
                creating sustainable solutions to real-world
                problems. Inspired by the United Nations'
                Sustainable Development Goals (SDGs), CDF empowers
                young changemakers to design and implement
                impactful projects that drive social and economic
                change.
              </p>

              <p>
                Founded with the vision of connecting communities
                to opportunities, CDF operates through a robust
                network of students, institutions, and
                organizations. It fosters innovation,
                collaboration, and empathy, enabling individuals to
                create scalable solutions that address pressing
                global issues such as poverty, education, gender
                inequality, and environmental sustainability.
              </p>

              <p>
                With chapters across educational institutions and a
                diverse array of projects, CDF serves as a catalyst
                for change, bridging gaps between resources and
                needs while cultivating a new generation of
                socially responsible leaders.
              </p>
            </div>

          </div>
        </section>

        {/* ===================================================
            CORE VALUES HEADER
        =================================================== */}

        <section className="mb-10 sm:mb-12">

          <div className="text-center">

            <span
              className="
                inline-block
                text-xs
                sm:text-sm
                font-semibold
                tracking-[0.2em]
                uppercase
                text-[#6f9900]
                mb-3
              "
            >
              What Drives Us
            </span>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-[#263238]
              "
            >
              Our Core Values
            </h2>

            <div
              className="
                flex
                justify-center
                items-center
                gap-2
                mt-4
              "
            >
              <span className="w-8 h-1 rounded-full bg-[#318BC1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8BC21F]" />
              <span className="w-12 h-1 rounded-full bg-[#8BC21F]" />
            </div>

          </div>

        </section>

        {/* ===================================================
            CORE VALUES + IMAGE
        =================================================== */}

        <section
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
            items-stretch
            max-w-6xl
            mx-auto
          "
        >

          {/* =================================================
              VALUES
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-4
              sm:gap-5
            "
          >

            {coreValues.map((value, index) => {

              const Icon = value.icon;

              const isBlue = value.color === 'blue';

              return (
                <div
                  key={value.title}
                  className="
                    group
                    relative
                    flex
                    items-start
                    gap-4
                    sm:gap-5
                    p-5
                    sm:p-6
                    rounded-2xl
                    bg-white/75
                    backdrop-blur-xl
                    border
                    border-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.09)]
                  "
                >

                  {/* Number */}

                  <div
                    className={`
                      absolute
                      top-4
                      right-5
                      text-xs
                      font-bold
                      ${
                        isBlue
                          ? 'text-[#318BC1]/35'
                          : 'text-[#8BC21F]/45'
                      }
                    `}
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <div
                    className={`
                      flex
                      items-center
                      justify-center
                      shrink-0
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-2xl
                      transition-all
                      duration-300
                      group-hover:scale-105
                      ${
                        isBlue
                          ? 'bg-[#318BC1]/12 text-[#318BC1] group-hover:bg-[#318BC1] group-hover:text-white'
                          : 'bg-[#8BC21F]/15 text-[#6f9900] group-hover:bg-[#8BC21F] group-hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="pr-6">

                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-[#263238]
                        mb-1.5
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        leading-6
                        text-gray-600
                      "
                    >
                      {value.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

          {/* =================================================
              IMAGE CARD
          ================================================= */}

          <div
            className="
              group
              relative
              min-h-[320px]
              sm:min-h-[400px]
              lg:min-h-full
              overflow-hidden
              rounded-3xl
              bg-white
              border
              border-white
              shadow-[0_15px_45px_rgba(0,0,0,0.09)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.13)]
            "
          >

            <img
              src="/images/about/1.jpg"
              alt="Connecting Dreams Foundation"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/10
                to-transparent
              "
            />

            {/* Image content */}

            <div
              className="
                absolute
                left-5
                right-5
                bottom-5
                sm:left-7
                sm:right-7
                sm:bottom-7
              "
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  text-xs
                  font-semibold
                  text-[#5f8d00]
                  mb-3
                "
              >
                <span className="w-2 h-2 rounded-full bg-[#8BC21F]" />
                Creating Impact
              </div>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Turning Dreams
                <span className="block">
                  Into Action
                </span>
              </h3>

            </div>

          </div>

        </section>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <section className="mt-16 sm:mt-24">

          <div
            className="
              relative
              overflow-hidden
              max-w-5xl
              mx-auto
              rounded-3xl
              bg-[#263238]
              px-6
              py-10
              sm:px-10
              sm:py-12
              md:px-14
              text-center
              shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            "
          >

            {/* Green glow */}

            <div
              className="
                absolute
                -top-20
                -right-20
                w-56
                h-56
                rounded-full
                bg-[#8BC21F]/20
                blur-3xl
              "
            />

            {/* Blue glow */}

            <div
              className="
                absolute
                -bottom-24
                -left-20
                w-64
                h-64
                rounded-full
                bg-[#318BC1]/20
                blur-3xl
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex
                  justify-center
                  mb-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-2xl
                    bg-[#8BC21F]
                    text-white
                    shadow-[0_8px_25px_rgba(139,194,31,0.25)]
                  "
                >
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                Building a Better Tomorrow
              </h2>

              <p
                className="
                  max-w-2xl
                  mx-auto
                  text-sm
                  sm:text-base
                  leading-7
                  text-gray-300
                "
              >
                Together, we empower young changemakers to
                transform ideas into meaningful action and create
                lasting social impact.
              </p>

              <div
                className="
                  flex
                  justify-center
                  items-center
                  gap-2
                  mt-7
                "
              >
                <span className="w-8 h-1 rounded-full bg-[#318BC1]" />
                <span className="w-3 h-3 rounded-full bg-[#8BC21F]" />
                <span className="w-12 h-1 rounded-full bg-[#8BC21F]" />
              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            BOTTOM DECORATIVE LINE
        =================================================== */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            mt-14
            sm:mt-16
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