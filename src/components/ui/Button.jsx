import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "px-6 py-2 rounded-[10px] font-medium transition-colors text-base inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#2563eb] hover:bg-blue-700 text-white shadow-sm",
    outline: "bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-gray-50",
    ghost: "bg-transparent text-[#2563eb] hover:bg-blue-50",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
