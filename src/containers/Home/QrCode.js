import React from 'react';
import {QrCodeComponent} from '../../components/Home/QrCode';
import {getPrivateKey} from "../../state/wallet/selector";
import {connect} from "react-redux";
import parse from "url-parse"
import { useHistory } from "react-router-dom";
import {setPrivateKey, setWalletJSon} from "../../state/wallet/actions";

export function Container(props) {
  let history = useHistory();

  return <QrCodeComponent onScan={(data) => {

    console.log('on scan data', data)
    if(data) {
      props.setWalletJSon(data)
      history.push("/loadWallet");
    }

  }}/>;
}

const mapStateToProps = (state, ownProps) => {

  return {
  }
}

const mapDispatchToProps = {
  setWalletJSon: setWalletJSon
}

export const QrCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
