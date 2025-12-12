import {StyleSheet} from 'react-native';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';

export const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#2ED573',
    paddingHorizontal: moderateScale(24),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(5),
    elevation: 6,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
  },
});
