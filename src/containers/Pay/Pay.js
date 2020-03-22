import React, { useState} from 'react';
import { connect } from "react-redux"
import {getPrivateKey} from "../../state/wallet/selector";
import { utils } from 'ethers';
import {getWalletAndContract} from "../../utils/Wallet";
import {PayComponent} from "../../components/Pay/Pay";
import {useHistory, useParams} from "react-router-dom"

let overrides = {
    // The maximum units of gas for the transaction to use
    gasLimit: 8000000,
    gasPrice: utils.parseUnits('1.0', 'gwei'),
    chainId: 4660
};


function Container({privateKey, setPrivateKey, setWalletJson}) {
    const [sending, setSending] = useState(false)
    const history = useHistory()
    const {amount = "", recipient = ""} = useParams()

    const send = ({recipient, amount, note}) => {
        const {wallet, contract} = getWalletAndContract(privateKey)

        setSending(true)

        contract.transfer(recipient, utils.parseUnits(amount.trim(), 18), overrides)
            .then(async data => {

                const interval = setInterval(() => {
                    wallet.provider.getTransaction(data.hash).then((transaction) => {
                        console.log("tr", transaction);

                        if(transaction.blockNumber && transaction.confirmations > 0) {

                            setSending(false)
                            alert("Geld gesendet")
                            history.push("/")
                            clearInterval(interval)
                        }
                    });
                }, 3000)

            })
            .catch(error => {
                setSending(false)
                alert("Etwas ist schief gegangen: " + error.toString)
            })
    }
    return <PayComponent onSubmit={send} sending={sending} amount={amount} recipient={recipient}/>
}

const mapStateToProps = (state, ownProps) => {

    return {
        privateKey: getPrivateKey(state)
    }
}

const mapDispatchToProps = {

}

export const PayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
