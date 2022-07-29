import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1440px;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 160px;
  padding-block: 32px;

  @media(max-width: 768px) {
    padding: 1rem;
  }

  div {
    display: flex;
    gap: .75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;

  padding: .5rem;
  border-radius: 6px;
  
  font-size: 1.125rem;
  color: ${props => props.theme['purple-dark']};
  background: ${props => props.theme['purple-light']};
`;

export const Card = styled.div`
  position: relative;
  
  border: none;
  padding: .5rem;
  border-radius: 6px;
  
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};

  span {
    display: flex;
    justify-content: center;

    top: -25%;
    right: -25%;
    position: absolute;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-size: .75rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    background: ${props => props.theme['yellow-dark']};
  }
`;