import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import {styles as listStyles} from '../ProductsListScreen/ProductsListScreen.styles';
import {useDeletedItemsScreen} from './useDeletedItemsScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/types';

type DeletedItemsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'DeletedItems'
>;

const noop = () => {};

const DeletedItemsScreen: React.FC<DeletedItemsScreenProps> = ({navigation}) => {
  const {isPortrait, numColumns, listKey, items} = useDeletedItemsScreen();
  const columnWrapperStyle = !isPortrait ? listStyles.columnWrapper : undefined;

  return (
    <SafeAreaView style={listStyles.container}>
      <View style={listStyles.subHeader}>
        <TouchableOpacity
          style={listStyles.backButton}
          onPress={() => navigation.navigate('ProductsList')}>
          <Text style={listStyles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={listStyles.screenTitle}>Deleted Items</Text>
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
            <Text style={listStyles.emptyText}>No deleted items.</Text>
          </SafeAreaView>
        }
      />
    </SafeAreaView>
  );
};

export default DeletedItemsScreen;
