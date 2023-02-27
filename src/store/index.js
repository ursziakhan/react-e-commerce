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
  },
});
export const cartActions = cartSlice.actions;
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

const sendCartData = (data) => {
  return async (dispatch) => {
    const sendCart = async () => {
      const response = await fetch(
        'https://react-ecommerce-369ac-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      return responseData;
    };
  };
};

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
