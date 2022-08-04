import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding-top: 6.25rem;
`;

export const CoffeeList = styled.div`
  padding-block: 2rem;

  h2 {
    font-size: 2rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem 2rem;
    margin-top: 54px;
  }
`;