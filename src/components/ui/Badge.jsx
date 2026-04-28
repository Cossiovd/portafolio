import React from 'react';

export default function Badge({ 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <span 
      className={`bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/10 dark:border-primary/20 inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
