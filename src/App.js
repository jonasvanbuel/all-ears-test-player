import React from 'react';
import './index.scss';

import { PlayerProvider } from './context/PlayerContext';

import Player from './components/Player';

const App = () => {
  return (
    <PlayerProvider>
      <Player />
    </PlayerProvider>
  );
}

export default App;
