import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`theme-toggle-slider ${theme}`}>
        {theme === 'dark' ? (
          <>
            <FiSun className="theme-icon sun" size={16} />
            {!compact && <span className="theme-text">Light</span>}
          </>
        ) : (
          <>
            <FiMoon className="theme-icon moon" size={16} />
            {!compact && <span className="theme-text">Dark</span>}
          </>
        )}
      </div>
    </button>
  );
};
