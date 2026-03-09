export default function Score({ name, show }: { name?: string; show?: boolean }) {
  if (!name) return null;

  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full pr-2 bg-slate-300/55 rounded ${show ? 'block' : 'hidden'}`}
    >
      <span className="text-[#F9CB81] font-bold">{name}</span>
    </div>
  );
}
