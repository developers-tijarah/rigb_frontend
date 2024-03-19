/* eslint-disable no-unused-vars */
import ThemeProvider from './theme';
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import Router from './routes';
import { Toaster } from "react-hot-toast";
// import WalletCv2App from './Web3/Connection';


const projectId = "469da3e513df80cb464a7fcee89c1052";

  const Binance = {
    chainId: 56,
    name: "Binance Smart Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com",
    rpcUrl: "https://binance.llamarpc.com",
  };

  const BinanceTestNet = {
    chainId: 97,
    name: "BNB Smart Chain Testnet",
    currency: "BNB",
    explorerUrl: "https://testnet.bscscan.com/",
    rpcUrl: "https://bsc-testnet.blockpi.network/v1/rpc/public",
  };

  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com", // origin must match your domain & subdomain
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [BinanceTestNet],
    projectId,
    enableAnalytics: true,
  });

function App() {
  return (
      <ThemeProvider>
          <Router />
          <Toaster/>
      </ThemeProvider>
  );
}

export default App;
