import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { OrderCartContext } from '../../contexts/OrderCartContext';

import { HeaderContainer, Location, Card } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  const { cart } = useContext(OrderCartContext);

  const coffeeQuantity = cart.length;

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
            { !!coffeeQuantity &&
              <span>{coffeeQuantity}</span>
            }
            <ShoppingCart weight="fill" size={22}/>
          </Card>

      </div>
    </HeaderContainer>
  );
}