import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from '@react-native-vector-icons/ionicons';
import {Product} from '../../store/slices/productsSlice';
import {landscapeStyles, portraitStyles} from './ProductCard.styles';

interface ProductCardProps {
  item: Product;
  isSelected: boolean;
  isPortrait: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onCollect?: () => void;
  isCollected?: boolean;
  showActions?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  isSelected,
  isPortrait,
  onSelect,
  onDelete,
  onCollect,
  isCollected,
  showActions = true,
}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  }, [scaleValue]);

  const handleDelete = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onDelete());
  };

  const themedStyles = isPortrait ? portraitStyles : landscapeStyles;
  const heartIcon = isCollected ? 'heart' : 'heart-outline';
  const heartColor = isCollected ? '#FF4757' : '#FF6B6B';
  return (
    <Animated.View
      style={[themedStyles.cardContainer, {transform: [{scale: scaleValue}]}]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onSelect}
        style={themedStyles.flex1}>
        <View style={themedStyles.imageContainer}>
          <FastImage
            style={themedStyles.image}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          {isSelected && (
            <View style={themedStyles.selectedOverlay}>
              <Ionicons
                name="checkmark-circle"
                size={32}
                color="#007BFF"
                style={themedStyles.checkIcon}
              />
            </View>
          )}
        </View>

        <View style={themedStyles.detailsContainer}>
          <Text style={themedStyles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={themedStyles.price}>${item.price.toFixed(2)}</Text>

          <View style={themedStyles.tagsContainer}>
            {item.tags.slice(0, 2).map((tag, index) => (
              <View key={index} style={themedStyles.tag}>
                <Text style={themedStyles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>

          {showActions && (
            <View style={themedStyles.actionsContainer}>
              <TouchableOpacity
                onPress={onCollect}
                style={themedStyles.iconButton}>
                <Ionicons name={heartIcon} size={20} color={heartColor} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={themedStyles.iconButton}>
                <Ionicons name="trash-outline" size={20} color="#FF4757" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default React.memo(ProductCard);
