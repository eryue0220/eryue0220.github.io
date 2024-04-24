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
      {educations.map((education) => {
        return (
          <ul className="mb-4">
            <li className="mb-3 text-#525252 text-xl">
              {education?.name} - {education?.degree}
            </li>
            <li className="pl-5 arrow text-base text-#525252">{education?.date}</li>
            <li className="pl-5 arrow text-base text-#525252">{education?.profession}</li>
          </ul>
        );
      })}
    </>
  );
}
