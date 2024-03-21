import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// config
import { NAVBAR, ICON } from '../../config';
// components
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import Logo from '../../components/Logo';
import IconButtonAnimate from '../../components/animate/IconButtonAnimate';
import logo from '../../assets/logo.png';

// ----------------------------------------------------------------------------------------------------

MenuMobile.propTypes = {
  menu: PropTypes.array,
};

export default function MenuMobile({ menu }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
        }}
      >
        <Iconify icon={'uim:left-indent'} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            // overflow: 'hidden',
            width: NAVBAR.DASHBOARD_WIDTH,
            // borderRightStyle: 'dashed',
            bgcolor: 'background.default',
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.standard,
              }),
          },
        }}
      >
        <Scrollbar timeout={500}>
          <Logo image={logo} size={40} sx={{ mx: 2.5, my: 3 }} />
          <List disablePadding sx={{ px: 2 }}>
            {menu.map(({ title, icon, to }) => (
              <MenuMobileItem key={title} icon={icon} title={title} to={to} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------------------------------------

export const ListItemIconStyle = styled(ListItemIcon)({
  width: ICON.NAVBAR_ITEM,
  height: ICON.NAVBAR_ITEM,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%' },
});

export const ListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})(({ isCollapse, theme }) => ({
  whiteSpace: 'nowrap',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}));

export const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

MenuMobileItem.propTypes = { icon: PropTypes.any, to: PropTypes.string, title: PropTypes.string };

function MenuMobileItem({ icon, title, to }) {
  return (
    <ListItemStyle component={RouterLink} to={to}>
      <ListItemIconStyle>{icon}</ListItemIconStyle>
      <ListItemTextStyle disableTypography primary={title}></ListItemTextStyle>
    </ListItemStyle>
  );
}
