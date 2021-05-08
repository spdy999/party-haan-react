import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
          <AccessAlarmIcon />
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
