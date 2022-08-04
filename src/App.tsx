import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { CoffeesListContextProvider } from './contexts/CoffeesListContext';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesListContextProvider>
          <Router />
        </CoffeesListContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}