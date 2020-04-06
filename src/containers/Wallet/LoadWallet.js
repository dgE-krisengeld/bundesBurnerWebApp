import React, { useState } from "react"
import { connect } from "react-redux"
import { getJSonWallet } from "../../state/wallet/selector"
import { decryptWallet } from "../../utils/Wallet"
import { LoadWalletComponent } from "../../components/Wallet/LoadWallet"
import { setPrivateKey } from "../../state/wallet/actions"
import { useHistory } from "react-router-dom"

function Container({ jsonWallet, setPrivateKey }) {
  const [decrypting, setDecrypting] = useState(false)
  const [error, setError] = useState("")
  const history = useHistory()

  const decrypt = async (password) => {
    if (password) {
      setDecrypting(true)
      setError("")
      setTimeout(async () => {
        try {
          const wallet = await decryptWallet(jsonWallet, password)
          setPrivateKey(wallet.signingKey.privateKey)
          history.push("/")
        } catch (e) {
          setError(e.toString())
        } finally {
          setDecrypting(false)
        }
      }, 1000)
    }
  }

  return (
    <LoadWalletComponent
      jsonWallet={jsonWallet}
      onDecrypt={decrypt}
      decrypting={decrypting}
      error={error}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    jsonWallet: getJSonWallet(state),
  }
}

const mapDispatchToProps = {
  setPrivateKey: setPrivateKey,
}

export const LoadWalletContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
