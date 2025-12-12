import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(8),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(24),
    borderWidth: moderateScale(1),
    borderColor: COLORS.mediumGrayBorder,
    flexShrink: 0,
    minWidth: moderateScale(150),
  },
  text: {
    fontSize: scaleFont(14),
    fontWeight: '500',
    color: COLORS.darkGrayText,
    marginRight: moderateScale(6),
  },
});
