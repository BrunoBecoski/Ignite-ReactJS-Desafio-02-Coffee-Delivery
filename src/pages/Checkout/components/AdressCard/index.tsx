import { MapPinLine } from 'phosphor-react';

import { AdressCardContainer, Form, Input } from "./styles";

export function AdressCard() {
  return (
    <AdressCardContainer>
          <div className="header">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrefa</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <Form>
            <Input placeholder="CEP" />
            <Input placeholder="Rua" />
            <div>
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </div>
            <div>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" />
            </div>
          </Form>
        </AdressCardContainer>
  );
}