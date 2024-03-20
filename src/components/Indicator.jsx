import { Stack, Typography, Box } from '@mui/material';
import Progress from './Progress';

export default function Indicator({totalUsdtraised}) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={(theme) => ({
        background: theme.palette.primary.main,
        width: '100%',
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2, 8),
      })}
    >
      <Typography color="#fff" variant="h6">
        ${totalUsdtraised}
      </Typography>
      <Box mt={4} alignSelf="stretch">
        <Progress />
      </Box>

      <Stack mt={4} direction="column" alignItems="center">
        <Typography variant="body2" color="#fff">
          10680 Participants
        </Typography>
        {/* <Typography variant="body2" color="#fff">
          Listing Price = $0.05
        </Typography> */}
      </Stack>
    </Stack>
  );
}
