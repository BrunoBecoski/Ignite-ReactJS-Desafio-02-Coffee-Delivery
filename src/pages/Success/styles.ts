import styled from 'styled-components';

export const SuccessContainer = styled.div`
  padding-top: 6.25rem;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  img {
    object-fit: contain;
  }
`;

export const Title = styled.div`
  margin-top: 5rem;

  h2 {
    font-weight: 900;
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`;