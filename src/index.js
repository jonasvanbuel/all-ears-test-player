// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';

import AccessCodeRouter from './AccessCodeRouter';

ReactDOM.render(
  <React.StrictMode>
    <AccessCodeRouter />
  </React.StrictMode>,
  document.getElementById('root-app')
);

