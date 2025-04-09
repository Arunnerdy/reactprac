import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()


export const Themeprovider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or use light as default
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';   
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme to HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => {
  return useContext(ThemeContext);
}
