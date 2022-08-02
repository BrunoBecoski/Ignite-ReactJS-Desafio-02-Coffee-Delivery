import styled from 'styled-components';

export const PaymentCardContainer = styled.div`
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