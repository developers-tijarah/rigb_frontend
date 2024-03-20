/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack, FormLabel, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { Allow, Approve, devidor, devidorConvertor, providerWC_Contract, statble_Coins } from '../Web3/Connection';


const InputStyle = styled('input')(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: theme.spacing(6),
  border: 'none',
  outline: 'none',
  padding: theme.spacing(2, 2),
  fontSize: 16,
}));

const notify = (msg) => toast.success(msg);
const errors = (msg) => toast.error(msg);

export default function WalletConnectForm({token}) {
  const { open } = useWeb3Modal()
  const { address, chainId } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const [price, setPrice ] = useState(1)
  const [enteredamount, setEnteredAmount] = useState(0)

  const sliceAddress =(add)=>{
    if(typeof add === "string"){
      const first = add.slice(0,5)
      const second = add.slice(36)
      return first + "...." + second
    }
  }

  useEffect(()=>{
    const init =async()=>{
      const contract = await providerWC_Contract(walletProvider)
      const price = await contract.methods.priceInUSDT().call();
      setPrice(devidor(price, chainId))
    }
    init()
  },[address, walletProvider, chainId])


  const buyToken = async()=>{
    try {
      const contract = await providerWC_Contract(walletProvider)
      if(token === "ETH" || token === "BNB"){
        const a = devidorConvertor(enteredamount, walletProvider)
        const data = await contract.methods.buyTokensWithETH().send({from:address,value:a,  gasPrice:"30000000000"})
        if(data.status){
          notify("Success")
        }
        else{
          errors("Failed")
        }
      }
      else{
        const tokenAdress = token == "USDT" ? statble_Coins[`${chainId}`].USDT : statble_Coins[`${chainId}`].USDC
        const isApprove = await Allow(address, tokenAdress, walletProvider)
        if(isApprove == 0){
          await Approve(address, tokenAdress, walletProvider)
        }
        const a = devidorConvertor(enteredamount, chainId, walletProvider)
        const data = await contract.methods.buyTokensWithStableCoin(tokenAdress, a).send({from:address})
        if(data.status){
          notify("Success")
        }
        else{
          errors("Failed")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }


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

        <InputStyle label="Amount in USDT" fullWidth onChange={(e)=>setEnteredAmount(e.target.value)} />
      </Stack>

      <Stack gap={0.5} width="100%">
        <FormLabel>
          <Typography variant="body2" color="#fff">
            Amount in $ROYAL you receive
          </Typography>
        </FormLabel>
        <InputStyle disabled value={Number(price)*Number(enteredamount)} label="Amount in USDT" fullWidth />
      </Stack>

      <Button
        fullWidth
        variant="contained"
        sx={(theme) => ({
          backgroundImage: theme.palette.gradients.tertiary,
        })}
        onClick={()=> {
          if(address){
            buyToken()
            return
          }
          else{
            open()
          }
        }}
      >
        <Typography variant="subtitle1">{address ? "Buy Token" : "CONNECT WALLET"}</Typography>
      </Button>
    </Stack>
  );
}
