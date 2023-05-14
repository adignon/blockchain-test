"use client"
import React from "react"

export const CryptoContext = React.createContext({} as {
    cryptoList: {
        id?:number;
        title: string;
        src: string;
        blockchain: string;
    }[];
    crypto: {
        id?:number;
        title: string;
        src: string;
        blockchain: string;
    };
    setCrypto: React.Dispatch<React.SetStateAction<{
        id?:number;
        title: string;
        src: string;
        blockchain: string;
    }>>
})


export const CryptoProvider = ({
    children
}: any) => {
    const cryptoList = [
        {
            title: "Tron 1 ",
            src: "/assets/images/tron-trx-logo.png",
            blockchain: "GetBlock",
        },
        {
            title: "Tezoss",
            src: "/assets/images/tron-trx-logo.png",
            blockchain: "Chainblock",
        }
    ]
    const [crypto, setCrypto] = React.useState(cryptoList[0])
    const value = {
        cryptoList,
        crypto,
        setCrypto
    }
    return (
        <CryptoContext.Provider value={value}>
            {children}
        </CryptoContext.Provider>
    )
}
