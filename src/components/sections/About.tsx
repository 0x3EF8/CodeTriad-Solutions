'use client';

import { motion } from 'framer-motion';
import { Code, Calendar, Target } from 'lucide-react';
import { aboutText, skills, timeline } from '@/components/data/aboutData';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/Sectiontitle';
import { Icon } from '@/components/ui/Icon';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionTitle icon={<Icon icon={Code} />}>Who We Are</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="w-96 h-96 mx-auto md:mx-0"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-20 -20 190 150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
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
              </motion.div>
            </div>
            <div
              className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {aboutText.map((text, index) => (
                <p key={index} className="text-lg">
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="p-6">
              <div className="flex items-center mb-6">
                <Icon icon={Calendar} className="mr-3 text-blue-500" />
                <h3
                  className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  Our Journey
                </h3>
              </div>
              <div className="relative">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-8 flex"
                  >
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} mb-1`}
                      ></div>
                      {index !== timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                        ></div>
                      )}
                    </div>
                    <div>
                      <time
                        className={`mb-1 text-sm font-normal leading-none ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        {item.date}
                      </time>
                      <h4
                        className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}
                      >
                        {item.event}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Icon icon={Target} className="mr-3 text-blue-500" />
                <h3
                  className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  Our Expertise
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span
                        className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
                    >
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
