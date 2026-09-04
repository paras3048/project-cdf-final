import React from 'react';
import {
  Linkedin,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Users,
} from 'lucide-react';

const teamMembers = [
  {
    name: "Yuvraj Bhardwaj",
    position: "Co-President",
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
    name: "Adarsh Mishra",
    position: "General Secretary",
    image: "/images/team/11.png",
    linkedin: "https://www.linkedin.com/in/adarsh-mishra-360d/",
    email: "mailto:adarshmishramac@gmail.com"
  },
  {
    name: "Palak Kasana",
    position: "Head of Marketing Operations",
    image: "/images/team/12.jpg",
    linkedin: "https://www.linkedin.com/in/palak-kasana-435898275/",
    email: "mailto:palakkasanaworks@gmail.com"
  },
  {
    name: "Adaana Darjee",
    position: "Associate - Strategy",
    image: "/images/team/13.jpeg",
    linkedin: "https://www.linkedin.com/in/adaana-darjee-50523931b/",
    email: "mailto:adaanadarjee@gmail.com"
  },
  {
    name: "Manya Malhotra",
    position: "Associate - Marketing",
    image: "/images/team/14.jpeg",
    linkedin: "https://www.linkedin.com/in/manya-malhotra-a5b0a9252/",
    email: "mailto:manyamalhotra0706@gmail.com"
  },
  {
    name: "Krish Bansal",
    position: "Associate - Operations",
    image: "/images/team/15.jpeg",
    linkedin: "https://www.linkedin.com/in/krish-bansal-739063333/",
    email: "mailto:bansal27krish.org@gmail.com"
  },
  {
    name: "Anshu Singh",
    position: "Associate - Production",
    image: "/images/team/16.jpg",
    linkedin: "https://www.linkedin.com/in/anshu-singh-bb2086332/",
    email: "mailto:anshusin089@gmail.com"
  },
  {
    name: "Kushal Raj",
    position: "Analyst",
    image: "/images/team/17.jpg",
    linkedin: "https://www.linkedin.com/in/kushal-r-7a9653253/",
    email: "mailto:kushalraj.work@gmail.com"
  },
  {
    name: "Amey Makkar",
    position: "Analyst",
    image: "/images/team/18.jpg",
    linkedin: "https://www.linkedin.com/in/amey-makkar-8486a9346/",
    email: "mailto:ameymakkar187@gmail.com"
  }
];

export default function AboutUs() {
  return (
    <div className="relative w-full overflow-hidden bg-[#f7f8f5]">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      {/* Blue top-right shape */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-200px]
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
          left-[-220px]
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

      {/* Soft green glow */}
      <div
        className="
          absolute
          top-[35%]
          left-[5%]
          w-[300px]
          h-[250px]
          rounded-full
          bg-[#8BC21F]/7
          blur-3xl
          pointer-events-none
        "
      />

      {/* Soft blue glow */}
      <div
        className="
          absolute
          top-[55%]
          right-[0]
          w-[300px]
          h-[240px]
          rounded-full
          bg-[#318BC1]/6
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

            <path d="M-100 1250 C100 1150 250 1180 370 1310 C490 1440 590 1430 720 1310 C850 1190 990 1180 1120 1300 C1250 1420 1380 1400 1540 1270" />

            <path d="M-100 1295 C100 1195 250 1225 370 1355 C490 1485 590 1475 720 1355 C850 1235 990 1225 1120 1345 C1250 1465 1380 1445 1540 1315" />
          </g>
        </svg>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main
        className="
          relative
          z-10
          w-full
          px-4
          sm:px-6
          lg:px-8
          pt-28
          sm:pt-32
          pb-20
          sm:pb-24
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* =================================================
              TEAM HEADER
          ================================================= */}

          <section className="mb-16 sm:mb-24">

            <div className="text-center mb-12 sm:mb-16">

              {/* Small badge */}

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
                <Users className="w-4 h-4 text-[#6f9900]" />

                <span
                  className="
                    text-xs
                    sm:text-sm
                    font-semibold
                    tracking-wide
                    text-[#6f9900]
                  "
                >
                  THE PEOPLE BEHIND CDF MAC
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
                Meet Our Team
              </h1>

              {/* Accent */}

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
                Meet the passionate individuals working together
                to create meaningful change through CDF MAC Chapter.
              </p>

            </div>

            {/* =================================================
                ROW 1 — LEADERSHIP
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                lg:gap-8
                max-w-4xl
                mx-auto
                mb-6
                lg:mb-8
              "
            >
              {teamMembers.slice(0, 2).map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  variant="large"
                  index={index}
                />
              ))}
            </div>

            {/* =================================================
                ROW 2
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
                lg:gap-7
                max-w-5xl
                mx-auto
                mb-6
                lg:mb-8
              "
            >
              {teamMembers.slice(2, 5).map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  variant="medium"
                  index={index + 2}
                />
              ))}
            </div>

            {/* =================================================
                ROW 3
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                gap-5
                max-w-6xl
                mx-auto
              "
            >
              {teamMembers.slice(5, 10).map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  variant="small"
                  index={index + 5}
                />
              ))}
            </div>

          </section>

          {/* =================================================
              ABOUT COLLEGE
          ================================================= */}

          <section>

            {/* Heading */}

            <div className="text-center mb-10 sm:mb-12">

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
                <GraduationCap className="w-4 h-4 text-[#318BC1]" />

                <span
                  className="
                    text-xs
                    sm:text-sm
                    font-semibold
                    tracking-wide
                    text-[#318BC1]
                  "
                >
                  OUR INSTITUTION
                </span>
              </div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  text-[#263238]
                "
              >
                About Our College
              </h2>

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

            </div>

            {/* =================================================
                COLLEGE CARD
            ================================================= */}

            <div
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-3xl
                bg-white/80
                backdrop-blur-xl
                border
                border-white
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.13)]
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
                  z-20
                  bg-gradient-to-r
                  from-[#318BC1]
                  via-[#8BC21F]
                  to-[#8BC21F]
                "
              />

              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  min-h-[600px]
                "
              >

                {/* =================================================
                    COLLEGE IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    w-full
                    lg:w-1/2
                    min-h-[320px]
                    sm:min-h-[400px]
                    lg:min-h-[600px]
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
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/55
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Image badge */}

                  <div
                    className="
                      absolute
                      left-5
                      bottom-5
                      sm:left-7
                      sm:bottom-7
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      shadow-lg
                    "
                  >

                    <span
                      className="
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-[#8BC21F]
                      "
                    />

                    <span
                      className="
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-[#263238]
                      "
                    >
                      University of Delhi
                    </span>

                  </div>

                </div>

                {/* =================================================
                    COLLEGE CONTENT
                ================================================= */}

                <div
                  className="
                    w-full
                    lg:w-1/2
                    flex
                    flex-col
                    justify-center
                    px-6
                    sm:px-8
                    md:px-12
                    lg:px-14
                    xl:px-16
                    py-10
                    sm:py-12
                  "
                >

                  <span
                    className="
                      inline-flex
                      items-center
                      self-start
                      gap-2
                      text-xs
                      sm:text-sm
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#6f9900]
                      mb-4
                    "
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8BC21F]" />

                    Maharaja Agrasen College
                  </span>

                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      font-bold
                      text-[#263238]
                      leading-tight
                      mb-7
                    "
                  >
                    A Place to Learn,
                    <span className="block text-[#6f9900]">
                      Grow & Create Impact
                    </span>
                  </h3>

                  <div
                    className="
                      space-y-5
                      text-sm
                      sm:text-base
                      md:text-lg
                      leading-7
                      text-gray-600
                    "
                  >

                    <p>
                      Maharaja Agrasen College, established in 1994,
                      is a constituent college of the University of
                      Delhi. The college is committed to providing
                      quality education and fostering academic
                      excellence.
                    </p>

                    <p>
                      Our institution takes pride in its diverse
                      student body and dedicated faculty members who
                      work together to create an enriching learning
                      environment.
                    </p>

                    <p>
                      The college offers various undergraduate
                      programs in Science, Commerce, and Humanities.
                      We focus on holistic development through
                      academic pursuits, extra-curricular activities,
                      and community engagement initiatives.
                    </p>

                  </div>

                  {/* Decorative line */}

                  <div className="mt-8 flex items-center gap-3">

                    <div className="w-10 sm:w-12 h-1 rounded-full bg-[#318BC1]" />

                    <div className="w-3 h-3 rounded-full bg-[#8BC21F]" />

                    <div className="w-14 sm:w-20 h-1 rounded-full bg-[#8BC21F]" />

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              BOTTOM DECORATION
          ================================================= */}

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

        </div>

      </main>
    </div>
  );
}


/* ============================================================
   TEAM CARD
============================================================ */

function TeamCard({
  member,
  variant,
  index,
}: {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    email: string;
  };
  variant: "large" | "medium" | "small";
  index: number;
}) {

  const imageHeight =
    variant === "large"
      ? "h-[330px] sm:h-[360px]"
      : variant === "medium"
        ? "h-[290px] sm:h-[310px]"
        : "h-[270px] sm:h-[290px]";

  return (
    <article
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-3xl
        bg-white/85
        backdrop-blur-xl
        border
        border-white
        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_22px_55px_rgba(0,0,0,0.13)]
      "
    >

      {/* ======================================================
          CARD ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-1
          z-20
          bg-gradient-to-r
          from-[#318BC1]
          via-[#8BC21F]
          to-[#8BC21F]
          opacity-80
        "
      />

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div
        className={`
          ${imageHeight}
          relative
          w-full
          overflow-hidden
          bg-gray-100
        `}
      >

        <img
          src={member.image}
          alt={member.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.035]
          "
        />

        {/* Subtle image gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/35
            via-transparent
            to-transparent
            opacity-60
            group-hover:opacity-40
            transition-opacity
            duration-500
          "
        />

        {/* Member number */}

        <div
          className="
            absolute
            top-4
            right-4
            flex
            items-center
            justify-center
            w-9
            h-9
            rounded-full
            bg-white/85
            backdrop-blur-md
            shadow-sm
            text-xs
            font-bold
            text-[#6f9900]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

      </div>

      {/* ======================================================
          DETAILS
      ====================================================== */}

      <div className="relative px-5 sm:px-6 py-5 sm:py-6">

        <h3
          className="
            text-lg
            sm:text-xl
            font-bold
            text-[#263238]
            leading-tight
            transition-colors
            duration-300
            group-hover:text-[#6f9900]
          "
        >
          {member.name}
        </h3>

        <p
          className="
            mt-2
            min-h-[40px]
            flex
            items-center
            text-sm
            leading-5
            text-gray-500
          "
        >
          {member.position}
        </p>

        {/* ==================================================
            SOCIAL LINKS
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            mt-5
            pt-4
            border-t
            border-gray-100
          "
        >

          {/* LinkedIn */}

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="
              group/link
              flex
              items-center
              justify-center
              gap-2
              flex-1
              min-w-0
              px-3
              py-2.5
              rounded-xl
              bg-[#318BC1]/8
              text-[#318BC1]
              transition-all
              duration-300
              hover:bg-[#318BC1]
              hover:text-white
            "
          >

            <Linkedin className="w-4 h-4 shrink-0" />

            <span className="text-xs sm:text-sm font-semibold">
              LinkedIn
            </span>

            <ArrowUpRight
              className="
                w-3.5
                h-3.5
                shrink-0
                opacity-60
                transition-transform
                duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />

          </a>

          {/* Mail */}

          <a
            href={member.email}
            aria-label={`Email ${member.name}`}
            className="
              group/link
              flex
              items-center
              justify-center
              gap-2
              flex-1
              min-w-0
              px-3
              py-2.5
              rounded-xl
              bg-[#8BC21F]/10
              text-[#6f9900]
              transition-all
              duration-300
              hover:bg-[#8BC21F]
              hover:text-white
            "
          >

            <Mail className="w-4 h-4 shrink-0" />

            <span className="text-xs sm:text-sm font-semibold">
              Mail
            </span>

            <ArrowUpRight
              className="
                w-3.5
                h-3.5
                shrink-0
                opacity-60
                transition-transform
                duration-300
                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />

          </a>

        </div>

      </div>

    </article>
  );
}