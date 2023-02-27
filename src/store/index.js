import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemAlreadyInCart = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
        // state = [{id: 1, price: 12, name: pant, qunatity:2}]
      }
    },
    removeFromCart: (state, action) => {
      const indexItemInCart = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[indexItemInCart].quantity === 1) {
        state = state.splice(indexItemInCart, 1);
      } else {
        state[indexItemInCart].quantity--;
      }
    },
    deleteItem: (state, action) => {
      const itemInCart = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state = state.splice(itemInCart, 1);
    },
  
  replaceCart: (state, action) => {
    const newState = [...action.payload];
    return newState;
},
}
});
export const cartActions = cartSlice.actions;
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {

      const sendData = async () => {
          const response = await fetch('https://react-ecommerce-369ac-default-rtdb.firebaseio.com/cart.json', {
              method: 'PUT',
              body: JSON.stringify(cart),
          })
          if(!response.ok) {
              throw new Error('Sending cart data failed');
          }
      }

      try {
          await sendData();
      } catch(error) {
          console.log(error.message)
      }
  }
}

export const fetchCartData = () => {
  return async dispatch => {
      const fetchData = async () => {
          const response = await fetch('https://react-ecommerce-369ac-default-rtdb.firebaseio.com/cart.json');
          if(!response.ok) throw new Error('Could Not Fetch Cart Data');
          const data = await response.json();
          return data;
      }

      try {
          const cartData = await fetchData();
          dispatch(cartActions.replaceCart(cartData));

      } catch (error){
        console.log(error.message)
      }
  }
}

/*
addToCart({
    id: 1,              let Object = {name: 12, id: 12}
    price: 10,
    category: 'abc'             {...Object1, ...Obejct2, quantiyi: 1} = {name: 12, id: 12, quanityt: 1}
})
Array = [
    {
        name: 'zia'
        id: 90
}
    {
        name: 'zia'
        id: 90
}
]
Array.find((item) => )
*/
