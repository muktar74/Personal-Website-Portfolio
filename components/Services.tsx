import React from 'react';
import type { Service } from '../types';
import { CodeIcon, DatabaseIcon, ConsultingIcon } from './Icons';
import SectionTitle from './SectionTitle';

const servicesData: Service[] = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript.',
    icon: <CodeIcon />,
  },
  {
    title: 'Data Analysis',
    description: 'Transforming raw data into actionable insights through visualization and statistical analysis to drive business decisions.',
    icon: <DatabaseIcon />,
  },
  {
    title: 'Cybersecurity Consulting',
    description: 'Providing expert advice and solutions to protect digital assets from cyber threats and ensure data security.',
    icon: <ConsultingIcon />,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10">
    <div className="w-16 h-16 mx-auto mb-4 text-teal-600 dark:text-teal-400">{service.icon}</div>
    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
    <p className="text-zinc-600 dark:text-zinc-300">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <SectionTitle>What I Offer</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;