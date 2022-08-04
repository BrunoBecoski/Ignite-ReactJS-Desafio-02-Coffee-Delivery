import { useContext } from 'react';

import { CoffeesListContext } from '../../contexts/CoffeesListContext';

import { Intro } from './components/Intro';
import { CoffeeCard } from './components/CoffeeCard';

import { HomeContainer, CoffeeList } from './styles';

export function Home() {
  const { coffeesList } = useContext(CoffeesListContext);

  return (
    <HomeContainer>
      <Intro />

      <CoffeeList>
        <h2>Nossos Cafés</h2>

        <div>
          {
            coffeesList.map(coffee => (
              <CoffeeCard 
                key={coffee.id}
                coffee={coffee}
              />
            ))
          }
        </div>
      </CoffeeList>
    </HomeContainer>
  );
}