// utility/ThemeContext.js
import React, { createContext, useState } from 'react';

export const Theme = createContext(null);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
};

export default ThemeContext;
