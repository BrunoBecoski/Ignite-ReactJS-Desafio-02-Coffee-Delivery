import { useContext } from 'react';
import { FormProvider, Resolver, useForm } from 'react-hook-form';

import { FormData, OrderCartContext } from '../../contexts/OrderCartContext';

import { AddressCard } from './components/AddressCard';
import { PaymentCard } from './components/PaymentCard';
import { CoffeeCard } from './components/CoffeeCard';

import { 
  CheckoutContainer,
} from './styles';


export function Checkout() {
  const { submitForm } = useContext(OrderCartContext);
  const checkoutForm = useForm();
  const { handleSubmit } = checkoutForm;

  function submit(data: any) {
    submitForm(data);
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(submit)}>
      <FormProvider {...checkoutForm}>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressCard />
          <PaymentCard />
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <CoffeeCard />
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
}