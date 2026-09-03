{/* =================================================
    ABOUT OUR COLLEGE
================================================= */}

<section className="mt-28">

  {/* Heading */}

  <div className="text-center mb-14">

    <h2
      className="
        text-4xl
        md:text-5xl
        font-bold
        text-gray-900
        tracking-tight
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

    <p
      className="
        mt-5
        text-gray-600
        text-lg
        max-w-2xl
        mx-auto
        leading-relaxed
      "
    >
      The institution that nurtured the community, ideas, and
      people behind CDF MAC Chapter.
    </p>

  </div>


  {/* =================================================
      COLLEGE CARD
  ================================================= */}

  <div
    className="
      group
      relative
      w-full

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
      hover:scale-[1.015]

      hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]
    "
  >

    {/* =================================================
        TOP ACCENT
    ================================================= */}

    <div
      className="
        absolute
        top-0
        left-0
        right-0
        h-2
        bg-[#5c438c]
        z-20
      "
    />


    {/* =================================================
        IMAGE
    ================================================= */}

    <div
      className="
        relative
        w-full
        h-[350px]
        md:h-[450px]
        overflow-hidden
      "
    >

      <img
        src="/images/college/1.jpg"
        alt="Maharaja Agrasen College Campus"
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
          from-black/45
          via-black/5
          to-transparent

          opacity-70
          group-hover:opacity-50

          transition-opacity
          duration-500
        "
      />


      {/* College name over image */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          p-7
          md:p-10
        "
      >

        <p
          className="
            text-white
            text-sm
            md:text-base
            font-semibold
            uppercase
            tracking-[0.2em]
            mb-2
          "
        >
          University of Delhi
        </p>

        <h3
          className="
            text-white
            text-3xl
            md:text-4xl
            font-bold
          "
        >
          Maharaja Agrasen College
        </h3>

      </div>

    </div>


    {/* =================================================
        CONTENT
    ================================================= */}

    <div
      className="
        px-7
        py-8
        md:px-10
        md:py-10
      "
    >

      <div className="max-w-5xl mx-auto">

        {/* Small heading */}

        <div
          className="
            flex
            items-center
            gap-3
            mb-6
          "
        >

          <span
            className="
              w-10
              h-1
              rounded-full
              bg-[#318bc1]
            "
          />

          <span
            className="
              w-3
              h-3
              rounded-full
              bg-[#8bc21f]
            "
          />

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5c438c]
            "
          >
            About the Institution
          </span>

        </div>


        {/* Main text */}

        <div className="grid md:grid-cols-2 gap-7">

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

        </div>


        {/* =================================================
            THIRD PARAGRAPH
        ================================================= */}

        <div
          className="
            mt-7
            pt-7
            border-t
            border-gray-100
          "
        >

          <p
            className="
              text-gray-600
              text-lg
              leading-relaxed
              max-w-4xl
            "
          >
            The college offers various undergraduate programs
            in Science, Commerce, and Humanities. We focus on
            holistic development through academic pursuits,
            extra-curricular activities, and community
            engagement initiatives.
          </p>

        </div>


        {/* =================================================
            BOTTOM DECORATIVE LINE
        ================================================= */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-12
              h-1
              rounded-full
              bg-[#318bc1]
            "
          />

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-[#8bc21f]
            "
          />

          <div
            className="
              w-20
              h-1
              rounded-full
              bg-[#5c438c]
            "
          />

        </div>

      </div>

    </div>

  </div>

</section>