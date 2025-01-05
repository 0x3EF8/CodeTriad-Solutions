'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('home');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = {
      rootMargin: '0px 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Our Team', href: '#team' },
  ];

  const isActive = (href: string) =>
    activeLink === href.substring(1)
      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'
      : 'text-gray-500 dark:text-gray-300';

  const handleLinkClick = (href: string) => {
    setActiveLink(href.substring(1));

    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border shadow-lg backdrop-blur-sm bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50 w-full">
      <div className="flex justify-between items-center h-16 w-full px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg
              width="65"
              height="65"
              viewBox="-20 -20 190 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <polygon
                points="20,0 145,0 130,25 33,25 50,58.5 33,85 0,20"
                fill="url(#grad1)"
              />
              <polygon
                points="77,34 120,34 105,60 88,60 65,95 38,95"
                fill="url(#grad1)"
              />
            </svg>
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                CodeTriad
              </span>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-300 ml-1">
                Solutions
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 ml-auto pr-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-transform duration-300 hover:scale-105 ${isActive(item.href)} hover:text-gray-900 dark:hover:text-white`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center pr-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md ${
              isDarkMode
                ? 'bg-gray-800 text-yellow-400'
                : 'bg-gray-200 text-gray-700'
            } transition-colors duration-300 mr-2`}
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isMounted && (isDarkMode ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-0 border shadow-lg backdrop-blur-sm bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50`}
      >
        <div className="flex flex-col items-center space-y-4 pt-4 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-transform duration-300 hover:scale-105 ${isActive(item.href)} hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-700`}
              onClick={() => handleLinkClick(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
