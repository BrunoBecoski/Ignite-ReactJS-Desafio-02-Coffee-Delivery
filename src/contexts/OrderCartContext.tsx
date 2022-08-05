import { createContext, ReactNode, useEffect, useState } from 'react';

import { CoffeeInfo } from './CoffeesListContext';

interface CartState {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderCartContextType {
  cart: CartState[];
  addCoffee: (coffeeSelected: CoffeeInfo) => void;
}

export const OrderCartContext = createContext({} as OrderCartContextType);

interface OrderCartContextProviderProps {
  children: ReactNode;
}

export function OrderCartContextProvider({
  children
}: OrderCartContextProviderProps) {
  const [cart, setCart] = useState<CartState[]>([]);

  function addCoffee(coffeeSelected: CoffeeInfo) {
    const coffeeFind = cart.find(coffee => coffee.id === coffeeSelected.id);

    if(coffeeFind) {
      const coffeeToUpdate = {
        ...coffeeFind,
        quantity: coffeeFind.quantity + 1
      }

      const cardUpdated = cart.map(coffee => { 
        if(coffee.id === coffeeSelected.id) {
          return coffeeToUpdate;
        } else {
          return coffee;
        }
      });

      setCart(cardUpdated);
      
    } else {
      const coffeeToAdd = {
        id: coffeeSelected.id,
        img: coffeeSelected.img,
        name: coffeeSelected.name,
        price: coffeeSelected.price,
        quantity: 1
      }

      setCart(state => [...state, coffeeToAdd]);
    }
  }

  useEffect(() => { console.log(JSON.stringify(cart, null, '  ')) }, [cart]);

  return (
    <OrderCartContext.Provider value={{
      cart,
      addCoffee
    }}>
      {children}
    </OrderCartContext.Provider>
  );
}