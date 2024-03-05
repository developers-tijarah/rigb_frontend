// @mui
import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

// locals
import getCssStyles from '../../utils/getCssStyles';
import { HEADER } from '../../config';
import useOffset from '../../hooks/useOffset';
import useResponsive from '../../hooks/useResponsive';
import Logo from '../../components/Logo';
import MenuDesktop from './MenuDesktop';
import brandLogo from '../../assets/BRAND.png';

const AppBarStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isOffset',
})(({ isOffset, theme }) => ({
  ...getCssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1, // TODO: remove or not
  transition: theme.transitions.create('height', {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
    ...(isOffset && { height: HEADER.MAIN_DESKTOP_OFFSET_HEIGHT }),
  },
}));

// ----------------------------------------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffset(HEADER.MAIN_DESKTOP_HEIGHT);

  const isDesktop = useResponsive('up', 'lg');

  return (
    <AppBarStyle isOffset={isOffset}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: '100% !important',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            mx: 20,
            width: '100%',
          }}
        >
          <Logo link="/" image={brandLogo} size={50} />

          {isDesktop && <MenuDesktop />}
        </Box>
      </Toolbar>
    </AppBarStyle>
  );
}
