import styled from 'styled-components';

export const AddressCardContainer = styled.div`
  max-width: 640px;
  margin-bottom: .75rem;
  padding: 2.5rem;

  border-radius: 6px;
  background: ${props => props.theme['base-card']};

  @media(max-width: 768px) {
    margin-inline: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 2rem;

  color: ${props => props.theme['yellow-dark']};

  svg {
    font-size: 1.375rem;
  }

  div {
    color: ${props => props.theme['base-subtitle']};

    p:last-child {
      font-size: .875rem;
    }
  }
`;

export const Form = styled.div`
  display: grid;
  gap: 1rem .75rem;

  #postal_code {
    grid-area: postal_code;
  }

  #street_name {
    grid-area: street_name;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #neighborhood {
    grid-area: neighborhood;
  }

  #city {
    grid-area: city;
  }

  #state {
    grid-area: state;
  }

  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "postal_code postal_code postal_code . . . . ."
    "street_name street_name street_name street_name street_name street_name street_name street_name"
    "number number number complement complement complement complement complement"
    "neighborhood neighborhood neighborhood city city city city state"
  ;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: repeat(7, 1fr);
    grid-template-areas:
      "postal_code"
      "street_name"
      "number"
      "complement"
      "neighborhood"
      "city"
      "state"
    ;
  }

`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .75rem;
  position: relative;

  border-radius: 4px;
  font-size: .875rem;
  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};

  :focus-within {
    border-color: ${props => props.theme['yellow-dark']};
  }

  span {
    position: absolute;
    right: .75rem;

    color: ${props => props.theme['base-label']};
    font-style: italic;
    font-size: .75rem;
  }

  input:not(:placeholder-shown) ~ span {
    display: none;
  }

  input {
    width: 100%;
    height: 100%;

    border: none;
    background: none;
    outline: none;
    color: ${props => props.theme['base-text']};

    ::placeholder {
      color: ${props => props.theme['base-label']};
      font-size: .875rem;
    }
  }
`;