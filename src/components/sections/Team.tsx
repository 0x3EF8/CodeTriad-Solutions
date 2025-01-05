'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Image from 'next/image';
import { teamMembers } from '@/components/data/teamData';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/Sectiontitle';
import { Icon } from '@/components/ui/Icon';

export default function Component({
  isDarkMode = false,
}: {
  isDarkMode?: boolean;
}) {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <section id="team" className="py-10 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <SectionTitle icon={<Icon icon={Users} />}>
            Our Leadership Team
          </SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 mr-6 relative overflow-hidden rounded-lg border border-gray-300 shadow-md transform hover:scale-110">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={`text-md ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p
                    className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {member.bio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {[
                      { href: member.github, icon: Github, label: 'GitHub' },
                      {
                        href: member.linkedin,
                        icon: Linkedin,
                        label: 'LinkedIn',
                      },
                      { href: member.twitter, icon: Twitter, label: 'Twitter' },
                    ].map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          isDarkMode
                            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <Icon icon={social.icon} className="h-4 w-4" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    ))}
                  </div>
                  <span
                    onClick={() => toggleExpand(index)}
                    className={`cursor-pointer text-sm font-semibold flex items-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  >
                    {expandedMember === index ? 'Less' : 'More'}
                    <Icon
                      icon={expandedMember === index ? ChevronUp : ChevronDown}
                      className="ml-1 h-4 w-4"
                    />
                  </span>
                </div>
                {expandedMember === index && (
                  <div className="mt-4">
                    <ul
                      className={`list-disc list-inside mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {member.achievements.map(
                        (achievement, achievementIndex) => (
                          <li key={achievementIndex} className="mb-1">
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
