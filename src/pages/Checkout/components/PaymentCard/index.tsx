import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { PaymentCardContainer, Title, Form, Select } from './styles';

export function PaymentCard() {
  const { form } = useContext(OrderCartContext);
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
            defaultChecked={form.payment === 'debit'}
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
            defaultChecked={form.payment === 'money'}
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