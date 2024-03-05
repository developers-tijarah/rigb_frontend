import { Link as RouterLink } from 'react-router-dom';
import { Stack, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const MENU_CONFIG = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'How It Works',
    path: '/how-it-works',
  },
  {
    title: 'Proof of Reserve',
    path: '/proof-of-reserve',
  },
  {
    title: 'Royal Gold',
    path: '/rxau',
  },
  {
    title: 'Royal Dollar',
    path: '/royal',
  },
  {
    title: 'News',
    path: '/news',
  },
];

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

export default function MenuDesktop() {
  return (
    <Stack direction="row">
      {MENU_CONFIG.map(({ title, path }) => (
        <LinkStyle
          key={title}
          component={RouterLink}
          to={path}
          end={path === '/'}
          sx={{
            '&.active': {
              color: 'primary.main',
            },
          }}
        >
          {title}
        </LinkStyle>
      ))}
    </Stack>
  );
}
