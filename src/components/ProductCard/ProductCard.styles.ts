// CardContainer.styles.js

import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';
import {Platform} from 'react-native';

export const portraitStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(16),
    elevation: 5,
    flex: 1,
    marginBottom: verticalScale(12),
    marginHorizontal: moderateScale(8),
    overflow: 'hidden',
    shadowColor: COLORS.blackShadow,
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8),
  },
  imageContainer: {
    // Slightly shallower image to fit more cards on screen
    aspectRatio: 1.2,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  detailsContainer: {
    padding: moderateScale(10),
  },
  title: {
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    color: COLORS.darkGrayText,
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: scaleFont(14),
    color: COLORS.primaryBlue,
    fontWeight: '600',
    marginBottom: verticalScale(6),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(4),
    marginBottom: verticalScale(6),
  },
  tag: {
    backgroundColor: COLORS.lightGrayTag,
    paddingHorizontal: moderateScale(6),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(4),
  },
  tagText: {
    fontSize: scaleFont(10),
    color: COLORS.mediumDarkGrayText,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(8),
    alignItems: 'center',
  },
  iconButton: {
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    backgroundColor: COLORS.lightGrayBg,
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 123, 255, 0.2)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
  },
  flex1: {
    flex: 1,
  },
});

export const landscapeStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(14),
    elevation: 4,
    flex: 1,
    marginBottom: verticalScale(10),
    marginHorizontal: moderateScale(6),
    overflow: 'hidden',
    shadowColor: COLORS.blackShadow,
    shadowOffset: {width: 0, height: verticalScale(3)},
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(6),
  },
  imageContainer: {
    // Shallow image to shrink card height in landscape
    aspectRatio: Platform.OS === 'android' ? 3 : 2.2,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: moderateScale(8),
  },
  title: {
    fontSize: scaleFont(15),
    fontWeight: 'bold',
    color: COLORS.darkGrayText,
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: scaleFont(13),
    color: COLORS.primaryBlue,
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(4),
    marginBottom: verticalScale(4),
  },
  tag: {
    backgroundColor: COLORS.lightGrayTag,
    paddingHorizontal: moderateScale(6),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(4),
  },
  tagText: {
    fontSize: scaleFont(10),
    color: COLORS.mediumDarkGrayText,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(6),
    alignItems: 'center',
  },
  iconButton: {
    padding: moderateScale(6),
    borderRadius: moderateScale(18),
    backgroundColor: COLORS.lightGrayBg,
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 123, 255, 0.2)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
  },
  flex1: {
    flex: 1,
  },
});
