import { alpha } from '@mui/material/styles';

function createGradient(color1, color2) {
  return `linear-gradient(to left, ${color1}, ${color2})`;
}

const WHITE = '#fff';
const BLACK = '#000';

const PRIMARY = {
  lighter: '#6EC2FF',
  light: '#358ED7',
  main: '#004684',
  dark: '#00375A',
  darker: '#002430',
};

const SECONDARY = {
  lighter: '#83CC66',
  light: '#5FAA33',
  main: '#468400',
  dark: '#2D5A00',
  darker: '#193300',
};

const TERTIARY = {
  lighter: '#D4C9AE',
  light: '#A9916C',
  main: '#BFAF92',
  dark: '#9E916F',
  darker: '#7D7153',
};

const INFO = {
  lighter: '#6EC2FF',
  light: '#358ED7',
  main: '#004684',
  dark: '#00375A',
  darker: '#002430',
};

const SUCCESS = {
  lighter: '#83CC66',
  light: '#5FAA33',
  main: '#468400',
  dark: '#2D5A00',
  darker: '#193300',
};

const WARNING = {
  lighter: '#FFECB3',
  light: '#FFE08A',
  main: '#FED93F',
  dark: '#E6C600',
  darker: '#BF9B00',
};

const ERROR = {
  lighter: '#FFCDC1',
  light: '#FF8A81',
  main: '#840004',
  dark: '#630003',
  darker: '#420002',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#272727',
  900: '#161C24',
  '500_8': alpha('#919EAB', 0.08),
  '500_12': alpha('#919EAB', 0.12),
  '500_16': alpha('#919EAB', 0.16),
  '500_24': alpha('#919EAB', 0.24),
  '500_32': alpha('#919EAB', 0.32),
  '500_48': alpha('#919EAB', 0.48),
  '500_56': alpha('#919EAB', 0.56),
  '500_80': alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  secondary: createGradient(SECONDARY.light, SECONDARY.main),
  tertiary: createGradient(TERTIARY.lighter, TERTIARY.darker),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: { black: BLACK, white: WHITE },
  primary: { ...PRIMARY, contrastText: WHITE },
  secondary: { ...SECONDARY, contrastText: WHITE },
  tertiary: { ...TERTIARY, contrastText: WHITE },
  info: { ...INFO, contrastText: WHITE },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: WHITE },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY['500_24'],
  action: {
    hover: GREY['500_8'],
    selected: GREY['500_16'],
    disabled: GREY['500_80'],
    disabledBackground: GREY['500_24'],
    focus: GREY['500_24'],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: WHITE,
      default: WHITE,
      neutral: GREY[200],
    },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: WHITE,
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY['500_16'],
    },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
