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
  removeCoffee: (coffeeSelected: CoffeeInfoInCart) => void;
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
      const updatedCart = cart.map(coffee => { 
        if(coffee.id === coffeeSelected.id) {
          return coffeeSelected;
        } else {
          return coffee;
        }
      });

      setCart(updatedCart);
      
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

      const updatedCart = cart.map(coffee => { 
        if(coffee.id === coffeeSelected.id) {
          return coffeeToUpdate;
        } else {
          return coffee;
        }
      });

      setCart(updatedCart);
    }
  }

  function incrementCoffeeQuantity(coffeeSelected: CoffeeInfoInCart) {
    const coffeeToUpdate = {
      ...coffeeSelected,
      quantity: coffeeSelected.quantity + 1
    }

    const updatedCart = cart.map(coffee => { 
      if(coffee.id === coffeeSelected.id) {
        return coffeeToUpdate;
      } else {
        return coffee;
      }
    });

    setCart(updatedCart);
  }

  function removeCoffee(coffeeSelected: CoffeeInfoInCart) {
    const updatedCart = cart.filter(coffee => coffee.id !== coffeeSelected.id);

    setCart(updatedCart);
  }

  return (
    <OrderCartContext.Provider value={{
      cart,
      addCoffee,
      incrementCoffeeQuantity,
      decrementCoffeeQuantity,
      removeCoffee
    }}>
      {children}
    </OrderCartContext.Provider>
  );
}