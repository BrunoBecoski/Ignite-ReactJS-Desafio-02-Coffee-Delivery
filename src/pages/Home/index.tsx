import { Intro } from './components/Intro';
import { CoffeeList } from './components/CoffeeList';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  );
}