import React from 'react';

export function HomeComponent(props) {
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
          <a href={"/pay"} >Zahlen</a>
          <a href={"/receive"}>Empfangen</a>
      </div>
      <div style={{}}>
          <a href={"scanQR"}>Qr Code Scannen</a>
        <a href={"myQrCode"}>Qr Code Zeigen</a>
      </div>

    </div>
  );
}
