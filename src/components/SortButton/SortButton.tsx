import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './SortButton.styles';

export type SortOrder = 'asc' | 'desc' | 'none';

interface SortButtonProps {
  sortOrder: SortOrder;
  onPress: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({sortOrder, onPress}) => {
  const getIconName = () => {
    if (sortOrder === 'asc') return 'arrow-up';
    if (sortOrder === 'desc') return 'arrow-down';
    return 'remove-outline';
  };

  const getLabel = () => {
    if (sortOrder === 'asc') return 'Price: Low to High';
    if (sortOrder === 'desc') return 'Price: High to Low';
    return 'Sort by Price';
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{getLabel()}</Text>
      <Ionicons name={getIconName()} size={16} color="#333" />
    </TouchableOpacity>
  );
};

export default SortButton;
