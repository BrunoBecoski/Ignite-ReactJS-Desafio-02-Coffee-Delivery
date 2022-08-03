import { Minus, Plus, Trash } from 'phosphor-react';

import { 
  CoffeeSelectedContainer, 
  Details,
  Actions, 
  CardCounter
} from './styles';

interface CoffeeSelectedProps {
  coffee: {
    img: string;
    name: string;
    price: number;
  }
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { img, name, price } = coffee;

  return (
    <CoffeeSelectedContainer>
      <img src={img} />
      <Details>
        <span>{name}</span>

        <Actions>
          <CardCounter>
            <button>
              <Minus weight="bold" />
            </button>
            <span>
              1
            </span>
            <button>
              <Plus weight="bold" />
            </button>
          </CardCounter>

          <button>
            <Trash />
            Remover
          </button>
        </Actions>
      </Details>

      <span>
        {
          new Intl.NumberFormat(
            'pt-BR', { style: 'currency', currency: 'BRL' }
          ).format(price)
        }
      </span>
    </CoffeeSelectedContainer>
  );
}