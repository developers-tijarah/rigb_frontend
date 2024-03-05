import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.number,
};
export default function Logo({ image, link, size = 60 }) {
  return (
    <RouterLink to={link} target="_blank">
      <Box width={size} component="img" src={image} />
    </RouterLink>
  );
}
