import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'

const previewStyle = {
  width: '80%',
  margin: '40px',
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
            delay={300}
            facingMode={"environment"}
            style={previewStyle}
            onError={(err) => console.log(err)}
            onScan={(scan) => {
              if(scan && qrResult !== scan) {
                alert(scan);
                setQrResult(scan);
              }
            }}
          />
          <p style={{ marginLeft: '40px' }}>{qrResult}</p>
        </div>
      )}
    </Fragment>
  );
}

export default App;
