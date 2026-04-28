import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "px-6 py-2.5 rounded-[12px] font-semibold transition-all duration-300 text-base inline-flex items-center justify-center gap-2 active:scale-95";
  
  const variants = {
    primary: "bg-primary hover:bg-blue-700 text-white shadow-lg shadow-primary/20",
    outline: "bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
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
