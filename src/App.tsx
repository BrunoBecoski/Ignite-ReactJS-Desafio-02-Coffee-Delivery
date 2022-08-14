import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { CoffeesListContextProvider } from './contexts/CoffeesListContext';
import { OrderCartContextProvider } from './contexts/OrderCartContext';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CoffeesListContextProvider>
          <OrderCartContextProvider>
            <Router />
          </OrderCartContextProvider>
        </CoffeesListContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeContextProvider>
  )
}