'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'clash-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return storedTheme ?? (prefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={theme === 'dark'}
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      <span className="text-base" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}
