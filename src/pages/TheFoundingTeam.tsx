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
    {
      name: "Abhishek Maurya",
      position: "Senior Analyst",
      image: "/images/team/8.jpeg",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-maurya-998b712a6/",
      email: "mailto:mgs2abhishek@gmail.com"
    }
  ]
};

export default function TheFoundingTeam() {
  return (
    <section className="relative z-10 w-full bg-white py-20 px-6 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="text-center mb-16">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            tracking-tight
          ">
            Meet Our Founding Team
          </h2>

          {/* Heading underline */}
          <div className="
            w-20
            h-1
            bg-[#5c438c]
            rounded-full
            mx-auto
            mt-5
          " />

          <p className="
            text-gray-600
            text-lg
            mt-5
            max-w-2xl
            mx-auto
          ">
            Meet the team driving the vision, leadership, and growth of
            CDF MAC Chapter.
          </p>

        </div>


        {/* =====================================================
            FIRST ROW
        ====================================================== */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-12
          md:gap-16
          mb-20
        ">

          {teamMembers.row1.map((member, index) => (

            <div
              key={index}
              className="
                text-center
                w-52
                group
              "
            >

              {/* Profile Image */}
              <div className="
                w-40
                h-40
                mx-auto
                mb-5
                overflow-hidden
                rounded-full
                shadow-lg
                transition-all
                duration-300
                group-hover:shadow-xl
                group-hover:scale-105
              ">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* Name */}
              <h3 className="
                text-xl
                font-semibold
                text-gray-900
                mb-1
              ">
                {member.name}
              </h3>


              {/* Position */}
              <p className="
                text-gray-600
                mb-4
                min-h-[24px]
              ">
                {member.position}
              </p>


              {/* Social Links */}
              <div className="
                flex
                justify-center
                gap-4
              ">

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="
                    text-gray-500
                    hover:text-[#5c438c]
                    transition-colors
                    duration-300
                  "
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={member.email}
                  aria-label={`Email ${member.name}`}
                  className="
                    text-gray-500
                    hover:text-[#5c438c]
                    transition-colors
                    duration-300
                  "
                >
                  <Mail className="w-5 h-5" />
                </a>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            SECOND ROW
        ====================================================== */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-12
          md:gap-16
        ">

          {teamMembers.row2.map((member, index) => (

            <div
              key={index}
              className="
                text-center
                w-52
                group
              "
            >

              {/* Profile Image */}
              <div className="
                w-40
                h-40
                mx-auto
                mb-5
                overflow-hidden
                rounded-full
                shadow-lg
                transition-all
                duration-300
                group-hover:shadow-xl
                group-hover:scale-105
              ">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>


              {/* Name */}
              <h3 className="
                text-xl
                font-semibold
                text-gray-900
                mb-1
              ">
                {member.name}
              </h3>


              {/* Position */}
              <p className="
                text-gray-600
                mb-4
                min-h-[24px]
              ">
                {member.position}
              </p>


              {/* Social Links */}
              <div className="
                flex
                justify-center
                gap-4
              ">

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="
                    text-gray-500
                    hover:text-[#5c438c]
                    transition-colors
                    duration-300
                  "
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={member.email}
                  aria-label={`Email ${member.name}`}
                  className="
                    text-gray-500
                    hover:text-[#5c438c]
                    transition-colors
                    duration-300
                  "
                >
                  <Mail className="w-5 h-5" />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}