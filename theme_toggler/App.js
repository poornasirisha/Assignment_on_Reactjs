
import React from 'react';
import ThemedComponent from './ThemedComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
