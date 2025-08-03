import React, { useState, useEffect } from 'react';
import { ThemeContext } from './theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update body class for additional styling
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
