import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 100;
  
  background: ${props => props.theme['background']};
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 1120px;
  height: 6rem;

  @media(max-width: 1120px) {
    width: 100%;
    padding-inline: 1rem;
  }
  
  @media(max-width: 768px) {
    height: 5rem;
  }

  div {
    display: flex;
    gap: .75rem;
  }

  img {
    height: 2.5rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: .5rem;
  
  font-size: 1rem;
  border-radius: 6px;
  color: ${props => props.theme['purple-dark']};
  background: ${props => props.theme['purple-light']};
`;

export const Card = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: .5rem;
  
  border: none;
  border-radius: 6px;
  color: ${props => props.theme['yellow-dark']};
  background: ${props => props.theme['yellow-light']};

  span {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -25%;
    right: -25%;
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    font-size: .75rem;
    font-weight: 700;
    color: ${props => props.theme['white']};
    background: ${props => props.theme['yellow-dark']};
  }
`;