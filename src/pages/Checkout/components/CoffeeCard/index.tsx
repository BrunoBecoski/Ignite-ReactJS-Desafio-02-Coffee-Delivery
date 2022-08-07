import { useContext } from 'react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { CoffeeSelected } from '../CoffeeSelected';

import { CoffeeCardContainer, TotalPrice, Button } from './styles';

export function CoffeeCard() {
  const { cart, price } = useContext(OrderCartContext);

  const formattedCoffeePrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(price.coffeePrice);

  const formattedDeliveryPrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(price.deliveryPrice);

  const formattedTotalPrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(price.totalPrice);

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
          <span>{formattedCoffeePrice}</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>{formattedDeliveryPrice}</span>
        </div>
        <div>
          <p>Total</p>
          <span>{formattedTotalPrice}</span>
        </div>
      </TotalPrice>
      
      <Button type="submit">
        Confirmar pedido
      </Button>
    </CoffeeCardContainer>
  );
}
