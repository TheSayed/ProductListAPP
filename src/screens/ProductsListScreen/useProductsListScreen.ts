import {useCallback, useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {useProductsViewModel} from './useProductsViewModel';
import {useAppNavigation} from '../../hooks/useAppNavigation';

export const useProductsListScreen = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isPortrait ? 1 : 2;
  const navigation = useAppNavigation();

  const {
    products,
    searchText,
    setSearchText,
    sortOrder,
    handleSortPress,
    selectedIds,
    toggleSelection,
    handleDeleteSelected,
    handleDeleteItem,
    handleResetAll,
    hasDeletedItems,
    deletedItems,
    cartItems,
    handleCollect,
  } = useProductsViewModel();

  const listKey = `products-list-${numColumns}`;

  const handleNavigateToCart = useCallback(() => {
    navigation.navigate('Cart');
  }, [navigation]);

  const handleNavigateToDeletedItems = useCallback(() => {
    navigation.navigate('DeletedItems');
  }, [navigation]);

  const shouldShowTopActions = useMemo(
    () => cartItems.length > 0 || deletedItems.length > 0,
    [cartItems, deletedItems],
  );

  return {
    isPortrait,
    numColumns,
    listKey,
    cartItems,
    deletedItems,
    products,
    searchText,
    setSearchText,
    sortOrder,
    handleSortPress,
    selectedIds,
    toggleSelection,
    handleDeleteItem,
    handleDeleteSelected,
    handleResetAll,
    hasDeletedItems,
    handleCollect,
    handleNavigateToCart,
    handleNavigateToDeletedItems,
    shouldShowTopActions,
  };
};
