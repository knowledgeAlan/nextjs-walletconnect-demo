import Image from "next/image";

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

import { Web3Modal } from "@web3modal/wagmi";
import {WalletConnectModal} from "@walletconnect/modal";
import { projectId } from "./config";
 
import Connect from "./connect";
import CustomWallet from "./custom-wallet/custom-wallet";
 
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Connect/> */}
      <CustomWallet/>
    </main>
  );
}
