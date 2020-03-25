import React, {useState} from 'react';
import QrReader from 'react-qr-reader'

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

