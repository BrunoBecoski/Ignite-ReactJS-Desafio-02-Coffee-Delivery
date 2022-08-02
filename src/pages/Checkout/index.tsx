import { AdressCard } from './components/AdressCard';
import { PaymentCard } from './components/PaymentCard';
import { CoffeeCard } from './components/CoffeeCard';

import { 
  CheckoutContainer,
} from './styles';


export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AdressCard />
        <PaymentCard />
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CoffeeCard />
      </div>
    </CheckoutContainer>
  );
}