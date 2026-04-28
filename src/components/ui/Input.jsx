import React from 'react';

export default function Input({ 
  label,
  id,
  type = 'text',
  className = '', 
  as = 'input',
  ...props 
}) {
  const Component = as;
  
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-[#1a1a1a] font-medium text-sm">
          {label}
        </label>
      )}
      <Component
        id={id}
        type={as === 'input' ? type : undefined}
        className="w-full px-4 py-3 rounded-[10px] border border-gray-200 bg-[#f9fafb] text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] transition-all"
        {...props}
      />
    </div>
  );
}
