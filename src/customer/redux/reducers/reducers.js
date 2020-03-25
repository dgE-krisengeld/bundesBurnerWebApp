import {jsonWallet, privateKey} from "../../state/wallet/reducer";


export default function reducers(state = {}, action) {
    return {
        privateKey: privateKey(state.privateKey, action),
        jsonWallet: jsonWallet(state.jsonWallet, action)
    }
}
