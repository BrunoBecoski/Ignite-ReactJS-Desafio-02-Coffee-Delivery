import { useContext } from 'react';
import { Minus, Plus, Trash } from 'phosphor-react';

import { CoffeeInfoInCart, OrderCartContext } from '../../../../contexts/OrderCartContext';

import { 
  CoffeeSelectedContainer, 
  Details,
  Actions, 
  CardCounter
} from './styles';

interface CoffeeSelectedProps {
  coffee: CoffeeInfoInCart;
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { 
    decrementCoffeeQuantity,
    incrementCoffeeQuantity,
    removeCoffee
  } = useContext(OrderCartContext);

  const formatPrice = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' }
    ).format(coffee.price)

  function handleDecrementCoffeeQuantity() {
    decrementCoffeeQuantity(coffee);
  }

  function handleIncrementCoffeeQuantity() {
    incrementCoffeeQuantity(coffee);
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee);
  }

  return (
    <CoffeeSelectedContainer>
      <img src={coffee.img} />
      <Details>
        <span>{coffee.name}</span>

        <Actions>
          <CardCounter>
            <button type="button" onClick={handleDecrementCoffeeQuantity}>
              <Minus weight="bold" />
            </button>
            <span>
              {coffee.quantity}
            </span>
            <button type="button" onClick={handleIncrementCoffeeQuantity}>
              <Plus weight="bold" />
            </button>
          </CardCounter>

          <button type="button" onClick={handleRemoveCoffee}>
            <Trash />
            Remover
          </button>
        </Actions>
      </Details>

      <span>{formatPrice}</span>
    </CoffeeSelectedContainer>
  );
}