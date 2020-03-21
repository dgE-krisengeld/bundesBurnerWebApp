import React from 'react';
import {QrCodeComponent} from '../../components/Home/QrCode';
import {getPrivateKey} from "../../state/wallet/selector";
import {connect} from "react-redux";
import parse from "url-parse"
import { useHistory } from "react-router-dom";
import {setPrivateKey} from "../../state/wallet/actions";

export function Container(props) {
  let history = useHistory();

  return <QrCodeComponent onScan={(link) => {
    const parsedLink = parse(link, true)

    props.setPrivateKey(parsedLink.query.privatekey)
    history.push("/");
  }}/>;
}

const mapStateToProps = (state, ownProps) => {

  return {
    privateKey: getPrivateKey(state)
  }
}

const mapDispatchToProps = {
  setPrivateKey: setPrivateKey
}

export const QrCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
