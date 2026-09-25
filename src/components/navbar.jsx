import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "projects",
    "training",
    "contact",
  ];

  return (
    <nav
      className="
        fixed w-full top-0 z-50
        bg-[#05070B]/90
        backdrop-blur-xl
        text-white
        border-b border-[#172554]/70
        shadow-[0_4px_30px_rgba(15,23,42,0.35)]
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1
          className="
            text-2xl
            font-bold
            tracking-wide
            text-[#3154A5]
            hover:text-[#4169C1]
            transition-all duration-300
            cursor-pointer
          "
        >
          Sunakshi
        </h1>


        {/* =========================
            DESKTOP MENU
        ========================== */}

        <div className="hidden md:flex items-center gap-8 text-base">

          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="
                relative
                cursor-pointer
                text-[#A7ADBA]
                hover:text-[#D9E2FF]
                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#3154A5]
                after:shadow-[0_0_8px_rgba(49,84,165,0.5)]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

        </div>


        {/* =========================
            MOBILE BUTTON
        ========================== */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="
            md:hidden
            text-2xl
            cursor-pointer
            text-[#3154A5]
            hover:text-[#4169C1]
            transition-all
            duration-300
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}

      {open && (
        <div
          className="
            md:hidden
            flex
            flex-col
            items-center
            gap-6
            pb-7
            pt-3
            bg-[#05070B]/95
            backdrop-blur-xl
            border-t border-[#172554]/60
            shadow-[0_10px_30px_rgba(15,23,42,0.35)]
          "
        >

          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="
                text-[#A7ADBA]
                hover:text-[#D9E2FF]
                text-lg
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
}