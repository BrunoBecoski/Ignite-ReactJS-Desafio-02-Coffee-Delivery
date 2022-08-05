import { useContext } from 'react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { CoffeeSelected } from '../CoffeeSelected';

import { CoffeeCardContainer, TotalPrice, Button } from './styles';

export function CoffeeCard() {
  const { cart } = useContext(OrderCartContext);

  return (
    <CoffeeCardContainer>
      <div>
        {
          cart.map(coffee => (
            <CoffeeSelected key={coffee.id} coffee={coffee} />
          ))
        }
      </div>

      <TotalPrice>
        <div>
          <p>Total de itens</p>
          <span>R$ 29,70</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </div>
        <div>
          <p>Total</p>
          <span>R$ 33,20</span>
        </div>
      </TotalPrice>
      
      <Button>
        Confirmar pedido
      </Button>
    </CoffeeCardContainer>
  );
}
