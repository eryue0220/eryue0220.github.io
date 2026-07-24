import React from 'react';

interface WorkContentGroup {
  name: string;
  content: string[];
}

type WorkContentItem = string | WorkContentGroup;

interface WorkExperienceProp {
  name: string;
  link: string;
  title: string;
  date: string;
  description?: string;
  content: WorkContentItem[];
}

interface WorkConfig {
  title: string;
  content: WorkExperienceProp[];
}

interface Props {
  initial?: number;
  workExperience: WorkExperienceProp[] | WorkConfig;
}

function isWorkConfig(data: Props['workExperience']): data is WorkConfig {
  return !Array.isArray(data);
}

export default function Work(props: Props = {} as Props) {
  const { useState } = React;
  const { workExperience = [], initial = 0 } = props;
  const normalizedWorkExperience = isWorkConfig(workExperience)
    ? workExperience.content
    : workExperience;
  const companyNames = (normalizedWorkExperience || [])?.map?.((exp) => exp.name);
  const [current, setCurrent] = useState(initial);

  return (
    <div className="flex min-h-60 gap-8 md:gap-12 max-md:flex-col">
      <ul className="flex w-full overflow-x-auto border-b border-[#dedbd2] md:block md:w-40 md:shrink-0 md:border-b-0">
        {companyNames.map((company, idx) =>
          <li
            key={company}
            className={`flex min-w-max items-center border-b-2 px-3 py-3 text-sm cursor-pointer md:h-12 md:border-b-0 md:border-l-2 md:pl-5 ${current === idx ? 'text-[#e77643] font-bold border-[#e77643]' : 'text-[#77736c] border-transparent'} border-solid`}
            onClick={() => setCurrent(idx)}
          >
            {company}
          </li>
        )}
      </ul>
      <ul className="w-full">
        {normalizedWorkExperience?.map?.((exp, idx) =>
          <li
            key={exp.name}
            className={`${idx === current ? 'block' : 'hidden'}`}
          >
            <h3 className="mb-1">
              <span className="font-bold text-xl tracking-tight">{exp.title}</span>&nbsp;
              {exp.link
                ? <a
                    className="font-bold text-xl text-[#e77643]"
                    href={exp.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    @{exp.name}
                  </a>
                : <span className="font-bold text-xl">@{exp.name}</span>
              }
            </h3>
            <p className="text-[#77736c] text-xs mb-5 uppercase tracking-widest">{exp.date}</p>
            <ul>
              {exp.content.map((content, contentIdx) =>
                typeof content === 'string'
                  ? <li key={`${exp.name}-${content}`} className="mb-3 pl-5 arrow">{content}</li>
                  : <li key={`${exp.name}-${content.name}-${contentIdx}`} className="mb-4 pl-5">
                      <p className="arrow font-medium">{content.name}</p>
                      <ul className="mt-2">
                        {content.content.map((item) =>
                          <li key={`${exp.name}-${content.name}-${item}`} className="mb-2 pl-5 arrow">{item}</li>
                        )}
                      </ul>
                    </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}
