'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Github,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/components/data/projectsData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/Sectiontitle';
import { Icon } from '@/components/ui/Icon';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

function Dropdown({ value, onChange, options, className = '' }: DropdownProps) {
  return (
    <select
      className={`px-3 py-1 rounded-md bg-white dark:bg-gray-800 ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectFilter, setProjectFilter] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'All Projects') return projects;
    return projects.filter((project) => project.type === projectFilter);
  }, [projectFilter]);

  const totalPages = Math.ceil(filteredProjects.length / 6);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-10 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <SectionTitle icon={<Icon icon={Code} />}>Projects</SectionTitle>
          <div className="flex items-center space-x-4">
            <Dropdown
              value={projectFilter}
              onChange={(value) => {
                setProjectFilter(value);
                setCurrentPage(0);
              }}
              options={['All Projects', 'Frontend', 'Backend', 'Full Stack']}
            />
            <div className="flex space-x-2">
              <Button onClick={prevPage}>
                <Icon icon={ChevronLeft} className="w-4 h-4" />
              </Button>
              <Button onClick={nextPage}>
                <Icon icon={ChevronRight} className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects
            .slice(currentPage * 6, (currentPage + 1) * 6)
            .map((project, index) => (
              <Card key={index}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isDarkMode
                        ? 'bg-gradient-to-t from-gray-900 to-transparent'
                        : 'bg-gradient-to-t from-white to-transparent'
                    }`}
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold mb-1 text-white shadow-text">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded-full text-xs bg-blue-500 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-full text-xs bg-gray-500 text-white">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
                        >
                          <Icon icon={Github} className="mr-1" /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="text-sm text-teal-400 hover:text-teal-500 flex items-center"
                        >
                          <Icon icon={ExternalLink} className="mr-1" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
