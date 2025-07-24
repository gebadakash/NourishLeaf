import React, { useEffect } from 'react'
import { useGlobalContext } from '../components/context';
import PageHeaderBanner from '../components/PageHeaderBanner';
import BillingForm from '../components/CheckoutPageComponent/BillingForm';

const Checkout = () => {

   const { updateCheckoutPage } = useGlobalContext();

  useEffect(() => {
    updateCheckoutPage();
  }, []);


  return (
    <>
    <PageHeaderBanner/>
    <BillingForm/>
    </>
  )
}

export default Checkout
