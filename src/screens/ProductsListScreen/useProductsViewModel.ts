import {useState, useMemo, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {
  deleteProducts,
  resetProducts,
  Product,
} from '../../store/slices/productsSlice';
import {addToCart, removeFromCart, removeManyFromCart} from '../../store/slices/cartSlice';
import {addDeletedItems, clearDeletedItems} from '../../store/slices/deletedItemsSlice';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import {SortOrder} from '../../components/SortButton/SortButton';

export const useProductsViewModel = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: RootState) => state.products.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const deletedItems = useSelector(
    (state: RootState) => state.deletedItems.items,
  );

  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [debouncedSearchText, setDebouncedSearchText] = useState('');

  // Debounce search to avoid filtering on every keystroke; kicks in after 3+ chars
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 250);
    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    if (debouncedSearchText.length >= 3) {
      const lowerQuery = debouncedSearchText.toLowerCase();
      result = result.filter(
        item =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)),
      );
    }

    if (sortOrder !== 'none') {
      result.sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        return b.price - a.price;
      });
    }

    return result;
  }, [allProducts, debouncedSearchText, sortOrder]);

  const handleSortPress = useCallback(() => {
    setSortOrder(prev => {
      if (prev === 'none') return 'asc';
      if (prev === 'asc') return 'desc';
      return 'none';
    });
  }, []);

  const toggleSelection = useCallback((id: number) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      }
      return [...prev, id];
    });
  }, []);

  const handleDeleteSelected = useCallback(() => {
    if (selectedIds.length === 0) return;

    const itemsToDelete = allProducts.filter(item =>
      selectedIds.includes(item.id),
    );
    if (itemsToDelete.length > 0) {
      dispatch(addDeletedItems(itemsToDelete));
    }
    dispatch(removeManyFromCart(selectedIds));
    dispatch(deleteProducts(selectedIds));
    setSelectedIds([]);
  }, [allProducts, dispatch, selectedIds]);

  const handleDeleteItem = useCallback(
    (product: Product) => {
      dispatch(addDeletedItems([product]));
      dispatch(removeFromCart(product.id));
      dispatch(deleteProducts([product.id]));
      setSelectedIds(prev => prev.filter(itemId => itemId !== product.id));
    },
    [dispatch],
  );

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

  const handleResetAll = useCallback(() => {
    dispatch(resetProducts());
    setSelectedIds([]);
    dispatch(clearDeletedItems());
  }, [dispatch]);

  const hasDeletedItems =
    deletedItems.length > 0 || allProducts.length < MOCK_DATA.length;

  return {
    // data
    products: filteredAndSortedProducts,
    allProducts,
    cartItems,
    deletedItems,
    searchText,
    sortOrder,
    selectedIds,
    hasDeletedItems,
    // setters/actions
    setSearchText,
    handleSortPress,
    toggleSelection,
    handleDeleteSelected,
    handleDeleteItem,
    handleCollect,
    handleResetAll,
  };
};
