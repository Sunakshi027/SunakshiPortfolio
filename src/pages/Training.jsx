import React, { useEffect, useRef } from "react";
import certificate from "../assets/certificate.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Training() {
  const sectionRef = useRef(null);

  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "MongoDB",
    "GSAP",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         TECHNICAL SKILLS HEADING
      ========================= */

      gsap.from(".skills-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
        },
      });

      /* =========================
         SKILLS
      ========================= */

      gsap.from(".skill-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
      });

      /* =========================
         TRAINING HEADING
      ========================= */

      gsap.from(".training-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".training-heading",
          start: "top 85%",
        },
      });

      /* =========================
         TRAINING LEFT
      ========================= */

      gsap.from(".training-left", {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".training-wrapper",
          start: "top 80%",
        },
      });

      /* =========================
         CERTIFICATE RIGHT
      ========================= */

      gsap.from(".training-right", {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".training-wrapper",
          start: "top 80%",
        },
      });

      /* =========================
         CERTIFICATE IMAGE
      ========================= */

      gsap.from(".certificate-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".training-wrapper",
          start: "top 75%",
        },
      });

      /* =========================
         BACKGROUND GLOW
      ========================= */

      gsap.to(".training-glow", {
        x: 100,
        y: -50,
        scale: 1.15,
        duration: 6,
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
      id="training"
      className="
        relative
        py-24
        px-6
        bg-black
        text-white
        overflow-hidden
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          training-glow
          absolute
          top-[5%]
          right-[-10%]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#3154A5]/10
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          left-[-10%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#1E3A8A]/10
          blur-[130px]
          pointer-events-none
        "
      />


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* =================================================
            TECHNICAL SKILLS
        ================================================= */}

        <div className="skills-heading text-center mb-10">

          <p className="
            text-xs
            uppercase
            tracking-[4px]
            text-[#5274C4]
            mb-3
          ">
            My Expertise
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          ">
            Technical{" "}
            <span className="text-[#3154A5]">
              Skills
            </span>
          </h2>

          <p className="
            text-[#737B89]
            text-sm
            mt-3
          ">
            Technologies and tools I use to build modern web applications.
          </p>

        </div>


        {/* =================================================
            SIMPLE SKILLS
        ================================================= */}

        <div className="skills-grid mb-24">

          <div className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-x-7
            gap-y-4
            max-w-4xl
            mx-auto
          ">

            {skills.map((skill, index) => (
              <React.Fragment key={skill}>

                <span
                  className="
                    skill-item
                    text-lg
                    md:text-xl
                    text-[#858D9C]
                    hover:text-[#5274C4]
                    transition-colors
                    duration-300
                    cursor-default
                  "
                >
                  {skill}
                </span>

                {index !== skills.length - 1 && (
                  <span className="text-[#3154A5]/40">
                    /
                  </span>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>


        {/* =================================================
            TRAINING / CERTIFICATION HEADING
        ================================================= */}

        <div className="training-heading text-center mb-12">

          <p className="
            text-xs
            uppercase
            tracking-[4px]
            text-[#5274C4]
            mb-3
          ">
            Experience & Achievement
          </p>

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
          ">
            Training{" "}
            <span className="text-[#3154A5]">
              / Certification
            </span>
          </h2>

          <p className="
            text-[#737B89]
            text-sm
            mt-3
          ">
            My professional training and certification.
          </p>

        </div>


        {/* =================================================
            TRAINING + CERTIFICATE
        ================================================= */}

        <div
          className="
            training-wrapper
            grid
            md:grid-cols-2
            bg-[#07080B]
            border
            border-white/[0.08]
            rounded-2xl
            overflow-hidden
          "
        >

          {/* =================================================
              TRAINING - LEFT
          ================================================= */}

          <div
            className="
              training-left
              p-7
              md:p-10
              border-b
              md:border-b-0
              md:border-r
              border-white/[0.08]
            "
          >

            {/* Top Label */}

            <div className="
              flex
              justify-between
              items-center
              mb-8
            ">

              <span className="
                text-xs
                tracking-[4px]
                text-[#5274C4]
              ">
                01
              </span>

              <span className="
                text-[10px]
                uppercase
                tracking-[3px]
                text-[#555E6D]
              ">
                Internship
              </span>

            </div>


            {/* Training Title */}

            <h3 className="
              text-2xl
              md:text-3xl
              font-semibold
              text-white
              mb-3
            ">
              MERN Stack Development
            </h3>


            {/* Company */}

            <p className="
              text-[#5274C4]
              text-sm
              mb-2
            ">
              Bepoj Technology Pvt. Ltd.
            </p>


            {/* Date */}

            <p className="
              text-xs
              text-[#555E6D]
              mb-6
            ">
              1 August 2025 — 29 January 2026
            </p>


            {/* Description */}

            <p className="
              text-sm
              text-[#858D9C]
              leading-6
            ">
              MERN Stack Intern with a strong focus on frontend
              development using React.js, JavaScript, HTML, and CSS.
              Gained hands-on experience building responsive user
              interfaces, integrating REST APIs, and working with
              Node.js, Express.js, and MongoDB.
            </p>


            {/* Technologies */}

            <div className="
              flex
              flex-wrap
              gap-2
              mt-7
            ">

              {[
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-[#0C0E13]
                    border
                    border-white/[0.07]
                    text-xs
                    text-[#737B89]
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* =================================================
              CERTIFICATE - RIGHT
          ================================================= */}

          <div className="
            training-right
            p-7
            md:p-10
          ">

            {/* Top Label */}

            <div className="
              flex
              justify-between
              items-center
              mb-8
            ">

              <span className="
                text-xs
                tracking-[4px]
                text-[#5274C4]
              ">
                02
              </span>

              <span className="
                text-[10px]
                uppercase
                tracking-[3px]
                text-[#555E6D]
              ">
                Certificate
              </span>

            </div>


            {/* Certificate Image */}

            <div className="
              flex
              justify-center
              items-center
              bg-[#0B0E15]
              border
              border-white/[0.07]
              rounded-xl
              p-4
              h-[210px]
              mb-6
              overflow-hidden
            ">

              <img
                src={certificate}
                alt="MERN Stack Development Certificate"
                className="
                  certificate-image
                  h-full
                  max-w-full
                  object-contain
                  rounded-lg
                "
              />

            </div>


            {/* Certificate Title */}

            <h3 className="
              text-2xl
              font-semibold
              text-white
              mb-2
            ">
              MERN Stack Development
            </h3>


            {/* Company */}

            <p className="
              text-[#5274C4]
              text-sm
              mb-2
            ">
              Bepoj Technology Pvt. Ltd.
            </p>


            {/* Completion Date */}

            <p className="
              text-xs
              text-[#555E6D]
              mb-5
            ">
              Completed — January 2026
            </p>


            {/* Description */}

            <p className="
              text-sm
              text-[#858D9C]
              leading-6
            ">
              Demonstrates practical knowledge of building full-stack
              web applications using MongoDB, Express.js, React.js,
              and Node.js with responsive frontend design and backend
              integration.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}