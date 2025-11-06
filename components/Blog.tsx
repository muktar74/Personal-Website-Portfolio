

import React from 'react';
import type { BlogPost } from '../types';
import { ExternalLinkIcon } from './Icons';
import SectionTitle from './SectionTitle';

const blogData: BlogPost[] = [
  {
    title: 'Mastering React Hooks in 10 Minutes',
    excerpt: 'A deep dive into the most commonly used React Hooks, with practical examples to help you write cleaner and more efficient component logic.',
    imageUrl: 'https://placehold.co/600x400/0d9488/ffffff?text=React+Hooks',
    date: 'October 26, 2023',
    url: 'https://dev.to/user/react-hooks-article', // Example real link
  },
  {
    title: 'The Art of TypeScript: Advanced Patterns',
    excerpt: 'Explore advanced TypeScript patterns like conditional types, mapped types, and decorators to build robust and scalable applications.',
    imageUrl: 'https://placehold.co/600x400/0d9488/ffffff?text=TypeScript',
    date: 'September 15, 2023',
    url: '#!', // This will be treated as a placeholder
  },
  {
    title: 'Why Tailwind CSS is a Game Changer for UI Development',
    excerpt: 'An opinionated look at the utility-first CSS framework and how it can dramatically speed up your development workflow.',
    imageUrl: 'https://placehold.co/600x400/0d9488/ffffff?text=Tailwind+CSS',
    date: 'August 02, 2023',
    url: '#!', // This will be treated as a placeholder
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const isClickable = post.url && post.url !== '#!';

  const cardContent = (
    <>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-1">{post.date}</p>
        <h3 className={`text-xl font-bold text-zinc-900 dark:text-white mb-2 ${isClickable ? 'group-hover:text-teal-600 dark:group-hover:text-teal-400' : ''} transition-colors`}>{post.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{post.excerpt}</p>
        {isClickable && (
          <div className="text-teal-600 dark:text-teal-400 font-semibold flex items-center">
            Read More <ExternalLinkIcon className="w-5 h-5 ml-2" />
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = "block bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 group";

  if (isClickable) {
    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer" className={`${cardClasses} hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 hover:-translate-y-2`}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};


const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24">
      <SectionTitle>My Writings</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogData.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;