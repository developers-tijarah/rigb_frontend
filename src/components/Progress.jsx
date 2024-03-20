import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Countdown from 'react-countdown';

export default function Progress() {
  const ProgressBarStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 12,
    borderRadius: theme.spacing(2),
    backgroundImage: theme.palette.gradients.tertiary,
  }));
  return (
    <Stack direction="column" gap={1}>
      <Typography color="#fff" textAlign='center'>{`Starting in`}</Typography>
      {/* <ProgressBarStyle /> */}
      
      <Typography textAlign="center" color="#fff">
      <Countdown date={1717200048000} />
      </Typography>
    </Stack>
  );
}
