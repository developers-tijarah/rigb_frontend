import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Progress() {
  const ProgressBarStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 12,
    borderRadius: theme.spacing(2),
    backgroundImage: theme.palette.gradients.tertiary,
  }));
  return (
    <Stack direction="column" gap={1}>
      <Typography color="#fff">{`98.94% of minimum goal raised`}</Typography>
      <ProgressBarStyle />
      <Typography textAlign="right" color="#fff">
        $5,000,000
      </Typography>
    </Stack>
  );
}
