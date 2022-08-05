import { useContext } from 'react';
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
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffee } = useContext(OrderCartContext);

  const formatPrice = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' }
    ).format(coffee.price).replace('R$', '');

  function handleAddCoffee() {
    addCoffee(coffee);
  }

  return (
    <CoffeeCardContainer>
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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
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