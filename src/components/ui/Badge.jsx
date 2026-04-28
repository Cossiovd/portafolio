import React from 'react';

export default function Badge({ 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <span 
      className={`bg-[#f5f5f5] text-[#1a1a1a] text-sm px-3 py-1 rounded-full font-medium inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
