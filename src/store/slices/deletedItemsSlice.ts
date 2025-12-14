import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from './productsSlice';

interface DeletedItemsState {
  items: Product[];
}

const initialState: DeletedItemsState = {
  items: [],
};

const deletedItemsSlice = createSlice({
  name: 'deletedItems',
  initialState,
  reducers: {
    addDeletedItems(state, action: PayloadAction<Product[]>) {
      const existingIds = new Set(state.items.map(item => item.id));
      const deduped = action.payload.filter(item => !existingIds.has(item.id));
      state.items = [...state.items, ...deduped];
    },
    clearDeletedItems(state) {
      state.items = [];
    },
  },
});

export const {addDeletedItems, clearDeletedItems} = deletedItemsSlice.actions;
export default deletedItemsSlice.reducer;
