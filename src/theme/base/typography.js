import castPxToRem from '../utils/castPxToRem';
import getResponsiveFontSizes from '../utils/getResponsiveFontSizes';

const FONT_PRIMARY = 'Public Sans, sans-serif';

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: castPxToRem(40),
    letterSpacing: 2,
    ...getResponsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: castPxToRem(32),
    ...getResponsiveFontSizes({ sm: 40, md: 44, lg: 52 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: castPxToRem(24),
    ...getResponsiveFontSizes({ sm: 28, md: 32, lg: 36 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: castPxToRem(20),
    ...getResponsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: castPxToRem(18),
    ...getResponsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: castPxToRem(17),
    ...getResponsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: castPxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: castPxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: castPxToRem(18),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: castPxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: castPxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: castPxToRem(12),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: castPxToRem(14),
  },
};

export default typography;
