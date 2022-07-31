import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Checkout } from './components/Checkout';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      {/* <Home /> */}
      <Checkout />

      <GlobalStyle />
    </ThemeProvider>
  )
}