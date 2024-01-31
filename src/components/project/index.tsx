interface Props {
  projects: string[];
}

export default function Project({ projects }: Props) {
  return (
    <ul>
      {projects.map((project) =>
        <li className="pl-5 pb-2 arrow text-base text-#525252 leading-relaxed">
          <p>{project}</p>
        </li>
      )}
    </ul>
  );
}
