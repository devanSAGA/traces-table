import React, { forwardRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = forwardRef<HTMLButtonElement>((props, ref) => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <button
      ref={ref}
      onClick={handleToggle}
      className="p-2 rounded-md transition-colors hover:bg-surface-high border border-outline"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-on-surface-highest" />
      ) : (
        <Moon className="w-5 h-5 text-on-surface-highest" />
      )}
    </button>
  );
});