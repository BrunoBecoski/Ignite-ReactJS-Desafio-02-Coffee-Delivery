import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import {
  OrderInfoContainer,
  AddressInfo,
  DeliveryInfo,
  PaymentInfo
} from './styles';

export function OrderInfo() {
  const { form } = useContext(OrderCartContext);
  const { price } = useParams();

  function paymentFormatted() {
    switch (form.payment) {
      case 'credit':
        return 'Cartão de Crédito'
      
      case 'debit':
        return 'Cartão de Débito'
        
      case 'money':
        return 'Dinheiro'
    }
  }

  const formattedTotalPrice = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(Number(price));

  return (
    <OrderInfoContainer>
      <div>
        <AddressInfo>
          <div>
            <MapPin weight="bold" />
          </div>
          <div>
            <p>Entrega em </p>
            <strong>{form.street_name}, {form.number}</strong>
            <span>{form.neighborhood} - {form.city}, {form.state}</span>
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
            <strong>{formattedTotalPrice + ' - ' + paymentFormatted()}</strong>
          </div>
        </PaymentInfo>
      </div>
    </OrderInfoContainer>
  );
}
