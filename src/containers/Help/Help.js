import React from "react"
import Button from "@material-ui/core/Button"
import { setPrivateKey, setWalletJSon } from "../../state/wallet/actions"
import { getPrivateKey } from "../../state/wallet/selector"
import { connect } from "react-redux"

const Container = ({ setPrivateKey, setWalletJSon }) => {
  const onDelete = () => {
    setPrivateKey(null)
    setWalletJSon(null)
  }

  return (
    <div>
      <h2>Help</h2>
      <div style={{ fontSize: 24 }}>Was ist DiGi token</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        eveniet facere facilis, libero provident quia ratione rem repellendus,
        saepe sapiente tempora ut! Atque debitis illo laboriosam nobis officiis
        perspiciatis voluptates!
      </div>
      <div style={{}}>
        <Button variant="contained" onClick={() => onDelete()}>
          Delete Wallet
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    privateKey: getPrivateKey(state),
  }
}

const mapDispatchToProps = {
  setPrivateKey: setPrivateKey,
  setWalletJSon: setWalletJSon,
}

export const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
