import { handleActions } from "redux-actions"
import { SET_PRIVATE_KEY, SET_WALLET_JSON } from "./actions"

export const defaultState = null

export const privateKey = handleActions(
  {
    // eslint-disable-next-line no-unused-vars
    [SET_PRIVATE_KEY]: (state = null, { payload }) => {
      return payload
    },
  },
  defaultState
)

export const jsonWallet = handleActions(
  {
    // eslint-disable-next-line no-unused-vars
    [SET_WALLET_JSON]: (state = null, { payload }) => {
      return payload
    },
  },
  defaultState
)
