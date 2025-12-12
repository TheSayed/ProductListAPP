import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dangerRed,
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: COLORS.blackShadow,
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(5),
    elevation: 6,
  },
  text: {
    color: COLORS.white,
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
  },
});
