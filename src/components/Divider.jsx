export default function Divider() {
  return (
    <div className="relative z-10 flex items-center justify-center py-4 px-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500/20" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 animate-pulse" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-500/20" />
    </div>
  );
}