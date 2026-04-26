import { useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";

const stats = [
  { number: "10+", label: "Projects" },
  { number: "2+", label: "Years Exp" },
  { number: "100%", label: "Dedication" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("opacity-100", "translate-y-0");
          ref.current?.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-purple-400">
            GET TO KNOW ME
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
        </div>

        <div
          ref={ref}
          className="grid items-center gap-12 opacity-0 transition-all duration-700 translate-y-10 md:grid-cols-2"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-64 w-64 animate-float rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 p-1">
                <div className="bg-card flex h-full w-full items-center justify-center rounded-2xl">
                  <FaCode className="text-7xl text-white" />
                </div>
              </div>

              <div
                className="glass absolute -right-4 -top-4 rounded-xl px-3 py-2 font-mono text-sm text-cyan-400 animate-float"
                style={{ animationDelay: "1s" }}
              >
                &lt;Full Stack /&gt;
              </div>

              <div
                className="glass absolute -bottom-4 -left-4 rounded-xl px-3 py-2 font-mono text-sm text-purple-400 animate-float"
                style={{ animationDelay: "2s" }}
              >
                React + Node
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer passionate about
              <span className="gradient-text"> creating impact</span>
            </h3>

            <p className="leading-relaxed text-gray-400">
              I&apos;m <span className="font-semibold text-white">Ayoub LEMGUITA</span>, a
              Full Stack Developer who loves building modern web applications from
              scratch. I combine clean code with thoughtful design to deliver strong user
              experiences.
            </p>

            <p className="leading-relaxed text-gray-400">
              Whether it&apos;s a complex backend API or a polished frontend, I bring the
              same focus and attention to detail to every project.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass gradient-border rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-white">{stat.number}</div>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
