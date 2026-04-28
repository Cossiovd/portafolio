import React from 'react';

export default function Card({ 
  children, 
  className = '', 
  hoverable = true,
  ...props 
}) {
  const hoverStyles = hoverable ? "hover:shadow-md transition-shadow" : "";
  
  return (
    <div 
      className={`bg-white border border-gray-100 rounded-[14px] shadow-sm overflow-hidden flex flex-col ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
