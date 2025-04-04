import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = {
  row1: [
    {
      name: "Siddhant",
      position: "President",
      image: "/images/team/1.jpg",
      linkedin: "https://www.linkedin.com/in/siddhant-singh-49a84a292",
      email: "mailto:siddhantsinghw10@gmail.com"
    },
    {
      name: "Pratik",
      position: "Vice President",
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
    }
  ]
};

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      {/* About Our College Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold text-black text-center mb-12">About Our College</h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed">
              Maharaja Agrasen College, established in 1994, is a constituent college of the University of Delhi. The college is committed to providing quality education and fostering academic excellence. Our institution takes pride in its diverse student body and dedicated faculty members who work together to create an enriching learning environment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              The college offers various undergraduate programs in Science, Commerce, and Humanities. We focus on holistic development through academic pursuits, extra-curricular activities, and community engagement initiatives.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/images/college/1.jpg"
              alt="College Campus"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-4xl font-bold text-black text-center mb-16">Meet Our Team</h2>
        
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {teamMembers.row1.map((member, index) => (
            <div key={index} className="text-center w-48">
              <div className="w-40 h-40 mx-auto mb-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.position}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} className="text-gray-600 hover:text-gray-800">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.email} className="text-gray-600 hover:text-gray-800">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.row2.map((member, index) => (
            <div key={index} className="text-center w-48">
              <div className="w-40 h-40 mx-auto mb-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.position}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} className="text-gray-600 hover:text-gray-800">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.email} className="text-gray-600 hover:text-gray-800">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
