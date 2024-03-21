import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------------------------------------

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.number,
};
export default function Logo({ image, link, size = 60, ...other }) {
  return (
    <Stack component={RouterLink} to={link}>
      <Box width={size} component="img" src={image} {...other} />
    </Stack>
  );
}
