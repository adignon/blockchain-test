import { NextApiRequest, NextApiResponse } from "next"
import crypto from "crypto"
import manager from "../../models"
//@ts-ignore
import TronWeb from "tronweb"
import { NextResponse } from "next/server"

const tronWeb = new TronWeb({
    fullHost: "https://trx.getblock.io/mainnet/",
    headers: { "x-api-key": "d02cc299-add9-4bc4-b638-ff8b39993683" }
})


export default {
    createAdress: async (req:NextApiRequest, res:NextApiResponse) => {
        try {
            const adressData = await tronWeb.createAccount()

            const data = await manager.saveAdress({
                network: "TRX",
                adress: adressData.address.base58,
                pivate: adressData.privateKey,
                public: adressData.publicKey
            })
            return NextResponse.json({
                data,
                status: true
            },{
                status: 200
            })

        } catch (e:any) {
            return NextResponse.json({
                message: e.message,
                error: e,
                status: true
            },{
                status: 400
            })
        }
    },
    createTransaction: async (req:NextApiRequest, res:NextApiResponse) => {

        let mnemonicData=req.body.passphrase ? tronWeb.fromMnemonic(req.body.passphrase) :  null
        return NextResponse.json(mnemonicData);
        const privateKey = mnemonicData ? mnemonicData.privateKey : req.body.pk
        const data = req.body

        if (!privateKey) {
            return NextResponse.json({
                status: false,
                message: "Private key not provided"
            },{
                status: 400
            })
        } else if (!data.to) {
            return NextResponse.json({
                status: false,
                message: "Receiver adress not provided"
            },{
                status: 400
            })
        } else if (!data.amount) {
            return NextResponse.json({
                status: false,
                message: "Transfer amount not provided"
            },{
                status: 400
            })
        }

        try {
            const transactionDetails=await tronWeb.trx.sendTransaction(data.to, data.amount, privateKey)
            const transaction = await manager.saveTransaction({
                from:mnemonicData ? mnemonicData.address : tronWeb.address.fromPrivateKey(privateKey),
                to: data.to,
                network: "TRX",
                amount:  data.amount.toString(),
                status: "",
                data:transactionDetails
            })
            return NextResponse.json({
                data:transaction,
                status: true
            },{
                status: 200
            });
        } catch (e:any) {
            console.error(e)
            return NextResponse.json({
                message: e.message,
                error: e,
                status: false
            },{
                status: 400
            })
        }
    },

    getAccount: async (req:any, res:NextApiResponse)=>{
        const adress=req.params.adress
        try{
            console.log(adress,  tronWeb.trx.getAccount(adress))
            return NextResponse.json({
                data:await  tronWeb.trx.getAccount(adress)
            },{
                status: 200
            })
        }catch(e:any){  
            return NextResponse.json({
                status:false,
                error:e,
                message:e.message
                
            },{
                status: 400
            })
        }
    }
}