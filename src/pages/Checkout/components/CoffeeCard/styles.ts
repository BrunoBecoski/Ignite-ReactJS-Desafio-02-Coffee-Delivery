import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  max-width: 448px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  border-radius: 6px 44px;
  background: ${props => props.theme['base-card']};

  > div:first-child {
    align-items: center;
  }

  @media(max-width: 768px) {
    margin-inline: auto;
  }
`; 

export const TotalPrice = styled.div`
  div + div {
    margin-top: .75rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    font-size: .875rem;
  }

  div:last-child {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const Button = styled.button`
  padding: .75rem;

  border: none;
  border-radius: 6px;
  font-size: .875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: ${props => props.theme['white']};
  background: ${props => props.theme['yellow']};

  :hover {
    background: ${props => props.theme['yellow-dark']};
  }
`;