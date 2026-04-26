import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setTrail(pos), 80);
    return () => clearTimeout(timeout);
  }, [pos]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          width: clicking ? 8 : 12,
          height: clicking ? 8 : 12,
          borderRadius: "50%",
          background: "white",
          transition: "width 0.1s, height 0.1s",
        }}
      />
      {/* Trail */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: trail.x - 16,
          top: trail.y - 16,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(124,58,237,0.6)",
          transition: "left 0.08s ease, top 0.08s ease",
        }}
      />
    </>
  );
}