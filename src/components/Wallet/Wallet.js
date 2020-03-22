import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"


export function WalletComponent({wallet, onDelete, balance}) {
    const history = useHistory()

    if (!wallet) {
        return (
            <div style={{textAlign: "center", marginTop: 150}}>
                <Button variant="contained" color="primary" onClick={() => {
                    history.push("scanQR")
                }}>Geldbörse laden</Button>
            </div>
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



            <div style={{position: "absolute",
                bottom: 80, flex: 1, left: -10, right: -10, padding: "0 40px", display: "flex", justifyContent: "space-between"}}>
                <Button variant="contained" onClick={() => history.push("/pay")} style={{width: "100%"}} color="primary">Geld senden</Button>
            </div>
        </div>
    );
}

