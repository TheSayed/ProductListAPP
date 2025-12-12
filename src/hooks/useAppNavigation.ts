import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../navigation/types';

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<MainStackParamList>>();

export const useAppRoute = <RouteName extends keyof MainStackParamList>() =>
  useRoute<RouteProp<MainStackParamList, RouteName>>();
