import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'

const previewStyle = {
  height: 240,
  width: '100%',
  marginTop: '40px',
}

function App() {
  const [ showQrReader, setQrReader ] = useState(false);
  const [qrResult, setQrResult] = useState(); 
  return (
    <Fragment>
      {!showQrReader ? (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => setQrReader(true)}>Camera</button>
          </header>
        </div>
      ) : (
        <div>
          <button style={{ marginTop: '20px', marginLeft: '20px' }} onClick={() => setQrReader(false)}>Back</button>
          <QrReader
            legacyMode
            delay={300}
            facingMode={"environment"}
            style={previewStyle}
            onError={(err) => console.log(err)}
            onScan={(scan) => {
              if(scan && qrResult !== scan) setQrResult(scan.text);
            }}
          />
          <p>{qrResult}</p>
        </div>
      )}
    </Fragment>
  );
}

export default App;
