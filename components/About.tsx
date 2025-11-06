import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-zinc-600 dark:text-zinc-300 text-lg space-y-4">
          <p>
            Hello! I'm Muktar, a passionate Computer Science Lecturer with a knack for creating beautiful, performant, and user-friendly web applications. My journey into technology was driven by a deep curiosity for how things work, which naturally led me into the world of education where I can share that passion with others.
          </p>
          <p>
            Today, I have the pleasure of teaching the next generation of developers while also staying hands-on in the industry, working on freelance projects and contributing to open source. This dual role allows me to bring real-world, cutting-edge practices into the classroom.
          </p>
          <p>
            I thrive on turning complex problems into simple, elegant solutions and enjoy the entire development lifecycle, from initial concept and design to deployment and maintenance.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-teal-500 dark:bg-teal-600 rounded-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
            <img 
              src="https://picsum.photos/400/400" 
              alt="Muktar Abdella" 
              className="relative w-full h-full object-cover rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;