import styled from 'styled-components';

export const AdressCardContainer = styled.div`
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