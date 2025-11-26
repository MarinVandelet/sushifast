import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Menus" },
    { to: "/saveurs", label: "Saveurs" },
    { to: "/avocat-coriandre", label: "Avocat/Coriandre" },
    { to: "/sans-california", label: "Sans California" },
    { to: "/prix-total", label: "Prix total" },
    { to: "/extremes", label: "Extrêmes" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        className="
          fixed top-0 left-0 w-full z-50
          bg-white shadow-md
        "
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="SushiFast Logo"
                className="h-8 w-auto select-none"
              />
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className="relative pb-1 text-sm font-medium transition"
                >
                  <span
                    className={
                      location.pathname === link.to
                        ? "text-red-500"
                        : "text-gray-700 group-hover:text-red-500 transition"
                    }
                  >
                    {link.label}
                  </span>

                  {/* Underline animé GitHub-like */}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-[2px] bg-red-500 transition-all duration-300
                      ${location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl text-gray-800"
            whileTap={{ scale: 0.9 }} // SEULE ANIMATION GARDÉE
          >
            {mobileOpen ? "✖" : "☰"}
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-inner"
            >
              <nav className="flex flex-col py-3 px-4 gap-3">
                {links.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        py-2 px-3 rounded-lg transition block text-gray-700
                        ${
                          location.pathname === link.to
                            ? "bg-gray-100 text-red-500"
                            : "hover:bg-gray-100"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* espace pour éviter que navbar recouvre tout */}
      <div className="h-20"></div>
    </>
  );
}
