import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { HeaderContainer, Location, Card } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
        <NavLink to="/">
          <img src={logoImg} alt="Logo Coffee Delivery" />
        </NavLink>

        <div className="this">
          <Location>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </Location>

          <Card to="/checkout" >
            <span>3</span>
            <ShoppingCart weight="fill" size={22}/>
          </Card>

      </div>
    </HeaderContainer>
  );
}