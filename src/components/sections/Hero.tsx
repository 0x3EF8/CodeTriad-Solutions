'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  phrases,
  cards,
  heroTitle,
  heroSubtitle,
  heroDescription,
} from '@/components/data/heroData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCardSet, setCurrentCardSet] = useState(0);

  useEffect(() => {
    let phraseInterval: NodeJS.Timeout;
    let typingInterval: NodeJS.Timeout;

    const typePhrase = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      let i = 0;
      typingInterval = setInterval(() => {
        if (i < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    };

    phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      clearInterval(typingInterval);
      setTypedText('');
      typePhrase();
    }, 5000);

    typePhrase();

    return () => {
      clearInterval(phraseInterval);
      clearInterval(typingInterval);
    };
  }, [currentPhraseIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardSet((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentCardSet((prev) => (prev - 1 + 2) % 2);
  };

  const handleNext = () => {
    setCurrentCardSet((prev) => (prev + 1) % 2);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-25">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="-20 -20 190 150"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-full md:w-1/2 h-full object-cover object-right"
          preserveAspectRatio="xMinYMin slice"
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
            opacity="0.05"
          />
          <polygon
            points="77,34 120,34 105,60 88,60 65,95 38,95"
            fill="url(#grad1)"
            opacity="0.05"
          />
        </svg>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full space-y-8"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="h-1 w-12 bg-gradient-to-r from-blue-600 to-teal-400"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
              <span className="font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                {typedText}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                {heroTitle}
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}
            >
              {heroSubtitle}
            </p>

            <p
              className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
            >
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact">
                <Button>
                  Get in Touch
                  <Icon icon={ArrowRight} className="ml-2 -mr-1 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button>Learn More</Button>
              </Link>
            </div>

            <div className="relative">
              <div className="flex justify-end mb-4 space-x-2">
                <Button onClick={handlePrev}>
                  <Icon icon={ChevronLeft} className="h-4 w-4" />
                </Button>
                <Button onClick={handleNext}>
                  <Icon icon={ChevronRight} className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cards
                  .slice(currentCardSet * 3, currentCardSet * 3 + 3)
                  .map((item, index) => (
                    <Card key={index}>
                      <div className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-red-500' : 'bg-red-400'}`}
                          ></div>
                          <div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'}`}
                          ></div>
                          <div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-green-500' : 'bg-green-400'}`}
                          ></div>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon
                            icon={item.icon}
                            className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                          />
                          <span
                            className={`font-mono text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                          >
                            {item.text}
                          </span>
                        </div>
                        <p
                          className={`font-mono text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
