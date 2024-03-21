import PropTypes from 'prop-types';
// @mui
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------------------------------------

const RootStyle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'gradient',
})(({ theme, gradient = 'primary' }) => ({
  background: theme.palette.gradients[gradient],
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

GradientText.propTypes = {
  children: PropTypes.node,
  gradient: PropTypes.string,
};

export default function GradientText({ children, gradient, ...rest }) {
  return (
    <RootStyle gradient={gradient} {...rest}>
      {children}
    </RootStyle>
  );
}
