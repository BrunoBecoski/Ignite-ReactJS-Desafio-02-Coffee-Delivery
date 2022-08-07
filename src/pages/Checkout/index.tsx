import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { OrderCartContext } from '../../contexts/OrderCartContext';

import { AddressCard } from './components/AddressCard';
import { PaymentCard } from './components/PaymentCard';
import { CoffeeCard } from './components/CoffeeCard';

import { 
  CheckoutContainer,
} from './styles';


export function Checkout() {
  const { fillOutForm } = useContext(OrderCartContext);
  const checkoutForm = useForm();
  const { handleSubmit } = checkoutForm;

  function submit(data: any) {
    fillOutForm(data);
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressCard />
          <PaymentCard />
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <CoffeeCard submit={handleSubmit(submit)} />
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
}