import { useContext, useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { CoffeeInfo } from '../../../../contexts/CoffeesListContext';
import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import {  
  CoffeeCardContainer,
  CardTags,
  CardBuy,
  CardPrice,
  CardActions,
  CardCounter
}  from './styles';

interface CoffeeCardProps {
  coffee: CoffeeInfo;
  selected: boolean;
}

export function CoffeeCard({ coffee, selected }: CoffeeCardProps) {
  const { addCoffee } = useContext(OrderCartContext);

  const [quantity, setQuantity] = useState(1);

  const formatPrice = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' }
    ).format(coffee.price).replace('R$', '');

  function handleAddCoffee() {
    addCoffee({
      ...coffee,
      quantity,
    });
  }

  function handleDecrementQuantity() {
    if(quantity === 1) {
      return;
    } else {
      setQuantity(state => state - 1);
    }
  }

  function handleIncrementQuantity() {
    setQuantity(state => state + 1);
  }

  return (
    <CoffeeCardContainer selected={selected}>
      <img src={coffee.img} />

      <CardTags>
        {coffee.tags.map(tag => <span key={tag}>{tag}</span>)}
      </CardTags>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <CardBuy>
        <CardPrice>
          <span>R${' '}</span>
          {formatPrice}
        </CardPrice>

        <CardActions>
          <CardCounter>
            <button onClick={handleDecrementQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrementQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CardCounter>
          
          <button onClick={handleAddCoffee}>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CardActions>

      </CardBuy>
    </CoffeeCardContainer>
  );
}