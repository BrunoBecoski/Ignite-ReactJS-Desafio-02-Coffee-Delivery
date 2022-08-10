import { ActionTypes } from './actions';
import { CoffeeData, PriceData, FormData } from '../../contexts/OrderCartContext';

interface OrderState {
  cart: CoffeeData[];
  price: PriceData;
  form: FormData;
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {

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

    case ActionTypes.REMOVE_COFFEE: {
      const updatedCart = state.cart.filter(coffee => coffee.id !== action.payload.id);
      return ({
        ...state,
        cart: updatedCart
      });
    }

    case ActionTypes.INCREMENT_COFFEE: {
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

    case ActionTypes.DECREMENT_COFFEE: {
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

    case ActionTypes.UPDATE_PRICE: {
      const coffeePrice = state.cart.reduce((acc, coffee) => {
        const totalCoffeePrice = coffee.price * coffee.quantity;
        return acc + totalCoffeePrice;
      }, 0);
  
      const deliveryPrice = 3.50;
  
      const totalPrice = coffeePrice + deliveryPrice;
  
      return ({
        ...state,
        price: {
          coffeePrice,
          deliveryPrice,
          totalPrice
        }
      });
    }

    case ActionTypes.UPDATE_FORM: {
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
}