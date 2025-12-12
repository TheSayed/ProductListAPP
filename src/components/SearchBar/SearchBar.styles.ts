import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrayInput,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    height: verticalScale(48),
  },
  input: {
    flex: 1,
    marginLeft: moderateScale(8),
    fontSize: scaleFont(16),
    color: COLORS.darkGrayText,
  },
  icon: {
    marginRight: moderateScale(4),
  },
});
