import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {Product} from '../store/slices/productsSlice';

export type MainStackParamList = {
  ProductsList: undefined;
  Cart: undefined;
  DeletedItems: undefined;
};

export type ProductsListScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'ProductsList'
>;

export type ProductsListScreenRouteProp = RouteProp<
  MainStackParamList,
  'ProductsList'
>;
