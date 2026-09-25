import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         BACKGROUND ORBS
      ========================== */

      gsap.to(".about-orb-1", {
        x: 100,
        y: 60,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-orb-2", {
        x: -90,
        y: -60,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-orb-3", {
        x: 70,
        y: -80,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         GRID
      ========================== */

      gsap.to(".grid-background", {
        backgroundPosition: "70px 70px",
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      /* =========================
         FLOATING DOTS
      ========================== */

      gsap.to(".floating-dot", {
        y: -18,
        opacity: 0.35,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
      });

      /* =========================
         CONTENT REVEAL
      ========================== */

      gsap.from(".about-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      /* =========================
         EXPERIENCE RING
      ========================== */

      gsap.to(".about-ring", {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      /* =========================
         EXPERIENCE CIRCLE
      ========================== */

      gsap.to(".experience-circle", {
        y: -10,
        scale: 1.04,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         EXPERIENCE GLOW
      ========================== */

      gsap.to(".experience-glow", {
        scale: 1.2,
        opacity: 0.65,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         TECH LABELS
      ========================== */

      gsap.to(".tech-label-react", {
        y: -9,
        x: 4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".tech-label-mern", {
        y: 9,
        x: -4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         INNER GLOW
      ========================== */

      gsap.to(".experience-inner-glow", {
        scale: 1.2,
        opacity: 0.5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         INFO CARDS
      ========================== */

      gsap.from(".about-info", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-info-wrapper",
          start: "top 85%",
        },
      });

      /* =========================
         EDUCATION
      ========================== */

      gsap.from(".education-item", {
        x: -25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-wrapper",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        text-white
        px-6
        py-20
        md:py-24
      "
    >
      {/* =========================
          GRID BACKGROUND
      ========================== */}

      <div
        className="
          grid-background
          absolute
          inset-0
          opacity-[0.07]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(#3154A5 1px, transparent 1px),
            linear-gradient(90deg, #3154A5 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* =========================
          DARK OVERLAY
      ========================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#05070B]
          via-transparent
          to-[#05070B]
          pointer-events-none
        "
      />

      {/* =========================
          BLUE ORBS
      ========================== */}

      <div
        className="
          about-orb-1
          absolute
          -top-44
          -left-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#1E3A8A]/20
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          about-orb-2
          absolute
          top-[40%]
          -right-44
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#3154A5]/15
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          about-orb-3
          absolute
          bottom-[-180px]
          left-[35%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#172554]/20
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =========================
          FLOATING DOTS
      ========================== */}

      <div className="floating-dot absolute top-[18%] left-[14%] w-1.5 h-1.5 rounded-full bg-[#5274C4]" />

      <div className="floating-dot absolute top-[32%] right-[17%] w-2 h-2 rounded-full bg-[#3154A5]" />

      <div className="floating-dot absolute bottom-[25%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#5274C4]" />

      <div className="floating-dot absolute bottom-[15%] right-[13%] w-2 h-2 rounded-full bg-[#3154A5]" />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================== */}

        <div className="about-reveal mb-12 md:mb-16">

          <p
            className="
              text-xs
              uppercase
              tracking-[5px]
              text-[#5274C4]
              mb-3
            "
          >
            Get to know me
          </p>

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-5
            "
          >

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                tracking-tight
                text-[#F8FAFC]
              "
            >
              About{" "}
              <span className="text-[#3154A5]">
                Me.
              </span>
            </h2>

            <p
              className="
                max-w-xl
                text-sm
                md:text-base
                text-[#858D9C]
                leading-relaxed
                md:text-right
              "
            >
              Frontend-focused developer creating modern,
              responsive and interactive web experiences
              using React.js, Next.js and the MERN stack.
            </p>

          </div>

          <div
            className="
              mt-5
              h-px
              w-full
              bg-gradient-to-r
              from-[#3154A5]
              via-[#172554]
              to-transparent
            "
          />

        </div>

        {/* =========================
            ABOUT CONTENT
        ========================== */}

        <div
          className="
            grid
            lg:grid-cols-[1.1fr_0.9fr]
            gap-12
            lg:gap-16
            items-center
            mb-20
          "
        >

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="about-reveal">

            <div className="relative">

              <div
                className="
                  absolute
                  -left-4
                  top-1
                  w-[2px]
                  h-16
                  bg-gradient-to-b
                  from-[#5274C4]
                  to-transparent
                "
              />

              <h3
                className="
                  pl-5
                  text-3xl
                  md:text-4xl
                  font-semibold
                  text-[#F8FAFC]
                  leading-tight
                  mb-6
                "
              >
                I build digital{" "}
                <span className="text-[#5274C4]">
                  experiences
                </span>{" "}
                that feel modern.
              </h3>

            </div>

            <p
              className="
                text-[#9299A8]
                leading-7
                text-base
                max-w-2xl
                mb-5
              "
            >
              I am a frontend-focused developer with 1 year
              of experience building responsive and
              user-friendly web applications. I enjoy
              transforming ideas and designs into clean,
              interactive and functional digital experiences.
            </p>

            <p
              className="
                text-[#737B89]
                leading-7
                max-w-2xl
                mb-8
              "
            >
              My primary focus is React.js, JavaScript,
              Next.js, Tailwind CSS and REST API integration,
              with working knowledge of Node.js, Express.js
              and MongoDB.
            </p>

            {/* =========================
                INFO
            ========================== */}

            <div
              className="
                about-info-wrapper
                grid
                sm:grid-cols-2
                gap-4
              "
            >

              <div
                className="
                  about-info
                  group
                  relative
                  overflow-hidden
                  p-5
                  rounded-2xl
                  bg-[#0B0F18]
                  border
                  border-white/[0.06]
                  hover:border-[#3154A5]/50
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-16
                    h-px
                    bg-[#3154A5]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[3px]
                    text-[#5274C4]
                  "
                >
                  Location
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#E2E8F0]
                    font-medium
                  "
                >
                  Dalhousie, Himachal Pradesh, India
                </p>

              </div>

              <div
                className="
                  about-info
                  group
                  relative
                  overflow-hidden
                  p-5
                  rounded-2xl
                  bg-[#0B0F18]
                  border
                  border-white/[0.06]
                  hover:border-[#3154A5]/50
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-16
                    h-px
                    bg-[#3154A5]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[3px]
                    text-[#5274C4]
                  "
                >
                  Experience
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#E2E8F0]
                    font-medium
                  "
                >
                  1+ Year Development Experience
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              EXPERIENCE VISUAL
          ========================== */}

          <div
            className="
              about-reveal
              relative
              flex
              items-center
              justify-center
              min-h-[330px]
            "
          >

            {/* Outer Ring */}

            <div
              className="
                about-ring
                absolute
                w-[250px]
                h-[250px]
                md:w-[300px]
                md:h-[300px]
                rounded-full
                border
                border-[#3154A5]/30
              "
            />

            {/* Dashed Ring */}

            <div
              className="
                absolute
                w-[190px]
                h-[190px]
                md:w-[235px]
                md:h-[235px]
                rounded-full
                border
                border-dashed
                border-[#5274C4]/20
              "
            />

            {/* Glow */}

            <div
              className="
                experience-glow
                absolute
                w-44
                h-44
                md:w-56
                md:h-56
                rounded-full
                bg-[#3154A5]/15
                blur-[60px]
              "
            />

            {/* Center Circle */}

            <div
              className="
                experience-circle
                relative
                w-40
                h-40
                md:w-48
                md:h-48
                rounded-full
                bg-[#080C14]
                border
                border-[#3154A5]/60
                flex
                flex-col
                items-center
                justify-center
                shadow-[0_0_70px_rgba(49,84,165,0.25)]
                z-10
              "
            >

              <div
                className="
                  experience-inner-glow
                  absolute
                  inset-5
                  rounded-full
                  bg-[#3154A5]/10
                  blur-xl
                "
              />

              <span
                className="
                  relative
                  text-5xl
                  md:text-6xl
                  font-bold
                  text-[#5274C4]
                "
              >
                1+
              </span>

              <span
                className="
                  relative
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#737B89]
                  mt-1
                "
              >
                Years Experience
              </span>

            </div>

            {/* React Label */}

            <div
              className="
                tech-label-react
                absolute
                top-[15%]
                left-[5%]
                px-3
                py-1.5
                rounded-full
                bg-[#0B0F18]/90
                border
                border-[#3154A5]/30
                backdrop-blur-md
                text-xs
                text-[#8F98A8]
              "
            >
              React.js
            </div>

            {/* MERN Label */}

            <div
              className="
                tech-label-mern
                absolute
                bottom-[14%]
                right-[5%]
                px-3
                py-1.5
                rounded-full
                bg-[#0B0F18]/90
                border
                border-[#3154A5]/30
                backdrop-blur-md
                text-xs
                text-[#8F98A8]
              "
            >
              MERN Stack
            </div>

            {/* Orbit Dots */}

            <div
              className="
                absolute
                top-[12%]
                right-[20%]
                w-3
                h-3
                rounded-full
                bg-[#5274C4]
                shadow-[0_0_20px_rgba(82,116,196,0.8)]
              "
            />

            <div
              className="
                absolute
                bottom-[13%]
                left-[18%]
                w-2
                h-2
                rounded-full
                bg-[#3154A5]
                shadow-[0_0_15px_rgba(49,84,165,0.8)]
              "
            />

          </div>

        </div>

        {/* =========================
            EDUCATION
        ========================== */}

        <div className="about-reveal">

          <div className="mb-8">

            <p
              className="
                text-xs
                uppercase
                tracking-[5px]
                text-[#5274C4]
                mb-2
              "
            >
              My background
            </p>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-[#F8FAFC]
              "
            >
              Education
            </h3>

          </div>

          {/* Timeline */}

          <div
            className="
              education-wrapper
              relative
              ml-3
              md:ml-6
            "
          >

            {/* Timeline */}

            <div
              className="
                absolute
                left-0
                top-0
                bottom-0
                w-px
                bg-gradient-to-b
                from-[#3154A5]
                via-[#172554]
                to-transparent
              "
            />

            {/* =========================
                B.TECH
            ========================== */}

            <div
              className="
                education-item
                relative
                pl-8
                pb-9
              "
            >

              <div
                className="
                  absolute
                  left-[-5px]
                  top-1
                  w-[11px]
                  h-[11px]
                  rounded-full
                  bg-[#3154A5]
                  shadow-[0_0_15px_rgba(49,84,165,0.7)]
                "
              />

              <span className="text-xs text-[#5274C4]">
                2020 — 2024
              </span>

              <h4
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-white
                  mt-1
                "
              >
                B.Tech Computer Science
              </h4>

              <p className="text-sm text-[#A1A8B5] mt-1">
                Chandigarh Group of Colleges, Jhanjeri
              </p>

              <p className="text-xs text-[#666E7D] mt-1">
                CGPA: 8.09
              </p>

            </div>

            {/* =========================
                CLASS XII
            ========================== */}

            <div
              className="
                education-item
                relative
                pl-8
              "
            >

              <div
                className="
                  absolute
                  left-[-5px]
                  top-1
                  w-[11px]
                  h-[11px]
                  rounded-full
                  bg-[#1E3A8A]
                  border
                  border-[#5274C4]/50
                "
              />

              <span className="text-xs text-[#5274C4]">
                2020
              </span>

              <h4
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-white
                  mt-1
                "
              >
                Class XII
              </h4>

              <p className="text-sm text-[#A1A8B5] mt-1">
                DAV College Banikhet
              </p>

              <p className="text-xs text-[#666E7D] mt-1">
                Himachal Pradesh Board
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}