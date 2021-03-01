import React, { useContext } from 'react';
import './index.scss';

import { PlayerContext } from '../../context/PlayerContext'

// Subcomponents
import Chapter from './subComponents/Chapter';
import { ChapterProvider } from '../context/ChapterContext';

const Player = () => {
  const { player } = useContext(PlayerContext);
  const { chapters } = player;

  return (
    <div id="player">
      {chapters.map((chapter) => (
        <ChapterProvider key={chapter.count}>
          <Chapter key={chapter.count} chapter={chapter} />
        </ChapterProvider>
      ))}
    </div>
  );
}

export default Player;
