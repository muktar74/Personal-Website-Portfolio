import React from 'react';
import Logo from './Logo';
import { GitHubIcon, LinkedInIcon, TwitterIcon, ChevronUpIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: <GitHubIcon className="w-6 h-6" /> },
    { name: 'LinkedIn', href: '#', icon: <LinkedInIcon className="w-6 h-6" /> },
    { name: 'Twitter', href: '#', icon: <TwitterIcon className="w-6 h-6" /> },
  ];

  const quickLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Portfolio' },
    { href: '#experience', text: 'Experience' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-700">
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="relative">
            <a href="#home" className="absolute -top-20 right-0 inline-flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1" aria-label="Back to top">
                <ChevronUpIcon className="w-6 h-6" />
            </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <a href="#home" className="block w-48 mb-4 group">
              <Logo />
            </a>
            <p className="max-w-md text-zinc-600 dark:text-zinc-400 mb-6">
              A passionate Computer Science Lecturer bridging the gap between academia and industry through technology and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="bg-zinc-200 dark:bg-zinc-900 py-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
              <p className="font-mono">Designed & Built by Muktar Abdella</p>
              <p>&copy; {currentYear}. All Rights Reserved.</p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;