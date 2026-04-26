import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/ayoublemguita" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ayoublemguita",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:ayoublemguita06@gmail.com",
  },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 mt-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div>
            <span className="gradient-text font-mono text-2xl font-black">
              &lt;AYOUB /&gt;
            </span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Full Stack Developer passionate about building beautiful, scalable web
              applications. Always learning, always creating.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-all duration-300 hover:scale-110 hover:glow-purple"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-white hover:gradient-text"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-4" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-sm font-bold uppercase tracking-widest text-white">
              Status
            </h4>
            <div className="space-y-4">
              <div className="glass rounded-xl border border-green-500/20 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-sm font-semibold text-green-400">Available</span>
                </div>
                <p className="text-xs text-gray-400">
                  Open for freelance and full-time roles
                </p>
              </div>

              <div className="glass rounded-xl p-4">
                <p className="mb-1 font-mono text-xs text-gray-500">Currently working with</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-cyan-400/10 px-2 py-1 font-mono text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-sm text-gray-600">
            (c) {new Date().getFullYear()} LEMGUITA AYOUB - Built with care using React +
            Node.js
          </p>
          <button
            onClick={scrollToTop}
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white hover:glow-purple"
            title="Back to top"
          >
            ^
          </button>
        </div>
      </div>
    </footer>
  );
}
