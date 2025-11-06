import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import FadeIn from './components/FadeIn';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 font-sans leading-relaxed transition-colors duration-300">
        <TopBar />
        <Header />
        <main className="container mx-auto px-6 md:px-12 py-12">
          <FadeIn>
            <Hero />
          </FadeIn>
          <FadeIn>
            <About />
          </FadeIn>
          <FadeIn>
            <Skills />
          </FadeIn>
          <FadeIn>
            <Services />
          </FadeIn>
          <FadeIn>
            <Experience />
          </FadeIn>
          <FadeIn>
            <Projects />
          </FadeIn>
          <FadeIn>
            <Testimonials />
          </FadeIn>
          <FadeIn>
            <Blog />
          </FadeIn>
          <FadeIn>
            <Contact />
          </FadeIn>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
};

export default App;