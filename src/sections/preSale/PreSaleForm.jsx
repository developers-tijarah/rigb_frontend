// @mui
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// components
import Heading from '../../components/Heading';

import PropTypes from 'prop-types';
import Indicator from '../../components/Indicator';
import SupportTokens from '../../components/SupportTokens';
import WalletConnectForm from '../../components/WalletConnectForm';

// ----------------------------------------------------------------------------------------------------

// const tokens = [
//   {
//     symbol: 'ETH',
//     icon: 'cryptocurrency-color:eth',
//   },
//   {
//     symbol: 'USDT',
//     icon: 'cryptocurrency-color:usdt',
//   },
//   {
//     symbol: 'BNB',
//     icon: 'cryptocurrency-color:bnb',
//   },
// ];

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 320,
  // flexGrow: 1,
  maxWidth: 580,
  paddingLeft: theme.spacing(3),
  padding: theme.spacing(3),

  backgroundColor: theme.palette.grey[200],
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    minWidth: 580,
  },
}));

// const StyledTokenCard = styled(Button)(({ theme }) => ({
//   backgroundColor: 'inherit',
//   boxShadow: theme.customShadows.primary,

//   minWidth: 120,
// }));

PreSaleForm.propTypes = {
  totalUsdtraised: PropTypes.number,
  token: PropTypes.any,
  setToken: PropTypes.func,
};

export default function PreSaleForm({ totalUsdtraised, token, setToken, ...rest }) {
  return (
    <RootStyle {...rest}>
      <Heading textAlign="center" variant="h3" phrases={['Royal Pre-Sale']} />

      <Indicator totalUsdtraised={totalUsdtraised} />

      <SupportTokens setToken={setToken} />

      <WalletConnectForm token={token} />
    </RootStyle>
  );
}
