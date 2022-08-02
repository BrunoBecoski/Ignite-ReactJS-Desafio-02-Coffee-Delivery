import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { PaymentCardContainer } from './styles';

export function PaymentCard() {
  return (
    <PaymentCardContainer>
          <div className="header">
            <CurrencyDollar />
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div>
            <div>
              <input type="radio" name="payment" id="credit" />
              <CreditCard />
              <label htmlFor="credit">Cartão de Crédito</label>
            </div>
            <div>
              <input type="radio" name="payment" id="debit"/>
              <Bank />
              <label htmlFor="debit">Cartão de Débito</label>
            </div>
            <div>
              <input type="radio" name="payment" id="money"/>
              <Money />
              <label htmlFor="money" >Dinheiro</label>
            </div>
          </div>
        </PaymentCardContainer>
  );
}