import React from 'react';
var QRCode = require('qrcode.react');

export function MyQrCodeComponent() {
  return (
    <div style={{flex: 1, marginTop: 20}}>
      <QRCode value="https://github.com/compojoom/bundesBurnerApp" size={300} />
    </div>
  );
}
