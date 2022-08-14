import styled from 'styled-components';

import backgroundImg from '../../../../assets/background.png';

export const Background = styled.div`
  max-width: 1440px;
  margin: auto;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
`;

export const IntroContainer = styled.div`
  display: flex;
  padding-block: 5.75rem;
  max-width: 1120px;
  margin: auto;

  @media(max-width: 1120px) {
    padding-inline: 1rem;
  }
  
  @media(max-width: 768px) {
    flex-direction: column;
    padding-block: 2rem;
  }

  img {
    object-fit: scale-down;
    margin-left: 3.5rem;

    @media(max-width: 1120px) {
      width: 40%;
    }

    @media(max-width: 768px) {
      margin-left: 0;
      margin-top: 2rem;
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 900;

    @media(max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;

    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;

  @media(max-width: 768px) {
    margin-top: 2.5rem;
    grid-template-columns: 1fr;
  }
`;

const BaseItem = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  @media(max-width: 768px) {
    font-size: .875rem; 
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 50%;
    color: ${props => props.theme['white']};
  }
`;

export const ItemCard = styled(BaseItem)`
  span {
    background: ${props => props.theme['yellow-dark']};
  }
`;

export const ItemPackage = styled(BaseItem)`
  span {
    background: ${props => props.theme['purple-dark']};
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