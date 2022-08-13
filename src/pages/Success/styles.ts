import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1120px;
  margin-inline: auto;
  padding-top: 6.25rem;

  @media(max-width: 1120px) {
    padding-inline: 1rem;
  }

  @media(max-width: 768px) {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
  
  img {
    object-fit: scale-down;
    max-width: 492px;

    @media(max-width: 1120px) {
      max-width: 50%;
    }

    @media(max-width: 768px) {
      max-width: 100%;
      margin-block: 2rem;
    }
  }
`;

export const Title = styled.div`
  margin-top: 5rem;

  h2 {
    font-weight: 900;
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']};

    @media(max-width: 768px) {
      font-size: 1.75rem;
    } 
  }

  p {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    
    @media(max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;