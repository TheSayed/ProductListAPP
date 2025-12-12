import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {moderateScale, scaleFont, verticalScale} from '../../constants/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrayBg,
  },
  header: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(12),
    borderBottomWidth: verticalScale(1),
    borderBottomColor: COLORS.lightestGrayBorder,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  headerLandscape: {
    paddingVertical: verticalScale(8),
    gap: moderateScale(10),
  },
  searchWrapper: {
    flex: 1,
    minWidth: 0,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(10),
    backgroundColor: COLORS.white,
    borderBottomWidth: verticalScale(1),
    borderBottomColor: COLORS.lightestGrayBorder,
    gap: moderateScale(12),
  },
  backButton: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(8),
    backgroundColor: COLORS.lightGrayBg,
  },
  backButtonText: {
    fontSize: scaleFont(14),
    color: COLORS.darkGrayText,
    fontWeight: '600',
  },
  screenTitle: {
    fontSize: scaleFont(16),
    fontWeight: '700',
    color: COLORS.darkGrayText,
  },
  topActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(4),
    backgroundColor: COLORS.white,
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.blackShadow,
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.12,
    shadowRadius: moderateScale(4),
    elevation: 4,
  },
  dangerActionButton: {
    backgroundColor: COLORS.dangerRed,
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: scaleFont(14),
    fontWeight: '700',
  },
  listContent: {
    paddingHorizontal: moderateScale(12),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(110),
  },
  listContentLandscape: {
    paddingHorizontal: moderateScale(14),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(130),
  },
  columnWrapper: {
    gap: moderateScale(10),
    paddingHorizontal: moderateScale(2),
  },
  bottomActionsBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: verticalScale(24),
    width: '100%',
    paddingHorizontal: moderateScale(16),
  },
  bottomActionsBarPortrait: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomActionsBarLandscape: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomActionsRowPortrait: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: moderateScale(12),
  },
  bottomActionsRowLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: moderateScale(12),
  },
  buttonSpacer: {
    marginLeft: moderateScale(12),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(50),
  },
  emptyText: {
    fontSize: scaleFont(16),
    color: COLORS.mediumLightGrayText,
  },
});
