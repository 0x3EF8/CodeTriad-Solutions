'use client';

import { useState, useRef } from 'react';
import {
  Code,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/components/data/servicesData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/Sectiontitle';
import { Icon } from '@/components/ui/Icon';

interface ServicesProps {
  isDarkMode: boolean;
}

export default function Services({ isDarkMode }: ServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(services.length / 3)
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(services.length / 3)) %
        Math.ceil(services.length / 3)
    );
  };

  const toggleExpand = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const displayedServices = services.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <section id="services" className="py-10 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <SectionTitle icon={<Icon icon={Code} />}>Our Services</SectionTitle>
          <div className="flex space-x-2">
            <Button onClick={handlePrev}>
              <Icon icon={ChevronLeft} className="w-4 h-4" />
            </Button>
            <Button onClick={handleNext}>
              <Icon icon={ChevronRight} className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={containerRef}
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-4">
                  <div
                    className={`flex items-center space-x-2 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div
                    className={`text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'} mb-2`}
                  >
                    Service Overview
                  </div>
                  <div className="flex items-center mb-2">
                    <Icon
                      icon={service.icon}
                      className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    />
                    <h3
                      className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {/* Add any additional icons or elements here if needed */}
                    </div>
                    <span
                      onClick={() => toggleExpand(index)}
                      className={`cursor-pointer text-xs font-semibold flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    >
                      {expandedService === index ? 'Less' : 'Learn More'}
                      <Icon
                        icon={
                          expandedService === index ? ChevronUp : ChevronDown
                        }
                        className="ml-1 h-3 w-3"
                      />
                    </span>
                  </div>
                  {expandedService === index && (
                    <div
                      className={`mt-2 p-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
                    >
                      <p
                        className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}
                      >
                        Service Details
                      </p>
                      <p
                        className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
