import { 
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash
} from 'phosphor-react';

import { 
  CheckoutContainer,
  OrderAddress,
  Form,
  Input,
  OrderPayment,
  CoffeeCard,
} from './styles';

import expressoTradicionalImg from '../../assets/expresso_tradicional.png';
import latteImg from '../../assets/latte.png';

const coffeesListInfo = [
  {
    id: '1',
    img: expressoTradicionalImg,
    name: 'Expresso Tradicional',
    price: 9.90
  },
  {
    id: '2',
    img: latteImg,
    name: 'Latte',
    price: 19.80
  }
]

interface CoffeeSelectedPros {
  coffee: {
    id: string;
    img: string;
    name: string;
    price: number;
  }
}

function CoffeeSelected({ coffee }: CoffeeSelectedPros) {
  const { img, name, price } = coffee;

  return (
    <div>
      <img src={img} />
      <div>
        <p>{name}</p>

        <div>
          <div>
            <button>
              <Minus weight="bold" />
            </button>
            <span>
              1
            </span>
            <button>
              <Plus weight="bold" />
            </button>
          </div>

          <button>
            <Trash />
            Remover
          </button>
        </div>
      </div>

      <p>
        {
          new Intl.NumberFormat(
            'pt-BR', { style: 'currency', currency: 'BRL' }
          ).format(price)
        }
      </p>
    </div>
  );
}

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <OrderAddress>
          <div className="header">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrefa</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Form>
            <Input placeholder="CEP" />
            <Input placeholder="Rua" />
            <div>
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </div>
            <div>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </div>
          </Form>
        </OrderAddress>

        <OrderPayment>
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
        </OrderPayment>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <CoffeeCard>
          <div>
            {
              coffeesListInfo.map(coffee => (
                <CoffeeSelected key={coffee.id} coffee={coffee} />
              ))
            }

            <div>
              <p>Total de items</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
            <button>
              Confirmar pedido
            </button>
          </div>
        </CoffeeCard>
      </div>
    </CheckoutContainer>
  );
}