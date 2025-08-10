import {createContext, useContext, useReducer} from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product, // Passes {name, image, price}
    });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => useContext(CartContext);

