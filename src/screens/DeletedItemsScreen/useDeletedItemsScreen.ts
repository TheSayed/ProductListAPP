import {useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const useDeletedItemsScreen = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isPortrait ? 1 : 2;
  const listKey = `deleted-list-${numColumns}`;
  const items = useSelector((state: RootState) => state.deletedItems.items);

  return {
    isPortrait,
    numColumns,
    listKey,
    items,
  };
};

