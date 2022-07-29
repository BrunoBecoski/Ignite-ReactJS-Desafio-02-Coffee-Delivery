import { MapPin, ShoppingCart } from 'phosphor-react';

import { HeaderContainer, Location, Card } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo Coffee Delivery" />

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </Location>

        <Card>
          <span>3</span>
          <ShoppingCart weight="fill" size={22}/>
        </Card>
      </div>
    </HeaderContainer>
  );
}