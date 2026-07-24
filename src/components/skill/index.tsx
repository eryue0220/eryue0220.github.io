interface Skill {
  name: string;
  logo?: string;
  link?: string;
  score?: number;
  start?: string;
  progress?: string;
}

interface Props {
  skills: Skill[];
}

export default function Skill({ skills }: Props) {
  const hasScore = skills.every((item) => item.score);
  const techs = hasScore
    ? [...skills].sort((a, b) => (b.score || 0) - (a.score || 0))
    : skills;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {
        techs.map((skill) => skill.link ? (
          <li key={skill.name}>
            <a
              className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-[#dedbd2] bg-[#fffdf9] p-4 transition hover:-translate-y-1 hover:border-[#e77643] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e77643]"
              href={skill.link}
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-9 w-9 object-contain transition group-hover:scale-110" src={skill.logo ?? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt={skill.name} width="50px" height="50px" />
              <span className="text-center text-xs text-[#77736c]">{skill.name}</span>
            </a>
          </li>
        ) : (
          <li
            key={skill.name}
            className="relative flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-[#dedbd2] bg-[#fffdf9] p-4"
          >
            <img className="h-9 w-9 object-contain" src={skill.logo ?? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt={skill.name} width="50px" height="50px" />
            <span className="text-center text-xs text-[#77736c]">{skill.name}</span>
          </li>
        ))
      }
    </ul>
  );
}
