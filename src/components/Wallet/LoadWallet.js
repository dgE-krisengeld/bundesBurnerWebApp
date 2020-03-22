import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const QRcode = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 1h10v10H1V1zm2 2v6h6V3H3z" fill-rule="nonzero"/><path d="M5 5h2v2H5z" fill-rule="evenodd"/><path d="M13 1h10v10H13V1zm2 2v6h6V3h-6z" fill-rule="nonzero"/><path d="M17 5h2v2h-2z" fill-rule="evenodd"/><path d="M1 13h10v10H1V13zm2 2v6h6v-6H3z" fill-rule="nonzero"/><path d="M5 17h2v2H5z" fill-rule="evenodd"/><path d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2v6zm0 2v2h-2v-2h2z" fill-rule="nonzero"/></svg>

export function LoadWalletComponent({jsonWallet, onDecrypt, decrypting, error}) {
    const [taxId, setTaxId] = useState("")

    const handleChange = (event) => {
        setTaxId(event.target.value);
    }

    return (
        <div style={{margin: "20px 0", justifyContent: "flex-start"}}>
            {error && <div style={{padding: 20, background: "#ee1a28", fontWeight: "bold"}}>{error}</div>}
            {decrypting && <div style={{padding: 20, background: "#7fee6b", fontWeight: "bold"}}>Bitte warten, wir entsperen Ihren Wallet.</div>}
            Sie versuchen den folgenden Wallet zu laden
            <div style={{maxHeight: 200, overflow: "auto", backgroundColor: '#EEE', borderRadius: 10,
                textAlign: "left",
                margin: "20px 0"}}>{jsonWallet}</div>


                Bitte Ihre Steuernummer eingeben
                <TextField id="taxId"  name={"tax-id"} value={taxId} onChange={handleChange} label={"Steuer-ID"}/>
                <div>
                    <Button onClick={() => onDecrypt(taxId)}>Entsperen</Button>
                </div>
        </div>
    );
}

