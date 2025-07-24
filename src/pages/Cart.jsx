import React, { useEffect } from 'react'
import { useGlobalContext } from '../components/context';
import PageHeaderBanner from '../components/PageHeaderBanner';
import CartTable from '../components/CartPageComponents/CartTable';

const Cart = () => {

   const { updateCartPage } = useGlobalContext();

  useEffect(() => {
    updateCartPage();
  }, []);


  return (
    <>
    <PageHeaderBanner/>
    <CartTable/>
    </>
  )
}

export default Cart
