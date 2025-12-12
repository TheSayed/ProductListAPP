import {useWindowDimensions} from 'react-native';
import {Product} from '../../store/slices/productsSlice';

export const useDeletedItemsScreen = (items: Product[]) => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isPortrait ? 1 : 2;
  const listKey = `deleted-list-${numColumns}`;

  return {
    isPortrait,
    numColumns,
    listKey,
    items,
  };
};

