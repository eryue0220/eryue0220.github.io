interface Education {
  name: string;
  date: string;
  degree: string;
  profession: string;
}

interface Props {
  educations: Education[];
}

export default function Education({ educations = [] }: Props) {
  return (
    <>
      {educations.map((education) =>  (
        <ul key={education.name} className="mb-4">
          <li className="mb-3 text-[#525252] text-xl">
            {education?.name} - {education?.degree}
          </li>
          <li className="relative pl-5 text-base text-[#525252] before:absolute before:top-[.68em] before:left-[.15rem] before:h-[.35rem] before:w-[.35rem] before:-translate-y-1/2 before:rounded-full before:bg-[#e77643] before:shadow-[0_0_0_.2rem_rgba(231,118,67,0.14)] before:content-['']">{education?.date}</li>
          <li className="relative pl-5 text-base text-[#525252] before:absolute before:top-[.68em] before:left-[.15rem] before:h-[.35rem] before:w-[.35rem] before:-translate-y-1/2 before:rounded-full before:bg-[#e77643] before:shadow-[0_0_0_.2rem_rgba(231,118,67,0.14)] before:content-['']">{education?.profession}</li>
        </ul>
      ))}
    </>
  );
}
