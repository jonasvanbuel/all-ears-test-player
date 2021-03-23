// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root-app')
);

