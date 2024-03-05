import { Box, Typography, Stack } from '@mui/material';
import PropTypes from 'prop-types';

SupportTokens.propTypes = {
  tokens: PropTypes.array,
};

export default function SupportTokens({ tokens }) {
  return (
    <>
      <Box>
        <Typography variant="body1" color="primary">
          1 ROYAL = $0.031
        </Typography>
      </Box>

      <Stack width="100%" direction="row" justifyContent="space-between">
        {tokens.map((token) => (
          <Box
            key={token.name}
            px={12}
            py={4}
            sx={(theme) => ({
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: theme.spacing(2),
            })}
          >
            <Typography>{token.symbol}</Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
}
