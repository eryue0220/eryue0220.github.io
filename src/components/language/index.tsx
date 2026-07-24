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
        <li key={lang.name} className="relative pl-5 text-base leading-relaxed text-[#525252] before:absolute before:top-[.68em] before:left-[.15rem] before:h-[.35rem] before:w-[.35rem] before:-translate-y-1/2 before:rounded-full before:bg-[#e77643] before:shadow-[0_0_0_.2rem_rgba(231,118,67,0.14)] before:content-['']">
          <p>{lang.name} ({lang.degree})</p>
        </li>
      )}
    </ul>
  );
}
