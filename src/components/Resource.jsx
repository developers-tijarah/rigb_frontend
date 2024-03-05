import { Box, Typography, Link } from '@mui/material';
import PropTypes from 'prop-types';

Resource.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
};

export default function Resource({ title, links }) {
  return (
    <Box mr={12}>
      <Typography variant="caption" color="#fff">
        {title}
      </Typography>
      <Box component="ul" p={0} mt={2}>
        {links.map((link) => (
          <Box component="li" key={link}>
            <Link>
              <Typography variant="body2" color="#fff">
                {link}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
