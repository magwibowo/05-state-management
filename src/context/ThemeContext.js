'use client';

import { createContext, useContext, useState} from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light'? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
}