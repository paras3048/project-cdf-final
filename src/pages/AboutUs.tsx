{/* =================================================
    ABOUT OUR COLLEGE
================================================= */}

<section className="mt-20 sm:mt-24 md:mt-28 px-2 sm:px-4">

  {/* Heading */}

  <div className="text-center mb-10 sm:mb-12 md:mb-14">

    <h2
      className="
        text-3xl
        sm:text-4xl
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
        text-gray-600
        text-base
        sm:text-lg
        leading-relaxed
        max-w-2xl
        mx-auto
        px-3
      "
    >
      The institution that nurtured the community, ideas,
      and people behind CDF MAC Chapter.
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
      rounded-xl
      sm:rounded-2xl
      overflow-hidden

      border
      border-gray-100

      shadow-[0_5px_20px_rgba(0,0,0,0.07)]

      transition-all
      duration-500
      ease-out

      hover:-translate-y-2
      sm:hover:-translate-y-3
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.16)]
    "
  >

    {/* Top Purple Accent */}

    <div
      className="
        absolute
        top-0
        left-0
        right-0
        h-1.5
        sm:h-2
        bg-[#5c438c]
        z-20
      "
    />


    {/* =================================================
        COLLEGE IMAGE
    ================================================= */}

    <div
      className="
        relative
        w-full
        h-[260px]
        xs:h-[300px]
        sm:h-[350px]
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


      {/* Image Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/15
          to-transparent
          opacity-70
          group-hover:opacity-50
          transition-opacity
          duration-500
        "
      />


      {/* College Name */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
          sm:p-7
          md:p-10
        "
      >

        <p
          className="
            text-white
            text-xs
            sm:text-sm
            md:text-base
            font-semibold
            uppercase
            tracking-[0.15em]
            sm:tracking-[0.2em]
            mb-1.5
            sm:mb-2
          "
        >
          University of Delhi
        </p>

        <h3
          className="
            text-white
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            leading-tight
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
        px-5
        py-6
        sm:px-7
        sm:py-8
        md:px-10
        md:py-10
      "
    >

      <div className="max-w-5xl mx-auto">

        {/* Small Heading */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            mb-5
            sm:mb-6
          "
        >

          <span
            className="
              w-7
              sm:w-10
              h-1
              rounded-full
              bg-[#318bc1]
              flex-shrink-0
            "
          />

          <span
            className="
              w-2.5
              sm:w-3
              h-2.5
              sm:h-3
              rounded-full
              bg-[#8bc21f]
              flex-shrink-0
            "
          />

          <span
            className="
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
              sm:tracking-[0.18em]
              text-[#5c438c]
            "
          >
            About the Institution
          </span>

        </div>


        {/* =================================================
            TEXT CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            md:gap-7
          "
        >

          <p
            className="
              text-gray-600
              text-base
              sm:text-lg
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
              text-base
              sm:text-lg
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
            mt-5
            sm:mt-7
            pt-5
            sm:pt-7
            border-t
            border-gray-100
          "
        >

          <p
            className="
              text-gray-600
              text-base
              sm:text-lg
              leading-relaxed
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
            BOTTOM DECORATION
        ================================================= */}

        <div
          className="
            mt-6
            sm:mt-8
            flex
            items-center
            gap-2
            sm:gap-3
          "
        >

          <div
            className="
              w-8
              sm:w-12
              h-1
              rounded-full
              bg-[#318bc1]
            "
          />

          <div
            className="
              w-2.5
              sm:w-3
              h-2.5
              sm:h-3
              rounded-full
              bg-[#8bc21f]
            "
          />

          <div
            className="
              w-12
              sm:w-20
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