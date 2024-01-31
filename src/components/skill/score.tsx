export default function Score({ score, show }: { score?: number; show?: boolean }) {
  if (!score) return null;

  return (
    <div
      className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-end w-full h-full pr-2 bg-slate-300/55 rounded ${show ? 'block' : 'hidden'}`}
    >
      <span className="text-#F9CB81 font-bold">Score:</span>&nbsp;
      <span className="text-#F9CB81 font-bold">{score}</span>
    </div>
  );
}
