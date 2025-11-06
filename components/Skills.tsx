import React from 'react';
import type { Skill } from '../types';
import { ReactIcon, TypeScriptIcon, JavaScriptIcon, NodeIcon, TailwindIcon, FigmaIcon, GitIcon, DockerIcon } from './Icons';
import SectionTitle from './SectionTitle';

const skills: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <TypeScriptIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10">
    <div className="w-16 h-16 mb-4 text-teal-600 dark:text-teal-400">{skill.icon}</div>
    <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{skill.name}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <SectionTitle>My Skillset</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;