import { useTheme } from '@emotion/react';
import { Stack, Typography, Card } from '@mui/material';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types';

Indicator.propTypes = {
  totalUsdtraised: PropTypes.string,
};

export default function Indicator({ totalUsdtraised }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: theme.palette.gradients.primary,
        borderRadius: theme.spacing(1),
      }}
    >
      <Stack textAlign="center" p={3}>
        <Typography gutterBottom variant="h4" color={theme.palette.common.white}>
          ${Number(totalUsdtraised).toFixed(2)}
        </Typography>

        <Stack spacing={0.5}>
          <Typography color={theme.palette.common.white}>End in</Typography>
          <Typography variant="h3" textAlign="center" color={theme.palette.common.white}>
            <Countdown date={1717200048000} />
          </Typography>
          {/* <Typography textAlign="left" variant="caption" color={theme.palette.common.white}>
              98.94% of minimum goal raised
            </Typography> */}
          {/* <LinearProgress
              variant="determinate"
              color="secondary"
              value={(494688.4 / 500000) * 100}
              sx={{
                width: '100%',
                height: theme.spacing(1),
                bgcolor: theme.palette.common.white,
              }}
            /> */}
          {/* <Typography mb={0.5} textAlign="right" variant="caption" color={theme.palette.common.white}>
              $5,000,000
            </Typography>

            <Typography mb={0.5} textAlign="center" variant="body2" color={theme.palette.common.white}>
              10680 Participants
            </Typography>
            <Typography mb={0.5} textAlign="center" variant="caption" color={theme.palette.common.white}>
              Listing Price = $0.05
            </Typography> */}
        </Stack>
      </Stack>
    </Card>
  );
}
