"use client"

import Image from "next/image";
import { FiChevronDown } from "react-icons/fi"
import React, { useContext } from "react";
import { CryptoContext } from "./ExploreProvider";


const CryptoSwitcher = () => {
    const {cryptoList:unlistedCryptos, crypto:currentCrypto, setCrypto:setCurrentCrypto} =useContext(CryptoContext)
    const cryptos = unlistedCryptos.map((c: any, id: number) => ({ ...c, id }))
    const [open, setOpen] = React.useState(false)
    const handleCLick = (crypto: any) => () => {
        if (open) {
            setCurrentCrypto(crypto)
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <div className=" bg-slate-900 rounded-2xl h-full flex flex-col">
            <div onClick={handleCLick(currentCrypto)} className="select-none flex bg-blue-500/[0.7] shadow items-center justify-between rounded-2xl p-2 px-4 text-slate-200">
                <div className="flex cursor-default" >
                    <div className=" flex flex-col  justify-center ">
                        <Image
                            src={currentCrypto.src}
                            width={35}
                            height={35}
                            alt={currentCrypto.title}
                        />
                    </div>
                    <div className="ml-3">
                        <h6 className=" text-lg ">{currentCrypto.title}</h6>
                        <p className="text-[10px] text-slate-300">{currentCrypto.blockchain}</p>
                    </div>
                </div>
                <div>
                    <FiChevronDown color="#fff" />
                </div>
            </div>
            <div className={`transition  transition transition-[max-height] overflow-auto ${!open ? "max-h-[0px]" : "max-h-[100px"}`}>
                {
                    cryptos.filter((c: any) => c.id !== currentCrypto?.id).map((c: any) => (
                        <div onClick={handleCLick(c)} className="select-none cursor-default hover:bg-slate-800 mt-2 flex items-center justify-between rounded-2xl p-2 px-4 text-slate-400">
                            <div className="flex">
                                <div className=" flex flex-col  justify-center ">
                                    <Image
                                        src={c.src}
                                        width={35}
                                        height={35}
                                        alt={c.title}
                                    />
                                </div>
                                <div className="ml-3">
                                    <h6 className=" text-lg ">{c.title}</h6>
                                    <p className=" text-[10px] text-slate-500">{c.blockchain}</p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export function ExplorerLayout({ children }: any) {
    return (
        <div className="h-screen flex overflow-hidden z-[1] relative">
            <div className="max-w-[270px]  w-full p-2 flex flex-column justify-center">
                <div className="px-2 flex flex-col   bg-slate-800/[0.3] rounded-xl py-4 ">
                    <div className="max-h-[calc(100%-150px)]">
                        <CryptoSwitcher/>
                    </div>
                    <div className="bg-slate-700/[.2] p-1 rounded-2xl mt-8">
                        <button className="p-3 pl-6 transition w-full text-left  rounded-2xl text-slate-500 hover:bg-slate-400/[0.2] hover:text-slate-400">
                            Générer une adresse
                        </button>
                        <button className="p-3 pl-6 transition w-full text-left mt-2 rounded-2xl text-slate-500 hover:bg-slate-400/[0.2] hover:text-slate-400">
                            Effectuer une transaction
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-auto">
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}