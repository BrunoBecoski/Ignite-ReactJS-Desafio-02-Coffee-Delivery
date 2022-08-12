import styled from 'styled-components';

export const CoffeeSelectedContainer = styled.div`
  & + & {
    margin-top: 1.5rem;
  }

  display: flex;
  justify-content: space-between;  
  padding: .5rem .25rem;
  padding-bottom: 1.5rem;
  
  border-bottom: 1px solid ${props => props.theme['base-button']};

  img {
    object-fit: contain;
    width: 64px;
    margin-right: 1.25rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: .5rem;

    span:first-child {
      color: ${props => props.theme['base-subtitle']};
    }

    span:last-child {
      margin-left: 3.125rem;

      font-weight: 700;
    
      @media(max-width: 768px) {
        margin-left: 0;
      }

    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: .5rem;

  > button {
    display: flex;
    align-items: center;
    gap: .25rem;
    padding: .375rem .5rem;

    border: none;
    border-radius: 6px;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};
    background: ${props => props.theme['base-button']};

    svg {
      font-size: 1rem;
      color: ${props => props.theme['purple']};
    }

    :hover {
      color: ${props => props.theme['base-subtitle']};
      background: ${props => props.theme['base-hover']};
    
      svg {
        color: ${props => props.theme['purple-dark']};
      }
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