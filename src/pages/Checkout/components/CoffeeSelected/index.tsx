import { Minus, Plus, Trash } from 'phosphor-react';

import { CoffeeSelectedContainer } from './styles';

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
      <div>
        <p>{name}</p>

        <div>
          <div>
            <button>
              <Minus weight="bold" />
            </button>
            <span>
              1
            </span>
            <button>
              <Plus weight="bold" />
            </button>
          </div>

          <button>
            <Trash />
            Remover
          </button>
        </div>
      </div>

      <p>
        {
          new Intl.NumberFormat(
            'pt-BR', { style: 'currency', currency: 'BRL' }
          ).format(price)
        }
      </p>
    </CoffeeSelectedContainer>
  );
}