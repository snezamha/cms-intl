'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <li>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme('light')}
          className='outline-none focus:outline-none'
        >
          <span className='sr-only'>Light Mode</span>
          <SunIcon className='fill-current w-6 h-6' />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className='outline-none focus:outline-none'
        >
          <span className='sr-only'>Dark Mode</span>
          <MoonIcon className='fill-current w-6 h-6' />
        </button>
      )}
    </li>
  );
};

export default ThemeChanger;
