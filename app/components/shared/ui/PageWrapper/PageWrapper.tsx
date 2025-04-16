import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full min-h-full ${className}`}
    >
      {children}
    </div>
  );
};
