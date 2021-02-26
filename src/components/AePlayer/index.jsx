import React, { useContext } from 'react';
import './index.scss';

import { PlayerContext } from '../../context/PlayerContext'

// Subcomponents
import Chapter from './subComponents/Chapter';

const AePlayer = () => {
  const { player } = useContext(PlayerContext);
  const { chapters } = player;

  return (
    <div id="ae-player">
      {chapters.map((chapter) => (
        <Chapter key={chapter.count} chapter={chapter} />
      ))}
    </div>
  );
}

export default AePlayer;
