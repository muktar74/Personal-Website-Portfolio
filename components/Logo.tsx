import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-2" aria-label="Muktar Tech Solution Logo">
        {/* Icon */}
        <svg viewBox="0 0 45 40" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
            <g>
                {/* Left part of the icon (input/learning) */}
                <path 
                    d="M20 0 L0 20 L20 40 L20 28 L8 20 L20 12 Z" 
                    className="fill-teal-600 dark:fill-teal-500 group-hover:fill-teal-500 dark:group-hover:fill-teal-400 transition-colors"
                />
                {/* Right part of the icon (output/solutions) */}
                <path 
                    d="M25 0 L45 20 L25 40 L25 28 L37 20 L25 12 Z" 
                    className="fill-zinc-400 dark:fill-zinc-500 group-hover:fill-zinc-500 dark:group-hover:fill-zinc-400 transition-colors"
                />
            </g>
        </svg>
        
        {/* Text part - hidden on small screens */}
        <div className="hidden md:flex items-center">
            <span className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                Muktar
            </span>
            <span className="ml-2 text-2xl font-light text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                Tech
            </span>
        </div>
    </div>
);

export default Logo;