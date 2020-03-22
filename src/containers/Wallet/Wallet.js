import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {WalletComponent} from "../../components/Wallet/Wallet";
import {getPrivateKey} from "../../state/wallet/selector";
import { utils } from 'ethers';
import {getWalletAndContract} from "../../utils/Wallet";
import {Decimal} from 'decimal.js';
import {setPrivateKey, setWalletJSon} from "../../state/wallet/actions";

function Container({privateKey, setPrivateKey, setWalletJson}) {

    const [wallet, setWallet] = useState(null)
    const [contract, setContract] = useState(null)
    const [balance, setBalance] = useState(null)
    useEffect(() => {

        if (privateKey) {
            const walletAndContract = getWalletAndContract(privateKey)

            setWallet(walletAndContract.wallet)
            setContract(walletAndContract.contract)
        } else {
            setWallet(null)
        }
    }, [privateKey])

    useEffect(() => {
        if(contract && wallet) {
            const getBalance = async () => {
                const myBalance = await contract.balanceOf(wallet.signingKey.address)
                console.log(utils.formatEther(myBalance))
                setBalance(new Decimal(utils.formatEther(myBalance)).toFixed(2))
            }

            getBalance()
        }

    }, [wallet, contract])



    return <WalletComponent wallet={wallet}  balance={balance}/>
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
