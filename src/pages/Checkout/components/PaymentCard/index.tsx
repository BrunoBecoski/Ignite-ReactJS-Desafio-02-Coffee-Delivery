import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { PaymentCardContainer, Title, Form, Select } from './styles';

export function PaymentCard() {
  return (
    <PaymentCardContainer>
      <Title>
        <CurrencyDollar />
        <div>
          <p>Pagamento</p>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </Title>

      <Form>
        <Select>
          <input type="radio" name="payment" />
          <div>
            <CreditCard />
            Cartão de Crédito
          </div>          
        </Select>
        
        <Select>
          <input type="radio" name="payment" />
          <div>
            <Bank />
            Cartão de Débito
          </div>
        </Select>
        
        <Select>
          <input type="radio" name="payment" />
          <div>
            <Money />
            Dinheiro
          </div>
        </Select>
      </Form>
    </PaymentCardContainer>
  );
}