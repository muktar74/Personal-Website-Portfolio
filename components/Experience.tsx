import React, { useState } from 'react';
import type { ExperienceItem } from '../types';
import { ChevronRightIcon } from './Icons';
import SectionTitle from './SectionTitle';

const experienceData: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovate Inc.',
    period: '2020 - Present',
    description: [
      'Led the development of a large-scale, client-facing dashboard using React, TypeScript, and Redux.',
      'Mentored junior developers, conducted code reviews, and established front-end best practices.',
      'Collaborated with UI/UX designers and product managers to translate mockups into responsive, high-performance web applications.',
      'Improved application performance by 30% through code splitting, lazy loading, and optimization techniques.'
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Solutions',
    period: '2018 - 2020',
    description: [
      'Developed and maintained marketing websites and e-commerce platforms for various clients using React and Gatsby.',
      'Worked closely with the design team to ensure pixel-perfect implementation of UI designs.',
      'Integrated with various third-party APIs, including payment gateways and content management systems.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Tech Starters LLC',
    period: '2016 - 2018',
    description: [
        'Assisted in the development of web applications using HTML, CSS, and jQuery.',
        'Built reusable components and helped maintain a consistent user interface across projects.',
        'Gained foundational experience in version control with Git and agile development methodologies.'
    ],
  },
];


const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeExperience = experienceData[activeTab];

  return (
    <section id="experience" className="py-24">
      <SectionTitle>Where I've Worked</SectionTitle>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Tabs */}
          <div className="flex flex-row md:flex-col justify-start overflow-x-auto md:overflow-x-visible">
            {experienceData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  w-full md:w-48 text-left whitespace-nowrap px-4 py-3 font-mono text-sm 
                  transition-colors duration-200 ease-in-out
                  border-b-2 md:border-b-0 md:border-l-2
                  ${activeTab === index 
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400 bg-teal-500/10' 
                    : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                  }
                `}
              >
                {item.company}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div key={activeTab} className="animate-fade-in min-h-[300px]">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {activeExperience.role} 
                <span className="text-teal-600 dark:text-teal-400"> @ {activeExperience.company}</span>
              </h3>
              <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                {activeExperience.period}
              </p>
            </div>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-300">
              {activeExperience.description.map((desc, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRightIcon className="w-5 h-5 mr-2 mt-1 text-teal-500 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;