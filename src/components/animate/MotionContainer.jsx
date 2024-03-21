import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------------------------------------

MotionContainer.propTypes = {
  action: PropTypes.boolean,
  animate: PropTypes.boolean,
  children: PropTypes.node,
};

const varContainer = (props = {}) => {
  const staggerIn = props?.staggerIn || 0.05;
  const delayIn = props?.staggerIn || 0.05;
  const staggerOut = props?.staggerIn || 0.05;

  return {
    animate: {
      transition: {
        staggerChildren: staggerIn,
        delayChildren: delayIn,
      },
    },
    exit: {
      transition: {
        staggerChildren: staggerOut,
        staggerDirection: -1,
      },
    },
  };
};

export default function MotionContainer({ children, animate, action = false }) {
  if (action) {
    return (
      <Box component={m.div} initial={false} animate={animate ? 'animate' : 'exit'} variants={varContainer()}>
        {children}
      </Box>
    );
  }

  return (
    <Box component={m.div} initial="initial" animate="animate" exit="exit" variants={varContainer()}>
      {children}
    </Box>
  );
}
