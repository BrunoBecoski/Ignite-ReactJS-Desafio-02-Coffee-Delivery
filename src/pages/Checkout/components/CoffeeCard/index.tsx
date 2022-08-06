import { useContext } from 'react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { CoffeeSelected } from '../CoffeeSelected';

import { CoffeeCardContainer, TotalPrice, Button } from './styles';

export function CoffeeCard() {
  const { cart } = useContext(OrderCartContext);

  const coffeePrice = cart.reduce((acc, coffee) => {
    const totalCoffeePrice = coffee.price * coffee.quantity;
    return acc + totalCoffeePrice;
  }, 0)

  const deliveryPrice = 3.50;
  
  const totalPrice = coffeePrice + deliveryPrice;

  const formattedCoffeePrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(coffeePrice);

  const formattedDeliveryPrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(deliveryPrice);

  const formattedTotalPrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(totalPrice);

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
      
      <Button>
        Confirmar pedido
      </Button>
    </CoffeeCardContainer>
  );
}
