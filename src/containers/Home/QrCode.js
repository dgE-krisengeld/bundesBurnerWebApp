import React from 'react';
import {QrCodeComponent} from '../../components/Home/QrCode';
import {connect} from "react-redux";
import parse from "url-parse"
import { useHistory } from "react-router-dom";
import { setWalletJSon} from "../../state/wallet/actions";

export function Container(props) {
  let history = useHistory();

  return <QrCodeComponent onScan={(data) => {

    console.log('on scan data', data)
    if(data) {
      if(data.startsWith("https://")) {
        const link = parse(data, true)

        if(link?.query?.keystore) {
          props.setWalletJSon(link.query.keystore)
          history.push("/loadWallet");
          return;
        }

        if(link?.query?.send && link?.query?.address) {
          history.push(`/pay/${link?.query?.address}/${link?.query?.send}`);

          return;
        }
        console.log(link)
      } else {
        props.setWalletJSon(data)
        history.push("/loadWallet");
      }

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
