import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./components/context.jsx";
import Checkout from "./pages/Checkout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import { CartProvider } from "./context/CartContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <CartProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </CartProvider>
  </AppProvider>
);
