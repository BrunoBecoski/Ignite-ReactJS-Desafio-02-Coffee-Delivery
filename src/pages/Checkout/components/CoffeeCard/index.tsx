import { CoffeeSelected } from '../CoffeeSelected';

import { CoffeeCardContainer } from './styles';

import expressoTradicionalImg from '../../../../assets/expresso_tradicional.png';
import latteImg from '../../../../assets/latte.png';

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

export function CoffeeCard() {
  return (

    <CoffeeCardContainer>
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
    </CoffeeCardContainer>
  );
}
