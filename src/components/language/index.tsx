interface Language {
  name: string;
  degree: string;
}

interface Props {
  languages: Language[]
}

export default function Language({ languages }: Props) {
  return (
    <ul>
      {languages.map((lang) =>
        <li className="arrow pl-5 text-base text-#525252 leading-relaxed">
          <p>{lang.name} ({lang.degree})</p>
        </li>
      )}
    </ul>
  );
}
