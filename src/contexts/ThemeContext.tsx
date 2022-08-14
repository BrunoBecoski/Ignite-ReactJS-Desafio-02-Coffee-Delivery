import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/themes/default';
import { darkTheme } from '../styles/themes/dark';

type Themes = 'default' | 'dark';

interface ThemeContextType {
  theme: Themes;
  changeTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

interface ThemeProvider {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeProvider) {
  const [theme, setTheme] = useState<Themes>(() => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:theme');

    if(storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    } 

    return 'default';
});

  const themeSelected = () => {
    switch (theme) {
      case 'default':
        return defaultTheme;
      
      case 'dark':
        return darkTheme;
        
      default:
        return defaultTheme;
    }
  }

  function changeTheme() {
    if(theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  }

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      <ThemeProvider theme={themeSelected}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}