import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from './productsSlice';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeManyFromCart(state, action: PayloadAction<number[]>) {
      state.items = state.items.filter(
        item => !action.payload.includes(item.id),
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, removeManyFromCart, clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
