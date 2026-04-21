import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="w-full flex justify-center fixed top-3 z-50 px-3">
      <nav
        className="flex items-center w-full max-w-6xl justify-between px-4 py-3 rounded-full text-white 
      bg-[#0a0908]/80 backdrop-blur-md border border-white/10 shadow-lg"
      >
        {/* LOGO */}
        <Link to="/" className="text-white font-semibold text-lg tracking-wide">
          <img src="./logo.png" alt="" className="h-12" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-2 hover:bg-white/10 rounded-full transition text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#bb9457] hover:bg-[#a8824e] px-4 py-2 rounded-full transition text-white"
        >
          Contact Us
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl p-2 rounded-full hover:bg-white/10 transition"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-[#0a0908]/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-6 right-6 text-3xl text-white p-2 hover:bg-white/10 rounded-full"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        {/* NAV LINKS */}
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="text-xl font-medium px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            {item.name}
          </Link>
        ))}

        {/* MOBILE CTA */}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-[#bb9457] hover:bg-[#a8824e] px-6 py-3 rounded-full text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
