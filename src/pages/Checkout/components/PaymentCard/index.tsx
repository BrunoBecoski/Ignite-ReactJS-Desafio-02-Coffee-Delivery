import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';

import { PaymentCardContainer, Title, Form, Select } from './styles';

export function PaymentCard() {
  const { register } = useFormContext();

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
          <input 
            {...register('payment', { required: true })}
            type="radio"
            name="payment"
            value="credit"
            defaultChecked
          />
          <div>
            <CreditCard />
            Cartão de Crédito
          </div>          
        </Select>
        
        <Select>
          <input
            {...register('payment')}
            type="radio"
            name="payment"
            value="debit"
          />
          <div>
            <Bank />
            Cartão de Débito
          </div>
        </Select>
        
        <Select>
          <input
            {...register('payment')}
            type="radio"
            name="payment"
            value="money"
          />
          <div>
            <Money />
            Dinheiro
          </div>
        </Select>
      </Form>
    </PaymentCardContainer>
  );
}