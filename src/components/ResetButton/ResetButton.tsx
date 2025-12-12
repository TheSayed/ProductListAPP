import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from './ResetButton.styles';

interface ResetButtonProps {
  onPress: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onPress}>
      <Ionicons name="refresh" size={20} color="#fff" />
      <Text style={styles.resetButtonText}>Reset </Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
