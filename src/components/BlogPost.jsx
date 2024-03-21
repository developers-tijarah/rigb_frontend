import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// @mui
import { Box, Button, Stack, Typography, styled } from '@mui/material';

// local
import Iconify from './Iconify';
import Heading from './Heading';

// ----------------------------------------------------------------------------------------------------

const RootStyle = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'align',
})(({ theme, align }) => ({
  gap: 40,
  zIndex: 10,
  maxWidth: 820,
  margin: 'auto',
  textAlign: align,
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    ...(align === 'left' && { marginLeft: 0 }),
    ...(align === 'right' && { marginRight: 0 }),
  },
}));

BlogPost.propTypes = {
  headingPhrases: PropTypes.string,
  body: PropTypes.string,
  button: PropTypes.string,
  align: PropTypes.string,
};

export default function BlogPost({ headingPhrases, body, button, align = 'left', ...rest }) {
  return (
    <RootStyle align={align} {...rest}>
      <m.div>
        <Heading phrases={headingPhrases} />
      </m.div>

      <m.div>
        <Box
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            maxWidth: 580,
            marginLeft: 'auto',
            [theme.breakpoints.up('md')]: {
              ...(align === 'left' && { marginLeft: 0 }),
              ...(align === 'right' && { marginRight: 0 }),
            },
          })}
        >
          <Typography variant="body1">{body}</Typography>
        </Box>
      </m.div>

      <m.div>
        <Button
          size="large"
          variant="contained"
          startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
          sx={(theme) => ({ background: theme.palette.gradients.primary })}
        >
          {button}
        </Button>
      </m.div>
    </RootStyle>
  );
}
