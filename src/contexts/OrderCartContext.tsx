import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { orderReducer } from '../reducers/order/reducer';
import {
  addCoffeAction,
  removeCoffeeAction,
  incrementCoffeeAction,
  decrementCoffeeAction,
  updatePriceAction,
  updateFormAction
} from '../reducers/order/actions';

export type CoffeeData = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

export type FormData = {
  postal_code: string;
  street_name: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payment: 'credit' | 'debit' | 'money';
}

export type PriceData = {
  coffeePrice: number;
  deliveryPrice: number;
  totalPrice: number;
}

interface OrderCartContextType {
  cart: CoffeeData[];
  price: PriceData;
  form: FormData;
  addCoffee: (coffeeSelected: CoffeeData) => void;
  removeCoffee: (coffeeSelected: CoffeeData) => void;
  incrementCoffee: (coffeeSelected: CoffeeData) => void;
  decrementCoffee: (coffeeSelected: CoffeeData) => void;
  updateForm: (data: FormData) => void;
}

export const OrderCartContext = createContext({} as OrderCartContextType);

interface OrderCartContextProviderProps {
  children: ReactNode;
}

export function OrderCartContextProvider({
  children
}: OrderCartContextProviderProps) {
  const [orderState, dispath] = useReducer(
    orderReducer,
    {
      cart: [] as CoffeeData[],
      price: {} as PriceData,
      form: {} as FormData
    }, 
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:form-data',
      )

      if (storedStateAsJSON) {
        return {
          cart: [] as CoffeeData[],
          price: {} as PriceData,
          form:  JSON.parse(storedStateAsJSON)
        }
      }

      return {
        cart: [] as CoffeeData[],
        price: {} as PriceData,
        form: {} as FormData
      }
    },  
  );

  const { cart, price, form } = orderState;

  const navigate = useNavigate();

  function addCoffee(coffeeSelected: CoffeeData) {
    dispath(addCoffeAction(coffeeSelected));
  }

  function removeCoffee(coffeeSelected: CoffeeData) {
    dispath(removeCoffeeAction(coffeeSelected));
  }

  function incrementCoffee(coffeeSelected: CoffeeData) {
    dispath(incrementCoffeeAction(coffeeSelected));
  }

  function decrementCoffee(coffeeSelected: CoffeeData) {
    if (coffeeSelected.quantity === 1) {
      return;
    }

    dispath(decrementCoffeeAction(coffeeSelected));
  }

  function updatePrice() {
    dispath(updatePriceAction());
  }

  function updateForm(formData: FormData) {
    if (cart.length) {
      dispath(updateFormAction(formData));

      localStorage.setItem('@coffee-delivery:form-data', JSON.stringify(formData));
      
      navigate(`/success/${price.totalPrice}`);
    } else {
      alert('Selecione algum café');
    }
  }

  useEffect(() => {
    updatePrice();
  }, [cart]);

return (
  <OrderCartContext.Provider value={{
    cart,
    price,
    form,
    addCoffee,
    removeCoffee,
    incrementCoffee,
    decrementCoffee,
    updateForm
  }}>
    {children}
  </OrderCartContext.Provider>
);
}