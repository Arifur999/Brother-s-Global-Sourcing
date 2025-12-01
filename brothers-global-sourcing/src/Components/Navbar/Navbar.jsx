// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router";
import logo from "/Concept 2_BGS_Logo.png";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/services", label: "SERVICES" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/factories", label: "FACTORIES" },
  { to: "/sustainability", label: "SUSTAINABILITY" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] border-b border-white/5">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="flex items-center h-20 overflow-visible"> {/* allow visible children */}
          {/* LEFT: logo + title */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <img src={logo} alt="BGS Logo" className="h-14 w-14 rounded bg-white p-1 object-contain" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white text-lg font-semibold tracking-wide">BROTHER'S GLOBAL SOURCING</span>
              <span className="text-gray-300 text-xs -mt-1">Garments Buying House – Bangladesh</span>
            </div>
          </div>

          {/* CENTER: show from md and up, left-aligned next to logo */}
          <nav className="hidden md:flex items-center ml-8 flex-1 overflow-visible">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to} className="relative group">
                  <NavLink to={item.to} end={item.to === "/"}>
                    {({ isActive }) => (
                      <div className="flex flex-col items-start">
                        <span
                          className={`text-sm tracking-wide uppercase transition ${
                            isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>

                        {/* animated half-underline */}
                        <span
                          className={`block absolute left-0 -bottom-1 h-[2px] bg-[#E59E3D] w-1/2 origin-left transform transition-transform duration-300
                            ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                          aria-hidden
                        />
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: send inquiry + mobile hamburger */}
          <div className="ml-auto flex items-center gap-3">
            <NavLink
              to="/send-inquiry"
              className="hidden md:inline-flex items-center gap-2 py-2 px-5 rounded-full border border-[#E59E3D] text-[#E59E3D] hover:bg-[#E59E3D]/10 transition font-medium text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              SEND INQUIRY
            </NavLink>

            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden text-white text-xl p-2 rounded hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="bg-[#111] rounded-box p-3 border border-white/10">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded text-sm uppercase ${
                          isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                <li className="mt-3">
                  <NavLink
                    to="/send-inquiry"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-full border border-[#E59E3D] text-[#E59E3D] w-full"
                  >
                    SEND INQUIRY
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
