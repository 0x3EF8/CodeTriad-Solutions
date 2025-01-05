import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface IconProps {
  icon: LucideIcon;
  className?: string;
}

export function Icon({ icon: IconComponent, className = '' }: IconProps) {
  return <IconComponent className={cn('w-4 h-4', className)} />;
}
