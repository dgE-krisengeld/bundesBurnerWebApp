import React from "react"
import { QrCodeComponent } from "../../components/Home/QrCode"
import { connect } from "react-redux"
import parse from "url-parse"
import { useHistory } from "react-router-dom"
import { setWalletJSon } from "../../state/wallet/actions"

export function Container(props) {
  let history = useHistory()

  return (
    <QrCodeComponent
      onScan={(data) => {
        if (data) {
          if (data.startsWith("https://")) {
            const link = parse(data, true)

            if (link.pathname.startsWith("/open/")) {
              history.push(link.pathname)
            }

            if (link.pathname.startsWith("/pay/")) {
              history.push(link.pathname)
            }
          } else {
            const maybeAJSONWallet = JSON.parse(data)

            if (maybeAJSONWallet.address) {
              props.setWalletJSon(JSON.stringify(data))
              history.push("/loadWallet")
            }
          }
        }
      }}
    />
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  setWalletJSon: setWalletJSon,
}

export const QrCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
