import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import deletedItemsReducer from './slices/deletedItemsSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  deletedItems: deletedItemsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['products', 'cart', 'deletedItems'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
