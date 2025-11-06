import React, { useState } from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isActive: boolean; }> = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block md:inline-block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out
      ${isActive 
        ? 'text-teal-600 dark:text-teal-400 bg-zinc-100 dark:bg-zinc-800' 
        : 'text-zinc-600 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
      }
      focus:outline-none focus:text-teal-600 dark:focus:text-teal-400 focus:bg-zinc-100 dark:focus:bg-zinc-800
    `}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#services', text: 'Services' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Portfolio' },
    { href: '#testimonials', text: 'Testimonials' },
    { href: '#blog', text: 'Blog' },
    { href: '#contact', text: 'Contact' },
  ];
  
  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeSection = useScrollSpy(sectionIds);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-700">
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="block w-auto group">
              <Logo />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} isActive={`#${activeSection}` === link.href}>
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus:bg-zinc-200 dark:focus:bg-zinc-700 focus:text-zinc-800 dark:focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-zinc-200 dark:border-zinc-700`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
             <NavLink 
                key={link.href} 
                href={link.href} 
                onClick={closeMobileMenu}
                isActive={`#${activeSection}` === link.href}
              >
               {link.text}
             </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;