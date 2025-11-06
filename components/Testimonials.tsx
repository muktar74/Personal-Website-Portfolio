import React, { useState } from 'react';
import type { Testimonial } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import SectionTitle from './SectionTitle';

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Muktar was an absolute pleasure. His expertise in frontend development is exceptional, and he delivered a product that exceeded all our expectations. Highly recommended!",
    name: 'Jane Smith',
    role: 'Project Manager at Innovate Inc.',
    imageUrl: 'https://placehold.co/100x100/737373/ffffff?text=JS',
  },
  {
    quote: "Muktar is a highly skilled developer and a great team player. His ability to tackle complex problems with elegant solutions made a huge impact on our project's success.",
    name: 'Mike Johnson',
    role: 'Lead Designer at Creative Solutions',
    imageUrl: 'https://placehold.co/100x100/737373/ffffff?text=MJ',
  },
  {
    quote: "I was consistently impressed by Muktar's dedication and technical proficiency. He is a reliable and proactive engineer who is always willing to go the extra mile.",
    name: 'Sarah Chen',
    role: 'CTO at Tech Starters LLC',
    imageUrl: 'https://placehold.co/100x100/737373/ffffff?text=SC',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img 
      src={testimonial.imageUrl} 
      alt={testimonial.name} 
      className="w-24 h-24 rounded-full mb-4 border-4 border-white dark:border-zinc-900" 
      loading="lazy"
      decoding="async"
    />
    <blockquote className="text-zinc-600 dark:text-zinc-300 italic mb-4 text-lg">
      "{testimonial.quote}"
    </blockquote>
    <cite className="not-italic mt-2">
      <span className="block font-bold text-zinc-800 dark:text-zinc-200">{testimonial.name}</span>
      <span className="block text-sm text-teal-600 dark:text-teal-400">{testimonial.role}</span>
    </cite>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };
  
  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24">
      <SectionTitle>What Others Say</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="relative overflow-hidden px-10 md:px-0">
          <div key={currentIndex} className="animate-fade-in">
             <TestimonialCard testimonial={activeTestimonial} />
          </div>
        </div>

        <button 
          onClick={handlePrev} 
          aria-label="Previous testimonial"
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 p-2 rounded-full bg-white/50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
        </button>
        <button 
          onClick={handleNext} 
          aria-label="Next testimonial"
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 p-2 rounded-full bg-white/50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
        </button>

        <div className="flex justify-center mt-8 space-x-3">
            {testimonialsData.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => setCurrentIndex(index)} 
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-teal-500' : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;