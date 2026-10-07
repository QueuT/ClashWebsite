'use client';

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'clash-theme';
type Theme = 'light' | 'dark';

const themeListeners = new Set<() => void>();

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

function updateTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  themeListeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  function toggleTheme() {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      <span className="text-base" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}
