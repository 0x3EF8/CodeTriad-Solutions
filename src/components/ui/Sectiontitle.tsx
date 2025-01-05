import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  children: ReactNode;
  icon: ReactNode;
}

export function SectionTitle({ children, icon }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 flex items-center'
      )}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </h2>
  );
}
