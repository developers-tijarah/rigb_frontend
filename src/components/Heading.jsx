import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------------------------------------

const RootStyle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, color }) => ({
  background: color || theme.palette.gradients.primary,
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

Heading.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default function Heading({ phrases, color, variant = 'h2', ...other }) {
  return (
    <Stack direction="column">
      {phrases.map((phrase, index) => (
        <RootStyle key={index} color={color} variant={variant} {...other}>
          {phrase}
        </RootStyle>
      ))}
    </Stack>
  );
}
