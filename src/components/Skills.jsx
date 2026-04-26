import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, color: "from-green-500 to-emerald-600" },
      { name: "Express.js", level: 83, color: "from-gray-400 to-gray-600" },
      { name: "MongoDB", level: 78, color: "from-green-400 to-green-600" },
      { name: "PostgreSQL", level: 72, color: "from-blue-400 to-blue-600" },
      { name: "REST APIs", level: 88, color: "from-purple-500 to-pink-500" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 90, color: "from-orange-500 to-red-600" },
      { name: "Docker", level: 65, color: "from-blue-400 to-blue-600" },
      { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
      { name: "Linux", level: 75, color: "from-yellow-500 to-orange-500" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-indigo-600" },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`;
            }
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-sm font-mono">{level}%</span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest mb-2">WHAT I WORK WITH</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.title} className="glass gradient-border rounded-2xl p-6 hover:glow-purple transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={catIndex * 200 + i * 100}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech icons row */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Docker", "Git", "Figma", "Linux"].map((tech) => (
            <span
              key={tech}
              className="glass px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:gradient-border transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}