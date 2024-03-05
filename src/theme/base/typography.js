import { pxToRem } from '../functions/pxToRem';
import { responsiveFontSizes } from '../functions/responsiveFontSizes';

const FONT_PRIMARY = 'Poppins, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(45),
    ...responsiveFontSizes({ sm: 45, md: 45, lg: 45 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(35),
    ...responsiveFontSizes({ sm: 35, md: 35, lg: 35 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(22),
  },
  body1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(18),
  },
  caption: {
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
};

export default typography;
