import React from 'react';
import './index.scss';

import { PlayerProvider } from './context/PlayerContext';

import AePlayer from './components/AePlayer';

const App = () => {
  return (
    <PlayerProvider>
      <AePlayer />
    </PlayerProvider>
  );
}

export default App;
