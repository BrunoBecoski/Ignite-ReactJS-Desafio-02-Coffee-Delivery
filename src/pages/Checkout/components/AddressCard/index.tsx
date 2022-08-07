import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';

import { AddressCardContainer, Title, Form, Label } from './styles';

export function AddressCard() {
  const { register } = useFormContext();

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
          <input 
            placeholder="CEP"
            {...register('postal_code', { required: true })}  
          />
        </Label>

        <Label id="street_name">
          <input 
            placeholder="Rua"
            {...register('street_name', { required: true })}  
          />
        </Label>

        <Label id="number">
          <input
            placeholder="Número"
            {...register('number', { required: true })}
          />
        </Label>

        <Label id="complement">
          <input
            placeholder="Complemento"
            {...register('complement')}  
          />
          <span>Opcional</span>
        </Label>

        <Label id="neighborhood">
          <input
            placeholder="Bairro"
            {...register('neighborhood', { required: true })}
          />
        </Label>

        <Label id="city">
          <input
            placeholder="Cidade"
            {...register('city', { required: true })}
          />
        </Label>

        <Label id="state">
          <input
            placeholder="UF"
            {...register('state', { required: true })}
          />
        </Label>
      </Form>
    </AddressCardContainer>
  );
}