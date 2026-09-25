import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-top", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        },
      });

      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        },
      });

      gsap.to(".contact-orb", {
        x: 100,
        y: -50,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-line", {
        y: 25,
        duration: 2.5,
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
      id="contact"
      className="
        relative
        min-h-screen
        bg-[#05070B]
        text-white
        px-6
        py-28
        overflow-hidden
      "
    >

      {/* Background */}
      <div
        className="
          contact-orb
          absolute
          top-[15%]
          right-[-8%]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#3154A5]/10
          blur-[150px]
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================
            TOP
        ========================== */}

        <div className="contact-top mb-20">

          <p
            className="
              text-xs
              uppercase
              tracking-[5px]
              text-[#5274C4]
              mb-5
            "
          >
            Contact
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            <h2
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-bold
                tracking-tight
                leading-[0.95]
              "
            >
              Let's
              <br />
              <span className="text-[#3154A5]">
                connect.
              </span>
            </h2>

            <p
              className="
                max-w-md
                text-[#737B89]
                leading-7
                md:text-right
              "
            >
              Have a project in mind, want to collaborate, or simply
              want to say hello? Drop me a message and let's talk.
            </p>

          </div>

          {/* Animated Line */}
          <div className="relative mt-10 h-px bg-white/[0.08] overflow-hidden">

            <div
              className="
                contact-line
                absolute
                left-0
                top-0
                w-32
                h-px
                bg-[#5274C4]
              "
            />

          </div>

        </div>

        {/* =========================
            CONTENT
        ========================== */}

        <div
          className="
            contact-content
            grid
            lg:grid-cols-[0.8fr_1.2fr]
            gap-16
            lg:gap-24
            items-start
          "
        >

          {/* =========================
              LEFT INFO
          ========================== */}

          <div className="contact-info">

            <p
              className="
                text-sm
                uppercase
                tracking-[3px]
                text-[#5274C4]
                mb-6
              "
            >
              Get in touch
            </p>

            <h3
              className="
                text-2xl
                md:text-3xl
                font-semibold
                text-[#F8FAFC]
                leading-snug
                mb-6
              "
            >
              Let's build something
              <span className="text-[#3154A5]">
                {" "}meaningful.
              </span>
            </h3>

            <p
              className="
                text-[#858D9C]
                leading-7
                max-w-md
                mb-12
              "
            >
              I'm a frontend-focused MERN Stack Developer with
              experience building responsive and user-friendly
              web applications using modern technologies.
            </p>

            {/* Email */}

            <a
              href="mailto:tsunakshi329@email.com"
              className="
                group
                block
                border-b
                border-white/[0.08]
                pb-5
                mb-5
                max-w-md
              "
            >

              <span
                className="
                  block
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#555E6D]
                  mb-2
                "
              >
                Email
              </span>

              <span
                className="
                  flex
                  justify-between
                  items-center
                  text-[#C7D2E5]
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              >
                tsunakshi329@email.com

                <span
                  className="
                    text-[#5274C4]
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
                  ↗
                </span>
              </span>

            </a>

            {/* GitHub */}

            <a
              href="https://github.com/Sunakshi027"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                border-b
                border-white/[0.08]
                pb-5
                max-w-md
              "
            >

              <span
                className="
                  block
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#555E6D]
                  mb-2
                "
              >
                GitHub
              </span>

              <span
                className="
                  flex
                  justify-between
                  items-center
                  text-[#C7D2E5]
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              >
                github.com/Sunakshi027

                <span
                  className="
                    text-[#5274C4]
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
                  ↗
                </span>
              </span>

            </a>

            <p
              className="
                mt-10
                text-xs
                uppercase
                tracking-[3px]
                text-[#3F4652]
              "
            >
              React.js · Next.js · MERN
            </p>

          </div>

          {/* =========================
              RIGHT FORM
          ========================== */}

          <div className="contact-form relative">

            {/* Number */}

            <div
              className="
                absolute
                -top-8
                right-0
                text-[10px]
                tracking-[4px]
                text-[#3F4652]
              "
            >
              01 / MESSAGE
            </div>

            <form className="space-y-10">

              {/* Name */}

              <div className="group">

                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-[#555E6D]
                    mb-3
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-transparent
                    border-0
                    border-b
                    border-white/[0.12]
                    px-0
                    py-4
                    text-lg
                    text-white
                    placeholder-[#3F4652]
                    outline-none
                    focus:border-[#5274C4]
                    transition-colors
                    duration-300
                  "
                />

              </div>

              {/* Email */}

              <div className="group">

                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-[#555E6D]
                    mb-3
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-transparent
                    border-0
                    border-b
                    border-white/[0.12]
                    px-0
                    py-4
                    text-lg
                    text-white
                    placeholder-[#3F4652]
                    outline-none
                    focus:border-[#5274C4]
                    transition-colors
                    duration-300
                  "
                />

              </div>

              {/* Message */}

              <div className="group">

                <label
                  className="
                    block
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-[#555E6D]
                    mb-3
                  "
                >
                  Message
                </label>

                <textarea
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    h-28
                    bg-transparent
                    border-0
                    border-b
                    border-white/[0.12]
                    px-0
                    py-4
                    text-lg
                    text-white
                    placeholder-[#3F4652]
                    outline-none
                    resize-none
                    focus:border-[#5274C4]
                    transition-colors
                    duration-300
                  "
                />

              </div>

              {/* Button */}

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
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
                    w-14
                    h-14
                    rounded-full
                    border
                    border-[#3154A5]/60
                    bg-[#0A0D14]
                    group-hover:bg-[#3154A5]
                    group-hover:border-[#5274C4]
                    group-hover:shadow-[0_0_30px_rgba(49,84,165,0.3)]
                    transition-all
                    duration-500
                  "
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </span>

                <span className="text-sm uppercase tracking-[3px]">
                  Send Message
                </span>

              </button>

            </form>

          </div>

        </div>

        {/* Footer Line */}

        <div
          className="
            mt-24
            pt-6
            border-t
            border-white/[0.06]
            flex
            flex-col
            md:flex-row
            justify-between
            gap-3
            text-[10px]
            uppercase
            tracking-[3px]
            text-[#3F4652]
          "
        >
          <span>Sunakshi · Frontend Developer</span>
          <span>React.js · Next.js · MERN</span>
        </div>

      </div>
    </section>
  );
}