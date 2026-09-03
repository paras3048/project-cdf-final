import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = {
  row1: [
    {
      name: "Siddhant",
      position: "Co-President",
      image: "/images/team/1.jpg",
      linkedin: "https://www.linkedin.com/in/siddhant-singh-49a84a292",
      email: "mailto:siddhantsinghw10@gmail.com"
    },
    {
      name: "Pratik",
      position: "Co-President",
      image: "/images/team/2.jpg",
      linkedin: "https://www.linkedin.com/in/pratik-mitra-450a69257",
      email: "mailto:pratik.mitra256@gmail.com"
    },
    {
      name: "Paras",
      position: "General Secretary",
      image: "/images/team/3.jpg",
      linkedin: "https://www.linkedin.com/in/paras-jain-02474124b",
      email: "mailto:parasjain3048@gmail.com"
    }
  ],

  row2: [
    {
      name: "Aizah",
      position: "Head of Marketing Operations",
      image: "/images/team/4.jpg",
      linkedin: "https://www.linkedin.com/in/aizah-tabassum-689695307",
      email: "mailto:aizahtabassum26@gmail.com"
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
    {
      name: "Abhishek Maurya",
      position: "Senior Analyst",
      image: "/images/team/8.jpeg",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-maurya-998b712a6/",
      email: "mailto:mgs2abhishek@gmail.com"
    },
    {
      name: "Ritesh",
      position: "Associate",
      image: "/images/team/5.jpg",
      linkedin: "https://www.linkedin.com/in/ritesh-kumar-410377299",
      email: "mailto:ritesh90428@gmail.com"
    }
  ]
};

export default function TheFoundingTeam() {
  return (
    <section
      className="
        relative
        z-10
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        py-20
        px-5
        md:px-8
      "
    >

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      {/* Contour / wave pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-60">

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 1500"
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

            <path d="M-120 1050 C80 950 240 980 360 1110 C480 1240 600 1230 720 1110 C840 990 1000 980 1130 1100 C1260 1220 1390 1200 1540 1070" />

            <path d="M-120 1095 C80 995 240 1025 360 1155 C480 1285 600 1275 720 1155 C840 1035 1000 1025 1130 1145 C1260 1265 1390 1245 1540 1115" />

            <path d="M-120 1140 C80 1040 240 1070 360 1200 C480 1330 600 1320 720 1200 C840 1080 1000 1070 1130 1190 C1260 1310 1390 1290 1540 1160" />

            <path d="M1200 500 C1280 430 1360 450 1440 520" />

            <path d="M1200 540 C1280 470 1360 490 1440 560" />

            <path d="M1200 580 C1280 510 1360 530 1440 600" />
          </g>
        </svg>

      </div>


      {/* =====================================================
          BLUE DECORATIVE SHAPE
      ====================================================== */}

      <div
        className="
          absolute
          -top-32
          -right-48
          w-[520px]
          h-[370px]
          md:w-[680px]
          md:h-[460px]
          bg-[#318bc1]
          rotate-[9deg]
          rounded-[35%_5%_30%_10%]
          opacity-95
          pointer-events-none
        "
      />


      {/* =====================================================
          GREEN DECORATIVE SHAPE
      ====================================================== */}

      <div
        className="
          absolute
          -bottom-48
          -left-48
          w-[540px]
          h-[380px]
          md:w-[700px]
          md:h-[480px]
          bg-[#8bc21f]
          rotate-[-8deg]
          rounded-[10%_35%_5%_30%]
          opacity-95
          pointer-events-none
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="text-center mb-16">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              tracking-tight
            "
          >
            Meet Our Founding Team
          </h2>


          {/* Underline */}

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


          {/* Past-tense subtitle */}

          <p
            className="
              text-gray-600
              text-lg
              mt-5
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Meet the team that drove the vision, leadership, and
            growth of CDF MAC Chapter.
          </p>

        </div>


        {/* =====================================================
            LEADERSHIP ROW — 3 CARDS
        ====================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-8
            md:gap-10
            mb-12
          "
        >

          {teamMembers.row1.map((member, index) => (

            <TeamCard
              key={index}
              member={member}
              variant="leadership"
            />

          ))}

        </div>


        {/* =====================================================
            TEAM ROW — 5 CARDS
        ====================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-5
            md:gap-6
          "
        >

          {teamMembers.row2.map((member, index) => (

            <TeamCard
              key={index}
              member={member}
              variant="team"
            />

          ))}

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   TEAM CARD
============================================================ */

function TeamCard({
  member,
  variant
}: {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    email: string;
  };
  variant: "leadership" | "team";
}) {

  const isLeadership = variant === "leadership";

  return (
    <div
      className={`
        group
        relative
        bg-white
        overflow-hidden

        border
        border-gray-200

        rounded-2xl

        shadow-[0_8px_25px_rgba(0,0,0,0.08)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-3
        hover:shadow-[0_22px_45px_rgba(0,0,0,0.16)]

        ${
          isLeadership
            ? "w-[290px] md:w-[310px]"
            : "w-[205px] md:w-[215px]"
        }
      `}
    >

      {/* =====================================================
          COLORED TOP ACCENT
      ====================================================== */}

      <div
        className={`
          absolute
          top-0
          left-0
          right-0
          h-2
          ${
            isLeadership
              ? "bg-[#5c438c]"
              : "bg-[#318bc1]"
          }
        `}
      />


      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className={`
          relative
          overflow-hidden

          ${
            isLeadership
              ? "h-[285px] mt-5 mx-5 rounded-xl"
              : "h-[190px] mt-5 mx-4 rounded-xl"
          }
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


        {/* Image overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-500
          "
        />

      </div>


      {/* =====================================================
          CARD DETAILS
      ====================================================== */}

      <div
        className={`
          text-center

          ${
            isLeadership
              ? "px-5 py-6"
              : "px-4 py-5"
          }
        `}
      >

        {/* Name */}

        <h3
          className={`
            font-bold
            text-gray-900

            ${
              isLeadership
                ? "text-2xl mb-1"
                : "text-lg mb-1"
            }
          `}
        >
          {member.name}
        </h3>


        {/* Position */}

        <p
          className={`
            text-[#5c438c]
            font-semibold

            ${
              isLeadership
                ? "text-base min-h-[25px]"
                : "text-sm min-h-[40px]"
            }

            flex
            items-center
            justify-center
          `}
        >
          {member.position}
        </p>


        {/* Decorative divider */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            my-4
          "
        >

          <span
            className="
              w-8
              h-[2px]
              rounded-full
              bg-[#5c438c]
            "
          />

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-[#8bc21f]
            "
          />

          <span
            className="
              w-8
              h-[2px]
              rounded-full
              bg-[#318bc1]
            "
          />

        </div>


        {/* =====================================================
            LINKS
        ====================================================== */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-3
            border-t
            border-gray-100
            pt-4
          "
        >

          {/* LinkedIn */}

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-1.5

              text-sm
              font-medium
              text-gray-600

              hover:text-[#5c438c]

              transition-all
              duration-300

              hover:-translate-y-0.5
            "
          >

            <Linkedin
              className="
                w-4
                h-4
              "
            />

            <span>
              LinkedIn
            </span>

          </a>


          {/* Separator */}

          <span
            className="
              h-5
              w-px
              bg-gray-300
            "
          />


          {/* Mail */}

          <a
            href={member.email}
            className="
              flex
              items-center
              gap-1.5

              text-sm
              font-medium
              text-gray-600

              hover:text-[#5c438c]

              transition-all
              duration-300

              hover:-translate-y-0.5
            "
          >

            <Mail
              className="
                w-4
                h-4
              "
            />

            <span>
              Mail
            </span>

          </a>

        </div>

      </div>

    </div>
  );
}