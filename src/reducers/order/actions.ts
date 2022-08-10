import { CoffeeData, FormData } from '../../contexts/OrderCartContext';

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  UPDATE_PRICE = 'UPDATE_PRICE',
  UPDATE_FORM = 'UPDATE_FORM'
}

export function addCoffeAction(coffeeSelected: CoffeeData) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      ...coffeeSelected
    }
  }
}

export function removeCoffeeAction(coffeeSelected: CoffeeData) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      ...coffeeSelected
    }
  }
}

export function incrementCoffeeAction(coffeeSelected: CoffeeData) {
  return {
    type: ActionTypes.INCREMENT_COFFEE,
    payload: {
      ...coffeeSelected
    }
  }
}

export function decrementCoffeeAction(coffeeSelected: CoffeeData) {
  return {
    type: ActionTypes.DECREMENT_COFFEE,
    payload: {
      ...coffeeSelected
    }
  }
}

export function updatePriceAction() {
  return {
    type: ActionTypes.UPDATE_PRICE,
  }
}

export function updateFormAction(formData: FormData) {
  return {
    type: ActionTypes.UPDATE_FORM,
    payload: {
      ...formData
    }
  }
}