"use client"
import React ,{useEffect} from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {useAccount,useDisconnect,useBalance} from "wagmi";
import { format } from "path";
import BigNumber from "bignumber.js";

export default function CustomWallet() {


    const { open} = useWeb3Modal();
    const {isConnected,address } = useAccount();
    const {disconnect} = useDisconnect();

   
   const{data}= useBalance({
        address:address,
    });

    if(isConnected){
        let value:string=data?.value.toString() ? data.value.toString() : "";
        let decimal:number = data?.decimals ? data?.decimals : 0;
        console.log(value+"="+decimal+"*" );

        let numberPow =new BigNumber(10).pow(decimal);
        console.log("numberPow===",numberPow);
        console.log("numberPow==string=",numberPow.toString());
        let balance = Number(value)/Number(numberPow.toString()) ;
        console.log("balance====="+balance);

        return <button onClick={ ()=> disconnect() }>DisConnect {address}=symbol=={data?.symbol}==balance=={balance.toFixed(3)}==</button>;
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