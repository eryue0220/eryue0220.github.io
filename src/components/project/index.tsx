interface Props {
  projects: string[];
}

export default function Project({ projects }: Props) {
  return (
    <ul>
      {projects.map((project) =>
        <li key={project} className="relative pb-2 pl-5 text-base leading-relaxed text-[#525252] before:absolute before:top-[.68em] before:left-[.15rem] before:h-[.35rem] before:w-[.35rem] before:-translate-y-1/2 before:rounded-full before:bg-[#e77643] before:shadow-[0_0_0_.2rem_rgba(231,118,67,0.14)] before:content-['']">
          <p>{project}</p>
        </li>
      )}
    </ul>
  );
}
