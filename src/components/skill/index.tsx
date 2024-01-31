interface Skill {
  name: string;
  logo: string;
  link?: string;
  score?: number;
}

interface Props {
  skills: Skill[];
}

export default function Skill({ skills }: Props) {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {
        skills.map((skill) => skill.link
        ? (
            <li className="cursor-pointer">
              <a href={skill.link} target="_href" rel="noreferrer">
                <img src={skill.logo} alt="" width="50px" height="50px" />
              </a>
            </li>
          )
        : (
          <li>
            <img src={skill.logo} alt="" width="50px" height="50px" />
          </li>
        ))
      }
    </ul>
  );
}
