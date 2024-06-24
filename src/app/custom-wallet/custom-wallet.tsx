"use client"
import React ,{useEffect} from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {useAccount,useDisconnect,useBalance} from "wagmi";

export default function CustomWallet() {


    const { open} = useWeb3Modal();
    const {isConnected,address } = useAccount();
    const {disconnect} = useDisconnect();

   
   

    if(isConnected){
        

        return <button onClick={ ()=> disconnect() }>DisConnect {address}==</button>;
    }

   

    
    const connectWallet = () => {

        open();

        
    }
   // useEffect(() => {

        // if(isConnected){
        //     const result = useBalance({
        //         address:  "0x332417FBb78e0B6EcC806548A89b6a949F29220B",
        //       })
        
        //       console.log("result===",result);
        // }
        

   // },[])

    return <button onClick={connectWallet}>open modal</button>



}