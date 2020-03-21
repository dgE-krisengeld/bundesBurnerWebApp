import { handleActions } from "redux-actions"
import {get} from "lodash-es"
import {SET_PRIVATE_KEY} from "./actions";

export const defaultState = null

export const privateKey = handleActions(
    {
        [SET_PRIVATE_KEY] : (state = null, {payload}) => {
            return payload
        }
    },
    defaultState
)
