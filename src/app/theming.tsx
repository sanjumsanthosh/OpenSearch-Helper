import React, { useState } from 'react';

const Theming = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const viewJson = () => {
    const json = JSON.stringify({ theme }, null, 2);
    navigator.clipboard.writeText(json);
    alert("Theme configuration copied to clipboard:\n" + json);
  };

  return (
    <div>
      <h2>Theming and Styling</h2>
      <button onClick={toggleTheme} className="bg-blue-500 text-white p-2 rounded">
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <button onClick={viewJson} className="bg-gray-500 text-white p-2 rounded ml-4">
        View JSON
      </button>
    </div>
  );
};

export default Theming;
