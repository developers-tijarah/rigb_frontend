import castPxToRem from './castPxToRem';

export default function getResponsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: castPxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: castPxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: castPxToRem(lg),
    },
  };
}
