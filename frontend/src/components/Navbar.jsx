import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#2d2d38";
      document.body.style.color = "#E6E6F2";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#e3e6e7";
      document.body.style.color = "#055194e8";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          G<span className="text-[#FF7400]">oo</span>GO
        </a>

        <nav className="desktop px-4 py-2">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} className="cursor-pointer">
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FiSun className="text-[#FF7400] text-xl" />
          ) : (
            <FiMoon className="text-xl" />
          )}
        </button>

        <a href="#contact" className="contact-btn group cursor-pointer hidden">
          <div className="inner">
            <span>Contact Us</span>
          </div>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle mobile menu"
        >
          <HiMenu className="text-[#055194e8] text-xl" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-logo">
            <p className="text-xl font-bold text-[#055194e8]">
              G<span className="text-[#ff7400]">oo</span>GO
            </p>
          </div>
          <div className="flex px-6 pt-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="close-btn"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
          <div className="mobile-menu">
            <nav className="px-10 py-6;">
              <ul className="space-y-4">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <a
                      href={link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="mobile-links"
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setMobileMenuOpen(false);
                    }}
                    className="mobile-dark-mode-toggle"
                  >
                    <span className="mr-2">
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </span>
                    {darkMode ? (
                      <FiSun className="text-xl" />
                    ) : (
                      <FiMoon className="text-xl" />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
