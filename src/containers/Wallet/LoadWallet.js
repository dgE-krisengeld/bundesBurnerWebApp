import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {WalletComponent} from "../../components/Wallet/Wallet";
import {getJSonWallet, getPrivateKey} from "../../state/wallet/selector";
import { ethers, utils } from 'ethers';
import {decryptWallet, getWalletAndContract} from "../../utils/Wallet";
import {Decimal} from 'decimal.js';
import {LoadWalletComponent} from "../../components/Wallet/LoadWallet";
import {setPrivateKey} from "../../state/wallet/actions";
import {useHistory} from "react-router-dom"

// const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "b7db8fd5d69613165237b32493665a04"}, "ciphertext": "e646b8d2f25fb0de91d0f2fbd56a4cf88adb1038ec51a77c51340f2790fca08f", "kdf": "pbkdf2", "kdfparams": {"c": 1000000, "dklen": 32, "prf": "hmac-sha256", "salt": "2481268c4f1523849926c676a61fd58c"}, "mac": "82d3a6d212bb2b597a70e16813952d8a42cf33371515d0de5a5fe81898d99ddb"}, "id": "e91a5a58-2230-4449-8507-c5e9fff7f409", "version": 3})
// const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "4a88bc74e23609553ff91c0d6c1cf748"}, "ciphertext": "efdd06cbe19fd600238d6e5130c45486934608996d442f63b8aa88f3b996373b", "kdf": "pbkdf2", "kdfparams": {"c": 100000, "dklen": 32, "prf": "hmac-sha256", "salt": "ea8e185a9b4955e367b64c98ff81f9c2"}, "mac": "c5de701da07451cf2b406976493c0d4d6c953934a0ef05ea35c61d95ef1edaf4"}, "id": "b851d0a6-7334-444c-89fa-40ba6525e328", "version": 3})
const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "3419a57b4c538ad85d96c98aaabfb014"}, "ciphertext": "6022f4c01f0f1f9266c6dbb7d0470d80889815e5c2185f03031e2fcf63f75484", "kdf": "pbkdf2", "kdfparams": {"c": 100, "dklen": 32, "prf": "hmac-sha256", "salt": "b2ad51463e554cfab06fc5ca5cba10ce"}, "mac": "0b5057cac137c1762c8ce10b89609da430e53bab0681aa2a6b3ba466169d80eb"}, "id": "42b6bc6b-7919-4e78-a402-8f54c9741d80", "version": 3})

function Container({jsonWallet, setPrivateKey}) {
    const [decrypting, setDecrypting] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()

    const decrypt = async (password) => {
        if (password) {
            setDecrypting(true)
            setError("")
            try {
                const wallet = await decryptWallet(jsonWallet, password)
                setPrivateKey(wallet.signingKey.privateKey)
                history.push("/")
            } catch (e) {
                setError(e.toString())
            } finally {
                setDecrypting(false)
            }
        }
    }

    return <LoadWalletComponent jsonWallet={jsonWallet} onDecrypt={decrypt} decrypting={decrypting} error={error}/>
}

const mapStateToProps = (state, ownProps) => {

    return {
        jsonWallet: getJSonWallet(state)
    }
}

const mapDispatchToProps = {
    setPrivateKey: setPrivateKey
}

export const LoadWalletContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
