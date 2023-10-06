import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function ThemeProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState();

  const calcPriceTot = (price) => {
    let tot = 0;
    tot += price;
    setTotal(tot);
  };

  const addItem = (item, quantity) => {
    const updatedCart = [...cartList];
    const existeItem = updatedCart.findIndex((produc) => produc.id === item.id);
    if (existeItem !== -1) {
      updatedCart[existeItem].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }
    setCartList(updatedCart);
  };

  const removeItem = (itemId) => {
    const cartFiltrado = cartList.filter((item) => item.id !== itemId);
    setCartList(cartFiltrado);
  };

  const clearList = () => {
    setCartList([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cartList,
          addItem,
          removeItem,
          clearList,
          calcPriceTot,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}
