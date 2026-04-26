import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center z-10">
      <div className="text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-400 text-sm font-mono">Available for work</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Ayoub</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
          LEMGUITA
        </h2>

        {/* Typing effect */}
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl font-mono text-cyan-400">
            {displayed}
            <span className="animate-pulse text-purple-400">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building beautiful, scalable web applications.
          Turning ideas into reality with clean code and creative design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 glow-purple hover:scale-105 active:scale-95"
          >
            View My Work 🚀
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl font-semibold text-white gradient-border hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contact Me ✉️
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}