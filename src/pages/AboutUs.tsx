import React from 'react';

const teamMembers = [
  {
    name: "Yuvraj Bhardwaj",
    position: "Co- President",
    image: "/images/team/9.png",
    linkedin: "https://www.linkedin.com/in/yuvrajbhardwaj27/",
    email: "mailto:yuvrajexcelhere@gmail.com"
  },
  {
    name: "Medhansh Singh",
    position: "Co-President",
    image: "/images/team/10.png",
    linkedin: "https://www.linkedin.com/in/medhansh-singh-3a9842315/",
    email: "mailto:medhansh318@gmail.com"
  },
  {
    name: "Paras",
    position: "General Secretary",
    image: "/images/team/3.jpg",
    linkedin: "https://www.linkedin.com/in/paras-jain-02474124b",
    email: "mailto:parasjain3048@gmail.com"
  },
  {
    name: "Aizah",
    position: "Head of Marketing Operations",
    image: "/images/team/4.jpg",
    linkedin: "https://www.linkedin.com/in/aizah-tabassum-689695307",
    email: "mailto:aizahtabassum26@gmail.com"
  },
  {
    name: "Ritesh",
    position: "Associate",
    image: "/images/team/5.jpg",
    linkedin: "https://www.linkedin.com/in/ritesh-kumar-410377299",
    email: "mailto:ritesh90428@gmail.com"
  },
  {
    name: "Joydev",
    position: "Senior Analyst",
    image: "/images/team/6.jpg",
    linkedin: "https://www.linkedin.com/in/joydev-%E2%80%8E-a639b328a/",
    email: "mailto:joydevrockstar@gmail.com"
  },
  {
    name: "Yuvraj",
    position: "Senior Analyst",
    image: "/images/team/7.jpg",
    linkedin: "https://www.linkedin.com/in/yuvraj-kampani-79847b295",
    email: "mailto:yuvrajkampani16@gmail.com"
  },

  // New members
  {
    name: "Name",
    position: "Position",
    image: "/images/team/8.jpg",
    linkedin: "#",
    email: "mailto:example@gmail.com"
  },
  {
    name: "Name",
    position: "Position",
    image: "/images/team/9.jpg",
    linkedin: "#",
    email: "mailto:example@gmail.com"
  },
  {
    name: "Name",
    position: "Position",
    image: "/images/team/10.jpg",
    linkedin: "#",
    email: "mailto:example@gmail.com"
  }
];

export default function AboutUs() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7f7f5]">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none opacity-40">

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


      {/* Blue decorative shape */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-180px]
          w-[500px]
          h-[360px]
          md:w-[650px]
          md:h-[450px]
          bg-[#318bc1]
          rotate-[10deg]
          rounded-[35%_5%_30%_10%]
          opacity-90
          pointer-events-none
        "
      />

      {/* Green decorative shape */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-[-180px]
          w-[500px]
          h-[360px]
          md:w-[650px]
          md:h-[450px]
          bg-[#8bc21f]
          rotate-[-8deg]
          rounded-[10%_35%_5%_30%]
          opacity-90
          pointer-events-none
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full px-5 md:px-8 pt-24 pb-24">

        <div className="max-w-7xl mx-auto">


          {/* =================================================
              MEET OUR TEAM
          ================================================= */}

          <section className="mb-28">

            {/* Heading */}

            <div className="text-center mb-14">

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-gray-900
                  tracking-tight
                "
              >
                Meet Our Team
              </h1>

              <div
                className="
                  w-20
                  h-1
                  bg-[#5c438c]
                  rounded-full
                  mx-auto
                  mt-5
                "
              />

              <p
                className="
                  mt-5
                  text-gray-600
                  text-lg
                  max-w-2xl
                  mx-auto
                "
              >
                Meet the passionate individuals working together
                to create meaningful change through CDF MAC Chapter.
              </p>

            </div>


            {/* =================================================
                ROW 1 — 2 CARDS
            ================================================= */}

            <div className="flex justify-center gap-7 mb-7">

              {teamMembers.slice(0, 2).map((member, index) => (

                <TeamCard
                  key={index}
                  member={member}
                  size="large"
                />

              ))}

            </div>


            {/* =================================================
                ROW 2 — 3 CARDS
            ================================================= */}

            <div className="flex justify-center gap-7 mb-7">

              {teamMembers.slice(2, 5).map((member, index) => (

                <TeamCard
                  key={index}
                  member={member}
                  size="medium"
                />

              ))}

            </div>


            {/* =================================================
                ROW 3 — 5 CARDS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-5
              "
            >

              {teamMembers.slice(5, 10).map((member, index) => (

                <TeamCard
                  key={index}
                  member={member}
                  size="small"
                />

              ))}

            </div>

          </section>


          {/* =================================================
              ABOUT OUR COLLEGE
          ================================================= */}

          <section>

            {/* Heading */}

            <div className="text-center mb-12">

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  text-gray-900
                "
              >
                About Our College
              </h2>

              <div
                className="
                  w-20
                  h-1
                  bg-[#5c438c]
                  rounded-full
                  mx-auto
                  mt-5
                "
              />

            </div>


            {/* College Card */}

            <div
              className="
                w-full
                bg-white
                rounded-3xl
                overflow-hidden

                shadow-[0_15px_50px_rgba(0,0,0,0.10)]

                border
                border-gray-100

                flex
                flex-col
                lg:flex-row

                min-h-[600px]

                transition-all
                duration-500

                hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
              "
            >

              {/* College Image */}

              <div
                className="
                  relative
                  w-full
                  lg:w-1/2
                  h-[350px]
                  lg:h-auto
                  min-h-[350px]
                  overflow-hidden
                "
              >

                <img
                  src="/images/college/1.jpg"
                  alt="Maharaja Agrasen College Campus"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/20
                    to-transparent
                  "
                />

              </div>


              {/* College Content */}

              <div
                className="
                  w-full
                  lg:w-1/2

                  flex
                  flex-col
                  justify-center

                  px-8
                  md:px-12
                  lg:px-16

                  py-12
                "
              >

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#5c438c]
                    mb-4
                  "
                >
                  Maharaja Agrasen College
                </span>


                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-gray-900
                    leading-tight
                    mb-7
                  "
                >
                  A Place to Learn,
                  <br />
                  Grow & Create Impact
                </h3>


                <div className="space-y-5">

                  <p
                    className="
                      text-gray-600
                      text-lg
                      leading-relaxed
                    "
                  >
                    Maharaja Agrasen College, established in 1994,
                    is a constituent college of the University of
                    Delhi. The college is committed to providing
                    quality education and fostering academic
                    excellence.
                  </p>


                  <p
                    className="
                      text-gray-600
                      text-lg
                      leading-relaxed
                    "
                  >
                    Our institution takes pride in its diverse
                    student body and dedicated faculty members who
                    work together to create an enriching learning
                    environment.
                  </p>


                  <p
                    className="
                      text-gray-600
                      text-lg
                      leading-relaxed
                    "
                  >
                    The college offers various undergraduate
                    programs in Science, Commerce, and Humanities.
                    We focus on holistic development through
                    academic pursuits, extra-curricular activities,
                    and community engagement initiatives.
                  </p>

                </div>


                {/* Decorative line */}

                <div className="mt-8 flex items-center gap-3">

                  <div className="w-12 h-1 rounded-full bg-[#318bc1]" />

                  <div className="w-3 h-3 rounded-full bg-[#8bc21f]" />

                  <div className="w-20 h-1 rounded-full bg-[#5c438c]" />

                </div>

              </div>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   TEAM CARD COMPONENT
============================================================ */

function TeamCard({
  member,
  size
}: {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    email: string;
  };
  size: "large" | "medium" | "small";
}) {

  const cardWidth =
    size === "large"
      ? "w-[310px] md:w-[330px]"
      : size === "medium"
        ? "w-[280px] md:w-[290px]"
        : "w-[210px] md:w-[220px]";

  const imageHeight =
    size === "large"
      ? "h-[280px]"
      : size === "medium"
        ? "h-[240px]"
        : "h-[190px]";


  return (
    <div
      className={`
        ${cardWidth}

        bg-white
        rounded-2xl
        overflow-hidden

        border
        border-gray-100

        shadow-[0_5px_20px_rgba(0,0,0,0.07)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-3
        hover:scale-[1.035]

        hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]

        group
      `}
    >

      {/* ================================================
          IMAGE
      ================================================= */}

      <div
        className={`
          ${imageHeight}
          w-full
          overflow-hidden
          relative
        `}
      >

        <img
          src={member.image}
          alt={member.name}
          className="
            w-full
            h-full
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        {/* Hover overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            to-transparent

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-500
          "
        />

      </div>


      {/* ================================================
          DETAILS
      ================================================= */}

      <div
        className="
          text-center
          px-4
          py-5
        "
      >

        <h3
          className="
            text-lg
            md:text-xl
            font-bold
            text-gray-900
            mb-1
          "
        >
          {member.name}
        </h3>


        <p
          className="
            text-gray-600
            text-sm
            leading-snug

            min-h-[38px]

            flex
            items-center
            justify-center
          "
        >
          {member.position}
        </p>


        {/* ============================================
            LINKS
        ============================================= */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-3

            mt-4
            pt-3

            border-t
            border-gray-100
          "
        >

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm
              font-medium
              text-gray-600

              hover:text-[#5c438c]

              underline
              underline-offset-4
              decoration-gray-300
              hover:decoration-[#5c438c]

              transition-all
              duration-300
            "
          >
            LinkedIn
          </a>


          <span className="text-gray-300">
            |
          </span>


          <a
            href={member.email}
            className="
              text-sm
              font-medium
              text-gray-600

              hover:text-[#5c438c]

              underline
              underline-offset-4
              decoration-gray-300
              hover:decoration-[#5c438c]

              transition-all
              duration-300
            "
          >
            Mail
          </a>

        </div>

      </div>

    </div>
  );
}