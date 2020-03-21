import React, {useState} from 'react';
import QrReader from 'react-qr-reader'
export function QrCodeComponent({onScan}) {
    const [result, setResult] = useState(null)
    const previewStyle = {
        height: "100%",
        width: "100%",
    }

    const handleScan = (data) => {
        setResult(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            <button onClick={() => {
                onScan("https://bundlesburner.com?privatekey=0x0123456789012345678901234567890123456789012345678901234567890123")
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

