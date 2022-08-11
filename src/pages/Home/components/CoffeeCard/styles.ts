import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  padding: 0 1.25rem 1.25rem;

  border-radius: 6px 36px;
  background: ${props => props.theme['base-card']};

  img {
    width: 120px;
    margin-top: -20px;
  }

  h3 {
    margin-top: 1rem;

    font-size: 1.25rem; 
    color: ${props => props.theme['base-subtitle']};
  }

   p {
    margin-top: .5rem;

    font-size: .875;
    text-align: center;
    color: ${props => props.theme['base-label']};
   }
`;

export const CardTags = styled.div`
  margin-top: .75rem;

  span {
    padding: .25rem .5rem;
    
    border-radius: 8px;
    font-size: .625rem;
    font-weight: bold;
    text-transform: uppercase;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }

  span + span {
    margin-left: .25rem;
  }
`;

export const CardBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.0625rem;
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: baseline;

  font-weight: 900;
  font-size: 1.5rem;
  font-family: 'Baloo 2', cursive;

  span {
    font-size: .875rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  gap: .5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    
    border: none;
    border-radius: 6px;
    color: ${props => props.theme['base-card']};
    background: ${props => props.theme['purple-dark']};
    transition: background .2s;

    &:hover {
      background: ${props => props.theme['purple']};
    }
  }
`;

export const CardCounter = styled.div`
  display: flex;
  align-items: center;

  border-radius: 6px;
  color: ${props => props.theme['base-title']};
  background: ${props => props.theme['base-button']};
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;

    border: none;
    background: none;  
    color: ${props => props.theme['purple']};

    &:hover {
      color: ${props => props.theme['purple-dark']};
    }
  }
`;