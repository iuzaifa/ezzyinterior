// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import { websiteData } from "../../data/websitedata";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navLinks = websiteData.navbar;

//   // Prevent background scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   return (
//     <div className="w-full flex justify-center fixed top-3 z-50 px-3">
//       <nav
//         className="flex items-center w-full max-w-6xl justify-between px-4 py-3 rounded-full text-[#283618]
//       bg-[#FEFAE0]/95 backdrop-blur-md border border-[#283618]/20 shadow-lg"
//       >
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="text-[#283618] font-semibold text-lg tracking-wide"
//         >
//           <img src="./logo.png" alt="" className="h-12" />
//         </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-2">
//           {navLinks.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="px-4 py-2 hover:bg-[#606C38]/10 hover:text-[#606C38] rounded-full transition text-sm font-medium"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* CONTACT BUTTON */}
//         <Link
//           to="/contact"
//           className="hidden md:block bg-[#DDA15E] hover:bg-[#BC6C25] px-4 py-2 rounded-full transition text-[#FEFAE0] shadow-lg hover:shadow-xl"
//         >
//           Contact Us
//         </Link>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-2xl p-2 rounded-full hover:bg-[#606C38]/20 transition text-[#283618] hover:text-[#606C38]"
//           onClick={() => setOpen(true)}
//         >
//           <FiMenu />
//         </button>
//       </nav>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 bg-[#FEFAE0]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-6 transition-all duration-300 text-[#283618] ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {/* CLOSE BUTTON */}
//         <button
//           className="absolute top-6 right-6 text-3xl text-[#283618] p-2 hover:bg-[#606C38]/20 rounded-full"
//           onClick={() => setOpen(false)}
//         >
//           <FiX />
//         </button>

//         {/* NAV LINKS */}
//         {navLinks.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             onClick={() => setOpen(false)}
//             className="text-xl font-medium px-6 py-3 rounded-full hover:bg-[#606C38]/10 hover:text-[#606C38] transition text-[#283618] shadow-md hover:shadow-lg"
//           >
//             {item.name}
//           </Link>
//         ))}

//         {/* MOBILE CTA */}
//         <Link
//           to="/contact"
//           onClick={() => setOpen(false)}
//           className="mt-4 bg-[#DDA15E] hover:bg-[#BC6C25] px-6 py-3 rounded-full text-[#FEFAE0] shadow-lg hover:shadow-xl font-semibold tracking-wide"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { websiteData } from "../../data/websitedata";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = websiteData.navbar;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <div className="w-full flex justify-center fixed top-3 z-50 px-3">
      {/* NAVBAR */}
      <nav className="flex items-center w-full max-w-6xl justify-between px-4 py-3 rounded-full text-[#283618] bg-[#FEFAE0]/95 backdrop-blur-md border border-[#283618]/20 shadow-lg">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="./logo.png"
            alt="logo"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-2 hover:bg-[#606C38]/10 hover:text-[#606C38] rounded-full transition text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="hidden md:block bg-[#DDA15E] hover:bg-[#BC6C25] px-4 py-2 rounded-full transition text-[#FEFAE0] shadow-lg"
        >
          Contact Us
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl p-3 min-h-[44px] rounded-full hover:bg-[#606C38]/20 transition flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#FEFAE0] transition-all duration-300 px-6 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-6 right-6 text-3xl p-2 rounded-full hover:bg-[#606C38]/20"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        {/* LINKS */}
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="text-xl font-medium px-6 py-3 rounded-full hover:bg-[#606C38]/10 hover:text-[#606C38] transition"
          >
            {item.name}
          </Link>
        ))}

        {/* CTA */}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-[#DDA15E] hover:bg-[#BC6C25] px-6 py-3 rounded-full text-[#FEFAE0] font-semibold shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
