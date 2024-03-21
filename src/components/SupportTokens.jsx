/* eslint-disable react/prop-types */
import { Button, Typography, Stack, styled } from '@mui/material';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import PropTypes from 'prop-types';
import { chain_Native_Token, chain_Native_Token_logo } from '../Web3/Connection';
import Iconify from './Iconify';

const StyledTokenCard = styled(Button)(({ theme }) => ({
  backgroundColor: 'inherit',
  boxShadow: theme.customShadows.primary,

  minWidth: 80,
}));

SupportTokens.propTypes = {
  tokens: PropTypes.array,
};

export default function SupportTokens({ setToken }) {
  const { chainId } = useWeb3ModalAccount();
  return (
    // <>
    //   <Box>
    //     <Typography variant="body1" color="primary">
    //       1 ROYAL = $1
    //     </Typography>
    //   </Box>

    //   <Stack width="100%" direction="row" justifyContent="space-between">
    //     <Box
    //       px={12}
    //       py={4}
    //       sx={(theme) => ({
    //         border: `2px solid ${theme.palette.primary.main}`,
    //         borderRadius: theme.spacing(2),
    //       })}
    //       onClick={() => setToken(chainId ? chain_Native_Token[`${chainId}`] : 'ETH')}
    //     >
    //       <Typography>{chainId ? chain_Native_Token[`${chainId}`] : 'ETH'} </Typography>
    //     </Box>

    //     <Box
    //       px={12}
    //       py={4}
    //       sx={(theme) => ({
    //         border: `2px solid ${theme.palette.primary.main}`,
    //         borderRadius: theme.spacing(2),
    //       })}
    //       onClick={() => setToken('USDT')}
    //     >
    //       <Typography>USDT</Typography>
    //     </Box>
    //   </Stack>
    // </>

    <Stack alignItems="center">
      <Typography gutterBottom color="primary" variant="h5">
        1 ROYAL = $1
      </Typography>

      <Stack direction="row" spacing={4}>
        {/* {tokens.map((token) => (
        <StyledTokenCard key={token.symbol}>
          <Stack direction="row" spacing={1} p={2} alignItems="center">
            <Iconify icon={token.icon} width={40} height={40} />
            <Typography variant="body2" color="primary">
              {token.symbol}
            </Typography>
          </Stack>
        </StyledTokenCard>
      ))} */}
        <StyledTokenCard
          onClick={() => {
            console.log('Clicked ETH');
            setToken(chainId ? chain_Native_Token[`${chainId}`] : 'ETH');
          }}
        >
          <Stack direction="row" spacing={1} p={1} alignItems="center">
            <Iconify icon={`cryptocurrency-color:${chainId ? chain_Native_Token_logo[`${chainId}`] : `eth`}`} width={32} height={32} />
            <Typography variant="body2" color="primary">
              {chainId ? chain_Native_Token[`${chainId}`] : 'ETH'}
            </Typography>
          </Stack>
        </StyledTokenCard>

        <StyledTokenCard
          onClick={() => {
            console.log('Clicked USDT');
            setToken('USDT');
          }}
        >
          <Stack direction="row" spacing={1} p={1} alignItems="center">
            <Iconify icon={'cryptocurrency-color:usdt'} width={32} height={32} />
            <Typography variant="body2" color="primary">
              {'USDT'}
            </Typography>
          </Stack>
        </StyledTokenCard>

        {/* <StyledTokenCard>
        <Stack direction="row" spacing={1} p={2} alignItems="center">
          <Iconify icon={'cryptocurrency-color:bnb'} width={40} height={40} />
          <Typography variant="body2" color="primary">
            {'BNB'}
          </Typography>
        </Stack>
      </StyledTokenCard> */}
      </Stack>
    </Stack>
  );
}
