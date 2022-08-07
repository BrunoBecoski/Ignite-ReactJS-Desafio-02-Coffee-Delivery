import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { CoffeeSelected } from '../CoffeeSelected';

import { CoffeeCardContainer, TotalPrice, Button } from './styles';

interface CoffeeCardProps {
  submit: () => void;
}

export function CoffeeCard({ submit }: CoffeeCardProps) {
  const { cart } = useContext(OrderCartContext);

  const navigate = useNavigate();

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

  function handleSubmit() {
    submit();
    navigate('/success')
  }

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
      
      <Button onClick={handleSubmit}>
        Confirmar pedido
      </Button>
    </CoffeeCardContainer>
  );
}
