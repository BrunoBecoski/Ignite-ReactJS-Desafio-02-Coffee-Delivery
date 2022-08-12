import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: calc(6.25rem + 2.5rem);
  max-width: 1120px;
  margin: auto;
  
  @media(max-width: 768px) {
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 2rem;
    padding-inline: 1rem;
  }

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;

    @media(max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;