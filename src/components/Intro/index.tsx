import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { IntroContainer, Title, Items, ItemCard, ItemPackage, ItemTimer, ItemCoffee } from './styles';

import coffeeImg from '../../assets/coffee.png';

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </Title>

        <Items>
          <ItemCard>
            <span>
              <ShoppingCart weight='fill' />
            </span>
            Compra simples e segura
          </ItemCard>

          <ItemPackage>
            <span>
              <Package weight='fill' />
            </span>
            Embalagem mantém o café intacto
          </ItemPackage>

          <ItemTimer>
            <span>
              <Timer weight='fill' />
            </span>
            Entrega rápida e rastreada
          </ItemTimer>

          <ItemCoffee>
            <span>
              <Coffee weight='fill' />
            </span>
            O café chega fresquinho até você
          </ItemCoffee>
        </Items>
      </div>

      <img src={coffeeImg} />
    </IntroContainer>
  );
}