import React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ProductCard from '../../components/ProductCard/ProductCard';
import {MainStackParamList} from '../../navigation/types';
import {styles as listStyles} from '../ProductsListScreen/ProductsListScreen.styles';
import {useCartScreen} from './useCartScreen';

type CartScreenProps = NativeStackScreenProps<MainStackParamList, 'Cart'>;

const noop = () => {};

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const {items, isPortrait, numColumns, listKey} = useCartScreen();
  const columnWrapperStyle = !isPortrait ? listStyles.columnWrapper : undefined;

  return (
    <SafeAreaView style={listStyles.container}>
      <View style={listStyles.subHeader}>
        <TouchableOpacity
          style={listStyles.backButton}
          onPress={() => navigation.navigate('ProductsList')}>
          <Text style={listStyles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={listStyles.screenTitle}>Cart Items</Text>
      </View>
      <FlatList
        key={listKey}
        data={items}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => (
          <ProductCard
            item={item}
            isSelected={false}
            isPortrait={isPortrait}
            isCollected
            onSelect={noop}
            onDelete={noop}
            showActions={false}
          />
        )}
        contentContainerStyle={[
          listStyles.listContent,
          !isPortrait && listStyles.listContentLandscape,
          items.length === 0 && {flex: 1},
        ]}
        ListEmptyComponent={
          <SafeAreaView style={listStyles.emptyContainer}>
            <Text style={listStyles.emptyText}>No items in cart.</Text>
          </SafeAreaView>
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;
