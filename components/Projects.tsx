
import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon, EyeIcon, CloseIcon } from './Icons';
import SectionTitle from './SectionTitle';

const projectData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern UI, product management, shopping cart, and Stripe integration for payments.',
    longDescription: 'This project is a comprehensive e-commerce solution built from the ground up. It features a robust product catalog, user authentication with JWT, a persistent shopping cart, and a seamless checkout process powered by the Stripe API. The frontend is built with Next.js for server-side rendering, ensuring fast page loads and excellent SEO performance. State management is handled with React Context, and the entire UI is styled with Tailwind CSS for a modern, responsive design.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    screenshots: ['https://picsum.photos/seed/p1ss1/600/400', 'https://picsum.photos/seed/p1ss2/600/400'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard for visualizing complex datasets with interactive charts and graphs using D3.js and React.',
    longDescription: 'This dashboard was created to handle and visualize large, complex datasets in real-time. It uses D3.js to generate dynamic and interactive charts, including bar charts, line graphs, and pie charts. The backend, built with Node.js and Express, serves data from a MongoDB database via a RESTful API. The React frontend allows users to filter, sort, and explore the data intuitively.',
    tags: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    screenshots: ['https://picsum.photos/seed/p2ss1/600/400', 'https://picsum.photos/seed/p2ss2/600/400'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A web-based chat application built with Socket.IO for real-time messaging, user authentication, and private channels.',
    longDescription: 'This application enables real-time, bi-directional communication between clients using WebSockets via the Socket.IO library. It includes a complete user authentication system with JSON Web Tokens (JWT). Users can join different rooms, send private messages, and see who is online. The backend is powered by Node.js and Express, while the frontend is a responsive single-page application built with React.',
    tags: ['React', 'Node.js', 'Socket.IO', 'JWT', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
   {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, featuring a drag-and-drop interface.',
    longDescription: 'Inspired by tools like Trello, this project management application allows teams to organize their work visually. It features boards, lists, and cards with a drag-and-drop interface for intuitive task management. Real-time updates are handled by Firebase Firestore, ensuring all team members are in sync. User authentication and data storage are also managed through Firebase services.',
    tags: ['React', 'Redux', 'Firebase', 'Material-UI'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    screenshots: ['https://picsum.photos/seed/p4ss1/600/400', 'https://picsum.photos/seed/p4ss2/600/400'],
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Personal Blog Platform',
    description: 'A fully-functional blog built with a headless CMS (Contentful) and Next.js for optimal performance and SEO.',
    longDescription: 'This project demonstrates the power of the Jamstack architecture. Content is managed through the Contentful headless CMS, and the frontend is statically generated using Next.js. This approach results in a highly performant, secure, and SEO-friendly blog. The site features dynamic routing for posts, markdown support for content, and an easy-to-use interface for content creators.',
    tags: ['Next.js', 'TypeScript', 'Contentful', 'GraphQL'],
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'A clean and simple weather application that provides real-time weather data using the OpenWeatherMap API.',
    longDescription: 'This application provides users with current weather conditions and a 5-day forecast for any city in the world. It fetches data from the OpenWeatherMap API and presents it in a clean, user-friendly interface. The project was built to practice asynchronous API calls in React, state management with hooks, and conditional rendering based on API data.',
    tags: ['React', 'API', 'JavaScript', 'CSS'],
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
    screenshots: ['https://picsum.photos/seed/p6ss1/600/400'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
  {
    title: 'Task Tracker Utility',
    description: 'A minimalist task tracker application with local storage persistence to help users manage their daily to-do lists.',
    longDescription: 'A classic "to-do list" application with a focus on simplicity and user experience. This app allows users to add, delete, and mark tasks as complete. All tasks are saved to the browser\'s local storage, so the list persists even after closing the tab. It serves as a great example of fundamental React concepts, including component state and event handling.',
    tags: ['React', 'JavaScript', 'Local Storage'],
    imageUrl: 'https://picsum.photos/seed/project7/600/400',
    sourceUrl: 'https://github.com',
  }
];

const PreviewModal: React.FC<{ project: Project; onClose: () => void; }> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
        >
            <div 
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-700 flex-shrink-0">
                    <h2 id="preview-title" className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        aria-label="Close preview"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex-grow bg-zinc-200 dark:bg-zinc-800">
                    <iframe 
                        src={project.liveUrl} 
                        title={project.title}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin"
                    />
                </div>
            </div>
        </div>
    );
};

const ProjectCard: React.FC<{ project: Project; onPreview: (project: Project) => void; }> = ({ project, onPreview }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `details-${project.title.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
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
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 focus:ring-teal-500" aria-label={`Source code for ${project.title}`}>
                  <GitHubIcon className="w-6 h-6" />
                </a>
              )}
              {project.liveUrl ? (
                <>
                  <button onClick={() => onPreview(project)} className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 focus:ring-teal-500" aria-label={`Preview ${project.title}`}>
                    <EyeIcon className="w-6 h-6" />
                  </button>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 focus:ring-teal-500" aria-label={`Live demo of ${project.title}`}>
                    <ExternalLinkIcon className="w-6 h-6" />
                  </a>
                </>
              ) : (
                <span className="inline-block bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs font-mono px-3 py-1 rounded-full cursor-not-allowed whitespace-nowrap">Coming Soon</span>
              )}
          </div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="bg-zinc-200 dark:bg-zinc-700 text-teal-800 dark:text-teal-300 text-xs font-mono px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Section & Toggle Button */}
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-4 space-y-4">
                        <h4 className="font-bold text-zinc-800 dark:text-zinc-200">Project Details</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line">{project.longDescription}</p>
                        
                        {project.screenshots && project.screenshots.length > 0 && (
                        <div>
                            <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2">Screenshots</h4>
                            <div className="grid grid-cols-2 gap-2">
                            {project.screenshots.map((ss, index) => (
                                <a href={ss} target="_blank" rel="noopener noreferrer" key={index} className="focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 focus:ring-teal-500 rounded-md">
                                <img src={ss} alt={`${project.title} screenshot ${index + 1}`} className="rounded-md object-cover w-full h-32 hover:opacity-80 transition-opacity" loading="lazy" />
                                </a>
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-500 transition-colors py-2 rounded-md hover:bg-teal-500/10 focus:outline-none focus:bg-teal-500/20"
                aria-expanded={isExpanded}
                aria-controls={panelId}
            >
                {isExpanded ? 'Show Less' : 'View Details'}
                {isExpanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
            </button>
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const allTags = ['All', ...Array.from(new Set(projectData.flatMap(p => p.tags)))];
  const [activeTag, setActiveTag] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
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

  const handlePreviewClick = (project: Project) => {
    if (project.liveUrl) {
      setPreviewProject(project);
    }
  };

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
          <ProjectCard key={project.title} project={project} onPreview={handlePreviewClick} />
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
      {previewProject && <PreviewModal project={previewProject} onClose={() => setPreviewProject(null)} />}
    </section>
  );
};

export default Projects;