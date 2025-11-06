import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  url: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}