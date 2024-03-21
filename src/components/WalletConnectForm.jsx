/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack, FormLabel, Typography, Button, Card, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useWeb3Modal } from '@web3modal/ethers/react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Allow, Approve, chain_Native_Token, devidor, devidorConvertor, providerWC_Contract, statble_Coins } from '../Web3/Connection';
import { useTheme } from '@emotion/react';
import Iconify from './Iconify';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    fontSize: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: 'white',
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(2),
    paddingBottom: 2,
  },

  '& .MuiFilledInput-input': {
    borderRadius: theme.spacing(1),
    backgroundColor: 'white',
  },
}));

const notify = (msg) => toast.success(msg);
const errors = (msg) => toast.error(msg);

export default function WalletConnectForm({ token }) {
  const theme = useTheme();
  const { open } = useWeb3Modal();
  const { address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [price, setPrice] = useState(1);
  const [enteredamount, setEnteredAmount] = useState(0);

  const sliceAddress = (add) => {
    if (typeof add === 'string') {
      const first = add.slice(0, 5);
      const second = add.slice(36);
      return first + '....' + second;
    }
  };

  useEffect(() => {
    const init = async () => {
      const contract = await providerWC_Contract(walletProvider);
      const price = await contract.methods.getLatestETHPrice().call();
      setPrice(devidor(price, chainId));
    };
    init();
  }, [address, walletProvider, chainId]);

  const buyToken = async () => {
    try {
      const contract = await providerWC_Contract(walletProvider);
      if (token === 'ETH' || token === 'BNB') {
        const a = devidorConvertor(enteredamount, walletProvider);
        const data = await contract.methods
          .buyTokensWithETH()
          .send({ from: address, value: a, gasPrice: '30000000000' });
        if (data.status) {
          notify('Success');
        } else {
          errors('Failed');
        }
      } else {
        const tokenAdress = token == 'USDT' ? statble_Coins[`${chainId}`].USDT : statble_Coins[`${chainId}`].USDC;
        const isApprove = await Allow(address, tokenAdress, walletProvider);
        if (isApprove == 0) {
          await Approve(address, tokenAdress, walletProvider);
        }
        const a = devidorConvertor(enteredamount, chainId, walletProvider);
        const data = await contract.methods.buyTokensWithStableCoin(tokenAdress, a).send({ from: address });
        if (data.status) {
          notify('Success');
        } else {
          errors('Failed');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const valueConvrtor = (val) => {
    if (token === 'USDT') {
      return val;
    } else {
      return Number(price) * Number(val);
    }
  };

  return (
    <>
      <Stack component="form" spacing={2} pt={4}>
        <StyledInput
          variant="filled"
          fullWidth
          size="small"
          label={`Amount in ${token}`}
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setEnteredAmount(e.target.value)}
        />

        <StyledInput
          InputProps={{ disableUnderline: true }}
          variant="filled"
          fullWidth
          size="small"
          label="Amount in ROYAL you receive"
          disabled
          value={valueConvrtor(enteredamount)}
        />

        <Button
          size="large"
          variant="contained"
          endIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
          sx={{
            background: theme.palette.gradients.primary,
            padding: 1.5,
          }}
          onClick={() => {
            if (address) {
              buyToken();
              return;
            } else {
              open();
            }
          }}
        >
          <Typography variant="subtitle1">{address ? 'Buy Token' : 'CONNECT WALLET'}</Typography>
        </Button>
      </Stack>
      {/* <Stack
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

          <InputStyle label="Amount in USDT" fullWidth onChange={(e) => setEnteredAmount(e.target.value)} />
        </Stack>

        <Stack gap={0.5} width="100%">
          <FormLabel>
            <Typography variant="body2" color="#fff">
              Amount in $ROYAL you receive
            </Typography>
          </FormLabel>
          <InputStyle disabled value={valueConvrtor(enteredamount)} label="Amount in USDT" fullWidth />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={(theme) => ({
            backgroundImage: theme.palette.gradients.tertiary,
          })}
          onClick={() => {
            if (address) {
              buyToken();
              return;
            } else {
              open();
            }
          }}
        >
          <Typography variant="subtitle1">{address ? 'Buy Token' : 'CONNECT WALLET'}</Typography>
        </Button>
      </Stack> */}
    </>
  );
}
