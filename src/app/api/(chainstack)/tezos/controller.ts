import { NextApiRequest, NextApiResponse } from "next";
import { cryptoUtils, Sotez } from "sotez";
import crypto from "crypto"
import  manager from "../../models"
import { NextResponse } from "next/server";

const tezos = new Sotez('https://nd-106-329-480.p2pify.com/1d4fab10de30c4cc9f2bae763a90d2e7');


export default{
    async createAdress(req:NextApiRequest, res:NextApiResponse) {
        try {
            //12 words passphrase/mnemonic  
            const passphrase = cryptoUtils.generateMnemonic()
            const mnemonic = crypto.createHash('sha256')
                .update(passphrase)
                .digest('hex');

            const keys = await cryptoUtils.generateKeys(mnemonic)
            const sk_encrypted = cryptoUtils.encryptSecretKey(keys.sk, passphrase);

            const adress=await manager.saveAdress({
                passphraseHash: mnemonic,
                passphrase,
                network:"TEZOS",
                adress: keys.pkh,
                pivate: sk_encrypted,
                public: keys.pk
            })

            return NextResponse.json({
                data:adress,
                status: true
            },{
                status: 200,
            })
        } catch (e:any) {
            return NextResponse.json({
                message: e.message,
                error: e,
                status: false
            },{
                status: 400,
            })
        }
    },

    async createTransaction(req:NextApiRequest, res:NextApiResponse) {
        
        const privateKey = req.body.pk
        const passphrase = req.body.passphrase || null
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
            await tezos.importKey(
                privateKey,
                passphrase
            );

            const { hash } = await tezos.transfer({
                to: data.to,
                amount: data.amount,
            });

            return NextResponse.json({
                data:{
                    tr_hash: hash
                },
                status:true
            }, {
                status: 200,
            })

        } catch (e:any) {
            console.log(e)
            return NextResponse.json({
                message:e.message,
                error:e,
                status:false
            }, {
                status: 400,
            })
        }
    }
}