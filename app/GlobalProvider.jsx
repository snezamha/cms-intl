'use client';
import { ThemeProvider } from 'next-themes';

export function GlobalProvider({ children }) {
  return <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>;
}
