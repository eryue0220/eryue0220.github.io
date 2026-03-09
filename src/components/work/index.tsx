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
    <div className="flex min-h-60">
      <ul className="w-36">
        {companyNames.map((company, idx) =>
          <li
            key={company}
            className={`flex items-center pl-5 h-12 cursor-pointer border-l-2 ${current === idx ? 'text-[#F9CB81] font-bold border-[#F9CB81]' : 'border-l-gray-200'} border-solid`}
            onClick={() => setCurrent(idx)}
          >
            {company}
          </li>
        )}
      </ul>
      <ul className="w-136 ml-10">
        {normalizedWorkExperience?.map?.((exp, idx) =>
          <li
            key={exp.name}
            className={`${idx === current ? 'block' : 'hidden'}`}
          >
            <h3>
              <span className="font-bold text-xl">{exp.title}</span>&nbsp;
              {exp.link
                ? <a
                    className="font-bold text-xl text-[#F9CB81]"
                    href={exp.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    @{exp.name}
                  </a>
                : <span className="font-bold text-xl">@{exp.name}</span>
              }
            </h3>
            <p className="text-zinc-600 text-sm mb-4">{exp.date}</p>
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
