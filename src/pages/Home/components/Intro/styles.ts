import styled from 'styled-components';

import backgroundImg from '../../../../assets/background.png';

export const IntroContainer = styled.div`
  display: flex;
  padding-block: 5.75rem;
  
  background-image: url(${backgroundImg}); 
  
  img {
    object-fit: cover;
    margin-left: 3.5rem;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 900;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;

export const Items = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
`;

const BaseItem = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 50%;
    color: ${props => props.theme['background']};
  }
`;

export const ItemCard = styled(BaseItem)`
  span {
    background: ${props => props.theme['yellow-dark']};
  }
`;

export const ItemPackage = styled(BaseItem)`
  span {
    background: ${props => props.theme['base-text']};
  }
`;

export const ItemTimer = styled(BaseItem)`
  span {
    background: ${props => props.theme['yellow']};
  }
`;

export const ItemCoffee = styled(BaseItem)`
  span {
    background: ${props => props.theme['purple']};
  }
`;