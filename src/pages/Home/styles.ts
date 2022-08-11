import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding-top: 6.25rem;

  @media(max-width: 768px) {
    padding-top: 4.5rem;
  }
`;

export const CoffeeList = styled.div`
  max-width: 1120px;
  margin: auto;
  padding-block: 2rem;

  @media(max-width: 1120px) {
    padding-inline: 1rem;
  }

  h2 {
    font-size: 2rem;

    @media(max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem 2rem;
    margin-top: 54px;
  }
`;