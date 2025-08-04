import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useShortcut } from './ShortcutContext';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
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

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newTheme = !prev;
      
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
      
      return newTheme;
    });
  }, []);

  // Register keyboard shortcut for theme toggle
  useShortcut('k', toggleTheme, {
    id: 'toggle-theme',
    metaKey: true, // Cmd on Mac
    description: 'Toggle dark/light theme'
  });

  // Also register Ctrl+T for Windows/Linux
  useShortcut('k', toggleTheme, {
    id: 'toggle-theme-ctrl',
    ctrlKey: true,
    description: 'Toggle dark/light theme'
  });

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};