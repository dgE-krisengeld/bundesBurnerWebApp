import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {WalletComponent} from "../../components/Wallet/Wallet";
import {getPrivateKey} from "../../state/wallet/selector";
import { ethers, utils } from 'ethers';
import {getWalletAndContract} from "../../utils/Wallet";
import {Decimal} from 'decimal.js';
import {setPrivateKey, setWalletJSon} from "../../state/wallet/actions";

// const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "b7db8fd5d69613165237b32493665a04"}, "ciphertext": "e646b8d2f25fb0de91d0f2fbd56a4cf88adb1038ec51a77c51340f2790fca08f", "kdf": "pbkdf2", "kdfparams": {"c": 1000000, "dklen": 32, "prf": "hmac-sha256", "salt": "2481268c4f1523849926c676a61fd58c"}, "mac": "82d3a6d212bb2b597a70e16813952d8a42cf33371515d0de5a5fe81898d99ddb"}, "id": "e91a5a58-2230-4449-8507-c5e9fff7f409", "version": 3})
// const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "4a88bc74e23609553ff91c0d6c1cf748"}, "ciphertext": "efdd06cbe19fd600238d6e5130c45486934608996d442f63b8aa88f3b996373b", "kdf": "pbkdf2", "kdfparams": {"c": 100000, "dklen": 32, "prf": "hmac-sha256", "salt": "ea8e185a9b4955e367b64c98ff81f9c2"}, "mac": "c5de701da07451cf2b406976493c0d4d6c953934a0ef05ea35c61d95ef1edaf4"}, "id": "b851d0a6-7334-444c-89fa-40ba6525e328", "version": 3})
// const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "3419a57b4c538ad85d96c98aaabfb014"}, "ciphertext": "6022f4c01f0f1f9266c6dbb7d0470d80889815e5c2185f03031e2fcf63f75484", "kdf": "pbkdf2", "kdfparams": {"c": 100, "dklen": 32, "prf": "hmac-sha256", "salt": "b2ad51463e554cfab06fc5ca5cba10ce"}, "mac": "0b5057cac137c1762c8ce10b89609da430e53bab0681aa2a6b3ba466169d80eb"}, "id": "42b6bc6b-7919-4e78-a402-8f54c9741d80", "version": 3})
// const {wallet, contract} = getWalletAndContract("0x36e9bb9b5c5e2199d70fbc0823f1f1d63c7a9ab7dcb53924c9a200bb07626d56")
// const {wallet, contract} = getWalletAndContract(encryptedJSON)

// console.log('wtf', wallet, contract, 'decimals')
// contract.decimals().then(data => console.log(data))
// contract.balanceOf(wallet.address).then(data => {
//     const num = new Decimal(data._hex)
//     console.log('utils', utils, utils.formatEther(data))
//     console.log(data, num, num.toPrecision(18))
// })

let overrides = {
    // The maximum units of gas for the transaction to use
    gasLimit: 2000000,

};

// contract.allowance("0xcab32842eAe777945F55D291756A69d48bC81ECe", "0x460693dA8b4a3C489c545e51f54269995046b84d")
//     .then((data) => {
//         console.log('allowance', data, utils.formatEther(data))
//     })

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// contract.transfer("0x460693dA8b4a3C489c545e51f54269995046b84d", 1, overrides)
//     .then(async data => {
//         console.log('transfaer', data, data.hash)
//
//         console.log('transfer start')
//         const interval = setInterval(() => {
//             wallet.provider.getTransaction(data.hash).then((transaction) => {
//                 console.log("tr", transaction);
//
//                 if(transaction.blockNumber && transaction.confirmations > 0) {
//                     console.log('transaction confirmed!')
//                     clearInterval(interval)
//                 }
//             });
//         }, 3000)
//
//     })

// const isTransactionMined = async(transactionHash) => {
//     const txReceipt = await wallet.provider.getTransactionReceipt(transactionHash);
//
//     console.log("receipt", txReceipt)
//     // if (txReceipt.blockNumber) {
//     //     return txReceipt;
//     // }
// }


// const callback = function() {
//     console.log(arguments)
// }
// contract.on("Transfer", async (from, to, amount, eventObject) => {
//     console.log(from, to, amount, eventObject)
//
//     const receipt = await eventObject.getTransactionReceipt()
//
//     console.log("receipt", receipt)
// })

// contract.on("TransferError")
// contract.approve("0x460693dA8b4a3C489c545e51f54269995046b84d", 1, overrides)
//     .then(() => {
//         contract.transferFrom("0xcab32842eAe777945F55D291756A69d48bC81ECe",
//             "0x460693dA8b4a3C489c545e51f54269995046b84d", 1, overrides)
//             .then(data => {
//                 console.log(data)
//             })
//
//     })
function Container({privateKey, setPrivateKey, setWalletJson}) {

    const [wallet, setWallet] = useState(null)
    const [contract, setContract] = useState(null)
    const [balance, setBalance] = useState(null)
    useEffect(() => {

        console.log(privateKey)
        if (privateKey) {
            const walletAndContract = getWalletAndContract(privateKey)

            console.log('wtf', walletAndContract)
            setWallet(walletAndContract.wallet)
            setContract(walletAndContract.contract)
        } else {
            setWallet(null)
        }
    }, [privateKey])

    useEffect(() => {

        console.log('wallet and contract', contract)
        if(contract && wallet) {
            const getBalance = async () => {

                console.log('address', wallet.signingKey.address)
                const myBalance = await contract.balanceOf(wallet.signingKey.address)

                console.log('wtf dsfasfsa dfsasad', utils.formatEther(1, {commify: true}))
                setBalance(new Decimal(utils.formatEther(myBalance)).toFixed(2))
            }

            getBalance()
            // contract.balanceOf(wallet.signingKey.address).then(data => {
            //     const num = new Decimal(data._hex)
            //     console.log('utils', utils, utils.formatEther(data))
            //     console.log(data, num, num.toPrecision(18))
            //
            //
            //     setBalance(utils.formatEther(data))
            // })
        }

    }, [wallet, contract])



    return <WalletComponent wallet={wallet} onDelete={() => {
        setPrivateKey(null)
        setWalletJSon(null)
    }} balance={balance}/>
}

const mapStateToProps = (state, ownProps) => {

    return {
        privateKey: getPrivateKey(state)
    }
}

const mapDispatchToProps = {
    setPrivateKey: setPrivateKey,
    setWalletJSon: setWalletJSon,
}

export const WalletContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
