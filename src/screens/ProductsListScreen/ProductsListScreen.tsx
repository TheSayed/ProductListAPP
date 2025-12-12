import React from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortButton from '../../components/SortButton/SortButton';
import ResetButton from '../../components/ResetButton/ResetButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import {styles} from './ProductsListScreen.styles';
import {useProductsListScreen} from './useProductsListScreen';

const ProductsListScreen = () => {
  const {
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
  } = useProductsListScreen();
  const columnWrapperStyle = !isPortrait ? styles.columnWrapper : undefined;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, !isPortrait && styles.headerLandscape]}>
        <View style={styles.searchWrapper}>
          <SearchBar value={searchText} onChangeText={setSearchText} />
        </View>
        <SortButton sortOrder={sortOrder} onPress={handleSortPress} />
      </View>

      {shouldShowTopActions && (
        <View style={styles.topActionsRow}>
          {cartItems.length > 0 && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleNavigateToCart}>
              <Text style={styles.actionButtonText}>Cart Items</Text>
            </TouchableOpacity>
          )}
          {deletedItems.length > 0 && (
            <TouchableOpacity
              style={[styles.actionButton, styles.dangerActionButton]}
              onPress={handleNavigateToDeletedItems}>
              <Text style={styles.actionButtonText}>Deleted Items</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <FlatList
        key={listKey}
        data={products}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => (
          <ProductCard
            item={item}
            isSelected={selectedIds.includes(item.id)}
            isPortrait={isPortrait}
            isCollected={cartItems.some(cartItem => cartItem.id === item.id)}
            onSelect={() => toggleSelection(item.id)}
            onDelete={() => handleDeleteItem(item)}
            onCollect={() => handleCollect(item)}
          />
        )}
        contentContainerStyle={[
          styles.listContent,
          !isPortrait && styles.listContentLandscape,
        ]}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found.</Text>
          </View>
        }
      />

      {(selectedIds.length > 0 || hasDeletedItems) && (
        <View
          style={[
            styles.bottomActionsBar,
            isPortrait
              ? styles.bottomActionsBarPortrait
              : styles.bottomActionsBarLandscape,
          ]}>
          <View
            style={
              isPortrait
                ? styles.bottomActionsRowPortrait
                : styles.bottomActionsRowLandscape
            }>
            {selectedIds.length > 0 && (
              <DeleteButton
                count={selectedIds.length}
                onPress={handleDeleteSelected}
              />
            )}
            {hasDeletedItems && (
              <View
                style={
                  selectedIds.length > 0 ? styles.buttonSpacer : undefined
                }>
                <ResetButton onPress={handleResetAll} />
              </View>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductsListScreen;
