import React from 'react';
import './index.scss';

import { PlayerProvider } from './components/Player/context/PlayerContext.js';

import Player from './components/Player/Player';

const App = () => {
  return (
    <Player />
  );
}

export default App;
