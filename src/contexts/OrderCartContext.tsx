import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type CoffeeInfoInCart = {
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

interface PriceData {
  coffeePrice: number;
  deliveryPrice: number;
  totalPrice: number;
}

interface OrderCartContextType {
  cart: CoffeeInfoInCart[];
  addCoffee: (coffeeSelected: CoffeeInfoInCart) => void;
  incrementCoffeeQuantity: (coffee: CoffeeInfoInCart) => void;
  decrementCoffeeQuantity: (coffee: CoffeeInfoInCart) => void;
  removeCoffee: (coffeeSelected: CoffeeInfoInCart) => void;
  submitForm: (data: FormData) => void;
  form: FormData;
  price: PriceData;
}

export const OrderCartContext = createContext({} as OrderCartContextType);

interface OrderCartContextProviderProps {
  children: ReactNode;
}

export function OrderCartContextProvider({
  children
}: OrderCartContextProviderProps) {
  const [cart, setCart] = useState<CoffeeInfoInCart[]>([]);
  const [form, setForm] = useState({} as FormData);
  const [price, setPrice] = useState({} as PriceData);

  const navigate = useNavigate();

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

  function submitForm(data: FormData) {
    if (cart.length) {
      setForm(data);
      navigate('/success');
    } else {
      alert('Selecione algum café');
    }
  }

  useEffect(() => {
    const coffeePrice = cart.reduce((acc, coffee) => {
      const totalCoffeePrice = coffee.price * coffee.quantity;
      return acc + totalCoffeePrice;
    }, 0);
    
    const deliveryPrice = 3.50;

    const totalPrice = coffeePrice + deliveryPrice;
  
    setPrice({
      coffeePrice,
      deliveryPrice,
      totalPrice
    })

  }, [cart]);

  return (
    <OrderCartContext.Provider value={{
      cart,
      addCoffee,
      incrementCoffeeQuantity,
      decrementCoffeeQuantity,
      removeCoffee,
      submitForm,
      form,
      price
    }}>
      {children}
    </OrderCartContext.Provider>
  );
}