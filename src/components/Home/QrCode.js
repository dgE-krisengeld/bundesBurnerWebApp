import React, {useState} from 'react';
import QrReader from 'react-qr-reader'
export function QrCodeComponent() {
    const [result, setResult] = useState(null)
    const previewStyle = {
        height: 240,
        width: 320,
    }

    const handleScan = (data) => {
        setResult(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
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

