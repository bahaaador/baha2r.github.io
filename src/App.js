import React, { Component } from 'react';
import logo, {ReactComponent as Rlogo} from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bahador Izadpanah
          </p>
          <a
            className="App-link"
            href="mailto:hi@baiz.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hi! 👋
          </a>
        </header>
      </div>
    );
  }
}

export default App;
