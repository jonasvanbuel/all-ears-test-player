// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';

import Player from './Player/Player';

ReactDOM.render(
  <React.StrictMode>
    <Player />
  </React.StrictMode>,
  document.getElementById('root-player')
);

