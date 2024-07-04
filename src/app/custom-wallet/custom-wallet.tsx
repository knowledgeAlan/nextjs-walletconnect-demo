"use client"
import React ,{useEffect, useState} from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {useAccount,useDisconnect,useBalance,useReadContract,useWriteContract} from "wagmi";
import { format } from "path";
import BigNumber from "bignumber.js";
import wagmiLockABI from "@/app/abi/wagmiLockABI.json"

export default function CustomWallet() {


    const { open} = useWeb3Modal();
    const {isConnected,address } = useAccount();
    const {disconnect} = useDisconnect();
    

    const { writeContract } = useWriteContract();
 
   
   const{data}= useBalance({
        address:address,
    });

    const result = useReadContract({
        abi:wagmiLockABI,
        address: '0x7f21D58debc126c9b6635BdAaac62a0032443e13',
        functionName: 'getWagmiReadParameter',
      });

    if(isConnected){
        let value:string=data?.value.toString() ? data.value.toString() : "";
        let decimal:number = data?.decimals ? data?.decimals : 0;
        let readData:string ="";
     

        let numberPow =new BigNumber(10).pow(decimal);
        console.log("numberPow===",numberPow);
        console.log("numberPow==string=",numberPow.toString());
        let balance = Number(value)/Number(numberPow.toString()) ;
        console.log("balance====="+balance);

        console.log("readContractData==isSuccess===",result.isSuccess);
        if(result.isSuccess){
            
            console.log("readContractData==data===",result.data);
            readData = result.data ?  result.data.toString() :"123";
            console.log("readData==",readData)
             
        }
        
        
        const writeContractTest = ()=>{


            console.log("writeContract==");

            

             writeContract({ 
                abi:wagmiLockABI,
                address: '0x7f21D58debc126c9b6635BdAaac62a0032443e13',
                functionName: 'setWagmiReadParameter',
                args: [
                  12n,
                ],
             })
            
        }

        return <>
        <button onClick={ ()=> disconnect() }>DisConnect {address}=symbol=={data?.symbol}==balance=={balance.toFixed(3)}=read=data=={readData}=</button>
        <button onClick={ ()=> writeContractTest() }>write</button>
        </> ;
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