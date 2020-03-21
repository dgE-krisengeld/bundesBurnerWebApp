import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {WalletComponent} from "../../components/Wallet/Wallet";
import {getPrivateKey} from "../../state/wallet/selector";
import { ethers } from 'ethers';

function Container({privateKey}) {

    const [wallet, setWallet] = useState(null)


    useEffect(() => {
        if(privateKey) {
            setWallet(new ethers.Wallet(privateKey));
        }
    }, [privateKey])


    return <WalletComponent wallet={wallet} />
}

const mapStateToProps = (state, ownProps) => {

    return {
        privateKey: getPrivateKey(state)
    }
}

const mapDispatchToProps = {
}

export const WalletContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
