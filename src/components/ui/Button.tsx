import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-xl border shadow-lg backdrop-blur-sm bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50',
        className
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
