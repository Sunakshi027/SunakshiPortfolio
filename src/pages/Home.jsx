import img1 from "../assets/img.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const sectionRef = useRef(null);

  // 4 image pieces
  const imagePieceRefs = useRef([]);

  const imageContainerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /* =========================
         CONTENT ANIMATION
      ========================== */

      tl.from(".hero-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      });

      /* =========================
         IMAGE CONTAINER
      ========================== */

      tl.from(
        imageContainerRef.current,
        {
          opacity: 0,
          scale: 0.92,
          duration: 0.5,
        },
        "-=0.4"
      );

      /* =========================
         4 PIECE IMAGE JOIN
      ========================== */

      tl.from(
        imagePieceRefs.current,
        {
          opacity: 0,
          scale: 1.15,
          duration: 1.4,
          stagger: 0.08,

          // Each piece comes from different direction
          x: (index) => {
            if (index === 0 || index === 2) {
              return -180;
            }
            return 180;
          },

          y: (index) => {
            if (index === 0 || index === 1) {
              return -180;
            }
            return 180;
          },

          rotation: (index) => {
            if (index === 0) return -8;
            if (index === 1) return 8;
            if (index === 2) return 8;
            return -8;
          },

          ease: "power4.out",
        },
        "-=0.2"
      );

      /* =========================
         IMAGE FLOAT
      ========================== */

      gsap.to(imageContainerRef.current, {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         BLUE GLOW
      ========================== */

      gsap.to(glowRef.current, {
        scale: 1.12,
        opacity: 0.5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         IMAGE OUTER RING
      ========================== */

      gsap.to(".hero-image-ring", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      /* =========================
         SECOND RING
      ========================== */

      gsap.to(".hero-image-ring-inner", {
        rotation: -360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      /* =========================
         FLOATING DOT
      ========================== */

      gsap.to(".hero-floating-dot", {
        y: -12,
        x: 5,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         CODE BOX FLOAT
      ========================== */

      gsap.to(".hero-code-box", {
        y: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         EXPERIENCE BADGE
      ========================== */

      gsap.to(".hero-experience", {
        y: -7,
        duration: 2.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-6
        pt-24
        md:pt-28
        overflow-hidden
        bg-[#05070B]
      "
    >
      {/* =================================
          BACKGROUND BLUE GLOW
      ================================= */}

      <div
        className="
          absolute
          top-[-180px]
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#172554]/30
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          left-[-180px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#1E3A8A]/20
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[35%]
          left-[48%]
          w-[180px]
          h-[180px]
          rounded-full
          bg-[#3154A5]/10
          blur-[100px]
          pointer-events-none
        "
      />

      {/* =================================
          MAIN CONTAINER
      ================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          mx-auto
          grid
          md:grid-cols-2
          gap-14
          lg:gap-20
          items-center
        "
      >
        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div>
          {/* Label */}

          <p
            className="
              hero-item
              uppercase
              tracking-[4px]
              text-[#5274C4]
              mb-5
              text-sm
              font-medium
            "
          >
            Frontend Developer
          </p>

          {/* Heading */}

          <h1
            className="
              hero-item
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-[#F8FAFC]
              leading-[1.05]
              mb-6
            "
          >
            Hi, I'm{" "}
            <span className="text-[#5274C4]">Sunakshi</span>
          </h1>

          {/* Role */}

          <h2
            className="
              hero-item
              text-xl
              md:text-2xl
              text-[#CBD5E1]
              mb-6
            "
          >
            React.js & MERN Stack Developer
          </h2>

          {/* Description */}

          <p
            className="
              hero-item
              max-w-xl
              text-[#8F98A8]
              leading-relaxed
              text-base
              md:text-lg
              mb-8
            "
          >
            Frontend Developer with 1 year of experience building responsive
            and user-friendly web applications. Skilled in React.js,
            JavaScript, Next.js, Tailwind CSS and REST API integration, with
            working knowledge of Node.js, Express.js and MongoDB.
          </p>

          {/* =================================
              STATS
          ================================= */}

          <div
            className="
              hero-item
              flex
              flex-wrap
              gap-6
              mb-9
            "
          >
            <div>
              <span
                className="
                  block
                  text-xl
                  font-semibold
                  text-[#5274C4]
                "
              >
                1+
              </span>

              <span className="text-sm text-[#737B89]">
                Years Experience
              </span>
            </div>

            <div className="w-px bg-white/10" />

            <div>
              <span
                className="
                  block
                  text-xl
                  font-semibold
                  text-[#5274C4]
                "
              >
                10+
              </span>

              <span className="text-sm text-[#737B89]">Projects</span>
            </div>

            <div className="w-px bg-white/10" />

            <div>
              <span
                className="
                  block
                  text-xl
                  font-semibold
                  text-[#5274C4]
                "
              >
                MERN
              </span>

              <span className="text-sm text-[#737B89]">Stack</span>
            </div>
          </div>

          {/* =================================
              BUTTONS
          ================================= */}

          <div
            className="
              hero-item
              flex
              flex-wrap
              gap-4
            "
          >
            {/* View Projects */}

            <a
              href="#projects"
              className="
                px-7
                py-3
                rounded-md
                bg-[#3154A5]
                text-white
                font-medium
                border
                border-[#5274C4]/30
                shadow-[0_0_25px_rgba(49,84,165,0.15)]
                hover:bg-[#4169C1]
                hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(49,84,165,0.25)]
                transition-all
                duration-300
              "
            >
              View Projects
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                px-7
                py-3
                rounded-md
                border
                border-[#3154A5]/60
                text-[#B8C7E8]
                font-medium
                bg-[#0A0F1C]/60
                hover:bg-[#172554]
                hover:text-white
                hover:border-[#5274C4]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* =================================
            RIGHT IMAGE
        ================================= */}

        <div
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              relative
              w-72
              md:w-80
              lg:w-[420px]
              h-[460px]
            "
          >
            {/* =================================
                BLUE GLOW
            ================================= */}

            <div
              ref={glowRef}
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[320px]
                h-[320px]
                rounded-full
                bg-[#3154A5]/20
                blur-[90px]
                opacity-40
              "
            />

            {/* =================================
                OUTER ROTATING RING
            ================================= */}

            <div
              className="
                hero-image-ring
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[390px]
                h-[390px]
                rounded-full
                border
                border-[#3154A5]/20
                border-dashed
              "
            />

            {/* =================================
                INNER ROTATING RING
            ================================= */}

            <div
              className="
                hero-image-ring-inner
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[345px]
                h-[345px]
                rounded-full
                border
                border-[#5274C4]/10
              "
            />

            {/* =================================
                SMALL ORBIT DOT
            ================================= */}

            <div
              className="
                absolute
                top-[38px]
                right-[25px]
                w-3
                h-3
                rounded-full
                bg-[#5274C4]
                shadow-[0_0_20px_rgba(82,116,196,0.8)]
                z-30
                hero-floating-dot
              "
            />

            {/* =================================
                MAIN IMAGE
            ================================= */}

            <div
              ref={imageContainerRef}
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-64
                md:w-72
                lg:w-80
                aspect-[4/5]
                overflow-hidden
                rounded-[40px]
                bg-[#0B0F18]
                border
                border-[#3154A5]/50
                shadow-[0_25px_80px_rgba(15,23,42,0.8)]
                rotate-3
                z-10
              "
            >
              {/* =================================
                  4 PIECE IMAGE
              ================================= */}

              {/* TOP LEFT */}

              <div
                ref={(el) => (imagePieceRefs.current[0] = el)}
                className="
                  absolute
                  top-0
                  left-0
                  w-1/2
                  h-1/2
                  overflow-hidden
                  z-10
                "
              >
                <img
                  src={img1}
                  alt="Sunakshi"
                  className="
                    absolute
                    top-0
                    left-0
                    w-[200%]
                    h-[200%]
                    max-w-none
                    object-cover
                  "
                />
              </div>

              {/* TOP RIGHT */}

              <div
                ref={(el) => (imagePieceRefs.current[1] = el)}
                className="
                  absolute
                  top-0
                  right-0
                  w-1/2
                  h-1/2
                  overflow-hidden
                  z-10
                "
              >
                <img
                  src={img1}
                  alt="Sunakshi"
                  className="
                    absolute
                    top-0
                    right-0
                    w-[200%]
                    h-[200%]
                    max-w-none
                    object-cover
                  "
                />
              </div>

              {/* BOTTOM LEFT */}

              <div
                ref={(el) => (imagePieceRefs.current[2] = el)}
                className="
                  absolute
                  bottom-0
                  left-0
                  w-1/2
                  h-1/2
                  overflow-hidden
                  z-10
                "
              >
                <img
                  src={img1}
                  alt="Sunakshi"
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-[200%]
                    h-[200%]
                    max-w-none
                    object-cover
                  "
                />
              </div>

              {/* BOTTOM RIGHT */}

              <div
                ref={(el) => (imagePieceRefs.current[3] = el)}
                className="
                  absolute
                  bottom-0
                  right-0
                  w-1/2
                  h-1/2
                  overflow-hidden
                  z-10
                "
              >
                <img
                  src={img1}
                  alt="Sunakshi"
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-[200%]
                    h-[200%]
                    max-w-none
                    object-cover
                  "
                />
              </div>

              {/* =================================
                  IMAGE DARK OVERLAY
              ================================= */}

              <div
                className="
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-t
                  from-[#05070B]/60
                  via-transparent
                  to-[#3154A5]/10
                  pointer-events-none
                "
              />

              {/* =================================
                  CENTER VERTICAL LINE
              ================================= */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-full
                  w-px
                  bg-white/10
                  z-30
                "
              />

              {/* =================================
                  CENTER HORIZONTAL LINE
              ================================= */}

              <div
                className="
                  absolute
                  top-1/2
                  left-0
                  -translate-y-1/2
                  w-full
                  h-px
                  bg-white/10
                  z-30
                "
              />

              {/* =================================
                  TOP IMAGE SHINE
              ================================= */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-24
                  bg-gradient-to-b
                  from-[#3154A5]/15
                  to-transparent
                  z-30
                  pointer-events-none
                "
              />
            </div>

            {/* =================================
                TOP LEFT CORNER
            ================================= */}

            <div
              className="
                absolute
                top-[42px]
                left-[-2px]
                w-16
                h-16
                border-l
                border-t
                border-[#5274C4]/70
                z-20
              "
            />

            {/* =================================
                BOTTOM RIGHT CORNER
            ================================= */}

            <div
              className="
                absolute
                bottom-[45px]
                right-[-2px]
                w-16
                h-16
                border-r
                border-b
                border-[#5274C4]/70
                z-20
              "
            />

            {/* =================================
                FLOATING CODE BOX
            ================================= */}

            <div
              className="
                hero-code-box
                absolute
                bottom-[105px]
                left-[-5px]
                w-12
                h-12
                rounded-xl
                border
                border-[#3154A5]/40
                bg-[#0B0F18]/90
                backdrop-blur-md
                z-30
                flex
                items-center
                justify-center
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              "
            >
              <span
                className="
                  text-[#5274C4]
                  text-sm
                  font-mono
                "
              >
                {"</>"}
              </span>
            </div>

            {/* =================================
                EXPERIENCE BADGE
            ================================= */}

            <div
              className="
                hero-experience
                absolute
                bottom-[55px]
                right-[-12px]
                px-5
                py-3
                rounded-xl
                bg-[#080B12]/95
                border
                border-[#3154A5]/40
                backdrop-blur-xl
                shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                z-40
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#555E6D]
                  mb-1
                "
              >
                Experience
              </p>

              <p
                className="
                  text-xl
                  font-semibold
                  text-[#F8FAFC]
                "
              >
                1+ Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}