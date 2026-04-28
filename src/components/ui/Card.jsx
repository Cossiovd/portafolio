import React from 'react';

export default function Card({ 
  children, 
  className = '', 
  hoverable = true,
  ...props 
}) {
  const hoverStyles = hoverable ? "hover:shadow-xl transition-all duration-300 hover:-translate-y-1" : "";
  
  return (
    <div 
      className={`bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[24px] shadow-sm overflow-hidden flex flex-col ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
