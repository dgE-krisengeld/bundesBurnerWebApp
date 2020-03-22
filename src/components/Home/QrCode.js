import React, {useState} from 'react';
import QrReader from 'react-qr-reader'
const encryptedJSON = JSON.stringify({"address": "cab32842eae777945f55d291756a69d48bc81ece", "crypto": {"cipher": "aes-128-ctr", "cipherparams": {"iv": "3419a57b4c538ad85d96c98aaabfb014"}, "ciphertext": "6022f4c01f0f1f9266c6dbb7d0470d80889815e5c2185f03031e2fcf63f75484", "kdf": "pbkdf2", "kdfparams": {"c": 100, "dklen": 32, "prf": "hmac-sha256", "salt": "b2ad51463e554cfab06fc5ca5cba10ce"}, "mac": "0b5057cac137c1762c8ce10b89609da430e53bab0681aa2a6b3ba466169d80eb"}, "id": "42b6bc6b-7919-4e78-a402-8f54c9741d80", "version": 3})

export function QrCodeComponent({onScan}) {
    const [result, setResult] = useState(null)
    const previewStyle = {
        height: "100%",
        width: "100%",
    }

    const handleScan = (data) => {
        // setResult(data)

        onScan(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            <button onClick={() => {
                onScan(encryptedJSON)
            }}>scanned</button>
        <QrReader
            delay={100}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
        />
                <p>{result}</p>


        </div>
    );
}

