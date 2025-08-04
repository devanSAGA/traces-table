import React, { useState, useEffect, forwardRef } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = forwardRef<HTMLButtonElement>((props, ref) => {
  const [isDark, setIsDark] = useState(false);

  // Check for saved theme or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Temporarily disable transitions
    document.documentElement.style.setProperty('--animate-none', '1');
    document.documentElement.classList.add('transition-none');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Re-enable transitions after a short delay
    setTimeout(() => {
      document.documentElement.classList.remove('transition-none');
      document.documentElement.style.removeProperty('--animate-none');
    }, 100);
  };

  return (
    <button
      ref={ref}
      onClick={toggleTheme}
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