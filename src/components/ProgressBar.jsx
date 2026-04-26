import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}