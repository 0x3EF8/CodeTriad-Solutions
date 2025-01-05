import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-xl border shadow-lg bg-gradient-to-b from-white/80 to-gray-100/80 text-gray-800 border-gray-200/50 dark:from-slate-800/70 dark:to-slate-900/70 dark:text-slate-50 dark:border-slate-700/50',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
