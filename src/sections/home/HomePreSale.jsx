import { Box, Button, Card, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Indicator from '../../components/Indicator';
import SupportTokens from '../../components/SupportTokens';
import WalletConnectForm from '../../components/WalletConnectForm';

const TOKENS = [
  {
    name: 'ETH',
    symbol: 'ETH',
  },
  {
    name: 'USDT',
    symbol: 'USDT',
  },
  {
    name: 'BNB',
    symbol: 'BNB',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(25),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ isWhite, theme }) => {
  return {
    padding: theme.spacing(3),
    border: 0,
    textAlign: 'left',
    boxShadow: 'none',
    width: '50%',
    background: isWhite ? theme.palette.common.white : theme.palette.grey[200],
    borderRadius: theme.spacing(2),
  };
});

const ButtonStyle = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 4),
  borderRadius: '100px',
}));

export default function HomePreSale() {
  return (
    <RootStyle>
      <Box mx={20}>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
          }}
        >
          <CardStyle isWhite={true}>
            <Box>
              <Typography variant="h5" color="primary">
                Lorem Ipsum molestie nunc non blandith
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Typography>
            </Box>

            <Box mt={8}>
              <ButtonStyle variant="contained">
                <Typography variant="subtitle1">Contact Us</Typography>
              </ButtonStyle>
            </Box>
          </CardStyle>
          <CardStyle>
            <Stack direction="column" p={2} alignItems="center" justifyContent="start" gap={2}>
              <Typography variant="h5" color="primary">
                ROYAL Pre-Sale
              </Typography>

              <Indicator />
              <SupportTokens tokens={TOKENS} />

              <WalletConnectForm />

              <Link>
                <Typography>How to Buy</Typography>
              </Link>
            </Stack>
          </CardStyle>
        </Box>
      </Box>
    </RootStyle>
  );
}