import { handleActions } from "redux-actions"
import {get} from "lodash-es"
import {SET_PRIVATE_KEY, SET_WALLET_JSON} from "./actions";

export const defaultState = null

export const privateKey = handleActions(
    {
        [SET_PRIVATE_KEY] : (state = null, {payload}) => {
            return payload
        },
    },
    defaultState
)

export const jsonWallet = handleActions(
    {
        [SET_WALLET_JSON] : (state = null, {payload}) => {
            return payload
        }
    },
    defaultState
)
