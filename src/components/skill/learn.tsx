interface Props {
  progress?: string;
  start?: string;
  show?: boolean;
}

export default function Learn({ progress, start, show }: Props) {
  if (!start) return null;

  return (
    <div
      className={`absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-center w-full h-full pr-2 bg-slate-300/55 rounded ${show ? 'block' : 'hidden'}`}
    >
      <div className="flex justify-end">
        <p className="text-#F9CB81 font-bold">Start:</p>&nbsp;
        <p className="text-#F9CB81 font-bold">{start}</p>
      </div>
      <div className="flex justify-end">
        <p className="text-#F9CB81 font-bold">Progress:</p>&nbsp;
        <p className="text-#F9CB81 font-bold">{progress}</p>
      </div>
    </div>
  );
}
