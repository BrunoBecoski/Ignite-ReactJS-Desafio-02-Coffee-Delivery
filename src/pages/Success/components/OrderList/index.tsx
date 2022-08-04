import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import {
  OrderInfoContainer,
  AddressInfo,
  DeliveryInfo,
  PaymentInfo
} from './styles';

export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <div>
        <AddressInfo>
          <div>
            <MapPin weight="bold" />
          </div>
          <div>
            <p>Entrega em </p>
            <strong>Rua João Daniel Martinelli, 102</strong>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
        </AddressInfo>

        <DeliveryInfo>
          <div>
            <Timer weight="bold" />
          </div>
          <div>
            <p>Precisão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </DeliveryInfo>

        <PaymentInfo>
          <div>
            <CurrencyDollar weight="bold" />
          </div>
          <div>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </PaymentInfo>
      </div>
    </OrderInfoContainer>
  );
}
