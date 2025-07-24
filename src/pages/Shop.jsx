import React, { useEffect } from 'react'
import { useGlobalContext } from '../components/context';
import PageHeaderBanner from '../components/PageHeaderBanner';
import FruitShop from '../components/ShopPageComponents/FruitShop';

const Shop = () => {

   const { updateShopPage } = useGlobalContext();

  useEffect(() => {
    updateShopPage();
  }, []);


  return (
    <>
    <PageHeaderBanner/>
    <FruitShop/>
    </>
  )
}

export default Shop
