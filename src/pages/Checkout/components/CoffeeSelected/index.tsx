import { useContext } from 'react';
import { Minus, Plus, Trash } from 'phosphor-react';

import { OrderCartContext, CoffeeData } from '../../../../contexts/OrderCartContext';

import { 
  CoffeeSelectedContainer, 
  Details,
  Actions, 
  CardCounter
} from './styles';

interface CoffeeSelectedProps {
  coffee: CoffeeData;
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { 
    removeCoffee,
    incrementCoffee,
    decrementCoffee,
  } = useContext(OrderCartContext);

  const formatPrice = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' }
    ).format(coffee.price)

  function handleIncrementCoffee() {
    incrementCoffee(coffee);
  }
  
  function handleDecrementCoffee() {
    decrementCoffee(coffee);
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee);
  }

  return (
    <CoffeeSelectedContainer>
      <img src={coffee.img} />
      <Details>
        <div>
          <span>{coffee.name}</span>
          <span>{formatPrice}</span>
        </div>

        <Actions>
          <CardCounter>
            <button type="button" onClick={handleDecrementCoffee}>
              <Minus weight="bold" />
            </button>
            <span>
              {coffee.quantity}
            </span>
            <button type="button" onClick={handleIncrementCoffee}>
              <Plus weight="bold" />
            </button>
          </CardCounter>

          <button type="button" onClick={handleRemoveCoffee}>
            <Trash />
            Remover
          </button>
        </Actions>
      </Details>

    </CoffeeSelectedContainer>
  );
}