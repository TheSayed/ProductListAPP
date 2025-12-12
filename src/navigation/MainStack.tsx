import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';
import ProductsListScreen from '../screens/ProductsListScreen/ProductsListScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import DeletedItemsScreen from '../screens/DeletedItemsScreen/DeletedItemsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProductsList" component={ProductsListScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="DeletedItems" component={DeletedItemsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
