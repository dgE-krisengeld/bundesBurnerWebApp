import React, {useState} from 'react';
import QrReader from 'react-qr-reader'
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"

export function WalletComponent({wallet}) {
    const history = useHistory()

    if (!wallet) {
        return (

            <div><a href="/scanQR">Load wallet</a></div>
            )
    }

    return (
        <div>
            <div
                style={{
                    flexDirection: 'column',
                    justifycontent: 'center',
                    alignItems: 'center',
                    margin: 20,
                }}>
                <div style={{fontSize: 38}}>20</div>
                <div>DiGi tokens</div>
            </div>
            <div style={{}}>
                <Button variant="contained" onClick={() => history.push("/pay")}>Zahlen</Button>
                <Button variant="contained" onClick={() => history.push("/receive")}>Empfangen</Button>
            </div>
            <div style={{}}>
                <Button variant="contained" onClick={() => history.push("/scanQR")}>Qrcode scan</Button>
                <Button variant="contained" onClick={() => history.push("/myQrCode")}>QrCode zeigen</Button>

            </div>
        </div>
    );
}

