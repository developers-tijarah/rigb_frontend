// @mui
import { AppBar, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
// locals
import menu from './menuConfig';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import logo from '../../assets/logo.png';
// hooks
import useOffset from '../../hooks/useOffset';
import useResponsive from '../../hooks/useResponsive';
// config
import { HEADER } from '../../config';
// utils
import getCssStyles from '../../utils/getCssStyles';
// components
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadow?.z8,
}));

export default function MainHeader() {
  const isOffset = useOffset(HEADER.MAIN_DESKTOP_HEIGHT);

  const isDesktop = useResponsive({ query: 'up', key: 'lg' });

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={(theme) => ({
          ...(isOffset && {
            ...getCssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        })}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo image={logo} size={40} />
          <div />

          {isDesktop && <MenuDesktop menu={menu} isOffset={isOffset} />}

          {!isDesktop && <MenuMobile menu={menu} isOffset={isOffset} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
