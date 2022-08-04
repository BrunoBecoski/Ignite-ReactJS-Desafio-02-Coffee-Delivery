import { OrderInfo } from './components/OrderList';

import { SuccessContainer, Title } from './styles';

import deliveryImg from '../../assets/delivery.png';

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <Title>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>

        <OrderInfo />
      </div>

      <img src={deliveryImg} />
    </SuccessContainer>
  );
}