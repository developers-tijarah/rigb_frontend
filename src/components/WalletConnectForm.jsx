import { Stack, FormLabel, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const InputStyle = styled('input')(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: theme.spacing(6),
  border: 'none',
  outline: 'none',
  padding: theme.spacing(2, 2),
  fontSize: 16,
}));

export default function WalletConnectForm() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      gap={3}
      sx={(theme) => ({
        mt: 3,
        background: theme.palette.primary.main,
        width: '100%',
        borderRadius: theme.spacing(2),
        padding: theme.spacing(3),
      })}
    >
      <Stack gap={0.5} direction="column" width="100%">
        <FormLabel>
          <Typography variant="body2" color="#fff">
            Amount in USDT you pay
          </Typography>
        </FormLabel>

        <InputStyle label="Amount in USDT" fullWidth />
      </Stack>

      <Stack gap={0.5} width="100%">
        <FormLabel>
          <Typography variant="body2" color="#fff">
            Amount in $SCORP you receive
          </Typography>
        </FormLabel>
        <InputStyle label="Amount in USDT" fullWidth />
      </Stack>

      <Button
        fullWidth
        variant="contained"
        sx={(theme) => ({
          backgroundImage: theme.palette.gradients.tertiary,
        })}
      >
        <Typography variant="subtitle1">CONNECT WALLET</Typography>
      </Button>
    </Stack>
  );
}
