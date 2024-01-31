import { useCallback, useState } from 'react';
import Learn from './learn';
import Score from './score';

interface Skill {
  name: string;
  logo: string;
  link?: string;
  show?: boolean;
  score?: number;
  start?: string;
  progress?: string;
}

interface Props {
  skills: Skill[];
}

export default function Skill({ skills }: Props) {
  const hasScore = skills.every((item) => item.score);
  const [content, setContent] = useState<Skill[]>(skills.map((skill) => ({ ...skill, show: false })));
  const techs = hasScore
    ? content.map((item) => ({ ...item, score: item.score || 0 })).sort((a, b) => b.score - a.score)
    : content;
  const onMouseEvent = useCallback((target: Skill) => {
    setContent(content.map((item) => target.name === item.name ? { ...item, show: !target.show, } : item))
  }, []);

  return (
    <ul className="grid grid-cols-4 gap-8">
      {
        techs.map((skill) => skill.link ? (
          <li className="cursor-pointer">
            <a href={skill.link} target="_href" rel="noreferrer">
              <img src={skill.logo} alt={skill.name} width="50px" height="50px" />
            </a>
          </li>
        ) : (
          <li
            className="relative"
            onMouseEnter={() => onMouseEvent(skill)}
            onMouseLeave={() => onMouseEvent(skill)}
          >
            <img src={skill.logo} alt={skill.name} width="50px" height="50px" />
            <Score score={skill.score} show={skill.show} />
            <Learn start={skill.start} progress={skill.progress} show={skill.show} />
          </li>
        ))
      }
    </ul>
  );
}
