import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Homepage/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
