import {useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const useCartScreen = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isPortrait ? 1 : 2;
  const listKey = `cart-list-${numColumns}`;

  return {
    items,
    isPortrait,
    numColumns,
    listKey,
  };
};

