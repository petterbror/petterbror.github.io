import React from 'react';
import { useTheme, type Theme } from '../contexts/ThemeContext';

const themes: { value: Theme; label: string; icon: string }[] = [
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'blue', label: 'Blue', icon: '💙' },
  { value: 'green', label: 'Green', icon: '💚' },
  { value: 'purple', label: 'Purple', icon: '💜' },
  { value: 'reggae', label: 'Reggae', icon: '🎵' },
  { value: 'wonky', label: 'Wonky', icon: '🌧️' },
];

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const currentTheme = themes.find(t => t.value === theme);

  return (
    <button
      className="theme-switcher-button"
      onClick={cycleTheme}
      title={`Current: ${currentTheme?.label} - Click to cycle themes`}
      aria-label={`Current theme: ${currentTheme?.label}. Click to cycle to next theme.`}
    >
      <span className="theme-icon">{currentTheme?.icon}</span>
    </button>
  );
};
