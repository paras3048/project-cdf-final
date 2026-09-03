export default function TheFoundingTeam() {
  return (
    <>
      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-4xl font-bold text-black text-center mb-16">
          Meet Our Founding Team
        </h2>

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

              <h3 className="text-xl font-semibold text-black mb-1">
                {member.name}
              </h3>

              <p className="text-gray-600 mb-3">
                {member.position}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={member.email}
                  className="text-gray-600 hover:text-gray-800"
                >
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

              <h3 className="text-xl font-semibold text-black mb-1">
                {member.name}
              </h3>

              <p className="text-gray-600 mb-3">
                {member.position}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={member.email}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}