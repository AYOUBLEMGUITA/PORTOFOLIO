import { useEffect, useRef, useState } from "react";
import {
  FaBolt,
  FaCloudSun,
  FaComments,
  FaExternalLinkAlt,
  FaGithub,
  FaPenNib,
  FaShoppingCart,
  FaTasks,
} from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full stack e-commerce app with authentication, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: FaShoppingCart,
    color: "from-purple-600 to-pink-600",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Real-Time Chat App",
    description:
      "Modern chat application with real-time messaging, rooms, and online status.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    icon: FaComments,
    color: "from-cyan-600 to-blue-600",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    description:
      "Kanban-style project management tool with drag and drop and team collaboration.",
    tags: ["React", "TypeScript", "PostgreSQL", "REST API"],
    icon: FaTasks,
    color: "from-green-600 to-teal-600",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "Beautiful weather dashboard with forecasts, maps, and location detection.",
    tags: ["React", "OpenWeather API", "Tailwind"],
    icon: FaCloudSun,
    color: "from-orange-500 to-yellow-500",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "Full stack blog with markdown support, categories, comments, and SEO optimization.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    icon: FaPenNib,
    color: "from-pink-600 to-rose-600",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "REST API Boilerplate",
    description:
      "Production-ready Node.js API with auth, rate limiting, logging, and documentation.",
    tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    icon: FaBolt,
    color: "from-indigo-600 to-purple-600",
    github: "#",
    demo: "#",
    featured: false,
  },
];

const filters = ["All", "React", "Node.js", "MongoDB", "TypeScript"];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            ref.current?.classList.add("opacity-100", "translate-y-0");
            ref.current?.classList.remove("opacity-0", "translate-y-10");
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [index]);

  const Icon = project.icon;

  return (
    <div ref={ref} className="group translate-y-10 opacity-0 transition-all duration-700">
      <div className="glass gradient-border flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:glow-purple">
        <div className={`relative overflow-hidden bg-gradient-to-br p-6 ${project.color}`}>
          <div className="mb-2 text-5xl text-white">
            <Icon />
          </div>

          {project.featured && (
            <span className="absolute right-4 top-4 rounded-full bg-white/20 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
              Featured
            </span>
          )}

          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-white transition-all duration-300 group-hover:gradient-text">
            {project.title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 font-mono text-xs text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glass flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105 ${project.color}`}
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-purple-400">
            WHAT I&apos;VE BUILT
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "glow-purple bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                  : "glass border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-gray-400">Want to see more of my work?</p>
          <a
            href="https://github.com/ayoublemguita"
            target="_blank"
            rel="noreferrer"
            className="glass gradient-border inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/5"
          >
            <FaGithub />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
