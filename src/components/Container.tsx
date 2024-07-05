'use client';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
