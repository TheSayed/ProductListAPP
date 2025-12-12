import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

// Your designer’s baseline sizes
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const scaleFont = (size: number) => {
  return PixelRatio.roundToNearestPixel(size * (width / guidelineBaseWidth));
};
