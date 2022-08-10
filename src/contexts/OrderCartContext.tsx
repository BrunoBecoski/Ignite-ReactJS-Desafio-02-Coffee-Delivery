import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export type CoffeeData = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

type FormData = {
  postal_code: string;
  street_name: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payment: 'credit' | 'debit' | 'money';
}

type PriceData = {
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

interface OrderState {
  cart: CoffeeData[];
  price: PriceData;
  form: FormData;
}

export function OrderCartContextProvider({
  children
}: OrderCartContextProviderProps) {
  const [orderState, dispath] = useReducer(
    (state: OrderState, action: any) => {
      switch (action.type) {

        case 'ADD_COFFEE': {
          const coffeeFind = state.cart.find(coffee => coffee.id === action.payload.id);

          if (coffeeFind) {
            const updatedCart = state.cart.map(coffee => {
              if (coffee.id === action.payload.id) {
                return action.payload;
              } else {
                return coffee;
              }
            });

            return ({
              ...state,
              cart: updatedCart
            });
          } else {
            return ({
              ...state,
              cart: [...state.cart, action.payload]
            });
          }
        }

        case 'REMOVE_COFFEE': {
          const updatedCart = state.cart.filter(coffee => coffee.id !== action.payload.id);
          return ({
            ...state,
            cart: updatedCart
          });
        }

        case 'INCREMENT_COFFEE': {
          const coffeeToUpdate = {
            ...action.payload,
            quantity: action.payload.quantity + 1
          }

          const updatedCart = state.cart.map(coffee => {
            if (coffee.id === action.payload.id) {
              return coffeeToUpdate;
            } else {
              return coffee;
            }
          });

          return ({
            ...state,
            cart: updatedCart
          });
        }

        case 'DECREMENT_COFFEE': {
          const coffeeToUpdate = {
            ...action.payload,
            quantity: action.payload.quantity - 1
          }

          const updatedCart = state.cart.map(coffee => {
            if (coffee.id === action.payload.id) {
              return coffeeToUpdate;
            } else {
              return coffee;
            }
          });

          return ({
            ...state,
            cart: updatedCart
          });
        }

        case 'UPDATE_PRICE': {
          return ({
            ...state,
            price: {
              ...action.payload
            }
          });
        }

        case 'UPDATE_FORM': {
          return ({
            ...state,
            cart: [],
            form: {
              ...action.payload
            }
          })
        }

        default:
          return state
      }
    }, {
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
    dispath({
      type: 'ADD_COFFEE',
      payload: {
        ...coffeeSelected
      }
    });
  }

  function removeCoffee(coffeeSelected: CoffeeData) {
    dispath({
      type: 'REMOVE_COFFEE',
      payload: {
        ...coffeeSelected
      }
    });
  }

  function incrementCoffee(coffeeSelected: CoffeeData) {
    dispath({
      type: 'INCREMENT_COFFEE',
      payload: {
        ...coffeeSelected
      }
    });
  }

  function decrementCoffee(coffeeSelected: CoffeeData) {
    if (coffeeSelected.quantity === 1) {
      return;
    }

    dispath({
      type: 'DECREMENT_COFFEE',
      payload: {
        ...coffeeSelected
      }
    });
  }

  function updatePrice() {
    // @ts-ignore
    const coffeePrice = cart.reduce((acc, coffee) => {
      const totalCoffeePrice = coffee.price * coffee.quantity;
      return acc + totalCoffeePrice;
    }, 0);

    const deliveryPrice = 3.50;

    const totalPrice = coffeePrice + deliveryPrice;

    dispath({
      type: 'UPDATE_PRICE',
      payload: {
        coffeePrice,
        deliveryPrice,
        totalPrice
      }
    });
  }

  function updateForm(data: FormData) {
    if (cart.length) {
      dispath({
        type: 'UPDATE_FORM',
        payload: {
          ...data
        }
      });

      localStorage.setItem('@coffee-delivery:form-data', JSON.stringify(data));
      
      navigate('/success');
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