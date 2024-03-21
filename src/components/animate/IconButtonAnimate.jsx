import { forwardRef } from 'react';
import { m } from 'framer-motion';

// @mui
import { Box, IconButton } from '@mui/material';

// ----------------------------------------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 },
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 },
};

function AnimateWrap({ children, size }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{ display: 'inline-flex' }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------------------------------------

const IconButtonAnimate = forwardRef(({ children, size = 'medium', ...rest }, ref) => (
  <AnimateWrap size={size}>
    <IconButton size={size} ref={ref} {...rest}>
      {children}
    </IconButton>
  </AnimateWrap>
));

export default IconButtonAnimate;
