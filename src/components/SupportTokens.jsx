/* eslint-disable react/prop-types */
import { Box, Typography, Stack } from '@mui/material';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import PropTypes from 'prop-types';
import { chain_Native_Token } from '../Web3/Connection';

SupportTokens.propTypes = {
  tokens: PropTypes.array,
};

export default function SupportTokens({ tokens, setToken }) {
  const { chainId } = useWeb3ModalAccount()
  return (
    <>
      <Box>
        <Typography variant="body1" color="primary">
          1 ROYAL = $1
        </Typography>
      </Box>

      <Stack width="100%" direction="row" justifyContent="space-between">
       
          <Box
            px={12}
            py={4}
            sx={(theme) => ({
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: theme.spacing(2),
            })}
            onClick={()=>setToken(chainId ? chain_Native_Token[`${chainId}`] : 'ETH')}
          >
            <Typography>{chainId ? chain_Native_Token[`${chainId}`] : 'ETH'} </Typography>
          </Box>

          <Box
            px={12}
            py={4}
            sx={(theme) => ({
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: theme.spacing(2),
            })}
            onClick={()=>setToken("USDT")}
          >
            <Typography>USDT</Typography>
          </Box>
    
      
      </Stack>
    </>
  );
}
