'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-lg bg-dark-secondary border border-secondary-700/50 text-grey-400" 
            aria-label="Toggle Theme" 
            >
                <div className="w-5 h-5" />
            </button>
        );
    }  

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-dark-secondary dark:bg-dark-secondary border border-secondary-700/50 dark:border-secondary-700/50 text-gray-400 hover:text-primary-500 hover:border-primary-500 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
        </button>
    );
}