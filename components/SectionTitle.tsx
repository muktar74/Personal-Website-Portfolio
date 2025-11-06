import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => {
  return (
    <div className="text-center mb-12">
        {subtitle && (
            <h3 className="text-lg font-mono text-teal-600 dark:text-teal-400 mb-2">{subtitle}</h3>
        )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-teal-500 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
