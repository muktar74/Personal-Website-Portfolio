import React from 'react';
import { MapPinIcon, EmailIcon, PhoneIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from './Icons';

const TopBar: React.FC = () => {
  return (
    <div className="bg-zinc-100/70 dark:bg-zinc-800/70 text-sm text-zinc-600 dark:text-zinc-400 py-2 hidden md:block border-b border-zinc-200 dark:border-zinc-700">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPinIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Bole, Welo Sefar, Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center space-x-2">
            <EmailIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <a href="mailto:muktarabdella6@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              muktarabdella6@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>+251916609427</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
