const reducer  = (state, action)=>{

  if(action.type === 'Contact_Page'){

    return {

      ...state,
      title:action.payload.title,
      subTitle:action.payload.subTitle
    };
  }

  if(action.type === 'Shop_Page'){

    return {

      ...state,
      title:action.payload.title,
      subTitle:action.payload.subTitle
    };
  }


    if(action.type === 'Cart_Page'){

    return {

      ...state,
      title:action.payload.title,
      subTitle:action.payload.subTitle
    };
  }

    if(action.type === 'Checkout_Page'){

    return {

      ...state,
      title:action.payload.title,
      subTitle:action.payload.subTitle
    };
  }




  return state;
}

export default reducer