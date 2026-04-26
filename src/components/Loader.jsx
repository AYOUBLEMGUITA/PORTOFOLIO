import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-darker flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 animate-pulse flex items-center justify-center">
          <span className="text-3xl">👨‍💻</span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 blur-xl opacity-40 animate-pulse" />
      </div>
      <span className="gradient-text font-mono text-2xl font-black mb-4">&lt;AYOUB /&gt;</span>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}