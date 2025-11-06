
import React, { useState } from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';
import SectionTitle from './SectionTitle';

const projectData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product management, shopping cart, and Stripe integration for payments.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard for visualizing complex datasets with interactive charts and graphs using D3.js and React.',
    tags: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A web-based chat application built with Socket.IO for real-time messaging, user authentication, and private channels.',
    tags: ['React', 'Node.js', 'Socket.IO', 'JWT', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
   {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring a drag-and-drop interface.',
    tags: ['React', 'Redux', 'Firebase', 'Material-UI'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    sourceUrl: '#',
  },
  {
    title: 'Personal Blog Platform',
    description: 'A fully-functional blog built with a headless CMS (Contentful) and Next.js for optimal performance and SEO.',
    tags: ['Next.js', 'TypeScript', 'Contentful', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Weather Forecast App',
    description: 'A clean and simple weather application that provides real-time weather data using the OpenWeatherMap API.',
    tags: ['React', 'API', 'JavaScript', 'CSS'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Task Tracker Utility',
    description: 'A minimalist task tracker application with local storage persistence to help users manage their daily to-do lists.',
    tags: ['React', 'JavaScript', 'Local Storage'],
    imageUrl: 'https://picsum.photos/seed/project7/600/400',
    sourceUrl: '#',
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 hover:-translate-y-2 flex flex-col group">
    <div className="relative overflow-hidden h-48 bg-zinc-200 dark:bg-zinc-700">
        <img 
            src={project.imageUrl} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white pr-4">{project.title}</h3>
        <div className="flex items-center space-x-3 flex-shrink-0">
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label={`Source code for ${project.title}`}>
                <GitHubIcon className="w-6 h-6" />
              </a>
            )}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" aria-label={`Live demo of ${project.title}`}>
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            ) : (
              <span className="inline-block bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs font-mono px-3 py-1 rounded-full cursor-not-allowed whitespace-nowrap">Coming Soon</span>
            )}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="bg-zinc-200 dark:bg-zinc-700 text-teal-800 dark:text-teal-300 text-xs font-mono px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  const allTags = ['All', ...Array.from(new Set(projectData.flatMap(p => p.tags)))];
  const [activeTag, setActiveTag] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 6;


  const filteredProjects = activeTag === 'All'
    ? projectData
    : projectData.filter(p => p.tags.includes(activeTag));
    
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleFilterChange = (tag: string) => {
    if (tag === activeTag) return; // Do nothing if the same tag is clicked
    
    setCurrentPage(1); // Reset to first page on filter change
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTag(tag);
      setIsAnimating(false);
    }, 300); // This duration should match the CSS transition duration
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Optionally, scroll to the top of the projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="projects" className="py-24">
      <SectionTitle>My Portfolio</SectionTitle>
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {allTags.map(tag => (
          <button 
            key={tag} 
            onClick={() => handleFilterChange(tag)}
            className={`font-mono px-4 py-2 rounded-md transition-colors duration-300 text-sm md:text-base ${activeTag === tag ? 'bg-teal-600 text-white' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-teal-100 dark:hover:bg-teal-900/50'}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 md:gap-4 mt-12">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 font-mono text-sm bg-zinc-200 dark:bg-zinc-700 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
            >
                <ChevronLeftIcon className="w-4 h-4" />
                <span>Prev</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 font-mono text-sm rounded-md transition-colors ${
                        currentPage === page
                        ? 'bg-teal-600 text-white'
                        : 'bg-zinc-200 dark:bg-zinc-700 hover:bg-teal-100 dark:hover:bg-teal-900/50'
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </button>
            ))}
             <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 font-mono text-sm bg-zinc-200 dark:bg-zinc-700 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
            >
                 <span>Next</span>
                <ChevronRightIcon className="w-4 h-4" />
            </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
