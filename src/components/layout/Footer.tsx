'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GitlabIcon as GitHub,
  Youtube,
  Phone,
  Mail,
  MapPin,
  X,
} from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Linkedin, label: 'LinkedIn' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: GitHub, label: 'GitHub' },
    { Icon: Youtube, label: 'YouTube' },
  ];

  const legalLinks = [
    {
      title: 'Privacy Policy',
      content:
        'Our Privacy Policy outlines how we collect, use and protect your personal information. We are committed to safeguarding your privacy and ensuring the security of your data.',
    },
    {
      title: 'Terms of Service',
      content:
        'By using our services, you agree to abide by our Terms of Service. These terms outline the rules and regulations for the use of our website and services.',
    },
    {
      title: 'Cookie Policy',
      content:
        'Our Cookie Policy explains how we use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.',
    },
    {
      title: 'FAQ',
      content:
        'Find answers to commonly asked questions about our services, billing, and support in our Frequently Asked Questions (FAQ) section.',
    },
  ];

  const handleLegalLinkClick = (title: string, content: string) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  return (
    <footer
      className={`mt-16 border shadow-lg backdrop-blur-sm bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
              CodeTriad Solutions
            </h3>
            <p
              className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Your Vision, Our Mission. We use the latest tech to bring your
              ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className={`${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-300`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Get in Touch
            </h4>
            <p
              className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Contact us for solutions designed just for you.
            </p>
            <ul
              className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-500" />
                <span>+63 0000000000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-500" />
                <a
                  href="mailto:contact@codetriad.tech"
                  className="hover:underline"
                >
                  contact@codetriad.tech
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-500" />
                <span>Maasin City, Southern Leyte, Philippines 6600</span>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Legal
            </h4>
            <ul
              className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <motion.button
                    onClick={() =>
                      handleLegalLinkClick(link.title, link.content)
                    }
                    className="hover:underline text-left"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {link.title}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <p
            className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            © {new Date().getFullYear()} CodeTriad Solutions. All rights
            reserved.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div
            className={`w-full max-w-3xl p-6 border shadow-lg backdrop-blur-sm bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                {modalContent.title}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              >
                <X size={24} />
              </button>
            </div>
            <p
              className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {modalContent.content}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
