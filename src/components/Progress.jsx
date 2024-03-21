import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Countdown from 'react-countdown';

const ProgressBarStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 12,
  borderRadius: theme.spacing(2),
  backgroundImage: theme.palette.gradients.tertiary,
}));

export default function Progress() {
  return (
    <Stack direction="column" gap={1}>
      <Typography color="#fff" textAlign="center">{`Ends in`}</Typography>
      {/* <ProgressBarStyle /> */}

      <Typography textAlign="center" color="#fff" fontSize={28}>
        <Countdown date={1717200048000} />
      </Typography>
    </Stack>
  );
}
