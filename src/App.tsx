import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Router';
import { CoffeesListContextProvider } from './contexts/CoffeesListContext';
import { OrderCartContextProvider } from './contexts/OrderCartContext';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesListContextProvider>
          <OrderCartContextProvider>
            <Router />
          </OrderCartContextProvider>
        </CoffeesListContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}