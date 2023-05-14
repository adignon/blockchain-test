import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default {
    saveAdress: async (data:any) => {
        try {
            const walletAdress = await prisma.adress.create({
                data: {
                    passphraseHash: data.passphraseHash,
                    passphrase: data.passphrase,
                    network:data.network,
                    adress: data.adress,
                    pivate: data.pivate,
                    public: data.public
                }
            })
            return walletAdress
        } catch (e) {
            console.error(e)
            return false
        }
    },
    saveTransaction: async (data:any) => {
        try {
            const transaction = await prisma.transaction.create({
                data: {
                    from:data.from,
                    to:data.to,
                    network:data.network,
                    amount:data.amount,
                    status:data.status,
                    data:data.data
                }
            })
            return transaction
        } catch (e) {
            return false;
        }
    }
}