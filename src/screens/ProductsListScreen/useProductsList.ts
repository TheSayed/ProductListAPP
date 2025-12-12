import {useState, useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {deleteProducts, resetProducts} from '../../store/slices/productsSlice';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import {SortOrder} from '../../components/SortButton/SortButton'; // Assuming SortButton exports this type

export const useProductsList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: RootState) => state.products.items);

  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter
    if (searchText.length >= 3) {
      const lowerQuery = searchText.toLowerCase();
      result = result.filter(
        item =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)),
      );
    }

    // Sort
    if (sortOrder !== 'none') {
      result.sort((a, b) => {
        if (sortOrder === 'asc') return a.price - b.price;
        return b.price - a.price;
      });
    }

    return result;
  }, [allProducts, searchText, sortOrder]);

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

  // Delete Logic:
  // If we delete selected items, we must update the store.
  // The requirement says: "ensure the search function only filters through the updated list".
  // This is handled automatically because `products` comes from Redux, and deleting updates Redux.
  const handleDeleteSelected = useCallback(() => {
    if (selectedIds.length === 0) return;
    dispatch(deleteProducts(selectedIds));
    setSelectedIds([]);
  }, [dispatch, selectedIds]);

  const handleDeleteSingle = useCallback(
    (id: number) => {
      dispatch(deleteProducts([id]));
      // Also remove from selectedIds if present
      if (selectedIds.includes(id)) {
        setSelectedIds(prev => prev.filter(itemId => itemId !== id));
      }
    },
    [dispatch, selectedIds],
  );

  const handleReset = useCallback(() => {
    dispatch(resetProducts());
    setSelectedIds([]);
  }, [dispatch]);

  const hasDeletedItems = allProducts.length < MOCK_DATA.length;

  return {
    products: filteredAndSortedProducts,
    allProducts,
    searchText,
    setSearchText,
    sortOrder,
    handleSortPress,
    selectedIds,
    toggleSelection,
    handleDeleteSelected,
    handleDeleteSingle,
    handleReset,
    hasDeletedItems,
  };
};
