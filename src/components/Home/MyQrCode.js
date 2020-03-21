import React from 'react';
var QRCode = require('qrcode.react');

export function MyQrCodeComponent() {
  return (
    <div style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <QRCode value="https://github.com/compojoom/bundesBurnerApp" size={250} />
    </div>
  );
}
