import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      document.body.classList.toggle('dark-mode', storedTheme === 'dark');
    }
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <label className="theme-toggle">
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
