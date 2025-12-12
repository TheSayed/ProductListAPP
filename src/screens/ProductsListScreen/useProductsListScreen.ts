import {useCallback, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {useProductsList} from './useProductsList';
import {Product} from '../../store/slices/productsSlice';
import {
  addToCart,
  removeFromCart,
  removeManyFromCart,
} from '../../store/slices/cartSlice';
import {RootState} from '../../store';
import {useAppNavigation} from '../../hooks/useAppNavigation';

export const useProductsListScreen = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isPortrait ? 1 : 2;
  const navigation = useAppNavigation();
  const dispatch = useDispatch();

  const [deletedItems, setDeletedItems] = useState<Product[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const {
    allProducts,
    products,
    searchText,
    setSearchText,
    sortOrder,
    handleSortPress,
    selectedIds,
    toggleSelection,
    handleDeleteSelected: deleteSelectedFromStore,
    handleDeleteSingle: deleteSingleFromStore,
    handleReset,
    hasDeletedItems,
  } = useProductsList();

  const listKey = `products-list-${numColumns}`;

  const handleCollect = useCallback(
    (product: Product) => {
      const exists = cartItems.some(item => item.id === product.id);
      if (exists) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(addToCart(product));
      }
    },
    [dispatch, cartItems],
  );

  const handleDeleteItem = useCallback(
    (product: Product) => {
      setDeletedItems(prev =>
        prev.some(item => item.id === product.id) ? prev : [...prev, product],
      );
      dispatch(removeFromCart(product.id));
      deleteSingleFromStore(product.id);
    },
    [deleteSingleFromStore, dispatch],
  );

  const handleDeleteSelected = useCallback(() => {
    if (selectedIds.length === 0) {
      return;
    }

    const itemsToDelete = allProducts.filter(item =>
      selectedIds.includes(item.id),
    );

    setDeletedItems(prev => {
      const newItems = itemsToDelete.filter(
        item => !prev.some(existing => existing.id === item.id),
      );
      if (newItems.length === 0) {
        return prev;
      }
      return [...prev, ...newItems];
    });

    dispatch(removeManyFromCart(selectedIds));

    deleteSelectedFromStore();
  }, [allProducts, deleteSelectedFromStore, selectedIds, dispatch]);

  const handleResetAll = useCallback(() => {
    handleReset();
    setDeletedItems([]);
  }, [handleReset]);

  const handleNavigateToCart = useCallback(() => {
    navigation.navigate('Cart');
  }, [navigation]);

  const handleNavigateToDeletedItems = useCallback(() => {
    navigation.navigate('DeletedItems', {items: deletedItems});
  }, [navigation, deletedItems]);

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
