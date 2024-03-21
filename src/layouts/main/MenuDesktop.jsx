import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, styled } from '@mui/material';
import { useTheme } from '@emotion/react';

// ----------------------------------------------------------------------------------------------------

const LinkStyle = styled(RouterLink)(({ theme, isOffset }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.secondary,
  textTransform: 'capitalize',
  marginRight: theme.spacing(5),
  textDecoration: 'none',
  ...(isOffset && { color: theme.palette.text.secondary }),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

MenuDesktop.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  menu: PropTypes.array,
};

export default function MenuDesktop({ menu, isHome, isOffset }) {
  const theme = useTheme();

  return (
    <Stack direction="row">
      {menu.map(({ title, to }) => (
        <LinkStyle
          isHome={isHome}
          isOffset={isOffset}
          key={title}
          to={to}
          sx={{
            '&.active': {
              color: theme.palette.primary.main,
            },
          }}
        >
          {title}
        </LinkStyle>
      ))}
    </Stack>
  );
}
