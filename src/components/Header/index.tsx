import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { OrderCartContext } from '../../contexts/OrderCartContext';

import { Background, HeaderContainer, Location, Card } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  const { cart, form } = useContext(OrderCartContext);
  const navigate = useNavigate()

  const coffeeQuantity = cart.length;
  const location = `${form.city}, ${form.state}`;

  function handleRedirect() {
    if (coffeeQuantity) {
      navigate('/checkout');
    } else {
      alert('Selecione algum café');
    }
  }  

  return (
    <Background>
      <HeaderContainer>
          <NavLink to="/">
            <img src={logoImg} alt="Logo Coffee Delivery" />
          </NavLink>

          <div className="this">
            <Location>
              <MapPin weight="fill" size={22} />
              {
                form.city &&
                location
              }
            </Location>

            <Card onClick={handleRedirect} >
              { !!coffeeQuantity &&
                <span>{coffeeQuantity}</span>
              }
              <ShoppingCart weight="fill" size={22}/>
            </Card>

        </div>
      </HeaderContainer>
    </Background>
  );
}