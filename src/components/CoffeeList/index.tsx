import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { 
  CoffeeListContainer,
  CoffeeCardContainer,
  CardTags,
  CardBuy,
  CardPrice,
  CardActions,
  CardCounter
} from './styles';

import expressoTradicionalImg from '../../assets/expresso_tradicional.png';
import expressoAmericanoImg from '../../assets/expresso_americano.png';
import expressoCremosoImg from '../../assets/expresso_cremoso.png';
import expressoGeladoImg from '../../assets/expresso_gelado.png';
import cafeComLeiteImg from '../../assets/cafe_com_leite.png';
import latteImg from  '../../assets/latte.png';
import capuccinoImg from  '../../assets/capuccino.png';
import macchiatoImg from  '../../assets/macchiato.png';
import mocaccinoImg from  '../../assets/mocaccino.png';
import chocolateQuenteImg from  '../../assets/chocolate_quente.png';
import cubanoImg from  '../../assets/cubano.png';
import havaianoImg from  '../../assets/havaiano.png';
import arabeImg from  '../../assets/arabe.png';
import irlandesImg from  '../../assets/irlandes.png';

interface coffeeInfo {
  id: string;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

const coffeesListInfo: coffeeInfo[] = [
  {
    id: '1',
    img: expressoTradicionalImg,
    tags: ['tradicional'],
    name: 'Expresso Tradicional', 
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: '2',
    img: expressoAmericanoImg,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: '3',
    img:  expressoCremosoImg,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: '4',
    img: expressoGeladoImg,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: '5',
    img: cafeComLeiteImg, 
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaposizado',
    price: 9.90
  },
  {
    id: '6',
    img: latteImg,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e expuma cremosa',
    price: 9.90
  },
  {
    id: '7',
    img: capuccinoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: '8',
    img: macchiatoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  },
  {
    id: '9',
    img: mocaccinoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90
  },
  {
    id: '10',
    img: chocolateQuenteImg,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: '11',
    img: cubanoImg,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90
  },
  {
    id: '12',
    img: havaianoImg,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90
  },
  {
    id: '13',
    img: arabeImg,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90
  },
  {
    id: '14',
    img: irlandesImg,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90
  }
]

interface CoffeeCardPros {
  coffee: coffeeInfo
}

function CoffeeCard({ coffee }: CoffeeCardPros) {
  const { img, tags, name, description, price } = coffee;
  return (
    <CoffeeCardContainer>
      <img src={img} />
      <CardTags>
        {tags.map(tag => <span>{tag}</span>)}
      </CardTags>
      <h3>{name}</h3>
      <p>{description}</p>
      <CardBuy>
        <CardPrice>
          <span>
            R${' '}
          </span>
          {
            new Intl.NumberFormat(
              'pt-BR', { style: 'currency', currency: 'BRL' }
            ).format(price).replace('R$', '')
          }
        </CardPrice>
        <CardActions>
          <CardCounter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </CardCounter>
          <button>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </CardActions>
      </CardBuy>
    </CoffeeCardContainer>
  );
}

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <div>
        {
          coffeesListInfo.map(coffee => (
            <CoffeeCard 
              key={coffee.id}
              coffee={coffee}
            />
          ))
        }
      </div>
    </CoffeeListContainer>
  );
}