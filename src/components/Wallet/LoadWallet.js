import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export function LoadWalletComponent({jsonWallet, onDecrypt, decrypting, error}) {
    const [taxId, setTaxId] = useState("")

    const handleChange = (event) => {
        setTaxId(event.target.value);
    }

    return (
        <div style={{margin: "20px 0", justifyContent: "flex-start"}}>
            {error && <div style={{padding: 20, background: "#ee1a28", fontWeight: "bold"}}>{error}</div>}

            {decrypting && <div
                style={{position: "absolute", right: 0, left: 0, bottom: 0, top: 0, background: "rgba(0,0,0,0.6)", pointerEvents: "none", zIndex: 9999 }}>

                <div style={{marginTop: 200, textAlign: "center", color: '#FFF'}}>Bitte warten, wir entsperen Ihren Wallet.</div>
            </div>
            }
            Sie versuchen den folgenden Wallet zu laden
            <div style={{maxHeight: 200, overflow: "auto", backgroundColor: '#EEE', borderRadius: 10,
                textAlign: "left",
                margin: "20px 0"}}>{jsonWallet}</div>


                Bitte Ihre Steuernummer eingeben
                <TextField id="taxId"  name={"tax-id"} value={taxId} onChange={handleChange} label={"Steuer-ID"}/>
                <div style={{marginTop: 20}}>
                    <Button variant="contained" color="primary" onClick={() => onDecrypt(taxId)}>Entsperen</Button>
                </div>
        </div>
    );
}

