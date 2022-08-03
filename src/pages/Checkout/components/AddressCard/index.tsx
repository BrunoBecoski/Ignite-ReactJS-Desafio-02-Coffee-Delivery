import { MapPinLine } from 'phosphor-react';

import { AddressCardContainer, Title, Form, Label } from './styles';

export function AddressCard() {
  return (
    <AddressCardContainer>
      <Title>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de Entrefa</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Title>

      <Form>
        <Label id="postal_code">
          <input placeholder="CEP" />
        </Label>

        <Label id="street_name">
          <input placeholder="Rua" />
        </Label>

        <Label id="number">
          <input placeholder="Número" />
        </Label>

        <Label id="complement">
          <input placeholder="Complemento" />
          <span>Opcional</span>
        </Label>

        <Label id="neighborhood">
          <input placeholder="Bairro" />
        </Label>

        <Label id="city">
          <input placeholder="Cidade" />              
        </Label>

        <Label id="state" >
          <input placeholder="UF" />
        </Label>
      </Form>
    </AddressCardContainer>
  );
}