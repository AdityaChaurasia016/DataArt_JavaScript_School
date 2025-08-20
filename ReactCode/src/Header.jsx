import React from 'react';

export default function Header({ onThemeToggle, isDarkTheme }) {
  return (
    <header className="text-center py-3 border-bottom border-primary">
      <div className="logo">
        <h1 className="text-primary">Space Race</h1>
      </div>
      <button className="btn btn-outline-primary mt-2" onClick={onThemeToggle}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </header>
  );
}
