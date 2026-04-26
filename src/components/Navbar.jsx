import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "glass shadow-lg shadow-purple-900/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span
          className="gradient-text font-mono text-xl font-bold cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          &lt;AYOUB /&gt;
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-gray-400 hover:text-white hover:gradient-text transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-gray-300 hover:text-white text-left py-2 border-b border-white/10"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}