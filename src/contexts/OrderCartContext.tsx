import { createContext, ReactNode, useState } from 'react';

export type CoffeeInfoInCart = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderCartContextType {
  cart: CoffeeInfoInCart[];
  addCoffee: (coffeeSelected: CoffeeInfoInCart) => void;
  incrementCoffeeQuantity: (coffee: CoffeeInfoInCart) => void;
  decrementCoffeeQuantity: (coffee: CoffeeInfoInCart) => void;
}

export const OrderCartContext = createContext({} as OrderCartContextType);

interface OrderCartContextProviderProps {
  children: ReactNode;
}

export function OrderCartContextProvider({
  children
}: OrderCartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeInfoInCart[]>([]);

  function addCoffee(coffeeSelected: CoffeeInfoInCart) {
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
      setCart(state => [...state, coffeeSelected]);
    }
  }

  function decrementCoffeeQuantity(coffeeSelected: CoffeeInfoInCart){
    if(coffeeSelected.quantity === 1) {
      return;

    } else {
      const coffeeToUpdate = {
        ...coffeeSelected,
        quantity: coffeeSelected.quantity - 1
      }

      const cardUpdated = cart.map(coffee => { 
        if(coffee.id === coffeeSelected.id) {
          return coffeeToUpdate;
        } else {
          return coffee;
        }
      });

      setCart(cardUpdated);
    }
  }

  function incrementCoffeeQuantity(coffeeSelected: CoffeeInfoInCart) {
    const coffeeToUpdate = {
      ...coffeeSelected,
      quantity: coffeeSelected.quantity + 1
    }

    const cardUpdated = cart.map(coffee => { 
      if(coffee.id === coffeeSelected.id) {
        return coffeeToUpdate;
      } else {
        return coffee;
      }
    });

    setCart(cardUpdated);
  }

  return (
    <OrderCartContext.Provider value={{
      cart,
      addCoffee,
      incrementCoffeeQuantity,
      decrementCoffeeQuantity
    }}>
      {children}
    </OrderCartContext.Provider>
  );
}