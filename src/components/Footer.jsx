export default function Footer() {
  return (
    <footer className="relative bg-[#05070B] text-white overflow-hidden">

      {/* Blue Glow */}
      <div className="
        absolute
        left-1/2
        bottom-[-180px]
        -translate-x-1/2
        w-[450px]
        h-[300px]
        rounded-full
        bg-[#3154A5]/10
        blur-[120px]
        pointer-events-none
      " />

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-12
      ">

        {/* Top Content */}
        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        ">

          {/* Name */}
          <div className="text-center md:text-left">

            <h2 className="
              text-2xl
              font-bold
              tracking-wide
              text-[#5274C4]
            ">
              Sunakshi
            </h2>

            <p className="
              mt-2
              text-sm
              text-[#737B89]
            ">
              Frontend Developer · MERN Stack
            </p>

          </div>


          {/* Navigation */}
          <div className="
            flex
            flex-wrap
            justify-center
            gap-6
            text-sm
            text-[#737B89]
          ">

            <a
              href="#home"
              className="hover:text-[#5274C4] transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#5274C4] transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-[#5274C4] transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-[#5274C4] transition-colors duration-300"
            >
              Contact
            </a>

          </div>

        </div>


        {/* Divider */}
        <div className="
          mt-10
          pt-6
          border-t
          border-white/[0.08]
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-3
          text-xs
          text-[#555E6D]
        ">

          <p>
            © 2026 Sunakshi Portfolio · All Rights Reserved
          </p>

          <p className="tracking-wide">
            React.js · Next.js · MERN
          </p>

        </div>

      </div>
    </footer>
  );
}