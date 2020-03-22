import React, {useState} from 'react';
import QrReader from 'react-qr-reader'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CenterFocus from '@material-ui/icons/CenterFocusWeak';
import {useHistory} from "react-router-dom"

const QRcode = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 1h10v10H1V1zm2 2v6h6V3H3z" fill-rule="nonzero"/><path d="M5 5h2v2H5z" fill-rule="evenodd"/><path d="M13 1h10v10H13V1zm2 2v6h6V3h-6z" fill-rule="nonzero"/><path d="M17 5h2v2h-2z" fill-rule="evenodd"/><path d="M1 13h10v10H1V13zm2 2v6h6v-6H3z" fill-rule="nonzero"/><path d="M5 17h2v2H5z" fill-rule="evenodd"/><path d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z" fill-rule="nonzero"/></svg>

export function WalletComponent({wallet, onDelete, balance}) {
    const history = useHistory()

    if (!wallet) {
        return (

            <div><a href="/scanQR">Load wallet</a></div>
            )
    }

    return (
        <div style={{textAlign: "center"}}>
            <div
                style={{
                    flexDirection: 'column',
                    justifycontent: 'center',
                    alignItems: 'center',
                    marginTop: 50,
                }}>
                <div style={{fontSize: 48}}>{balance}</div>
                <div>dgE tokens</div>
            </div>

            <div style={{}}>
                <Button variant="contained" onClick={() => onDelete()}>Delete Wallet</Button>

            </div>

            <div>
                <IconButton aria-label="delete">
                    <div><CenterFocus /></div>
                    <div>QR Code</div>
                </IconButton>
            </div>
            <div style={{position: "absolute",
                bottom: 60, flex: 1, left: -10, right: -10, padding: "0 40px", display: "flex", justifyContent: "space-between"}}>
                <Button variant="contained" onClick={() => history.push("/pay")} style={{width: "100%"}} color="primary">Zahlen</Button>


            </div>
        </div>
    );
}

