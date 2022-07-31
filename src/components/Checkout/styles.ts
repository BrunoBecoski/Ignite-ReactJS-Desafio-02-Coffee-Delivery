import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  
  padding-inline: 160px;
  padding-block: 2.5rem;

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`;

export const OrderAddress = styled.div`
  margin-bottom: .75rem;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};

  .header {
    display: flex;
    gap: .5rem;
    margin-bottom: 2rem;

    color: ${props => props.theme['yellow-dark']};

    div {
      color: ${props => props.theme['base-subtitle']};

      p:last-child {
        font-size: .875rem;
      }
    }
  }
`;

export const Form = styled.div``;

export const Input = styled.input`
  border: none;

  padding: .75rem;

  font-size: .875rem;
  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-input']};

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }
`;

export const OrderPayment = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};

  .header {
    display: flex;
    gap: .5rem;
    margin-bottom: 2rem;
    
    color: ${props => props.theme['purple']};

    div {
      color: ${props => props.theme['base-subtitle']};

      p:last-child {
        font-size: .875rem;
      }
    }
  }
`;

export const CoffeeCard = styled.div`
  padding: 2.5rem;

  border-radius: 6px 44px;
  background: ${props => props.theme['base-card']};
`;