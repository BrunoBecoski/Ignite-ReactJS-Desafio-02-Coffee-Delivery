import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor omnis nesciunt animi nobis ratione facilis quos reiciendis consequatur iure, sint natus rerum harum culpa, expedita sapiente architecto, sit quidem fuga!</p>

      <GlobalStyle />
    </ThemeProvider>
  )
}