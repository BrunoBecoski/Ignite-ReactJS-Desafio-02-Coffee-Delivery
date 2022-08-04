import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { CoffeeInfo } from '../../../../contexts/CoffeesListContext';

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
  const { img, tags, name, description, price } = coffee;

  return (
    <CoffeeCardContainer>
      <img src={img} />

      <CardTags>
        {tags.map(tag => <span>{tag}</span>)}
      </CardTags>

      <h3>{name}</h3>
      <p>{description}</p>

      <CardBuy>
        <CardPrice>
          <span>
            R${' '}
          </span>
          {
            new Intl.NumberFormat(
              'pt-BR', { style: 'currency', currency: 'BRL' }
            ).format(price).replace('R$', '')
          }
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
          
          <button>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CardActions>

      </CardBuy>
    </CoffeeCardContainer>
  );
}