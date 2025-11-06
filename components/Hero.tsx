import React from 'react';
import { ChevronDownIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center -mt-16 py-20 relative">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 mb-4 font-mono">
          Hi, I’m Muktar Abdella
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-zinc-900 dark:text-white mb-4">
          Computer Science Lecturer.
        </h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-zinc-500 dark:text-zinc-400 mb-8">
          & Tech Enthusiast.
        </h3>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-10">
          I bridge the gap between academia and industry, focusing on building accessible,
          human-centered products with modern web technologies and sharing my passion for technology through education.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-teal-700 dark:hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block bg-transparent border-2 border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 font-semibold py-3 px-8 rounded-md hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-zinc-900 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
        <ChevronDownIcon className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;