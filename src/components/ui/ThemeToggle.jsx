import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-gray-100 dark:bg-white/10 text-dark dark:text-white transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-black/5 dark:border-white/10"
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? (
        <FaMoon className="text-lg" />
      ) : (
        <FaSun className="text-lg text-yellow-400" />
      )}
    </button>
  );
}
