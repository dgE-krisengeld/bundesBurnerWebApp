import { createAction } from "redux-actions"

export const SET_PRIVATE_KEY = "SET_PRIVATE_KEY"
export const SET_WALLET_JSON = "SET_WALLET_JSON"

export const setPrivateKey = createAction(SET_PRIVATE_KEY)
export const setWalletJSon = createAction(SET_WALLET_JSON)
