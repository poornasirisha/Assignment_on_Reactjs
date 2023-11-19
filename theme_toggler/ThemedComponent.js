
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? 'pink' : 'green', color: theme === 'light' ? 'green' : 'pink', padding: '20px', textAlign: 'center' }}>
      <h2>Themed Component</h2>
      <p>This component uses the {theme} theme.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
