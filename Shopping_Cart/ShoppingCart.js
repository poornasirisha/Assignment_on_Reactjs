
import React, { useReducer } from 'react';

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add Items</h3>
        <button onClick={() => addItemToCart({ id: 1, name: 'Item 1', quantity: 1 })}>
          Add Item 1
        </button>
        <button onClick={() => addItemToCart({ id: 2, name: 'Item 2', quantity: 1 })}>
          Add Item 2
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
