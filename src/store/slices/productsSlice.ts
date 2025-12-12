import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import MOCK_DATA from '../../data/MOCK_DATA.json';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: MOCK_DATA as Product[],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    deleteProducts(state, action: PayloadAction<number[]>) {
      state.items = state.items.filter(
        item => !action.payload.includes(item.id),
      );
    },
    resetProducts(state) {
      state.items = MOCK_DATA as Product[];
    },
  },
});

export const {setProducts, deleteProduct, deleteProducts, resetProducts} =
  productsSlice.actions;
export default productsSlice.reducer;
