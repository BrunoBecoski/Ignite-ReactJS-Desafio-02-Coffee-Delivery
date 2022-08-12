import styled from 'styled-components';

export const PaymentCardContainer = styled.div`
  max-width: 640px;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};

  @media(max-width: 768px) {
    margin-inline: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 2rem;
  
  color: ${props => props.theme['purple']};

  svg {
    font-size: 1.375rem;
  }

  div {
    color: ${props => props.theme['base-subtitle']};

    p:last-child {
      font-size: .875rem;
    }
  }
`

export const Form = styled.div`
  display: flex;
  gap: .75rem;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Select = styled.label`
  width: 100%;

  cursor: pointer;
  
  :hover div{
    color: ${props => props.theme['base-subtitle']};
    background: ${props => props.theme['base-hover']};
  }

  input {
    display: none;
  }

  input:checked ~ div {
    border-color: ${props => props.theme['purple']};
    background: ${props => props.theme['purple-light']};
  }

  div {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding-block: 1rem;
    padding-inline-start: 1rem;
    
    border-radius: 6px;
    border: 1px solid transparent;
    font-size: .75rem;
    text-transform: uppercase;    
    background: ${props => props.theme['base-button']};
  }

  svg {
    font-size: 1rem;
    color: ${props => props.theme['purple']};
  }
`;