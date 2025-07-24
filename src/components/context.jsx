import React, { createContext, useReducer, useContext } from "react";
import reducer from './reducer';

// Create context
const AppContext = createContext();

// Initial state
const initialState = {
  title: "",
  subTitle: "",
};

// Provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateContactPage = () => {
    dispatch({
      type: "Contact_Page",
      payload: {
        title: "Contact",
        subTitle: "Home"
      }
    });
  };


  const updateShopPage =()=>{
    dispatch({
      type: "Shop_Page",
      payload: {
        title: "Shop",
        subTitle: "Home"
      }
    });

  }

  const updateCartPage =()=>{
    dispatch({
      type: "Cart_Page",
      payload: {
        title: "Cart",
        subTitle: "Home"
      }
    });

  }

  const updateCheckoutPage =()=>{
    dispatch({
      type: "Checkout_Page",
      payload: {
        title: "Checkout",
        subTitle: "Home"
      }
    });

  }

  return (
    <AppContext.Provider value={{ ...state, updateContactPage,updateShopPage,updateCartPage,updateCheckoutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

// Export
export { AppContext, AppProvider, useGlobalContext };
