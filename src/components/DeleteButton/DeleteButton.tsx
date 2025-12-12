import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './DeleteButton.styles';

interface DeleteButtonProps {
  count: number;
  onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({count, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="trash" size={20} color="#fff" />
      <Text style={styles.text}>Delete ({count})</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
