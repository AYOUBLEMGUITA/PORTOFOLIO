import { useEffect, useState } from "react";
import profileImage from "../../hero.png";

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
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 120);
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
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 animate-slide-up">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-sm text-gray-400">Available for work</span>
          </div>

          <h1 className="mb-4 text-5xl font-black leading-tight md:text-7xl">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Ayoub</span>
          </h1>

          <h2 className="mb-2 text-2xl font-bold text-gray-300 md:text-3xl">
            LEMGUITA
          </h2>

          <div className="mb-8 flex h-12 items-center justify-center lg:justify-start">
            <span className="font-mono text-xl text-cyan-400 md:text-2xl">
              {displayed}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 lg:mx-0">
            Passionate about building beautiful, scalable web applications.
            Turning ideas into reality with clean code and creative design.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="glow-purple rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-cyan-400 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="gradient-border rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/5 active:scale-95"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-transparent blur-2xl" />
            <div className="glass gradient-border relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={profileImage}
                alt="Ayoub LEMGUITA"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
            <div className="glass absolute -bottom-4 left-4 rounded-xl px-4 py-2 font-mono text-xs text-cyan-400">
              Full Stack Developer
            </div>
            <div className="glass absolute -right-4 top-4 rounded-xl px-4 py-2 font-mono text-xs text-purple-400">
              React + Node.js
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-gray-600">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </section>
  );
}
