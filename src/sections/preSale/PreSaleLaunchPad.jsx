import { m } from 'framer-motion';
// @mui
import { Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// locals
import { preSaleBlogPosts } from '../../_mock/_preSaleBlogPosts';
import PreSaleForm from './PreSaleForm';
// components
import BlogPost from '../../components/BlogPost';
import MotionContainer from '../../components/animate/MotionContainer';
import { useState } from 'react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { useEffect } from 'react';
import { Fixprovider_Contract, devidor } from '../../Web3/Connection';

// ----------------------------------------------------------------------------------------------------

const { headingPhrases, body, button } = preSaleBlogPosts[0];

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  paddingBottom: theme.spacing(15),

  // backgroundColor: theme.palette.grey[300],
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

export const PreSaleLaunchPad = () => {
  const [token, setToken] = useState('');
  const { address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [totalUsdtraised, setTotalUSDTRaised] = useState(0);

  useEffect(() => {
    const init = async () => {
      const contract = await Fixprovider_Contract();
      const price = await contract.methods.totalUSDTRaised().call();
      setTotalUSDTRaised(devidor(price, chainId));
    };
    init();
  }, [address, walletProvider, chainId]);

  return (
    <MotionContainer>
      <RootStyle>
        <Container>
          <Stack direction={{ md: 'row', sm: 'column' }} alignItems={{ sm: 'center' }} spacing={{ md: 10 }}>
            <BlogPost headingPhrases={headingPhrases} body={body} button={button} flexBasis="50%" />
            <PreSaleForm
              totalUsdtraised={totalUsdtraised}
              token={token}
              setToken={setToken}
              sx={{ flexBasis: '50%' }}
            />
          </Stack>
        </Container>
      </RootStyle>
    </MotionContainer>
  );
};
