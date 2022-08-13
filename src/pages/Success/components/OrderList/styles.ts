import styled from 'styled-components';

export const OrderInfoContainer = styled.div`
  margin-top: 2.5rem;
  padding: 1px;

  border-radius: .375rem 2.25rem; 
  background: linear-gradient(300deg, rgba(128,71,248,1) 0%, rgba(219,172,44,1) 100%);

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    
    border-radius: .375rem 2.25rem; 
    background: ${props =>  props.theme['background']};
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%; 

    color: ${props => props.theme['white']};
    background: ${props => props.theme['purple']};

    svg {
      font-size: 1rem;
    }
  }

  div:last-child {
    flex: 1;

    p {
      display: inline;
    }

    span {
      display: block;
    }
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    color: ${props => props.theme['white']};
    background: ${props => props.theme['yellow']};

    svg {
      font-size: 1rem;
    }
  }

  div:last-child {
    flex: 1;
  }
`;

export const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%; 

    color: ${props => props.theme['white']};
    background: ${props => props.theme['yellow-dark']};

    svg {
      font-size: 1rem;
    }
  }

  div:last-child {
    flex: 1;
  }
`;
