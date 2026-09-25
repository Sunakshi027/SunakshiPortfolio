import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "Learning Management System",
      label: "LMS Platform",
      desc: "A full-stack learning platform where students can register, access courses, track progress, and interact with learning content. Includes educator functionality and course management.",
      tech: ["React.js", "Node.js", "MongoDB", "Clerk"],
      live: "https://learning-management-frontend-b80r.onrender.com",
      github: "#",
    },

    {
      number: "02",
      title: "Real-Time Chat Application",
      label: "WebChat",
      desc: "A real-time messaging application for instant communication with authentication, responsive chat interfaces, image messaging, and live user interactions.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      live: "https://webchat-main-1.onrender.com/",
      github: "#",
    },

    {
      number: "03",
      title: "Travel Website",
      label: "Travel Experience",
      desc: "A modern travel website designed to showcase destinations and travel experiences with responsive layouts, interactive sections, and engaging user interfaces.",
      tech: ["React.js", "JavaScript", "CSS", "Node.js"],
      live: "#",
      github: "#",
    },

    {
      number: "04",
      title: "Fashion E-Commerce",
      label: "Fashion Store",
      desc: "A modern fashion website with a premium interface designed to showcase fashion products through an elegant and responsive shopping experience.",
      tech: ["Next.js", "JavaScript", "Tailwind CSS", "React"],
      live: "https://fashion-seven-sandy.vercel.app/",
      github: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         BACKGROUND GLOW
      ========================== */

      gsap.to(".project-glow-one", {
        x: 180,
        y: 80,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".project-glow-two", {
        x: -150,
        y: -100,
        scale: 1.2,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         FLOATING PARTICLES
      ========================== */

      gsap.to(".project-particle", {
        y: -20,
        opacity: 0.25,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: "sine.inOut",
      });

      /* =========================
         MOVING LIGHT
      ========================== */

      gsap.to(".moving-light", {
        x: "120vw",
        duration: 7,
        repeat: -1,
        ease: "none",
      });

      /* =========================
         HEADER REVEAL
      ========================== */

      gsap.from(".projects-title-area", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      /* =========================
         CARDS REVEAL
      ========================== */

      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      });

      /* =========================
         PROJECT NUMBER
      ========================== */

      gsap.from(".project-number", {
        x: -15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });

      /* =========================
         CONNECT SECTION
      ========================== */

      gsap.from(".connect-section", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".connect-section",
          start: "top 90%",
        },
      });

      /* =========================
         CONNECT ARROW
      ========================== */

      gsap.to(".connect-arrow", {
        x: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================
         CONNECT LINE
      ========================== */

      gsap.to(".connect-line", {
        x: "100%",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     PREMIUM CARD HOVER
  ========================== */

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    const rotateX =
      ((y - rect.height / 2) / rect.height) * -5;

    const rotateY =
      ((x - rect.width / 2) / rect.width) * 5;

    card.style.setProperty("--mouse-x", `${mouseX}%`);
    card.style.setProperty("--mouse-y", `${mouseY}%`);

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.015,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1200,
      overwrite: true,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        px-6
        py-20
        md:py-24
      "
    >

      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Glow One */}

        <div
          className="
            project-glow-one
            absolute
            top-[5%]
            left-[-10%]
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#3154A5]/10
            blur-[140px]
          "
        />

        {/* Glow Two */}

        <div
          className="
            project-glow-two
            absolute
            bottom-[-10%]
            right-[-10%]
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#172554]/15
            blur-[140px]
          "
        />

        {/* Particles */}

        <span
          className="
            project-particle
            absolute
            top-[18%]
            left-[8%]
            w-1
            h-1
            rounded-full
            bg-[#5274C4]
          "
        />

        <span
          className="
            project-particle
            absolute
            top-[32%]
            right-[10%]
            w-1.5
            h-1.5
            rounded-full
            bg-[#3154A5]
          "
        />

        <span
          className="
            project-particle
            absolute
            top-[60%]
            left-[15%]
            w-1
            h-1
            rounded-full
            bg-[#5274C4]
          "
        />

        <span
          className="
            project-particle
            absolute
            bottom-[20%]
            right-[20%]
            w-1
            h-1
            rounded-full
            bg-[#3154A5]
          "
        />

        <span
          className="
            project-particle
            absolute
            bottom-[12%]
            left-[45%]
            w-1
            h-1
            rounded-full
            bg-[#5274C4]
          "
        />

      </div>

      {/* ==========================================
          MOVING LIGHT
      ========================================== */}

      <div
        className="
          moving-light
          absolute
          top-[25%]
          left-[-25%]
          w-[20%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#5274C4]/50
          to-transparent
          pointer-events-none
        "
      />

      {/* ==========================================
          MAIN
      ========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="projects-title-area mb-12">

          <p
            className="
              text-xs
              uppercase
              tracking-[5px]
              text-[#5274C4]
              mb-4
            "
          >
            Selected Work
          </p>

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-6
            "
          >

            <h2
              className="
                text-4xl
                md:text-6xl
                font-bold
                tracking-tight
                text-white
              "
            >
              My
              <span className="text-[#3154A5]">
                {" "}Projects.
              </span>
            </h2>

            <p
              className="
                max-w-lg
                text-sm
                md:text-base
                text-[#737B89]
                leading-relaxed
                md:text-right
              "
            >
              A selection of web applications and digital
              experiences built using modern frontend and
              full-stack technologies.
            </p>

          </div>

          <div
            className="
              mt-6
              h-px
              w-full
              bg-gradient-to-r
              from-[#3154A5]
              via-[#3154A5]/20
              to-transparent
            "
          />

        </div>

        {/* ==========================================
            PROJECT CARDS
        ========================================== */}

        <div
          className="
            projects-grid
            grid
            md:grid-cols-2
            gap-5
            md:gap-6
          "
        >

          {projects.map((project) => (

            <article
              key={project.number}
              className="
                project-card
                group
                relative
                min-h-[380px]
                overflow-hidden
                rounded-2xl
                bg-[#07080B]
                border
                border-white/[0.08]
                p-6
                md:p-7
                [transform-style:preserve-3d]
                transition-colors
                duration-500
                hover:border-[#3154A5]/70
                hover:shadow-[0_20px_60px_rgba(49,84,165,0.15)]
              "
              style={{
                "--mouse-x": "50%",
                "--mouse-y": "50%",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >

              {/* Mouse Spotlight */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  pointer-events-none
                "
                style={{
                  background:
                    "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(49,84,165,0.18), transparent 45%)",
                }}
              />

              {/* Premium Border */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(82,116,196,0.25), transparent 30%, transparent 70%, rgba(49,84,165,0.15))",
                }}
              />

              {/* Content */}

              <div className="relative z-10">

                {/* Top */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-10
                  "
                >

                  <span
                    className="
                      project-number
                      text-xs
                      tracking-[4px]
                      text-[#5274C4]
                    "
                  >
                    {project.number}
                  </span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[3px]
                      text-[#454D5A]
                      group-hover:text-[#5274C4]
                      transition-colors
                      duration-300
                    "
                  >
                    {project.label}
                  </span>

                </div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    leading-tight
                    text-[#F8FAFC]
                    mb-4
                    group-hover:text-[#D9E2FF]
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-sm
                    text-[#747D8C]
                    leading-6
                    max-w-xl
                    mb-6
                  "
                >
                  {project.desc}
                </p>

                {/* Technologies */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-7
                  "
                >

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#0C0E13]
                        border
                        border-white/[0.07]
                        text-[11px]
                        text-[#858D9C]
                        group-hover:border-[#3154A5]/50
                        group-hover:text-[#B9C8E8]
                        transition-all
                        duration-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-3">

                  {project.live !== "#" && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-lg
                        bg-[#3154A5]
                        text-white
                        text-xs
                        font-medium
                        hover:bg-[#4169C1]
                        hover:-translate-y-1
                        hover:shadow-[0_10px_25px_rgba(49,84,165,0.3)]
                        transition-all
                        duration-300
                      "
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                  )}

                  {project.github !== "#" && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-lg
                        bg-[#0C0E13]
                        text-[#C7D2E5]
                        text-xs
                        font-medium
                        border
                        border-white/10
                        hover:border-[#3154A5]/70
                        hover:text-white
                        hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  )}

                </div>

              </div>

              {/* Bottom Hover Line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-transparent
                  via-[#5274C4]
                  to-transparent
                  group-hover:w-full
                  transition-all
                  duration-700
                "
              />

              {/* Corner */}

              <div
                className="
                  absolute
                  right-6
                  bottom-6
                  w-7
                  h-7
                  border-r
                  border-b
                  border-white/[0.08]
                  rounded-br-lg
                  group-hover:border-[#3154A5]/70
                  transition-all
                  duration-500
                "
              />

            </article>

          ))}

        </div>

        {/* ==========================================
            CONNECT SECTION
        ========================================== */}

        <div
          className="
            connect-section
            relative
            mt-16
            overflow-hidden
            border-t
            border-white/[0.08]
            pt-8
          "
        >

          {/* Animated Line */}

          <div
            className="
              absolute
              top-0
              left-[-100%]
              w-full
              h-px
              connect-line
              bg-gradient-to-r
              from-transparent
              via-[#5274C4]
              to-transparent
            "
          />

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-8
            "
          >

            {/* Left */}

            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[5px]
                  text-[#5274C4]
                  mb-4
                "
              >
                Connect
              </p>

              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-semibold
                  tracking-tight
                  text-white
                  max-w-2xl
                "
              >
                Let's build something
                <span className="text-[#3154A5]">
                  {" "}meaningful.
                </span>
              </h3>

            </div>

            {/* LinkedIn */}

            <a
              href="http://linkedin.com/in/sunakshi-t-b08a5b387/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                w-fit
                text-[#D9E2FF]
                hover:text-white
                transition-colors
                duration-300
              "
            >

              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-full
                  border
                  border-[#3154A5]/50
                  bg-[#0A0D14]
                  group-hover:bg-[#3154A5]
                  group-hover:border-[#5274C4]
                  group-hover:shadow-[0_0_30px_rgba(49,84,165,0.35)]
                  transition-all
                  duration-500
                "
              >

                <span
                  className="
                    connect-arrow
                    text-lg
                  "
                >
                  ↗
                </span>

              </span>

              <span>

                <span
                  className="
                    block
                    text-[10px]
                    uppercase
                    tracking-[3px]
                    text-[#5F6877]
                    mb-1
                    group-hover:text-[#8FA5D5]
                  "
                >
                  Find me on
                </span>

                <span
                  className="
                    block
                    text-base
                    font-medium
                  "
                >
                  LinkedIn
                </span>

              </span>

            </a>

          </div>

          {/* Bottom Text */}

          <div
            className="
              mt-8
              flex
              flex-col
              md:flex-row
              justify-between
              gap-2
              text-[10px]
              uppercase
              tracking-[2px]
              text-[#3F4652]
            "
          >

            <span>
              Frontend Developer
            </span>

            <span>
              React.js · Next.js · MERN
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}