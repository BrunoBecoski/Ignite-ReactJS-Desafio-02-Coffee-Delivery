import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { MapPinLine } from 'phosphor-react';

import { OrderCartContext } from '../../../../contexts/OrderCartContext';

import { AddressCardContainer, Title, Form, Label } from './styles';

export function AddressCard() {
  const { form } = useContext(OrderCartContext);
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
            {...register('postal_code')}
            required
            defaultValue={form.postal_code}
          />
        </Label>

        <Label id="street_name">
          <input 
            placeholder="Rua"
            {...register('street_name')}
            required 
            defaultValue={form.street_name}
          />
        </Label>

        <Label id="number">
          <input
            placeholder="Número"
            {...register('number')}
            required
            defaultValue={form.number}
          />
        </Label>

        <Label id="complement">
          <input
            placeholder="Complemento"
            {...register('complement')}
            defaultValue={form.complement}
          />
          <span>Opcional</span>
        </Label>

        <Label id="neighborhood">
          <input
            placeholder="Bairro"
            {...register('neighborhood')}
            required
            defaultValue={form.neighborhood}
          />
        </Label>

        <Label id="city">
          <input
            placeholder="Cidade"
            {...register('city')}
            required
            defaultValue={form.city}
          />
        </Label>

        <Label id="state">
          <input
            placeholder="UF"
            {...register('state')}
            required
            defaultValue={form.state}
          />
        </Label>
      </Form>
    </AddressCardContainer>
  );
}