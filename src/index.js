// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import AePlayer from './components/AePlayer';

ReactDOM.render(
  <React.StrictMode>
    <AePlayer />
  </React.StrictMode>,
  document.getElementById('root-ae-player')
);
